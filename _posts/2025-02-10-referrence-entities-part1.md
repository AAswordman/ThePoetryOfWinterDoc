---
title: 1.实体信息（1）
description: 查询游戏中物品合成/用途
author: Smileheart
date: 2025-02-10 22:12:00 +0800
categories: [C参考, D实体]
tags: [参考, 物品]
math: true
mermaid: true
---

## 灰烬烈焰（Ash Blaze）

### 生物信息

生命值：30

#### 生成地点

在 玄武岩三角洲（Basalt Deltas） 生物群系生成。

亮度要求：0-15

生成密度：地表最多 5 只，地下不会生成。

生成概率：基础权重为 10，随难度变化。

#### 特殊能力

飞行能力：无视重力，可在空中缓慢移动。

远程攻击：

发射火球（Fireball），攻击间隔 3 秒，射程 16 格。

近战攻击：

若靠近目标，会使用普通攻击。

环境适应性：

免疫火焰伤害。

不会受到跌落伤害。

---

### 掉落物

灰烬烈焰死亡后会掉落以下物品：

#### 常规掉落

铁粒（Iron Nugget）（1-3 个，受抢夺附魔影响）

金粒（Gold Nugget）（0-5 个，受抢夺附魔影响）

灰烬（Ash）（1-3 个）

#### 稀有掉落（低概率）

炙热粒（Lava Nugget）（2.5% 概率，受抢夺附魔影响）

下界岩（Netherrack）（2.5% 概率）

金锭（Gold Ingot）（2.5% 概率）

玩家击败灰烬烈焰时，可获得 10 点经验（仅限被玩家击杀）。

## 灰烬河豚（Ash Pufferfish）

### 生物信息

生命值：6

#### 生成地点

在 海洋（Ocean） 生物群系生成。

群体大小：2-4 只

生成密度：地表最多 1 只，地下最多 7 只

生成概率：基础权重为 2

#### 特殊能力

水下移动：能够在水中游动，速度 0.13

膨胀机制：

半膨胀状态：当检测到 2.5 格内有生物时，进入半膨胀状态，持续 2 秒。

完全膨胀状态：再次检测到生物时，进入完全膨胀状态。

爆炸机制：完全膨胀后 1.5 秒 后 自爆，爆炸威力 3，不会引发火焰。

环境适应性：

仅能在水下呼吸，不能呼吸空气。

无法在岩浆中生存，进入岩浆每秒受到 4 点伤害。

---

### 掉落物

灰烬河豚死亡后会掉落以下物品：

#### 常规掉落

灰烬河豚（Ash Pufferfish）（1 个）

玩家击败灰烬河豚时，可获得 1-3 点经验（仅限被玩家击杀）。

## 轰炸者（Bomber）

### 生物信息

生命值：18-30

#### 生成地点

在 下界荒地（Nether Wastes） 生物群系生成。

群体大小：1-2 只

生成密度：地表最多 4 只，地下最多 3 只

生成概率：基础权重为 1

#### 特殊能力

移动速度：0.25

远程攻击：

发射火球（Fireball），攻击间隔 5 秒，射程 64 格。

环境适应性：

免疫火焰伤害。

在水或雨中受到每秒 1 点伤害。

拾取装备：

可拾取掉落的装备并使用。

---

### 掉落物

轰炸者死亡后会掉落以下物品：

#### 常规掉落

岩浆膏（Magma Cream）（0-1 个，受抢夺附魔影响）

下界岩（Netherrack）（0-2 个，受抢夺附魔影响）

#### 稀有掉落（低概率）

炙热粒（Lava Nugget）（1 个）

玩家击败轰炸者时，可获得 5+（随机 1-3）点经验（仅限被玩家击杀）。

## 棕熊（Brown Bear）

### 生物信息

生命值：30-40

#### 生成地点

在 针叶林（Taiga） 生物群系生成。

亮度要求：7-15

群体大小：1-2 只

生成密度：地表最多 4 只，地下不会生成。

生成概率：基础权重为 5

#### 特殊能力

移动速度：0.28

战斗能力：

攻击伤害：8.0

可执行践踏攻击。

驯服与骑乘：

可驯服，驯服概率 8%（使用鲑鱼）。

可骑乘，驯服后可乘骑。

可装备鞍具，交互时使用鞍可装备。

成长机制：

幼年阶段：持续 1200 Tick（约 1 分钟）。

可喂养鱼或鲑鱼加速成长。

