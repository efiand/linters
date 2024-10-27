# linters [![npm version](https://img.shields.io/npm/v/efiand-linters.svg)](https://www.npmjs.com/package/efiand-linters)

Конфигурации линтеров в проектах @efiand.

```js
// eslint.config.js

import {
	createEslintConfig,
	eslintConfigs,
	eslintSharedCustomRules,
} from 'efiand-linters/stylelint';

let config = eslintConfigs;

// OR
config = createEslintConfig([oneConfig, anotherConfig]);

// OR
config = [...otherConfigs, { rules: eslintSharedCustomRules }];

export default config;
```

```js
// stylelint.config.js

import { stylelintConfig } from 'efiand-linters/stylelint';

export default stylelintConfig;
```

```js
// prettier.config.js

import { prettierConfig } from 'efiand-linters/prettier';

export default prettierConfig;
```
