# 项目模板 CLI 工具

一个用于创建项目模板的命令行界面工具。支持多种模板，方便快速创建新项目。

## 使用方法

### 列出所有可用模板

使用以下命令列出所有可用的模板：

```bash
npx kazoottt-template-cli ls
```

### 创建新项目

使用以下命令创建新项目，需要指定模板名称和项目名称：

```bash
npx kazoottt-template-cli create <template-name> <project-name>
```

例如，使用 `cloudflare-remix-nextui` 模板创建名为 `my-new-project` 的项目：

```bash
npx kazoottt-template-cli create cloudflare-remix-nextui my-new-project
```

### 显示帮助信息

使用以下命令显示所有可用命令及其描述：

```bash
npx kazoottt-template-cli help
```

## 项目模板

当前支持的模板包括：

* `cloudflare-remix-nextui`: 使用 Remix 和 NextUI 创建的 Cloudflare Workers 项目模板。
* `cloudflare-remix-shadcn`: 使用 Remix 和 Shadcn 创建的 Cloudflare Workers 项目模板。

## 许可证

本项目根据 MIT 许可证发布。

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/kazoottt-template-cli?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/kazoottt-template-cli
[npm-downloads-src]: https://img.shields.io/npm/dm/kazoottt-template-cli?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/kazoottt-template-cli
[bundle-src]: https://img.shields.io/bundlephobia/minzip/kazoottt-template-cli?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=kazoottt-template-cli
[license-src]: https://img.shields.io/github/license/kazoottt/kazoottt-template-cli.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/kazoottt/kazoottt-template-cli/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/kazoottt-template-cli
