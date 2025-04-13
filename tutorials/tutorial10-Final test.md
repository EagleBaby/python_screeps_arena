# 10. Final Test

In the game corresponding to this tutorial section, there is a friendly `Spawn` and a `Source` at a distance of 2, as well as 3 enemy `Creep`s, which will arrive at your Spawn around tick 360. You need to create Creeps to defend against their attacks. The recipes are `MA`, `MH`, and `MR`:

I have outlined the `Idea` for you here. You can first try writing your own code:

* You start with 500 energy.
* Then you need to create your own offensive Creeps to defend against the enemies.

You can try it out first and then check my `Idea` and code.

<details>
<summary>
Idea 1: Development + Offense. Click to expand.
</summary>

Considering that you need a Worker to mine energy at the start, we create a `MCWWWW` (cost 500, 18 ticks) Worker to collect energy.

Since each tick gives 1 free energy, and 4W collects 8 energy per tick, we let it collect 24 energy and then bring it back.

Once the Spawn has this 50 energy, it creates a single Carry Creep to transfer energy between the Worker and the Spawn.

Then we create a powerful ranged unit `M5R5`, and when the enemies get close, we just pound them into the ground.

*"What time is it? Time to farm first!"*
```python
from builtin import *

SPAWN = get.spawn()
SOURCE = get.source()
ENEMIES = get.creeps(st.enemy)

WORKER = None
BRIDGE = None
RANGER = None


def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    global WORKER, BRIDGE, RANGER
    if not st.creep(WORKER):
        WORKER = SPAWN.create([MOVE, CARRY, WORK, WORK, WORK, WORK], "Worker1", True, TOP_RIGHT)
    if st.creep(WORKER) and not st.creep(BRIDGE):
        BRIDGE = SPAWN.create([CARRY], "Carry1", True, RIGHT)
    if not st.creep(RANGER):
        RANGER = SPAWN.create([MOVE, MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK], "Ranger0", True, LEFT)

    # Worker
    if st.creep(WORKER):
        if not st.creep(BRIDGE) and WORKER.energy >= 24:
            WORKER.deposit(SPAWN)
        else:
            WORKER.harvest(SOURCE)

    # Bridge
    if st.creep(BRIDGE):
        if BRIDGE.energy <= 0:
            BRIDGE.fetch(WORKER)
        else:
            BRIDGE.deposit(SPAWN)
    
    # Ranger
    if st.creep(RANGER):
        enemy = RANGER.closest(ENEMIES)
        if enemy and RANGER.distance(enemy) <= 20:
            RANGER.attack(enemy)
        else:
            RANGER.patrol([Point(40, 40), Point(40, 60)])
```

</details>

<details>
<summary>
Idea 2: Defense and Counterattack. Click to expand.
</summary>
The initial approach is the same as the previous idea, but instead of developing, we focus on building defenses and waiting for the enemy to come.

Use SitePlaner to create 3 defensive structures, and then create defensive units.

*"What I am good at is countering after the enemy strikes."*
```python
from builtin import *

SPAWN = get.spawn()
SOURCE = get.source()
ENEMIES = get.creeps(st.enemy)

SP = SitePlaner(
    SitePlan(SPAWN, 0, 0, StructureRampart),
    SitePlan(SPAWN, 0, -1, StructureRampart),
    SitePlan(SPAWN, 0, 1, StructureRampart),
)

WORKER = None
BRIDGE = None
DEF_A = None
DEF_B = None


def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    global WORKER, BRIDGE, DEF_A, DEF_B
    
    # ensure a site
    site = SP.next()
    
    
    # create new creeps
    if not st.creep(WORKER):
        WORKER = SPAWN.create([MOVE, CARRY, WORK, WORK, WORK, WORK], "Worker1", True, TOP_RIGHT)
    if st.creep(WORKER) and not st.creep(BRIDGE) and not site:
        BRIDGE = SPAWN.create([CARRY], "Carry1", True, RIGHT)
    if not st.creep(DEF_A) and st.creep(BRIDGE):
        DEF_A = SPAWN.create([RANGED_ATTACK, RANGED_ATTACK, ATTACK, ATTACK], "DefenderA", True, TOP)
    if not st.creep(DEF_B) and st.creep(BRIDGE):
        DEF_B = SPAWN.create([RANGED_ATTACK, RANGED_ATTACK, ATTACK, ATTACK], "DefenderB", True, BOTTOM)
        
    # Worker
    if st.creep(WORKER):
        if site and WORKER.energy >= 20:
            WORKER.build(site)
        else:
            WORKER.harvest(SOURCE)

    # Bridge
    if st.creep(BRIDGE):
        if BRIDGE.energy <= 0:
            BRIDGE.fetch(WORKER)
        else:
            BRIDGE.deposit(SPAWN)
    
    # Defenders
    defs = [DEF_A, DEF_B]
    enemy = SPAWN.closest(ENEMIES)
    for d in defs:
        if st.creep(d) and enemy:
            d.attack(enemy)
```

