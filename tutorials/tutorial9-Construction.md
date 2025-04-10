In this tutorial, you will learn how to construct new buildings.

## 9. Building Construction  

To construct a building, we first need to create a `Construction Site` (referred to as `site` hereafter).  

### Creating a Construction Site  

The `plan` method of the `ConstructionSite` class is used to create a construction site. It is structured as follows:  

| Parameter Name | Type | Optional | Default Value | Description |  
|----------------|------|----------|---------------|-------------|  
| `x`            | `int` | No       | -             | The x-coordinate of the construction site. |  
| `y`            | `int` | No       | -             | The y-coordinate of the construction site. |  
| `building_type`| `type`| No       | -             | The type of building to be created, e.g., `StructureTower`. |  
| `single`       | `bool`| Yes      | `False`       | Whether to ensure the site is unique. If `True`, multiple sites cannot be created at the same location. |  

| Return Type | Description |  
|-------------|-------------|  
| `ConstructionSite` | Returns a `site` instance on success, and a negative error code on failure. See `const.py` for details. |  

```python  
from builtin import *  

SITE = ConstructionSite.plan(50, 50, StructureTower)  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    pass  
```  

### Obtaining Objects  

This tutorial provides a Creep with a `WORK` component and a `box` filled with energy. The task is to construct a `Tower`.  

```python  
from builtin import *  

SITE = ConstructionSite.plan(50, 50, StructureTower)  
CREEP = get.creep()  
BOX = get.box()  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    pass  
```  

### Completing Construction  

The `build` method is an instance method of the `Creep` class, structured as follows:  

| Parameter Name | Type | Optional | Default Value | Description |  
|----------------|------|----------|---------------|-------------|  
| `site`         | `ConstructionSite` | No       | -             | The construction site to be built. |  
| `move`         | `MotionOptions` \| `bool` \| `None` | Yes      | `None`        | If `False` (or `None`, equivalent to `False`), movement is disabled. If `True` or a `MotionOptions` object is passed, the Creep will automatically move closer to the target if the distance is insufficient. |  

| Return Type | Description |  
|-------------|-------------|  
| `int`       | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |  

```python  
from builtin import *  

SITE = ConstructionSite.plan(50, 50, StructureTower)  
CREEP = get.creep()  
BOX = get.box()  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    if CREEP.energy <= 0:  
        CREEP.fetch(BOX)  
    else:  
        CREEP.build(SITE)  
```  

*Note: The `build` method requires the Creep to consume a corresponding amount of energy.  

<details>  
<summary style="color:#BEBEBE">  
If you need to construct multiple buildings consecutively, managing site creation can become challenging due to the limit of a maximum of 10 sites on the map. Beginners can skip this section; it will be covered in later demo tutorials.  
</summary>  

In such cases, a `Site Manager` (`SitePlaner`) can be used to manage the creation progress of sites, breaking down multiple sites into single-site tasks to avoid logical issues caused by exceeding the site limit.  

### Site Manager  

The `SitePlaner` is constructed with a set of `SitePlan` instances. The parameters for `SitePlan` are as follows:  

| Parameter Name | Type     | Optional | Default Value | Description |  
|----------------|----------|----------|---------------|-------------|  
| `ref`          | `Point`  | No       | -             | Reference point. |  
| `dx`           | `int`    | No       | -             | X-axis offset relative to the reference point. |  
| `dy`           | `int`    | No       | -             | Y-axis offset relative to the reference point. |  
| `building_type`| `type`   | No       | -             | Type of building. |  

*For example, to create a `SitePlaner` with only one Tower:  

```python  
SP = SitePlaner(  
    SitePlan(Point(50, 50), 0, 0, StructureTower),  
)  
```  

### Obtaining the Site  

The `next` method of the `SitePlaner` class is used to get the `ConstructionSite` that needs to be built in the current tick. This function has no parameters and returns `ConstructionSite` or `None`. If all construction work is completed or canceled, it returns `None`; otherwise, it returns a site.  

```python  
from builtin import *  

SP = SitePlaner(  
    SitePlan(Point(50, 50), 0, 0, StructureTower),  
)  
CREEP = get.creep()  
BOX = get.box()  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    site = SP.next()  
    if st.site(site):  
        if CREEP.energy <= 0:  
            CREEP.fetch(BOX)  
        else:  
            CREEP.build(site)  
```  

<details>  
<summary style="color:#BEBEBE">  
Let's first construct a 3x3 area of Ramparts before building the Tower:  
</summary>  

```python  
from builtin import *  

P50 = Point(50, 50)  
SP = SitePlaner(  
    SitePlan(P50, -1, -1, StructureRampart),  
    SitePlan(P50, -1,  0, StructureRampart),  
    SitePlan(P50, -1,  1, StructureRampart),  
    SitePlan(P50,  0, -1, StructureRampart),  
    SitePlan(P50,  0,  0, StructureRampart),  
    SitePlan(P50,  0,  1, StructureRampart),  
    SitePlan(P50,  1, -1, StructureRampart),  
    SitePlan(P50,  1,  0, StructureRampart),  
    SitePlan(P50,  1,  1, StructureRampart),  
    SitePlan(P50,  0,  0, StructureTower),  
)  
CREEP = get.creep()  
BOX = get.box()  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    site = SP.next()  
    if st.site(site):  
        if CREEP.energy <= 0:  
            CREEP.fetch(BOX)  
        else:  
            CREEP.build(site)  
```  

*You can observe the execution in the game.  

</details>  

</details>  

### Compilation and Execution  

You are already familiar with the compilation and configuration process. If you need a refresher, refer to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code to JavaScript and save it to the corresponding location. If everything goes smoothly, you can click **Play Game** to see the result and receive a **Pass** popup.
