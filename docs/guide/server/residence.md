---
author: "OrzMiku"
category: "指南"
tag:
  - 领地
order: 3
---

# 领地系统指南

Residence 插件是 Minecraft 的一个非常实用的领地保护插件，它可以帮助玩家保护自己的领地，防止其他玩家的破坏和侵入。本指南将带领你了解如何使用 Residence 插件，让你的 Minecraft 游戏体验更加安全和愉快。

## 创建领地

创建领地是使用 Residence 插件的基本功能。按照以下步骤创建你的第一个领地：

1. 在 Minecraft 游戏中，找到你想要保护的区域。
2. 使用木棍（或服务器指定的其他物品）左击选择区域的一个角，然后右击选择另一个角。这将创建一个立方体区域，包含你所选择的两个点。
3. 输入命令 `/res create [领地名]`，将你刚刚选择的区域设为你的领地。例如：`/res create MyHome`。
4. 系统会提示你创建成功，此时你的领地已经受到保护。

## 管理领地

使用 Residence 插件，你可以轻松地对你的领地进行管理。以下是一些常用的管理命令：

- `/res info [领地名]`：查看领地的详细信息。
- `/res list`：列出你拥有的所有领地。
- `/res remove [领地名]`：删除一个领地。
- `/res rename [旧领地名] [新领地名]`：重命名一个领地。
- `/res tp [领地名]`：传送到指定的领地。

## 设置领地权限

Residence 插件允许你为每个领地设置不同的权限，以下是一些常用的权限设置命令：

- `/res set [领地名] [权限] [值]`：设置领地的指定权限。如：`/res set MyHome build false`。
- `/res pset [领地名] [玩家名] [权限] [值]`：设置特定玩家在领地内的权限。如：`/res pset MyHome Friend build true`。
- `/res gset [领地名] [组名] [权限] [值]`：设置特定用户组在领地内的权限。如：`/res gset MyHome Admins build true`。

::: tip
你可以使用 `/res padd [玩家名]` 快速给一个玩家领地权限。
:::

## 领地租赁与出售

Residence 插件还支持领地租赁和出售功能，以下是相关命令：

- `/res lease set [领地名] [天数]`：设置领地的租赁时间。如：`/res lease set MyHome 30`。
- `/res market list`：查看市场上可租赁或出售的领地。
- `/res market rent [领地名]`：租赁一个领地。
- `/res market sell [领地名] [价格]`：将领地挂牌出售。如：`/res market sell MyHome 1000`。
- `/res market buy [领地名]`：购买一个出售的领地。

## 常见问题与解答

**Q: 我可以保护多大的区域？**

A: 这取决于服务器的设置。一般来说，服务器会为每个玩家设定一个最大保护区域，你可以通过`/res limits`命令查看你的限制。

**Q: 我可以设置多少个领地？**

A: 同样，这取决于服务器的设置。你可以通过`/res limits`命令查看你的领地数量限制。
