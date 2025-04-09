In this tutorial section, you will learn about resource access and management.  

## 5. Fetch and Deposit  

### Resource Types  
The game includes various types of resources, with **Energy** being the most commonly used. A `box` (of type `StructureContainer`, referred to as "box" hereafter) and a `Creep` with the `CARRY` component can store a certain amount of any type of resource. In CAC mode, there is also a `ScoreCollector` object for storing specific types of resources (see the CAC tutorial for details, which will not be covered here).  

| Resource Type          | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `RESOURCE_ENERGY`      | **Energy**, the most basic type of resource.                               |
| `RESOURCE_SCORE`       | **Score**, a special resource in basic CAC mode.                           |
| `RESOURCE_SCORE_X`     | **Score X**, a special resource in advanced CAC mode.                      |
| `RESOURCE_SCORE_Y`     | **Score Y**, a special resource in advanced CAC mode.                      |
| `RESOURCE_SCORE_Z`     | **Score Z**, a special resource in advanced CAC mode.                      |

### Game Objects  
In this section of the tutorial (5-`Store and Transfer`), the game provides the following objects:  

| Object                | Object Type          | Description                                                                 |
|-----------------------|----------------------|-----------------------------------------------------------------------------|
| Friendly Creep        | `Creep`              | A creep with the Carry component, capable of transporting resources.       |
| Box with Energy       | `StructureContainer` | Contains the resource **Energy**.                                          |
| Friendly Tower        | `StructureTower`     | Consumes its stored **Energy** to attack enemies.                          |
| Ring of Walls         | `StructureWall`      | Blocks creep movement, affecting both friend and foe.                      |
| Enemy Creep           | `Creep`              | The target we need to eliminate.                                           |

<details>
<summary>
As in previous tutorials, we first need to obtain these game objects. Click to expand the code.
</summary>

```python
from builtin import *

CREEP = get.creep(st.friend)
TOWER = get.tower(st.friend)
ENEMY = get.creep(st.enemy)
BOX = get.box()

def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    pass
```

*Note: The box does not have a friend/foe distinction, at least in game versions 0.3 and earlier.*  
</details>

### Fetching Energy  
`fetch` is an instance method of the `Creep` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`               | `Creep` \| `Resource` \| `Structure` | No       | -             | The target object, which can be an instance of `Creep`, `Resource`, or `Structure`. |
| `resource_type`        | `str` \| `None`                   | Yes      | `None`        | The type of resource to fetch. Default is `None`, indicating `RESOURCE_ENERGY`. |
| `amount`               | `int` \| `None`                   | Yes      | `None`        | The amount of resource to fetch. Default is to fetch as much as possible.   |
| `move`                 | `bool` \| `UsrObject`             | Yes      | `True`        | Whether to enable movement control. Default is `True`, meaning automatic movement toward the target. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |

<details>
<summary>
If we want to fetch energy from the box, we can write the following code:
</summary>

```python
from builtin import *

CREEP = get.creep(st.friend)
TOWER = get.tower(st.friend)
ENEMY = get.creep(st.enemy)
BOX = get.box()

def init(k: GlobalKnowledge):
    CREEP.fetch(BOX)
    # Equivalent to
    # CREEP.fetch(BOX, RESOURCE_ENERGY)
    # Equivalent to
    # CREEP.fetch(BOX, RESOURCE_ENERGY, 50)


def step(k: GlobalKnowledge):
    pass
```
</details>

### Depositing Energy  
`deposit` is an instance method of the `Creep` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`               | `None` \| `Point`                 | Yes      | `None`        | The target position, which can be `None` or an instance of `Point`. Default is `None`, meaning the resource is dropped at the current location. |
| `resource_type`        | `str` \| `None`                   | Yes      | `None`        | The type of resource to deposit. Default is `None`, indicating `RESOURCE_ENERGY`. |
| `amount`               | `int` \| `None`                   | Yes      | `None`        | The amount of resource to deposit. Default is to deposit as much as possible. |
| `move`                 | `bool` \| `UsrObject`             | Yes      | `True`        | Whether to enable movement control. Default is `True`, meaning automatic movement toward the target. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |

