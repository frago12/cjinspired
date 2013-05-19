(function(window) {

var GameObject = function() {

	this.canvas = null;
	this.uid = null;
	this.active = true;

	/*
	* Constructor
	*/
	this.initialize = function() {
		if (typeof Stage.context === undefined) return false;
		this.canvas = Stage.context;
		
		var date = new Date
		this.uid = date.getTime();
	}

	/*
	* Logic for Game objects
	*/
	this.update = function() {
		return null;
	}

	/*
	* Draw game objects
	*/
	this.render = function() {
		return null;
	}

	this.initialize();
}

var go = GameObject.prototype;

	go.babies = [];
	go.createBaby = function() {
		var obj = { nombre: 'chuck' };
		this.babies.push(obj);
	}

window.GameObject = GameObject;
}(window));
