# Window polyfill for NodeJS

This library was designed to use in Node tesitng environment like mocha testing. If you need test code that use `window` but not DOM elements you maybe need install.

If you don't use a `window` polyfill you will get an error like this:

```js
window is not defined
```

## How to use

First install as dev dependency, **never use in production server**:

```js
npm i @videsk/window-node-polyfill -D
```

Only need add on teh top of the test file, like this:

```js
require('@videsk/window-node-polyfill');
...
```

Then you can access to the current properties:

- localStorage
- sessionStorage

For both cases to access to them is with:

```js
// window.localStorage or window.sessionStorage
window.localStorage.getItem('my-key');
window.localStorage.setItem('my-key', 'my-value');
window.localStorage.removeItem('my-key');
``` 

## Contributions

If you want add more properties, you're welcome, so send you PR or issue with feature request.

## Copyrights

LGPL-2.1 License - By Videsk™

