---
title: 5.传送门激活与判断
description: 为了防止mojang乱改，我们把底层原理统统告诉大家，出bug自行推算
author: AAswordsman
date: 2025-02-15 19:43:00 +0800
categories: [C参考, A游戏]
tags: [参考, 机制, 遗迹, 建筑补丁, 群系]
math: true
mermaid: true
---

这部分内容介绍了传送门判定和生成。

<blockquote class="prompt-info">
以下内容仅跟进到1.9.3R2版本。
</blockquote>

### 传送门搭建

当启程钥匙点击的一刻，就会进行结构检测，满足则会激活传送门。

目前能被激活的传送门结构如下：

| 源结构                                                                       | 激活后                                                                       |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image.png)   | ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-1.png) |
| ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-2.png) | ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-3.png) |
| ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-4.png) | ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-5.png) |
| ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-6.png) | ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-7.png) |
| ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-8.png) | ![alt text](/images/post/2025-02-15-referrence-mechanism-portal/image-9.png) |

其激活设定代码/伪代码如下：（我也懒得解释了，大概就是这样一回事，机翻一下就知道了）

## 1. 沙漠遗迹传送门（未实装）

<details>
**激活条件**：使用 `启程钥匙` 右键点击 `魔能块`

### 结构布局

```
[
  [
    "XXXXX",
    "XWWWX",
    "XWYWX",
    "XWWWX",
    "XXXXX"
  ],
  [
    "XSXSX",
    "SAAAS",
    "XAAAX",
    "SAAAS",
    "XSXSX"
  ],
  [
    "CAAAC",
    "AAAAA",
    "AAAAA",
    "AAAAA",
    "CAAAC"
  ]
]
```

### 方块映射

| 符号 | 原始方块                 | 激活后替换           |
| ---- | ------------------------ | -------------------- |
| X    | Sandstone                | 保持原样             |
| W    | Water                    | wb:portal_desertboss |
| Y    | wb:block_magic_equipment | wb:portal_desertboss |
| A    | Air                      | 保持原样             |
| S    | SandstoneSlab            | 保持原样             |
| C    | CobblestoneWall          | 保持原样             |

</details>

## 2. 守卫遗迹传送门

**激活条件**：使用 `启程钥匙` 右键点击 `wb:block_senior_equipment`

### 结构布局

```

[
[
"XXXXX",
"XWWWX",
"XWYWX",
"XWWWX",
"XXXXX"
],
[
"XSASX",
"SAAAS",
"AAAAA",
"SAAAS",
"XSASX"
],
[
"CAAAC",
"AAAAA",
"AAAAA",
"AAAAA",
"CAAAC"
]
]

```

### 方块映射

| 符号 | 原始方块                  | 激活后替换          |
| ---- | ------------------------- | ------------------- |
| X    | Sandstone                 | 保持原样            |
| W    | Water                     | wb:portal_guardboss |
| Y    | wb:block_senior_equipment | wb:portal_guardboss |
| A    | Air                       | 保持原样            |
| S    | SandstoneSlab             | 保持原样            |
| C    | SandstoneWall             | 保持原样            |

---

## 3. 石头遗迹传送门

**激活条件**：使用 `启程钥匙` 右键点击 `wb:block_energy_seal`

### 结构布局

```

[
[
"BXXXB",
"XWWWX",
"XWYWX",
"XWWWX",
"BXXXB"
],
[
"BASAB",
"AAAAA",
"SAAAS",
"AAAAA",
"BASAB"
]
]

```

### 方块映射

| 符号 | 原始方块             | 激活后替换          |
| ---- | -------------------- | ------------------- |
| X    | Sandstone            | 保持原样            |
| W    | Water                | wb:portal_stoneboss |
| Y    | wb:block_energy_seal | wb:portal_stoneboss |
| S    | SandstoneWall        | 保持原样            |
| B    | ChiseledStoneBricks  | StoneBricks         |
| A    | Air                  | 保持原样            |

---

## 4. 洞穴遗迹传送门

**激活条件**：使用 `启程钥匙` 右键点击 `wb:block_energy_boundary`

### 结构布局

```

[
[
"XXXXX",
"XWWWX",
"XWYWX",
"XWWWX",
"XXXXX"
],
[
"XASAX",
"AAAAA",
"SAAAS",
"AAAAA",
"XASAX"
]
]

```

### 方块映射

| 符号 | 原始方块 | 激活后替换 |
| ---- | -------- | ---------- |

X: MinecraftBlockTypes.Sandstone,
W: "wb:portal_guardboss",
Y: "wb:portal_guardboss",
A: MinecraftBlockTypes.Air,
S: MinecraftBlockTypes.SandstoneSlab,
C: MinecraftBlockTypes.SandstoneWall,

---

## 5. 远古洞穴传送门

**激活条件**：使用 `启程钥匙` 右键点击 `wb:block_magic_ink`

### 结构布局

```

[
[
"BXXXB",
"XWWWX",
"XWYWX",
"XWWWX",
"BXXXB"
],
[
"BASAB",
"AAAAA",
"SAAAS",
"AAAAA",
"BASAB"
]
]

```

### 方块映射

| 符号 | 原始方块           | 激活后替换            |
| ---- | ------------------ | --------------------- |
| X    | ChiseledDeepslate  | 保持原样              |
| W    | Water              | wb:portal_ancientboss |
| Y    | wb:block_magic_ink | wb:portal_ancientboss |
| S    | VerdantFroglight   | 保持原样              |
| B    | MossyCobblestone   | 保持原样              |
| A    | Air                | 保持原样              |

---

## 6. 心灵遗迹传送门

**激活条件**：使用 `启程钥匙` 右键点击 `wb:block_senior_equipment`

### 结构布局

```

[
[
"XSSSX",
"SWWWS",
"SWYWS",
"SWWWS",
"XSSSX"
],
[
"XAAAX",
"AAAAA",
"AAAAA",
"AAAAA",
"XAAAX"
]
]

```

### 方块映射

| 符号 | 原始方块                  | 激活后替换         |
| ---- | ------------------------- | ------------------ |
| X    | wb:block_magic_equipment  | 保持原样           |
| W    | Water                     | wb:portal_mindboss |
| Y    | wb:block_senior_equipment | wb:portal_mindboss |
| S    | wb:block_magic_barrier    | 保持原样           |
| A    | Air                       | 保持原样           |

---

## 7. 守卫遗迹

**激活条件**：使用 `启程钥匙` 右键点击 `wb:block_senior_equipment`

### 结构布局

```

[
[
"XXXXX",
"XWWWX",
"XWYWX",
"XWWWX",
"XXXXX"
],
[
"XSASX",
"SAAAS",
"AAAAA",
"SAAAS",
"XSASX"
],
[
"CAAAC",
"AAAAA",
"AAAAA",
"AAAAA",
"CAAAC"
]
]

```

### 方块映射

| 符号 | 原始方块                   | 激活后替换          |
| ---- | -------------------------- | ------------------- |
| X    | Sandstone                  | 保持原样            |
| W    | Water                      | wb:portal_guardboss |
| Y    | wb:blocke_senior_equipment | wb:portal_guardboss |
| A    | Air                        | 保持原样            |
| S    | SandstoneSlab              | 保持原样            |
| C    | SandstoneWall              | 保持原样            |

### 传送机制

传送会在目标区域生成结构。由于只会在第一次生成结构，所以当出现损坏的时候，需要人为修复，也就是用菜单-管理-重置遗迹选项。
