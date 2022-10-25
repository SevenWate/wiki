---
id: Linux 主流社区
title: Linux 主流社区
sidebar_position: 2
data: 2022年8月8日
---

## 官方社区

官方讨论社区：[https://www.linux.org](https://www.linux.org/)

内核归档社区：[https://www.kernel.org](https://www.kernel.org/)

## 开源社区

### Debian 社区

![Openlogo-debianV2.svg](https://static.7wate.com/img/2022/08/08/5509dcaa6438e.png)

> [Debian](https://www.debian.org/) 是一个由普罗大众组成的社区！

#### 概述

在 1993 年 8 月，Ian Murdock 开始着手创建一个符合 Linux 和 GNU 精神的、开放的操作系统。他向其他软件开发人员发出了一份公开邀请，希望他们 为一个基于 Linux 内核的发行版作出贡献，而 Linux 内核在当时还很年轻。**Debian 的设计目标是让各组件能够精巧地结合在一起，并得到仔细的维护和支持，同时接受来自自由软件社区的开放设计、贡献和支持。**

它最初是一个由自由软件极客组成的相处融洽的小团体，后来逐渐发展成为一个由开发人员、贡献者和用户组成的组织良好的大型社区。

#### 特色

**Debian 以其坚守 Unix 和自由软件的精神，以及其给予用户的众多选择而闻名。**现时 Debian 提供了超过 25,000个软件，超过 50,000 个软件包，并正式支持 10 个计算机系统结构。众多知名的 Linux 发行版，例如 Ubuntu、Knoppix 和 Deepin，也都建基于 Debian GNU/Linux。

作为一个大的系统组织框架，Debian 旗下有多种不同操作系统核心的分支计划：

- 主要为采用 **Linux 核心**的 Debian GNU/Linux 系统。
- 采用 **GNU Hurd 核心**的 Debian GNU/Hurd 系统。
- 采用 **FreeBSD 核心**的 Debian GNU/kFreeBSD 系统等。

Debian 主要分三个版本：**稳定版本（stable）、测试版本（testing）、不稳定版本（unstable）**。

Debian 稳定版本通常每隔两年发布一个版本，自发行后会得到为期约**三年的正式支持**，期间会不定期得到小版本更新与持续的安全更新以修复发现的重要问题。

自 Debian 6 开始，Debian 开始了长期支持计划，在每个稳定版三年支持期结束后由长期支持团队提供额外的两年安全更新支持，但不会发布小版本。故**目前的稳定版可以得到总计五年的安全更新支持**。

![Debian 发行版本](https://static.7wate.com/img/2022/08/08/94cc0f104ba00.png)

#### APT 包管理

高级打包工具（Advanced Packaging Tools，APT）是 Debian 及其派生的 Linux 软件包管理器。APT 可以自动下载，配置，安装二进制或者源代码格式的软件包，因此简化了 Unix 系统上管理软件的过程。APT 最早被设计成dpkg 的前端，用来处理 deb 格式的软件包。现在经过 APT-RPM 组织修改，APT 已经可以安装在支持 RPM 的系统管理 RPM 包。

| apt 命令                | apt-get 命令                 | 说明                           |
| ----------------------- | ---------------------------- | ------------------------------ |
| `apt install <package>` | `apt-get install <package>`  | 安装新包                       |
| `apt remove <package>`  | `apt-get remove <package>`   | 卸载已安装的包（保留配置文件） |
| `apt purge <package>`   | `apt-get purge <package>`    | 卸载已安装的包（删除配置文件） |
| `apt update`            | `apt-get update`             | 更新软件包列表                 |
| `apt upgrade`           | `apt-get upgrade`            | 更新所有已安装的包             |
| `apt autoremove`        | `apt-get autoremove`         | 卸载已不需要的包依赖           |
| `apt full-upgrade`      | `apt-get dist-upgrade`       | 自动处理依赖包升级             |
| `apt search <package>`  | `apt-cache search <package>` | 查找软件包                     |
| `apt show <package>`    | `apt-cache show <package>`   | 显示指定软件包的详情           |

#### 社区评价

##### 优点

Debian Project **独立运作，不带有任何商业性质**，不依附任何商业公司或者机构，使得它能够有效地坚守其信奉的自由理念和风格。因为 Debian 不受任何商业公司或者机构控制，所以它不会发生为了某些商业上的利益而牺牲用户的权益，也不会因为公司经营不善或者商业模式转换等变化而导致开发作业终止。而这些特色使得 Debian 在众多的 GNU/Linux 的发行包中独树一帜。

##### 批评

Debian 的**发行周期较长**，稳定版本的包可能已经过时。由于 Debian 很大程度上是为“不动的”平台（例如服务器和用于开发的机器）设计，而这些平台只需要安全性的更新。

一些软件和文件因为未符合 Debian 对**自由软件的严格要求**，并未出现在 Debian 的官方包库中，mplayer 曾经没有被加入为 Debian 的包。另外也有人批评 Debian 把一些专有软件放到“非自由”包库，而非完全把这些软件拒诸门外。相似地，Debian 曾把自由与非自由的包同时放在其“主要”（main）包库内，但现在已把非自由的软件，例如专有的驱动程序，分置于不同的包库。

### Arch 社区

![Arch_Linux_logo.svg](https://static.7wate.com/img/2022/08/08/fa7736b4dd8d1.png)
> [Arch](https://archlinux.org/) 之道：Keep It Simple, Stupid

#### 概述

由加拿大程序设计师兼吉他手 Judd Vinet 从 2001 年早期开始开发 Arch Linux，并在 2002 年 3月 11 日正式发行 0.1 版。2007 下半年，Judd Vinet 退出了 Arch Linux 的开发，改由 Aaron Griffin 接手。

#### 特色

- 简洁：避免任何不必要的添加、修改和复杂增加。
- 现代：Arch 尽全力保持软件处于最新的稳定版本，只要不出现系统软件包破损，都尽量用最新版本。Arch 采用**滚动升级**策略，安装之后可以持续升级。
- 实用：Arch **注重实用性，避免意识形态之争**。最终的设计决策都是由开发者的共识决定。开发者依赖基于事实的技术分析和讨论，避免政治因素，不会被流行观点左右。
- 以用户为中心：Arch Linux 则一直是，永远会是“以用户为中心”。此发行版是为了**满足贡献者的需求，而不是为了吸引尽可能多的用户**。

Arch 之道由**简洁、现代、实用、以用户为中心**构成，或许最好的结词是 **Keep It Simple, Stupid。**

#### Pacman 包管理

Pacman 是一个软件包管理器，作为 Arch Linux 发行版的一部分。它最早由 Arch Linux 的 Judd Vinet 开发。Pacman 可以解决安装过程中的依赖问题，自动下载并且安装所有需要的软件包。

Arch 拥有丰富的 [wiki](https://wiki.archlinux.org/) 文档供使用，几乎可以解决 99% 的问题，这也是其特色之一。

| pacman 命令                       | 说明                                              |
| --------------------------------- | ------------------------------------------------- |
| `pacman -Syu`                     | 升级系统及所有已经安装的包                        |
| `pacman -S <package>`             | 安装新包                                          |
| `pacman -Sy <package>`            | 同步包数据库后再执行安装新包                      |
| `pacman -U <local-file-package>`  | 安装本地包                                        |
| `pacman -U <romote-file-package>` | 安装远程包                                        |
| `pacman -R <package>`             | 删除已安装的包（保留依赖关系的包）                |
| `pacman -Rs <package>`            | 删除已安装的包（删除无依赖关系的包）              |
| `pacman -Rsc <package>`           | 删除已安装的包（删除依赖的包）                    |
| `pacman -Rd <package>`            | 删除已安装的包（不检查依赖关系）                  |
| `pacman -Ss <key-words>`          | 检索包的关键字                                    |
| `pacman -Qs <key-words>`          | 检索已安装的包的关键字                            |
| `pacman -Qi <package>`            | 检索包的详细信息                                  |
| `pacman -Ql <package>`            | 检索包的文件列表                                  |
| `pacman -Sw <package>`            | 下载包（不安装）                                  |
| `pacman -Sc`                     | 清理未安装的包文件（/var/cache/pacman/pkg/ 目录） |
| `pacman -Scc`                     | 清理所有的缓存文件                                |

#### 社区评价

##### 优点

**定制 Linux 操作系统：**大多数热门的 Linux 发行版（比如 Ubuntu 和 Fedora）很像一般我们会看到的预装系统，和 Windows 或者 MacOS 一样。但 Arch 则会更**鼓励你去把操作系统配置的符合你的品味**。鉴于 Arch 允许你在安装时选择你想要的系统部件，你再也不用烦恼怎么处理你不想要的一堆预装软件。作为对比，Ubuntu 会预装大量的软件和桌面应用——很多你不需要、甚至卸载之前都不知道它们存在的东西。

**无需繁琐系统升级：**Arch Linux 采用滚动升级模型，只要你记得‘滚’更新（Arch 用语），你就一直会使用最新的软件包们。

**社区基因和丰富的 Wiki**：Arch Wiki 是一个**无敌文档库**，几乎涵盖了所有关于安装和维护 Arch 以及关于操作系统本身的知识。同时 Arch 用户软件库Arch User Repository （AUR）是一个来自社区的**超大软件仓库**。如果你找了一个还没有 Arch 的官方仓库里出现的软件，那你肯定能在 AUR 里找到社区为你准备好的包。

##### 门槛

因为受众群体为不惧怕命令行的**中高级 Linux 用户**，所以拥有一定的门槛准入。

## 商业社区

### RedHat 社区

![Red_Hat_logo_1.svg](https://static.7wate.com/img/2022/08/08/1871b3cf0a5c5.png)

> 世界领先的企业级开源解决方案供应商。

#### 概述

[红帽](https://www.redhat.com/)（Red Hat）是美国一家以**开发、贩售 Linux 包并提供技术服务**为业务内容的企业，其著名的产品为 Red Hat Enterprise Linux。

1990年代末期，Linux 以自由软件且开放源代码为号召，试图挑战商业且闭源的 Windows 在操作系统市场的霸主地位之际，Red Hat 所推出的 Linux 系统与软件集成包 Red Hat Linux 适时回应了**市场的需求**，从而奠定了 Red Hat 在 Linux 业界的旗手地位。截至 2008 年，Red Hat 仍是提供 Linux 集成服务的**同类企业中规模最大的公司**。Red Hat 于 1999 年 8 月 11 日在纳斯达克上市，2005 年 12 月 19 日纳入纳斯达克 100 指数，2006 年 12 月 12 日转到纽约证券交易所挂牌。2018 年 10 月 28 日，IBM 将以每股 190 美元的现金收购 Red Hat 所有已发行股份，总价值约为 340 亿美元。

红帽产品目前涉及 5 大技术领域：**云计算、存储、虚拟化、中间件、操作系统。**

#### Fedora

![Fedora_logo_(2021).svg](https://static.7wate.com/img/2022/08/08/b742d2b21d59e.png)

[Fedora Linux](https://getfedora.org/)（第七版以前为Fedora Core）是较具知名度的 Linux 发行包之一，由 Fedora 项目社群开发、红帽公司赞助，目标是创建一套新颖、多功能并且自由（开放源代码）的操作系统。**Fedora 是商业化的 Red Hat Enterprise Linux 发行版的上游源码。**

最早 Fedora Linux 社群的目标是为 Red Hat Linux 制作并发布第三方的软件包，然而当免费的 Red Hat Linux 停止发行后，Fedora 社群便集成到 **Red Hat 赞助的 Fedora 项目**，目标是开发出由社群支持的操作系统（事实上，Fedora Project 除了由志愿者组织外，也有许多 **Red Hat 的员工参与开发**）。Red Hat Enterprise Linux 则取代Red Hat Linux 成为官方支持的系统版本。

#### Red Hat Enterprise Linux

![Red_Hat_Enterprise_Linux_textlogo_(without_the_hat).svg](https://static.7wate.com/img/2022/08/08/978ef44593a20.png)

Red Hat Enterprise Linux（RHEL）是一个由 Red Hat 开发的**商业市场导向的 Linux 发行版**。红帽公司从 Red Hat Enterprise Linux 5 开始对企业版 LINUX 的每个版本提供 10 年的支持。Red Hat Enterprise Linux 常被简称为 RHEL，但它并非官方名称。目前 Red Hat Enterprise Linux 大约 3 年发布一个新版本。最初 Red Hat Enterprise Linux 基于 Red Hat Linux，但使用较为保守的发布周期。后来版本都是基于 Fedora。

#### CentOS

![300px-Centos-logo-light.svg](https://static.7wate.com/img/2022/08/08/f67a281f4efaa.png)

CentOS（Community Enterprise Operating System）是 Linux 发行版之一，它是**来自于 Red Hat Enterprise Linux（RHEL）依照开放源代码规定发布的源代码所编译而成**。由于出自同样的源代码，因此有些**要求高度稳定性**的服务器以 CentOS 替代商业版的 Red Hat Enterprise Linux 使用。两者的不同，在于 CentOS 并不包含封闭源代码软件。CentOS 对上游代码的**主要修改是为了移除不能自由使用的商标**。

CentOS 开发团队于 2020 年 12 月 8 日宣布，传统的 CentOS 8 将仅维护至 2021 年底，之后仅维护 CentOS Stream，使其变为滚动发行的散布版。

#### RHEL、CentOS 和 Fedora 的关系

RHEL、CentOS 和 Fedora 的相似之处都是**基于 2004 年停产的 Red Hat Linux**。RHEL、CentOS和Fedora的区别在于：CentOS 好比是社区开发的 RHEL；Fedora 是面向社区、快节奏的RHEL上游贡献者；RHEL 则是基于 Fedora 的企业稳定版。

|        | 免费下载 | 免费使用 | 技术支持 (商业) |
| :----: | :------: | :------: | --------------- |
|  RHEL  |    否    |    否    | 付费            |
| CentOS |    是    |    是    | 不提供          |
| Fedora |    是    |    是    | 不提供          |

#### RPM 包管理

RPM 包管理员（The RPM Package Manager，RPM）是在 Linux 下广泛使用的软件包管理器。RPM 此名词可能是指 .rpm 的文件格式的软件包，也可能是指其本身的软件包管理器（RPM Package Manager）。**最早由 Red Hat 研制，现在也由开源社区开发。**

RPM 软件包分为**二进制包（Binary）、源代码包（Source）和 Delta 包**三种。二进制包可以直接安装在计算机中，而源代码包将会由 RPM 自动编译、安装。源代码包经常以 src.rpm 作为后缀名。

| DNF                       | yum                       | 说明                         |
| ------------------------- | ------------------------- | ---------------------------- |
| `dnf repolist all`        | `yum repolist all`        | 显示所有仓库                 |
| `dnf search <package>`   | `yum search <package>`    | 检索包                       |
| `dnf list installed`      | `yum list installed`      | 列出所有安装的包             |
| `dnf info <package>`      | `yum info <package>`     | 查看软件包详情               |
| `dnf install <package>`   | `yum install <package>`   | 安装软件包及其所需的所有依赖 |
| `dnf update <package>`   | `yum update <package>`   | 升级软件包                   |
| `dnf remove <package>`   | `yum remove <package>`   | 删除软件包                   |
| `dnf reinstall <package>` | `yum reinstall <package>` | 重新安装特定软件包           |
| `dnf distro-sync`         | `yum distro-sync`         | 更新软件包到最新的稳定发行版 |
| `dnf check-update`        | `yum check-update`        | 检查系统所有软件包的更新     |
| `dnf update`             | `yum update`             | 升级所有系统软件包           |
| `dnf clean all`           | `yum clean all`           | 删除缓存                     |

### Ubuntu 社区

![Ubuntu-logo-2022.svg](https://static.7wate.com/img/2022/08/08/db8eb92ea5fac.png)

> 我的存在是因为大家的存在。

#### 概述

[Ubuntu](https://ubuntu.com/) 是基于 Debian，以**桌面应用为主**的 Linux 发行版。Ubuntu 有三个正式版本，包括桌面版、服务器版及用于物联网设备和机器人的 Core 版。

Ubuntu 由英国 Canonical 公司发布，他们提供**商业支持**。Canonical 由南非企业家 Mark Shuttleworth 创立。Canonical 通过销售与 Ubuntu 相关的技术支持和其他服务来产生收益。Ubuntu 项目公开承诺开源软件开发的原则；鼓励人们使用自由软件，研究它的运作原理，改进和分发。

Ubuntu 是著名的 Linux 发行版之一，也是目前最多用户的 Linux 版本。Ubuntu 每**六个月**（即每年的四月与十月）发布一个新版本，长期支持（LTS）版本每两年发布一次。普通版本一般只支持 9 个月，但 **LTS 版本**一般能提供 5 年的支持。

#### 特色

##### 系统管理

Ubuntu 所有**系统相关的任务均需使用 sudo 指令**是它的一大特色，这种方式比传统的以系统管理员账号进行管理工作的方式更为安全，此为 Linux、Unix 系统的基本思维之一。Windows 在较新的版本内也引入了类似的 UAC 机制，但用户数量不多。

##### 开发理念

Ubuntu 计划强调**易用性和国际化**，以便能为尽可能多的人所用。在发布 5.04 版时，Ubuntu 就已经把万国码（UTF-8 Unicode）作为系统默认编码，用以应对各国各地区不同的语言文字，试图给用户提供一个无乱码的交流平台。它在语言支持方面，算是 Linux 发行版中相当好的。

##### 发布周期

Ubuntu每 6 个月发布一个新版，每个版本都有代号和版本号。其中长期支持版本（LTS），更新维护的时间比较长，约2年会推出一个LTS版本。

![Ubuntu 更新周期](https://static.7wate.com/img/2022/08/08/02b9d967b36ff.png)

#### 社区评价

2005 年于伦敦举行的Linux世界论坛及会议（LinuxWorld Conference and Expo）上，Ubuntu 被评为读者所选的**最佳Linux发行版**。

##### 批评

Ubuntu 源自 Debian，但 Debian 的创始人 Ian Murdock 却不满意 Ubuntu。他认为，虽然 Ubuntu 是优秀的Linux 发行版，也促进了 Debian 的全球化，但 **Ubuntu 另建软件包，而不是直接改进 Debian 已有的软件包，因此出现了与 Debian 不兼容的问题**。他希望 Ubuntu 能与 Debian 进行更为紧密的合作，使其改进也可以被Debian 所采用。

2010 年欧洲 GUADEC 会议上公布的“GNOME开发者分布”，显示出 Ubuntu 的母公司 Canonical 对 GNOME 项目的**贡献十分小**。由此，一些人抱怨，觉得 Canonical 应该作出更多的贡献。前 Red Hat 开发者 Greg DeKoenigsberg 亦对 Ubuntu 批评：“Red Hat 对开源的贡献远高于 Canonical，而 **Canonical 是一家伪装成技术企业的营销机构**”，后来对其言论进行了公开道歉，但一直坚持 **Canonical 应该为Linux作出更大的贡献**。

因为 Ubuntu 基于 **Debian 的不稳定分支**（sid），更容易遇到和弹出内部错误。

由于 Ubuntu 母公司 Canonical 帮助微软公司开发了 **Windows 下的 Linux 兼容层 Windows Subsystem for Linux**，部分用户称是卖友求荣。

## 特色社区

### Tails 社区

![Tails-logo-flat-inverted.svg](https://static.7wate.com/img/2022/08/08/27870ae72a536.png)

> Tails is a portable operating system that protects against surveillance and censorship.

#### 概述

[Tails](https://tails.boum.org/)（The Amnesic Incognito Live System）是一个侧重安全，基于 Debian **专注于个人隐私和匿名性**，并将非匿名通信进行封锁的操作系统。这个系统所有的**外部通信均强制通过 Tor 进行传送**，此系统设计为使用 Live DVD 或者 Live USB 进行引导，且**不让计算机在非显式行为下留下数据痕迹**。另外，Tor Project 对于此项开发提供经济支持。

## 中国社区

### Deepin 社区

![120px-Deepin_logo.svg](https://static.7wate.com/img/2022/08/08/fd84b79fdbab5.png)

> 漂亮的设计、贴心的人机交互、安全友好的社区环境让您感觉宾至如归。

#### 概述

[深度操作系统](https://www.deepin.org/)，亦称为 deepin，原名 Hiweed Linux 及 Linux deepin，是武汉深之度科技有限公司开发的开源操作系统。它是**基于 Debian 的稳定版本的一个 Linux 发行版**。它可以运行在个人计算机和服务器上，并免费提供给个人用户使用。deepin 因其美观和易用性而广受赞誉。据 DistroWatch 的数据，截至 2017 年，deepin 是最受欢迎的源自中国的 Linux 发行版。

### UOS 社区

![225px-Unity_Operating_System,_logo.svg](https://static.7wate.com/img/2022/08/08/55f9407e0430c.png)

> 极致体验、安全易用。

#### 概述

[统信操作系统](https://www.chinauos.com/)（Unity Operating System，UOS），是 2019 年由中国电子集团、武汉深之度科技有限公司、南京诚迈科技、中兴新支点在内的多家中国操作系统核心企业**自愿发起并共同打造**的基于 Linux 的操作系统，UOS 是其目前代号。

统信操作系统的特点是统一发布渠道、应用商店、UI、内核、文档及开发接口，并采用开源社区的方式吸引上下游产业链的共同支持。

硬件方面，统一操作系统仅支持中国大陆的华为海思、飞腾、兆芯、龙芯、海光及申威中央处理器。[1]
