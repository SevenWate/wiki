---
id: GnuPG 简明笔记
title: GnuPG 简明笔记
data: 2022年1月25日
---

## 简介

GnuPG（GNU Privacy Guard，GPG）是一款非对称加密的开源软件，它是PGP加密软件的满足GPL协议的实现。GnuPG依照由IETF制定的en:OpenPGP技术标准设计。GnuPG是用于**加密、数字签章**及产生非对称匙对的软件。GPG 兼容 PGP（Pretty Good Privacy）的功能。

如果你想发送加密信息，首先你要得到接收者的公钥，然后通过该公钥加密传输，接收者使用私钥就可解密并读取文件，同时也可以在公共网络用数字签章表明身份和安全性。

## GPG

### 安装

linux 默认安装 GPG，windows 和 mac 安装方法大同小异。

### 配置

```shell
# GPG 配置文件介绍
~/.gnupg - 配置目录
~/.gnupg/gpg.conf – 配置文件
~/.gnupg/trustdb.gpg – 信任库
~/.gnupg/pubring.gpg – 公钥库
~/.gnupg/secring.gpg – 私钥库
```

### 生成密钥

```shell
gpg --gen-key
```

```shell
1.请选择您要使用的密钥种类：
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (仅用于签名)
   (4) RSA (仅用于签名)
您的选择？ 1

2.RSA 密钥长度应在 1024 位与 4096 位之间。
您想要用多大的密钥尺寸？(2048)4096
您所要求的密钥尺寸是 4096 位
请设定这把密钥的有效期限。
         0 = 密钥永不过期
      <n>  = 密钥在 n 天后过期
      <n>w = 密钥在 n 周后过期
      <n>m = 密钥在 n 月后过期
      <n>y = 密钥在 n 年后过期
密钥的有效期限是？(0) 0
密钥永远不会过期
以上正确吗？(y/n)y


3. You need a user ID to identify your key; the software constructs the user ID
from the Real Name, Comment and Email Address in this form:
    "Heinrich Heine (Der Dichter) <heinrichh@duesseldorf.de>"

真实姓名：zhouzhongping
电子邮件地址：zhouzhongping@7wate.com
注释：测试使用
您正在使用‘utf-8’字符集。
您选定了这个用户标识：
    “zhouzhongping (测试使用) <zhouzhongping@7wate.com>”

4.更改姓名(N)、注释(C)、电子邮件地址(E)或确定(O)/退出(Q)？o

5.您需要一个密码来保护您的私钥。

我们需要生成大量的随机字节。这个时候您可以多做些琐事(像是敲打键盘、移动
鼠标、读写硬盘之类的)，这会让随机数字发生器有更好的机会获得足够的熵数。
```

根据提示结合需求填写，生成 GPG 密钥。

## 常用命令

### 查看

公钥

```shell
gpg --list-keys
gpg -k
```

私钥

```shell
gpg --list-secret-keys
gpg -K
```

### 导出

公钥

```shell
gpg --armor --output public-key.txt --export [用户ID]
```

私钥

```shell
gpg --armor --output private-key.txt --export-secret-keys [用户ID]
```

--armor 生成 asc 后缀的 ASCII 类型的文本文件，否则生成 gpg 后缀的二进制文件

### 导入

本地公钥文件

```shell
gpg --import [密钥文件]
```

服务器公钥文件

```shell
gpg --keyserver [服务器] --search-keys [用户ID]
```

### 公布

发布至公开服务器

```shell
gpg --send-keys [用户ID] --keyserver [服务器]
```

发布用户指纹

```shell
gpg --fingerprint [用户ID]
```

### 删除

删除指定公钥

```shell
gpg --delete-key [用户id]
```

删除指定密钥

```shell
gpg --delete-secret-keys [用户id]
```

吊销指定密钥

## 加密/解密

加密文件

```shell
gpg --recipient [用户ID] --output demo.en.txt --encrypt demo.txt
```

解密文件

```shell
gpg --decrypt demo.en.txt --output demo.de.txt
gpg demo.en.txt
```

签名文件（GPG 格式）

```shell
gpg --sign test.txt
```

签名文件（ASCII 格式）

```shell
gpg --clearsign test.txt
```

生成单独签名

```shell
gpg -a --detach-sign test.txt
```

-a 生成 ASCII 格式

验证签名

```shell
gpg --verify test.txt.asc test.txt
```
