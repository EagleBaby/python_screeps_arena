
## 4. Composition of Creep (Body Parts)  

In this tutorial, you will learn how to distinguish between Creeps based on their **Body Parts**.  

### Body Parts  
Body Parts are a term from the official tutorial. I prefer to refer to them as **Parts**.  

Each Creep consists of an **ordered** set of **Parts**, which come in several types. The more Parts of the same type, the stronger the corresponding ability.  

### Part Types  

Each individual Part provides **100 hitsMax**, but their functions differ:  

| Part Name | Action Category | Price (Energy) | Description                                                                                                                                                                                                                               |  
|-----------|-----------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| MOVE      | Other           | 50/Part        | Each Part reduces the Creep's `fatigue` by `2` each tick, but not below `0`. If a Creep's `fatigue` is not `0`, it cannot move that tick. Other non-MOVE Parts generate `fatigue` during movement, which will be explained in Tutorial 6. |  
| CARRY     | Resource        | 50/Part        | Each Part provides `50` capacity for any type of resource. When this Part holds any non-zero resource, it generates `fatigue` during movement like other Parts; otherwise, it does not.                                                   |  
| ATTACK    | Melee           | 80/Part        | Each Part provides `30` points of melee attack power with an attack range of `1`.                                                                                                                                                         |  
| RANGED_ATTACK | Ranged | 150/Part | Each Part provides `10` points of ranged attack power with an attack range of `3`, or causes AOE damage to enemies within a radius of up to `3` centered on the Creep. See the table below.                                               |  
| HEAL      | Melee/Ranged    | 250/Part       | Each Part provides `12` points of melee healing power with a healing range of `1`, or `4` points of ranged healing with a range of `3`.                                                                                                   |  
| WORK      | Melee/Ranged    | 100/Part       | Each Part provides `5` construction progress per tick for a `ConstructionSite` with a working range of `3`, or extracts `2` energy per tick from a `Source` with a harvesting range of `1`.                                               |  
| TOUGH     | Other           | 10/Part        | No special function; it only acts as a damage-absorbing component and generates `fatigue` during movement like other Parts.                                                                                                               |  

The RANGED_ATTACK Part can cause AOE damage within a maximum distance of `3`. The damage value depends on the distance to the target:  

| Distance to Target | Damage Value |  
|--------------------|--------------|  
| 1                  | 10           |  
| 2                  | 4            |  
| 3                  | 1            |  

### Part Order  

In non-combat situations, the order of a Creep's Parts does not affect its functionality.  

However, when taking damage, Parts at the front of the list lose `hits` first. When a single Part's `hits` reach `0`, its function becomes disabled. When healing, the order is reversed, with Parts on the right side of the list (with `hits` not at `100`) being healed first.  

For example:  
```python  
recipe0 = [ATTACK, MOVE]  
recipe1 = [MOVE, ATTACK]  
```  
Both Creeps have `200 hitsMax` and function as **mobile melee units**.  

When taking `90` damage, the former's `ATTACK` Part has `10 hits` remaining; the latter's `MOVE` Part has `10 hits` remaining. Since the remaining hits (10) are greater than `0`, their functions remain operational.  

When taking another `10` damage, the former's `ATTACK` Part hits `0 hits`, losing attack capability; the latter's `MOVE` Part hits `0 hits`, losing mobility.  

### Filtering and Inspecting Creep Capabilities  

As you might have guessed from previous tutorials, we can filter Creeps with different capabilities using `st`.  

In this tutorial, Tutorial 4 - **Body Parts** provides three friendly objects (as below) and one enemy object. Requires us to fully leverage the strengths of each Creep, achieving victory against stronger foes through tactical superiority and eliminating the target. 

| Friendly Creep | Part Recipe |  
|----------------|-------------|  
| Melee Creep    | [`ATTACK`, `MOVE`] |  
| Ranged Creep   | [`RANGED_ATTACK`, `MOVE`] |  
| Healer Creep   | [`HEAL`, `MOVE`] |  

You can use `st.melee`, `st.ranged`, and `st.healable` to obtain the corresponding Creeps.  
```python  
from builtin import *  

WORRIER = get.creep( (st.friend, st.melee) )  
RANGER = get.creep( (st.friend, st.ranged) )  
HEALER = get.creep( (st.friend, st.healable) )  
ENEMY = get.creep(st.enemy)  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    pass  
```  

You can then inspect the capabilities of these Creeps. Taking `WORRIER` as an example:  
```python  
def init(k: GlobalKnowledge):  
    print("Simple Info:", WORRIER.info)  
    print("Detailed Info:", WORRIER.info.details())  
```  

<details>  
<summary>Expand to view output</summary>  

```
simple: CreepInfo(name: c2, simple-recipe: M1A1, grade: 8, attackPower: 30, healPower: 0)
detail: CreepInfo Details:
	- Name: c2
	- Recipe: AM
	- Grade: 8 (Swamp Ratio: 34.69%)
	- Cost: 130 Pt
	- Effect: 6.15%
	- PartsVector: 1,0,0,1,0,0,0
	- DynamicPartsVector: 1,0,0,1,0,0,0
	- AttackPower: 30 (Dynamic: 30)
	- MeleePower: 30 (Dynamic: 30)
	- RangedPower: 0 (Dynamic: 0)
	- HealPower: 0 (Dynamic: 0)
	- MotionAbility: 20% (Dynamic: 20%)
	- ArmorRatio: 0% (Dynamic: 0%)
	- Characteristics: melee: ✔, ranged: ✘, heal: ✘, work: ✘, storable: ✘
```  
**Explanation of Inspection Results:**  

