---
title: SQL 函数
description: SQL 函数
keywords:
- 数据库
- 函数
tags:
- SQL
sidebar_position: 3
author: 7Wate
date: 2022-08-31
---
## 函数

函数是指一段可以直接被另一段程序调用的程序或代码。

1. 在企业的 OA 或其他的人力系统中，经常会提供的有这样一个功能，每一个员工登录上来之后都能 够看到当前员工入职的天数。 而在数据库中，存储的都是入职日期，如 2000-11-12，**那如果快速计 算出天数呢？**
2. 在做报表这类的业务需求中, 我们要展示出学员的分数等级分布。而在数据库中，存储的是学生的 分数值，如 98/75，**如何快速判定分数的等级呢？**

以上这些需求都可以在 MySQL 的函数中得到方便解决。

### 字符串函数

常用的字符串函数

| 函数                       | 功能                                                         |
| :------------------------- | :----------------------------------------------------------- |
| CONCAT(s1, s2, …, sn)      | 字符串拼接，将 s1, s2, …, sn 拼接成一个字符串                |
| LOWER(str)                 | 将字符串全部转为小写                                         |
| UPPER(str)                 | 将字符串全部转为大写                                         |
| LPAD(str, n, pad)          | 左填充，用字符串 pad 对 str 的左边进行填充，达到 n 个字符串长度 |
| RPAD(str, n, pad)          | 右填充，用字符串 pad 对 str 的右边进行填充，达到 n 个字符串长度 |
| TRIM(str)                  | 去掉字符串头部和尾部的空格                                   |
| SUBSTRING(str, start, len) | 返回从字符串 str 从 start 位置起的 len 个长度的字符串，起始索引为 1 |

案例：由于业务需求变更，企业员工的工号，统一为 5 位数，目前不足 5 位数的全部在前面补 0。比如： 1 号员 工的工号应该为 00001。

```sql
update emp set workno = LPAD(workno,5,'0');
```

### 数值函数

常用的数值函数

| 函数        | 功能                                 |
| :---------- | :----------------------------------- |
| CEIL(x)     | 向上取整                             |
| FLOOR(x)    | 向下取整                             |
| MOD(x, y)   | 返回 x/y 的模                        |
| RAND()      | 返回 0~1 内的随机数                  |
| ROUND(x, y) | 求参数 x 的四舍五入值，保留 y 位小数 |

案例：通过数据库的函数，生成一个六位数的随机验证码。

```sql
-- 通过rand()获取0~1，乘以1000000，通过四舍五入即可。如果未满6位，则补0
select lpad(round(rand()*1000000, 0), 6, '0');
```

### 日期函数

常用日期函数

| 函数                               | 功能                                                  |
| :--------------------------------- | :---------------------------------------------------- |
| CURDATE()                          | 返回当前日期                                          |
| CURTIME()                          | 返回当前时间                                          |
| NOW()                              | 返回当前日期和时间                                    |
| YEAR(date)                         | 获取指定 date 的年份                                  |
| MONTH(date)                        | 获取指定 date 的月份                                  |
| DAY(date)                          | 获取指定 date 的日期                                  |
| DATE_ADD(date, INTERVAL expr type) | 返回一个日期 / 时间值加上一个时间间隔 expr 后的时间值 |
| DATEDIFF(date1, date2)             | 返回起始时间 date1 和结束时间 date2 之间的天数        |

案例：查询所有员工的入职天数，并根据入职时间倒叙排序

```sql
select name, datediff(curdate(), entrydate) as dates from emp order by dates desc;
```

### 流程函数

常用流程函数

| 函数                                                         | 功能                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| IF(value, t, f)                                              | 如果 value 为 true，则返回 t，否则返回 f                     |
| IFNULL(value1, value2)                                       | 如果 value1 不为空，返回 value1，否则返回 value2             |
| CASE WHEN [val1] THEN [ res1 ] … ELSE [ default ] END        | 如果 val1 为 true，返回 res1，… 否则返回 default 默认值      |
| CASE [expr] WHEN [ val1 ] THEN [ res1 ] … ELSE [ default ] END | 如果 expr 的值等于 val1，返回 res1，… 否则返回 default 默认值 |

```sql
select
    name,
    if(age between 14 and 28, '青年','其他')
from emp;
select
    name,
    (case workaddress when '北京市' then '一线城市' when '上海市' then '一线城市' else '二线城市' end) as '工作地址'
from employee;
```
