const { rollup } = require( 'rollup' );
const options = {
	input: 'test.js',
	output: {
		name: 'output.js',
		format: 'iife',
		banner: '/* whatever */'
	}
};

rollup( options ).then( ( bundle ) => {
	return bundle.generate( options );
} ).then( ( { output } ) => {
	console.log( output );
} ).catch( console.error );
