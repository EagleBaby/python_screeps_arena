# Welcome to PyScreeps-Arena

&nbsp;&nbsp;&nbsp;&nbsp;这个项目适用于想用python游玩《Screeps:Arena》的玩家。 该项目提供一个'标准库'(std.py)来充当js和python的粘合层，玩家在main.py的loop中编写自己的逻辑代码，通过运行build.py来生成main.mjs。 

<font color="light red">
&nbsp;&nbsp;&nbsp;&nbsp;! 请注意，Arena和World的代码是不通用的。

</font><font color="gray">

&nbsp;&nbsp;&nbsp;&nbsp;(如果你要游玩《Screeps:World》, 那么推荐你去使用github项目:['screeps-starter-python'](https://github.com/daboross/screeps-starter-python))
</font>

## Quick Start

* 1.克隆这个github项目到本地
* 2.准备好python3.10及以上版本, 在项目目录下运行cmd命令:
  
&nbsp;&nbsp;&nbsp;&nbsp;```pip install requirement.txt```

* 3.使用pycharm这样的工具打开项目目录
* 4.修改main.py中的逻辑(可以自己在src中自己编写模块并导入)
* 5.运行build.py来创建main.mjs


## Project layout
    src/
        main.py
        std.py
        config.py
    game/
        proto.py
        const.py
        utils.py
    build.py
