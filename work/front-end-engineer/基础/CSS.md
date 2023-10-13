---
title: CSS
description: CSS 样式表
keywords:
  - CSS
tags:
  - CSS
sidebar_position: 2
author: 7Wate
date: 2023-10-13
---

**世界的色彩与形状来自于你的手中。**

## CSS

CSS，全称为层叠样式表（Cascading Style Sheets），是**一种用于描述 HTML 或 XML 文档样式的标记语言。**由于其简洁的语法和强大的功能，CSS 已成为前端开发的核心技术之一。

## 选择器

**CSS 的选择器是绑定样式到 HTML 元素的关键。**CSS选择器大致可以分为以下几类：

- **简单选择器**：包括元素选择器、类选择器、ID 选择器和属性选择器。
- **伪类和伪元素选择器**：伪类选择器是基于元素的特定状态选择元素，例如 `:hover`、`:focus`、`:checked` 等。伪元素选择器是用于选择元素的特定部分，例如 `::before`、`::after`、`::first-line` 等。
- **组合选择器**：包括子元素选择器、后代选择器、相邻兄弟选择器和一般兄弟选择器。这些选择器可以与简单选择器组合使用，以选择符合特定关系的元素。
- **分组选择器**：用逗号分隔的列表，可以同时选择多个元素。

常用的 CSS 选择器作用和使用示例：

| 选择器类型     | 作用                                                 | 示例                                       |
| :------------- | :--------------------------------------------------- | :----------------------------------------- |
| 元素选择器     | 根据元素名称选择元素                                 | `p { color: red; }`                        |
| 类选择器       | 根据元素的class属性选择元素                          | `.intro { font-size: 20px; }`              |
| ID选择器       | 根据元素的id属性选择元素                             | `#first-paragraph { text-align: center; }` |
| 属性选择器     | 根据元素的属性选择元素                               | `a[target="_blank"] { color: red; }`       |
| 伪类选择器     | 根据元素的特定状态选择元素                           | `a:hover { color: red; }`                  |
| 伪元素选择器   | 选择元素的特定部分                                   | `p::first-line { color: blue; }`           |
| 子元素选择器   | 选择特定父元素的直接子元素                           | `div > p { margin-left: 20px; }`           |
| 后代选择器     | 选择特定元素的所有后代元素                           | `div p { margin-left: 20px; }`             |
| 相邻兄弟选择器 | 选择紧接在另一元素后的元素，且二者有相同父元素       | `h1 + p { margin-top: 50px; }`             |
| 一般兄弟选择器 | 选择所有在另一元素之后的兄弟元素，且二者有相同父元素 | `h1 ~ p { color: green; }`                 |
| 分组选择器     | 同时选择多个元素                                     | `h1, h2, p { color: purple; }`             |

## 布局技巧

在 CSS 的世界里，布局是最重要的技巧之一。**Flexbox（弹性盒子）和 Grid（网格）布局是两种现代且强大的布局方法**，它们能帮助我们创建各种复杂的布局。

### Flexbox

**Flexbox 是一种一维布局模型，主要用于在一个维度（行或列）上对元素进行排列。**只需要简单的设置 `display: flex;`，一个元素就可以变为弹性容器，其子元素会成为弹性项目。这种布局是响应式的，这意味着项目的大小和位置可以根据父容器的大小动态改变。

假设我们有一个包含三个子项的容器：

```html
<style>
    .flex-container {
      display: flex;
    }
</style>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

默认情况下，这会让这三个子项并排显示，并填充整个容器宽度。

```text
|   Flex Container  |
| 1 |     2     | 3 |
```

Flexbox 布局中的一些常用属性：

| 属性              | 作用                           | 示例                                             |
| :---------------- | :----------------------------- | ------------------------------------------------ |
| `display`         | 定义一个弹性容器               | `.container { display: flex; }`                  |
| `flex-direction`  | 定义项目的排列方向             | `.container { flex-direction: row; }`            |
| `justify-content` | 定义项目在主轴上的对齐方式     | `.container { justify-content: space-between; }` |
| `align-items`     | 定义项目在交叉轴上的对齐方式   | `.container { align-items: center; }`            |
| `flex-wrap`       | 定义项目是否换行               | `.container { flex-wrap: wrap; }`                |
| `flex`            | 定义项目的增长、缩小和基本大小 | `.item { flex: 1 1 auto; }`                      |

### Grid

相较于 Flexbox 的一维布局，**Grid 布局则是一个二维布局模型，可以同时在行和列两个维度上对元素进行排列。**通过设置 `display: grid;`，一个元素就可以变为网格容器，其子元素会成为网格项目。Grid 布局非常适合用于构建符合网格的复杂界面。

假设我们有一个包含九个子项的容器：

```html
<style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
</style>

<div class="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

这会将子项布局为一个 3x3 的网格，如下所示：

```text
| Grid Container |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
```

