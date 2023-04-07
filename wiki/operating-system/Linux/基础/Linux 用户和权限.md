---
title: Linux 用户和权限
description: Linux 用户和权限
keywords:
- Linux
- 用户
- 权限
tags:
- Linux
sidebar_position: 4
author: 7Wate
date: 2023-03-30
---

## 概述

Linux 多用户系统的历史可以追溯到 1960 年代的 Unix 系统，Unix 是一种多用户、多任务的操作系统，被广泛应用于大型计算机和服务器上。随着 Linux 的发展，它也成为了一种强大的多用户操作系统，并被广泛应用于服务器、个人电脑和移动设备等领域。

Linux 多用户系统的设计基于以下原则：

- 每个用户都有一个唯一的标识符（UID），用于标识其身份。
- 每个用户可以分配到一个或多个用户组（Group），用户组也有一个唯一的标识符（GID）。
- 每个文件和目录都有一个所有者（Owner）和一个所属用户组（Group），用于控制访问权限。
- 每个用户都有一个主目录（Home Directory），用于存储其个人文件和设置。
- 系统管理员可以创建、删除和管理用户和用户组，以及控制用户的权限和访问权限。

Linux 多用户系统的实现基于以下机制：

- 用户和用户组的信息存储在特定的配置文件中，如 /etc/passwd、/etc/shadow、/etc/group 和 /etc/gshadow。
- 用户登录时需要进行身份验证，通常使用用户名和密码进行认证。
- 系统管理员可以使用命令行工具或图形界面来创建、删除和管理用户和用户组，以及配置用户的权限和访问权限。
- Linux 系统提供了许多安全机制，如访问控制列表（ACL）、文件系统权限和 SELinux 等，用于保护系统和用户的数据安全。

目前随着云计算、容器化和虚拟化技术的发展，Linux 多用户系统的方向也在不断发展。未来的趋势包括：

- 更加丰富和灵活的权限管理机制，如更细粒度的 ACL 和更灵活的访问控制策略。
- 更加集成和自动化的用户和权限管理工具，如自动化用户创建和删除、自动化权限管理和集成用户和权限管理工具等。
- 更加安全和可靠的身份验证机制，如双因素身份验证和基于生物识别的身份验证等。
- 更加简单和易用的图形界面和命令行工具，以方便用户进行用户和权限管理操作。

Linux 多用户系统具有强大的用户和权限管理功能，可以帮助管理员有效地管理系统和保护用户数据的安全。管理员可以使用命令行工具或图形界面来创建、删除和管理用户和用户组，以及配置用户的权限和访问权限。

在使用 root 用户时，应注意系统的安全性，并使用 `sudo` 或 `su` 命令以普通用户身份执行命令。文件和目录的权限由三个组件组成，每个组件可以设置为读取、写入和执行权限，这些权限用数字表示。

在 Linux 系统中，有多个配置文件存储用户和权限信息，包括 `/etc/passwd`、`/etc/shadow`、`/etc/group`、`/etc/gshadow`、`/etc/login.defs` 和 `/etc/adduser.conf` 等文件。

## 用户

### 创建

#### useradd

`useradd` 命令是 Linux 系统中的一个命令行工具，用于创建新用户帐户。通过 `useradd` 命令，可以指定新用户的用户名、用户 ID（UID）、主目录、默认 shell 和密码等信息。

在大多数 Linux 系统中，只有管理员用户（如 root 用户）可以创建新用户。通常情况下，管理员用户需要使用 `sudo` 命令或以 root 用户身份登录系统，才能使用 `useradd` 命令创建新用户。

```shell
# 创建一个新用户
sudo useradd john
```

