# ESLint flat config parsing ignored files

When using flat config in ESLint, the ignored files are still parsed.

## Procedure

1. Install dependencies with `npm install`.
2. Run the `npm run lint` command.

## Expected result

ESLint does not find any errors.

## Actual results

ESLint reports parsing error in the ignored file:

```
ignored.js
  2:2  error  Parsing error: Cannot use keyword 'await' outside an async function
```

ESLint version: 8.45.0