环境适应性：

可在水面行走。

进入岩浆时，每秒受到 4 点伤害。

---

### 掉落物

棕熊死亡后会掉落以下物品：

#### 常规掉落

鱼（Fish）（0-2 个，受抢夺附魔影响）

鲑鱼（Salmon）（0-2 个，受抢夺附魔影响）

甜浆果（Sweet Berries）（0-2 个，受抢夺附魔影响）

---

玩家击败棕熊时，可获得 1-3 点经验（仅限被玩家击杀）。

## 屠杀者（Carnager）

### 生物信息

生命值：25-35

#### 生成地点

在 针叶林（Taiga） 生物群系生成。

亮度要求：0-7

群体大小：单独生成

生成密度：地表最多 1 只，地下不会生成。

生成概率：基础权重为 1

#### 特殊能力

移动速度：0.29

战斗能力：

攻击伤害：2.0

可进行近战攻击。

可锁定并追踪玩家、铁傀儡和村民作为目标，目标范围 64 格。

环境适应性：

进入岩浆时，每秒受到 4 点伤害。

---

### 掉落物

屠杀者死亡后会掉落以下物品：

#### 稀有掉落（仅限被玩家击杀）

绿宝石（Emerald）（0-2 个，受抢夺附魔影响）

---

玩家击败屠杀者时，可获得 少量经验（仅限被玩家击杀）。

## 宝箱怪（Chest Monster）

### 生物信息

生命值：30-50

#### 生成地点

在 深暗之域（Deep Dark） 生物群系生成。

亮度要求：0-7

高度要求：Y -64 至 16

群体大小：单独生成

生成密度：地表最多 1 只，地下最多 4 只。

生成概率：基础权重为 1

#### 特殊能力

移动速度：0.4

战斗能力：

攻击伤害：7.0

可进行近战攻击。

可锁定并追踪玩家、村民和铁傀儡作为目标，目标范围 64 格。

环境适应性：

进入岩浆时，每秒受到 4 点伤害。

交易机制：

可与玩家交易，接受特定矿物方块。

可能拒绝交易并逃跑，或者直接变得愤怒。

---

### 掉落物

宝箱怪死亡后会掉落以下物品：

#### 常规掉落

箱子（Chest）（1 个）

#### 稀有掉落（低概率）

钻石（Diamond）（1 个）

金锭（Gold Ingot）（1-2 个）

铁锭（Iron Ingot）（1-4 个）

煤炭（Coal）（1-8 个）

溪流石（Stream Stone）（1 个）

铜锭（Copper Ingot）（1-3 个）

燧发枪（Flintlock）（1 个）

短燧发枪（Short Flintlock）（1 个）

钢锭（Steel Ingot）（1-3 个）

#### 特殊掉落（低概率）

圣诞礼物（Christmas Gift）（1-3 个）

红包（Red Bag）（1-3 个）

跟随粒子（Following Particle）（1 个）

随机盔甲套装（低概率）：

寒衣套装（Hanyi Set）

魅影套装（Glamor Set）

莱斯特套装（Lester Set）

制服套装（Uniform Set）

正装套装（Formal Style Set）

路兹套装（Luz Set）

久织套装（Jiuzhi Set）

---

玩家击败宝箱怪时，可获得 少量经验（仅限被玩家击杀）。

## 蛤蜊（Clam）

### 生物信息

生命值：

小型：30

中型：40

大型：50

超大型：70

#### 生成地点

在 海洋（Ocean） 生物群系生成。

群体大小：1-3 只

生成密度：地表最多 3 只，地下最多 3 只

生成概率：基础权重为 100

#### 特殊能力

水下移动速度：0.005

战斗能力：

小型攻击伤害：1.0

中型攻击伤害：3.0

大型攻击伤害：7.0

超大型攻击伤害：11.0

可攻击 玩家、铁傀儡、雪傀儡、村民、流浪商人、怪物，目标范围 35 格。

成长机制：

小型成长为中型：1200 Tick（约 1 分钟）。

中型成长为大型：1200 Tick（约 1 分钟）。

大型成长为超大型：1200 Tick（约 1 分钟）。

环境适应性：

仅能在水下生存，无法呼吸空气。

受重力影响，会下沉至海底。

---

### 掉落物

蛤蜊死亡后会掉落以下物品：

#### 常规掉落

贝壳（Shell）（0-1 个）

---

