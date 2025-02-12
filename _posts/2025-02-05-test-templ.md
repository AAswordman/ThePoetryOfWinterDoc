---
title: 1.文档创建模板
description: 给开发者们看
author: AAswordsman
date: 2025-02-05 13:21:00 +0800
categories: [D调试]
tags: [开发]
math: true
mermaid: true
---

<style>
.item-image {
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  width: 78px;
  height: 78px;
  /* border: 1px solid grey;  */
}
.center {
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
.item-card {
    display: inline-block;
    outline: 1px solid #ffffff;
    width: 300px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 20px;
    max-width: 300px;
    flex: 1;
}

.card-wrapper {
    border: 1px solid #000;
    padding: 20px;
    text-align: center;
}

.item-title {
    font-weight: bold;
    font-size: 125%;
    margin-bottom: 15px;
}

.item-subtitle {
    color: #9d9d9d;
}

.item-description {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    outline: 1px solid #ffffff;
    padding: 15px;
    margin: 15px;
}

.stats-table {
    text-align: left;
    width: auto;
    display: inline-table;
    margin: auto;
    
}

.positive-stat {
    color:#26bf6b;
}

.nagetive-stat {
    color:#26bf6b;
}

.card-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<div class="card-wrap" id="item-container"></div> <!-- 容器 -->

<script>
const items = {
  "items": [
    {
      "title": "绝对零度",
      "subtitle": "Absolute Zero",
      "image": "/images/textures/items/absolute_zero.png",
      "description": "lly最喜欢的",
      "table":{
        "物品ID":"dec:absolute_zero",
        "物品类型":"近战武器-武士刀",
        "基础攻击力":"11",
        "最大耐久值":"1098",
        "特殊加成":"基础移动速度<span class=\"positive-stat\">基础移动速度+30%</span>"
      }
    },
    {
      "title": "绝对一度",
      "subtitle": "Absolute One",
      "image": "/images/textures/items/absolute_zero_old.png",
      "description": "lly最喜欢的",
      "table":{
        "物品ID":"dec:absolute_zero",
        "物品类型":"近战武器-武士刀",
        "基础攻击力":"-11",
        "最大耐久值":"1",
        "特殊加成":"基础移动速度<span class=\"nagetive-stat\">基础移动速度-30%</span>"
      }
    }
  ]
};
function generateItemCard(item) {
  return `
  <div class="item-card">
    <div class="card-wrapper">
      <div class="item-title">
        ${item.title} <span class="item-subtitle">(${item.subtitle})</span>
      </div>
      <img src="${item.image}" class="item-image">
      <div class="item-description">${item.description}</div>
      <table class="stats-table">
        ${Object.entries(item.table).map(([key, val]) => `
          <tr>
            <td>${key}</td>
            <td>${val}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  </div>
  `;
}

document.getElementById('item-container').innerHTML = 
  items.items.map(item => generateItemCard(item)).join('');
</script>
