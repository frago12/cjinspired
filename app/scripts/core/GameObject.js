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
}

var g = GameObject.prototype;

	/* 
	* Constructor 
	*/
	g._initialize = function(context) {
		if (typeof context === undefined) return false;
		this.stg = context;
		
		var date = new Date
		this.uid = date.getTime();
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
