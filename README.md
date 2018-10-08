# babel-preset-minify comments issue

When two adjacent comments are peserved due to `shouldPrintComment` callback or `comments: true` option, whitespace is introduced between them.

## Input

```javascript
/* First comment *//* Second comment */
```

## Output

```javascript
/* First comment */ /* Second comment */
```