| Property Name | Value Range | Example Value | Description |  
|---------------|-------------|---------------|-------------|  
| Name | str | "c2" | The name of the Creep, where `c` indicates the type is Creep, and `2` represents its `id` attribute. |  
| Simplified Recipe | str | "M1A1" | The Creep's Part Recipe, where `M` stands for `MOVE`, `A` stands for `ATTACK`, and `1` indicates the quantity is 1. Displayed unordered. |  
| Swamp Ratio | float | 34.69% | The proportion of swamp terrain on the current map. The higher this value, the higher the evaluation of the `MOVE` Part. |  
| Grade | int | 8 | The Creep's grade; a higher grade indicates stronger capabilities. |  
| Attack Power | int | 30 | The Creep's attack power, the sum of melee and ranged attack power. |  
| Heal Power | int | 0 | The Creep's healing power, the sum of melee healing power. |  
| Recipe | str | "AM" | The Creep's Part Recipe, where `A` stands for `ATTACK`, `M` stands for `MOVE`, displayed in detailed order. |  
| Cost | int | 130 | The total cost of the Creep's Parts, in units of Pt. |  
| Efficiency | float | 6.15% | The ratio of the Creep's grade to its cost; a higher value indicates better cost-effectiveness. |  
| Parts Vector | str | "1,0,0,1,0,0,0" | The Creep's Part Vector, displayed in the order of `MOVE`, `CARRY`, `ATTACK`, `RANGED_ATTACK`, `HEAL`, `WORK`, `TOUGH`. |  
| Dynamic Parts Vector | str | "1,0,0,1,0,0,0" | The Creep's Dynamic Part Vector, displayed in the order of `MOVE`, `CARRY`, `ATTACK`, `RANGED_ATTACK`, `HEAL`, `WORK`, `TOUGH`. |  
| Movement Rate | float | 20% | The progress per tick required for the Creep to move one grid in swamp terrain. For example, `20%` means completing `20%` of the progress per tick. |  
| Armor Ratio | float | 0% | The Creep's armor ratio, the proportion of `TOUGH` Parts among all Parts. |  
| Characteristics | str | "Melee: ✔, Ranged: ✘, Heal: ✘, Work: ✘, Storage: ✘" | The Creep's characteristics, where `✔` indicates the Creep has the characteristic, and `✘` indicates it does not. |
</details>  

### Command Conflicts  

As you can see, each Part has an **Action Category** attribute. There are three main categories: **Resource**, **Melee**, and **Ranged**.  

A Creep cannot execute two commands of the same category in a single tick. The later command will override the previous one.  

For example:  
```python  
CREEP = get.creep( (st.melee, st.healable) )  # Assume it is [MOVE, ATTACK, HEAL]  
```  

If you issue an attack command to this CREEP, you cannot issue a melee healing command to it in the same tick, as it will override the previous attack command.  

### Issuing Heal Commands  
The `heal` command is an instance method of the `Creep` class, structured as follows:

| Parameter Name | Type                                | Optional | Default Value | Description                                                                 |
|----------------|-----------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `target`       | `Creep`                           | No       | -             | An instance of `Creep`, which can be itself, indicating **melee healing** of the creep. |
| `options`      | `MotionOptions` \| `bool` \| `None` | Yes      | `True`        | Movement control parameters. If `False` is passed, movement is disabled. Passing `True` or a `MotionOptions` object will cause the creep to automatically approach the target if the distance is insufficient. |

| Return Type | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `int`       | Returns `0` on success, and a negative error code on failure. See `const.py` for details. |

*This command automatically selects between **melee healing** and **ranged healing** based on the distance to the target. If you prefer to use the more powerful **melee healing** or maintain distance for **ranged healing** (e.g., to avoid **command conflicts**), disable **automatic movement** by passing `False` for the `move` parameter and issue movement commands manually.*
### Final Code & Compilation  

<details>  
<summary>By now, the final code should be clear to you. Expand to view the final code.</summary>  

```python  
from builtin import *  

WORRIER = get.creep( (st.friend, st.melee) )  
RANGER = get.creep( (st.friend, st.ranged) )  
HEALER = get.creep( (st.friend, st.healable) )  
ENEMY = get.creep(st.enemy)  

def init(k: GlobalKnowledge):  
    pass  

def step(k: GlobalKnowledge):  
    # Issue attack commands  
    WORRIER.attack(ENEMY)  
    RANGER.attack(ENEMY)  
    # Issue heal commands  
    HEALER.heal(WORRIER, False)  
    HEALER.move(WORRIER)  # Issue movement command manually  
```  

</details>  

You should be familiar with the compilation setup process by now. If you have forgotten, you can refer back to Tutorials 1 and 2.  

Run `build.py` in PyCharm to transpile the Python code into JavaScript and save it to the appropriate location. If everything goes smoothly, you can click **Play Game** to see the result and receive a **Pass** popup.
