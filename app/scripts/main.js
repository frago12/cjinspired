(function(window, undefined) {
	'use strict';

	var stage = new GameStage( window.document.getElementById('stage') ),
		p1 = new Player(),
		automatedPlayer = new AutomatedPlayer();

	stage.addGameObject( automatedPlayer );
	// stage.addGameObject( p1 );

	stage.addMouseEvent('click', [ 
		{object: automatedPlayer, fn: automatedPlayer._click_move} 
	]);

})(window);