| 选项                           | 描述                                                | 示例                                   |
| ------------------------------ | --------------------------------------------------- | -------------------------------------- |
| `-c, --comment COMMENT`        | 指定用户的注释字段。                                | `sudo useradd -c "John Smith" john`    |
| `-d, --home-dir HOME_DIR`      | 指定用户的家目录。                                  | `sudo useradd -d /home/john john`      |
| `-e, --expiredate EXPIRE_DATE` | 指定用户的账户过期日期。                            | `sudo useradd -e 2023-06-30 john`      |
| `-f, --inactive INACTIVE`      | 设置密码过期后的不活动期限为 INACTIVE，以禁用账户。 | `sudo useradd -f 30 john`              |
| `-g, --gid GROUP`              | 指定用户的主用户组。                                | `sudo useradd -g staff john`           |
| `-G, --groups GROUPS`          | 指定用户所属的其他用户组。                          | `sudo useradd -G staff,developer john` |
| `-m, --create-home`            | 创建用户的家目录。                                  | `sudo useradd -m john`                 |
| `-p, --password PASSWORD`      | 指定用户的加密密码。                                | `sudo useradd -p password_hash john`   |
| `-s, --shell SHELL`            | 指定用户的默认 shell。                              | `sudo useradd -s /bin/bash john`       |
| `-u, --uid UID`                | 指定用户的 UID。                                    | `sudo useradd -u 1001 john`            |

### 管理

#### id

`id` 命令用于显示用户和用户组的标识信息。它可以用于查看当前用户或指定用户的 UID（用户标识符）、GID（组标识符）和所属用户组的名称。

```shell
debian@SevenWate-PC:$ id
uid=1000(debian) gid=1000(debian) groups=1000(debian),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev)
```

#### whoami

`whoami` 命令用于显示当前登录用户的用户名。它是一个非常简单的命令，通常用于 shell 脚本和命令行中，以便在需要当前用户的用户名时快速获取它。

```shell
debian@SevenWate-PC:$ whoami
debian
```

#### chfn

`chfn`（Change Finger）命令用于修改用户信息。该命令可以用来更改用户的全名、办公室电话、家庭电话、其他说明等信息。

```shell
# 更改当前用户信息
debian@SevenWate-PC:$ chfn
Password:
Changing the user information for debian
Enter the new value, or press ENTER for the default
        Full Name:
        Room Number []:
        Work Phone []:
        Home Phone []:
```

| 选项                | 描述                       | 示例                                           |
| ------------------- | -------------------------- | ---------------------------------------------- |
| `-f, --full-name`   | 更改用户的全名。           | `chfn --full-name "John Doe" [username]`       |
| `-h, --home-phone`  | 更改用户的家庭电话号码。   | `chfn --home-phone "123-456-7890" [username]`  |
| `-o, --other`       | 更改用户的其他说明。       | `chfn --other "这是一个测试用户" [username]`   |
| `-r, --room-number` | 更改用户的办公室电话号码。 | `chfn --room-number "555-1234" [username]`     |
| `-u, --uid`         | 更改用户的 UID。           | `chfn --uid 1001 [username]`                   |
| `-c, --comment`     | 更改用户的注释字段。       | `chfn --comment "这是一个测试用户" [username]` |

#### chsh

`chsh` （Change Shell）命令是 Linux 系统中的一个命令行工具，用于更改用户的默认 shell。默认情况下，用户登录后会进入一个特定的 shell 环境，该环境定义了用户与系统交互的方式。`chsh` 命令可用于更改用户的默认 shell，从而改变用户与系统交互的方式。

```shell
# 查看当前系统 shell
cat /etc/shells

# 更改当前用户的默认 shell
chsh -s /bin/bash

# 更改其他用户的默认 shell
chsh -s /bin/bash john
```

#### passwd

`passwd` （Password）命令是 Linux 系统中的一个命令行工具，用于更改用户的密码或口令。默认情况下，每个 Linux 用户都有一个口令或密码来保护其账户的安全性。`passwd` 命令可用于更改密码或口令。

```shell
# 更改当前用户的
passwd 

# 更改其他用户的密码
passwd john
```

| 选项           | 描述                                   | 示例                        |
| -------------- | -------------------------------------- | --------------------------- |
| `-l, --lock`   | 锁定用户的账户，禁止用户登录。         | `sudo passwd --lock john`   |
| `-u, --unlock` | 解锁用户的账户，允许用户登录。         | `sudo passwd --unlock john` |
| `-d, --delete` | 删除用户的密码或口令，允许无密码登录。 | `sudo passwd --delete john` |
| `-e, --expire` | 强制用户在下一次登录时更改密码或口令。 | `sudo passwd --expire john` |
| `-S, --status` | 显示用户密码或口令的状态。             | `passwd --status john`      |