Grid 布局中的一些常用属性：

| 属性                                           | 作用                         | 示例                                             |
| ---------------------------------------------- | ---------------------------- | ------------------------------------------------ |
| `display`                                      | 定义一个网格容器             | `.container { display: grid; }`                  |
| `grid-template-columns` / `grid-template-rows` | 定义列宽/行高                | `.container { grid-template-columns: 1fr 1fr; }` |
| `grid-column` / `grid-row`                     | 定义项目的列/行位置          | `.item { grid-column: 1 / 2; }`                  |
| `grid-gap`                                     | 定义列间隔/行间隔            | `.container { grid-gap: 10px; }`                 |
| `justify-items` / `align-items`                | 定义项目在单元格中的对齐方式 | `.container { justify-items: center; }`          |
| `grid-auto-flow`                               | 定义项目的排列方式           | `.container { grid-auto-flow: dense; }`          |

### Position

CSS 定位（Position）非常强大，它可以用于创建各种复杂的布局。**但是，请注意，过度使用 `absolute` 或 `fixed` 定位可能会导致布局难以管理，尤其是在响应式设计中。**在可能的情况下，使用 Flexbox 或 Grid 通常是更好的选择。

#### static

**`static` 是元素的默认定位方式。**这种定位方式下，元素会按照正常的文档流进行布局。`static` 定位的元素不会受到 `top`、`bottom`、`left` 或 `right` 属性的影响。

```css
div {
    position: static;
}
```

#### relative

**`relative` 定位的元素会相对于它在正常文档流中的位置进行定位。**例如，设置 `left: 20px` 会使元素向右移动 20px。

```css
div {
    position: relative;
    left: 20px;
}
```

#### absolute

**`absolute` 定位的元素会相对于最近的非 `static` 定位的祖先元素（如果存在的话）进行定位。**如果没有这样的祖先元素，那么它会相对于 `initial containing block` 进行定位。`absolute` 定位的元素会从正常的文档流中移除，并不会影响到其他元素的布局。

```css
div {
    position: absolute;
    top: 20px;
    right: 0;
}
```

#### fixed

**`fixed` 定位的元素会相对于浏览器窗口进行定位，即使页面滚动，它也始终保持在同一位置。**`fixed` 定位的元素会从正常的文档流中移除，并不会影响到其他元素的布局。

```css
div {
    position: fixed;
    bottom: 0;
    right: 0;
}
```

#### sticky

**`sticky` 定位是相对定位和固定定位的混合类型。**元素在滚动到某个位置前为相对定位，之后为固定定位。

```css
div {
    position: sticky;
    top: 0;
}
```

## 过渡与动画

在 CSS 中，动画和过渡都是创建动态效果的重要工具，它们可以在提升用户体验和增强网页视觉效果方面发挥重要作用。

### transition

**过渡是当元素从一个样式逐渐改变为另一个样式时产生的效果。**

`transition` 属性是一个复合属性，用于设置四个过渡效果的属性，包括 `transition-property`，`transition-duration`，`transition-timing-function` 和 `transition-delay`。这些属性可以单独使用，也可以组合在一起使用。

例如，你可以创建一个当鼠标悬停时颜色逐渐改变的按钮：

```css
button {
    background-color: blue;
    transition: background-color 2s;
}

button:hover {
    background-color: red;
}
```

| 属性                         | 描述                                                         | 示例值             |
| :--------------------------- | :----------------------------------------------------------- | :----------------- |
| `transition-property`        | 指定应用过渡效果的 CSS 属性。可以是任何 CSS 属性，如 `background-color`，`height`，`all` 等。 | `background-color` |
| `transition-duration`        | 指定过渡效果花费的时间，以秒（s）或毫秒（ms）为单位。        | `2s`               |
| `transition-timing-function` | 规定过渡效果的速度曲线。可选值有 `linear`，`ease`，`ease-in`，`ease-out`，`ease-in-out`，`cubic-bezier(n,n,n,n)`。 | `ease-in`          |
| `transition-delay`           | 指定过渡效果何时开始。时间以秒（s）或毫秒（ms）为单位。      | `1s`               |

### animation

动画是元素从一系列样式中逐渐改变的过程，可以使用 `@keyframes` 规则和 `animation` 属性来创建动画。`@keyframes` 本身并没有属性，但是你可以在 **`@keyframes` 规则中定义动画的各个阶段（关键帧）**和它们的样式。

| 关键词         | 描述                                                         | 示例值                         |
| :------------- | :----------------------------------------------------------- | :----------------------------- |
| `@keyframes`   | 用于创建新的动画规则。它的值是一个动画名称和一个包含关键帧的块。 | `@keyframes myAnimation {...}` |
| `0%` 或 `from` | 表示动画的开始阶段。你可以在这里定义元素的初始样式。         | `0% { opacity: 0; }`           |
| `100%` 或 `to` | 表示动画的结束阶段。你可以在这里定义元素的最终样式。         | `100% { opacity: 1; }`         |
| `n%`           | 表示动画的中间阶段。`n` 是一个介于 0 和 100 之间的百分数。你可以在这里定义元素在动画中间的样式。 | `50% { opacity: 0.5; }`        |

