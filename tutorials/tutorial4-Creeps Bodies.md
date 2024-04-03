## Tutorial 4: Creeps Bodies

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Do not forget to set the export mjs file path:
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-creeps_bodies/main.mjs
```

&nbsp;&nbsp;&nbsp;&nbsp;The js tutorial tell us that diffrent ```body part``` make your creep have diffrent ability. And more same type body parts the creep has, the more effect of that body part the creep has.

&nbsp;&nbsp;&nbsp;&nbsp;Now i will write python code by sample js code:
```python
def loop():
    creeps = get.friends(st.creep)
    enemy = get.enemy(st.creep)

    for creep in creeps:
        if st.melee(creep):
            put.attack(creep, enemy)
        if st.ranged(creep):
            put.attack(creep, enemy)
        if st.healable(creep):
            damaged = get.friend(lambda obj: obj.hits < obj.hitsMax)
            if damaged:
                put.heal(creep, damaged)

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial: Simple move``` and run the game to get <font color=#88EC80>PASSED</font>.

#### ---------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;I think you have noticed that the we use 'put.attack' to replace 'attack' and 'rangedAttack'. This is because ```put.attack``` will auto select the way to attack. 

&nbsp;&nbsp;&nbsp;&nbsp;If you want to manmal this, you just set ```put.attack(creep, enemy, False)```, and use  ```put.move(creep, enemy)```. The creep with 'ATTACK' will melee enemy if distance(creep, enemy) <= 1. 

&nbsp;&nbsp;&nbsp;&nbsp;Another thing you noticed that our creep with 'HEAL' only use 'rangedHeal' not 'heal'(heal amount is 12 but rangedHeal amount is 4). If you want to `heal` instead `rangedHeal`, just like 'put.attack' and move to your damaged.

&nbsp;&nbsp;&nbsp;&nbsp;Anyway, i'd like to simplify the code into below:
```python
def loop():
    creeps = get.friends(st.creep)
    enemy = get.enemy(st.creep)

    for creep in creeps:
        if st.atkable(creep):
            put.attack(creep, enemy)
        if st.healable(creep):
            damaged = get.find(creeps, st.damaged)
            if damaged:
                put.heal(creep, damaged)
                put.move(creep, damaged)

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` again and run the game to get <font color=#88EC80>PASSED</font>.