#### usermod

`usermod`（User Modify）命令是 Linux 系统中的一个命令行工具，用于修改用户的属性或配置。`usermod` 命令允许您更改现有用户的用户名、UID、主目录、默认 shell 等信息，还可以将用户添加到其他用户组中。

| 选项                           | 描述                                                | 示例                                 |
| ------------------------------ | --------------------------------------------------- | ------------------------------------ |
| `-c, --comment COMMENT`        | 指定用户的注释字段。                                | `sudo usermod -c "John Smith" john`  |
| `-d, --home HOME_DIR`          | 指定用户的家目录。                                  | `sudo usermod -d /home/newhome john` |
| `-e, --expiredate EXPIRE_DATE` | 指定用户的账户过期日期。                            | `sudo usermod -e 2023-06-30 john`    |
| `-f, --inactive INACTIVE`      | 设置密码过期后的不活动期限为 INACTIVE，以禁用账户。 | `sudo usermod -f 30 john`            |
| `-g, --gid GROUP`              | 指定用户的主用户组。                                | `sudo usermod -g staff john`         |
| `-aG, --add-subgroups`         | 将用户添加到附加组                                  | `sudo usermod -aG audio john`        |
| `-l, --login NEW_LOGIN`        | 更改用户的登录名。                                  | `sudo usermod -l newname john`       |
| `-p, --password PASSWORD`      | 指定用户的加密密码。                                | `sudo usermod -p password_hash john` |
| `-s, --shell SHELL`            | 指定用户的默认 shell。                              | `sudo usermod -s /bin/bash john`     |
| `-u, --uid UID`                | 指定用户的 UID。                                    | `sudo usermod -u 1001 john`          |

### 删除

#### userdel

`userdel`（User Delete）命令是 Linux 系统中的一个命令行工具，用于删除现有用户帐户。默认情况下，`userdel` 命令仅删除用户的帐户，而不删除用户的主目录和邮件箱。如果需要删除用户的主目录和邮件箱，可以使用 `-r` 选项。

```shell
# 删除一个用户
sudo userdel john
```

| 选项           | 描述                                               | 示例                   |
| -------------- | -------------------------------------------------- | ---------------------- |
| `-f, --force`  | 强制删除用户，即使用户当前已登录或有未完成的进程。 | `sudo userdel -f john` |
| `-r, --remove` | 删除用户及其主目录。                               | `sudo userdel -r john` |

## 用户组

### 创建

#### groupadd

`groupadd` 命令是 Linux 系统中的一个命令行工具，用于创建新的用户组。管理员用户（如 root 用户）可以使用 `groupadd` 命令创建新组。

```shell
# 创建一个新组
sudo groupadd newgroup
```

| 选项                  | 描述                                                         | 示例                                       |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| `-g, --gid GID`       | 指定新组的 GID。如果未指定，系统会自动分配一个未使用的 GID。 | `sudo groupadd -g 1001 newgroup`           |
| `-K, --key KEY=VALUE` | 指定要应用于新组的 SELinux 标签。                            | `sudo groupadd -K "type=staff_u" newgroup` |
| `-r, --system`        | 创建一个系统组，该组的 GID 小于 1000，且不会在登录屏幕上显示。 | `sudo groupadd -r newgroup`                |

### 管理

#### groups

`groups` 命令是 Linux 系统中的一个命令行工具，用于显示当前用户所属的用户组。如果没有指定用户名，则 `groups` 命令将显示当前用户所属的用户组。

```shell
# 显示当前用户所属的用户组
groups

# 显示指定用户所属的用户组
groups john
```

#### gpasswd

`gpasswd` （Group Password）命令是 Linux 系统中的一个命令行工具，用于管理用户组的密码和成员列表。管理员用户（如 root 用户）可以使用 `gpasswd` 命令来添加或删除用户组的成员，或者设置或删除用户组的密码。

