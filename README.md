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

## 贡献

如果您想贡献新的模板或功能，请查看我们的 [贡献指南](https://github.com/kazoottt/kazoottt-template-cli/blob/main/CONTRIBUTING.md)。

## 许可证

本项目根据 MIT 许可证发布。
