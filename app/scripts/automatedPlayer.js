(function(window, undefined) {

	function AutomatedPlayer() {
		this.initialize();
	}

	var a = AutomatedPlayer.prototype = new GameObject();

		a.initialize = function() {
			console.log( 'init automated player' );
		}

		a.render = function() {
			this.stg.beginPath();
			this.stg.fillStyle = 'red';
			this.stg.arc( 100, 100, 20, Math.PI*2, false );
			this.stg.fill();
			this.stg.closePath();
		}

window.AutomatedPlayer = AutomatedPlayer;
})(window);