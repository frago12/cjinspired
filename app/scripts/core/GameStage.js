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

		// setInterval(function() {
		// 	self.update();
		// 	self.draw();
		// }, 1000/60);
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
			var _callback = this.callbacks[i];
			_callback.fn.apply( _callback.object, Array.prototype.slice.call( _callback.arguments ) );
		}
	};

	/* 
	* Draw game objects
	*/
	gs.draw = function() {
		this.context().clearRect(0, 0, this.width(), this.height());

		// Render background
		this.context().globalCompositeOperation = "source-over";

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
		// this.callbacks.push(fn);
		this.callbacks[0] = fn;
	};

	/*
	*  Add game object to the stage
	*/
	gs.addGameObject = function(obj) {
		if (obj instanceof GameObject) {
			obj._initialize( this.context() );
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

	/*
	* Register mouse events to the stage
	*/
	gs.addMouseEvent = function(eventName, actions) {
		var self = this,
			_fn = function(e) {
			for ( var i=0,len=actions.length; i<len; i++ ) {
				var action = actions[i];
				
				action.arguments = [e];
				self.addCallback( action );
			}
		}

		switch (eventName) {
			
			case 'click':
				this.canvas.addEventListener('click', _fn);
				break;
			
			case 'mousedown':
				this.canvas.addEventListener('mousedown', _fn);
				break;

			case 'mouseup':
				this.canvas.addEventListener('mouseup', _fn);
				break;

			case 'mousemove':
				this.canvas.addEventListener('mousemove', _fn);
				break;

			default:
				break;
		}
	}


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