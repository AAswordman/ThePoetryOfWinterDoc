---
title: Addon安装引导
description: 全面解析安装和遇到的问题
author: AAswordsman
date: 2025-02-08 18:44:00 +0800
categories: [教程, 装载]
tags: [安装]
math: true
mermaid: true
---

本教程将会引导你进行简单的 Addon 下载与安装

## 下载 Addon

1. 你需要下载**游戏对应版本**的 Addon，否则将不能正常运行。对应关系可以从[版本对应表](https://klpbbs.com/thread-12380-1-1.html)查看。
2. 接着可以从[蓝奏云网盘](https://wwa.lanzoui.com/b0feo4csd)（**密码 3n42**）下载对应的版本。
   _（可选）当然，你也可以进群下载对应版本/去 github 的发布页看最新版本（那里更新的不太勤快）_

## 安装

<blockquote class="prompt-tip" >
你可以参考其他Addon的安装教程，也可以根据我们的官方导入视频，亦或者跟随下方文字教学。
</blockquote>

{% include embed/bilibili.html id='BV1Ps1iYaEaw' %}

### 安装到本地

这里介绍一种最简单的（最不负责任的）安装方案，想要了解其他方案的请转到[游戏读取 Addon 原理](../course-install-difficulty/)查看。

<blockquote class="prompt-danger" >
这种方法理论而言只适用于第一次安装，或者确保游戏内没有旧版本痕迹的时候使用。
</blockquote>

1. 找到下载的文件位置。

- 对于 Windows 而言，你可以通过浏览器的**下载**选项卡快速定位
- 对于 Android 而言，你可以搜索你浏览器下载所在的位置，或者直接去**压缩包**那一栏看

_注：由于 lanzous 网盘只能上传 zip 格式的文件，因此我们都以 zip 后缀保存在了网盘，所以才需要手动改后缀导入。_

2. 修改文件后缀为`.mcaddon`
3. 选择 **Minecraft** 打开

### 安装到服务器

_我们非常建议各位腐竹去看看那篇原理文章，免得说出一些迷惑言论。_

不过，在这里还是提供一种简单的方案。
先使用[安装到本地](#安装到本地)的方案，确保 Addon 成功载入地图（提前进行[测试](#测试)环节）。接着将地图放入服务器时，确保：

- 地图里面有载入 Addon（即 Beh、Res 文件夹里面有 Addon）且在本地游戏里面看到已经被**激活**

或者：

- 地图里面没有载入 Addon，但是 Addon 已经直接被放入服务器**根目录**的行为材质包中，且在本地游戏里面看到已经被**激活**

## 测试

### 正常运行标志

| 描述                         | 截图                                                                |
| ---------------------------- | ------------------------------------------------------------------- |
| 协议加载正常（第一次运行时） | ![alt text](/images/post/2025-02-08-course-install-easy/image.png)  |
| 聊天框显示信息               | ![alt text](/images/post/2025-02-08-course-install-easy/image2.png) |
| 血条正常显示                 | ![alt text](/images/post/2025-02-08-course-install-easy/image3.png) |

<blockquote class="prompt-warning">
爱心是否存在不可做为加载的标志，因为有一些特殊情况存在
</blockquote>

### 问题自查

请逐个检查以下问题：

1. 游戏版本与模组版本是否**对应**

- 这包括了一种特殊情况：导入的版本时对应的，但是在地图的设置里面看到 add 的版本不是导入的版本。
- 这是为什么呢？可以参考[游戏读取 Addon 原理](../course-install-difficulty/)。
- **看不懂没关系**，可以跟随另外一个教程[Addon 更新引导]()进行操作。
<blockquote class="prompt-warning">
本 addon 对相近游戏版本的兼容性很差，请不要认为相近版本一定能正常游玩
</blockquote>

2. **实验玩法**是否全开（除村民交易再平衡、更新 1.21 版，犰狳和狼铠）
3. 资源包和行为包是否都已安装
   资源包(`resource pack ` `res` `rp`) 行为包(`behavior pack` `beh` `bp`)
4. 是否与其他模组或材质包冲突
   注：本 addon 与其他 add **兼容性很差**，为保证游戏体验，建议**单独**创建冬诗存档
5. “设置”中 ui 选项是否改为“经典”
   若以上条目检查无误且问题仍然存在，在聊天框输入`>/help`，若未出现下图所示新增指令,尝试手动将 addon 导入 dev 文件夹，路径如下：

| 类型   | 路径                                                                                                      |
| ------ | --------------------------------------------------------------------------------------------------------- |
| 行为包 | /storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/development_behavior_packs |
| 资源包 | /storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/development_resource_packs |

_（这个路径也是前面的视频中推荐的存放位置）_
