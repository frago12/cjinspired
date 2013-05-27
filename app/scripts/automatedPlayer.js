(function(window, undefined) {

	function AutomatedPlayer() {
		this.radius = 20;

		this.initialize();
	}

	var a = AutomatedPlayer.prototype = new AutomatedGameObject();

		a.initialize = function() {
			console.log( 'init automated player' );
		}

		a.render = function() {
			this.stg.beginPath();
			this.stg.fillStyle = 'red';
			this.stg.arc( this.location.x, this.location.y, this.radius, Math.PI*2, false );
			this.stg.fill();
			this.stg.closePath();
		}

		a._click_move = function(e) {
			//console.log( this );
			this.simpleEasing( 0.2, e.pageX, e.pageY );
		}

window.AutomatedPlayer = AutomatedPlayer;
})(window);