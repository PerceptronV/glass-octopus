class Glass {

  container;
  image;
  markersContainer;
  markers;
  defaultConfig = {
    radius: 7, 
    margin: 5, 
    headColor: "#42e39d", 
    tailColor: null, 
    headOpacity: 1, 
    tailOpacity: 0.5
  };
  defaultConfigKeys = Object.keys(this.defaultConfig);

  constructor(imagePath) {
    this.image = document.createElement("img");
    this.image.src = imagePath;
    this.image.classList.add("glass-oct-img");
    this.markers = [];
  }

  attach(element, fit) {
    if (!(fit)) fit = "contain";

    this.image.style.object_fit = fit;

    this.container = element;
    this.container.appendChild(this.image);

    this.markersContainer = document.createElement("div");
    this.markersContainer.setAttribute("name", "octopuses");
    this.markersContainer.style.position = "none";
    this.container.appendChild(this.markersContainer);
  }

  num2string(num) {
    return parseInt(num).toString();
  }

  position(element, radius, x, y) {
    element.style.left = this.num2string(x - radius) + "px";
    element.style.top = this.num2string(y - radius) + "px";
  }

  circularise(element, radius) {
    element.style.width = this.num2string(radius * 2) + "px";
    element.style.height = this.num2string(radius * 2) + "px";
    element.style.borderRadius = this.num2string(radius) + "px";
  }

  addOctopus(
    x, y, config
  ) {
    if (!(config)) config = {};

    for (let ki in this.defaultConfigKeys) {
      var key = this.defaultConfigKeys[ki];
      if (!(key in config)) config[key] = this.defaultConfig[key];
    }
    
    if (config.tailColor === null) config.tailColor = config.headColor;

    // -------------------------------------------- //

    var head = document.createElement("div");
    this.position(head, config.radius, x, y);
    this.circularise(head, config.radius);
    head.style.backgroundColor = config.headColor;
    head.style.opacity = config.headOpacity;
    head.classList.add("glass-oct-head");

    // -------------------------------------------- //

    var tail = document.createElement("div");
    
    this.position(tail, config.radius + config.margin, x, y);
    this.circularise(tail, config.radius + config.margin);
    tail.style.backgroundColor = config.tailColor;
    tail.style.opacity = config.tailOpacity;
    tail.classList.add("glass-oct-tail");

    // -------------------------------------------- //

    this.markersContainer.appendChild(head);
    this.markersContainer.appendChild(tail);

    this.markers.push([head, tail]);

    return [head, tail];
  }
}

function injectGlass(element, imagePath) {
  var newGlass = new Glass(imagePath);
  newGlass.attach(element);
  return newGlass;
}
