(function(window, undefined) {
	'use strict';

	var Player = function() {
		this.particles = [];

		this.speed = 5;
		this.x = window.innerWidth / 2;
		this.y = window.innerHeight / 2;

		this.initialize();
	}

	var p = Player.prototype = new GameObject();

		p.initialize = function() {
			// this.active = false;

			for (var i=0; i < 30; i++) {
				this.particles.push( new Particle() );
			}
		}

		p.render = function() {
			this.stg.globalCompositeOperation = "lighter";

			// Draw back particles
			for (var i=0,len=this.particles.length; i<len; i++) {
				var p = this.particles[i];

				this.stg.beginPath();

				// Change the opacity according to the lije
				p.opacity = Math.round(p.remaining_life / p.life * 100) / 100;

				// Draw particle
				var gradient = this.stg.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
				gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
				gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
				gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
				this.stg.fillStyle = gradient;


				this.stg.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
				this.stg.fill();
				this.stg.closePath();

				// Lets move particles
				p.remaining_life -= 0.4;
				p.radius -= 0.4;
				p.location.x -= p.speed.x;
				p.location.y -= p.speed.y;

				// regenerate particles
				if (p.remaining_life < 0 || p.radius < 0) this.particles[i] = new Particle();
			}
		}

		p.update = function() {
			// if (keydown.left) {

			// }

			// if (keydown.right) {
				
			// }
		}



	/*
	// Create particles
	var particle_length = 100;
	for (var i=0; i<particle_length; i++) {
		particles.push( new particle() );
	}

	// Drawing particles
	function draw() {
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";

		for (var i=0, len=particles.length; i<len; i++) {
			var p = particles[i];

			ctx.beginPath();

			// changing opacity according to the life
			p.opacity = Math.round(p.remaining_life / p.life*100) / 100;

			// draw particle
			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			ctx.fillStyle = gradient;


			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();

			// Lets move particles
			p.remaining_life--;
			p.radius--;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y;

			// regenerate particles
			if (p.remaining_life < 0 || p.radius < 0) particles[i] = new particle();
		}
	}

	setInterval(draw, 33);*/

window.Player = Player;
})(window);