// Polyfills

global.document = {
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

global.localStorage = {
    store: {},
    getItem: (key = '') => localStorage.store[key],
    setItem: (key = '', value = '') => {
        localStorage.store[key] = value;
    },
    removeItem: (key = '') => {
        delete localStorage.store[key];
    }
};

global.sessionStorage = {
    store: {},
    getItem: (key = '') => sessionStorage.store[key],
    setItem: (key = '', value = '') => {
        sessionStorage.store[key] = value;
    },
    removeItem: (key = '') => {
        delete sessionStorage.store[key];
    }
};

global.navigator = {
    language: 'en',
};

global.document = {
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

global.location = {
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

global.top = {
    location,
};

global.parent = {
    location,
}

global.window = {
    localStorage,
    sessionStorage,
    navigator,
    document,
    localtion,
};
