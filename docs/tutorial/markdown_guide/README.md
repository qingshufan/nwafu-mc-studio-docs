# Markdown 语法教程

Markdown 是一种轻量级的标记语言，它允许你使用易于阅读和编写的纯文本格式来编写富文本文档。以下是一份简要的 Markdown 语法教程。

## 标题

在行首添加 `#` 符号以创建标题。标题级别由 `#` 的数量决定（最多 6 级）。

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 段落和换行

段落由一个或多个连续的文本行组成，用一个空行分隔。

要在段落内换行，行尾插入两个空格。

## 文本样式

- **粗体**：使用两个星号 `**` 或下划线 `__` 包围文本。

```
**粗体文本**
__粗体文本__
```

- _斜体_：使用一个星号 `*` 或下划线 `_` 包围文本。

```
*斜体文本*
_斜体文本_
```

- **_粗斜体_**：使用三个星号 `***` 或下划线 `___` 包围文本。

```
***粗斜体文本***
___粗斜体文本___
```

- ~~删除线~~：使用两个波浪线 `~~` 包围文本。

```
~~删除线文本~~
```

## 列表

- 无序列表：在每一行前添加一个星号 `*`、加号 `+` 或减号 `-`。

```
* 项目 1
* 项目 2
  * 子项目 2.1
  * 子项目 2.2
```

- 有序列表：在每一行前添加数字和一个点 `1.`。

```
1. 项目 1
2. 项目 2
   1. 子项目 2.1
   2. 子项目 2.2
```

## 链接

使用方括号 `[]` 包围链接文本，紧接着用圆括号 `()` 包围链接地址。

```
[链接文本](链接地址)
```

## 图片

与链接类似，但在方括号前添加一个感叹号 `!`。

```
![图片描述](图片地址)
```

## 代码

- 行内代码：使用反引号 `` ` `` 包围代码片段。

```
这是一个 `行内代码` 示例。
```

- 代码块：在代码前后分别添加三个反引号 `````。

````
```
代码块示例
```
````

- 语法高亮：在开始的三个反引号后添加语言名称。

````
```javascript
const example = "语法高亮示例";
```
````

## 引用

在引用文本前添加一个 `>`。

```
> 这是一个引用示例。
```

## 水平线

在一行中使用三个或更多的星号 `*`、减号 `-` 或下划线 `_`。

```
***
---
___
```

## 表格

使用管道符 `|` 和减号 `-` 创建表格。

```
| 表头 1 | 表头 2 | 表头 3 |
| ------ | ------ | ------ |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

## 转义字符

使用反斜杠 `\` 转义特殊字符。

```
\*这是一个普通的星号，而不是斜体文本\*
```

这只是 Markdown 语法的基本概述。要深入了解更多细节，请参阅 [官方文档](https://daringfireball.net/projects/markdown/)。