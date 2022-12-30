# Example 1


## Overview
This tiny app, `example-1-app` demonstrates how to use the esbuild CLI and the programmatic version of rollup.


To bundle our scripts run using the rollup CLI following command in this folder:

```
# this will generate a folder `dist-cli` with the final content
npx esbuild --bundle src/index.js --outfile=dist-cli/index.js

# watch mode
npx esbuild --watch --bundle src/index.js --outfile=dist-cli/index.js
```

To bundle our scripts using esbuild's programmatic API, we can call our `build-with-esbuild.js` file like so:


```
node build-with-rollup.js
```



## References
- https://rollupjs.org/guide/en/
- https://www.youtube.com/watch?v=JoduzbC0fdI&list=PLoKaNN3BjQX25ClaSvNpOQxSAIhXoBLSV&index=4
