---
title: os --- 多种操作系统接口
description: os --- 多种操作系统接口
keywords:
- python
- os
- 多种操作系统接口
tags:
- python
- 标准库
sidebar_position: 1
author: 7Wate
date: 2023-08-04
---

在进行 Python 编程时，与操作系统进行交互是常见的需求。这包括但不限于管理文件系统、获取系统信息、处理路径等。Python 的 `os` 模块作为标准库的一部分，提供了丰富的方法来完成这些任务。下面是一些主要功能和使用示例。

## 模块导入

```python
import os
```

## 进程管理

| 方法                       | 描述                       | 平台适用性                       |
| -------------------------- | -------------------------- | -------------------------------- |
| `os.fork()`                | 创建一个子进程             | UNIX/Linux                       |
| `os.exec*()`               | 在当前进程中执行新程序     | 所有（但在 Windows 上有限制）    |
| `os.spawn*()`              | 创建新进程运行程序         | 所有（但在 UNIX/Linux 上不常用） |
| `os.wait()`                | 等待子进程完成             | UNIX/Linux                       |
| `os.waitpid(pid, options)` | 等待特定的子进程完成       | UNIX/Linux                       |
| `os.kill(pid, signal)`     | 向进程发送信号             | UNIX/Linux                       |
| `os.terminate()`           | 终止当前进程               | Windows                          |
| `os.startfile(filepath)`   | 使用关联的应用程序打开文件 | Windows                          |

## 文件管理

| 方法                           | 描述                                  | 平台适用性 |
| ------------------------------ | ------------------------------------- | ---------- |
| `os.open(file, flags[, mode])` | 打开文件，并返回文件描述符            | 所有       |
| `os.close(fd)`                 | 关闭文件描述符                        | 所有       |
| `os.read(fd, n)`               | 从文件描述符 `fd` 读取最多 `n` 个字节 | 所有       |
| `os.write(fd, str)`            | 写入字符串到文件描述符 `fd`           | 所有       |
| `os.remove(path)`              | 删除指定的文件                        | 所有       |
| `os.rename(src, dst)`          | 重命名文件或目录                      | 所有       |
| `os.stat(path)`                | 获取文件或目录的状态信息              | 所有       |
| `os.chmod(path, mode)`         | 改变文件或目录的权限                  | 所有       |
| `os.chown(path, uid, gid)`     | 改变文件或目录的所有者和所属组        | UNIX/Linux |
| `os.utime(path, times)`        | 更新文件时间戳                        | 所有       |
| `os.path.getsize(path)`        | 获取文件的大小                        | 所有       |
| `os.path.getmtime(path)`       | 获取文件的最后修改时间                | 所有       |
| `os.path.getctime(path)`       | 获取文件的创建时间                    | 所有       |
| `os.path.isfile(path)`         | 检查指定路径是否是文件                | 所有       |
| `os.path.isdir(path)`          | 检查指定路径是否是目录                | 所有       |
| `os.path.exists(path)`         | 检查指定路径是否存在                  | 所有       |
| `os.path.split(path)`          | 将路径分割为目录和文件名              | 所有       |
| `os.path.splitext(path)`       | 将文件路径分割为文件名和扩展名        | 所有       |
| `os.path.join(a, b)`           | 将多个路径组合成一个路径              | 所有       |

## 目录操作

