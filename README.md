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

&nbsp;&nbsp;&nbsp;&nbsp;Not Recommend: [html raw document](https://github.com/EagleBaby/python_screeps_arena/blob/gh-page/index.html)


## 5. How to create user py module
&nbsp;&nbsp;&nbsp;&nbsp;You can add user python file/directory under 'src'. But can not include a `__init__.py` file, this mean you only use `from a_directory.xxx_module import *` if you use a directory.

&nbsp;&nbsp;&nbsp;&nbsp; Each user python module should contain the follow content:
```python
from game.const import *
from game.proto import *
from game.utils import *
from src.config import *
from src.std import *
# ----------------------------------
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')


# User Code Here
pass

```
&nbsp;&nbsp;&nbsp;&nbsp; Then declare python 'import' sentence in main.py.
```python
# main.py

...
from usr_module_a import *
from usr_module_b import *

```
&nbsp;&nbsp;&nbsp;&nbsp; Compiler do not care import sentence in other .py file. This mean if 'module_a' import 'module_b' but not declare import in main.py, then the module_b won't be include into the final js output. To solve this problem, use `#>import` to declare it to compiler.

```python
# usr_module_a.py

# > import usr_module_b
from usr_module_b import *
```
```python
# main.py
from usr_module_a import *
```

## 6. pre compile
&nbsp;&nbsp;&nbsp;&nbsp; Compiler can identify these `# >`sentence:
```python
# > import <python_module_name>
# > sort <int>
# > define <identify_key> <value>
# > if <identify_key>
# > elif <identify_key>
# > else
# > endif
# > insert <js_sentence>
```

## Last

&nbsp;&nbsp;&nbsp;&nbsp;Goodluck & Have fun. :)
