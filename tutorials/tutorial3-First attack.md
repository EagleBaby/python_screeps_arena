## Tutorial 3: First attack

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Do not forget to set the export mjs file path:
```python
# // DLC Module Select //
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-first_attack/main.mjs
```

&nbsp;&nbsp;&nbsp;&nbsp;Then we use ```get.friend(st.creep) -> Creep``` ```get.enemy(st.creep) -> Creep``` and ```put.attack(unit, target, move=True) -> int``` to attack enemy creep.
```python
def loop():
    creep = get.friend(st.creep)
    enemy = get.enemy(st.creep)
    put.attack(creep, enemy)
```

&nbsp;&nbsp;&nbsp;&nbsp;Run ```build.py``` and go to your game ```tutorial: First attack``` and run the game to get <font color=#88EC80>PASSED</font>.
