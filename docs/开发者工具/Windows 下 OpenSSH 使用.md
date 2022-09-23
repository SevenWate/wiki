---
title: Windows 下 OpenSSH 使用
description: Windows 下 OpenSSH 使用
keywords:
- Windows
- SSH
tags:
- Windows
author: 7Wate
date: 2022-09-23
---


OpenSSH 是安全 Shell (SSH) 工具的开放源代码版本，Linux 及其他非 Windows 系统的管理员使用此类工具跨平台管理远程系统。 OpenSSH 在 2018 年秋季已添加至 Windows，并包含在 Windows 10 和 Windows Server 2019 中。

SSH 基于客户端-服务器体系结构，用户在其中工作的系统是客户端，所管理的远程系统是服务器。 OpenSSH 包含一系列组件和工具，用于提供一种安全且简单的远程系统管理方法，其中包括：

- sshd.exe：它是远程所管理的系统上必须运行的 SSH 服务器组件
- ssh.exe：它是在用户的本地系统上运行的 SSH 客户端组件
- ssh-keygen.exe：为 SSH 生成、管理和转换身份验证密钥
- ssh-agent.exe：存储用于公钥身份验证的私钥
- ssh-add.exe：将私钥添加到服务器允许的列表中
- ssh-keyscan.exe：帮助从许多主机收集公用 SSH 主机密钥
- sftp.exe：这是提供安全文件传输协议的服务，通过 SSH 运行
- scp.exe：是在 SSH 上运行的文件复制实用工具

## 安装

若要使用 PowerShell 安装 OpenSSH，请先以管理员身份运行 PowerShell。 为了确保 OpenSSH 可用，请运行以下 cmdlet：

```powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
```

如果两者均尚未安装，则此操作应返回以下输出：

```powershell
Name  : OpenSSH.Client~~~~0.0.1.0
State : NotPresent

Name  : OpenSSH.Server~~~~0.0.1.0
State : NotPresent
```

然后，根据需要安装服务器或客户端组件：

```powershell
# 安装 OpenSSH 客户端
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

# 安装 OpenSSH 服务端
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

这两者应该都会返回以下输出：

```powershell
Path          :
Online        : True
RestartNeeded : False
```

## 启动与配置

若要启动并配置 OpenSSH 服务器来开启使用，请以管理员身份打开 PowerShell，然后运行以下命令来启动 `sshd service`：

```powershell
# 启动 sshd 服务
Start-Service sshd

# 设置 sshd 服务自动运行
Set-Service -Name sshd -StartupType 'Automatic'

# 检测防火墙是否放开 22 端口
if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {
    Write-Output "Firewall Rule 'OpenSSH-Server-In-TCP' does not exist, creating it..."
    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
} else {
    Write-Output "Firewall rule 'OpenSSH-Server-In-TCP' has been created and exists."
}
```

## 连接服务器

安装后，可从使用 PowerShell 安装了 OpenSSH 客户端的 Windows 10 或 Windows Server 2019 设备连接到 OpenSSH 服务器，如下所示。 请务必以管理员身份运行 PowerShell：

```powershell
ssh username@servername
```

可以尝试在服务器使用 127.0.0.1 本地连接测试，**因为 Windows 显示用户名和实际用户名可能不一致，所以通过 `net user` 获取正确用户名进行连接。**

连接后，会收到如下所示的消息：

```powershell
The authenticity of host 'servername (10.00.00.001)' can't be established.
ECDSA key fingerprint is SHA256:(<a large string>).
Are you sure you want to continue connecting (yes/no)?
```

选择“是”后，该服务器会添加到包含 Windows 客户端上的已知 SSH 主机的列表中。系统此时会提示你输入密码。 作为安全预防措施，密码在键入的过程中不会显示。

连接后，你将看到 Windows 命令行界面提示符：

```powershell
domain\username@SERVERNAME C:\Users\username>
```

## 卸载

```powershell
# 卸载 OpenSSH 客户端
Remove-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

# 卸载 OpenSSH 服务端
Remove-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

如果在卸载时服务正在使用中，稍后可能需要重启 Windows。