```shell
# 设置组密码
sudo gpasswd newgroup
```

| 选项                            | 描述                                                         | 示例                                 |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| `-a, --add USER`                | 将指定的用户添加到指定的用户组中。                           | `sudo gpasswd -a john newgroup`      |
| `-d, --delete USER`             | 从指定的用户组中删除指定的用户。                             | `sudo gpasswd -d john newgroup`      |
| `-M, --members USER1,USER2,...` | 将指定的用户列表设置为指定组的成员。                         | `sudo gpasswd -M john,jane newgroup` |
| `-r, --remove-password`         | 从指定的用户组中删除密码。                                   | `sudo gpasswd -r newgroup`           |
| `-R, --restrict`                | 启用限制模式。在此模式下，只有组的所有者和管理员才能更改组成员身份。 | `sudo gpasswd -R newgroup`           |

#### groupmod

`groupmod` （Group Modify）命令是 Linux 系统中的一个命令行工具，用于修改已有用户组的属性，例如组 ID、组名称和组密码等。管理员用户（如 root 用户）可以使用 `groupmod` 命令来更改用户组的属性。

| 选项                       | 描述                         | 示例                                   |
| -------------------------- | ---------------------------- | -------------------------------------- |
| `-g, --gid GID`            | 将组的 GID 设置为指定的值。  | `sudo groupmod -g 1001 newgroup`       |
| `-n, --new-name NEW_GROUP` | 将组的名称更改为指定的名称。 | `sudo groupmod -n newgroup2 newgroup`  |
| `-o, --non-unique`         | 允许使用非唯一 GID 创建组。  | `sudo groupmod -o newgroup`            |
| `-p, --password PASSWORD`  | 将组密码设置为指定的密码。   | `sudo groupmod -p mypassword newgroup` |

### 删除

#### groupdel

`groupdel` （Group Delete）是 Linux 系统中的一个命令行工具，用于删除一个用户组。删除用户组时，系统会自动将该组的所有成员从该组中删除，并将文件和目录中的组 ID 更改为其他组。

```shell
# 删除一个用户组
sudo groupdel newgroup
```

| 选项                    | 描述                               | 示例                                         |
| ----------------------- | ---------------------------------- | -------------------------------------------- |
| `-f, --force`           | 强制删除用户组，即使该组仍有成员。 | `sudo groupdel -f newgroup`                  |
| `-h, --help`            | 显示命令帮助信息。                 | `groupdel -h`                                |
| `-R, --root CHROOT_DIR` | 在指定的 chroot 环境中运行命令。   | `sudo groupdel --root /mnt/newroot newgroup` |
| `-v, --verbose`         | 显示命令详细输出。                 | `sudo groupdel -v newgroup`                  |

## root 超级用户

在 Linux 系统中，root 是超级用户，具有完全的系统管理权限。root 用户可以执行任何命令，并访问系统中的所有文件和资源。在默认情况下，root 用户的密码是空的，因此在安全性方面需要额外注意。

### su

`su`（Switch User）命令是 Linux 系统中的一个命令行工具，它允许您在不注销当前用户的情况下切换到其他用户帐户。默认情况下，`su` 命令切换到超级用户帐户（root）。

```shell
# 默认切换 root
su

# 切换到 debian
su debian
```

| 选项                    | 描述                                                         | 示例                    |
| ----------------------- | ------------------------------------------------------------ | ----------------------- |
| `-c, --command COMMAND` | 在切换到另一个用户后执行指定的命令或脚本。                   | `su -c "ls -l" user1`   |
| `-s, --shell SHELL`     | 指定要使用的 shell，而不是默认 shell。                       | `su -s /bin/bash user1` |
| `-l, --login`           | 在切换用户时模拟完整的登录过程，包括加载环境变量、切换工作目录等。 | `su -l user`            |

### sudo

在 Linux 系统中，`sudo` 命令可以让普通用户以超级用户的权限执行某些命令。要使用 `sudo` 命令，首先需要创建一个具有 `sudo` 权限的用户。以下是创建 `sudo` 用户的步骤：

