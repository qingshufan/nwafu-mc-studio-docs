---
author: 'OrzMiku'
category: '指南'
tag:
  - 服务器地图
order: 5
---

# 服务器地图

## Xaero 地图

服务器为 Xaero Map 模组提供服务器自动选择功能，你可以安装[Xaero 的世界地图](https://modrinth.com/mod/xaeros-world-map)和[Xaero 的小地图](https://modrinth.com/mod/xaeros-minimap)在服务器使用地图功能。

## 在线网页地图

::: warning 网页地图已经关闭
由于性能原因，服务器已经关闭了网页地图功能。此项目不再可用。
:::

服务器提供了一个在线网页地图，网址：[https://map.mc.nwafu.com.cn/](https://map.mc.nwafu.com.cn/)。

- 你可以在右侧菜单：
  - 切换世界。
  - 定位在线的玩家。
- 你可以在左侧菜单：
  - 使用+/-按钮缩放地图。
    - 鼠标滚轮可以缩放地图。
  - 开启/关闭玩家和标记点显示。
  - 查看光标所在的坐标。
  - 刷新地图。

### 网页地图命令

- `/dynmap hide`: 在地图中隐藏自己。
- `/dynmap show`: 在地图中显示自己。

::: warning 下面命令仅拥有建筑师权限可以使用
:::

- `/dmarker add <label> icon:<icon> set:<set-id>`：在玩家当前位置添加一个新标记，带有给定标签和可选图标以及可选标记集
- `/dmarker add id:<id> <label> icon:<icon> set:<set-id>`：在玩家当前位置添加一个新标记，具有给定的 ID、给定的标签和可选图标以及可选标记集
- `/dmarker add id:<id> <label> icon:<icon> set:<set-id> x:<x-coord> y:<y-coord> z:<z-coord> world:<Worldname>`：在给定位置添加一个新标记，具有给定 ID、给定标签和可选图标以及可选标记集
- `/dmarker movehere <label>`：更新与给定标签匹配的第一个标记的位置以匹配当前玩家的位置
- `/dmarker movehere id:<id>`：更新具有给定 ID 的标记的位置以匹配当前玩家的位置
- `/dmarker update <label> icon:<newicon> newlabel:<newlabel>`：更新与给定标签匹配的第一个标记的图标和/或标签
- `/dmarker update id:<id> icon:<newicon> newlabel:<newlabel>`：更新具有给定 ID 的标记的图标和/或标签
- `/dmarker delete <label>`：删除与给定标签匹配的第一个标记
- `/dmarker delete id:<id>`：删除具有给定 ID 的标记
- `/dmarker list`：列出默认标记集中所有已定义标记的属性
- `/dmarker list set:<set-id>`：列出给定标记集中所有已定义标记的属性
- `/dmarker icons`：列出定义供标记使用的所有图标的属性
- `/dmarker addset <label> hide:<hide-by-def> prio:<priority> minzoom:<minzoom>`：添加具有给定标签的新标记集（ID = 标签）
- `/dmarker addset id:<id> <label> hide:<hide-by-def> prio:<priority> minzoom:<minzoom>`：添加具有给定 ID 和标签的新标记集
- `/dmarker updateset <label> newlabel:<new-label> hide:<hide-by-def> prio:<priority> minzoom:<minzoom>`：使用给定标签更新标记集（ID = 标签）
- `/dmarker updateset id:<id> newlabel:<new-label> hide:<hide-by-def> prio:<priority> minzoom:<minzoom>`：使用给定 ID 更新标记集
- `/dmarker deleteset <label>`：删除具有给定标签的标记集
- `/dmarker deleteset id:<id>`：删除给定 ID 的标记集
- `/dmarker listsets`：列出所有标记
- `/dmarker addicon id:<id> <label> file:"filename"`：使用给定的 ID 和标签并使用给定的文件安装新图标（相对于 MC 服务器目录处理路径，并复制文件内容）。
- `/dmarker updateicon id:<id> newlabel:<label> file:"filename"`：更新图标，用提供的新值替换现有设置。
- `/dmarker deleteicon id:<id>`：删除给定 ID 的图标
- `/dmarker addcorner`：使用当前位置将角添加到角列表
- `/dmarker addcorner <x> <y> <z> <world>`：将给定世界上给定 x、y 和 z 坐标的角添加到角列表中
- `/dmarker clearcorners`：清除角落列表
- `/dmarker addarea <label>`：使用角列表添加具有给定标签的新区域
- `/dmarker addarea id:<id> <label>`：使用角列表添加具有给定 ID 的新区域
- `/dmarker deletearea <label>`：删除给定标签的区域
- `/dmarker deletearea id:<id> <label>`：删除给定 ID 的区域
- `/dmarker listareas`：列出所有区域的详细信息
- `/dmarker updatearea <label> <arg>:<value> ...`：更新具有给定标签的区域的属性
- `/dmarker updatearea <id> <arg>:<value> ...`：更新给定 ID 的区域属性
- `/dmarker updatearea <id> label:<label> newlabel:<newlabel>`：更新具有给定 ID 的区域的标记标签
- `/dmarker addcircle <label>`：使用角列表添加具有给定标签的新圆
- `/dmarker addcircle id:<id> <label>`：使用角列表添加具有给定 ID 的新圆
- `/dmarker deletecircle <label>`：删除给定标签的圆
- `/dmarker deletecircle id:<id> <label>`：删除给定 ID 的圆
- `/dmarker listcircles`：列出所有圈子的详细信息
- `/dmarker updatecircle <label> <arg>:<value> ...`：使用给定标签更新圆的属性
- `/dmarker updatecircle <id> <arg>:<value> ...`：更新给定 ID 的圆的属性
- `/dmarker updatecircle <id> label:<label> newlabel:<newlabel>`：更新具有给定 ID 的圆的标记标签
- `/dmarker addline <label>`：使用角列表添加带有给定标签的新行
- `/dmarker addline id:<id> <label>`：使用角列表添加具有给定 ID 的新行
- `/dmarker deleteline <label>`：删除给定标签的行
- `/dmarker deleteline id:<id> <label>`：删除给定 ID 的行
- `/dmarker listlines`：列出所有行的详细信息
- `/dmarker updateline <label> <arg>:<value> ...`：更新具有给定标签的线的属性
- `/dmarker updateline id:<id> <arg>:<value> ...`：更新给定 ID 的线路属性
- `/dmarker appenddesc id:<id> set:<set-id> desc:"<marker-description>"`：将给定文本附加到标记上的描述字段中
- `/dmarker resetdesc id:<id> set:<set-id>`：重置标记的描述
