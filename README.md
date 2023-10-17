# 7Wate 知识库

> Always For Freedom.
> 一个喜欢异想天开的家伙 💨

我在这里记录知识，希望对你也有帮助。👉👉👉 [English README](README_EN.md)

![站点首页](static/img/index.jpg)

## 目录

```markdown
Wiki
├─ 博客
├─ 维基
│    ├─ 基础入门
│    ├─ 程序设计语言
│    ├─ 数据结构与算法
│    ├─ 计算机组成
│    ├─ 计算机网络
│    ├─ 操作系统
│    ├─ 数据库系统
│    ├─ 计算机系统安全
│    ├─ 软件工程
│    └─ 编译原理
├─ 职业
│    ├─ 求职之路
│    ├─ SRE 工程师
│    ├─ Data 工程师
│    └─ Front-End 工程师
├─ 组织
│    ├─ 开源社区
│    ├─ 现代企业
│    └─ 国家政府
├─ 生活
└─ 日志
```

## 分支

```markdown
Main 主分支
├─ dev 合并分支
├─ mac 移动分支
└─ phone 移动分支
```

## CI&CD

 - build.yml：main 分支自动构建静态网站，并部署至 html 分支。
 - algolia.yml：每周三凌晨 02：00 自动爬取并推送至 Algolia。
	 1. 设置 `ALGOLIA_ADMIN_API_KEY`、`ALGOLIA_APP_ID` 仓库环境密钥，密钥获取具体步骤请阅读 [使用 Docusaurus 搭建优秀个人wiki](https://blog.7wate.com/?p=75)。
	 2. 修改 `.github\workflows\docsearch.json` 目录下 `start_urls` 和 `sitemap_urls` 键值为对应网站。


## 贡献

欢迎各位 Fork 贡献，并提供指导纠错。 👊

## 协议

- 所有**原创代码**采用 [GPL-3.0](http://www.thebigfly.com/gnu/FDLv1.3/) 协议，**原创非代码内容**采用[署名-相同方式共享 4.0 国际](http://creativecommons.org/licenses/by-sa/4.0/)。

- 所有**引用第三方**内容仅为学术使用。其所属**著作权、版权均归原作者**所有，如有冒犯侵权，请[邮件联系](mailto:admin@7wate.com)删除。

- **Docusaurus** is [MIT licensed.](https://github.com/facebook/docusaurus/blob/main/LICENSE)

## 致谢

感谢第三方原创作者的无私贡献！

感觉 Docusaurus 项目官方的维护开发！
