## Tutorial 10: Final test

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Do not forget to set the export mjs file path.
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-final_test/
```

&nbsp;&nbsp;&nbsp;&nbsp;It's the last tutorial. So i'd like to teach you a advanced skill. But at here,i will provided a very simple code to solve it first:
```python
spawn, source = get.spawn(), get.source()
enemies = get.enemies(st.creep)


def loop():
    worker = get.friend(st.workable)
    warrior = get.friend(st.atkable)

    if not worker:
        put.create(spawn, [CARRY, CARRY, WORK, WORK, MOVE, MOVE, MOVE, MOVE])
    else:
        if get.energy(worker, True) == 100:
            put.deposit(worker, spawn)
        else:
            put.harvest(worker, source)

    if not warrior:
        put.create(spawn, [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK])
    else:
        put.attack(warrior, get.closest(warrior, enemies))

```

&nbsp;&nbsp;&nbsp;&nbsp;You can add `ATTACK` and `RANGED_ATTACK` on same creep:
```python
    if not warrior:
        put.create(spawn, [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, RANGED_ATTACK, RANGED_ATTACK])
    else:
        enemy = get.closest(warrior, enemies)
        put.attack(warrior, enemy, False)
        put.move(warrior, enemy)  # We want attack enemy with both melee and ranged. So we need close to enemy
```

&nbsp;&nbsp;&nbsp;&nbsp;You can even add `HEAL` into our warrior:
```python
    if not warrior:
        put.create(spawn, [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, RANGED_ATTACK, RANGED_ATTACK, HEAL])
    else:
        enemy = get.closest(warrior, enemies)
        put.attack(warrior, enemy, False)
        put.move(warrior, enemy)  # We want attack enemy with both melee and ranged. So we need close to enemy

        if not get.meleed(warrior):  # heal is contrast to melee  # rangedHeal is contrast to ranged(but heal self is not ranged)
            put.heal(warrior, warrior)
```

&nbsp;&nbsp;&nbsp;&nbsp;You can easily code the logic by nested-if-block to win Tutorial PVE. But it's much tough to code elegantly to win PVP if you still use nested-if-block. Especially case in higher rank battle, plenty of creeps to control and complex creep's logic.

&nbsp;&nbsp;&nbsp;&nbsp;So it's time to introduce 'FSM'(Finite State Machine). FSM is integrated into std.py, called `Stage`. Now, let me show you how to deal warrior's logic with FSM:

![img](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/warrior_fsm.png)


```python
...  # other code

def heal_and_follow(s, t):
    put.heal(s.unit, s.unit)
    put.follow(s.unit, s.closest_enemy, 5)


warrior_stage = ut.Stage([
    ['attack', 'heal', lambda s, t: s.hp <= 95, heal_and_follow],  # attack: if hp <= 95%, heal self
    ['attack', 'attack', lambda s, t: put.attack(s.unit, s.closest_enemy)],  # attack: in other case, just keep attack

    ['heal', 'attack', lambda s, t: s.hp == 100, lambda s, t: put.attack(s.unit, s.closest_enemy)],  # heal: if hp full, goto attack
    ['heal', 'heal', heal_and_follow],  # heal: in other case, keep dist and heal self
])

# add stage update-fn  (auto update in s.next())
warrior_stage.asu('hp', lambda s: get.health(s.unit, True))
warrior_stage.asu('closest_enemy', lambda s: get.closest(spawn, enemies))

def loop():
    ...  # other code

    if not warrior:
        put.create(spawn, [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, HEAL])
    else:
        if not warrior.s:
            warrior.s = warrior_stage
            warrior.s.unit = warrior

        print(warrior.s.next())

```


