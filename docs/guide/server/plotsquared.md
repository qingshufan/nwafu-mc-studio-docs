---
author: "OrzMiku"
category: "指南"
tag:
  - 地皮世界
order: 2
---

# 地皮世界指南

**PlotSquared**是一个功能强大的 Minecraft 插件，用于创建和管理创意模式下的地皮。本指南将帮助你了解如何在支持 PlotSquared 插件的 Minecraft 服务器上玩耍。

## 认领你的地皮

在加入了支持 PlotSquared 的服务器后，你需要认领一个地皮来开始你的创意建筑之旅。以下是认领地皮的方法：

1. 输入`/plot auto`以自动分配一个地皮。
2. 你将被传送到你的新地皮。现在，你可以开始在这个地皮上建造你的作品了。

## 创建自定义大小的地皮

::: tip

请注意，每个玩家在服务器上最多可以拥有 4 个地皮。为了公平起见，你需要在这个限制内管理你的地皮。

:::

PlotSquared 插件允许你创建自定义大小的地皮。要创建一个 n\*n 的地皮，你需要执行以下步骤：

1. 输入`/plot create [宽度] [长度]`，其中`[宽度]`和`[长度]`分别代表地皮的宽度和长度。例如，要创建一个 10\*10 的地皮，你需要输入`/plot create 10 10`。
2. 你将被传送到你的新地皮。现在，你可以开始在这个地皮上建造你的作品了。

## 管理你的地皮

作为地皮的主人，你可以对其进行各种管理操作。以下是一些基本的地皮管理操作：

### 设置地皮边界

为了更好地进行建筑，你可能需要设置地皮的边界。你可以使用以下指令：

```markdown
/plot border
```

这将在你的地皮周围显示一个边界，以便你清楚地看到地皮的范围。

### 清空地皮

如果你想重新开始，可以使用以下指令清空你的地皮：

```markdown
/plot clear
```

这将删除地皮上的所有方块，让你重新开始建造。

### 删除地皮

如果你不再需要这个地皮，可以使用以下指令删除它：

```markdown
/plot delete
```

这将永久删除你的地皮。请注意，这个操作无法撤销。

## 与其他玩家互动

PlotSquared 插件允许你与其他玩家共享地皮和互相访问。以下是一些与其他玩家互动的方法：

### 添加地皮成员

如果你想让其他玩家能够在你的地皮上建造，可以将他们添加为地皮成员。使用以下指令：

```markdown
/plot add [玩家名]
```

### 删除地皮成员

如果你不希望某个玩家继续在你的地皮上建造，可以将他们从地皮成员中删除。使用以下指令：

```markdown
/plot remove [玩家名]
```

### 访问其他玩家的地皮

如果你想参观其他玩家的地皮，可以使用以下指令：

```markdown
/plot visit [玩家名]
```

这将传送你到指定玩家的地皮。

## 常用指令

以下是一些在使用 PlotSquared 插件时常用的指令：

- `/plot help`：显示插件帮助信息。
- `/plot list`：列出你拥有的所有地皮。
- `/plot info`：显示当前地皮的信息。
- `/plot flag`：设置地皮的标志，例如禁止 PvP 或者允许飞行等。
- `/plot merge`：合并相邻的地皮。