玩家击败蛤蜊时，可获得 5 点经验（仅限被玩家击杀）。

## 螃蟹（Crab）

### 生物信息

生命值：

小型：10

中型：20

大型：30

超大型：50

#### 生成地点

在 海洋（Ocean） 和 河流（River） 生物群系生成。

群体大小：1-2 只

生成密度：

海洋：地表最多 4 只，地下最多 4 只，基础权重 40。

河流：无地表生成，地下生成，基础权重 60。

#### 特殊能力

水下移动速度：0.15

战斗能力：

小型攻击伤害：1.0

中型攻击伤害：3.0

大型攻击伤害：7.0

超大型攻击伤害：11.0

可攻击 玩家、铁傀儡、雪傀儡、村民、流浪商人、怪物，目标范围 35 格。

成长机制：

小型成长为中型：1200 Tick（约 1 分钟）。

中型成长为大型：1200 Tick（约 1 分钟）。

大型成长为超大型：1200 Tick（约 1 分钟）。

环境适应性：

仅能在水下生存，无法呼吸空气。

受重力影响，会下沉至水底。

---

### 掉落物

暂无记载。

---

玩家击败螃蟹时，可获得 5 点经验（仅限被玩家击杀）。

## 猩红史莱姆（Crimson Slime）

### 生物信息

生命值：

大型：16

中型：4

小型：1

#### 生成地点

在 绯红森林（Crimson Forest） 生物群系生成。

群体大小：0-4 只

生成密度：地表最多 3 只，地下不会生成。

生成概率：基础权重为 6

#### 特殊能力

移动速度：

大型：0.6

中型：0.4

小型：0.3

战斗能力：

大型攻击伤害：6.0

中型攻击伤害：4.0

小型攻击伤害：2.0

可攻击 玩家、铁傀儡、雪傀儡，目标范围 16 格。

跳跃机制：

平静状态：跳跃间隔 0.5-1.5 秒。

攻击状态：跳跃间隔 0.16-0.5 秒，跳跃更频繁。

环境适应性：

进入岩浆时，每秒受到 1 点伤害。

可在水面移动，但会避免进入水中。

---

### 掉落物

暂无记载。

---

玩家击败猩红史莱姆时，可获得 与体型相对应的经验值（仅限被玩家击杀）。

## 黑暗雪人（Dark Snow Man）

### 生物信息

生命值：8-15

#### 生成地点

在 冰冻（Frozen） 和 寒冷森林（Cold Forest） 生物群系生成。

亮度要求：0-7

群体大小：1-3 只

生成密度：

冰冻生物群系：地表最多 4 只，地下最多 3 只，基础权重 1。

寒冷森林生物群系：地表最多 3 只，地下不会生成，基础权重 2。

#### 特殊能力

移动速度：0.2

战斗能力：

攻击伤害：4.0

可攻击 玩家、村民、流浪商人。

特殊机制：

白天会自动消失。

在温度高于 1.0 的区域，每秒受到 1 点伤害。

在水或雨中，每秒受到 1 点伤害。

行走时会在寒冷区域留下雪层。

---

### 掉落物

雪球（Snowball）（0-3 个）

---

玩家击败黑暗雪人时，可获得 5 点经验（仅限被玩家击杀）。

## 末影蟒（Ender Snake）

### 生物信息

生命值：30

#### 生成地点

在 末地（The End） 生物群系生成。

群体大小：1 只

生成密度：地表最多 6 只，地下不会生成。

生成概率：基础权重为 1（有 4 倍概率替换为末影人）。

#### 特殊能力

移动速度：0.02

战斗能力：

远程攻击：

射弹类型：dec:ender_snake_ball

攻击射程：64 格

攻击间隔：最多 3 秒

每次攻击发射 3 枚射弹，间隔 0.5 秒

可锁定玩家作为目标，目标范围 64 格。

特殊机制：

可被紫颂果、骨头和龙息引诱。

使用玻璃瓶与其交互，可收集龙息。

免疫火焰伤害。

不会受到跌落伤害。

可在空中缓慢漂浮。

---

### 掉落物

末影蟒死亡后会掉落以下物品：

#### 常规掉落

末影骨（Ender Bone）（1-2 个）

#### 稀有掉落

末影核心（Ender Core）（1 个）

末影粉末（Ender Powder）（1-5 个）

潜影物质（Ender Substance）（1-2 个）

---

玩家击败末影蟒时，可获得 5 点经验（仅限被玩家击杀）。
