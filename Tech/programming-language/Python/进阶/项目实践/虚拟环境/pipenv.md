---
title: pipenv
description: Python pipenv 虚拟环境
keywords:
  - Python
  - pipenv
  - 虚拟环境
tags:
  - Python/虚拟环境
sidebar_position: 5
author: 7Wate
date: 2023-01-18
---

## 简介

pipenv 是一个 Python 包和环境管理工具，用于管理项目的依赖关系和创建虚拟环境。它的目的是简化 Python 包管理和环境管理的过程，使其变得更容易和更可靠。

pipenv 是一个 Python 包和环境管理工具，用于管理项目的依赖关系和创建虚拟环境。它的目的是简化 Python 包管理和环境管理的过程，使其变得更容易和更可靠。

pipenv 主要由两部分组成：

- 一个命令行工具，用于管理依赖关系和创建虚拟环境。
- 一个配置文件（Pipfile），用于描述项目的元数据和依赖关系。

安装 pipenv 需要通过 pip install pipenv 命令来安装。如果想要创建一个新的项目，可以使用 pipenv install 命令来创建虚拟环境和安装依赖。

在 pipenv 中，所有的依赖关系都被维护在一个名为 Pipfile 的文件中，这个文件用于描述项目的依赖关系。pipenv 会自动生成锁定文件（Pipfile.lock）来跟踪项目依赖关系的版本号，这样可以保证项目在不同环境中使用相同的依赖关系版本

另外 pipenv 支持从 requirements.txt 导入依赖项，并且也可以通过 pipenv lock 命令将项目依赖项导出到 requirements.txt 文件。总之 pipenv 是一个简单易用，支持创建虚拟环境和管理依赖关系的工具，适合于开发和维护 Python 项目的开发人员使用。

## 使用

安装前确保已经拥有了 Python3 和 Pip3，并且可以从 shell 中使用它。

### 1. 安装

```shell
pip install pipenv
pip3 install pipenv

# 升级
pip install --upgrade pipenv

# 卸载
pip uninstall pipenv
```

### 2. 使用

#### 2.1 虚拟环境

```shell
# 创建虚拟环境
pipenv install

# 指定 Python 版本
pipenv --python 3
pipenv --python 2.7.14

# 激活虚拟环境 shell
pipenv shell

# 关闭虚拟环境 shell
exit
```

#### 2.2 依赖管理

```shell
# 安装依赖 
pipenv install <package>

# --dev 选项安装开发依赖
pipenv install --dev <package>

# 从 requirements.txt 安装依赖
pipenv install -r path/to/requirements.txt

# 导出 requirements.txt
pipenv requirements > requirements.txt
pipenv requirements --dev > requirements.txt

# 指定安装依赖版本，使用语义化版本控制方案
pipenv install requests~=1.2

# 对比上下游依赖
pipenv update --outdated

# 升级所有依赖
pipenv update

# 升级指定依赖
pipenv update <pkg>

# 删除依赖
pipenv uninstall <package>

# 锁定依赖
pipenv lock

# 验证依赖
pipenv verify
```

#### 2.3 依赖包源

```shell
pipenv install --pypi-mirror <mirror_url>

pipenv update --pypi-mirror <mirror_url>

pipenv sync --pypi-mirror <mirror_url>

pipenv lock --pypi-mirror <mirror_url>

pipenv uninstall --pypi-mirror <mirror_url>
```

### 3. 命令

| 命令                           | 用途                                                 |
| ------------------------------ | ---------------------------------------------------- |
| pipenv install                 | 安装项目所需的包                                     |
| pipenv install [package]       | 安装特定的包                                         |
| pipenv install --dev [package] | 安装用于开发环境的包                                 |
| pipenv uninstall [package]     | 卸载特定的包                                         |
| pipenv lock                    | 生成锁定文件，用于确保项目在不同环境中的包版本一致性 |
| pipenv update                  | 更新项目中的所有包                                   |
| pipenv update [package]        | 更新特定的包                                         |
| pipenv check                   | 检查项目中的包是否最新                               |
| pipenv graph                   | 展示项目依赖关系图                                   |
| pipenv shell                   | 启动虚拟环境的 shell                                 |
| pipenv run [command]           | 在虚拟环境中运行命令                                 |
| pipenv clean                   | 删除虚拟环境中无用的包                               |
