(function(window) {
	
var GameStage = function(canvas) {

	var gameObjects = [];
	var callbacks = [];
	

	this.FPS = 30;
	this.color = '#efefef';

	/*
	* Construtor
	*/
	this.initialize = function() {
		//GameStage.prototype = new Stage();
		this.constructor(canvas);
		
		// Init controls
		new GameControls();
		
		// render stage
		this.render();
	};

	/*
	* Render the game stage
	*/
	this.render = function() {
		setInterval(function() {
			update();
			draw();
		}, 1000/this.FPS);
	};

	/*
	* Game logic
	*/
	var update = function() {
		// Exec game objects
		for(var i = 0, len = gameObjects.length; i < len; i++) {
			if (gameObjects[i].active === true) gameObjects[i].update();
		}

		// Exec functions
		for(var i = 0, len = callbacks.length; i < len; i++) {
			
			//callbacks[i]();
			
			callbacks[i].apply(this, Array.prototype.slice.call(arguments, 1));
			
		}
	};

	/* 
	* Draw game objects
	*/
	var draw = proxy(function() {
		this.context().clearRect(0, 0, this.width(), this.height());

		// Render background
		this.context().fillStyle = this.color;
		this.context().fillRect(0, 0, this.width(), this.height());

		// Render game objects
		for(var i = 0, len = gameObjects.length; i < len; i++) {
			if (gameObjects[i].active === true) gameObjects[i].render();
		}
	}, this);

	/*
	* Exec function between the game life cycle according to FPS
	*/
	this.addCallback = function(fn) {
		callbacks.push(fn);
		
	};

	/*
	*  Add game object to the stage
	*/
	this.addGameObject = function(obj) {
		if (obj instanceof GameObject) gameObjects.push(obj);
	};

	/*
	* Delete a game object from the stage
	*/
	this.deleteGameObject = function(obj) {
		for(var i = 0, len = gameObjects.length; i < len; i++) {
			if (gameObjects[i].uid === obj.uid) {
				gameObjects[i].active = false;
			}
		}
	};

	this.initialize();
}

var g = GameStage.prototype = new Stage();

window.GameStage = GameStage;
}(window));