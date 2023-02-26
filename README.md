# rollup-plugin-dts issue with `.d.cts` and `.d.mts` files

If a `.cts` file or `.mts` file is bundled, it results in the `.d.cts`/`.d.mts` declaration file being generated. However, `rollup-plugin-dts` does not support

## Procedure of reproduction

* Install dependencies using the `npm install` command.
* Run the `npm run build` command.

## Input

Rollup config:

```javascript
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
```

Flow:

* Compile `src/cjsModule.cts` and `esmModule.mts` files to the `./dist` directory using `tsc`.
* Use generated `./dist/cjsModule.d.cts` and `./dist/esmModule.d.mts` files as input for the Rollup.

## Expected output

The `cjsModule.d.ts` and `esmModule.d.ts` files are generated in the `./types` directory.

## Actual Output

Rollup throws an error:

```
[!] RollupError: Unexpected token (Note that you need plugins to import files that are not JavaScript)
dist/esmModule.d.mts (1:8)
1: declare function mjsModule(): string;
           ^
2: export default mjsModule;
    at error (/home/comandeer/repos/other/bugs-reports/node_modules/rollup/dist/shared/rollup.js:261:30)
    at Module.error (/home/comandeer/repos/other/bugs-reports/node_modules/rollup/dist/shared/rollup.js:13642:16)
    at Module.tryParse (/home/comandeer/repos/other/bugs-reports/node_modules/rollup/dist/shared/rollup.js:14319:25)
    at Module.setSource (/home/comandeer/repos/other/bugs-reports/node_modules/rollup/dist/shared/rollup.js:13929:39)
    at ModuleLoader.addModuleSource (/home/comandeer/repos/other/bugs-reports/node_modules/rollup/dist/shared/rollup.js:23894:20)
```
