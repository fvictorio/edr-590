# Reproduction steps

```
pnpm install
node test/test.js
```

The execution doesn't panic with any of these changes:

- If you disable interval mining in the config (removing the `interval: 1000` line from the config)
- If you remove the `const { it } = require("node:test");` line from the test file and run `pnpm hardhat test`, which uses mocha under the hood
