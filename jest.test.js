'use strict';

it('errors produced invalid URLs are instances of Error', async () => {
    let error;

    try {
        new URL('http://(a|b).loclhost:80a/')
    } catch (e) {
        error = e;
    }

    expect(error).toBeTruthy();
    expect(error instanceof TypeError).toBe(true);
    expect(error instanceof Error).toBe(true);
});