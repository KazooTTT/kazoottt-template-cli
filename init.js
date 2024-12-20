const fs = require("fs");
const path = require("path");
const process = require("process");
console.log("%c Line:4 🥟 process", "color:#7f2b82", process.argv);

const command = process.argv[2]; // 获取命令参数
const template = process.argv[3]; // 获取模板参数
const projectName = process.argv[4]; // 获取项目名称

// 定义可用命令及其描述
const commands = {
  ls: "列出所有可用模板",
  help: "显示所有可用命令及其描述",
  create: "创建新项目",
};

// 显示帮助信息
function showHelp() {
  console.log("可用命令:");
  for (const [cmd, desc] of Object.entries(commands)) {
    console.log(`- ${cmd}: ${desc}`);
  }
  console.log("\n示例:");
  console.log("创建新项目:");
  console.log("npx kazoottt-template-cli ls");
  console.log(
    "npx kazoottt-template-cli create <template-name> <project-name>"
  );
  console.log(
    "例如: npx kazoottt-template-cli create cloudflare-remix-nextui my-new-project"
  );
  process.exit(0);
}

// 检查命令
if (!command) {
  console.error("未提供命令。");
  showHelp();
}

// 处理命令
if (command === "ls") {
  // 列出所有模板
  const templatesPath = path.join(__dirname, "templates");
  const templates = fs.readdirSync(templatesPath);
  console.log("可用模板:");
  templates.forEach((template) => {
    console.log(`- ${template}`);
  });
  process.exit(0);
}

if (command === "help") {
  showHelp();
}

if (command === "create") {
  if (!template || !projectName) {
    console.error("请提供模板名称和项目名称。");
    process.exit(1);
  }

  // 模板路径
  const templatePath = path.join(__dirname, "templates", template);

  if (!fs.existsSync(templatePath)) {
    console.error(`模板 "${template}" 不存在。`);
    process.exit(1);
  }

  // 创建项目目录
  const projectPath = path.join(process.cwd(), projectName);
  fs.mkdirSync(projectPath, { recursive: true });

  // 复制模板根目录并重命名为项目目录
  fs.cpSync(templatePath, projectPath, { recursive: true });

  console.log(`项目 "${projectName}" 已使用模板 "${template}" 创建。`);
}
