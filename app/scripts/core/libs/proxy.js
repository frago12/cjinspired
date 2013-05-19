proxy = function( fn, scope ) {
	return function() {
		return fn.apply( ( scope || window ), Array.prototype.slice.call( arguments ) );
	};
}