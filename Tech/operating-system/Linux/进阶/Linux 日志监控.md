---
title: Linux 日志监控
description: Linux 日志监控
keywords:
  - Linux
  - 日志监控
tags:
  - Linux/进阶
sidebar_position: 3
author: 7Wate
date: 2023-04-10
---

## 引言

在 IT 领域，日志管理和监控是至关重要的技术，特别是在 Linux 系统中。日志提供了系统和应用程序行为的详细信息，可以帮助管理员诊断和解决问题，理解系统的运行情况，提供安全审计，并满足合规性要求。

## 基础

### 日志系统介绍

在 Linux 中，日志系统是跟踪和记录系统活动的核心组件。系统日志提供了大量的信息，包括系统错误，操作警告，安全警告和其他重要事件。理解和管理这些日志是运维工作中的关键部分，可以帮助定位和解决各种系统问题。

Linux 系统广泛采用 syslog 协议进行日志处理。syslog 协议最初由 Eric Allman 在 1980 年代早期开发，目的是为了 UNIX 系统提供一个日志处理框架，后来也成为了其他许多系统的标准。

Syslog 是一个分布式日志记录系统，可以从各种源收集日志，例如内核、守护进程或任何其他程序。它根据每个日志消息的优先级和设施（产生消息的系统部分），将其路由到适当的地方进行处理。这些地方可以是文件、控制台、远程服务器或其他目标。此外，syslog 还提供了消息缓冲，保证在系统繁忙或出现问题时，日志消息不会丢失。

### 日志文件和其位置

Linux 系统中的日志文件通常存储在 `/var/log` 目录下。这个目录中有许多文件和子目录，用于记录各种不同类型的日志。以下是其中一些重要的日志文件：

1. `/var/log/syslog` 或 `/var/log/messages`：这两个文件通常包含系统和应用程序的所有非安全日志消息。哪个文件被使用取决于你的发行版和配置。
2. `/var/log/auth.log` 或 `/var/log/secure`：这些文件记录所有的安全授权信息，包括用户认证、sudo 操作等。
3. `/var/log/kern.log`：该文件记录所有的内核相关消息。
4. `/var/log/dmesg`：保存由 dmesg 命令显示的内核环形缓冲区的消息。
5. `/var/log/boot.log`：记录系统启动过程中的信息。
6. `/var/log/faillog`：这个文件记录所有的登录失败尝试。它可以帮助管理员跟踪并阻止潜在的非法活动。
7. `/var/log/maillog` 或 `/var/log/mail.log`：这两个文件记录与电子邮件系统相关的所有日志信息。包括邮件传送、接收，以及任何可能发生的错误。
8. `/var/log/journal/`：此目录包含了 systemd 日志服务（journald）的二进制日志文件。它们包含了系统启动以来的所有日志消息。
9. `/var/log/lastlog`：此文件记录了系统上每个账户的最后登录时间。管理员可以使用这个日志来跟踪用户活动。
10. `/var/log/wtmp` 和 `/var/log/btmp`：这两个文件分别记录了成功和失败的登录尝试。通过检查这些文件，管理员可以发现潜在的安全问题。
11. `/var/log/Xorg.0.log`：此文件记录了 X Window 系统的日志，主要用于调试 X 服务器的问题。

理解这些日志文件的内容和它们所在的位置，对于日常的系统维护、问题诊断和安全审计都非常重要。在实际使用中，还需要结合具体的发行版和配置，以及具体的应用程序和服务的需求，来进行灵活的操作和管理。

## 日志管理

### 日志轮替

日志文件可以在短时间内变得非常大，尤其是当系统或应用程序产生大量日志信息时。一个大的日志文件不仅会占用大量的磁盘空间，也会使日志分析变得复杂和耗时。这就是为什么日志旋转变得非常重要。

日志旋转是一种解决方法，它会定期将旧的日志条目移动到新的文件中，同时管理和删除过旧的日志文件。在 Linux 系统中，这通常由 logrotate 实现。

#### Logrotate

`logrotate` 是一个用于管理日志文件的工具，它可以自动轮转、压缩、删除和邮件发送日志文件。在 Linux 系统中，许多程序都会生成日志文件，这些文件会随着时间的推移不断增长，`logrotate` 可以帮助系统管理员管理这些日志文件，防止它们占用过多的磁盘空间。

 `logrotate` 的主要特性和功能：

- **日志轮转**：`logrotate` 可以按照日、周、月或者文件大小来轮转日志文件。这意味着当一个新的轮转周期开始时，当前的日志文件将被重命名，然后创建一个新的日志文件。例如，你可以配置 `logrotate` 每天轮转一次 `/var/log/messages` 文件，那么每天开始时，`/var/log/messages` 文件会被重命名为 `/var/log/messages.1`，然后创建一个新的 `/var/log/messages` 文件用于记录新的日志。

