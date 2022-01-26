---
id: Python 缺失 API 原因分析和解决方法
title: Python 缺失 API 原因分析和解决方法
data: 2022年1月26日
---
在电脑使用过程中，有的朋友可能会遇到 api-ms-win-crt**.dll 缺失的问题，导致一些软件或游戏无法正常运行。这一问题的解决方法网上有些介绍，但到底是何原因，似乎没这方面的分析文章。对此，本人通过多次系统安装、比较和分析，找到其具体原因和解决方法。

## 方法/步骤

Windows 通用 C 运行库（Universal C Runtime）是通过 Windows Update 更新安装到系统的，更新的编号为KB2999226（10.0.10240.16390）或 KB3118401（10.0.10586.9），组件如下：

　　

```
api-ms-win-core-file-l1-2-0.dll
api-ms-win-core-file-l2-1-0.dll
api-ms-win-core-localization-l1-2-0.dll
api-ms-win-core-processthreads-l1-1-1.dll
api-ms-win-core-synch-l1-2-0.dll
api-ms-win-core-timezone-l1-1-0.dll
api-ms-win-core-xstate-l2-1-0.dll
api-ms-win-crt-conio-l1-1-0.dll
api-ms-win-crt-convert-l1-1-0.dll
api-ms-win-crt-environment-l1-1-0.dll
api-ms-win-crt-filesystem-l1-1-0.dll
api-ms-win-crt-heap-l1-1-0.dll
api-ms-win-crt-locale-l1-1-0.dll
api-ms-win-crt-math-l1-1-0.dll
api-ms-win-crt-multibyte-l1-1-0.dll
api-ms-win-crt-private-l1-1-0.dll
api-ms-win-crt-process-l1-1-0.dll
api-ms-win-crt-runtime-l1-1-0.dll
api-ms-win-crt-stdio-l1-1-0.dll
api-ms-win-crt-string-l1-1-0.dll
api-ms-win-crt-time-l1-1-0.dll
api-ms-win-crt-utility-l1-1-0.dll
api-ms-win-eventing-provider-l1-1-0.dll（KB3118401不含此文件）
ucrtbase.dll
```

系统是否安装了此类更新，可以通过查看“系统信息”来判断，操作：Win键+R，输入 cmd /k systeminfo.exe 确定。当然，也可以通过打开控制面板或使用第三方工具来查看。

如果系统中未安装 KB2999226、KB3118401 更新，则利用系统 Windows Update 扫描更新安装，或者单独下载更新进行手动安装。KB2999226、KB3118401 更新适用于下列操作系统，请注意 SP1、SP2 的系统环境要求，如果不满足条件，将无法正常安装。

```
Windows Server 2012 R2
Windows 8.1
Windows RT 8.1
Windows Server 2012
Windows Server 2008 R2 Service Pack 1 (SP1)
Windows 7 Service Pack 1 (SP1)
Windows Server 2008 Service Pack 2 (SP2)
Windows Vista Service Pack 2 (SP2)

注：Windows RT 8.1只能从Windows Update下载安装。
```

## KB2999226、KB3118401更新下载：

- KB2999226 微软下载链接

     https://support.microsoft.com/en-us/help/2999226/update-for-universal-c-runtime-in-windows

- KB3118401 微软下载链接

     https://support.microsoft.com/en-us/help/3118401/update-for-universal-c-runtime-in-windows


下载链接为英文页面，可转换到简体页面下载。方法如下：

1. 打开页面上，根据系统版本选择对应的下载按钮；

2. 新打开页面上，“Select Language“ 处选择 “Chinese(Simplified)” 进入中文页面，然后下载更新。

另外，可以通过其它方式安装解决：

Visual C++ 2015 Redistributable（x86/x64），根据系统版本下载，安装成功即可。

微软连接 https://www.microsoft.com/zh-cn/download/details.aspx?id=48145

## 其他方式

如果系统中已经安装了 KB2999226 或 KB3118401 更新，则 DLL 异常、缺失，大多是磁盘错误引起，按如下步骤修复：

1. 系统分区磁盘查错。Ctrl+Shift+Esc-- 文件 --Ctrl+ 鼠标单击“新(建)任务”；黑窗中键入 chkdsk /r %systemdrive% 回车，如提示：强制卸除此卷？选择 “N” ，计划重启检查？选择 “Y”，重启电脑进行检查，时间较长。

　　检查结束后，观察是否正常，如果还有问题，继续。

2. 卸载更新，重新安装。如果 KB2999226、KB3118401 都安装过，则选择 KB3118401 卸载，然后重新安装。

以 Win7 系统为例：开始--控制面板--程序和功能--查看已安装的更新：根据编号找到更新右键选择“卸载”，重启电脑后，利用 Windows Update 扫描更新安装，或者利用其它方法进行安装。

如果系统是使用集成了 VB/VC 运行库的映像安装的，或者是使用过“磁盘清理”清除过 “Windows 更新”，在卸载 KB2999226 或 KB3118401 更新时，可能会遇到无“卸载”选项的问题，修复方法上面已作了介绍。在修复无效的情况下，可以尝试提取 KB2999226 或 KB3118401 中的 DLL 文件进行替换解决。具体方法：

1. 新建一文件夹，如 d:\KB；

2. 按照前面介绍，下载 KB2999226 或 KB3118401 更新，存放到KB中；

3. 利用批处理来提取DLL文件。打开系统“记事本”，复制粘贴批处理内容，然后选择“另存为”，选择路径到D:\KB，“文件名 ”输入GetDll.bat，“ 保存类型”选择“所有文件(*.*)”，保存。复制内容如下：



```
@echo off

set pn=%~dp0

if "%pn:~-1%"=="\" set pn=%pn:~0,-1%

for /f "delims=" %%i in ('dir %pn%\*.msu /a-d /b 2^>nul') do (

if not exist %pn%\%%~ni md %pn%\%%~ni

start /wait %%i /extract:%pn%\%%~ni

expand %pn%\%%~ni\%%~ni.cab /f:*.dll %pn%\%%~ni

)

echo.&pause
```

4. 双击批处理提取DLL文件，然后找到对应的DLL文件复制到系统目录（或复制到所需软件的安装目录）。文件替换可能会因权限问题无法进行，则先在原文件上右键选择“管理员取得所有权”，然后再进行处理。如果右键没有管理员权限菜单，可利用360方案处理：打开360人工服务，输入“管理员权限右键增加管理员权限”查找方案修复。

