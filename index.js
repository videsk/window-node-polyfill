// Polyfill window
global.window = {};
global.document = {};

window.localStorage = {
    store: {},
    getItem: (key = '') => window.localStorage.store[key],
    setItem: (key = '', value = '') => {
        window.localStorage.store[key] = value;
    },
    removeItem: (key = '') => {
        delete window.localStorage.store[key];
    }
};

window.sessionStorage = {
    store: {},
    getItem: (key = '') => window.sessionStorage.store[key],
    setItem: (key = '', value = '') => {
        window.sessionStorage.store[key] = value;
    },
    removeItem: (key = '') => {
        delete window.sessionStorage.store[key];
    }
};

window.navigator = {
    language: 'en',
};

window.document = {
    createElement: () => ({
        addEventListener: () => {},
        style: {},
        classList: { add: () => {}, remove: () => {} },
        setAttribute: () => {},
        remove: () => {},
    }),
    body: {
        appendChild: () => {},
    },
};

window.location = {
    ancestorOrigins: {},
    assign: () => {},
    reload: () => {},
    replace: () => {},
    toString: () => {},
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    port: '',
    protocol: '',
    search: '',
};

window.top = window.location;
