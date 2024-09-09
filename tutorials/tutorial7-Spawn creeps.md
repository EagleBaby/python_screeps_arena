## Tutorial 7: Spawn creeps

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;In this tutorial, we need use ```tutorial-flag```, we need change the define to ```1``` in ```src/config.py``` to enable it(Do not forget to set the export mjs file path.)
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 1
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-spawn_creeps/
```

&nbsp;&nbsp;&nbsp;&nbsp;Now i will write python code by sample js code:
```python
spawn = get.spawn()
creep1, creep2 = None, None
flags = get.flags()


def loop():
    global creep1, creep2
    if not creep1:
        res = put.create(spawn, [MOVE])
        if st.creep(res):
            creep1 = res
    else:
        put.move(creep1, flags[0])

    if not creep2:
        res = put.create(spawn, [MOVE])
        if st.creep(res):
            creep2 = res
    else:
        put.move(creep2, flags[1])

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial``` and run the game to get <font color=#88EC80>PASSED</font>.

#### ---------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;You can use get.creeps instead of creep1, creep2(this will take more cpu cost.):

```python
spawn = get.spawn()
flags = get.flags()


def loop():
    creeps = get.creeps()
    put.create(spawn, [MOVE])
    if len(creeps) >= 1:  # can not use 'if creeps:', because js think [] is True.
        put.move(creeps[0], flags[0])

    if len(creeps) >= 2:
        put.move(creeps[1], flags[1])

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` again and run the game to get <font color=#88EC80>PASSED</font>.
