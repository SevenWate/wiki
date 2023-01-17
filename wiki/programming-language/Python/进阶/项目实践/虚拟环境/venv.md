---
title: venv
description: Python 虚拟环境 venv
keywords:
- Python
- 虚拟环境
- venv
tags:
- Python
sidebar_position: 2
author: 7Wate
date: 2023-01-17
---

venv 是 Python3 中自带的虚拟环境工具。它可以在单独的目录中创建独立的 Python 运行环境，使得项目所需的包和版本与其他项目隔离开来，避免版本冲突。

使用 venv 创建虚拟环境的方法如下：

1. 在终端中运行下面的命令创建虚拟环境：

``` shell
python3 -m venv /path/to/new/virtual/env_name
```

2. 激活虚拟环境：

| Shell      | 用于激活虚拟环境的命令                |
| :--------- | :------------------------------------ |
| bash/zsh   | `$ source <venv>/bin/activate`        |
| fish       | `$ source <venv>/bin/activate.fish`   |
| csh/tcsh   | `$ source <venv>/bin/activate.csh`    |
| PowerShell | `$ <venv>/bin/Activate.ps1`           |
| cmd.exe    | `C:\> <venv>\Scripts\activate.bat`    |
| PowerShell | `PS C:\> <venv>\Scripts\Activate.ps1` |

在激活虚拟环境后，可以使用 pip 安装包。可以使用 **deactivate 命令关闭虚拟环境**。
