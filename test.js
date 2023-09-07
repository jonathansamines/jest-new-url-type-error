'use strict';

it('errors produced invalid URLs are instances of Error', async () => {
    let error;

    try {
        new URL('http://(a|b).loclhost:80a/')
    } catch (e) {
        error = e;
    }

    expect(error).instanceOf(Error);
});