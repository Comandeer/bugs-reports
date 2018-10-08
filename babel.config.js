module.exports = function ( api ) {
	api.cache( true );

	return {
		presets: [
			'minify'
		],

		shouldPrintComment() {
			return true;
		}
	};
}