- **日志压缩**：`logrotate` 可以自动压缩旧的日志文件以节省磁盘空间。默认情况下，它使用 `gzip` 进行压缩，但也可以配置使用其他压缩工具。

- **删除旧的日志文件**：你可以配置 `logrotate` 自动删除超过一定时间的旧日志文件。例如，你可以配置 `logrotate` 只保留最近 30 天的日志文件。

- **邮件发送日志文件**：如果你希望保存被删除的日志文件，可以配置 `logrotate` 在删除之前将日志文件发送到一个指定的电子邮件地址。

`logrotate` 的配置文件通常位于 `/etc/logrotate.conf` 和 `/etc/logrotate.d/` 目录下。`/etc/logrotate.conf` 是主配置文件，定义了全局的配置选项。`/etc/logrotate.d/` 目录下的文件通常是各个程序的配置文件，例如 Apache、rsyslog、nginx 等。

下面是一个 `logrotate` 配置文件的示例：`myapp` 的日志文件每天轮替，保留 5 份旧的日志文件。如果日志文件丢失或者为空，那么会忽略这个错误。轮替的日志文件会被压缩。新的日志文件将会以 0644 的权限创建，所有者为 root，组为 adm。每次日志轮替后，会重新加载 `myapp` 的配置。

```shell
/var/log/myapp/*.log {
    daily
    rotate 5
    missingok
    notifempty
    compress
    create 0644 root adm
    sharedscripts
    postrotate
        /etc/init.d/myapp reload > /dev/null
    endscript
}
```

| 选项                        | 描述                                                         | 示例                                              |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------- |
| rotate                      | 指定你希望保存的旧日志文件的数量。                           | `rotate 5`                                        |
| daily/weekly/monthly/yearly | 定义了日志轮转的频率。                                       | `daily`                                           |
| compress                    | 让 `logrotate` 使用 `gzip` 压缩旧的日志文件。                | `compress`                                        |
| delaycompress               | 让 `logrotate` 延迟压缩，直到下一次轮转周期。                | `delaycompress`                                   |
| missingok                   | 如果日志文件丢失，`logrotate` 会忽略错误。                   | `missingok`                                       |
| notifempty                  | 如果日志文件为空，`logrotate` 会忽略它。                     | `notifempty`                                      |
| create mode owner group     | 让 `logrotate` 创建新的日志文件，并设置指定的权限、所有者和组。 | `create 0644 root adm`                            |
| postrotate/endscript        | 在 `postrotate` 和 `endscript` 之间的命令会在每次日志轮转之后执行。 | `postrotate /etc/init.d/apache2 reload endscript` |
| sharedscripts               | 会使得 `logrotate` 对每个日志只运行一次 `postrotate` 脚本。  | `sharedscripts`                                   |

### 高级管理

在大型环境中，可能需要管理和监控数十、数百甚至数千台服务器。在这种情况下，集中式日志管理变得非常重要。集中式日志管理允许你从一个位置收集和分析所有服务器的日志，这可以极大地提高故障排查的效率。

有多种工具可以帮助实现集中式日志管理，包括 Logstash、Graylog、Fluentd 等。这些工具可以收集各种来源的日志，对日志数据进行处理和分析，然后将数据转发到一个集中的位置，例如一个日志分析引擎或者一个存储系统。

例如，Logstash 是一个强大的日志收集、处理和转发的工具。它可以接收多种格式和来源的日志，然后将数据转发到 Elasticsearch、S3、Aiven 等各种目标。Logstash 支持多种输入插件，可以从 syslog、文件、HTTP、JDBC 等来源收集数据，同时，它也支持多种过滤插件，可以对数据进行解析、修改、丢弃等操作。

集中式日志管理通常与日志分析和可视化工具一起使用，例如 Kibana 或 Grafana，它们可以从集中的存储系统中提取数据，然后生成易于理解的图表和报告，这对于系统管理员和开发者了解系统的健康状况和性能非常有用。

## 日志监控

### 实时日志监控

#### Tail 命令

`tail` 命令在 Unix-like 系统中用于输出文件的尾部内容。它主要用于实时查看和监控日志文件的变化。

常用的 tail 命令示例：

```shell
# 查看文件的最后 10 行
tail /path/to/log

# 查看文件的最后 20 行
tail -n 20 /path/to/log

# 实时查看文件的变化
tail -f /path/to/log
```

#### Less 命令

`less` 是一个在 Unix-like 系统中用于查看文件内容的命令。相比于其他查看器，如 `more`，`less` 提供了更多的功能和灵活性。