| 方法                       | 描述                                         | 平台适用性 |
| -------------------------- | -------------------------------------------- | ---------- |
| `os.getcwd()`              | 获取当前工作目录                             | 所有       |
| `os.chdir(path)`           | 改变当前工作目录                             | 所有       |
| `os.mkdir(path)`           | 创建新目录                                   | 所有       |
| `os.makedirs(path)`        | 创建新目录，如果父目录不存在也会被创建       | 所有       |
| `os.rmdir(path)`           | 删除目录                                     | 所有       |
| `os.removedirs(path)`      | 删除目录，如果目录内有文件也会被删除         | 所有       |
| `os.listdir(path)`         | 列出指定目录下的所有文件和目录               | 所有       |
| `os.scandir(path)`         | 返回一个迭代器，包含目录中的 `DirEntry` 对象 | 所有       |
| `os.rename(old, new)`      | 重命名目录                                   | 所有       |
| `os.stat(path)`            | 获取目录的状态信息                           | 所有       |
| `os.chmod(path, mode)`     | 改变目录的权限                               | 所有       |
| `os.chown(path, uid, gid)` | 改变目录的所有者和所属组                     | UNIX/Linux |
| `os.path.isdir(path)`      | 检查指定路径是否是目录                       | 所有       |
| `os.path.exists(path)`     | 检查指定路径是否存在                         | 所有       |
| `os.path.split(path)`      | 将路径分割为目录和文件名                     | 所有       |
| `os.path.join(a, b)`       | 将多个路径组合成一个路径                     | 所有       |

## 系统信息

| 方法                    | 描述                                     | 平台适用性          |
| ----------------------- | ---------------------------------------- | ------------------- |
| `os.name`               | 获取操作系统名字（如 `'posix'`, `'nt'`） | 所有                |
| `os.uname()`            | 获取详细的系统信息（仅 UNIX/Linux）      | UNIX/Linux          |
| `os.environ`            | 获取环境变量                             | 所有                |
| `os.getenv(key)`        | 获取特定环境变量的值                     | 所有                |
| `os.putenv(key, value)` | 设置环境变量的值                         | 所有                |
| `os.system(command)`    | 运行外部命令                             | 所有                |
| `os.cpu_count()`        | 获取 CPU 核心数量                        | 所有                |
| `os.getpid()`           | 获取当前进程 ID                          | 所有                |
| `os.getppid()`          | 获取父进程 ID                            | 所有                |
| `os.getuid()`           | 获取当前用户 ID（仅 UNIX/Linux）         | UNIX/Linux          |
| `os.getgid()`           | 获取当前组 ID（仅 UNIX/Linux）           | UNIX/Linux          |
| `os.getlogin()`         | 获取当前用户登录名                       | UNIX/Linux, Windows |
| `os.urandom(n)`         | 生成 `n` 个字节的强随机数                | 所有                |

## 文件描述符操作

| 方法                               | 描述                             | 平台适用性 |
| ---------------------------------- | -------------------------------- | ---------- |
| `os.dup(fd)`                       | 复制文件描述符                   | 所有       |
| `os.dup2(fd, fd2)`                 | 复制文件描述符到另一个文件描述符 | 所有       |
| `os.fdopen(fd[, mode[, bufsize]])` | 通过文件描述符打开文件对象       | 所有       |

## 信号处理

| 方法                            | 描述             | 平台适用性 |
| ------------------------------- | ---------------- | ---------- |
| `os.kill(pid, sig)`             | 向进程发送信号   | UNIX/Linux |
| `os.signal(signalnum, handler)` | 设置信号处理程序 | UNIX/Linux |

## 终端管理

| 方法             | 描述                           | 平台适用性 |
| ---------------- | ------------------------------ | ---------- |
| `os.isatty(fd)`  | 检查文件描述符是否连接到终端   | 所有       |
| `os.ttyname(fd)` | 获取与文件描述符关联的终端名称 | UNIX/Linux |

## 其他

| 方法                                   | 描述                                                         | 平台适用性 |
| -------------------------------------- | ------------------------------------------------------------ | ---------- |
| `os.popen(command[, mode[, bufsize]])` | 打开与一个进程的管道                                         | 所有       |
| `os.pipe()`                            | 创建一个管道                                                 | 所有       |
| `os.tempnam([dir[, prefix]])`          | 生成一个唯一的临时文件名（不推荐，使用 `tempfile` 模块代替） | 所有       |
| `os.tmpfile()`                         | 创建并打开（'w+b'）一个新的临时文件（不推荐，使用 `tempfile` 模块代替） | UNIX/Linux |
