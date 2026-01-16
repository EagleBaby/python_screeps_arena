## Behavior Tree

- [Behavior Nodes](#behavior-nodes)
- [Composite Nodes](#composite-nodes)

This tutorial will introduce how to use the behavior tree part of the `behavior machine`. However, strictly speaking, you don't need to learn this chapter at all, as you can play the game smoothly with just the state machine.

### Behavior Nodes

`CreepLogic` inherits from the `Stage` class, so it has `behavior machine` characteristics. Its core consists of state nodes, where each state node is a method that switches states through return values. The return type determines the execution method:

* Return a string of the next state to switch states.
* Return a `behavior result` to switch to the next behavior state.

| Behavior Result | Equivalent Value | Description |
|----------------|------------------|-------------|
| `SUCCESS`      | `True`           | Success, switch to the next behavior state |
| `FAILURE`      | `False`          | Failure, backtrack to the previous key node |
| `RUNNING`      | `None`           | Running, indicates the current state is not yet finished |

When returning `SUCCESS`, it switches to the next behavior state. By decorating that node with `@behavior`, you can register it as the next node;
If a node returning a `behavior result` is not decorated, it will try to return to the previous `composite node` on the stack or the root node of the tree, otherwise a warning will be generated and the state will remain unchanged.

```python
class Demo(Logic):
    NAME = "Demo"

    def start(self):
        return "run"

    @behavior("idle")
    def run(self):
        return SUCCESS

    def idle(self):
        return SUCCESS

```

<p align="center">
<img src="pic/Behavior_image1.png" alt="Demo flowchart">
</p>

Execution order: start -> (run -> idle) -> (run -> idle) - ...

**Note**: If a node in the behavior tree returns a string, the behavior tree context will be lost.

### Composite Nodes

Behavior nodes can be followed by a composite node (yes, it can only follow behavior nodes). There are 3 types of composite nodes:

| Composite Node | Description |
|---------------|-------------|
| `@sequence`   | Executes child nodes sequentially until one child node returns `FAILURE`, or all child nodes return `SUCCESS` |
| `@selector`   | Executes child nodes sequentially until one child node returns `SUCCESS`, or all child nodes return `FAILURE` |
| `@parallel`   | Executes child nodes in parallel, equivalent to `selector`, but child nodes returning `RUNNING` will not block subsequent node execution |

```python
class Demo(Logic):
    """
    Wait for the opponent's first valid unit.
    ① If it contains WORK, respond with an attack unit
    ② If it is an attack unit, respond with 2 attack units
    ③ If no unit appears for 200 ticks, switch to idle state
    """
    NAME = "Demo"

    def onLoading(self):
        self.ec_trigger = Component(lambda :ESPAWN.creep).add(Trigger())

    @parallel("timeout_200", "wait_enemy")
    def start(self):
        return SUCCESS

    def timeout_200(self):
        if know.now >= 200: return "idle"

    @selector("is_worker", "is_attacker")
    def wait_enemy(self):
        return self.ec_trigger()

    def is_worker(self):
        if st.workable(ESPAWN.creep):
            self.enlist_count = 1
            return "enlist"
        return FAILURE

    def is_attacker(self):
        if st.atkable(ESPAWN.creep):
            self.enlist_count = 2
            return "enlist"
        return FAILURE

    def enlist(self):
        for i in range(self.enlist_count):
            Logic("Soldier", SPAWN)
        return "idle"

    def idle(self):
        pass
```

<p align="center">
<img src="pic/Behavior_image2.png" alt="Demo flowchart">
</p>
