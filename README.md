<div align="center">

# 🐍 PyScreeps-Arena

**Play Screeps: Arena with Python.**

[![Python](https://img.shields.io/badge/python-==3.12-blue.svg)](https://www.python.org/downloads/)
[![Pyscreeps-Arena](https://img.shields.io/pypi/v/pyscreeps-arena.svg?label=Pyscreeps-Arena)](https://pypi.org/project/pyscreeps-arena/)


**V0.7: Support for Season 4** · [Update Details](updates.md)

English | [中文](README_CN.md)

</div>

---

## 📖 Introduction

This project is for players who want to play [Screeps: Arena](https://store.steampowered.com/app/1137320/Screeps_Arena/) with Python. It provides a *standard library* (`std.py`) that acts as a glue layer between JS and Python. You write your own logic in the `main.py` loop, then run `build.py` to generate the final `main.mjs`.

> [!IMPORTANT]
> The code for **Screeps: Arena** and **Screeps: World** is **not compatible**.
> If you want to play Screeps: World, check out the GitHub project [screeps-starter-python](https://github.com/daboross/screeps-starter-python) instead.

---

## 🚀 Quick Start

### Prerequisites

This project requires **Python == 3.12** (a limitation of `transcrypt`). Make sure you have downloaded and installed it from [python.org](https://www.python.org/downloads/).

### Installation

```bash
pip install pyscreeps-arena
```

### Commands

| Command | Description |
| --- | --- |
| `pyscreeps-arena "Your Project Path"` | Create a new game project |
| `psaui` | Create a new game project (GUI) |

Then open the project with your favorite editor *(PyCharm recommended)*.

---

## ⚠️ Transcrypt: Differences between Python and JS

Since the code is compiled by `transcrypt`, some Python semantics behave differently in the JS runtime:

| In Python | In JS (Transcrypt) |
| --- | --- |
| `if []:` is `False` | Evaluates to `true` |
| `_list[-1]` works | Does not work |
| `dict.get()` | Use `dict.py_get()` instead |
| `container.clear()` | Use `container.py_clear()` instead |
| Operator overload, e.g. `[1] * 5` | Does not work |
| Keyword arguments, e.g. `func(1, b=5)` | Does not work |

---

## 🎓 Tutorials

| # | Topic | # | Topic |
| --- | --- | --- | --- |
| [1](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/1.md) | Loop and import | [7](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/7.md) | Spawn creeps |
| [2](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/2.md) | Simple move | [7+](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/7%2B.md) | Spawn creeps (Object-Oriented) |
| [3](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/3.md) | First attack | [8](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/8.md) | Harvest energy |
| [4](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/4.md) | Creeps bodies | [8+](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/8%2B.md) | Harvest energy (Object-Oriented) |
| [5](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/5.md) | Store and transfer | [9](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/9.md) | Construction |
| [6](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/6.md) | Terrain | [10](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/10.md) / [10+](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/10%2B.md) | Final test / Final test (OOP) |

---

## 📚 Other Documentation

* [Behavior Tree](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/Behavior%20Tree.md) — Composite nodes, behavior results and the `@behavior` decorator
* [Drawing](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/Drawing.md) — Debug visualization with `View`: text, lines, shapes, paths and headers
* [Event System](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/Event%20System.md) — Publish-subscribe events, listeners and the `@listen` decorator
* [Field Class](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorial/Feild.md) — 2D grid fields: distance/direction transforms, morphology and filters

---

<div align="center">

**Good luck & have fun!** 🎮

</div>
