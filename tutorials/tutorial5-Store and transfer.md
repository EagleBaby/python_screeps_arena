## Tutorial 5: Store and transfer

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Do not forget to set the export mjs file path:
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-store_and_transfer/main.mjs
```

&nbsp;&nbsp;&nbsp;&nbsp;Now i will write python code by sample js code:
```python
def loop():
    tower = get.tower()

    if get.energy(tower) == 0:
        creep = get.creep(st.friend)
        box = get.box()  # Container

        if get.energy(creep) == 0:
            put.fetch(creep, box)
        else:
            put.deposit(creep, tower)
    else:
        enemy = get.creep(st.enemy)
        put.attack(tower, enemy)
```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial``` and run the game to get <font color=#88EC80>PASSED</font>.

#### ---------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;However, 'put' provide you a combined way to move energy from box to tower:

```python
def loop():
    tower = get.tower()

    if get.energy(tower) == 0:
        creep = get.creep(st.friend)
        box = get.box()  # Container
        put.carry(creep, box, tower)  # from box -> tower
    else:
        enemy = get.creep(st.enemy)
        put.attack(tower, enemy)
```
&nbsp;&nbsp;&nbsp;&nbsp;You can even simplify your code like:
```python
def loop():
    tower = get.tower()
    creep = get.creep(st.friend)
    box = get.box()  # Container
    enemy = get.creep(st.enemy)

    put.carry(creep, box, tower)  # from box -> tower
    put.attack(tower, enemy)  # if can not attack, will return a int error code. See detail in Screeps:Arena Document.
```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` again and run the game to get <font color=#88EC80>PASSED</font>.
