## Tutorial 2: Simple move


&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;In this tutorial, we need use ```tutorial-flag```, we need change the define to ```1``` in ```src/config.py``` to enable it(Do not forget to set the export mjs file path.):
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 1
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-simple_move/main.mjs
```

&nbsp;&nbsp;&nbsp;&nbsp;Then we use ```get.creep() -> Creep``` ```get.flag() -> Flag``` and ```put.move(unit, to, options=None) -> int``` to reach out goal - ```make your creep go to the flag position```.
```python
def loop():
    creep = get.creep()
    flag = get.flag()
    put.move(creep, flag)
```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial: Simple move``` and run the game to get <font color=#88EC80>PASSED</font>.