<details>
<summary>
If we want to deposit the fetched energy into the Tower, we can write the following code:
</summary>

```python
from builtin import *

CREEP = get.creep(st.friend)
TOWER = get.tower(st.friend)
ENEMY = get.creep(st.enemy)
BOX = get.box()

def init(k: GlobalKnowledge):
    CREEP.fetch(BOX)  # k.now == 1


def step(k: GlobalKnowledge):
    if k.now == 2:
        CREEP.deposit(TOWER)
        # Equivalent to
        # CREEP.deposit(TOWER, RESOURCE_ENERGY)
        # Equivalent to
        # CREEP.deposit(TOWER, RESOURCE_ENERGY, 50)
```
</details>

### Defense Tower  
The Tower can perform healing and attacks, collectively referred to as `Action`. However, there is a **10-tick cooldown** (read-only attribute `cooldown: int`) after each action. The Tower cannot perform another action until the cooldown is zero (the corresponding instruction will return a negative value).  

*There are rumors that the official team is considering enhancing the Tower, as its DPS is very low. However, no changes have been observed in game version 0.3.*  

### Defense Tower: Attack  
`attack` is an instance method of the `Tower` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`               | `st.hitable`                      | No       | -             | The target object, which must be an object with the `st.hitable` trait, such as `Structure` or `Creep`. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |

### Defense Tower: Heal  
`heal` is an instance method of the `Tower` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`               | `st.hitable`                      | No       | -             | The target object, which must be an object with the `st.hitable` trait, such as `Structure` or `Creep`. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |

<details>
<summary>
Here is a test code snippet to help you understand better:
</summary>

```python
from builtin import *

CREEP = get.creep(st.friend)
TOWER = get.tower(st.friend)
ENEMY = get.creep(st.enemy)
BOX = get.box()

def init(k: GlobalKnowledge):
    CREEP.fetch(BOX)  # k.now == 1


def step(k: GlobalKnowledge):
    if k.now == 2:
        CREEP.deposit(TOWER)
    
    if TOWER.energy > 0 and TOWER.cooldown <= 0:
        pred_cov = TOWER.measure(CREEP)
        pred_dmg = TOWER.measure(ENEMY)
        print(f"Estimated damage to enemy: {pred_dmg}, Estimated healing to ally: {pred_cov}.")
        TOWER.attack(ENEMY)
```
</details>

### Composite Command: Carry  
The `carry` command is a composite instance method of the `Creep` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `src`                  | `Structure` \| `Creep`           | No       | -             | The source location of the resource.                                       |
| `dst`                  | `Structure` \| `Creep`           | No       | -             | The destination location of the resource.                                  |
| `resource_type`        | `str`                             | Yes      | `RESOURCE_ENERGY` | The type of resource to transport.                                         |
| `options`              | `UsrObject` \| `None`            | Yes      | `None`        | Movement options. If `None`, default movement options are used.            |
| `intermit`             | `bool`                            | Yes      | `False`       | Whether to use an "intermittent" carrying method. If the unit `moves >= carrys` on flat terrain, non-`intermit` mode will be used. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `>=0` on success, and a negative error code on failure. See `const.py` for details. Returns `DONE` (value `1`) when a full round of carrying is completed. |

<details>
<summary>
You can use **carry** to replace **fetch** and **deposit**, simplifying the code:
</summary>

```python
from builtin import *

CREEP = get.creep(st.friend)
TOWER = get.tower(st.friend)
ENEMY = get.creep(st.enemy)
BOX = get.box()

def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    CREEP.carry(BOX, TOWER)
    TOWER.attack(ENEMY)  # Failure will return an error code, but we do not care about it here.
```
</details>

### Compilation and Execution  
You are already familiar with the compilation process, but if you need a refresher, refer to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code into JavaScript and save it to the corresponding location. If everything goes smoothly, you can click **Play Game** to see the results and receive a **Pass** pop-up.
