<div align="center">

# 🐍 PyScreeps-Arena

**用 Python 玩转 Screeps: Arena。**

[![Python](https://img.shields.io/badge/python-==3.12-blue.svg)](https://www.python.org/downloads/)
[![Pyscreeps-Arena](https://img.shields.io/pypi/v/pyscreeps-arena.svg?label=Pyscreeps-Arena)](https://pypi.org/project/pyscreeps-arena/)

**V0.7：支持第四赛季（Season 4）** · [更新详情](updates_cn.md)

[English](README.md) | 中文

</div>

---

## 📖 项目简介

本项目面向想用 Python 游玩 [Screeps: Arena](https://store.steampowered.com/app/1137320/Screeps_Arena/) 的玩家。项目提供了一个"标准库"（`std.py`），作为 JS 与 Python 之间的粘合层。玩家在 `main.py` 循环中编写自己的逻辑代码，然后运行 `build.py` 生成最终的 `main.mjs`。

> [!IMPORTANT]
> **Screeps: Arena** 与 **Screeps: World** 的代码**不通用**。
> 如果你想游玩 Screeps: World，推荐尝试 GitHub 项目 [screeps-starter-python](https://github.com/daboross/screeps-starter-python)。

---

## 🚀 快速上手

### 环境要求

本项目需要 **Python == 3.12**（受 `transcrypt` 限制），请确保已从 [python.org](https://www.python.org/downloads/) 下载并安装。

### 安装

```bash
pip install pyscreeps-arena
```

### 常用命令

| 命令 | 说明 |
| --- | --- |
| `psanew "项目路径"` | 创建一个新的游戏项目 |
| `psaui` | 创建一个新的游戏项目（图形界面） |
| `psamcp` | 启动MCP服务器(实验性)，提供文档信息和简易仿真能力 |

然后用你喜欢的编辑器打开项目即可（*推荐 PyCharm*）。


---

## ⚠️ Transcrypt：Python 与 JS 的差异

由于代码由 `transcrypt` 编译，部分 Python 语义在 JS 运行时中表现不同：

| 在 Python 中 | 在 JS（Transcrypt）中 |
| --- | --- |
| `if []:` 为 `False` | 结果为 `true` |
| `_list[-1]` 可用 | 不可用 |
| `dict.get()` | 需改用 `dict.py_get()` |
| `container.clear()` | 需改用 `container.py_clear()` |
| 运算符重载，如 `[1] * 5` | 不可用 |
| 关键字参数，如 `func(1, b=5)` | 不可用 |

---

## 🎓 教程

| # | 内容 | # | 内容 |
| --- | --- | --- | --- |
| [1](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/1.md) | 控制台输出 | [7](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/7.md) | 创建新 Creep |
| [2](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/2.md) | 对象获取与移动 | [7+](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/7%2B.md) | 创建新 Creep（面向对象） |
| [3](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/3.md) | 攻击敌人 | [8](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/8.md) | 采集能量 |
| [4](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/4.md) | Creep 的构成 | [8+](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/8%2B.md) | 采集能量（面向对象） |
| [5](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/5.md) | 资源存取 | [9](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/9.md) | 修建建筑 |
| [6](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/6.md) | 地形影响 | [10](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/10.md) / [10+](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/10%2B.md) | 最终测试 / 最终测试（面向对象） |

---

## 📚 其他文档

* [行为树](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/%E8%A1%8C%E4%B8%BA%E6%A0%91.md) —— 组合节点、行为结果与 `@behavior` 装饰器
* [绘图](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/%E7%BB%98%E5%9B%BE.md) —— 使用 `View` 进行调试可视化：文本、线条、图形、路径与血条
* [事件系统](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/%E4%BA%8B%E4%BB%B6%E7%B3%BB%E7%BB%9F.md) —— 发布-订阅事件、监听与 `@listen` 装饰器
* [Field 类（地图场）](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial%20-%20cn/%E5%9C%B0%E5%9B%BE%E5%9C%BA.md) —— 二维网格场：距离场/方向场转换、形态学与滤波

---

## 🗺️ 竞技场地图

[maps](maps/) 目录收录了从游戏中提取的原始竞技场地图数据（项目路径：/docs/maps）。每个 JSON 都是某竞技场在第 1 tick 的完整快照：100×100 地形网格（`X` 墙体、`A` 沼泽、`2`/`1` 平地），以及全部预置对象——含部件配方的 Creep、旗帜、建筑、能量源，以及沼泽比例等元数据。

**制作地图 JSON**

1. 在项目 `src/main.py` 中，于第 1 tick 打印地图：
   ```python
   def init(k):
       mc = MapCollector()
       print(mc.collect())
   ```
2. 运行 `python build.py`（先在 `build.py` 中设置目标竞技场/颜色）。
3. 在游戏客户端中用任意对手打一场测试对局（静态沙袋对手即可）。
4. 在第 1 tick 的控制台输出中找到以 `{"map"` 开头的那一行，保存为 `s<赛季>-<颜色>[-ex].json`。

---

<div align="center">

**祝游戏愉快！** 🎮

</div>
