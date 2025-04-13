
## 3. Attacking Enemies  
In this tutorial, you will learn how to control a `Creep` to attack enemies.  

In `SA`, there are game objects with the following attributes:  

| Attribute Name | Attribute Type | Read-Only | Description |  
|----------------|----------------|-----------|-------------|  
| hits           | int            | ✓         | Represents the current **durability** of the object; this can be considered as health. |  
| hitsMax        | int            | ✓         | Represents the **maximum durability** of the object; this can be considered as maximum health. |  
| hp             | int            | ✓         | Equivalent to `hits`. |  
| hpMax          | int            | ✓         | Equivalent to `hitsMax`. |  

These objects can be attacked by other **attack-capable** objects, regardless of whether they are allies or enemies (at least up to game version 0.3).  

Typical examples of such objects include: `Creep`, `StructureSpawn`, `StructureWall`, etc.  

In this tutorial, Tutorial 3 - **First Attack** provides you with a **friendly creep** and an **enemy creep**. Your task is to control the friendly creep to attack and eliminate the enemy creep.  

### Obtaining Objects  
If you still remember the content from Tutorial 2 - **Object Acquisition and Movement**, this step should not be difficult. `st` provides `st.my`, `st.friend` (equivalent to `st.my`), and `st.enemy` to determine the affiliation of creeps.  

<details>  
<summary>  
You can try it yourself first, then check the reference code.  
</summary>  

```python  
from builtin import *  

CREEP = get.creep(st.friend)  
ENEMY = get.creep(st.enemy)  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    pass  
```  

</details>  

### Issuing Attack Commands  
The `attack` command is an instance method of the `Creep` class, structured as follows:

| Parameter Name | Type                                | Optional | Default Value | Description                                                                 |
|----------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
|target ``       | `st.hitable`                      | No       | -             | An instance object recognized by `st.hitable`, i.e., an object with `hits` and `hitsMax` properties. |
| `options`      | `MotionOptions` \| `bool` \| `None` | Yes      | `True`        | Movement control parameters. If `False` is passed, movement is disabled. Passing `True` or a `MotionOptions` object will cause the creep to automatically approach the target if the distance is insufficient; for creeps primarily using ranged attacks, it will move away from the target if the distance is too close. |

| Return Type | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `int`       | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |
- This command automatically selects between **melee attack** and **ranged attack** based on the situation. If you want to perform both simultaneously, disable **auto-move** by passing `False` to `move` and issue movement commands manually.  

<details>  
<summary>  
You can try it yourself first, then check the reference code.  
</summary>  

```python  
from builtin import *  

CREEP = get.creep(st.friend)  
ENEMY = get.creep(st.enemy)  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    CREEP.attack(ENEMY)  
```  

</details>  

### Compilation and Execution  
You should be familiar with the compilation setup process by now. If you have forgotten, you can refer back to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code into JavaScript and save it to the appropriate location. If everything goes smoothly, you can click **Play Game** to see the result and receive a **Pass** popup.
