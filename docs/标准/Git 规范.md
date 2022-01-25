---
id: Git 规范
title: Git 规范
data: 2022年1月25日
---

统一团队的 Git 工作流，包括分支工作流、Git commit 日志、tag 规范、README 模板、issue 模板，便于后续代码 review，版本发布以及日志自动化生成等等。


## 分支工作流

![Git 分支工作流.png](https://static.7wate.com/img/2021/08/24/c5a50e99dde5f.png)

**根据项目实际情况安排分支工作流！**

## Commit 日志

日志所有内容务必使用 **ASCII** 字符，不要使用中文或 emoji，要求**最大化兼容**，便于程序处理。

commit 包括三个部分：**Header**、**Body**、**Footer**。

commit 格式如下：

```
<type>([scope]): <subject>

[body]

[footer]
```

示例：

```
feature(auth): increase length of new API key

the length is increased from 24 to 32 for new API keys

close #12
```

### 头部（Header）

标题部分只有一行，包括三个字段：类型、说明、标题。

![commit-tag.png](https://static.7wate.com/img/2021/08/24/a26a82a44ce2e.png)

- 破坏兼容性的改动，影响到依赖本项目的其它系统，请在类型后面加上**半角感叹号**「**!**」。
- 标题务必不超过 **72** 个字符，务必精炼易懂。如无法限制在 **72** 个字符内，请拆分提交。
- 描写部分**小写字母开头**、专有名词首字母大写、缩略语大写、结尾不用句号。

### 主体（Body）

标题与正文间隔一个空行。

如果内容简单，请按照标题格式。超过一行，按照常规的段落格式。

**首字母大写，正确使用标点。可以多行、多段、每行不超过 72 个字符、行尾不出现空格、段落用空行隔开。**

示例

```
feature!(api): limit array length to 256 elements

BREAKING: Array length limit is added to further limit request size. A
small number of existing apps may receive HTTP 413 "Payload too Large"
error.
```

### 脚注（Footer）

正文与脚注间隔一个空行。

## Tag 规范

![语义化版本.png](https://static.7wate.com/img/2021/08/24/ad4999467e192.png)

## Issue 模板

![Issue.png](https://static.7wate.com/img/2021/08/24/0e572570b1f3f.png)

## README 模板

![Issue.png](https://static.7wate.com/img/2021/08/24/bdbf509e6b414.png)
