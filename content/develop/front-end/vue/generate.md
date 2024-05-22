---
title: 手写命令生成 Vue 组件套件
---

# 手写命令生成 Vue 组件套件

## 背景

单个项目业务量越来越大，紧急开发下很多功能点没有时间抽出做成业务组件，为了后续开发能够快速生成项目文件，因此实现该命令。

## 实现

以下是源代码，如果要在自己项目中使用需要修改 srcPath 常量，这是用来指定生成套件的根目录的。

例如 generate.js 放在项目根目录，srcPath 应为：

```js
const srcPath = resolve(__dirname, "src");
```

源代码中的 generate.js 放在 YourProject/src/scripts 目录，以下是文件源代码：

```js
/**
 * 快速生成文件目录，并对 vue 进行代码分离 html|js|css
 *
 * create 2023/05/19 p.m.
 *
 * 使用方法 npm run view-generate [filename] [lang]
 * @filename 在 src 下创建目录并在目录下生成 index.(vue,{js|ts},scss) 3 个文件
 * @lang 业务逻辑文件后缀，即 js | ts
 *
 * # 用法
 * npm run generate views/example
 * npm run generate views/example js
 *
 * # 生成目录及文件
 * | views
 * | -- example
 * | ---- index.scss
 * | ---- index.ts
 * | ---- index.vue
 *
 */
const fs = require("fs");
const path = require("path");

let filename = process.argv[2];
const jsOrTs = process.argv[3] || "ts";
const srcPath = __dirname.substring(0, __dirname.length - "scripts".length);

// 检查参数
const checkedLastString = () => {
  if (!filename) {
    throw new Error("缺少参数（必填），依赖该参数创建文件");
  }
  const lastString = filename.substring(filename.length - 1, 1);
  if (lastString === "/") {
    filename = filename.substring(0, filename.length - 1);
  }
};

/**
 * 检查文件夹是否已创建
 */
const checkedAndMkdirFolder = async (folderPath, folderNames) => {
  if (!folderNames || !folderNames.length) return true;
  const checkPath = path.resolve(folderPath, folderNames[0]);
  const hasFolder = fs.existsSync(checkPath);
  if (!hasFolder) {
    fs.mkdirSync(checkPath);
  }
  folderNames.splice(0, 1);
  checkedAndMkdirFolder(checkPath, folderNames);
};

// 生成 .vue 文件
const generateVueFile = async () => {
  await checkedAndMkdirFolder(srcPath, filename.split("/"));
  console.info("正在生成 .vue 文件");
  const fileContent = `<template>\n<p>{{ msg }}</p>\n</template>\n\n<script ${
    jsOrTs === "ts" ? 'lang="ts"' : ""
  }>\nimport business from './index';\nexport default business;\n</script>`;
  const err = fs.writeFileSync(path.resolve(srcPath, filename, "index.vue"), fileContent);
  if (err) throw new Error(err);
  await generateScssFile();
};

// 生成 .scss 文件
const generateScssFile = async () => {
  console.info("正在生成 .scss 文件");
  const fileContent = ``;
  const err = fs.writeFileSync(path.resolve(srcPath, filename, "index.scss"), fileContent);
  if (err) throw new Error(err);
  await generateTsFile();
};

// 生成 .ts 文件
const generateTsFile = async () => {
  console.info(`正在生成 .${jsOrTs} 文件`);
  const fileContent = `import { defineComponent, ref } from 'vue';
import './index.scss';

export default defineComponent({
  setup (props, { emit }) {
    const msg = ref("${filename}/index.vue");
    return {
      msg
    }
  }
});
  `;

  const err = fs.writeFileSync(path.resolve(srcPath, filename, `index.${jsOrTs}`), fileContent);
  if (err) throw new Error(err);
};

const generateVueComponentFiles = async () => {
  checkedLastString();
  await generateVueFile();
  console.info("已生成文件套件并写入基础内容。");
};

generateVueComponentFiles();
```
