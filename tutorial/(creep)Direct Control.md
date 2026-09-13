## (Creep) Direct Control
- [(Creep) Direct Control](#creep-direct-control)
  - [Direct Control Overview](#direct-control-overview)
  - [Quick Start](#quick-start)
  - [Getting Creeps](#getting-creeps)
  - [Common Properties](#common-properties)
  - [Movement Commands](#movement-commands)
    - [Move to a Position: move](#move-to-a-position-move)
    - [Escape from a Target: escape](#escape-from-a-target-escape)
    - [Attach: attach  (Experimental, Unreliable)](#attach-attach--experimental-unreliable)
  - [Action Commands](#action-commands)
    - [Attack: attack](#attack-attack)
    - [Heal: heal](#heal-heal)
    - [Harvest: harvest](#harvest-harvest)
    - [Build: build](#build-build)
    - [Fetch: fetch](#fetch-fetch)
    - [Deposit: deposit](#deposit-deposit)
    - [Carry: carry](#carry-carry)
  - [Formation and Teamwork](#formation-and-teamwork)
    - [Follow: follow](#follow-follow)
    - [Patrol: patrol](#patrol-patrol)
    - [Pull and Push: pull / push](#pull-and-push-pull--push)
  - [Automated Commands](#automated-commands)
  - [Choosing Movement Options](#choosing-movement-options)
  - [Action Records](#action-records)
  - [Method Reference](#method-reference)
  - [Final Code](#final-code)

### Direct Control Overview

This section is essentially a summary of what the tutorials cover. It is reference-oriented: how to give commands directly to a `Creep` instance — grab a creep and make it move, attack, harvest, or haul.

There are two ways to control creeps. One is **direct control** — you call methods on the creep instance yourself inside `step`. The other is **managed control** — you hand the creep to a `CreepLogic`, which calls your logic automatically every tick. This section covers only the first one; for managed control see [7+.md](../tutorial/7+.md).

Direct control suits these situations:

- Matches with pre-placed units (the blue arena, for example, where you start with units and need no spawning)
- Writing simple scripts and debugging code
- Wanting full control over the decision order of every tick

It has two clear advantages: **no class to define**, and no lifecycle to think about. The price is that the code grows verbose once you have many creeps.

**Note**: Within a single tick, if you issue the same kind of action to the same creep more than once, only the last call takes effect. So do not both control a creep directly and hand it to a `CreepLogic`, or the two sides will overwrite each other.

### Quick Start

```python
from builtin import *

CREEP = get.creep(st.friend)      # Get one friendly creep
TARGET = get.creep(st.enemy)      # Get one enemy creep

def step(k: GlobalKnowledge):
    if TARGET:
        CREEP.attack(TARGET)      # Walks into range automatically, then attacks
```

**Note**: `get.creep(...)` returns a single object, while `get.creeps(...)` returns a list. Both return `None` when nothing matches, so check before use.

### Getting Creeps

| Method | Description |
|------|------|
| `get.creep(filter)` | Get one matching creep, or `None` |
| `get.creeps(filter)` | Get a list of all matching creeps |
| `k.friends` / `k.enemies` | All friendly / enemy creeps in the current match |
| `get.byid(id)` | Get an object by its id |

The filter argument accepts a type-checking function directly. The commonly used ones are:

| Checker | Description |
|---------|------|
| `st.friend` / `st.enemy` | Friendly / enemy |
| `st.my` | Yours (including structures) |
| `st.atkable` / `st.ranged` | Has melee / ranged capability |
| `st.workable` | Has WORK parts |
| `st.storable` | Has CARRY parts |
| `st.healable` | Has healing capability |

**Example**: Tell unit types apart by passing a checker straight in as the filter

```python
SOLDIERS = get.creeps(st.atkable)      # Everything that can fight in melee
WORKERS = get.creeps(st.workable)      # Everything with WORK parts
HEALERS = get.creeps(st.healable)      # Everything that can heal
```

**Note**: Always use the `st.*` checkers for type tests, never `isinstance`. Creeps are wrapper objects built by the runtime library, and `isinstance` gives unreliable answers on them.

### Common Properties

| Property | Description |
|------|------|
| `x` / `y` | Current coordinates; usable as a `Point` in position math |
| `name` / `id` | Name / unique identifier |
| `exists` | Whether the object still exists (`False` after the creep dies) |
| `my` | Whether it belongs to you |
| `hp` / `hpMax` / `hpPer` | Current health / max health / health percentage |
| `energy` / `energyMax` / `energyPer` | Carried energy / carrying capacity / energy percentage |
| `store` | Store object for querying resource amounts and free space |
| `fatigue` | Fatigue; it cannot move while above 0 |
| `recipe` | Body part list, e.g. `['move', 'attack']` |
| `grade` | Recipe score, higher is stronger |
| `partsVector` | Part counts, e.g. `partsVector.works` is the number of WORK parts |
| `info` | Combat and work capability summary, e.g. `info.melee`, `info.attackPower`, `info.motionAbility` |
| `motion` | Motion tracking, e.g. `motion.goal` for the current destination, `motion.moved` for whether it moved this tick |
| `logic` | The bound `CreepLogic` instance, `None` when it is not managed |
| `actions` | This tick's action record, see [Action Records](#action-records) |

**Example**: Fall back when health drops below half

```python
if CREEP.hpPer < 0.5:
    CREEP.escape(ENEMY)
```

### Movement Commands

#### Move to a Position: move

**Signature**: `move(to, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `to` | `Point` \| `int` | No | - | Target position, or a direction constant (1-8) |
| `options` | `MotionOptions` | Yes | `None` | Movement options, see [Choosing Movement Options](#choosing-movement-options) |

It pathfinds automatically along the map's costs (going around walls and obstacles), and passes through portals when they lie on the route. At a distance of 1 tile it simply steps over; already at the destination, it does nothing.

**Example**: Move to a flag

```python
FLAG = get.flag()          # Get one flag
CREEP.move(FLAG)
```

#### Escape from a Target: escape

**Signature**: `escape(target, options = None, rampart = False)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Point` | No | - | The target to run away from |
| `options` | `MotionOptions` | Yes | `None` | Movement options |
| `rampart` | `bool` | Yes | `False` | Whether it may hide on your own ramparts |

It moves up to two tiles away from the target, then checks whether it really ended up farther; if not, it steps back and picks again. In the same tile as the target it walks off in a random direction; within 3 tiles of the target, it weighs the center of mass of nearby enemies when deciding which way to flee.

**Example**: Pull away when the enemy is on top of you

```python
if CREEP.distance(ENEMY) <= 1:
    CREEP.escape(ENEMY)
```

#### Attach: attach  (Experimental, Unreliable)

**Signature**: `attach(target, direct, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Point` | No | - | The target to attach to |
| `direct` | `int` | No | - | Attachment direction (1-8) |

Moves to the given direction of the target and keeps hanging on, which suits formations and escorting armored units. Direction constants live in `const.py` (`TOP`=1, `RIGHT`=3, `BOTTOM_LEFT`=6, and so on).

**Example**: Stand directly above the unit you are escorting

```python
CREEP.attach(GUARD, TOP)
```

### Action Commands

Action commands share one trait: **they move on their own**. When the target is out of range, they walk into range first and then perform the action. So in most cases you do not need a `move` before an `attack` — one call is enough.

#### Attack: attack

**Signature**: `attack(target, move = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Creep` \| `Structure` | No | - | Attack target |
| `move` | `bool` \| `MotionOptions` | Yes | `True` | Whether automatic movement is allowed; movement options may be passed instead |

It handles the melee/ranged choice for you:

- At 1 tile: melee if you have ATTACK parts; with RANGED_ATTACK it fires at every enemy around
- At 2-3 tiles: ranged attack
- Farther away: walks into range automatically

It also adjusts its position based on the matchup: against a target it cannot beat it keeps fighting while backing off, and against one it can dominate it closes in. Passing `move = False` turns these automatic moves off, so it only fires from where it stands.

**Example**: Attack the nearest enemy

```python
ENEMY = CREEP.closest(k.enemies)
if ENEMY:
    CREEP.attack(ENEMY)
```

#### Heal: heal

**Signature**: `heal(target, move = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Creep` | No | - | Heal target |
| `move` | `bool` \| `MotionOptions` | Yes | `True` | Whether automatic movement is allowed |

Within 1 tile it heals up close; at 2-3 tiles it switches to ranged healing automatically; farther away it walks into range.

**Example**: Heal the most wounded ally

```python
HURT = CREEP.closest(k.friends, lambda c: c.hpPer < 1)
if HURT:
    CREEP.heal(HURT)
```

#### Harvest: harvest

**Signature**: `harvest(target, move = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Source` | No | - | The source, obtained with `get.source()` |
| `move` | `bool` \| `MotionOptions` | Yes | `True` | Whether automatic movement is allowed |

Stands next to the source and harvests continuously. Each WORK part harvests 2 energy per tick, and the energy goes straight into the creep's store.

**Example**: Harvest the nearest source

```python
CREEP.harvest(CREEP.closest(get.sources()))
```

#### Build: build

**Signature**: `build(site, move = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `site` | `ConstructionSite` | No | - | The construction site, obtained with `get.site()` |
| `move` | `bool` \| `MotionOptions` | Yes | `True` | Whether automatic movement is allowed |

Each WORK part spends 5 carried energy per tick on the site's progress. Not enough energy returns `ERR_NOT_ENOUGH_RESOURCES`.

**Example**: Build the nearest construction site

```python
SITE = CREEP.closest(get.sites(st.my))
if SITE:
    CREEP.build(SITE)
```

#### Fetch: fetch

**Signature**: `fetch(target, resource_type = None, amount = None, move = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Creep` \| `Structure` \| `Resource` | No | - | The object to take resources from |
| `resource_type` | `str` | Yes | `None` | Resource type; inferred automatically when omitted (usually energy) |
| `amount` | `int` | Yes | `None` | How much to take; omitted means as much as possible |
| `move` | `bool` \| `MotionOptions` | Yes | `True` | Whether automatic movement is allowed |

The action is chosen from the target type: `pickup` for dropped resources on the ground, `withdraw` for structures, and `transfer` for friendly creeps. A target that cannot store anything prints a warning and the call is ignored.

**Example**: Pick up energy from the ground

```python
CREEP.fetch(get.resource())
```

#### Deposit: deposit

**Signature**: `deposit(target = None, resource_type = None, amount = None, move = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Creep` \| `Structure` \| `Point` \| `None` | Yes | `None` | Where to deposit; omitted drops it in place, a `Point` drops it at that position |
| `resource_type` | `str` | Yes | `None` | Resource type; inferred automatically when omitted |
| `amount` | `int` | Yes | `None` | How much to deposit; omitted means everything |
| `move` | `bool` \| `MotionOptions` | Yes | `True` | Whether automatic movement is allowed |

Depositing into a structure or a friendly creep uses `transfer`; dropping to the ground uses `drop`. A target that cannot take more returns `ERR_FULL`.

**Example**: Hand the energy to the spawn

```python
CREEP.deposit(SPAWN)
```

#### Carry: carry

**Signature**: `carry(src, dst, resource_type = None, options = None, intermit = True)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `src` | `Creep` \| `Structure` \| `Resource` \| `None` | No | - | Where to take from; `None` means resources already on the creep |
| `dst` | `Creep` \| `Structure` \| `Point` | No | - | Where to deliver |
| `resource_type` | `str` | Yes | `None` | Resource type; inferred automatically when omitted |
| `options` | `MotionOptions` | Yes | `None` | Movement options |
| `intermit` | `bool` | Yes | `True` | Whether hauling continues: `True` fetches while empty and delivers when full, over and over; `False` runs a single trip |

`carry` is the compound of `fetch` + `deposit`: one call keeps a hauler working, and you never have to track whether it is currently fetching or delivering. It returns `DONE` (value `1`) once a trip is delivered and the next one is already scheduled.

It also accounts for weight: when it lacks MOVE parts or the road ahead is swamp, it drops resources on the ground to travel light and picks them up again on the way back, so seeing resources on the ground mid-trip is normal.

**Example**: Let a hauler run between a container and a tower, indefinitely

```python
CREEP.carry(BOX, TOWER)
```

### Formation and Teamwork

#### Follow: follow

**Signature**: `follow(target, distance, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Point` | No | - | What to follow: a creep, a flag, or plain coordinates |
| `distance` | `int` \| `tuple` | No | - | The distance to keep |
| `options` | `MotionOptions` | Yes | `None` | Movement options |

When `distance` is a `(stop_dist, ignore_dist)` tuple (only effective on friendly targets):

- Beyond `stop_dist`: you close in on the target until the gap is exactly `stop_dist`
- Between `stop_dist` and `ignore_dist`: the target closes in on you instead, so the two of you draw together
- Beyond `ignore_dist`: the target stops waiting and you catch up on your own

On an enemy target it keeps its distance instead: too close and it backs off to `stop_dist`, too far and it closes in.

**Example**: Follow a flag, keeping 3 tiles away

```python
CREEP.follow(FLAG, 3)
```

#### Patrol: patrol

**Signature**: `patrol(points, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `points` | `list[Point]` | No | - | Patrol points, cycled in order |
| `options` | `MotionOptions` | Yes | `None` | Movement options |

The first call starts from the patrol point nearest to the creep, then visits them in list order. Within 2 tiles of the current point it moves on to the next, and after the last one it loops back to the first.

**Example**: Patrol between three points

```python
CREEP.patrol([Point(10, 10), Point(20, 30), Point(40, 15)])
```

#### Pull and Push: pull / push

**Signature**: `pull(target, options = None)` / `push(target, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `target` | `Creep` | No | - | A friendly creep |
| `options` | `MotionOptions` | Yes | `None` | Movement options |

Both require being adjacent (within 1 tile); farther than that, the creep first walks over to the target on its own.

- `pull`: drags the target along beside you, and **you decide where you go** — good for marching in column, with the head pulling the tail
- `push`: shoves the target along, and **the other one decides where you go**; the target needs MOVE parts. Good for escorting, or shoving a teammate through a portal

**Example**: A snake-like column, each one pulling the one behind

```python
CREEP.pull(FOLLOWER)
```

### Automated Commands

These commands bundle whole chunks of decision-making: a single call lets a creep fight a battle or do a round of work by itself, which is handy for quick prototypes.

| Method | Description |
|------|------|
| `autoAttack(view_range = 50, wall = True)` | Searches for enemies in range and attacks them; returns a `(locked target, attack target)` tuple, or `(None, None)` when there are no enemies |
| `autoHeal(view_range = 50, lock_healer = True)` | Searches for wounded allies and heals them; returns a `(locked target, heal target)` tuple |
| `autoCombat(wall = True)` | Runs `autoAttack` and `autoHeal` together: fight when you can, heal when you can |
| `autoWork(structure_from = None)` | Works on its own: picks up energy, harvests, builds and refuels in one flow |

`wall = True` means walls count as attack targets (so it will break them), `lock_healer = True` means enemy healers are locked onto first, and `structure_from = None` means it will not fetch energy from a specific structure.

The rough order `autoWork` follows is: when low on energy, pick up energy from the ground or take it from a nearby structure → build at a friendly construction site nearby and refuel extensions that are not full → otherwise harvest the nearest source → with energy still in hand, top up towers, extensions and spawns in that order. When there is nothing it can do, it returns `ERR_NOT_ENOUGH_ENERGY`.

**Example**: Let a combat unit fight fully automatically

```python
def step(k: GlobalKnowledge):
    for c in k.friends:
        if st.atkable(c):
            c.autoCombat()
        else:
            c.autoWork()
```

**Note**: Automated commands are ordinary commands inside, so the "last call within a tick wins" rule still applies. Once you call `autoCombat()`, do not also call `attack()` on the same creep — whichever you call first is the one that gets overwritten.

### Choosing Movement Options

The last parameter of every movement command is a set of movement options. Two presets cover most cases, and you can use them as-is:

| Preset | Description |
|------|------|
| `DEFAULT_MOTION` | The default options; pathfinds by terrain cost (swamp is more expensive) |
| `SWAMP_MOTION` | Ignores swamp terrain and treats it as plain ground |

**Example**: Take the short cut straight through the swamp

```python
CREEP.move(TARGET, SWAMP_MOTION)
```

To fine-tune, copy one with `clone()` and edit the copy, so you never disturb the global presets:

| Option | Type | Default Value | Description |
|--------|------|--------|------|
| `flee` | `bool` | `False` | Whether to look for a path away from the target (unreliable) |
| `maxOps` | `int` | `50000` | Maximum pathfinding operations allowed |
| `maxCost` | `number` | Infinity | Maximum allowed cost of the path |
| `heuristicWeight` | `number` | `1.2` | Heuristic weight; larger is faster but the path may not be optimal |

```python
MY_MOTION = DEFAULT_MOTION.clone()
MY_MOTION.heuristicWeight = 1.5    # A little faster to compute
```

**Note**: `plainCost` and `swampCost` are disabled (pathfinding uses a dynamic cost matrix); to make swamp cheaper, just use `SWAMP_MOTION`.

### Action Records

A creep records the commands issued this tick, which makes troubleshooting easier:

```python
CREEP.attack(ENEMY)
print(CREEP.actions.attack)     # Who it attacked this tick
print(CREEP.actions.move)       # Where it wanted to move this tick
```

The fields are `move`, `attack`, `heal`, `harvest`, `build`, `fetch` and `deposit`, plus `melee` and `ranged` which record how it actually opened fire.

Reading them alongside return values tells you more. Every command returns an error code: `OK` (0) means the action was scheduled, and anything else is the reason it failed:

| Error Code | Value | Meaning |
|--------|-----|------|
| `OK` | 0 | The action was scheduled successfully |
| `DONE` | 1 | One round of an operation finished (such as hauling) |
| `ERR_NOT_OWNER` | -1 | Not your creep |
| `ERR_NOT_ENOUGH_RESOURCES` | -6 | Not enough resources or energy |
| `ERR_INVALID_TARGET` | -7 | Wrong target type, or it cannot be attacked / healed / stored into |
| `ERR_FULL` | -8 | The target cannot take any more |
| `ERR_NOT_IN_RANGE` | -9 | Target is too far away |
| `ERR_INVALID_ARGS` | -10 | Invalid argument |
| `ERR_TIRED` | -11 | Fatigue is non-zero, so it cannot move this tick |
| `ERR_NO_BODYPART` | -12 | Missing the body parts this action needs |

**Example**: Decide the next action from the return value

```python
if CREEP.harvest(SOURCE) == ERR_NOT_ENOUGH_RESOURCES:
    CREEP.move(NEXT_SOURCE)    # This source is depleted; go somewhere else
```

### Method Reference

| Category | Method | Description |
|------|------|------|
| **Movement** | `move(to, options?)` | Move to a position or direction |
| | `escape(target, options?, rampart?)` | Move away from a target |
| | `attach(target, direct, options?)` | Attach to a given direction of the target |
| **Actions** | `attack(target, move?)` | Attack (picks melee/ranged, handles positioning) |
| | `heal(target, move?)` | Heal (picks close-range/ranged) |
| | `harvest(target, move?)` | Harvest a source |
| | `build(site, move?)` | Build |
| | `fetch(target, resource_type?, amount?, move?)` | Take resources (picks pickup/withdraw/transfer) |
| | `deposit(target?, resource_type?, amount?, move?)` | Deposit resources (drops in place when no target) |
| | `carry(src, dst, resource_type?, options?, intermit?)` | Haul continuously |
| **Teamwork** | `follow(target, distance, options?)` | Follow / keep distance |
| | `patrol(points, options?)` | Patrol in a loop |
| | `pull(target, options?)` | Pull an ally (you choose the direction) |
| | `push(target, options?)` | Push an ally (the other one chooses the direction) |
| **Automated** | `autoAttack(view_range?, wall?)` | Find and attack enemies automatically |
| | `autoHeal(view_range?, lock_healer?)` | Heal allies automatically |
| | `autoCombat(wall?)` | Fight automatically (attack + heal) |
| | `autoWork(structure_from?)` | Harvest, refuel and build automatically |
| **Helpers** | `test(target, *bias)` | Whether to keep away from or approach a target: `True` means keep away, `False` means approach, `None` means unsure |
| | `closest(objs, filter_fn?)` | Nearest object |
| | `nearest(objs, range, filter_fn?)` | Nearest object within a range |
| | `inrange(objs, range, filter_fn?)` | All objects within a range |

### Final Code

The example below hands the whole match to direct control: every tick it tells unit types apart by capability, combat units attack the nearest enemy or wait at the rally point, and workers harvest and refuel on their own.

```python
from builtin import *

RALLY = Point(20, 20)                # Rally point; change it for your map

def init(k: GlobalKnowledge):
    """At start: report the unit mix"""
    friends = get.creeps(st.friend)
    soldiers = len([c for c in friends if st.atkable(c)])
    print(f"soldiers={soldiers}, others={len(friends) - soldiers}")

def step(k: GlobalKnowledge):
    for c in k.friends:
        if st.atkable(c):
            # Combat unit: attack the nearest enemy, otherwise wait at the rally point
            enemy = c.closest(k.enemies)
            if enemy:
                c.attack(enemy)
            else:
                c.follow(RALLY, 3)
        elif st.workable(c):
            # Worker: picks up energy, refuels, builds and harvests on its own
            c.autoWork()
```

To control the fetch-and-deliver rhythm yourself, just replace `autoWork()` with `carry(src, dst)` — for `src`, take `c.closest(get.sources())`, and for `dst`, the structure you want to refuel.

**Note**: Change the rally point coordinates for your actual map. For a full listing of creep information and motion tracking see the [tutorials](../index.md), for drawing movement as it happens see [Drawing.md](./Drawing.md), and for handing creeps to a `CreepLogic` see [7+.md](../tutorial/7+.md).
