---
author: 'OrzMiku'
category: '指南'
tag:
  - 系统商店
order: 6
---

# 动态商店机制

服务器内**系统商店**为动态商店机制。凡是在**系统商店**中上架的物品，均有**供需关系**。**物品的价格会随着供需关系的变化而变化**。这在一定程度上模拟了现实世界中的市场机制，解决了传统商店中物品价格不合理的问题。

::: tip 举个例子
如果玩家购买了大量的石头，那么石头的价格就会上涨，如果玩家出售了大量的石头，那么石头的价格就会下降。
:::

## 配置文件

服务器公共配置文件仓库：https://github.com/OrzMiku/mc-server-public-config
配置文件 Wiki：https://durumi.gitbook.io/en-dynamicshop-3-wiki
动态商店可视化编辑器：https://www.spigotmc.org/resources/dynamicshop-yml-editor.108570/

上架的物品种类，物品的初始价格由配置文件决定，我们将配置文件托管在 Github 上，欢迎各位玩家对物品种类与价格提出建议。

你可以直接在 Github 上编辑配置文件，我们会对你的 PR 审查，合理的修改会被合并入服务器中。

::: tip
你不用担心看不懂配置文件，这份配置文件十分简单。你只需要在配置文件中找到你想要修改的物品，修改其价格即可。（或使用物品名与价格上架一个物品）。
:::

### 目录

- Startpage.yml 开始页
- Shop/{shopname}.yml 商店

### 商店配置

配置使用 YAML 格式，每个商店一个文件，文件名为商店名，文件名不可重复。你可以参考目前已有的配置文件。

#### Startpage.yml 配置结构

```yaml
Buttons:
  '按钮位置，从0开始':
    displayName: 显示名称
    lore: 物品描述
    icon: 物品图标，使用游戏内物品ID
    itemStack:
      ==: ItemMeta
      meta-type: UNSPECIFIC
    action: 按钮操作，可以执行一个游戏命令
  '按钮位置，从0开始':
    displayName: 显示名称
    lore: 物品描述
    icon: 物品图标，使用游戏内物品ID
    itemStack:
      ==: ItemMeta
      meta-type: UNSPECIFIC
    action: 按钮操作，可以执行一个游戏命令
Options:
  LineBreak: 换行符号
  Title: 菜单名称
  UiSlotCount: 菜单大小
```

#### Shop/{shopname}.yml 配置结构

::: tip 备注：商品实际价格 = 物品价格 \* 中位数 / 库存
:::

```yaml
Options:
  title: 商店名称
  enable: 是否开启（true/false）
  lore: 商店描述
  page: 商店页数
  permission: 商店权限，为空时所有人可以使用
  log:
    active: 是否开启日志（true/false）
'商品位置，从0开始':
  mat: 物品ID
  value: 物品价格
  median: 物品中位数
  stock: 物品库存
  valueMin: 物品最低价格
  valueMax: 物品最高价格
```
