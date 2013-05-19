(function(window) {
'use strict';
	
var GameStage = function(canvas) {

	this.gameObjects = [];
	this.callbacks = [];
	

	this.FPS = 30;
	this.color = '#000000';

	this.initialize(canvas);
}

var gs = GameStage.prototype = new Stage();

	/*
	* Construtor
	*/
	gs.initialize = function(canvas) {
		Stage.prototype.initialize.call(this, canvas);
		
		// Init controls
		new GameControls();
		
		// render stage
		this.render();
	};

	/*
	* Render the game stage
	*/
	gs.render = function() {
		var self = this;

		(function gameLoop() {
			self.loop();
			requestAnimFrame(gameLoop);
		})();
	};

	/*
	* Game loop
	*/
	gs.loop = function() {
		this.update();
		this.draw();
	};

	/*
	* Game logic
	*/
	gs.update = function() {
		// Exec game objects
		for(var i = 0, len = this.gameObjects.length; i < len; i++) {
			if (this.gameObjects[i].active === true) this.gameObjects[i].update();
		}

		// Exec functions
		for(var i = 0, len = this.callbacks.length; i < len; i++) {
			this.callbacks[i].apply(this, Array.prototype.slice.call(arguments, 1));
			
		}
	};

	/* 
	* Draw game objects
	*/
	gs.draw = function() {
		this.context().clearRect(0, 0, this.width(), this.height());

		// Render background
		this.context().fillStyle = this.color;
		this.context().fillRect(0, 0, this.width(), this.height());

		// Render game objects
		for(var i = 0, len = this.gameObjects.length; i < len; i++) {
			if (this.gameObjects[i].active === true) this.gameObjects[i].render();
		}
	};

	/*
	* Exec function between the game life cycle according to FPS
	*/
	gs.addCallback = function(fn) {
		this.callbacks.push(fn);
		
	};

	/*
	*  Add game object to the stage
	*/
	gs.addGameObject = function(obj) {
		if (obj instanceof GameObject) {
			obj.initialize( this.context() );
			this.gameObjects.push(obj);
		}
	};

	/*
	* Delete a game object from the stage
	*/
	gs.deleteGameObject = function(obj) {
		for(var i = 0, len = this.gameObjects.length; i < len; i++) {
			if (this.gameObjects[i].uid === obj.uid) {
				this.gameObjects[i].active = false;
			}
		}
	};


window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback , element){
			window.setTimeout(callback, 1000 / 60);
		};
})();

window.GameStage = GameStage;
}(window));