
This tutorial will teach you basic object acquisition and movement commands.

## 2. Object Acquisition and Movement

The in-game tutorial 2-`SimpleMove` provides two game objects in the game scene: one Creep and one Flag. It requires us to:
1. Acquire the Creep and Flag objects
2. Control the Creep object to move to the Flag object
[!img]

### Acquiring Objects
<details>
<summary>
Let’s first look at the official JavaScript method for acquiring objects. If you’re not interested in JavaScript, feel free to skip this section.
</summary>

```javascript
import { getObjectsByPrototype } from 'game/utils';
import { Creep } from 'game/prototypes';

export function loop() {
    var creeps = getObjectsByPrototype(Creep);
}
```

*The creeps obtained by this method are inconsistent with those obtained on the Python side and cannot be used interchangeably. The JavaScript side is suitable for the official set of APIs.*
</details>

On the `Python` side, we use the static class `get` to acquire any in-game objects.

The `get` class provides two methods for each type of game object to acquire one or a group of such objects. Taking the acquisition of Creeps as an example:

|Function Name|Parameter|Return Value|Description|
|-----|-----|-----|-----|
|get.creep|fn_combo: (Default value None) list\|tuple\|set\|function\|None| Creep\|None|Acquires one Creep object that meets the conditions. Returns None if no such Creep exists|
|get.creeps|fn_combo: (Default value None) list\|tuple\|set\|function\|None| list[Creep]|Acquires a group of Creep objects that meet the conditions. Returns an empty list if no such Creeps exist|

*The `fn_combo` parameter accepts a filtering function in the form of `fn(item)->bool`. In the `st` module, we provide a set of pre-defined checking functions, and you can also manually write checking functions. For example:
```python
# Acquire a friendly object
creep = get.creep(st.my)
# Equivalent to
creep = get.creep(lambda it: it.my)
```
The `my` attribute in the above example is a read-only boolean attribute of the `Creep` class, which can be used to determine whether the creep is a friend or foe. For more attributes of `Creep`, refer to `proto`.

<details>
<summary>
Next, we introduce the container combination of filtering functions. If you are a beginner, you can skip this part.
</summary>

In addition to passing a simple checking function, you can also use convenient combined checking functions. The `fn_combo` parameter specifies three types of containers:
|Container Type|Container Capacity|Container Function|
|-----|-----|-----|
|list|>=1|Represents the logical relationship `OR`|
|tuple|>=1|Represents the logical relationship `AND`|
|set|==1|Represents the logical relationship `NOT`|

For example, `st` provides `st.my` to determine whether an object is friendly and `st.movable` to determine whether an object is movable. To determine whether an object is a `friendly movable object`, you can write:
```python
creep = get.creep( (st.my, st.movable) )
# Equivalent to
creep = get.creep(lambda it: it.my and st.movable(it))
```
</details>

Back to the `main.py` file, to acquire in-game object instances in this tutorial, you can write:
```python
from builtin import *

CREEP = get.creep()
FLAG = get.flag()

def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    pass
```

### Executing Movement Commands
The movement command is an instance method of the `Creep` class, constructed as follows:

|Function Name|Parameter 1                |Parameter 2                                |Return Value|Description                                               |
|-----|--------------------|------------------------------------|-----|--------------------------------------------------|
|move|target: Point\|int|options: (Default value None) UsrObject\|None|int|Moves the creep to the target object. A return value of 0 indicates success; a value less than 0 indicates a corresponding error code. For details, see `const.py`|

*The `target` parameter can be a `Point` object indicating where to move. It can also be a directional integer indicating which direction to move in.
<details>
<summary>
The `options` parameter is a <b>UsrObject</b> object that represents some optional parameters. If you are a beginner, you can choose to skip this part.
</summary>

|Property Name|Type|Description|
|----------------|---------------|----------------------------------------------------------------------|
|`ignore`|array|An array of objects not considered obstacles during the search|
|`costMatrix`|CostMatrix|Custom navigation cost data|
|`plainCost`|number|The cost of moving on flat terrain, default value is 2|
|`swampCost`|number|The cost of moving on swamp terrain, default value is 10|
|`maxOps`|number|The maximum number of pathfinding operations allowed, default value is 50000|
|`maxCost`|number|The maximum allowable cost for the returned path, default value is `Infinity`|
|`heuristicWeight`|number|The weight applied in the A* algorithm formula `F = G + weight * H`, default value is 1.2|

Please note that if you use custom `options`, the following features will be disabled:

|Feature|Description|
|--------------|---------------------------------------------------------|
|`Collision Detection`|The native pathfinding algorithm will ignore the impact of other game objects, such as failing to recognize whether there are `WALL`s or `CREEP`s on the path forward|
|`EFFECT Monitoring`|The native pathfinding algorithm cannot handle `EFFECT`s under CAC mode and requires manual implementation|

Of course, the program provides two default values that you can use directly without constructing your own.

|Global Variable|Description|
|-----|--------------------------|
|`DEFAULT_MOTION`|Default movement options, equivalent to None|
|`SWAMP_MOTION`|Swamp movement options, which, when enabled, cause the target to ignore the impact of swamp terrain|

Using these two default values will not interfere with the aforementioned features.
</details>

### Final Code & Compilation and Execution
Since all game objects inherit from Point, you can pass the instance of the flag, allowing you to move directly to the flag.
```python
from builtin import *

CREEP = get.creep()
FLAG = get.flag()

def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    CREEP.move(FLAG)
```

Configure `build.py` by first opening the file for Tutorial 1 in the game using the `External Editor` (click the filename above `Play Game`). In the opened VSCode, right-click `main.mjs` to get its file path, then paste it into the `config.target` value in `build.py` (uncomment it if necessary).

Set the language in `config.language` to `'en'` (English output).

Run `build.py` in PyCharm to transpile Python to JavaScript. If successful, click `Play Game` to see the result and receive a `Pass` popup.
