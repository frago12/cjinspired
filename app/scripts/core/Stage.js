(function(window){

var Stage = function(canvas) {
  this.initialize(canvas);
}

var s = Stage.prototype;

  /*
  * Constructor
  */
  s.initialize = function(canvas) {
    if (typeof (canvas) === "undefined") return false;
    this.canvas = canvas;
    
    // FIX ME: document.body is null
    this.canvas = (this.canvas instanceof HTMLCanvasElement) ? this.canvas : window.document.body.appendChild(window.document.createElement('canvas'));
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context().fillStyle = 'black';
    this.context().fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  /*
  * Get the canvas context
  */
  s.context = function() {
      return this.canvas.getContext('2d');
  }

  /*
  * Set attributes to the canvas
  */
  s.setAttr = function(attr, value) {
    this.canvas[attr] = value;
  }

  /*
  * Get or set canvas width
  */
  s.width = function(_width) {
    if (_width === undefined) return this.canvas.width;
    this.canvas.width = _width;
  }

  /*
  * Get or set canvas height
  */
  s.height = function(_height) {
    if (_height === undefined) return this.canvas.height;
    this.canvas.height = _height;
  }

window.Stage = Stage;
}(window));