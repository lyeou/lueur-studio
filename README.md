# lueur-studio

# Lueur Studio

Lueur Studio 官方网站的预发布静态草稿，面向 GitHub Pages。公开页面使用英语，当前尚未发布。

## 文件结构

```text
PROJECT_RULES.md          项目最高级品牌、视觉、内容和 UX 参考标准
AGENTS.md                 每次工作前的规则读取和验收要求
docs/STYLE_GUIDE.md        配套视觉指南，冲突时以 PROJECT_RULES.md 为准
site/                     唯一公开部署目录
  index.html              长滚动首页
  styles.css              响应式样式
  fabric-coasters.html    布艺杯垫工作坊详情草稿
  christmas-ornaments.html 季节限定工作坊详情草稿
  privacy.html            当前静态预览的隐私说明
  .nojekyll
.github/workflows/pages.yml GitHub Pages 发布工作流
```

## 本地预览

无需安装依赖或构建。在仓库根目录执行：

```sh
python3 -m http.server 8000 --directory site
```

打开 http://localhost:8000 。所有站内路径均为相对路径，支持 GitHub Pages 仓库子路径。

## 发布到 GitHub Pages

1. 将上述文件上传到目标仓库，保持目录结构。已有同名文件时先比较，不直接覆盖规则文件。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. 工作流默认在推送至 `main` 时执行；使用其他默认分支时修改 `pages.yml` 的分支名。
4. 在 **Actions → Deploy Lueur Studio to GitHub Pages** 查看结果，也可手动 Run workflow。
5. 发布成功后，GitHub Pages 环境会显示实际访问地址。

只部署 `site/`，不公开规则文件、附件或工作目录。

## 发布前待完成

- 已接入用户提供的官方 Logo：`site/lueur studio logo.jpg`，页眉及页脚均引用原文件，保留颜色、笔触和比例。
- 加入真实 Lueur 工作坊成品、制作过程和产品照片。当前布料图形为明确标注的装饰性示意，不是实物证据。
- 确认工作坊日期、时长、价格、场地、材料及政策；未知字段保持 TBC。
- 提供经批准的 Instagram 和联系邮箱。
- 提供邮件订阅服务、隐私主体及同意/退订流程后，才能启用订阅。目前没有数据收集表单。
- 发布产品详情页前，提供真实产品内容；当前 Shop 仅保留 Coming Soon 介绍。
- 完成真实浏览器的桌面、移动端和无障碍检查。

本草稿没有预约、购买、虚假评价、库存、营销追踪或自动收集邮箱。因缺少真实素材和联系配置，尚未满足 PROJECT_RULES.md 的全部上线验收条件。

## 规则

开始任何设计、开发、重构或修改前，完整读取 `PROJECT_RULES.md` 和 `docs/STYLE_GUIDE.md`。P0 修改须用户明确授权；不得将本草稿或其视觉选择视为核心规则变更授权。
