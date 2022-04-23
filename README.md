# Glass Octopus

_Easily overlay markers on top of images._

Glass Octopus is a lightweight tool that allows you to easily inject a `Glass` (image) into any HTML element and place multiple Octopuses (markers) over it using JavaScript.

![Image showing Glass Octopus in action](glassoct.jpg)

_Glass Octopus in action_

_Image courtesy of [howling red](https://unsplash.com/@howlingred70?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/everest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)._

<br/>

**Contents**

- [Glass Octopus](#glass-octopus)
  - [Getting Started](#getting-started)
  - [Demo](#demo)
  - [Docs](#docs)

<br/>

## Getting Started

1. Clone this repo.

2. Add the Glass Octopus CSS Stylesheet to your `head` tag:

```html
<link href="../src/glass.css" rel="stylesheet" />
```

3. Create an element to inject the image into in `body` tag:

```html
<div id="inject" style="width: 500px;"></div>
```

4. Import the Glass Octopus JS library:

```html
<script src="../src/glassoct.js"></script>
```

5. Add the following script at the body of your `body` tag, replacing `path/to/your/file.jpg` with the actual path of your image:

```html
<script>
  // Create a Glass object and inject it into an existing element with the `injectGlass` shorthand
  var glass = injectGlass(
    document.getElementById("inject"),
    "path/to/your/file.jpg"
  );

  // Add a default Octopus (marker) at x=100, y=100
  glass.addOctopus(100, 100);
</script>
```

**BOOM! There you go!**

Note that Glass Octopus automatically resizes the image to fit your container!

<br/>

## Demo

Check out the demo file at [demo/index.html](./demo/index.html).

<br/>

## Docs

### `glassoct.js` Functions

#### `injectGlass(element, imagePath)` function

This is a shorthand to create a new `Glass` object (see [`Glass` Class](#glass-class) below) and attach it to an HTML element.

**Arguments**:

- `element`: HTML element to attach Glass object to
- `imagePath`: string representing path to image file

**Optional Arguments**:

- _none_

**Returns**:

a `Glass` object

**Example**:

```js
var glass = injectGlass(document.getElementById("inject"), "image.jpg");
```

---

### `Glass` Class

#### Class Constructor Method

This initialises a new `Glass` object.

**Arguments**:

- `imagePath`: string representing path to image file

**Optional Arguments**:

- _none_

**Returns**:

a `Glass` object

**Example**:

```js
var glass = new Glass("image.jpg");
```

<br/>

#### `Glass.attach(element, fit)` method

This attaches the Glass to a particular HTML element and fills that element with the image of the Glass.

**Arguments**:

- `element`: HTML element to attach `Glass` object to

**Optional Arguments**:

- `fit`: string representing CSS `object-fit` property of the image. It specifies how the image resizes to fit its container. This defaults to:
  ```js
  "contain";
  ```
  Other possible values include:
  - `"cover"`: image is cropped to fit
  - `"contain"`: image is resized to fit, but keeps aspect ratio
  - `"fill"`: image is resized to fit, but aspect ratio may be changed to fully fill container
  - `"none"`: image not resized
  - `"scale-down"`: image is scaled down to smallest version of `"none"` or `"contain"`.

**Returns**:

_none_

**Example**:

```js
var glass = new Glass("image.jpg");
glass.attach(document.getElementById("inject"));
```

<br/>

#### `Glass.addOctopus(x, y, config)` method

This adds an Octopus (marker) to the Glass. Each Octopus consists of an Octopus Head (a central marker), and an Octopus Tail (an animated ring around the marker).

**Arguments**:

- `x`: integer representing x-coordinate of Octopus. Note `x=0` at the left of the image.
- `y`: integer representing y-coordinate of Octopus. Note `y=0` at the top of the image.

**Optional Arguments**:

- `config`: JavaScript Object that defines the configuration of the Octopus. This defaults to:

  ```js
  {
    radius: 7,
    margin: 5,
    headColor: "#42e39d",
    tailColor: null,
    headOpacity: 1,
    tailOpacity: 0.5
  }
  ```

  An Object modifying any of these attributes may be passed into the function.

  Attributes:

  - `radius`: integer representing radius of the Octopus Head
  - `margin`: integer representing width of the Octopus Tail
  - `headColor`: string representing color of the Octopus Head
  - `tailColor`: string representing color of the Octopus Tail (defaults to `headColor` when left as `null`)
  - `headOpacity`: float representing opacity of the Octopus Head
  - `tailOpacity`: float representing opacity of the Octopus Tail

**Returns**:

array containing HTML element of Octopus Head, and HTML element of Octopus Tail

**Example**:

```js
var glass = new Glass("image.jpg");
glass.attach(document.getElementById("inject"));

glass.addOctopus(100, 100, { radius: 11, margin: 8 });
```

---
