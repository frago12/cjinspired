(function(window) {
'use strict';
	
var GameControls = function() {
	this.initialize();
}

var gc = GameControls.prototype;

	gc.initialize = function() {
		window.keydown = {};
		  
		function keyName(event) {
			return jQuery.hotkeys.specialKeys[event.which] || String.fromCharCode(event.which).toLowerCase();
		}

		$(document).bind("keydown", function(event) {
			keydown[keyName(event)] = true;
		});

		$(document).bind("keyup", function(event) {
			keydown[keyName(event)] = false;
		});
	}

	gc.init = function() {
		return false;
	}

window.GameControls = GameControls;
}(window));