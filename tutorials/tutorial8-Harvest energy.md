In this tutorial, you will learn how to harvest energy from a `Source`.

## 8. Harvesting Energy  

Energy can be obtained not only from a `box` but also by mining a `Source`.  

To mine a `Source`, a Creep with a `WORK` component is necessary.  

### Obtaining Objects  

This tutorial provides a `Spawn`, a `Creep` with a `WORK` component, and a `Source`. The task is to harvest 1000 energy and store it in the `Spawn`.  

```python  
from builtin import *  

SPAWN = get.spawn()  
CREEP = get.creep()  
SOURCE = get.source()  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    pass  
```  

### Harvesting Logic  

The `harvest` method is an instance method of the `Creep` class, structured as follows:  

| Parameter Name | Type | Optional | Default Value | Description |  
|----------------|------|----------|---------------|-------------|  
| `target`       | `Source` | No       | -             | The harvesting target (resource point). |  
| `move`         | `MotionOptions` \| `bool` \| `None` | Yes      | `None`        | If `False` (or `None`, equivalent to `False`), movement is disabled. If `True` or a `MotionOptions` object is passed, the Creep will automatically move closer to the target if the distance is insufficient. |  

| Return Type | Description |  
|-------------|-------------|  
| `int`       | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |  

Using the read-only properties `energy: int` and `energyMax: int` of the Creep, we can return to the Spawn once the Creep's energy is full.  

```python  
from builtin import *  

SPAWN = get.spawn()  
CREEP = get.creep()  
SOURCE = get.source()  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    if CREEP.energy < CREEP.energyMax:  
        CREEP.harvest(SOURCE)  
    else:  
        CREEP.deposit(SPAWN)  
```  

<details>  
<summary style="color:#BEBEBE">  
If you explored the "elegant" and "complex" solution in Tutorial 7, consider delving into the state machine approach in this tutorial. Beginners can skip this section.  
</summary>  

In the previous tutorial, we used `CreepLogic` to create a Creep and move it to a Flag.  

### Creating from an Existing Creep  

In reality, `CreepLogic` can also accept an existing Creep.  

```python  
from builtin import *  

SPAWN = get.spawn()  
CREEP = get.creep()  
SOURCE = get.source()  

class WorkerType(CreepLogic):  
    NAME = "worker"  

    def onStep(self, c: Creep, *other_args):  
        if c.energy < c.energyMax:  
            c.harvest(SOURCE)  
        else:  
            c.deposit(SPAWN)  

def init(k: GlobalKnowledge):  
    CreepLogic("worker", CREEP)  

    # Equivalent to  
    # WorkerType(CREEP)  

def step(k: GlobalKnowledge):  
    CreepLogic.showQueue()  
```  

### Logic State Machine  

`CreepLogic` inherits from `Stage`, so it has state machine capabilities.  

Use custom functions that do not start with '_' as state nodes. The initial state node is the first defined function. Detailed explanations are provided in the实战demo tutorial.  

```python  
from builtin import *  

SPAWN = get.spawn()  
CREEP = get.creep()  
SOURCE = get.source()  

class WorkerType(CreepLogic):  
    NAME = "worker"  

    def do_harvest(self, c: Creep, *other_args):  
        c.harvest(SOURCE)  

        if c.energy >= (c.energyMax - 10):  
            return "to_save"  # Return new state  

    def to_save(self, c: Creep, *other_args):  
        c.deposit(SPAWN)  

        if c.distance(SPAWN) <= 1:  
            return "do_harvest"  

def init(k: GlobalKnowledge):  
    CreepLogic("worker", CREEP)  

def step(k: GlobalKnowledge):  
    CreepLogic.showQueue()  
```  

</details>  

### Compilation and Execution  

You are already familiar with the compilation and configuration process. If you need a refresher, refer to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code to JavaScript and save it to the corresponding location. If everything goes smoothly, you can click **Play Game** to see the result and receive a **Pass** popup.
