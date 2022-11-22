# DiBiHo Context _(@digitalcredentials/dibiho-context)_

[![Node.js CI](https://github.com/digitalcredentials/dibiho-context/workflows/Node.js%20CI/badge.svg)](https://github.com/digitalcredentials/dibiho-context/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/dibiho-context.svg)](https://npm.im/@digitalcredentials/dibiho-context)

> NPM package for the DiBiHo JSON-LD context.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [License](#license)

## Background

For use with JSON-LD document loaders (such as [`jsonld-document-loader`](https://github.com/digitalbazaar/jsonld-document-loader)).

## Install

Requires Node.js 14+

```
npm install @digitalcredentials/dibiho-context
```

## Usage

```js
import dibihoCtx from '@digitalcredentials/dibiho-context';
// or
const dibihoCtx = require('@digitalcredentials/dibiho-context');
const {contexts, constants} = dibihoCtx;

dibihoCtx.CONTEXT_URL_V1_1
// 'https://dibiho.org/contexts/openHPI/'

// get context data for a specific version of the context
dibihoCtx.CONTEXT_V1_1
// full context object
```

This package can be used with bundlers, such as [webpack](https://webpack.js.org/), 
in browser applications.

### API

The library exports an object with the following properties:

- `CONTEXT_URL_V1_1`: the url for the dibiho context
- `CONTEXT_V1_1`: the full context object
- `constants`: A Object that maps constants to well-known context URLs. 
- `contexts`: A `Map` that maps URLs to full context data.

## Developing

You may want to edit the existing context, add a new version of the context, or add another URL-to-context mapping.

### Edit existing context

Make your changes to:

[`js/context_v1_1.js`](js/context_v1_1.js)

Be careful, though, because if someone has used your old context to sign an LD-proof, updating the context will break verification if the verifier uses the updated context.

You may want to instead add a new *version* of the context.  

### Add a new version of the context

Add a new context file.  Follow the naming convention used with the existing context file(s).  So, for example, to add v1.2, add a context file called context_v1_2.js.  You'll also want to another url-to-context mapping for your new version

### Add another URL-to-context mapping

Anytime you add a new version of your context file you'll want to add a new url for your context.  You may also want to add an additional URL or URLs for an existing context version.

Either way, add another property (for each new url-to-context mapping) to the exported object of the ['js/constants.js'](js/constants.js) file.  Follow the example of the existing properties.

Also add the property to the exported object of index.js (yes, we duplicate them - by convention?)

### Update the tests:

#### context.spec.js

Adjust the tests to use the constants that you're exporting.

#### rollup.config.js

Make sure the 'namedExports' section lists everything (and nothing more) that you are exporting in index.js, like this example:

```
plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/context.js': [
          'contexts', 'constants', 'CONTEXT_V1_1', 'CONTEXT_URL_V1_1'
        ]
      }
    })
  ]
```

## Publish to NPM

Once your made your changes and your tests are passing (`npm test`), you'll want to publish to NPM.

You should first take the advice given here: [creating-and-publishing-scoped-public-packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

and try to install your package locally with:

```npm install full-path-to-your-dibiho-package-directory```

If all goes well, then bump the version number and publish as explained here:

[updating-your-published-package-version-number](https://docs.npmjs.com/updating-your-published-package-version-number)

All together, though, you'll want to:

```
cd /path/to/package
npm version <update_type>  
npm publish --access public
```

NOTE: replace <update_type> with one of the [semantic versioning release types](https://docs.npmjs.com/about-semantic-versioning) - patch, major, or minor.

This of course assumes that your npm user is registered to publish to @digitalcredentials or to @digitalcredentials/dibiho-context

And if you haven't already, you may need to create your npm user account and/or login, as explained [here](https://docs.npmjs.com/creating-a-new-npm-user-account)

## License

* [MIT License](./LICENSE)


