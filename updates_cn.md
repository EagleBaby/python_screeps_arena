# PyScreeps-Arena 更新日志

[English](updates.md) | 中文

> 一款面向 Screeps: Arena 玩家的 Python 开发工具包。`std.py` 作为 JS 与 Python 之间的胶水层，玩家在 `main.py` 中编写逻辑代码，运行 `build.py` 即可生成用于提交游戏的 `main.mjs`。
>
> **重要说明**：Screeps: Arena 的代码与 Screeps: World 不兼容。

---

## 📖 版本命名规则

- `x.y.z`：正式发布版本
- `x.ya/z`：Alpha/Beta 预发布版本
- 早期 `0.1.x` 系列采用连续迭代方式，未严格区分功能更新与修复

---

## [0.7.x] - 2026-Q3 | 第 4 季度

### 0.7.1.x

- ✨ **功能**：集群分析升级 — `ClusterResult` 新增 `sse`、`density`、`entropy` 指标（按 tick 缓存）；`grade` 改为累加 `dynamicGrade`，可反映旗帜加成
- ✨ **功能**：新增 `std.front(a, b)` — 返回两集群控制范围之间的锋面线段 `(Point, Point)`，不重叠时返回 `None`
- ✨ **功能**：集群绘制支持多行文本；`know.draws.cluster_sse / cluster_density / cluster_entropy` 开关控制对应数值的显示
- 🐛 **修复**：所有 `Logic` 实例均注册进 `__names__`，`TeamLogic` 等按名 `ref` 不再恒返回 None；`transform()` 现在会将旧逻辑移出其编队
- 📝 **文档**：「调度器」教程替换为「(creep)直接控制」与「绘图」教程
- 🐛 **修复**：修复其他问题。

### 0.7.0

- 🚀 **重大更新**：适配 Screeps: Arena 第 4 赛季（绿 `spawn_and_swamp`、蓝 `pain_and_gain`、红 `escort_run`）
- ✨ **功能**：新增 `seasons` 模块 — 各赛季竞技场字段注册表；`build.py` 新增 `season` 选项，`target` 留空时编译器根据赛季+颜色推断默认 `main.mjs` 导出路径
- ✨ **功能**：编译器为本色特殊类/常量生成真实导入，并为其他颜色的历史特殊类型自动填充空白占位类（跨色重名产生警告）
- ✨ **功能**：新增第 4 赛季 `ScoreFlag` 原型（蓝 `pain_and_gain`），附 `TICKS_LIMIT`、`MAX_SCORE_PER_TICK`、`FLAG_TYPES` 常量
- ✨ **功能**：自动追踪旗帜副作用 — `creep.info` 的战斗与移动数值（`attackPower`、`meleePower`、`rangedPower`、`healPower`、`grade`、`effect`、`meleeRatio`、`rangedRatio`、`attackRatio`、`motionAbility` 及 `dynamic*` 变体）现在反映双方所持旗帜
- ✨ **功能**：新增 `VirtualBlocker(x, y)` / `VirtualBlocker(point)` — 将格子标记为阻挡，爬虫会自动绕行；调用 `blocker.remove()` 解除阻挡
- ✨ **功能**：本地仿真器内置第 4 赛季全部地图（3 色 × 基础/高级，高级后缀 `-ex`）。此为实验性功能，存在较多 bug。
- 📝 **文档**：新增第 4 赛季说明（`season4.md`）；更新文档
- 🐛 **修复**：修复其他问题。

---

## [>=0.6.2] - 2026-Q2 | 第 3 季度

### 0.6.5.x

- ✨ **功能**：预制件 `SnakeTeamType` 现支持可变长度（≥2 名成员）。
- ✨ **功能**：`build` 时新增自动更新检查，每天至多触发一次。
- 🐛 **修复**：修复多 spawn 场景下调度器行为异常。
- 🐛 **修复**：修复 `autoAttack` 贴近墙体（Walls）时远程攻击行为错误。
- 🐛 **修复**：修复其他问题。