```shell
1.创建用户
sudo adduser username

2.将用户添加到 sudo 组
sudo usermod -aG sudo username

3.检查用户是否已成功添加到 sudo 组
groups username

4.确认用户可以使用 sudo 命令
sudo -l -U username
```

| 选项                    | 描述                                                         | 示例                                    |
| ----------------------- | ------------------------------------------------------------ | --------------------------------------- |
| `-u, --user USER`       | 指定要切换到的用户。                                         | `sudo -u user1 ls -l`                   |
| `-g, --group GROUP`     | 指定要切换到的组。                                           | `sudo -g group1 ls -l`                  |
| `-k, --reset-timestamp` | 重置 `sudo` 命令的时间戳。                                   | `sudo -k`                               |
| `-v, --validate`        | 验证 `sudo` 命令的权限，但不执行任何命令。                   | `sudo -v`                               |
| `-l, --list [COMMAND]`  | 显示 `sudo` 命令当前用户的授权信息，或显示指定命令的授权信息。 | `sudo -l` 或 `sudo -l /usr/bin/apt-get` |
| `-h, --help`            | 显示 `sudo` 命令的帮助信息。                                 | `sudo -h`                               |
| `-V, --version`         | 显示 `sudo` 命令的版本信息。                                 | `sudo -V`                               |

### newusers

`newusers` 是一个 Linux 系统命令，用于批量创建新的用户账号。

该命令可以从指定的文件中读取一组用户信息，每行包括用户名、密码、用户ID、主组ID、全名、主目录、默认 shell 等字段。`newusers` 会自动创建这些用户账号，并设置相应的密码、主目录和 shell。

```shell
-------------------- user.txt --------------------
user1:x:1001:1001:User One:/home/user1:/bin/bash
user2:x:1002:1002:User Two:/home/user2:/bin/bash
user3:x:1003:1003:User Three:/home/user3:/bin/bash
--------------------------------------------------

# 读取 user.txt 批量创建用户
newusers user.txt
```

| 选项                   | 描述                       | 示例                                                         |
| ---------------------- | -------------------------- | ------------------------------------------------------------ |
| `-u, --uid`            | 指定起始用户ID             | `newusers -u 1000 users.txt`                                 |
| `-g, --gid`            | 指定起始组ID               | `newusers -g 1000 users.txt`                                 |
| `-c, --comment`        | 指定用户的注释信息         | `newusers -c "User One" users.txt`, `newusers --comment "User One" users.txt` |
| `-s, --shell`          | 指定新用户的默认 shell     | `newusers -s /bin/bash users.txt`, `newusers --shell /bin/bash users.txt` |
| `-H, --no-create-home` | 禁止创建用户主目录         | `newusers -H users.txt`, `newusers --no-create-home users.txt` |
| `-N, --no-user-group`  | 禁止创建与用户名同名的主组 | `newusers -N users.txt`, `newusers --no-user-group users.txt` |

### chpasswd

`chpasswd` 命令用于批量修改用户的密码，可以一次性修改多个用户的密码，而不需要逐个输入密码。它可以从标准输入、文件或命令行参数中读取用户密码信息，并将其应用于指定的用户账户。

```shell
-------------------- users.txt --------------------
user1:password1
user2:password2
--------------------------------------------------

# 将 user1 的密码修改为 password1
echo 'user1:password1' | chpasswd

# 批量更新，使用 md5 加密方式
sudo chpasswd -m < users.txt
```

| 选项                 | 描述                       | 示例                                         |
| -------------------- | -------------------------- | -------------------------------------------- |
| `-e, --encrypted`    | 指定密码已加密             | `chpasswd -e < users.txt`                    |
| `-h, --help`         | 显示帮助信息并退出         | `chpasswd --help`                            |
| `-m, --md5`          | 指定密码以 MD5 格式加密    | `chpasswd -m < users.txt`                    |
| `-c, --crypt-method` | 指定密码加密方法           | `chpasswd --crypt-method SHA512 < users.txt` |
| `-R, --root`         | 以 root 权限运行命令       | `sudo chpasswd --root`                       |
| `-u, --update`       | 仅更新现有用户的密码       | `chpasswd -u < users.txt`                    |
| `-I, --inactive`     | 指定密码失效时间，单位为天 | `chpasswd --inactive 7 < users.txt`          |

