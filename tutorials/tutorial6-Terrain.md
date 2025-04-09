
In this tutorial section, you will learn about the impact of different terrains on movement.  

## 6. Terrain Impact  

In any existing map (up to game version 0.3), there are three types of terrain:  

| Terrain               | Type      | Value              | Movement Cost | Description                                                                 |
|-----------------------|-----------|--------------------|---------------|-----------------------------------------------------------------------------|
| `TERRAIN_WALL`        | `str`     | `"terrain_wall"`   | 255           | An impassable terrain that blocks creep movement.                          |
| `TERRAIN_SWAMP`       | `str`     | `"terrain_swamp"`  | 10            | Swamp terrain, the primary terrain in SAS mode, rivers in CTF mode, and grasslands in CAC mode. |
| `TERRAIN_PLAIN`       | `str`     | `"terrain_plain"`  | 2             | Flat terrain.                                                               |

When a creep moves onto a passable terrain, it gains **fatigue**, calculated as follows:  
- The number of non-MOVE and non-CARRY components in the creep, denoted as `mc`.  
- The number of CARRY components in the creep that are carrying resources, denoted as `rc`.  
- The **movement cost** of the terrain, e.g., `TERRAIN_SWAMP` has a cost of 10.  

The creep gains `(mc + rc) * movement cost` fatigue points upon moving to the terrain. The creep cannot move again until its MOVE components eliminate all fatigue.  

### Overflow Transfer  
As previously mentioned, when a creep's MOVE components reduce its `fatigue` to below 0, it is capped at 0. Even if a creep does not move in a tick and its `fatigue` is 0, the MOVE components will still function. The excess fatigue reduction can be transferred to adjacent creeps, a process known as **overflow transfer**.  

#### Overflow Transfer: Push Command  
A creep with high mobility can **push** a creep with lower mobility (the latter must have at least one functioning MOVE component). The excess fatigue reduction from the former can be passed to the latter.  

The `push` command is an instance method of the `Creep` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`               | `Creep`                           | No       | -             | The target creep to be pushed.                                              |
| `options`              | `UsrObject` \| `None`             | Yes      | `None`        | Movement options, effective only if the distance between the two creeps is greater than 1. If `None`, default movement options are used. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `>=0` on success, and a negative error code on failure. See `const.py` for details. |

```python
c0 = get.creep(5, 5)  # Obtain the creep at coordinate (5, 5), assuming its recipe is MM  
c1 = get.creep(8, 6)  # Obtain the creep at coordinate (8, 6), assuming its recipe is MAAA  

c0.push(c1)  # c0 itself does not generate fatigue, so it can transfer its overflow to c1.  
c1.move(Point(20, 20))  # Assuming the map is entirely TERRAIN_PLAIN, this generates (3+0)*2=6 fatigue points.  
```  

#### Overflow Transfer: Pull Command  
A creep with high mobility can **pull** a creep with lower mobility (the target may lack MOVE components) toward itself. The excess fatigue reduction from the former can be passed to the latter.  

The `pull` command is an instance method of the `Creep` class, structured as follows:  

| Parameter Name         | Type                              | Optional | Default Value | Description                                                                 |
|------------------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`               | `Creep`                           | No       | -             | The target creep to be pulled.                                              |
| `options`              | `UsrObject` \| `None`             | Yes      | `None`        | Movement options, effective only if the distance between the two creeps is greater than 1. If `None`, default movement options are used. |

| Return Value Type      | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `int`                  | Returns `>=0` on success, and a negative error code on failure. See `const.py` for details. |

```python
c0 = get.creep(5, 5)  # Obtain the creep at coordinate (5, 5), assuming its recipe is MM  
c1 = get.creep(8, 6)  # Obtain the creep at coordinate (8, 6), assuming its recipe is AA  

c0.pull(c1)  # c0 itself does not generate fatigue, so it can transfer its overflow to c1.  
c0.move(Point(20, 20))  # Note the difference from push; here, c0 is pulling c1 (c0 moves first, c1 follows).  
```  

### Final Code & Compilation and Execution  
In Tutorial 6, the game provides six creeps, each with a corresponding flag to their right. The goal is to observe the time it takes for each creep to move to its respective flag.  

```python
from builtin import *

CREEPS = get.creeps()

def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    for c in CREEPS:
        c.move(RIGHT)
```  

You are already familiar with the compilation process, but if you need a refresher, refer to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code into JavaScript and save it to the corresponding location. If everything goes smoothly, you can click **Play Game** to see the results and receive a **Pass** pop-up.