### 0.6.4.x

- 🐛 **修复**：修复其他问题。

### 0.6.3.x

- ✨ **功能**：新增预制件类型 'WorkerType'
- 🐛 **修复**：修复其他问题。

### 0.6.2.x

- 🐛 **修复**：修复其他问题。

---

## [0.6.x] - 2026-Q1 | 第 2 季度

### 0.6.1

- 🐛 **修复**：修复其他问题。

### 0.6.0.x

- 🚀 **重大更新**：适配 Screeps: Arena 第 2 赛季
- ✨ **功能**：`Tower` 新增 `autoAttack`、`autoHeal`、`autoAction`
- ✨ **功能**：移除 `datetime` 模块。`Compiler` 不再向最终 main.mjs 写入时间戳。
- 📝 **文档**：更新文档

---

## [0.5.x] - 2025-Q4 | Arena 1.0 适配

### 0.5.9.x

- 🐛 **修复**：修复底层代码库的逻辑缺陷
- ✨ **功能**：引擎架构由 `state machine`（状态机）升级为 `behavior machine`（行为机）
- ✨ **功能**：`datetime` 模块集成进核心架构
- ✨ **功能**：新增 `psaui` 图形化项目配置界面
- 📝 **文档**：更新文档

### 0.5.8.x

- ✨ **功能**：文档新增预制件类型说明，用于新竞技场快速开发
- ✨ **功能**：<实验性> 内嵌轻量 mini-numpy 模块
- 🐛 **修复**：修复若干其他问题。

### 0.5.7.x

- ✨ **功能**：新增 `Field` 类作为二维数据场容器，支持成本矩阵、距离场、方向场，以及转换、可视化和形态学操作
- ✨ **功能**：新增实验性 creeplogic 初始化命令 `psaui -c`（中文）/ `psaui -e`（英文）
- ✨ **功能**：配方（Recipes）现支持简化 `<类型><数量>...` 格式（如 `M1`、`R8A2M24T1`）
- ✨ **功能**：新增 `creep.autoCombat()` 方法，自动战斗（不能自动移动，返回 `None`）
- ✨ **功能**：新增 `creep.attach()` 方法，主动附着到 `Point` 及其子类对象
- ✨ **功能**：新增 `info.dynamicFc` / `dynamicEc` 属性，获取动态敌我战力
- ✨ **功能**：新增 `creep.test` 方法，判断应接近、远离还是保持与目标的距离
- ✨ **功能**：新增 `creep.info.(dynamic)meleeRatio` 属性，衡量爬虫近战强度
- ✨ **功能**：新增 `get.collapse` 方法，优化环形路径点使其更贴合地图
- ✨ **功能**：新增 `point.direction` 方法，获取两点间方向
- ✨ **功能**：新增 `point.offseT` 方法，极坐标偏移
- ✨ **功能**：新增 `View.color` 属性，获取下一个随机颜色
- ✨ **功能**：修改 `View.dashLine` 方法，默认虚线与间隔长度为 0.5
- ✨ **功能**：新增 `point.near(target, distance=1)` 方法，判断是否邻近目标
- ✨ **功能**：新增 `Cache` 类，在一段时间内缓存数据；支持独立模式与同名共享模式
- 🐛 **修复**：修复 `creep.motion` 的性能问题
- 🐛 **修复**：移除 `closest`、`quickest`、`inrange`、`nearest` 方法的空结果警告
- 🐛 **修复**：修复同一位置存在多个 Site 与 Structure 导致的规划和寻路问题
- 🐛 **修复**：修复 `creep.carry` 进入新地形时的逻辑缺陷
- ✨ **功能**：编译器现支持基础 match 语句
- 📝 **文档**：更新文档

### 0.5.6.x

