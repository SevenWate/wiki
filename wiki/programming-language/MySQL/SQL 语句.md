---
title: SQL 语句
description: SQL 语句
keywords:
- SQL
- 语句
tags:
- SQL
sidebar_position: 2
author: 7Wate
date: 2022-08-31
---
## SQL

全称 Structured Query Language，结构化查询语言。操作关系型数据库的编程语言，定义了一套操作关系型数据库统一标准。

![img](https://static.7wate.com/img/2022/05/11/9459b0983c451.png)

1. SQL 语句可以单行或多行书写，以分号结尾。
2. SQL 语句可以使用空格 / 缩进来增强语句的可读性。
3. MySQL 数据库的 SQL 语句不区分大小写，**关键字建议使用大写**。
4. 注释：
    1. 单行注释：-- 注释内容 或 # 注释内容
    2. 多行注释：/ *注释内容* /

SQL 语句，根据其功能，主要分为四类：DDL、DML、DQL、DCL。

| 分类 | 说明                                                   |
| :--- | :----------------------------------------------------- |
| DDL  | 数据定义语言，用来定义数据库对象 (数据库，表，字段)    |
| DML  | 数据操作语言, 用来对数据库表中的数据进行增删改         |
| DQL  | 数据查询语言，用来查询数据库中表的记录                 |
| DCL  | 数据控制语言，用来创建数据库用户、控制数据库的访问权限 |

## DDL

数据定义语言，定义数据库对象 (数据库，表，字段)

### 数据库操作

查询所有数据库

```sql
SHOW DATABASES
```

使用某个数据库

```sql
USE 数据库名;
```

查询当前数据库

```sql
SELECT DATABASE();
```

创建数据库

UTF8 字符集长度为 3 字节，有些符号占 4 字节，所以创建数据库时推荐用 utf8mb4 字符集

```sql
CREATE DATABASE [ IF NOT EXISTS ] 数据库名 [ DEFAULT CHARSET 字符集] [COLLATE 排序规则 ];
```

删除数据库

```sql
DROP DATABASE [ IF EXISTS ] 数据库名;
```

### 数据表操作

创建表

最后一个字段后面是没有逗号的。

```sql
CREATE TABLE 表名(
    字段1 字段1类型 [COMMENT 字段1注释],
    字段2 字段2类型 [COMMENT 字段2注释],
    字段3 字段3类型 [COMMENT 字段3注释],
    ...
    字段n 字段n类型 [COMMENT 字段n注释]
)[ COMMENT 表注释 ];
```

查询表结构

```sql
DESC 表名;
```

查询当前数据库所有表，**必须处在数据库中**

```sql
SHOW TABLES;
```

查询某表的建表语句

```sql
SHOW CREATE TABLE 表名;
```

表中添加字段

```sql
ALTER TABLE 表名 ADD 字段名 类型(长度) [COMMENT 注释] [约束];
-- 例如
ALTER TABLE emp ADD nickname varchar(20) COMMENT '用户昵称';
```

修改数据类型

```sql
ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度);
-- 例如
ALTER TABLE emp MODIFY nickname varchar(30);
```

修改字段名和字段类型

```sql
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [COMMENT 注释] [约束];
-- 例如
ALTER TABLE emp CHANGE nickname name varchar(40);
```

删除字段

```sql
ALTER TABLE 表名 DROP 字段名;
-- 例如
ALTER TABLE emp drop nickname;
```

修改表名

```sql
ALTER TABLE 表名 RENAME TO 新表名;
-- 例如
ALTER TABLE emp RENAME TO empNew;
```

删除表

```sql
DROP TABLE [IF EXISTS] 表名;
-- 例如
DROP TABLE [IF EXISTS] emp;
```

删除表，并重新创建该表

```sql
TRUNCATE TABLE 表名;
-- 例如
TRUNCATE TABLE emp;
```

## DML

数据操作语言，用来对数据库表中的数据进行增删改

字符串和日期类型数据应该包含在引号中

插入的数据大小应该在**字段的规定范围**内

指定字段添加数据

```sql
INSERT INTO 表名 (字段名1, 字段名2, ...) VALUES (值1, 值2, ...);
```

全部字段添加数据

```sql
INSERT INTO 表名 VALUES (值1, 值2, ...);
```

批量添加数据

```sql
--指定字段
INSERT INTO 表名 (字段名1, 字段名2, ...) VALUES (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...);
--全部字段
INSERT INTO 表名 VALUES (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...);
```

修改数据

```sql
UPDATE 表名 SET 字段名1 = 值1, 字段名2 = 值2, ... [ WHERE 条件 ];
-- 例如
UPDATE emp SET nickname = '乐心湖' WHERE id = 1;
```

删除数据

```sql
DELETE FROM 表名 [ WHERE 条件 ];
```

## DQL

数据查询语言，用来查询数据库中表的记录

### 基础查询

```sql
SELECT
    字段列表
FROM
    表名字段
WHERE
    条件列表
GROUP BY
    分组字段列表
HAVING
    分组后的条件列表
ORDER BY
    排序字段列表
LIMIT
    分页参数
```

查询所有字段

```sql
SELECT * FROM 表名; 
-- 实际开发中尽量不要写 * 而是建议把每个字段都写出来
SELECT id,name,age... FROM emp;
```

查询结果字段带别名

```sql
SELECT 字段1 [ AS 别名1 ], 字段2 [ AS 别名2 ], 字段3 [ AS 别名3 ], ... FROM 表名;
SELECT 字段1 [ 别名1 ], 字段2 [ 别名2 ], 字段3 [ 别名3 ], ... FROM 表名;
```

去除重复记录

```sql
SELECT DISTINCT 字段列表 FROM 表名;
```

### 条件查询

```sql
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

条件列表

| 比较运算符      | 功能                                        |
| :-------------- | :------------------------------------------ |
| >               | 大于                                        |
| >=              | 大于等于                                    |
| <               | 小于                                        |
| <=              | 小于等于                                    |
| =               | 等于                                        |
| `<>` 或 !=      | 不等于                                      |
| BETWEEN … AND … | 在某个范围内（含最小、最大值）              |
| IN(…)           | 在 in 之后的列表中的值，多选一，或的意思    |
| LIKE 占位符     | 模糊匹配（_匹配单个字符，% 匹配任意个字符） |
| IS NULL         | 是 NULL                                     |

| 逻辑运算符 | 功能                     |      |                              |
| :--------- | :----------------------- | ---- | ---------------------------- |
| AND 或 &&  | 并且（多个条件同时成立） |      |                              |
| OR 或 \    | \                        |      | 或者（多个条件任意一个成立） |
| NOT 或 !   | 非，不是                 |      |                              |

```sql
-- 年龄等于30
select * from emp where age = 30;
-- 没有身份证
select * from emp where idcard is null or idcard = '';
-- 有身份证
select * from emp where idcard;
select * from emp where idcard is not null;
-- 不等于
select * from emp where age != 30;
-- 年龄在20到30之间
select * from emp where age between 20 and 30;
select * from emp where age >= 20 and age <= 30;
-- 下面语句不报错，但查不到任何信息，因此一定要从先写小再写大
select * from emp where age between 30 and 20;
-- 性别为女且年龄小于30
select * from emp where age < 30 and gender = '女';
-- 年龄等于25或30或35
select * from emp where age = 25 or age = 30 or age = 35;
select * from emp where age in (25, 30, 35);
-- 姓名为两个字
select * from emp where name like '__';
-- 姓名第一个字为钟
select * from emp where name like '钟%';
-- 姓名最后第一个字为雪
select * from emp where name like '%雪';
-- 身份证最后为X
select * from emp where idcard like '%X';
```

### 聚合查询

将一列数据作为一个整体，进行纵向计算。直接作用于字段。

```sql
SELECT 聚合函数(字段列表) FROM 表名;
```

常见聚合函数如下，注意：所有 null 值不参与聚合运算。

| 函数  | 功能     |
| :---- | :------- |
| count | 统计数量 |
| max   | 最大值   |
| min   | 最小值   |
| avg   | 平均值   |
| sum   | 求和     |

```sql
-- 统计企业员工数量
select count(id) from emp;
-- 统计企业平均年龄
select avg(age) from emp;
-- 统计西安地区员工的年龄之和
select sum(age) from emp where workaddr = '西安';
```

### 分组查询

```sql
SELECT 字段列表 FROM 表名 [ WHERE 条件 ] GROUP BY 分组字段名 [ HAVING 分组后的过滤条件 ];
```

分组往往伴随着聚合

where 和 having 的区别：

- 执行时机不同：where 是分组之前进行过滤，不满足 where 条件不参与分组；having 是分组后对结果进行过滤。
- 判断条件不同：where 不能对聚合函数进行判断，而 having 可以。

注意：

- 执行顺序：where > 聚合函数 > having
- 分组之后，**查询的字段一般为聚合函数和分组字段**，查询其他字段无任何意义

```sql
-- 根据性别分组，统计男性和女性数量（只显示分组数量，不显示哪个是男哪个是女）
select count(*) from emp group by gender;
-- 根据性别分组，统计男性和女性数量
select gender, count(*) from emp group by gender;
-- 根据性别分组，统计男性和女性的平均年龄
select gender, avg(age) from emp group by gender;
-- 年龄小于45，并根据工作地址分组，获取员工数量
select workaddr, count(*) from emp where age < 45 group by workaddr;
-- 年龄小于45，并根据工作地址分组，获取员工数量大于等于3的工作地址
select workaddr, count(*) address_count from emp where age < 45 group by workaddr having address_count >= 3;
```

### 排序查询

如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序

```sql
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2 排序方式2;
```

排序方式

- ASC：升序（默认）
- DESC：降序

```sql
-- 根据年龄升序排序
select * from emp order by age ASC;
select * from emp order by age;
-- 根据年龄对公司的员工进行升序排序，年龄相同，再按照入职时间进行降序排序
select * from emp order by age ASC, entrydate DESC;
```

### 分页查询

```sql
SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数;
```

- 起始索引从 0 开始，所以这里有个公式，起始索引 = (查询页码 - 1) * 每页显示记录数
- **分页查询是数据库的方言，不同数据库有不同实现，MySQL 是 LIMIT**
- 如果查询的是第一页数据，起始索引可以省略，直接简写 LIMIT 10

```sql
-- 查询第一页数据，展示10条
select * from emp limit 0, 10;
-- 查询第二页，每页展示10条
select * from emp limit 10, 10;
```

### DQL 练习

DQL 编写顺序：

```sql
SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT
```

DQL 执行顺序：

```sql
FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT
```

![img](https://static.7wate.com/img/2022/05/11/e526304cef38f.png)

按照需求完成如下 DQL 语句编写

```sql
-- 1．查询年龄为20,21,22,23岁的员工信息。
select * from emp where age in(20,21,22,23);
-- 2．查询性别为男，并且年龄在20-40岁(含)以内的姓名为三个字的员工。
select * from emp where gender = '男' and age between 20 and 40 and name like '___';
-- 3．统计员工表中，年龄小于60岁的，男性员工和女性员工的人数。
select gender, count(*) from emp where age < 60 group by gender;
-- 4．查询所有年龄小于等于35岁员工的姓名和年龄，并对查询结果按年龄升序排序，如果年龄相同按入职时间降序排序。
select name, age from emp where age < 35 order by age ASC, entrydata DESC;
-- 5、查询性别为男，且年龄在20-40岁(含)以内的前5个员工信息，对查询的结果按年龄升序排序，年龄相同按入职时间升序排序。
select * from emp where (gender = '男') and (age >= 20 and age <=40) order by age ASC,entrydata DESC limit 5;
```

## DCL

数据控制语言，用来创建数据库用户、控制数据库的访问权限

### 用户管理

查询用户

```sql
use mysql;
select * from user;
```

创建用户

```sql
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
```

修改用户密码

```sql
ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码';
```

删除用

```sql
DROP USER '用户名'@'主机名';
```

例子

```sql
-- 创建用户lxh，只能在当前主机localhost访问
create user 'lxh'@'localhost' identified by '123456';
-- 创建用户test，能在任意主机访问，使用 % 通配符号
create user 'lxh'@'%' identified by '123456';
create user 'lxh' identified by '123456';
-- 修改密码
alter user 'lxh'@'localhost' identified with mysql_native_password by '123';
-- 删除用户
drop user 'lxh'@'localhost';
```

### 权限管理

常见的权限如下，更具体需要百度。

| 权限                | 说明                   |
| :------------------ | :--------------------- |
| ALL, ALL PRIVILEGES | 所有权限               |
| SELECT              | 查询数据               |
| INSERT              | 插入数据               |
| UPDATE              | 修改数据               |
| DELETE              | 删除数据               |
| ALTER               | 修改表                 |
| DROP                | 删除数据库 / 表 / 视图 |
| CREATE              | 创建数据库 / 表        |

```sql
-- 查询权限：
SHOW GRANTS FOR '用户名'@'主机名';

-- 授予权限：
GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';

-- 撤销权限：
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';

-- 注意：
    -- 多个权限用逗号分隔
    -- 授权时，数据库名和表名可以用 * 进行通配，代表所有
```
