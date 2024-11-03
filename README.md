# linters [![npm version](https://img.shields.io/npm/v/efiand-linters.svg)](https://www.npmjs.com/package/efiand-linters)

Конфигурации линтеров и форматтеров в проектах с кодгайдом @efiand.

## eslint

```js
// eslint.config.js

import { eslintConfigs } from "efiand-linters/eslint";

export default eslintConfigs;
```

## stylelint

```js
// stylelint.config.js

import { stylelintConfig } from "efiand-linters/stylelint";

export default stylelintConfig;
```

## prettier

```js
// prettier.config.js

import { prettierConfig } from "efiand-linters/prettier";

export default prettierConfig;
```