- 🐛 **修复**：修复 `SitePlaner.next` 方法，补充 `True` 返回分支，以适配 1.0 之后玩法中 site 创建后需等待 1 tick 的机制。
- ✨ **功能**：新增 `get.history` 方法并精简 `get.situation` 方法；引入 `know.situ` 与 `know.hist` 属性；新增指向 `know` 对象的全局变量 `k`。
- ✨ **功能**：为可存储资源的类新增 `energyPer` 属性。
- ✨ **功能**：增强函数文档。
- ✨ **功能**：新增 `stype` 方法：`st.area`、`st.red`、`st.blue`、`st.green`。
- ✨ **功能**：新增 `AreaEffect.kind: str` 属性。
- 🐛 **修复**：修复特殊条件下 `Portal` 引发的致命逻辑错误。
- 🐛 **修复**：修复若干其他问题。

### 0.5.5.x

- ✨ **功能**：扩展 `GlobalKnowledge` 类，新增传送门状态管理属性（`pairs`、`portals`、`reveals`、`conceals`）及用于控制可视化的内嵌 `draws` 类。`draws` 提供布尔开关：`creep`（默认 False）、`portal`（默认 True）、`cluster`（默认 True）。
- ✨ **功能**：内核方法集成传送门感知。`Point.distance`、`Point.closest`、`Point.nearest` 与 `Creep.move` 现支持传送门检测（`Point.quickest` 待集成）。基于这些方法的功能自动随之生效。
- ✨ **功能**：`Portal` 类新增全局控制静态方法 `Disable()` 与 `Enable()`，用于在内部计算中临时开关传送门效果。两方法均返回上下文管理器，退出 `with` 语句时自动恢复先前状态。
- ✨ **功能**：新增 `case()` 函数，用于多条件状态切换。支持可选的基础时间偏移与默认回退状态；处理「条件-目标状态」对，可附带超时与专用超时状态，返回命中的状态字符串或 None。
- ✨ **功能**：`View` 类新增 `path()` 方法，智能路径可视化。自动以虚线绘制传送门连接，通过 HSV 旋转取互补色，并以错误标记标注未揭示的传送门。
- ✨ **功能**：`Point` 类新增 `nearest()` 方法，用于空间邻近查询。支持范围限制检测、可选 `filter_fn` 自定义过滤条件，以及排除自身的 `notme` 参数。
- 🐛 **修复**：修复特殊条件下 `Creep.carry` 的异常；移除参数 `intermit:bool=False`，改为自动动态启用；移除 `Creep.intermit` 函数。
- 🐛 **修复**：修复地图含初始道路时的寻路错误。

### 0.5.4.x

- ✨ **功能**：增强编译器：`from XXX import *` 现可从无 `__init__.py` 的目录导入全部模块（子目录忽略并给出警告）。含 `__init__.py` 的包行为不变
- 🐛 **修复**：修复特殊条件下 `recursive` 装饰器的逻辑错误
- 🐛 **修复**：修复 `get.parts` 缺失问题；为 `CreepInfo` 新增 `.parts: list[str]` 与 `.dynamicParts: list[str]` 属性
- ✨ **功能**：为 `Scheduler` 新增 `.disable()` 与 `.enable()` 实例方法，临时禁用/启用调度器
- ✨ **功能**：新项目 `src` 目录新增 `basic.py` 文件
- ✨ **功能**：`Creep` 新增 `.hpPer` 属性，获取爬虫血量百分比
- 📝 **文档**：修正 `math` 库部分函数注释的准确性

### 0.5.3.x

- ✨ **功能**：`GlobalKnowledge`（know, k）新增 `enemies: list[Creep]` 与 `friends: list[Creep]` 属性
- ✨ **功能**：`Portal.destination` 现支持在明确保证的前提下手动指向另一传送门
- 🐛 **修复**：收紧 `Creep.intermit` 向简单 `Point` 类型目标运送时的边界条件
- ⚡ **优化**：精简 `Creep.autoAttack` 逻辑 — 动态远程攻击力为 0 时跳过远程攻击
- 📝 **文档**：更新 `CreepLogic.PRIORITY` 的 docstring
- 📝 **文档**：更新 `get.chebRotate45x` 的 docstring
- 🆕 **新增**：`get.directionRotate(direction: int, count: int) -> int` — 方向旋转 count × 45°
- 🆕 **新增**：`get.length(obj: st.point, target: st.point) -> int` — 返回两点间路径长度
- 🆕 **新增**：`get.cost(pt: st.point, option: UsrObject = None) -> int` — 返回指定位置的通行成本