</details>

<details>
<summary>
Idea 3: Quick Attack. Click to expand.
</summary>

No initial production, directly create offensive units, break the walls first, then eliminate the enemies.

*"What? I have to wait for the enemy to attack!? Let me just mass troops and attack!"*

```python
from builtin import *

SPAWN = get.spawn()
SOURCE = get.source()
ENEMIES = get.creeps(st.enemy)
WALL = get.wall(6, 6)

WORRIER = None


def init(k: GlobalKnowledge):
    pass


def step(k: GlobalKnowledge):
    global WORRIER
    if not st.creep(WORRIER):
        WORRIER = SPAWN.create([MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK], "Worrier1", True, LEFT)
    # Worrier
    if not st.creep(WORRIER): return
    if WALL.exists:
        WORRIER.attack(WALL)
    else:
        enemy = WORRIER.closest(ENEMIES)
        if enemy: WORRIER.attack(enemy)
```

</details>

## Advanced: Logic Engine

The `engine.py` module is a logical extension tool for the Screeps game, providing a set of important logical toolkits. Compared to basic procedural logic design, it offers object-oriented design support and compiler support.

| Class Name       | Inherits From          | Description                                                                 |
|------------------|------------------------|-----------------------------------------------------------------------------|
| [`Stage`](#stage) | `_NamedNode`           | Provides basic state machine functionality, automatically manages state nodes through a metaclass (`StageMachineLogicMeta`), and switches states based on the return value of state methods. |
| [`Logic`](#logic) | `Stage`                | The base class for all logic, which can be executed in a scheduler and manages the entire state machine's operation through an event system and scheduler. |
| [`CreepLogic`](#creeplogic) | `Logic`           | The base class for creep logic, which adds basic properties and methods for creep logic on top of `Logic`, including automatic scheduling of creep spawn. |
| [`TeamLogic`](#teamlogic) | `Logic`            | The base class for creep team logic, which adds support for the `Mate` decorator on top of `Logic`, including resource calls for each mate. |

*Here, we mainly introduce CreepLogic.

### Stage（_NamedNode）State Machine

<details>
<summary>
This content is recommended for learning, but you can expand it based on your situation.
</summary>

The basic functionality of a state machine is automatically managed through a metaclass (`StageMachineLogicMeta`), and state transitions are achieved through the return values of state methods.

#### Initialization Function:
```python
def __init__(self, inst: any = None)
```

| Parameter Name   | Data Type | Default Value | Description                                                                 |
|------------------|-----------|---------------|-----------------------------------------------------------------------------|
| `inst`           | `any`     | `None`        | This parameter is set for backward compatibility. In state functions and the `onChanged` callback function, it is passed as the parameter `it`. |

#### Property Description:

The Stage class adds the following properties:

| Property Name   | Definition Type   | Data Type         | Description |
|------------------|-------------------|-------------------|-------------|
| `LIMIT`          | Class Property    | `int`             | Sets the recursion depth limit. |

Other properties are inherited from the parent class [\_NamedNode](#_namednode), including:
- `NAME`
- `_parent`
- `_children`

#### State Machine Function Description:
- **State Nodes**: Each state is a method (`function`), which must return the name of the next state (`str`). State method names cannot start with `_` and can accept up to 3 parameters (they can also have no parameters, as in the example of `initial_state`).
- **State Transition**: State transitions are achieved through the return value of the state method. For example, if the `stateA` method returns `"stateB"`, the state machine will switch to `stateB`.
- **Recursive Execution**: State methods marked with the `@recursive` decorator can be executed multiple times within the same tick, until a new state not decorated by it is returned. (However, note that this consumes the `LIMIT` count, and once it is exhausted, a warning is thrown, and the state machine's further recursion is forcibly terminated.)
- **Callback Methods**: After the state machine switches states, it calls the `onChanged` callback function, which users can override.

#### Example:
The following is a complete example showing how to define and use a state machine:
```python
class TrafficLight(Stage):
    NAME = "TrafficLight"
    LIMIT = 3  # Sets the recursion depth limit

    def _user_function(self):  # This will not be considered a state
        pass

    def initial_state(self, it, k, *children):  # If `it` and `k` are not used, parameters can be omitted
        # Initial state (since it is placed first)
        print("This is the initial state of the traffic light.")
        return "red"

    def red(self):  # If `it` and `k` are not used, parameters can be omitted
        print("Execution: Stop at red light.")
        return "green"  # Switch to the green state

    def green(self):  # If `it` and `k` are not used, parameters can be omitted
        print("Execution: Go at green light.")
        return "yellow"

    @recursive  # Recursive state transition
    def yellow(self):  # If `it` and `k` are not used, parameters can be omitted
        print("Execution: Caution at yellow light.")
        return "red"

    def onChanged(self, current, next_state, it, k):  # If `it` and `k` are not used, parameters can be omitted
        print(f"Callback: Switched from {current} to {next_state}")

# Create an instance
traffic_light = TrafficLight()

def step(k):
    traffic_light.handleStage()

# Run the game and observe the output:
#    [tick 1]This is the initial state of the traffic light.
#            Callback: Switched from initial_state to red
#    [tick 2]Execution: Stop at red light.
#            Callback: Switched from red to green
#    [tick 3]Execution: Go at green light.
#            Callback: Switched from green to yellow
#    [tick 4]Execution: Caution at yellow light.
#            Callback: Switched from yellow to red
#            Execution: Stop at red light.
#            Callback: Switched from red to green
#    [tick 5]Execution: Go at green light.
#            Callback: Switched from green to yellow
#    ...
```
</details>

### Logic（Stage）Base Logic Class
<details>
<summary>
This content can be skipped here, but you can expand it based on your situation.
</summary>
`Logic` is the base class for all logic, which, based on [`Stage`](#stage), can be executed in a scheduler and manages the entire state machine's operation through an event system and scheduler.

#### Properties

| Property Name   | Data Type         | Description                                                                 |
|------------------|-------------------|-----------------------------------------------------------------------------|
| `LOG`           | `bool`            | Whether to output state machine logs.                                      |
| `NAME`          | `str`             | Default name.                                                              |
| `PRIORITY`      | `int`             | Logic priority.                                                            |
| `alive`         | `bool`            | Instance's survival status.                                                |
| `uid`           | `int`             | Instance's unique identifier.                                              |
| `enabled`       | `bool`            | Whether the instance participates in the scheduler's operation cycle.      |
| `name`          | `str`             | Instance's name.                                                           |
| `inst`          | `any`             | Bound instance.                                                            |

#### Lifecycle Callbacks

| Method Name   | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `_check`      | Checks the instance's status.                                              |
| `_enter`      | Called when the instance enters the scheduler.                             |
| `_exit`       | Called when the instance exits the scheduler.                              |
| `_step`       | The main logic called every tick.                                          |

#### Event System

| Method Name   | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `listenFor`   | Listens for events.                                                        |
| `pushEvent`   | Pushes events.                                                             |
| `cancelListen` | Cancels listening for events.                                             |
| `schedule`    | Delays execution.                                                          |
| `cancelSchedule` | Cancels delayed execution.                                               |

#### Example
```python
class MyLogic(Logic):
    NAME = "MyLogic"
    LOG = True

    def initial_state(self, it, k):
        print("Logic initialization")
        return "state1"

    def state1(self, it, k):
        print("State 1")
        return "state2"

    @recursive
    def state2(self, it, k):
        print("State 2")
        return "state1"

    def onStep(self, it, k, *children):
        print("Execute step")

# Create an instance
my_logic = MyLogic()
```
</details>

### CreepLogic（Logic）Base Class for Creep Logic

`CreepLogic` is the base class for creep logic, which inherits from [`Logic`](#logic) and provides basic properties and methods for creep logic, including automatic scheduling of creep spawn.

#### Construction
The constructor of CreepLogic is relatively complex. You just need to know that there are 3 ways to construct it:
```python
# For example:
class WorkerLogic(CreepLogic):
    NAME = "worker"
    RECIPE = [WORK, MOVE]
```
First, the following 3 ways of reference are correct:
|Code Form|Description|
|---|---|
|`WorkerLogic`(*args)| Directly instantiate using the subclass, suitable for simple cases.|
|`CreepLogic`("`worker`", *args)| Instantiate using CreepLogic + the corresponding `NAME`, suitable for unified batch creation, and you don't need to worry about the order of subclass definition.|
|`Logic`("`worker`", *args)| Instantiate using Logic + the corresponding `NAME`. Since the constructor of CreepLogic is inherited from Logic, and the entire logic engine shares the same `NAME` namespace, the `NAME` of these classes and their subclasses cannot be repeated. If you prefer a unified writing style, you can write all instances of Logic and its subclasses as Logic("blah blah blah", ...).|

Then, regarding the parameters `*args`, there are 3 ways to pass parameters:

|What is passed to `*args`|Description|
|---|---|
|No parameters|Some subclasses of Logic do not require any parameters. You can implement custom logic in them, such as global control.|
|Creep|In some modes at the start, provide an existing Creep instead of a Spawn. However, without a Spawn, you cannot respawn.|
|Spawn|This allows automatic scheduling to create Creep from Spawn, which is the most commonly used.|
|Creep, Spawn|Note that it is Creep first, then Spawn, which is rare. If there is both an initial Creep and a Spawn, you can pass parameters like this. Even if you only provide an existing Creep at the start, you can later assign `.spawn` to it once the Spawn is created (if possible).|

#### Class Properties

| Property Name   | Data Type         | Default Value| Read-Only| Description                                                                 |
|------------------|-------------------|---|---|-----------------------------------------------------------------------------|
| `DRAW`          | `bool`            |`False`|×| Whether to draw creep information. If set to True, it will draw the current health value and name information above the creep.    |
| `LAYER`         | `int`             |`0`|×| The drawing layer of the creep. Effective when `DRAW` is activated, determining the drawing layer position, with higher layers covering the content of lower layers. |
| `LINK`          | `list[str]\|str`  |`None`|×| Creep logic link. This can be set to one or a group of any Logic and its subclass's NAME. When this CreepLogic is `first` instantiated, these Logics will be added to the scheduler, and it will be considered the `parent` of these Logics.                                                       |
| `ONCE`          | `bool`            |`False`|×| Whether to respawn after the creep dies. Requires SPAWN to be non-empty, otherwise respawning will fail.                    |
| `RECIPE`        | `list[str]`       |`[TOUGH]`|×| Creep recipe. See the parameter of the create function in Tutorial 4.                                                           |
| `OPTIMISE`      | `bool`            |`True`|×| Whether to automatically optimize the recipe. See the parameter of the create function in Tutorial 4.                                                   |
| `EXTENSION`     | `bool`            |`True`|×| Whether to allow the use of energy from other StructureExtensions. If set to False, you may not be able to create Creeps with more than 1000 energy.       |
| `DIRECTION`     | `int`             |`None`|×| The direction of creep birth. See the parameter of the create function in Tutorial 4.                                                       |


<details>
<summary>
Instance Properties
</summary>

| Property Name   | Data Type         | Default Value| Read-Only| Description                                                                 |
|------------------|-------------------|---|---|-----------------------------------------------------------------------------|
| `movable`        | `bool`            |`True`|√| Whether it can move. This is mainly used for TeamLogic. When a CreepLogic is bound to a TeamLogic, its movement will be disabled to coordinate movement within the TeamLogic.                                                       |
| `spawn`          | `StructureSpawn`  |`None`|×| Bound spawn.                                                               |
| `creep`          | `Creep`           |`None`|√| Bound creep. (Since it is used so frequently, there is a shorthand property `c` equivalent to `creep`)                                                       |
| `x`              | `int`             |-|√| The x-coordinate of the creep.                                             |
| `y`              | `int`             |-|√| The y-coordinate of the creep.                                             |
| `id`             | `str`             |-|√| The id of the creep.                                                       |
| `exists`         | `bool`            |-|√| Whether the creep exists.                                                  |
| `recipe`         | `list[str]`       |-|√| The creep recipe.                                                          |
| `partsVector`    | `PartsVector`     |-|√| The component vector of the recipe. See `proto.py` for details.                                                    |
| `cost`           | `int`            |-|√ | The cost of the recipe.                                                    |
| `grade`          | `int`             |-|√| The grade of the creep.                                                    |
| `ready`          | `bool`            |`False`|√| Whether the creep is ready.                                                |

</details>

#### Instance Methods

| Method Name   | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `link`        | Creates a specified CreepLogic based on one or a group of any Logic and its subclass's NAME. It passes its own SPAWN to the new instance, and both will form a parent-child relationship.                                               |
| `transform`   | Transforms into a new CreepLogic type with the specified NAME, passing down the values of CREPE and SPAWN attributes.                                                    |
| `onLoading`   | <i>Callback function that needs to be overridden by you.</i> Called after instance initialization is completed and automatically executed in the scheduler.                                                  |
| `onStart`     | <i>Callback function that needs to be overridden by you.</i> Called when the instance passes the check for the first time. Generally occurs when the bound creep object is successfully created, but in most cases, this call happens in a tick later than `onLoading`.                                            |
| `onStep`      | <i>Callback function that needs to be overridden by you.</i> The main logic called every tick, with the first call happening after `onStart` but within the same tick. It is only called when the creep exists.                                            |
| `onStop`      | <i>Callback function that needs to be overridden by you.</i> Called when the instance stops. Generally occurs after `alive` is set to false and the scheduler cleans it up.    




### TeamLogic（Logic）Base Class for Creep Team Logic


<details>
<summary>
This content can be skipped here, but you can expand it based on your situation.
</summary>

`TeamLogic` is the base class for creep team logic, which inherits from [`Logic`](#logic) and provides support for the `Mate` decorator, including resource calls for each mate.

#### Properties

| Property Name   | Data Type         | Default Value| Description                                                                 |
|------------------|-------------------|--|-----------------------------------------------------------------------------|
| `SEARCH`        | `bool`            |`True` | Whether to allow searching for existing same-type CreepLogic to automatically fill the Mate properties.         |  |
| `CREATE`        | `bool`            |`False`| Whether to allow automatically creating CreepLogic instances to fill the Mate properties.                  |

#### Mate (Teammate)

`Mate` can only be assigned within `TeamLogic`; otherwise, it may cause errors at compile time or runtime.

#### Mate: Initialization
During initialization, only a `str` can be passed or it can be omitted, indicating that there is such a teammate (Mate).

#### Mate: Assignment
Later, in the instance, it can accept 3 types of data:
* `str`, indicating that you want to change the NAME of the corresponding CreepLogic type.
* A `CreepLogic` instance, indicating that you want to bind an instance to the teammate.
* A `Creep` instance, which will assign the CreepLogic instance bound inside the Creep to the teammate. If the Creep is not bound to a CreepLogic, an exception will be thrown.

*After assigning a new member, the previously bound CreepLogic instance will be released.

#### Mate: Access
When the instance executes a method, regardless of the situation, the value read from the mate property is always `Creep` | `None`. You can call any method of the creep after determining that it is not empty, and use it like a normal creep.


#### Example
```python
class MyTeamLogic(TeamLogic):
    NAME = "MyTeam"

    mate1 = Mate("CreepLogic1")
    mate2 = Mate("CreepLogic2")

    def onStep(self, it, k, *children):
        print("Team logic execution")
        if st.creep(self.mate1):
            print("Mate1 exists")
        if st.creep(self.mate2):
            print("Mate2 exists")
```
</details>

### Creep Logic Refactoring
Let's take the most complex `defense and counterattack` code as an example and refactor it using CreepLogic.

Background code:
```python
from builtin import *

SPAWN = get.spawn()
SOURCE = get.source()
ENEMIES = get.creeps(st.enemy)

SP = SitePlaner(
    SitePlan(SPAWN, 0, 0, StructureRampart),
    SitePlan(SPAWN, 0, -1, StructureRampart),
    SitePlan(SPAWN, 0, 1, StructureRampart),
)
```
First, analyze the Worker. It is clear that it has 2 states:
* Building phase, which continues with the logic of `mining` + `building` until the construction task is completed.
* Mining phase, which continues with the `mining` work.

*When switching states, the CreepLogic for Bridge can be created.*

So it can be written like this:
```python
class WorkerType(CreepLogic):
    NAME = "worker"
    RECIPE = [MOVE, CARRY, WORK, WORK, WORK, WORK]

    # This is the first state; the parameters are up to you, you can define it as def building(self): as well.
    def building(self, c:Creep, k:GlobalKnowledge, *childern:Logic):
        if c.energy < 20:
            # If energy is less than 20, go to mine
            c.harvest(SOURCE)
        else:
            site = SP.next()
            
            if st.na(site):
                # Equivalent to if (site === undefined && site === null)
                return "harvesting"  # Switch state
            
            c.build(site)
    
    # This is the second state; parameters are up to you.
    def harvesting(self, c):
        c.harvest(SOURCE)

    # When switching states, create the CreepLogic for Bridge; parameters are up to you, the full parameters are as follows:
    def onChanged(self, src:str, dst:str, k:GlobalKnowledge, *childern:Logic):
        # Since there is only one state transition, we don't check src and dst here
        self.link("bridge")  # Create CreepLogic: NAME='bridge'


class BridgeType(CreepLogic):
    NAME = "bridge"
    RECIPE = [CARRY]
    DIRECTION = RIGHT

    # Parameters are up to you
    def onStep(self, c:Creep, k:GlobalKnowledge, *childern:Logic):
        work_cl:WorkerType = self.parent

        if not work_cl.ready:
            return

        if c.energy:
            c.deposit(SPAWN)
        else:
            c.fetch(work_cl.c)  # Equivalent to work_cl.creep
```

Next, define two types of `Defender`s. Except for the `DIRECTION` being different, the other logic is the same: they will search for enemies and attack the nearest one.


<details>
<summary>
You can try it yourself first and then check the reference result.
</summary>

```python
class DefenderA(CreepLogic):
    NAME = "defenderA"
    RECIPE = [RANGED_ATTACK, ATTACK, RANGED_ATTACK, ATTACK]
    DIRECTION = TOP

    # Parameters are optional
    def onStep(self, c:Creep):
        e = c.closest(ENEMIES)

        if st.na(e):
            return

        c.attack(e)
            

class DefenderB(DefenderA):
    DIRECTION = BOTTOM
```




You can use the `autoAttack` method of the Creep instance, which is high-consumption and automatically searches for enemies, returning the `locked target` and the `target attacked in the current tick`. The parameters are as follows:
|Parameter|Type|Default Value|Description|
|----|---|---|---|
|view_range|int|`50`|The search range for enemies; enemies beyond this distance will be ignored|
|wall|bool|`True`|Whether to include `StructureWall` in the considered targets. Setting it to `False` avoids Creeps automatically attacking friendly-built Walls (any Wall is neutral)|

|Return Value|Type|Description|
|----|---|---|
|Locked Enemy|`GameObject` \| `None` | Whether there is an enemy within the range determined by `view_range`. In most cases, only enemy attack Creeps will be considered.|
|Target Attacked in the Current Tick|`GameObject` \| `None` | The target that the Creep will attack in the current tick. It can be non-Creep. Only when the target is within attack range, the return value is not `None`.|

```python
class DefenderA(CreepLogic):
    NAME = "defenderA"
    RECIPE = [RANGED_ATTACK, ATTACK, RANGED_ATTACK, ATTACK]
    DIRECTION = TOP

    # Parameters are optional
    def onStep(self, c:Creep):
        c.autoAttack(3)
            

class DefenderB(DefenderA):
    DIRECTION = BOTTOM
```

</details>

Finally, we create CreepLogic in `init` and display the production queue in `step`.

```python
def init(k: GlobalKnowledge):
    CreepLogic("builder", SPAWN)
    CreepLogic("defenderA", SPAWN)
    CreepLogic("defenderB", SPAWN)

    # Since the builder is added to the queue first, it will default to trying to create the builder first, consuming energy.
    # Therefore, when trying to create the defender, it will fail due to insufficient energy.
    # If you want to explicitly create the builder first and then the defender, consider setting the LINK attribute of the builder to ["defenderA", "defenderB"]
    # Child instances will be skipped before the parent instance is ready (ready).


def step(k: GlobalKnowledge):
    CreepLogic.showQueue()  # Display the production queue
```

# Conclusion

The tutorial section comes to an end. Everyone can now try the PVP arena. It is recommended to start with the <span style="color:#8AAAFA">blue basic field (CTF)</span> or <span style="color:#8AAA8A">green basic field (SAS)</span>. The red field is slightly more difficult and time-consuming, so it is recommended to consider it after becoming familiar with any arena. (I started with the green field back in the day)

If you are not confident in the PVP arena, we also have demos for each basic arena to help you get started.

