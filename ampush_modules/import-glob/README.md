# import-glob
ES6 import with glob patterns (preloader for Webpack)

Expands globbing patterns for ES6 `import` statements.
```js
import modules from "foo/**/*";
```
Expands into
```js
import * as module0 from "foo/1.js";
import * as module1 from "foo/bar/2.js";
import * as module2 from "foo/bar/3.js";

modules = [module0, module1, module2]
```

## Install
```sh
npm install import-glob --save-dev
```

## Usage
You can use it one of two ways, the recommended way is to use it as a preloader

```js
{
  module: {
    preloaders: [{
      test: /\.js/,
      loader: 'import-glob'
    }]
  }
}
```

Alternatively you can use it as a chained loader
```js
require('!import-glob!foo/bar.js')
```
