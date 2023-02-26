import dts from 'rollup-plugin-dts';

export default {
	input: {
		cts: './dist/cjsModule.d.cts',
		mts: './dist/esmModule.d.mts'
	},
	output: {
		dir: './types'
	},
	plugins: [
		dts()
	]
};