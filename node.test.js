'use strict';

const assert = require('assert');

let error;

try {
    new URL('http://(a|b).loclhost:80a/')
} catch (e) {
    error = e;
}

assert.ok(error);
assert.ok(error instanceof TypeError);
assert.ok(error instanceof Error);