(function(window, undefined) {

	function AutomatedGameObject() {

	}

	var a = AutomatedGameObject.prototype = new GameObject();

		a.simpleEasing = function(easing, targetX, targetY) {
			var easing = easing ? easing : 0.2,
				targetX = targetX ? targetX : 0,
				targetY = targetY ? targetY : 0;

			this.vx = ( targetX - this.location.x ) * easing;
			this.vy = ( targetY - this.location.y ) * easing;

			this.location.x += this.vx;
			this.location.y += this.vy;
		}

window.AutomatedGameObject = AutomatedGameObject;
})(window);