---
title: '使用eslint+prettier+husky规范项目代码风格'
date: 2019-11-05
---

### 写在前面



### 项目配置

#### ESLint

eslint 

babel-eslint

eslint-config-airbnb-base

eslint-plugin-vue

eslint-config-futu

eslint-plugin-import, 不认识webpack别名 ->  eslint-import-resolver-alias 

配置`.eslint.js`和`.eslintignore`文件

#### Prettier





#### 处理Prettier和ESLint的冲突

> 以下内容为Prettier官方文档的翻译

##### Disable formatting rules

[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) is a config that disables rules that conflict with Prettier. Add it to your [`devDependencies`](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file), then extend from it within your `.eslintrc` configuration. Make sure to put it last in the `extends` array, so it gets the chance to override other configs.

```bash
# yarn
yarn add --dev eslint-config-prettier
# npm
npm install --dev eslint-config-prettier
```

Then in `.eslintrc.json`:

```json
{
  "extends": ["prettier"]
}
```

##### Use ESLint to run Prettier

[`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) is a plugin that adds a rule that formats content using Prettier. Add it to your [`devDependencies`](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file), then enable the plugin and rule.

```bash
yarn add --dev eslint-plugin-prettier
```

Then in `.eslintrc.json`:

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

##### Recommended configuration

`eslint-plugin-prettier` exposes a "recommended" configuration that configures both `eslint-plugin-prettier` and `eslint-config-prettier` in a single step. Add both `eslint-plugin-prettier` and `eslint-config-prettier` as developer dependencies, then extend the recommended config:

```bash
yarn add --dev eslint-config-prettier eslint-plugin-prettier
```

Then in `.eslintrc.json`:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```



#### LintStaged和Husky



### 编辑器插件集成

### VSCode



#### WebStorm







