// Polyfill window
global.window = {};

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
