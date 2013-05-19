(function(window, undefined) {
	'use strict';

	var Particle = function(mouse) {
		var W = window.innerWidth,
			H = window.innerHeight;

		// speed.x range = -2.5 to 2.5
		// speed.y range = -15 to -5 to make it move upwards
		this.speed = { x:-0.5+Math.random()*4, y:-0.5+Math.random()*2 };

		// location = mouse coorddinates
		if (typeof( mouse ) != "undefined" && mouse.x && mouse.y) this.location = { x: mouse.x, y: mouse.y };
		else this.location = { x: W/2, y: H/2 };

		// radius range = 10 to 30
		this.radius = 20;

		// life range = 0 to 10
		this.life = Math.random()*10;
		this.remaining_life = this.life;

		// colors
		this.r = Math.round( Math.random() * 255 );
		this.b = Math.round( Math.random() * 255 );
		this.g = Math.round( Math.random() * 255 );
	}

window.Particle = Particle;
})(window);