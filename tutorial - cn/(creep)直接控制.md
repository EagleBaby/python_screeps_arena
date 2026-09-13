## (Creep) 直接控制
- [(Creep) 直接控制](#creep-直接控制)
  - [直接控制概述](#直接控制概述)
  - [快速开始](#快速开始)
  - [获取Creep](#获取creep)
  - [常用属性](#常用属性)
  - [移动指令](#移动指令)
    - [移动到指定位置：move](#移动到指定位置move)
    - [远离目标：escape](#远离目标escape)
    - [挂载：attach  (实验性，不可靠)](#挂载attach--实验性不可靠)
  - [动作指令](#动作指令)
    - [攻击：attack](#攻击attack)
    - [治疗：heal](#治疗heal)
    - [采集：harvest](#采集harvest)
    - [建造：build](#建造build)
    - [取资源：fetch](#取资源fetch)
    - [存资源：deposit](#存资源deposit)
    - [搬运：carry](#搬运carry)
  - [编队与协同](#编队与协同)
    - [跟随：follow](#跟随follow)
    - [巡逻：patrol](#巡逻patrol)
    - [拉动与推动：pull / push](#拉动与推动pull--push)
  - [自动化指令](#自动化指令)
  - [选择移动选项](#选择移动选项)
  - [操作记录](#操作记录)
  - [方法速查](#方法速查)
  - [最终代码](#最终代码)

### 直接控制概述

本节本质上是对教程中的内容的归纳和总结。偏查阅性质地如何直接对 `Creep` 实例下指令：拿到一只爬虫，让它移动、攻击、采集、搬运。

爬虫的控制方式有两种：一种是**直接控制**——你自己在 `step` 里对爬虫实例调用方法；另一种是**托管**——把爬虫交给 `CreepLogic`，由它每 tick 自动调用你的逻辑。本节只讲第一种，托管用法见 [7+.md](../tutorial/7+.md)。

直接控制适合这几类场景：

- 预置单位的对局（如蓝场，开局就有兵，不需要孵化）
- 编写简单的脚本和调试代码
- 想要完全掌握每 tick 的决策顺序

它有两个明显优点：**不需要定义类**，也不需要考虑生命周期；代价是爬虫多了以后代码会变得冗长。

**注意**：同一 tick 内对同一只爬虫的同一类动作重复下指令时，只有最后一次生效。所以不要对同一只爬虫既直接控制、又交给 `CreepLogic` 托管，否则两边会互相覆盖。

### 快速开始

```python
from builtin import *

CREEP = get.creep(st.friend)      # 取一只己方爬虫
TARGET = get.creep(st.enemy)      # 取一只敌方爬虫

def step(k: GlobalKnowledge):
    if TARGET:
        CREEP.attack(TARGET)      # 自动走近，再自动攻击
```

**注意**：`get.creep(...)` 只返回一只，`get.creeps(...)` 返回列表。取不到对象时返回 `None`，判断后再使用。

### 获取Creep

| 方法 | 说明 |
|------|------|
| `get.creep(filter)` | 获取一只满足条件的 Creep，没有则 `None` |
| `get.creeps(filter)` | 获取所有满足条件的 Creep 列表 |
| `k.friends` / `k.enemies` | 当前对局的全部友军 / 敌军列表 |
| `get.byid(id)` | 按 id 获取对象 |

筛选参数可以直接传类型判断函数，常用的有：

| 判断函数 | 说明 |
|---------|------|
| `st.friend` / `st.enemy` | 友方 / 敌方 |
| `st.my` | 己方（含建筑） |
| `st.atkable` / `st.ranged` | 有近战能力 / 有远程能力 |
| `st.workable` | 有 WORK 部件 |
| `st.storable` | 有 CARRY 部件 |
| `st.healable` | 有治疗能力 |

**示例**：按能力区分兵种，把判断函数直接当筛选条件用

```python
SOLDIERS = get.creeps(st.atkable)      # 所有能打近战的单位
WORKERS = get.creeps(st.workable)      # 所有有 WORK 部件的单位
HEALERS = get.creeps(st.healable)      # 所有有治疗能力的单位
```

**注意**：类型判定请一律使用 `st.*` 判断函数，不要用 `isinstance`。爬虫对象是运行库的包装类，`isinstance` 的判断结果并不可靠。

### 常用属性

| 属性 | 说明 |
|------|------|
| `x` / `y` | 当前坐标，可直接当作 `Point` 参与位置运算 |
| `name` / `id` | 名称 / 唯一标识 |
| `exists` | 对象是否仍然存在（爬虫死亡后为 `False`） |
| `my` | 是否属于己方 |
| `hp` / `hpMax` / `hpPer` | 当前生命值 / 最大生命值 / 生命值百分比 |
| `energy` / `energyMax` / `energyPer` | 携带能量 / 携带上限 / 能量百分比 |
| `store` | 存储对象，可查询各类资源的数量与剩余空间 |
| `fatigue` | 疲劳值，大于 0 时无法移动 |
| `recipe` | 身体部件列表，如 `['move', 'attack']` |
| `grade` | 配方评分，越高越强 |
| `partsVector` | 部件统计，如 `partsVector.works` 是 WORK 部件数 |
| `info` | 战斗与工作能力汇总，如 `info.melee`、`info.attackPower`、`info.motionAbility` |
| `motion` | 移动追踪，如 `motion.goal` 当前移动目标、`motion.moved` 本 tick 是否移动过 |
| `logic` | 绑定的 `CreepLogic` 实例，未被托管时为 `None` |
| `actions` | 本 tick 的操作记录，见[操作记录](#操作记录) |

**示例**：血量低于一半就后撤

```python
if CREEP.hpPer < 0.5:
    CREEP.escape(ENEMY)
```

### 移动指令

#### 移动到指定位置：move

**签名**：`move(to, options = None)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `to` | `Point` \| `int` | 否 | - | 目标位置，也可以是方向常量（1-8） |
| `options` | `MotionOptions` | 是 | `None` | 移动选项，见[选择移动选项](#选择移动选项) |

会沿地图成本自动寻路（绕开墙与障碍），路线上有传送门时也会自动穿过去。距离 1 格时直接走一步；已经在目标点则不做任何事。

**示例**：移动到旗帜

```python
FLAG = get.flag()          # 取一面旗帜
CREEP.move(FLAG)
```

#### 远离目标：escape

**签名**：`escape(target, options = None, rampart = False)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Point` | 否 | - | 要远离的目标 |
| `options` | `MotionOptions` | 是 | `None` | 移动选项 |
| `rampart` | `bool` | 是 | `False` | 是否允许躲到己方 rampart 上 |

朝背离目标的方向移动最多两格，并会检查走完后是否确实离得更远，不理想就退一步重选。与目标同格时会随机方向走开；目标在 3 格以内时，会参考周围敌人的重心来决定往哪边逃。

**示例**：被贴上时拉开距离

```python
if CREEP.distance(ENEMY) <= 1:
    CREEP.escape(ENEMY)
```

#### 挂载：attach  (实验性，不可靠)

**签名**：`attach(target, direct, options = None)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Point` | 否 | - | 挂载目标 |
| `direct` | `int` | 否 | - | 挂载方向（1-8） |

移动到目标的指定方向并保持挂靠，适合编队、护卫装甲单位等场景。方向常量见 `const.py`（`TOP`=1、`RIGHT`=3、`BOTTOM_LEFT`=6 等）。

**示例**：站到护卫单位的正上方

```python
CREEP.attach(GUARD, TOP)
```

### 动作指令

动作指令的共同特点是**自带移动**：目标不在作用范围内时，会先自动走近，再执行动作。因此大多数情况下不需要先 `move` 再 `attack`，一条指令就够了。

#### 攻击：attack

**签名**：`attack(target, move = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Creep` \| `Structure` | 否 | - | 攻击目标 |
| `move` | `bool` \| `MotionOptions` | 是 | `True` | 是否允许自动移动；也可以直接传移动选项 |

会自动处理近战与远程的选择：

- 距离 1 格：有 ATTACK 就打近战，有 RANGED_ATTACK 就对周围所有敌人开火
- 距离 2~3 格：用远程攻击
- 更远：自动走近

此外还会根据双方战力对比自动调整站位：对打不过的目标会边打边拉开，对能压制的目标会贴身。传 `move = False` 可以关掉这些自动移动，只让它在当下位置开火。

**示例**：攻击最近的敌人

```python
ENEMY = CREEP.closest(k.enemies)
if ENEMY:
    CREEP.attack(ENEMY)
```

#### 治疗：heal

**签名**：`heal(target, move = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Creep` | 否 | - | 治疗目标 |
| `move` | `bool` \| `MotionOptions` | 是 | `True` | 是否允许自动移动 |

距离 1 格内为贴身治疗，2~3 格自动切换为远程治疗，更远则自动靠近。

**示例**：治疗血量最低的队友

```python
HURT = CREEP.closest(k.friends, lambda c: c.hpPer < 1)
if HURT:
    CREEP.heal(HURT)
```

#### 采集：harvest

**签名**：`harvest(target, move = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Source` | 否 | - | 资源点，用 `get.source()` 获取 |
| `move` | `bool` \| `MotionOptions` | 是 | `True` | 是否允许自动移动 |

站到资源点旁边持续采集，每个 WORK 部件每 tick 采 2 点能量，采集到的能量会直接进入爬虫的存储。

**示例**：采集最近的一个资源点

```python
CREEP.harvest(CREEP.closest(get.sources()))
```

#### 建造：build

**签名**：`build(site, move = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `site` | `ConstructionSite` | 否 | - | 工地，用 `get.site()` 获取 |
| `move` | `bool` \| `MotionOptions` | 是 | `True` | 是否允许自动移动 |

每个 WORK 部件每 tick 消耗 5 点携带能量推进建造进度，能量不足会返回 `ERR_NOT_ENOUGH_RESOURCES`。

**示例**：建造最近的工地

```python
SITE = CREEP.closest(get.sites(st.my))
if SITE:
    CREEP.build(SITE)
```

#### 取资源：fetch

**签名**：`fetch(target, resource_type = None, amount = None, move = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Creep` \| `Structure` \| `Resource` | 否 | - | 取资源的对象 |
| `resource_type` | `str` | 是 | `None` | 资源类型，不填自动推断（一般为能量） |
| `amount` | `int` | 是 | `None` | 取多少，不填表示能取多少取多少 |
| `move` | `bool` \| `MotionOptions` | 是 | `True` | 是否允许自动移动 |

根据目标类型自动选择动作：地上的掉落物用 `pickup`，建筑用 `withdraw`，友方爬虫用 `transfer`。目标不支持存储时会打印警告并忽略本次操作。

**示例**：捡起地上的能量

```python
CREEP.fetch(get.resource())
```

#### 存资源：deposit

**签名**：`deposit(target = None, resource_type = None, amount = None, move = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Creep` \| `Structure` \| `Point` \| `None` | 是 | `None` | 存入的目标；不填表示丢在原地，传 `Point` 表示丢到指定位置 |
| `resource_type` | `str` | 是 | `None` | 资源类型，不填自动推断 |
| `amount` | `int` | 是 | `None` | 存多少，不填表示全部存入 |
| `move` | `bool` \| `MotionOptions` | 是 | `True` | 是否允许自动移动 |

存入建筑或友方爬虫用 `transfer`，扔到地上用 `drop`。目标装不下时返回 `ERR_FULL`。

**示例**：把能量交给出生点

```python
CREEP.deposit(SPAWN)
```

#### 搬运：carry

**签名**：`carry(src, dst, resource_type = None, options = None, intermit = True)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `src` | `Creep` \| `Structure` \| `Resource` \| `None` | 否 | - | 从哪里取；`None` 表示用自己身上已有的资源 |
| `dst` | `Creep` \| `Structure` \| `Point` | 否 | - | 送到哪里 |
| `resource_type` | `str` | 是 | `None` | 资源类型，不填自动推断 |
| `options` | `MotionOptions` | 是 | `None` | 移动选项 |
| `intermit` | `bool` | 是 | `True` | 是否持续搬运：`True` 时空手去取、取满就送，反复循环；`False` 时只跑一趟 |

`carry` 是 `fetch` + `deposit` 的复合指令，写一条就能让运输单位持续干活，省去自己维护"现在是去取还是去送"的状态。一趟送完并已经安排好下一趟时返回 `DONE`（值为 `1`）。

搬运时会考虑负重：移动部件不足或前路是沼泽时，会先把资源丢在地上轻装前进，之后再回头捡起，所以中途看到地上有资源是正常现象。

**示例**：让运输单位从箱子搬到塔，长期循环

```python
CREEP.carry(BOX, TOWER)
```

### 编队与协同

#### 跟随：follow

**签名**：`follow(target, distance, options = None)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Point` | 否 | - | 跟随目标，可以是爬虫，也可以是旗帜、坐标 |
| `distance` | `int` \| `tuple` | 否 | - | 想保持的距离 |
| `options` | `MotionOptions` | 是 | `None` | 移动选项 |

`distance` 传 `(stop_dist, ignore_dist)` 形式的元组时（仅对友方目标生效）：

- 距离超过 `stop_dist`：自己向目标靠拢，直到刚好保持 `stop_dist`
- 距离在 `stop_dist` 与 `ignore_dist` 之间：反过来让目标向自己靠拢，两人互相收拢
- 距离超过 `ignore_dist`：目标不再管你，自己追上去

对敌方目标则是保持距离：太近就后撤到 `stop_dist`，太远就靠近。

**示例**：跟着旗子走，保持 3 格

```python
CREEP.follow(FLAG, 3)
```

#### 巡逻：patrol

**签名**：`patrol(points, options = None)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `points` | `list[Point]` | 否 | - | 巡逻点列表，按顺序循环 |
| `options` | `MotionOptions` | 是 | `None` | 移动选项 |

第一次调用时会从离自己最近的一个巡逻点开始，之后按列表顺序依次前往；距离当前巡逻点 2 格以内就切换去下一个点，走到末尾自动回到开头。

**示例**：在三个点之间巡逻

```python
CREEP.patrol([Point(10, 10), Point(20, 30), Point(40, 15)])
```

#### 拉动与推动：pull / push

**签名**：`pull(target, options = None)` / `push(target, options = None)`

| 参数名 | 类型 | 可选 | 默认值 | 描述 |
|-------|------|------|--------|------|
| `target` | `Creep` | 否 | - | 友方爬虫 |
| `options` | `MotionOptions` | 是 | `None` | 移动选项 |

需要贴身（1 格内）才生效，距离大于 1 时会先自动走到对方旁边。

- `pull`：把目标拉到身边，**自己去哪由自己决定**，适合队列行军——车头走，后面跟
- `push`：把目标推着走，**自己去哪由对方决定**，要求目标有 MOVE 部件，适合掩护、把队友推进传送门

**示例**：蛇形队伍，前车拉后车

```python
CREEP.pull(FOLLOWER)
```

### 自动化指令

以下指令把常见的整段决策打包好，一条调用就能让爬虫自己打完一场战斗或干完一轮活，适合快速搭建原型。

| 方法 | 说明 |
|------|------|
| `autoAttack(view_range = 50, wall = True)` | 自动搜索范围内敌人并攻击；返回 `(锁定目标, 攻击目标)` 元组，没有敌人则返回 `(None, None)` |
| `autoHeal(view_range = 50, lock_healer = True)` | 自动搜索并治疗受伤友军；返回 `(锁定目标, 治疗目标)` 元组 |
| `autoCombat(wall = True)` | 同时执行 `autoAttack` 与 `autoHeal`，即"能打就打、能治就治" |
| `autoWork(structure_from = None)` | 自动干活：自动完成捡能量、采集、建造、补能的一条龙 |

`wall = True` 表示可以把墙当作攻击目标（拆墙），`lock_healer = True` 表示优先锁定对方的治疗单位，`structure_from = None` 表示不去特定的建筑取能量。

`autoWork` 的干活顺序大致是：缺能量时先去捡地上的能量或从附近建筑取 → 身边有己方工地就建造、给未满的扩展补能 → 否则采集最近的资源点 → 身上还有能量时依次补给未满的塔、扩展、出生点；找不到任何能做的事时返回 `ERR_NOT_ENOUGH_ENERGY`。

**示例**：让一只战斗单位全自动作战

```python
def step(k: GlobalKnowledge):
    for c in k.friends:
        if st.atkable(c):
            c.autoCombat()
        else:
            c.autoWork()
```

**注意**：自动化指令内部也是普通指令，仍然遵守"同一 tick 内最后一次生效"的规则。用了 `autoCombat()` 就不要再对它调用 `attack()`，否则以你先调用的为准。

### 选择移动选项

移动类指令的最后一个参数都是移动选项。常用的是两个预设，直接用即可：

| 预设 | 说明 |
|------|------|
| `DEFAULT_MOTION` | 默认选项，按地形成本寻路（沼泽更贵） |
| `SWAMP_MOTION` | 忽略沼泽地形，把沼泽当平地走 |

**示例**：让它无视沼泽抄近路

```python
CREEP.move(TARGET, SWAMP_MOTION)
```

需要微调时，用 `clone()` 复制一份再改，避免影响全局预设：

| 可调项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `flee` | `bool` | `False` | 是否寻找远离目标的路径(不可靠) |
| `maxOps` | `int` | `50000` | 寻路允许的最大运算次数 |
| `maxCost` | `number` | 无穷大 | 路径的最大允许成本 |
| `heuristicWeight` | `number` | `1.2` | 启发式权重，调大更快但路径可能不是最优 |

```python
MY_MOTION = DEFAULT_MOTION.clone()
MY_MOTION.heuristicWeight = 1.5    # 算得快一点
```

**注意**：`plainCost` 与 `swampCost` 已被禁用（寻路使用的是动态成本矩阵）；想让沼泽变便宜请直接使用 `SWAMP_MOTION`。

### 操作记录

爬虫会把本 tick 下过的指令记录下来，方便排查问题：

```python
CREEP.attack(ENEMY)
print(CREEP.actions.attack)     # 本 tick 攻击了谁
print(CREEP.actions.move)       # 本 tick 想移动到哪
```

可查询的字段：`move`、`attack`、`heal`、`harvest`、`build`、`fetch`、`deposit`，以及记录实际开火方式的 `melee`、`ranged`。

配合返回值一起看更清楚。所有指令都返回错误码，`OK`（0）表示已成功安排，其余为失败原因：

| 错误码 | 值 | 含义 |
|--------|-----|------|
| `OK` | 0 | 操作已成功安排 |
| `DONE` | 1 | 一轮操作已完成（如搬运） |
| `ERR_NOT_OWNER` | -1 | 不是你的爬虫 |
| `ERR_NOT_ENOUGH_RESOURCES` | -6 | 资源或能量不足 |
| `ERR_INVALID_TARGET` | -7 | 目标类型不对，或无法攻击/治疗/存储 |
| `ERR_FULL` | -8 | 目标装不下 |
| `ERR_NOT_IN_RANGE` | -9 | 目标太远 |
| `ERR_INVALID_ARGS` | -10 | 参数不合法 |
| `ERR_TIRED` | -11 | 疲劳值不为零，本 tick 无法移动 |
| `ERR_NO_BODYPART` | -12 | 缺少执行该动作所需的部件 |

**示例**：根据返回值决定后续动作

```python
if CREEP.harvest(SOURCE) == ERR_NOT_ENOUGH_RESOURCES:
    CREEP.move(NEXT_SOURCE)    # 这个资源点采空了，换个地方
```

### 方法速查

| 类别 | 方法 | 功能 |
|------|------|------|
| **移动** | `move(to, options?)` | 移动到指定位置或方向 |
| | `escape(target, options?, rampart?)` | 远离目标 |
| | `attach(target, direct, options?)` | 挂载到目标的指定方向 |
| **动作** | `attack(target, move?)` | 攻击（自动选近战/远程、自动走位） |
| | `heal(target, move?)` | 治疗（自动选贴身/远程） |
| | `harvest(target, move?)` | 采集资源点 |
| | `build(site, move?)` | 建造 |
| | `fetch(target, resource_type?, amount?, move?)` | 取资源（自动选 pickup/withdraw/transfer） |
| | `deposit(target?, resource_type?, amount?, move?)` | 存资源（不填目标则丢在原地） |
| | `carry(src, dst, resource_type?, options?, intermit?)` | 持续搬运 |
| **协同** | `follow(target, distance, options?)` | 跟随 / 保持距离 |
| | `patrol(points, options?)` | 循环巡逻 |
| | `pull(target, options?)` | 拉动友军（自己决定方向） |
| | `push(target, options?)` | 推动友军（对方决定方向） |
| **自动化** | `autoAttack(view_range?, wall?)` | 自动索敌并攻击 |
| | `autoHeal(view_range?, lock_healer?)` | 自动治疗友军 |
| | `autoCombat(wall?)` | 自动战斗（攻击 + 治疗） |
| | `autoWork(structure_from?)` | 自动采集、补能、建造 |
| **辅助** | `test(target, *bias)` | 判断面对目标是该远离还是该前往：`True` 表示远离、`False` 表示前往、`None` 表示不确定 |
| | `closest(objs, filter_fn?)` | 取最近的对象 |
| | `nearest(objs, range, filter_fn?)` | 取范围内最近的对象 |
| | `inrange(objs, range, filter_fn?)` | 取范围内的所有对象 |

### 最终代码

以下示例把整局交给直接控制：每 tick 按能力区分兵种，战斗单位打最近的敌人、无敌情时回集结点待命，工作单位自动采集与补能。

```python
from builtin import *

RALLY = Point(20, 20)                # 集结点坐标，按你的地图修改

def init(k: GlobalKnowledge):
    """开局：报告兵力构成"""
    friends = get.creeps(st.friend)
    soldiers = len([c for c in friends if st.atkable(c)])
    print(f"soldiers={soldiers}, others={len(friends) - soldiers}")

def step(k: GlobalKnowledge):
    for c in k.friends:
        if st.atkable(c):
            # 战斗单位：有敌人就攻击最近的，否则回集结点待命
            enemy = c.closest(k.enemies)
            if enemy:
                c.attack(enemy)
            else:
                c.follow(RALLY, 3)
        elif st.workable(c):
            # 工作单位：自动捡能量、补能、建造、采集
            c.autoWork()
```

想自己掌控取送节奏时，把 `autoWork()` 换成 `carry(src, dst)` 即可，例如 `src` 取 `c.closest(get.sources())`，`dst` 填你要补能的建筑。

**注意**：集结点坐标要按实际地图改；爬虫的信息汇总与移动追踪见 [参考.md](../参考.md)，把移动过程画出来见 [绘图.md](./绘图.md)，交给 `CreepLogic` 托管见 [7+.md](../tutorial/7+.md)。
