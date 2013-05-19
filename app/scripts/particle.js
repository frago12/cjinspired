(function(window, undefined) {
	'use strict';

	var Particle = function() {
		// speed.x range = -2.5 to 2.5
		// speed.y range = -15 to -5 to make it move upwards
		this.speed = { x:-2.5+Math.random()*5, y:-15+Math.random()*10 };

		// location = mouse coorddinates
		if (mouse.x && mouse.y) this.location = { x: mouse.x, y: mouse.y };
		else this.location = { x: W/2, y: H/2 };

		// radius range = 10 to 30
		this.radius = 10 + Math.random()*20;

		// life range = 20 to 30
		this.life = 20 + Math.random()*10;
		this.remaining_life = this.life;

		// colors
		this.r = Math.round( Math.random() * 255 );
		this.b = Math.round( Math.random() * 255 );
		this.g = Math.round( Math.random() * 255 );
	}

window.Particle = Particle;
})(window);