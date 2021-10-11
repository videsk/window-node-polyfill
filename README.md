# Window polyfill for NodeJS

Nodejs doesn't have `window` object (obviously, not?). So, when you want to test pure Javascript or Typescript code that have `window` dependencies like `localStorage` and many more that are only able on browsers, your tests will not works, because you will get the `XXXX is not defined` error.

So, this library was designed to use in Node testing environment with mocha, chai, etc. where have browsers APIs dependencies. Some features of browsers was don't do what do you want like `document.createElement('div')`, but will returns you an object where you have access to properties and functions.

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

- `window`
- `window.localStorage`
- `window.sessionStorage`
- `document`
- `document.createElement`
- `document.body`
- `document.body.appendChild`
- `window.location`
- `window.top`
- `window.parent`

## Storage

```js
// window.localStorage or window.sessionStorage
window.localStorage.getItem('my-key');
window.localStorage.setItem('my-key', 'my-value');
window.localStorage.removeItem('my-key');
``` 

## Document

```js
const element = document.createElement('div');
typeof element // object
```

## Contributions

If you want add more properties, you're welcome, so send you PR or issue with feature request.

## Copyrights

LGPL-2.1 License - By Videsk™

