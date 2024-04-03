## Tutorial 8: Harvest energy

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Do not forget to set the export mjs file path.
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-harvest_energy/main.mjs
```

&nbsp;&nbsp;&nbsp;&nbsp;Now i will write python code by sample js code:
```python
spawn = get.spawn()
source = get.source()


def loop():
    creep = get.creep()

    if get.energy(creep, True) < 100:  # percent  < 100%
        put.harvest(creep, source)
    else:
        put.deposit(creep, spawn)

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial``` and run the game to get <font color=#88EC80>PASSED</font>.

#### ---------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;You can not use `put.carry` because the 'target' param do not support Source.

&nbsp;&nbsp;&nbsp;&nbsp;Sometimes, you can try `put.intermit` instead of `put.deposit`. This may do well job in some case :)

```python
spawn = get.spawn()
source = get.source()


def loop():
    creep = get.creep()
    
    if get.energy(creep, True) < 100 and not get.intermited(creep, -1):  # percent < 100% and not really did intermit in last tick
        put.harvest(creep, source)
    else:
        put.intermit(creep, spawn)

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` again and run the game to get <font color=#88EC80>PASSED</font>.
