(function(window) {
'use strict';

var GameObject = function() {

	this.canvas = null;
	this.uid = null;
	this.active = true;

	// this.initialize();
}

var g = GameObject.prototype;

	/* 
	* Constructor 
	*/
	g.initialize = function(context) {
		if (typeof context === undefined) return false;
		this.canvas = context;
		
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
