### [JS]Welcome to the Tutorial! 
Here you will learn the basics of how to play Screeps Arena by coding.

#### Introduction
“Screeps” means “scripting creeps.” The game uses real ```JavaScript``` as the programming language to script your units, or creeps, behavior. We won’t be teaching you ```JavaScript```, but we will start with the basics, and recommend to get yourself familiar with the language if you wish to master the game.

You play by writing code files in your local folder. The in-game code editor is not ready yet, so we recommend to use some external code editor, for example ```Microsoft VS Code```.

These files are submitted to the server when you click the PLAY button. If you don’t have syntax errors in your code, the game will start and you can watch it. You cannot change the submitted coding during the game; you need to start another game. The game will be over in a matter of seconds. However, you can watch it on any speed.

#### Script loop
Every turn (or a tick as we call it) the game runs your main function called ```loop()```. You have it defined in your main.mjs file already:

```JavaScript

export function loop() {
    // Your code goes here.
}
```

Everything in this function will be executed over and over again until the game ends. However, keep note that only schedule commands here. They are executed later when loop function has finished.

#### Import stuff 
There is a special function getTicks() that you can call to determine what is current tick now. In order to call it, you have to import it into your code from game/utils module:

```JavaScript

import { getTicks } from 'game/utils';

export function loop() {
    console.log('Current tick:', getTicks());
}
```
There are many methods and objects that can be imported this way. See documentation for full list.

Note: console.log() function above - it outputs any value in-game console panel so that you can debug and inspect running code.


#### ------------------------------------------------------------------------------------------------------------------------

&nbsp;&nbsp;&nbsp;&nbsp;Above is tutorial in Screeps:Arena, i just want to express that you can get the js tutorial in the game, and the other python-tutorials won't refer to the js tutorial anymore(if you need, just get it in game.)  if you want to play with ```python```, you need to follow the tutorial below:

## Tutorial 1: Loop and import

&nbsp;&nbsp;&nbsp;&nbsp;Build your python-project and open with one editor.([if you do not how to do that, click here](https://github.com/EagleBaby/python_screeps_arena/blob/main/README.md))


&nbsp;&nbsp;&nbsp;&nbsp;Every turn the game runs your main function called ```loop()```. You have it defined in your src/main.py file already:
```python
def loop():
    # Your code here...
    std.show_usage()

```

&nbsp;&nbsp;&nbsp;&nbsp;And we have already import all things for you，means that you can code instantly：
```python
from game.const import *
from game.proto import *
from game.utils import *
from config import *
from std import *
```

&nbsp;&nbsp;&nbsp;&nbsp;So let's do ```console.log('Current tick:', getTicks());``` in python way. Use ```get.ticks()->int``` to get the game ticks:
```python
def loop():
    print('Current tick:', get.ticks())
```

&nbsp;&nbsp;&nbsp;&nbsp;Then, you need specific the fpath of ```main.mjs``` in src/config.py:
```python
# // Project Config
# define MAIN_JS_PATH C:/Users/22290/ScreepsArena/tutorial-loop_and_import/main.mjs
```

&nbsp;&nbsp;&nbsp;&nbsp;Run the ```build.py``` to transcrypt your python code to ```main.mjs``` code.
If anything went well, you will get the output:
```
F:\Python\python.exe H:\arena\build.py 
[1/6][Done] copying to build dir: H:\arena\build
[2/6][Done] preprocess finish.
[3/6][Done] "transcrypt -b -m -n -s -e 6 H:\arena\build\main.py" Ready.
[4/6][Done] analyze and rebuild main.js successfully.
[5/6][Done] generate total main.js successfully.
[6/6][Done] export total main.js successfully.
[Info] usr export to C:/Users/22290/ScreepsArena/tutorial-loop_and_import/main.mjs
[Done] clean build dir
```


&nbsp;&nbsp;&nbsp;&nbsp;Now go to your game ```tutorial: Loop and import``` and run the game to get ```PASSED```.
