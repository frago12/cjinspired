(function(window, undefined) {

	function AutomatedGameObject() {

	}

	var a = AutomatedGameObject.prototype = new GameObject();

		/*
		* Simple easing animation
		*/
		a.simpleEasing = function(easing, targetX, targetY) {
			var easing = easing ? easing : 0.2,
				targetX = targetX ? targetX : 0,
				targetY = targetY ? targetY : 0;

			this.location.x += ( targetX - this.location.x ) * easing;
			this.location.y += ( targetY - this.location.y ) * easing;
		}

		/*
		* Spring animation
		*/
		a.spring = function(spring, targetX, targetY) {
			var spring = spring ? spring : 0.1,
				targetX = targetX ? targetX : 0,
				targetY = targetY ? targetY : 0;

			var dx = targetX - this.location.x,
				dy = targetY - this.location.y,
				ax = dx * spring,
				ay = dy * spring;

			this.vx += ax;
			this.vx *= this.friction;

			this.vy += ay;
			this.vy *= this.friction;
			
			this.location.x += this.vx;
			this.location.y += this.vy;
		}

window.AutomatedGameObject = AutomatedGameObject;
})(window);