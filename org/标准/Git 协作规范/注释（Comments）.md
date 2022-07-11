---
id: 注释（Comments）
title: 注释（Comments）
sidebar_position: 1.5
data: 2022年7月11日
---
## 规范

**代码**就是**最好的注释**，尽量使用**英文注释**，坚决**不滥用**注释。**不需要**标明**作者、时间、改动记录**，请把这些放在 **Git** 对应**提交日志**中！

### 代码注释

#### 行注释

行注释位于该**行代码前**，建议切勿代码后注释。

规范：

```javascript
// 注释文字
代码
```

示例：

```javascript
// 启用便携式支持
const portable = bootstrapNode.configurePortable(product);
```

#### 关键字注释

注释块**尾部**，关键字前添加 `@` 符号。

规范：

```javascript
/* 
 * 注释
 * @type{变量} 注释
 * @param{变量} 注释
 * @returns{变量} 注释
 */
```

示例：

```javascript
/*
 * @param {string} dir
 * @returns {Promise<string>}
 */
function mkdirp(dir) {
 return new Promise((resolve, reject) => {
  fs.mkdir(dir, { recursive: true }, err => (err && err.code !== 'EEXIST') ? reject(err) : resolve(dir));
 });
}
```

### 版权注释

版权注释位于**代码文件首行**。

规范：

```javascript
/*----------------
 * 版权归 XX 所有
 * 遵循 XX 开源协议
 *----------------*/

代码···
```

上下分割线要求是描述文字长度 1.1 倍，`/* */` 不令其一行，描述文字前保持 1 个空格。

示例：

```javascript
/*---------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *---------------------------------------------------------------------------------------*/
 
const perf = require('./vs/base/common/performance');
perf.mark('code/didStartMain');
```
