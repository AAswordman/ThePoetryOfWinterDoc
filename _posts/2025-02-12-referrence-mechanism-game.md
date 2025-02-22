---
title: 1.游戏全局机制
description: 介绍了游戏中主要的全局机制
author: AAswordsman
date: 2025-02-12 23:59:00 +0800
categories: [C参考, A游戏]
tags:
  [
    参考,
    机制,
    死亡模式,
    实体清理,
    夜晚事件,
    觉醒末影龙,
    难度,
    ui刷新间隔,
    连锁挖矿,
  ]
math: true
mermaid: true
---

这部分内容包括了游戏中主要的全局性机制。

## 自然事件

### 夜晚事件

夜晚降临时，会刷新夜晚事件，随机在玩家周围刷新怪物，同时天空变色，直到第二天来临。

事件概率和生成实体 ID 对应如下.

| 事件名称 | 概率(%) | id                        | 天空颜色                                                               |
| -------- | ------- | ------------------------- | ---------------------------------------------------------------------- |
| 尸潮     | 1       | `dec:event_zombie_wave`   | <font color='#820200' style="background-color:#DDDDDD;">#820200</font> |
| 骷髅夜   | 1       | `dec:event_skeleton_wave` | <font color='#C6C6C6' style="background-color:#DDDDDD;">#C6C6C6</font> |
| 暗影之夜 | 1       | `dec:event_shadow_night`  | <font color='#3E1A77' style="background-color:#DDDDDD;">#3E1A77</font> |
| 寒潮     | 1       | `dec:event_cold_wave`     | <font color='#FFFFFF' style="background-color:#DDDDDD;">#FFFFFF</font> |
| 万圣夜   | 1       | `dec:event_halloween`     | <font color='#A05A0B' style="background-color:#DDDDDD;">#A05A0B</font> |
| 寂静之夜 | 1       | `dec:event_silent_night`  | <font color='#000000' style="background-color:#DDDDDD;">#000000</font> |

### 末影龙事件

当末影龙被击败时，会产生**末影龙觉醒**事件，并生成强力的觉醒末影龙。

如果一个世界没有打过末影龙，那么世界的玩家无法解锁高级锭。

## 游戏内容全局配置

### 死亡模式

输入`>/diemode open` 开启死亡模式.仅可在房间未有人死亡时开启死亡模式.

死亡模式开启后,死去的玩家将会额外生成一只冤魂,同时进入观察者模式,除非进行作弊,否则**无法再次在该地图游玩**.

_(和极限模式有些类似,但是目前 ui 存在一点冲突,所以建议直接开极限模式)_

### 实体清理

这一功能是为了防止游戏卡顿.实体清理是基于一套公式进行推导的,一旦触发将会进行 `10s` 的准备,然后清理白名单之外的实体(白名单可在**高级设置**中更改).

实体清理是基于动态 tps 进行计算的.公式如下.

**1. EMA 算法平滑 TPS:**

$$\overline{TPS}_t = \frac{\overline{TPS}_{t-1} \times (L-1) + TPS_t}{L}$$

**其中:**

$$
L = \begin{cases}
S & \text{if } (TPS*t - \overline{TPS}*{t-1}) > 0 \
11-S & \text{otherwise}
\end{cases}
$$

$$
S = entityCleanerStrength
$$

**2.动态延迟调整公式：**

$$Delay = D^{\overline{TPS}}$$

**其中:**

$$D=1.8+\frac{100}{60−{U}}$$

$$U = entityCleanerDelay$$

**3.清理触发条件**

$$\sum Entities > N_{min}$$

**其中:**

$$N_{min}= entityCleanerLeastNum$$

| 解释         | 变量名                  | 符号        | 详细说明                                                             |
| ------------ | ----------------------- | ----------- | -------------------------------------------------------------------- |
| 清理强度参数 | `entityCleanerStrength` | $$S$$       | 控制 TPS 变化敏感度，值越大时：当 TPS 上升时快速响应，下降时缓慢恢复 |
| 最小实体阈值 | `entityCleanerLeastNum` | $$N_{min}$$ | 触发清理的实体数量临界值，当三界总实体数超过该值时启动清理流程       |
| 延迟基数参数 | `entityCleanerDelay`    | $$U$$       | 用户配置的原始参数（范围建议 $(0,60)$），通过公式转换为指数基数 $D$  |

清理之后,计时器会重新累加时间$T$.当$T > Delay$并且满足条件(3)时,就会再次进行实体清理.

### 难度选择

难度和所有属性的改变,对应如下:

| 难度等级 | ID  | 名称             | 生命加成 | 物理防御系数 | 魔法防御系数 | 伤害系数 | 法力值回速 | 冷却减缩 | 经验倍数 |
| -------- | --- | ---------------- | -------- | ------------ | ------------ | -------- | ---------- | -------- | -------- |
| Fool     | 1   | BIG Fool         | +30      | +40%         | +30%         | 170%     | 3x         | 1.8x     | 4x       |
| Easy     | 2   | Easy             | +10      | +20%         | +10%         | 130%     | 2.5x       | 1.3x     | 2x       |
| Normal   | 3   | Normal(original) | 0        | 0%           | 0%           | 100%     | 2x         | 1x       | 1x       |
| Hard     | 4   | Difficult        | -10      | 0%           | 0%           | 80%      | 1.5x       | 0.8x     | 0.75x    |
| Hell     | 5   | Human play???    | -15      | -20%         | -20%         | 50%      | 0.8x       | 0.6x     | 0.5x     |

### ui 刷新间隔

这一功能是为了防止卡顿而设计的.血条/蓝条都是轮询刷新机制,一般情况下默认的就够用.

### 奖励设置与兑换

这一功能为服务器而制作.腐竹可以设置一些奖励,然后生成兑换码发放给玩家,玩家可以用兑换码换取一定奖励.

奖励可以是直接的经验,也可以是执行命令.

### 其他可选开关

玩家传送、玩家传送显示坐标、任何传送需要传送石、开启死亡点回溯、允许记录传送点、伤害显示、允许核弹爆炸在这里不再做介绍，字面理解即可。

初始魔能镐
: 打开后，所有的玩家都可以开局获得一个魔能镐。

连锁挖矿
: 这个配置有**总开关**和**个人开关**.总开关控制了全局是否能够使用连锁类物品进行挖矿 **(目前只有魔能镐/永冬镐斧/魔能斧能用连锁)**.个人开关则是**防止误触**而设计的.
