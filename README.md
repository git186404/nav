# WebNav Hub 🇺🇦

一个现代化的个人导航网站，采用乌克兰国旗经典的蓝黄配色方案，提供便捷的网站链接管理和快速访问功能。

![Ukraine Theme](https://img.shields.io/badge/theme-🇺🇦%20Ukraine-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ 特性

- 🎨 **乌克兰主题设计** - 采用经典的蓝黄配色方案（`#0057B7` 和 `#FFDD00`）
- 📱 **完全响应式** - 支持桌面、平板、手机等多种设备
- 🚀 **快速访问** - 分类清晰，一键直达目标网站
- 💫 **流畅动画** - 优雅的悬停效果和过渡动画
- 🌙 **现代化UI** - 渐变背景、阴影效果、毛玻璃特效
- 🎯 **分类导航** - 智能分类：AI搜索、社交媒体、实用工具、科技资讯、云存储、电子邮箱
- 🔗 **平滑滚动** - 点击导航平滑滚动到对应区域

## 🎨 主题配色

| 颜色 | 用途 | 代码 |
|------|------|------|
| 🟦 乌克兰蓝 | 主色调、背景、导航栏 | `#0057B7` |
| 🟨 乌克兰黄 | 强调色、标题、悬停效果 | `#FFDD00` |
| 🟦 深蓝 | 渐变背景底部 | `#003d82` |
| 🟨 金黄 | 标题渐变底部 | `#FFC700` |

## 📦 安装与部署

### 本地运行

1. 克隆或下载此项目
2. 使用浏览器打开 `index.html` 文件

```bash
# 进入项目目录
cd meituan

# 使用本地服务器（可选）
python -m http.server 8000
# 或
npx serve
```

3. 在浏览器中访问 `http://localhost:8000`

### 在线部署

项目是纯静态文件，可以部署到任何静态网站托管服务：

- **GitHub Pages** - 免费托管
- **Netlify** - 一键部署
- **Vercel** - 自动部署
- **Cloudflare Pages** - 全球加速

部署步骤（以GitHub Pages为例）：

```bash
# 1. 初始化git仓库
git init

# 2. 添加文件
git add .

# 3. 提交
git commit -m "Initial commit"

# 4. 推送到GitHub
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main

# 5. 在GitHub仓库设置中启用GitHub Pages
```

## 📁 项目结构

```
meituan/
├── index.html          # 主页面文件
└── README.md          # 项目说明文档
```

## 🎯 功能分类

### AI搜索
包含各类AI搜索引擎和工具：ChatGPT、Claude、Kimi、通义千问、豆包等

### 社交媒体
主流社交平台和部署服务：Facebook、Twitter、Instagram、Vercel、Netlify等

### 实用工具
各类实用工具：翻译、DNS托管、域名注册、代理、图床等

### 科技资讯
科技新闻网站：TechCrunch、Wired、The Verge等

### 云存储
云存储服务：Google Drive、OneDrive、Dropbox等

### 电子邮箱
邮箱服务：Gmail、Outlook、ProtonMail等

## 🛠️ 自定义配置

### 添加新链接

在 `index.html` 中找到对应的分类区域，复制以下模板：

```html
<div class="link-card">
  <a href="https://example.com" target="_blank"></a>
  <i class="fa-solid fa-icon-name"></i>
  <h3>网站名称</h3>
</div>
```

### 添加新分类

1. 在导航栏添加分类链接：

```html
<li><a href="#new-category">新分类</a></li>
```

2. 在主内容区添加分类标题和链接卡片：

```html
<h2 class="category-title" id="new-category">新分类</h2>
<section class="link-grid">
  <!-- 链接卡片 -->
</section>
```

### 修改配色

在 `<style>` 标签的 `:root` 中修改CSS变量：

```css
:root {
  --ua-blue: #0057B7;      /* 乌克兰蓝 */
  --ua-yellow: #FFDD00;    /* 乌克兰黄 */
  --bg-color: #004A9D;     /* 背景色 */
  --card-bg-color: #0066D6; /* 卡片背景色 */
  --text-color: #ffffff;   /* 文字颜色 */
}
```

## 🎨 设计亮点

### 视觉效果
- **渐变背景** - 蓝色渐变营造深度感
- **毛玻璃效果** - 导航栏使用 `backdrop-filter: blur()`
- **悬停动画** - 卡片悬停时上移、缩放、颜色反转
- **装饰元素** - Header底部的蓝黄条纹装饰

### 交互体验
- **平滑滚动** - 点击导航平滑滚动到对应区域
- **URL更新** - 滚动时自动更新URL hash
- **视觉反馈** - 清晰的悬停和激活状态

### 响应式设计
- 支持 1200px、768px、480px、360px 四种断点
- 移动端优化的字体大小和间距
- 自动调整卡片网格布局

## 📱 浏览器兼容性

| 浏览器 | 支持版本 |
|--------|----------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |
| Opera | ✅ 76+ |

## 🔧 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 渐变、动画、弹性布局、网格布局
- **JavaScript (ES6+)** - 平滑滚动、URL管理
- **Font Awesome 7.0** - 图标库

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE.txt) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📮 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 提交 [Issue](https://github.com/your-username/your-repo/issues)
- 发送邮件至：your-email@example.com

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 提供精美图标
- 乌克兰国旗配色灵感

---

<div align="center">

**🇺🇦 Made with ❤️ and Ukraine Theme 🇺🇦**

[⬆ 回到顶部](#webnav-hub-)

</div>
