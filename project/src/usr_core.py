from game.const import *
from game.proto import *
from game.utils import *

# sort 10
# -------------------------
# These are currently required for Transcrypt in order to use the following names in JavaScript.
# Without the 'noalias' pragma, each of the following would be translated into something like 'py_Infinity' or 'py_undefined'
# python: if you want to use dict().get(); Please use dict().py_get() instead.
# !!! Do not Move These Pragma !!! #
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')

# -------------------------
from std import *

spawn = get.spawn(st.friend)
e_spawn = get.spawn(st.enemy)

fn_outer_area = lambda pos: 15 < pos.x < 85
fn_outer_friend_area = (lambda pos: pos.x < 50) if spawn.x < 50 else (lambda pos: pos.x > 50)
