# rollup@1.26.4 output options issue

When using Rollup API and passing the same options for `rollup#rollup()` and `bundle#generate()`, options for `bundle#generate()` are incorrectly passed.

## Usage

```
npm start
```

## Error

```
Error: You must specify "output.format", which can be one of "amd", "cjs", "system", "esm", "iife" or "umd".
```
