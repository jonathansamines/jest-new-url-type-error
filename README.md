# jest-new-url-type-error

## Problem

Errors thrown by new URL constructor are not instances of error when jest is used

## Test cases

This repository contains two files with the exact same test:

- `jest.test.js` - Uses the jest test runner to execute the test
- `node.test.js` - Uses only Node.js to execute the test

> Note: For convenience, volta is used to run the test in different Node.js versions

## Using only Node.js

When using Node.js, the test works consistently for every Node.js version:

```bash
volta run --node 14 node node.test.js # PASS
volta run --node 16 node node.test.js # PASS
volta run --node 18 node node.test.js # PASS
```

## Using jest

When using Jest, the test always fails:

```bash
volta run --node 14 npx jest jest.test.js # FAILS
volta run --node 16 npx jest jest.test.js # FAILS
volta run --node 18 npx jest jest.test.js # FAILS
```

```bash
    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      11 |
      12 |     expect(error).toBeTruthy();
    > 13 |     expect(error instanceof TypeError).toBe(true);
         |                                        ^
      14 |     expect(error instanceof Error).toBe(true);
      15 | });

      at Object.toBe (jest.test.js:13:40)
```
