(function(window, undefined) {

	function AutomatedGameObject() {

	}

	var a = AutomatedGameObject.prototype = new GameObject();

		a.applyMovement = function( movement ) {
			switch( movement ) {

				case 'simpleEasing':
					this._simpleEasing();
					break;

				default:
					break;

			}
		}

		a._simpleEasing = function() {
			var easing = 0.2,
				targetX = 100,
				targetY = 100;

			this.vx = ( targetX - this.location.x ) * easing;
			this.vy = ( targetY - this.location.y ) * easing;

			this.location.x += this.vx;
			this.location.y += this.vy;
		}

window.AutomatedGameObject = AutomatedGameObject;
})(window);