**而 `animation` 属性则用于将动画绑定到特定元素。**例如，你可以创建一个循环移动的方块：

```css
@keyframes move {
    0% { left: 0; }
    50% { left: 200px; }
    100% { left: 0; }
}

div {
    position: absolute;
    width: 100px;
    height: 100px;
    background: red;
    animation: move 2s infinite;
}
```

在这个例子中，方块将在 2 秒内从左移动到右，然后再移动回左边，这个过程将无限循环。

## 响应式设计与媒体查询

**响应式设计是一种使网站能够适应各种屏幕尺寸和设备的设计和开发方法。**在响应式设计中，布局、图片、文字和其他元素都会根据浏览器窗口的大小自动调整。

响应式设计的主要原则包括：

- **流式布局**：元素的宽度以百分比表示，以便能够随着浏览器窗口的大小变化而变化。
- **灵活的图片和媒体**：这些元素的大小也是以百分比表示，以保持其在页面中的比例不变。
- **媒体查询**：根据设备的特性，如宽度、高度和方向等，应用不同的样式规则。

**媒体查询是实现响应式设计的主要工具。**媒体查询允许我们根据设备的特性，如宽度、高度和方向等，应用不同的样式规则。

媒体查询的基本语法如下：

```css
@media media-type and (media-feature) {
  /* CSS rules go here */
}
```

- `media-type` 是可选的，表示媒体类型，如 `screen`、`print`等。
- `media-feature` 表示要查询的设备特性，如 `width`、`height` 等。

例如，我们可以写一个媒体查询，当浏览器窗口的宽度小于 600 像素时，让主要内容的字体大小增大，以便于在小屏幕设备上阅读。

```css
@media screen and (max-width: 600px) {
  .main-content {
    font-size: 18px;
  }
}
```

在这个例子中，`.main-content { font-size: 18px; }` 这条样式规则只会在媒体类型为 `screen` 并且浏览器窗口的最大宽度为 600px 时应用。以下是一些常见的媒体查询的例子：

| 媒体特性       | 描述                         | 示例                                    |
| :------------- | :--------------------------- | :-------------------------------------- |
| `max-width`    | 屏幕宽度的最大值             | `@media (max-width: 600px) {...}`       |
| `min-width`    | 屏幕宽度的最小值             | `@media (min-width: 768px) {...}`       |
| `max-height`   | 屏幕高度的最大值             | `@media (max-height: 400px) {...}`      |
| `min-height`   | 屏幕高度的最小值             | `@media (min-height: 500px) {...}`      |
| `orientation`  | 设备屏幕的方向（横向或纵向） | `@media (orientation: landscape) {...}` |
| `aspect-ratio` | 视窗的宽高比                 | `@media (aspect-ratio: 16/9) {...}`     |
| `resolution`   | 设备的像素密度               | `@media (min-resolution: 300dpi) {...}` |
| `color`        | 设备的颜色位数               | `@media (color: 8) {...}`               |
| `monochrome`   | 黑白设备的像素位数           | `@media (monochrome: 2) {...}`          |

## CSS 预处理器

**CSS 预处理器是一种脚本语言，它扩展了 CSS 的功能，增加了变量、嵌套、混合和函数等特性，使得 CSS 更加强大和易于维护。**预处理器将扩展的 CSS 语法转换为普通的 CSS，以便浏览器可以解析。SASS 和 LESS 是两种最流行的 CSS 预处理器。

### SASS

[SASS](https://sass-lang.com/)（Syntactically Awesome StyleSheets）是一种 CSS 预处理器，它提供了许多有用的特性，如变量、嵌套、混合和函数等。SASS 支持两种语法：旧版的缩进语法（Indented Syntax）和新版的 SCSS。旧版的语法更简洁，但新版的 SCSS 语法更接近于原生 CSS。

以下是一个使用 SASS 特性的例子：

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

.container {
  width: 100%;

  .sidebar {
    width: 30%;
  }

  .content {
    width: 70%;
  }
}
```

### LESS

[LESS](https://lesscss.org/) 是另一种流行的 CSS 预处理器，它的语法和 CSS 非常相似，所以学习曲线相对较平缓。LESS 提供了变量、嵌套、混合、函数和运算等特性。

以下是一个使用 LESS 特性的例子：

```less
@base-color: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box {
  color: saturate(@base-color, 5%);
  border-color: lighten(@base-color, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
```

总的来说，CSS 预处理器如 SASS 和 LESS 可以让你的 CSS 更加强大和易于维护，它们是现代前端开发工具链的重要组成部分。





