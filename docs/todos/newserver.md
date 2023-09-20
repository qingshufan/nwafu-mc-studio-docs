---
title: "新服务器规划"
order: 2
---

# 新服务器规划

## 问题解答

1. 能否直接移除经济系统？
   - 不能，一些插件（例如领地插件等）需要经济系统保证功能正常。
2. 是否考虑加入小游戏？
   - 目前没有此计划，日活人数低，不适合小游戏模式。
3. 如何控制经济系统导致的物品泛滥。
   - 我们尽可能的规避物品泛滥的情况。服务器预采用系统商店+玩家商店的模式。系统商店会根据供求关系自动调整价格。系统只上架部分物品，会以基建材料为主。

## 服务器世界结构

```mermaid
graph TD
	A[主城]
	B["西农复原工程（创造服务器）"]
	C["生存世界"]
	D["地皮世界（创造服务器）"]
	A-->B
	A-->C
	A-->D

	des["创造世界与生存世界数据不互通"]
```

## 服务器经济结构

```mermaid
graph TD
	A["经济系统"]
	B["动态价格系统商店"]
	C["箱子商店"]
	D["需要消耗金钱的插件|如领地插件创建领地"]

	A-->B-->Des1["物价自动管控"]
	A-->C-->Des2["玩家自由交易"]
	D-->A
```

## 服务器特殊权限

```mermaid
graph LR
	Player["玩家"]
	Admin["管理员"]
	W["生存世界"]
	TempFly["临时飞行|Tempfly插件支持"]
	Fly["飞行"]
	WE["创世神"]
	W-->Player-->TempFly
	W-->Admin-->Fly
	Admin-->WE

```

```mermaid
graph LR
	Player["玩家"]
	Admin["管理员"]
	W["创造世界"]
	Fly["飞行"]
	WE["创世神"]
	W-->Player-->Fly
	W-->Admin-->Fly
	Player-->WE
	Admin-->WE
```

## 额外玩法

- AureliumSkills
- 粘液科技 [暂不实装]
- 农作物系统

## 服务器插件

| 插件名称             | 简介                                                             |
| -------------------- | ---------------------------------------------------------------- |
| ViaBackwards         | 可以让旧版本可以连接服务器                                       |
| ViaVersion           | 可以连接新版本服务器                                             |
| CoreProtect          | 快速、高效的数据记录和反恶意攻击工具。回滚并恢复任何数量的损坏。 |
| EssentialsXChat      | 基础插件                                                         |
| EssentialsXSpawn     | 基础插件                                                         |
| EssentialsX          | 基础插件                                                         |
| minimotd             | 服务器 MOTD                                                      |
| FastAsyncVoxelSniper | 异步的远程地图编辑工具                                           |
| FastAsyncWorldEdit   | 异步的创世神插件                                                 |
| CommandPanels        | GUI 菜单                                                         |
| WorldEditSUI         | 创世神可视化                                                     |
| GSit                 | 椅子可以坐                                                       |
| multiverse core      | 多世界                                                           |
| ClientDetector       | 客户端检测，查端插件                                             |
| BetterMessages       | 自定义服务器消息                                                 |
| DynamicShop          | 动态商店，价格会根据供需关系动态调整                             |
| LockettePro          | 木牌锁                                                           |
| LuckPerms            | 权限管理器                                                       |
| AntiPopup            | 禁止聊天举报和弹出窗口                                           |
| spark                | 服务器性能分析                                                   |
| plugman              | 服务器插件管理                                                   |
| ProtocolLib          | 类库                                                             |
| PlaceholderAPI       | 占位符                                                           |
| TAB                  | TAB 栏和计分板样式                                               |
| Vault                | 经济基础插件                                                     |
| Residence            | 领地插件                                                         |
| LiteSignIn           | 简易签到插件                                                     |
| ResourceWorld        | 资源世界                                                         |
| plotsquared          | 地皮世界                                                         |
| BetterRTP            | 更好的随机传送                                                   |
