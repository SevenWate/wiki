---
title: GitHub 奇技淫巧
description: GitHub 奇技淫巧
keywords:
- GitHub
- 技巧
tags:
- GitHub
sidebar_position: 1
author: 7Wate
date: 2022-09-23
---

## 镜像站

| 域名                                                 | https | 克隆加速 | zip 加速 | releases 加速 | 主机服务商 | 服务器所在地 |
| ---------------------------------------------------- | ----- | -------- | -------- | ------------- | ---------- | ------------ |
| [https://doc.fastgit.org](https://doc.fastgit.org/)  | ✓     | ✓        | ✓        | ✓             | fastgit    | 香港         |
| [https://hub.fastgit.xyz/](https://hub.fastgit.xyz/) | ✓     | ✓        | ✓        | ✓             | fastgit    | 香港         |
| [https://gitclone.com](https://gitclone.com/)        | ✓     | ✓        | ✗        | ✗             | Aliyun     | 杭州         |

## 搜索

- 按 `s` 键直接聚焦倒搜索框输入
- [Github 自定义搜索](https://github.com/search/advanced)

## 文件查看

- 按 `t` 键实时对仓库内所有文件进行搜索

- 点击某个文件后 按 `L` 键 就可以快速跳转倒某一行，点击行号可以复制代码或者生成永久链接

```shell
# 分享 240 行代码
https://github.com/AlloyTeam/AlloyTouch/blob/master/alloy_touch.js#L240
# 分享 39-45 行代码
https://github.com/AlloyTeam/AlloyTouch/blob/master/alloy_touch.js#L39-L45
```

- 按 `b` 键可以快速查看该文件的改动记录

## 阅读代码

### 使用 . 快捷键

在仓库详情页按 `。`键，代码会直接在一个网页版 VSCODE 打开。

### 使用 github1s.com

只需要把 github 改为 github1s，以达到与方法 1 相同的效果！

## 在线运行

### 使用  gitpod.com/#<仓库地址>

在仓库地址前面加上` gitpod.io/#/ `前缀

## 查看快捷键

- `Shift + ?`打开 GitHub 快捷键面板。

- `Ctrl+K` 打开 GitHub 命令面板。

## 其他

### 更改项目语言

在项目的根目录下添加如下 `.gitattributes` 文件

```shell
# 所有 html 文件后缀的代码识别成 JavaScript 文件。
*.html linguist-language=JavaScript
```
