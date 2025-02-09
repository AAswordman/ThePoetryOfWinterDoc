---
title: Addon读取原理
description: 全面解析安装和遇到的问题
author: AAswordsman
date: 2025-02-08 18:44:00 +0800
categories: [教程, 装载]
tags: [安装]
math: true
mermaid: true
---

本篇文章将会从技术层面讲解 Addon 得运作原理。内容有**一定难度**。
读文章之前，我们假设你已经知道了什么是**路径**，以及基本的文件复制、粘贴、解压、压缩、查找操作。
最好补充一些**系统与用户**和**JSON**方面的知识。

## 读取原理

在我们讲[操作引导](#操作引导)之前，我们先假设游戏的文件都存放在`/a/b/c/com.mojang`的文件夹中。

### 包加载原理

在`/a/b/c/com.mojang/minecraftWorlds`中你可以看到存放的地图.假设地图文件夹名字为`0rN03P3c4jo=`,那么进入`/a/b/c/com.mojang/minecraftWorlds/0rN03P3c4jo=`,你将会看到以下结构(已省略不相关的文件):

0rN03P3c4jo=/
│
├── behavior_packs/
│ ├── Addon1
│ └── Addon2
├── resource_packs/
│ ├── Addon1
│ └── Addon2
├── world_behavior_packs.json
└── world_resource_packs.json

<blockquote class="prompt-info">
这些文件没有也是可能的.对于一个没加过 Addon 的地图,上述文件都可能不存在,但是加载的时候会自动创建.
</blockquote>

在`world_behavior_packs.json`或者`world_resource_packs.json`中,结构如下:

```json
[
  {
    "pack_id": "c2021c25-08e8-9ade-0916-6cd21931fac5",
    "version": [1, 6, 0]
  }
]
```

这表明游戏将要加载的 Addon.游戏将会根据[读取优先级](#读取优先级),一个一个层级去根据 uuid 和版本查找是否有对应的包.

查找依据是`manifest.json`文件,比如搜索`地图内pack存放`(即`/a/b/c/com.mojang/minecraftWorlds/0rN03P3c4jo=/behavior_packs/Addon1/manifest.json`和`resource_packs/manifest.json`)

在 Addon 的`manifest.json`文件,你可能看到如下结构:

```json
{
  "format_version": 2,
  "capabilities": ["script_eval"],
  "header": {
    "description": "Ver. 1.9.3R1 -Made by AA swordsman,LiLeyi and many their friends.",
    "name": "The Poetry Of Winter[Beh]",
    "uuid": "c2021c25-08e8-9ade-0916-6cd21931fac5",
    "version": [1, 6, 0],
    "min_engine_version": [1, 21, 0]
  },
  "modules": [
    {
      "description": "Ver. 1.9.3R1 -Made by AA swordsman,LiLeyi and many their friends.",
      "type": "script",
      "uuid": "c2021c83-08e8-9ade-0916-6cd21931fac5",
      "version": [1, 6, 0],
      "entry": "scripts/out/pom.js"
    },
    {
      "type": "data",
      "uuid": "c2021c83-07e8-9ade-0916-6cd21931fac5", //查找依据
      "version": [1, 6, 0]
    }
  ],
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.17.0-beta"
    },
    {
      "module_name": "@minecraft/server-ui",
      "version": "1.4.0-beta"
    },
    {
      "module_name": "@minecraft/server-gametest",
      "version": "1.0.0-beta"
    },
    {
      "uuid": "c2021c95-08e8-9ade-0916-6cd21931fac5",
      "version": [1, 6, 0]
    }
  ]
}
```

游戏的查找依据是上面的标注部分.

如果找到了对应的包,那么游戏就会进行加载.

### 读取优先级

在 mc 中，遵循这样一个规则：`dev_pack存放 > 地图内pack存放 > 普通pack存放`

#### dev_pack 存放

指的是`/a/b/c/com.mojang/development_behavior_packs`和`/a/b/c/com.mojang/development_resource_packs`文件夹.

如果把 Addon 放入这两个文件夹之中,那么将会有最高的读取优先级.这两个文件夹更新方便,操作也方便.

#### dev_pack 存放

指的是`/a/b/c/com.mojang/development_behavior_packs`和`/a/b/c/com.mojang/development_resource_packs`文件夹.

如果把 Addon 放入这两个文件夹之中,那么将会有最高的读取优先级.这两个文件夹更新方便,操作也方便.

#### 地图内 pack 存放

指的是`/a/b/c/com.mojang/minecraftWorlds/0rN03P3c4jo=/behavior_packs/`和`/a/b/c/com.mojang/minecraftWorlds/0rN03P3c4jo=/resource_packs`文件夹.

如果把 Addon 放入这两个文件夹之中,那么相当于地图带了 Addon.分享地图会很方便,但是地图会变得很大.

这个位置还有一个显著的缺点: 由于内置导入的是优先级更低的部分,并且游戏内无法删除这部分的文件,导致出现**不进行文件操作就无法更新单个地图 Addon**的问题.

但是还有更麻烦的:使用默认导入(普通的 pack 存放)创建地图的时候,游戏会**自动把 Addon 往地图里面复制一份** _真不知道是哪个天才想出来的设计_

#### 普通 pack 存放

这里是游戏默认导入路径.指的是`/a/b/c/com.mojang/behavior_packs`和`/a/b/c/com.mojang/resource_packs`文件夹.

和 dev 相比,**优先级低**,而且具有**自动把 Addon 往地图里面复制一份**的逆天设计,除了导入方便,我也想不出什么优点了.

_不过如果是服务器的话就不一样了,服务器文件管理里面可以放心把 Addon 扔进去._

### 内置导入原理

当文件后缀命名为`.mcaddon` `.mcpack`的时候,用 mc 打开就可以触发导入,并且导入到[普通 pack 存放](#普通-pack-存放)中

这里要注意文件夹嵌套问题.

对于 `mcaddon`:

- 一定要让游戏能够读取到 `压缩包/xxxx/manifest.json`,否则导入失败.

对于 `mcpack`:

- 一定要让游戏能够读取到 `压缩包/manifest.json`,否则导入失败.
- (可以理解 mcpack 就是上面说的 xxxx 文件夹的压缩包版本)

## 操作引导

### Android 端

#### 版本特性

由于谷歌的蜜汁操作，Android 的版本迭代越来越快，版本之间也是相当的割裂，以至于**无法统一出一个导入工具同时适配**多个 Android 的导入 _（其实是可以的，但是很麻烦）_

- Android 目录：`/sdcard/` 指向的是当前用户所在的内部储存路径。在使用用户为默认用户时（我估计很多人不知道 Android 还有用户这个东西），等同于`/storage/emulated/0/`。如果切换用户，你会发现最后那个`0`变了。
- Data 目录：（特指内部储存里面，`/sdcard/Android/data`）在 Android 强制分区后，mc 的各种文件也全部迁移到了这里。因此我们需要访问里面的文件，才能人工管理地图与 Addon 加载。
- Minecraft 文件目录：具体而言，文件都存放在了`/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/`。

在这里，我们简单讲一下 Android 的各个版本的问题。

##### Android 5.0 - 6.0（Lollipop - Marshmallow）

推广 F2FS，Android 6.0 引入运行时权限，有开发复杂和设备兼容问题。

##### Android 7.0 - 8.0（Nougat - Oreo）

优化 F2FS 支持和数据加密，多窗口模式带来文件访问新挑战。

##### Android 9.0（Pie）

增强文件系统安全和存储管理，严格权限管理对部分应用有影响。

以上版本都可以很方便地导入 Addon，因为文件访问只需要一个权限，就可以在除了 root 的地方乱跑。

##### Android 10 以上

推行 Scoped Storage，优化文件系统性能，开发者需适配新规则。

在 Android 10，只是引入了分区，还没有开始强制储存。但是从 11 开始，就进行了强制分区，无法直接访问了。

但是当时 11 还有一个方案，就是 uri 直接调 SAF 访问文件，于是只要经过授权就可以操作 data 目录。

可惜这个方案在 12 之后也被 ban 了，Android 13 14 开发者们通过各种方法绕。坏消息时，Android 14 已确认存在补丁热更新，这个文件管理越来越难绕了。

#### 技术手段

那么就没办法了吗？不是，我们还有一些技术手段可以发挥。

##### 1.自带的文件管理

这个绝对是最稳，不太会出事。但是呢，谷歌能不能把它做好一点，现在只是‘勉强能用’。如果各位不嫌弃的话，凑合一下，导入个 Addon 应该是问题不大的。

##### 2\.MT 管理器 + Shizuku

adb 通道是谷歌留给开发者的，可以用另外一个设备连接手机，然后使用 adb 进行一定的调试任务，比如操作文件。那么，有那么一种方案：能不能**自花授粉**呢？

Shizuku 就是这样处理的。mt 调用 Shizuku，就可以实现流畅的文件操作。不过，在一些机型中，好像出了点问题，目前也不清楚是什么情况。这个方法也就是视频里面用的，**如果用不了，请换别的方案。**

##### 3.直接授权

还有一部分幸运机型，目前还是能通过 mt 管理器直接授权后使用的。不过呢......这个速度导入冬诗，还不如百度网盘下的快呢。

在解决了文件操作的问题后，结合[读取原理](#读取原理)，只要把 add 塞进 dev 两个文件夹，导入就结束了。

### Windows 端

Windows 面临的问题很简单：找不到路径啊！

这个嘛，只要指一条路就行了。路径如下：
`C:\Users\用户名\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`

用户名记得改成**自己的用户名**。

<blockquote class="prompt-tip" >
建议给文件夹创建一个快捷方式，防止找不到位置
</blockquote>

### IOS 端

该部分等待补充完善。