### 0.5.2.x

- 🐛 **修复**：`uid` 标注不准确问题
- 🐛 **修复**：`intermit` 向空地格运送时的逻辑错误
- ⚡ **优化**：增强 `TeamLogic` 组件功能

### 0.5.1.0

- ✨ **功能**：扩展对新游戏模式的 API 支持

### 0.5.0.0

- 🚀 **重大更新**：适配 Screeps: Arena 1.0 版本
- 🆕 **新增**：支持 3 种新游戏模式

---

## [0.4.x] - 2025-Q1 | 轻量 OS 开发库

### 0.4.1.x 维护版本

- **0.4.1.2**：修复调度器边界条件问题
- **0.4.1.1**：优化监视器内存占用
- **0.4.1**：稳定版发布，修复 CreepLogic 状态切换异常

### 0.4.0

- 🚀 **重大更新**：引入状态逻辑控制器系统
  - `Logic`：基础状态机框架
  - `CreepLogic`：单位行为状态管理
  - 内嵌调度器与监视器组件
- 🏗️ **架构演进**：从 HAL 库级别升级为轻量 OS 开发库

### 0.4 预发布系列（0.4a0 → 0.4b0）

- 0.4a8-b0：调度器性能优化与 API 冻结
- 0.4a5-a7：监视器组件重构
- 0.4a3-a4：CreepLogic 状态持久化实现
- 0.4a0-a2：Logic 框架原型设计与验证

---

## [0.3.x] - 2024-Q4 | 动态类型架构重构

### 0.3.6

- 🐛 **修复**：某些边界场景下的动态类型推断问题

### 0.3.5

- ✨ **功能**：扩展游戏对象类型封装（新增 5 种 structure）

### 0.3.2

- ⚡ **优化**：动态方法调用性能提升约 30%

### 0.3.0

- 🚀 **重大更新**：底层架构完全重构
- 🆕 **新增**：游戏类型全面动态封装，支持实例方法调用
- 🗑️ **移除**：废弃 `put` 静态调用模式（保留 `get` 静态函数）
- 📦 **迁移指南**：0.2.x 代码需重构为面向对象风格

### 0.3 早期预览（0.3a0 → 0.3a4）

- 0.3a4：动态原型链最终实现
- 0.3a2-a3：类型系统封装方案迭代
- 0.3a0-a1：新架构可行性验证

---

## [0.2.x] - 2024-Q2 | 静态工具库时代

### 0.2.2

- 🐛 **修复**：`get` 函数跨 tick 缓存异常

### 0.2.1

- ✨ **功能**：新增 8 个高频工具函数

### 0.2.0

- 🚀 **重大更新**：确立 `get`/`put` 静态调用范式
- ✨ **功能**：初步实现 Python → JS 核心转译逻辑
- 🏗️ **架构**：类似寄存器级开发体验

### 0.2a0

- 🔭 **预览**：静态工具库概念验证版本

---

## [0.1.x] - 2024-Q1 | 项目诞生

### 0.1.20 - 0.1.21

- ✨ **功能**：构建系统稳定化

### 0.1.10 - 0.1.11

- ✨ **功能**：完成基础转译器，支持简单逻辑代码生成

### 0.1.5 - 0.1.9

- ✨ **功能**：`std.py` 胶水层核心功能实现
- ✅ **测试**：验证与 Arena 基础 API 的通信能力

### 0.1.1 - 0.1.4

- 🌱 **初始化**：项目结构搭建
- 🧪 **实验性**：探索 Python 与 JS 互操作方案

### 0.1.0

- 🎉 **诞生**：PyScreeps-Arena 项目正式创建
- 🌟 **愿景**：让 Python 玩家也能享受 Screeps: Arena

