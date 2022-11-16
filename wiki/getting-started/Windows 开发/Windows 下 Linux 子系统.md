---
id: Windows 下 Linux 子系统
title: Windows 下 Linux 子系统
data: 2022年7月22日
---

## 概述

适用于 Linux 的 Windows 子系统可让开发人员按原样运行 GNU/Linux 环境 - 包括大多数命令行工具、实用工具和应用程序 - 且不会产生传统虚拟机或双启动设置开销。

> - [在 Microsoft Store](https://aka.ms/wslstore) 中选择你偏好的 GNU/Linux 分发版。
> - 运行常用的命令行软件工具（例如 `grep`、`sed`、`awk`）或其他 ELF-64 二进制文件。
> - 运行 Bash shell 脚本和 GNU/Linux 命令行应用程序，包括：
>   - 工具：vim、emacs、tmux
>   - 语言：[NodeJS](https://docs.microsoft.com/zh-CN/windows/nodejs/setup-on-wsl2)、Javascript、[Python](https://docs.microsoft.com/zh-CN/windows/python/web-frameworks)、Ruby、C/C++、C# 与 F#、Rust、Go 等
>   - 服务：SSHD、[MySQL](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)、Apache、lighttpd、[MongoDB](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)、[PostgreSQL](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)。
> - 使用自己的 GNU/Linux 分发包管理器安装其他软件。
> - 使用类似于 Unix 的命令行 shell 调用 Windows 应用程序。
> - 在 Windows 上调用 GNU/Linux 应用程序。

官方文档：[https://docs.microsoft.com/zh-cn/windows/wsl/](https://docs.microsoft.com/zh-cn/windows/wsl/)

### 比较 WSL 1 和 WSL2

WSL 2 是适用于 Linux 的 Windows 子系统体系结构的一个新版本，它支持适用于 Linux 的 Windows 子系统在 Windows 上运行 ELF64 Linux 二进制文件。 它的主要目标是**提高文件系统性能**，以及添加**完全的系统调用兼容性**。

这一新的体系结构改变了这些 Linux 二进制文件与Windows 和计算机硬件进行交互的方式，但仍然提供与 WSL 1（当前广泛可用的版本）中相同的用户体验。

单个 Linux 分发版可以在 WSL 1 或 WSL 2 体系结构中运行。 每个分发版可随时升级或降级，并且你可以并行运行 WSL 1 和 WSL 2 分发版。 WSL 2 使用全新的体系结构，该体系结构受益于运行真正的 Linux 内核。

| 功能                                           | WSL 1 | WSL 2 |
| :--------------------------------------------- | :---- | :---- |
| Windows 和 Linux 之间的集成                    | ✅     | ✅     |
| 启动时间短                                     | ✅     | ✅     |
| 与传统虚拟机相比，占用的资源量少               | ✅     | ✅     |
| 可以与当前版本的 VMware 和 VirtualBox 一起运行 | ✅     | ✅     |
| 托管 VM                                        | ❌     | ✅     |
| 完整的 Linux 内核                              | ❌     | ✅     |
| 完全的系统调用兼容性                           | ❌     | ✅     |
| 跨 OS 文件系统的性能                           | ✅     | ❌     |

WSL 2 仅适用于 Windows 10 版本 1903、内部版本 18362 或更高版本。通过按 Windows 徽标键 + R，检查你的 Windows 版本，然后键入 **winver**，选择“确定”。 低于 18362 的版本根本不支持 WSL。

## 基本命令

```shell
# 安装 WSL
wsl --install
# 列出可用的 Linux 发行版
wsl --list --online
# 安装特定的 Linux 发行版
wsl --install --distribution <Distribution Name>
# 列出已安装的 Linux 发行版
wsl --list --verbose
# 将 WSL 版本设置为 1 或 2 
wsl --set-version <distribution name> <versionNumber>
# 设置默认 WSL 版本
wsl --set-default-version <Version>
# 设置默认 Linux 发行版
wsl --set-default <Distribution Name>
# 在用户的主目录中启动
wsl ~
# 通过特定用户运行特定 Linux 发行版
wsl --distribution <Distribution Name> --user <User Name>
# 以特定用户的身份运行
wsl -u <Username>
wsl --user <Username>
# 更改发行版本默认用户
<DistributionName> config --default-user <Username>
# 更新 WSL
wsl --update
# 回退 WSL
wsl --update rollback
# 检查 WSL 状态
wsl --status
# 关闭所有 WSL
wsl --shutdown
# 终止特定 WSL 
wsl --terminate <Distribution Name>
# 导出 Linux 发行版为 TAR 文件
wsl --export <Distribution Name> <FileName>
# 导入新发行版
wsl --import <Distribution Name> <InstallLocation> <FileName>
# 注销 Linux 发行版
wsl --unregister <DistributionName>
# 挂载磁盘
wsl --mount <DiskPath>
```

## 安装实践

### 入门

打开 PowerShell（或 Windows 命令提示符）并输入：

```shell
wsl --install
```

--install 命令执行以下操作：

- 启用可选的 WSL 和虚拟机平台组件
- 下载并安装最新 Linux 内核
- 将 WSL 2 设置为默认值
- 下载并安装 Ubuntu Linux 发行版（可能需要重新启动）

### 设置 Linux 用户名和密码

使用 WSL 安装 Linux 发行版的过程完成后，系统将要求你为 Linux 发行版创建“用户名”和“密码”。

- 此**用户名**和**密码**特定于安装的每个单独的 Linux 分发版，与 Windows 用户名无关。
- 创建**用户名**和**密码**后，该帐户将是分发版的默认用户，并将在启动时自动登录。
- 此帐户将被视为 Linux 管理员，能够运行 `sudo` (Super User Do) 管理命令。
- 在 WSL 上运行的每个 Linux 发行版都有其自己的 Linux 用户帐户和密码。 每当添加分发版、重新安装或重置时，都必须配置一个 Linux 用户帐户。

若要更改或重置密码，请打开 Linux 发行版并输入命令：`passwd`。

#### 重置 Linux 分发版的密码

1. 请打开 PowerShell，并使用以下命令进入默认 WSL 分发版的根目录：`wsl -u root`

    > 如果需要在非默认分发版中更新忘记的密码，请使用命令：`wsl -d Debian -u root`，并将 `Debian` 替换为目标分发版的名称。

2. 在 PowerShell 内的根级别打开 WSL 发行版后，可使用此命令更新密码：`passwd <username>`，其中 `<username>` 是发行版中帐户的用户名，而你忘记了它的密码。

3. 系统将提示你输入新的 UNIX 密码，然后确认该密码。 在被告知密码已成功更新后，请使用以下命令在 PowerShell 内关闭 WSL：`exit`。

### 更新和升级包

对于 Ubuntu 或 Debian，请使用以下命令：

```shell
sudo apt update && sudo apt upgrade
```

## 跨文件系统工作

建议不要跨操作系统使用文件，除非有这么做的特定原因。 若想获得最快的性能速度，请将文件存储在 WSL 文件系统中，前提是在 Linux 命令行（Ubuntu、OpenSUSE 等）中工作。 如果使用 Windows 命令行（PowerShell、命令提示符）工作，请将文件存储在 Windows 文件系统中。

例如，在存储 WSL 项目文件时：

- 使用 Linux 文件系统根目录：`\\wsl$\Ubuntu\home\<user name>\Project`
- 而不使用 Windows 文件系统根目录：`/mnt/c/Users/<user name>/Project$` 或 `C:\Users\<user name>\Project`

在 WSL 命令行的文件路径中看到 `/mnt/` 时，表示你正在使用已装载的驱动器。 因此，Windows 文件系统 C:/ 驱动器 (`C:\Users\<user name>\Project`) 在 WSL 命令行中装载时将如下所示：`/mnt/c/Users/<user name>/Project$`。 可以将项目文件存储在装载的驱动器上，但如果将其直接存储在 `\\wsl$` 驱动器上，性能速度会提高。

### 在 Windows 文件资源管理器中查看当前目录

从命令行打开 Windows 文件资源管理器，以查看存储文件的目录：

```shell
explorer.exe .
```

在 Windows 文件资源管理器中查看所有可用的 Linux 发行版及其根文件系统，请在地址栏中输入：

```shell
\\wsl$
```

### 文件名和目录区分大小写

区分大小写确定在文件名或目录中是将大写 (FOO.txt) 和小写 (foo.txt) 字母作为不同项（区分大小写）还是等效项（不区分大小写）进行处理。 Windows 和 Linux 文件系统处理区分大小写的方式不同 - Windows 不区分大小写，而 Linux 区分大小写。

### Windows 和 Linux 命令之间的互操作性

借助 WSL，Windows 和 Linux 工具和命令可互换使用。

- 从 Linux 命令行（即 Ubuntu）运行 Windows 工具（即 notepad.exe）。
- 从 Windows 命令行（即 PowerShell）运行 Linux 工具（即 grep）。
- 在 Windows 与 Windows 之间共享环境变量。 （版本 17063+）

### 从 Windows 命令行运行 Linux 工具

使用 `wsl <command>`（或 `wsl.exe <command>`）从 Windows 命令提示符 (CMD) 或 PowerShell 运行 Linux 二进制文件。

```shell
C:\temp> wsl ls -la
<- contents of C:\temp ->
```

以这种方式调用二进制文件：

- 使用当前 CMD 或 PowerShell 提示符中提到的同一工作目录。
- 以 WSL 默认用户的身份运行。
- 拥有与调用方进程和终端相同的 Windows 管理权限。

`wsl`（或 `wsl.exe`）后面的 Linux 命令的处理方式与 WSL 中运行的任何命令的处理方式类似。 可以执行 sudo、管道处理和文件重定向等操作。

使用 sudo 更新默认 Linux 分发版的示例：

```shell
C:\temp> wsl sudo apt-get update
```

### 混合 Linux 和 Windows 命令

```shell
# ls 列出文件，并使用 PowerShell 命令 findstr 来筛选包含“git”的单词的结果
wsl ls -la | findstr "git"
# dir 列出文件，并使用 Linux 命令 grep 来筛选包含“git”
dir | wsl grep git
# ls -la 列出文件，并使用 PowerShell 命令 > out.txt 将该列表输出到名为“out.txt”的文本文件
wsl ls -la > out.txt
# ls -la 列出 /proc/cpuinfo Linux 文件系统路径中的文件
wsl ls -la /proc/cpuinfo
# ls -la 列出 C:\Program Files Windows 文件系统路径中的文件
wsl ls -la "/mnt/c/Program Files"
```

### 从 Linux 运行 Windows 工具

WSL 可以使用 `[tool-name].exe` 直接从 WSL 命令行运行 Windows 工具。 例如，`notepad.exe`。以这种方式运行的应用程序具有以下属性：

- 按 WSL 命令提示保留工作目录（大部分情况下是这样 -- 下面所述的情况除外）。
- 拥有与 WSL 进程相同的权限。
- 以活动 Windows 用户的身份运行。
- 显示在 Windows 任务管理器中，就如同直接从 CMD 提示符执行的一样。

```shell
# 运行 Windows 工具 `ipconfig.exe`, `grep` 筛选“IPv4”结果，并使用 `cut` 删除列字段
ipconfig.exe | grep IPv4 | cut -d: -f2
# 列出 Windows 文件系统 C:\ 目录的内容：
cmd.exe /C dir
# 使用 ping 命令
ping.exe www.microsoft.com
```