Less 命令的一个重要特性是它允许用户向前和向后滚动查看文件。在 `less` 中，你可以使用 `Page Up` 和 `Page Down` 键来滚动查看文件，使用 `/` 来搜索文本，使用 `n` 和 `N` 来查找下一个和上一个匹配的文本。

在 less 中，你可以使用 `Shift + F` 来实时查看文件的变化，按 `Ctrl + C` 停止实时查看。

以下是一些常用的 less 命令示例：

```shell
# 查看文件
less /path/to/log

# 在文件中搜索文本
less /path/to/log
/keyword

# 实时查看文件的变化
less +F /path/to/log
```

#### Multitail 命令

`multitail` 是 `tail` 命令的一个改进版本，可以在 Unix-like 系统中同时监控和查看多个文件的变化。

Multitail 命令的主要特性是它可以分屏查看多个文件或命令的输出。你可以使用 `-i` 选项指定多个文件，例如 `multitail -i /path/to/log1 -i /path/to/log2`。

以下是一些常用的 multitail 命令示例：

```shell
# 同时查看两个文件的变化
multitail /path/to/log1 /path/to/log2

# 实时查看两个文件的变化
multitail -i /path/to/log1 -i /path/to/log2
```

#### Logwatch

Logwatch 是一个日志分析工具，它可以解析 Unix-like 系统的日志文件并生成易于理解的报告。

Logwatch 的主要特性是它可以定制报告的内容和格式，可以按照一定的时间间隔，如每天，每周等，发送报告。你可以通过配置文件来指定分析哪些日志文件，定义报告的内容，以及设置报告的发送方式等。

以下是一些常用的 Logwatch 命令和配置示例：

```shell
# 生成今天的报告
logwatch --range today

# 生成指定日期的报告
logwatch --range 'between -7 days and -1 days'

# 发送报告到指定的电子邮件
logwatch --mailto user@example.com
```

注意：以上命令可能需要根据你的系统和环境进行适当的修改和调整。

### 日志告警和通知

许多日志管理系统提供了告警和通知功能，当发生定义的事件或者满足某些条件时，它们可以发送通知。

#### Graylog

Graylog 是一个强大的日志管理系统，它有一个内置的告警系统。你可以定义规则，当日志消息匹配这些规则时，Graylog 可以发送电子邮件，或者通过 HTTP 请求触发其他的动作。

#### Logstash

Logstash 是一种数据处理管道，可以从多个源收集日志，转换这些日志，并发送到你选择的储存地。与 Elasticsearch 和 Kibana 结合，Logstash 可以提供强大的实时数据分析功能。如果你使用 Elasticsearch Watcher 或者 Kibana Alerting 插件，你可以定义复杂的告警条件，当满足这些条件时，可以发送电子邮件，短信，或者其他类型的通知。

## 日志分析

### 命令行工具

#### Grep 命令

`grep` 是 Unix 和类 Unix 系统中的一个强大的文本搜索工具，用于搜索匹配特定模式的行。在日志文件中，你可以使用 `grep` 来搜索出包含特定关键字的日志条目。

常见的 grep 命令示例：

```shell
shellCopy code# 在文件中搜索特定文本
grep 'text' /path/to/file

# 在文件中搜索，忽略大小写
grep -i 'text' /path/to/file

# 递归搜索目录中的所有文件
grep -r 'text' /path/to/dir

# 显示匹配文本的行数
grep -c 'text' /path/to/file

# 显示匹配和不匹配的行
grep -v 'text' /path/to/file
```

#### Awk 命令

`awk` 是一个功能强大的文本分析工具，主要用于生成报告和处理数据文件。它拥有强大的编程语言特性，可以处理复杂的任务。

常见的 awk 命令示例：

```shell
shellCopy code# 打印文件的第一列
awk '{print $1}' /path/to/file

# 计算文件的第一列的和
awk '{sum += $1} END {print sum}' /path/to/file

# 在文件中查找特定的文本
awk '/text/ {print $0}' /path/to/file

# 打印文件中的行数
awk 'END {print NR}' /path/to/file
```

#### Sed 命令

`sed`（流编辑器）是 Unix 和类 Unix 系统中的一个非常强大的文本处理工具。主要用于文本替换，删除，插入和其他文本转换任务。

常见的 sed 命令示例：

```shell
shellCopy code# 在文件中替换文本
sed 's/text/newtext/g' /path/to/file

# 在文件中删除行
sed '5d' /path/to/file  # 删除第 5 行
sed '/text/d' /path/to/file  # 删除包含 "text" 的行

# 插入文本
sed '5i\text' /path/to/file  # 在第 5 行之前插入 "text"
sed '5a\text' /path/to/file  # 在第 5 行之后插入 "text"
```

