[![Python](https://img.shields.io/badge/python->3.10-blue.svg)](https://www.python.org/downloads/) [![Pyscreeps-Arena](https://img.shields.io/pypi/v/pyscreeps-arena.svg?label=Pyscreeps-Arena)](https://pypi.org/project/pyscreeps-arena/)

V0.5: Support 3 basic arenas for 1.0 Game.

# Welcome to PyScreeps-Arena

&nbsp;&nbsp;&nbsp;&nbsp;This project is for players who want to play Screeps: Arena with python. The project provides a 'standard library' (std.py) to act as a glue layer between js and python. Players write their own logic code in the main.py loop, and run build.py to generate main.mjs

<font color="#FC8480">
&nbsp;&nbsp;&nbsp;&nbsp;Please note that the codes for 'Screeps:Arena' and 'Screeps:World' are not compatible.

</font><font color="gray">

&nbsp;&nbsp;&nbsp;&nbsp;(If you want to play Screeps:World, i recommend you to try the Github project: ['screeps-starter-python'](https://github.com/daboross/screeps-starter-python))
</font>

## 1. Quick Prepare Environment

&nbsp;&nbsp;&nbsp;&nbsp;<font color=#FCAE80>This project <b>suggest</b> a python with >= 3.10. </font>Please make sure you have download&install from python.org


&nbsp;&nbsp;&nbsp;&nbsp;Use python pip to install this package:
&nbsp;&nbsp;&nbsp;&nbsp;```pip install pyscreeps-arena```

&nbsp;&nbsp;&nbsp;&nbsp;Use cmd command to create a new game project:
&nbsp;&nbsp;&nbsp;&nbsp;```pyscreeps-arena 'Your Project Path'```

&nbsp;&nbsp;&nbsp;&nbsp;Use your editor to open the project<font color="gray">(recommand PyCharm)</font>.


## 2. Tutorial

* [Tutorial 1: Loop and import](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial1-Loop%20and%20import.md)
* [Tutorial 2: Simple move](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial2-Simple%20move.md)
* [Tutorial 3: First attack](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial3-First%20attack.md)
* [Tutorial 4: Creeps bodies](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial4-Creeps%20Bodies.md)
* [Tutorial 5: Store and transfer](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial5-Store%20and%20transfer.md)
* [Tutorial 6: Terrain](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial6-Terrain.md)
* [Tutorial 7: Spawn creeps](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial7-Spawn%20creeps.md)
* [Tutorial 8: Harvest energy](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial8-Harvest%20energy.md)
* [Tutorial 9: Construction](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial9-Construction.md)
* [Tutorial 10: Final test](https://github.com/EagleBaby/python_screeps_arena/blob/main/tutorials/tutorial10-Final%20test.md)

## 3. Transcrypt: Different between python and js
* in python:```if []:``` is False, but get true in js.
* in python:```_list[-1]``` is ok, but not work in js.
* in python： use ```dict.py_get()``` instead of ```dict.get()```
* in python： use ```container.py_clear()``` instead of ```container.clear()```
* operator reaload do not work in js. Mean in python```[1] * 5``` do not work in js.
* kwargs do not work in js. Mean in python```func(1, b = 5)``` do not work in js.

## 4. Document

&nbsp;&nbsp;&nbsp;&nbsp;Use command ```mkdocs serve``` under project dir.(the dir has 'src', 'build.py'...). 

&nbsp;&nbsp;&nbsp;&nbsp;Then open browser of "127.0.0.1:8000".


## Last

&nbsp;&nbsp;&nbsp;&nbsp;Goodluck & Have fun. :)
