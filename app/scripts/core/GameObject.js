(function(window) {
'use strict';

var GameObject = function() {

	// Reference to the canvas.context
	this.stg = null;

	// Uniq id of the game object
	this.uid = null;

	// State of the game object. If this is "false" the object
	// will not be rendered on the canvas
	this.active = true;

	// Speed of the game object in X axis
	this.vx = 1;

	// Speed of the game object in Y axis
	this.vy = 1;

	// Screen location of the game object
	this.location = {
		x : 0,
		y : 0
	}


}

var g = GameObject.prototype;

	/* 
	* Constructor 
	*/
	g._initialize = function(context) {
		if (typeof context === undefined) return false;
		this.stg = context;

		// Init default position of the game object
		this.location.x = this.stg.canvas.width / 2;
		this.location.y = this.stg.canvas.height / 2;
		
		// Init inuq id
		this.uid = (new Date()).getTime();
	}

	/*
	* Logic for Game objects
	*/
	g.update = function() {
		return null;
	}

	/*
	* Draw game objects
	*/
	g.render = function() {
		return null;
	}

window.GameObject = GameObject;
}(window));