### 日志分析工具

一些专门的日志分析工具提供了更直观的方式来理解和探索你的日志数据。以下是一些常见的工具：

**GoAccess：** GoAccess 是一个开源的实时网站日志分析工具，它可以生成漂亮的终端和 HTML 报告。GoAccess 支持多种日志格式，包括 Nginx，Apache，Amazon S3 和 CloudFront。

**AWStats：** AWStats 是一个免费的强大的日志分析工具，主要用于分析 web、流媒体、ftp 或邮件服务器的日志。AWStats 可以生成各种统计报告，包括访问量、访问时间、访问者国家、搜索引擎引荐等。

**Elasticsearch：** Elasticsearch 是一个实时分布式搜索和分析引擎，常与 Logstash 和 Kibana 一起使用，形成 ELK 栈，用于集中式日志管理。Elasticsearch 可以存储、搜索和分析大量数据，而 Kibana 则为 Elasticsearch 提供了一个漂亮且强大的 web 界面，使得数据的探索和可视化变得更加容易。

## 其他相关技能

### 常见的日志消息和错误

理解日志的内容对于日志管理来说非常关键，它包括了解如何阅读和解释 Linux 系统日志、应用程序日志、安全日志等。每个日志条目通常都包含一些关键信息，如发生事件的时间戳，事件的来源（如服务或应用程序的名称），以及事件的描述。

例如，以下是一个系统日志条目的示例：

```shell
Jun 25 14:15:01 myhost CRON[12345]: (root) CMD (command)
```

在这个条目中，"Jun 25 14:15:01" 是事件的时间戳，"myhost" 是主机名，"CRON[12345]" 表示事件是由 cron 服务产生的，"[12345]" 是 cron 服务的进程 ID，"root" 是执行命令的用户，"CMD" 是事件类型（表示一个命令被执行），"(command)" 是被执行的命令。

最常见的一些错误消息：

| 错误消息                         | 描述和可能的原因                                             |
| -------------------------------- | ------------------------------------------------------------ |
| Permission denied                | 进程或用户试图访问他们没有权限的文件或目录。可能是文件的权限设置不正确，或者用户没有正确的权限。 |
| No such file or directory        | 进程试图访问的文件或目录不存在。可能是文件或目录的路径错误，或者文件或目录已被删除。 |
| Connection refused               | 进程试图连接到一个不接受连接的网络服务。可能是因为网络服务没有运行，或者防火墙设置阻止了连接。 |
| Cannot allocate memory           | 系统无法分配足够的内存给进程。可能是因为系统的内存已经耗尽，或者进程已经超过了它的内存限制。 |
| Operation not permitted          | 进程试图执行一个它没有权限的操作。例如，非 root 用户试图执行只有 root 用户才能执行的系统调用。 |
| File exists                      | 当进程试图创建一个已经存在的文件或目录时，可能会出现这个错误。 |
| Input/output error               | 通常表示有硬件问题，可能是硬盘故障，或者文件系统错误。       |
| Network is unreachable           | 当进程试图访问的网络不可用时，可能会出现这个错误。           |
| Resource temporarily unavailable | 系统的资源已经耗尽。例如，当系统的文件描述符，进程或线程已经达到上限时，可能会出现这个错误。 |
| Device or resource busy          | 进程试图访问的设备或资源正在被其他进程使用。例如，当一个进程试图卸载一个正在被使用的文件系统时，可能会出现这个错误。 |

### 使用日志进行故障排除

日志是排查系统或应用程序问题的重要工具。通过分析日志，你可以了解问题发生的时间，影响的服务或应用程序，以及可能的原因。

对于简单的问题，如服务无法启动或应用程序崩溃，日志通常会提供足够的信息来确定问题的原因。例如，服务无法启动可能是因为配置文件错误，这种情况下，服务的日志通常会指出错误的配置项和行号。

对于更复杂的问题，可能需要结合其他工具和技术，如网络抓包、性能分析、以及核心转储分析等。

### 安全和合规性

日志提供了系统和用户行为的详细记录，对于安全审计和满足合规性要求非常重要。

例如，安全日志可以记录用户的登录和注销事件，文件的创建、修改和删除事件，以及其他可能的安全相关事件。通过分析这些日志，可以发现潜在的安全威胁，如未授权的访问，异常的行为等。

对于许多组织来说，合规性要求是必须遵守的。例如，许多行业和地区都有保留日志的法规要求，如 PCI DSS（用于处理信用卡数据的组织）和 GDPR（在欧洲运营的组织）。这些要求通常规定了必须记录的事件类型，日志的保留期限，以及日志的保护措施等。
