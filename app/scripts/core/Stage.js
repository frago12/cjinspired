(function(window){

var Stage = function(_canvas) {

  	var canvas = null;

  	/*
  	* Constructor
  	*/
  	this.initialize = function(_canvas) {
  		//if (canvas === undefined) return false;
  		if (typeof (_canvas) === "undefined") return false;
  		
  		// FIX ME: document.body is null
  		canvas = (canvas instanceof HTMLCanvasElement) ? canvas : document.body.appendChild(document.createElement('canvas'));
  		canvas.width = 480;
  		canvas.height = 320;

  		// FIX ME: Should not be existe global variables
  		window.Stage.context = canvas.getContext('2d');
  	}

    /*
    * Get the canvas context
    */
    this.context = function() {
        return canvas.getContext('2d');
    }

  	/*
  	* Set attributes to the canvas
  	*/
  	this.setAttr = function(attr, value) {
	   	canvas[attr] = value;
	  }

	/*
	* Get or set canvas width
	*/
	this.width = function(_width) {
		if (_width === undefined) return canvas.width;
		canvas.width = _width;
	}

	/*
	* Get or set canvas height
	*/
	this.height = function(_height) {
		if (_height === undefined) return canvas.height;
		canvas.height = _height;
	}

  this.initialize(_canvas);
}

window.Stage = Stage;
}(window));