## Tutorial 8: Harvest energy

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Do not forget to set the export mjs file path.
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-construction/
```

&nbsp;&nbsp;&nbsp;&nbsp;Now i will write python code by sample js code:
```python
box = get.box()


def loop():
    creep = get.creep()
    tower = get.tower()
    site = get.site()

    if not site and not tower:
        put.site(50, 55, StructureTower)

    if get.energy(creep) == 0:
        put.fetch(creep, box)
    else:
        put.build(creep, site)
```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial``` and run the game to get <font color=#88EC80>PASSED</font>.

#### ---------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;What i want to tell you is that you can `put.site` multiple times at the same pos (You can have maxium num of site is 10). You can see multiple sites at the same pos:

```python
box = get.box()


def loop():
    creep = get.creep()
    site = get.site()

    put.site(50, 55, StructureTower)

    if get.energy(creep) == 0:
        put.fetch(creep, box)
    else:
        put.build(creep, site)

```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` again and run the game to get <font color=#88EC80>PASSED</font>.
