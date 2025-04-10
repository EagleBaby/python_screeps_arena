
In this tutorial, you will learn how to create a Creep.  

## 7. Creating a New Creep  

If you have a `spawn` object (short for `StructureSpawn`, referred to as `spawn` hereafter), you can use it to create new Creeps.  

This tutorial provides a `spawn` object and two `flags`, and asks you to create two Creeps to move to these two `flags`.  

First, obtain these objects:  

```python  
from builtin import *  

SPAWN = get.spawn()  
FLAG0 = get.flag(lambda it: it.x < SPAWN.x)  
FLAG1 = get.flag(lambda it: it.x > SPAWN.x)  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    pass  
```  

### Creep Recipe  

If you remember the content about Creep **body parts** from Tutorial 4, the following table should be familiar to you:  

| Component Name | Action Category | Cost (Energy) | Description |  
|----------------|-----------------|---------------|-------------|  
| MOVE           | Other           | 50/each       | Each component reduces the Creep's `fatigue` value by 2 each tick, but not below 0. If a Creep's `fatigue` value is not 0, it cannot move in that tick. Non-MOVE components generate `fatigue` during movement, which will be explained in Tutorial 6. |  
| CARRY          | Resource        | 50/each       | Each component provides 50 capacity for any type of resource. When this component holds any non-zero resource, it generates `fatigue` like other components during movement. |  
| ATTACK         | Melee           | 80/each       | Each component provides 30 points of melee attack power with an attack range of 1. |  
| RANGED_ATTACK  | Ranged          | 150/each      | Each component provides 10 points of ranged attack power with an attack range of 3, or deals AOE damage to enemies within a range of 3 centered on the Creep. Details are provided in the table below. |  
| HEAL           | Melee/Ranged    | 250/each      | Each component provides 12 points of melee healing power with a healing range of 1, or 4 points of ranged healing with a healing range of 3. |  
| WORK           | Melee/Ranged    | 100/each      | Each component provides 5 points of construction progress per tick for `ConstructionSite` with a working range of 3, or 2 energy per tick from `Source` with a harvesting range of 1. |  
| TOUGH          | Other           | 10/each       | No special functionality; it only serves as a damage absorber and generates `fatigue` like other components during movement. |  

If you want to create a new Creep, the first and most important step is to determine its **recipe**. For example, in this tutorial, if you need to create a movable Creep, its recipe can be `[MOVE]`. Similarly, if you want to create a melee unit, its recipe can be `[MOVE, ATTACK]`.  

### Spawning a Creep  

The `create` method is an instance method of the `StructureSpawn` class, with the following parameters:  

| Parameter Name | Type                          | Optional | Default Value | Description |  
|----------------|-------------------------------|----------|---------------|-------------|  
| `recipe`       | `list[str]`                   | No       | -             | The array of body parts used to create the Creep. |  
| `creep_name`   | `str` \| `None`               | Yes      | `None`        | Optional Creep name. If not provided, the Creep's name will be in the format 'c' + id, as mentioned in Tutorial 4. |  
| `optimise`     | `bool` \| `True`              | Yes      | `True`        | Whether to optimize the recipe to improve functional integrity. For recipes with many components, it optimizes the order to ensure functionality. For example, MMMMCC<span style="color:#CDAD00">WW</span> is roughly optimized to MMC<span style="color:#CDAD00">W</span>MC<span style="color:#CDAD00">W</span>M. |  
| `direction`    | `int` \| `None`               | Yes      | `None`        | Optional direction parameter to specify the Creep's spawning direction. For example, specifying `TOP` will consider the order [↑ ↖ ↗], but if these positions are blocked, `create` will be `blocked`. |  

| Return Type | Description |  
|-------------|-------------|  
| `int` \| `Creep` | Returns the Creep on success or the remaining spawning time (>0). Returns a negative error code on failure; see `const.py` for details. |  

Use `isinstance` or `st.creep` to determine if the return value is a Creep. The latter is more rigorous.  

<details>  
<summary>For example, to create two Creeps with the recipe <b>[MOVE]</b>, one spawning to the LEFT and the other to the RIGHT. Expand to see the example code.</summary>  

```python  
from builtin import *  

SPAWN = get.spawn()  
FLAG0 = get.flag(lambda it: it.x < SPAWN.x)  
FLAG1 = get.flag(lambda it: it.x > SPAWN.x)  

CREEP0 = None  
CREEP1 = None  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    global CREEP0, CREEP1  
    if not st.creep(CREEP0):  
        CREEP0 = SPAWN.create([MOVE], "Mover0", True, LEFT)  
    if not st.creep(CREEP1):  
        CREEP1 = SPAWN.create([MOVE], "Mover1", True, RIGHT)  
```  
</details>  

### Final Code & Compilation and Execution  

<details>  
<summary>By now, the final code should be clear to you. Expand to see the final code.</summary>  

```python  
from builtin import *  

SPAWN = get.spawn()  
FLAG0 = get.flag(lambda it: it.x < SPAWN.x)  
FLAG1 = get.flag(lambda it: it.x > SPAWN.x)  

CREEP0 = None  
CREEP1 = None  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    global CREEP0, CREEP1  

    # Creation phase  
    if not st.creep(CREEP0):  
        CREEP0 = SPAWN.create([MOVE], "Mover0", True, LEFT)  
    if not st.creep(CREEP1):  
        CREEP1 = SPAWN.create([MOVE], "Mover1", True, RIGHT)  

    # Execution phase  
    if st.creep(CREEP0):  
        CREEP0.move(FLAG0)  
    if st.creep(CREEP1):  
        CREEP1.move(FLAG1)  
```  

<details>  
<summary style="color:#BEBEBE">Do you think the code isn't <b><i>elegant</i></b>? With just a biiiiit of <b>structural complexity</b>, the code can be more concise. <i>Beginners can skip this; it will appear in later demos.</i></summary>  

We can use the powerful logic processing class that combines **state machines** and **message-driven** logic—`CreepLogic`—to achieve the same result.  

```python  
from builtin import *  

SPAWN = get.spawn()  
FLAG0 = get.flag(lambda it: it.x < SPAWN.x)  
FLAG1 = get.flag(lambda it: it.x > SPAWN.x)  

class MoverLeft(CreepLogic):  
    NAME = "MoverL"  # The name of this CreepLogic, must be unique and cannot end with a number. The Creep's name will automatically be in the format "MoverL0", "MoverL1", etc.  
    RECIPE = [MOVE]  # Specify the recipe  
    DIRECTION = LEFT  # Specify the direction  

    def onStep(self, c: Creep, *other_args):  
        c.move(FLAG0)  

class MoverRight(MoverLeft):  
    NAME = "MoverR"  
    DIRECTION = RIGHT  

    def onStep(self, c: Creep, *other_args):  
        c.move(FLAG1)  

def init(k: GlobalKnowledge):  
    CreepLogic("MoverL", SPAWN)  # Initialization parameters are name + Spawn  
    CreepLogic("MoverR", SPAWN)  

    # Equivalent to  
    # MoverLeft(SPAWN)  
    # MoverRight(SPAWN)  

def step(k: GlobalKnowledge):  
    CreepLogic.showQueue()  
```  
<p style="color:#BEBEBE">The advantages of this method are not obvious in simple logic, but they will become clear in real-world scenarios. We will elaborate further in later tutorials; this is just an introduction.</p>  

</details>  
</details>  

You are already familiar with the compilation and configuration process. If you need a refresher, refer to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code to JavaScript and save it to the corresponding location. If everything goes smoothly, you can click **Play Game** to see the result and receive a **Pass** popup.
