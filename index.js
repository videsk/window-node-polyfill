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
    getItem(key = '') {
        return this.store[key];
    },
    setItem(key = '', value = '') {
        this.store[key] = value;
    },
    removeItem(key = '') {
        delete this.store[key];
    },
    clear() {
        this.store = {};
    }
};

global.sessionStorage = {
    store: {},
    getItem(key = '') {
        return this.store[key];
    },
    setItem(key = '', value = '') {
        this.store[key] = value;
    },
    removeItem(key = '') {
        delete this.store[key];
    },
    clear() {
        this.store = {};
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