### pwck、grpck

`pwck` （Password Check）和 `grpck` （Group Check）命令是 Linux 系统中用于检查 `/etc/passwd`、`/etc/shadow` 和 `/etc/group` 等文件的格式和完整性的工具。这些命令可以帮助系统管理员查找和修复这些文件中的错误，以确保系统的安全性和稳定性。

- 用户配置文件：`/etc/passwd` 文件是 Linux 系统中存储用户信息的文件之一。该文件包含每个用户的用户名、用户 ID、主目录、登录 shell 等信息。

- 用户密码配置文件：`/etc/shadow` 文件是 Linux 系统中存储用户密码信息的文件之一。该文件包含每个用户的密码哈希值、最后一次更改密码的日期等信息。

- 用户组配置文件：`/etc/group` 文件是 Linux 系统中存储用户组信息的文件之一。该文件包含每个用户组的名称、组 ID 和组成员列表等信息。

- 用户组密码配置文件：`/etc/gshadow` 文件是 Linux 系统中存储用户组密码信息的文件之一。该文件包含每个用户组的密码哈希值、管理员列表和成员列表等信息。

- 默认配置文件：`/etc/login.defs` 文件是 Linux 系统中存储默认登录选项的文件之一。该文件包含默认的密码长度、最大尝试登录次数等信息。

- 配置文件：`/etc/adduser.conf` 文件是 Linux 系统中存储新用户默认配置选项的文件之一。该文件包含新用户的默认主目录、默认 shell 等信息。

| 选项             | 描述                     | 示例                                    |
| ---------------- | ------------------------ | --------------------------------------- |
| `-r, --root DIR` | 指定要检查的根目录       | `pwck/grpck -r /mnt`                    |
| `-s, --silent`   | 安静模式，只输出错误信息 | `pwck/grpck -s /etc/passwd /etc/shadow` |
| `-q, --quiet`    | 安静模式，不输出信息     | `pwck/grpck -q /etc/passwd /etc/group`  |
| `-n, --nocheck`  | 不检查用户主目录和组文件 | `pwck/grpck -n /etc/passwd /etc/shadow` |

### pwconv、pwunconv、grpconv、grpunconv

`pwconv`（Password Conversion）、`pwunconv`（Password unConversion）、`grpconv` （Group Conversion）和 `grpunconv`（Group unConversion） 命令是 Linux 系统中的用于转换密码文件和组文件格式的工具。这些工具可以帮助系统管理员将 `/etc/passwd`、`/etc/shadow` 和 `/etc/group` 等文件的格式转换为其他格式或者将已转换的文件恢复为原始格式。

这些工具的作用如下：

- `pwconv` 命令：将 `/etc/passwd` 和 `/etc/shadow` 文件的格式从标准格式（包括用户名、密码和 UID 等信息）转换为 shadow 格式（将密码单独存储在 `/etc/shadow` 文件中）。
- `pwunconv` 命令：将 `/etc/passwd` 和 `/etc/shadow` 文件的格式从 shadow 格式转换为标准格式。
- `grpconv` 命令：将 `/etc/group` 文件的格式从标准格式（包括组名、组密码和 GID 等信息）转换为 Gshadow 格式（将组密码单独存储在 `/etc/gshadow` 文件中）。
- `grpunconv` 命令：将 `/etc/group` 文件的格式从 Gshadow 格式转换为标准格式。

这些工具的用途包括但不限于：

- 提高系统的安全性：使用 shadow 格式将用户密码单独存储在 `/etc/shadow` 文件中，可以防止未经授权的用户访问密码信息，提高系统的安全性。
- 管理用户和组的身份验证：通过转换和恢复密码和组文件格式，可以更轻松地管理用户和组的身份验证信息，例如更改密码、添加或删除用户和组等操作。
