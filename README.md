# AVA TAP reporter `AggregateError` reproduction

Original error:

```
file:///usr/src/app/node_modules/emittery/index.js:785
                        throw new AggregateError(errors, 'One or more listeners threw an error');
                              ^

AggregateError: One or more listeners threw an error
    at RunStatus.emit (file:///usr/src/app/node_modules/emittery/index.js:785:10) {
  [errors]: [
    TypeError: Cannot set properties of undefined (setting 'stack')
        at dumpError (file:///usr/src/app/node_modules/ava/lib/reporters/tap.js:48:22)
        at TapReporter.writeTest (file:///usr/src/app/node_modules/ava/lib/reporters/tap.js:105:21)
        at TapReporter.writeTimeout (file:///usr/src/app/node_modules/ava/lib/reporters/tap.js:151:10)
        at TapReporter.consumeStateChange (file:///usr/src/app/node_modules/ava/lib/reporters/tap.js:217:10)
        at file:///usr/src/app/node_modules/ava/lib/reporters/tap.js:72:55
        at file:///usr/src/app/node_modules/emittery/index.js:769:13
        at Array.map (<anonymous>)
        at RunStatus.emit (file:///usr/src/app/node_modules/emittery/index.js:767:23)
  ]
}
```

## Reproducing

1.

  ```sh
  npm install
  ```

2.

  ```sh
  npm test
  ```
