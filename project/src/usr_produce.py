from game.const import *
from game.proto import *
from game.utils import *

# sort 11
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
from usr_core import *

if spawn.x < 50:
    x_home, x_mid, x_box, dir_box, dir_home = spawn.x - 1, spawn.x - 2, spawn.x - 3, LEFT, RIGHT
else:
    x_home, x_mid, x_box, dir_box, dir_home = spawn.x + 1, spawn.x + 2, spawn.x + 3, RIGHT, LEFT

pos_home = Position(x_home, spawn.y)

home_boxes = get.boxes(lambda box: (box.x < 10) if spawn.x < 50 else (box.x > 90))

carrier = None

c_s = Stage([
    # Birth
    ['birth', 'home', lambda s, t: carrier.y != spawn.y, lambda s, t: put.move(carrier, pos_home)],

    # Home
    ['home', 'home', lambda s, t: t.dropped, lambda s, t: put.fetch(carrier, t.dropped)],
    ['home', 'home', lambda s, t: 1000 < s.e + s.se, lambda s, t: put.deposit(carrier, spawn)],
    ['home', 'mid', lambda s, t: s.e == 0, lambda s, t: put.move(carrier, dir_box)],
    ['home', 'mid', lambda s, t: 1000 >= s.e + s.se, lambda s, t: put.move(carrier, dir_box) + put.deposit(carrier, spawn)],

    # Mid
    ['mid', 'mid', lambda s, t: t.dropped, lambda s, t: put.fetch(carrier, t.dropped)],
    ['mid', 'box', lambda s, t: s.e == 0, lambda s, t: put.move(carrier, dir_box)],
    ['mid', 'home', lambda s, t: s.e > 0, lambda s, t: put.deposit(carrier, None) + put.move(carrier, dir_home)],

    # Box
    ['box', 'box', lambda s, t: s.e == 0, lambda s, t: put.fetch(carrier, t.box)],
    ['box', 'mid', lambda s, t: s.e > 0, lambda s, t: put.deposit(carrier, None) + put.move(carrier, dir_home)],
])
c_s.asu('e', lambda s: get.energy(carrier))
c_s.asu('_unuse', lambda s: carrier.view.clear().header(carrier))  # ignore;
c_s.acu('home', 'se', lambda s: get.energy(spawn))
c_s.atu('mid', 'mid', 'dropped', lambda s, t: get.resource(lambda obj: obj.x == x_box and obj.y == spawn.y))
c_s.atu('home', 'home', 'dropped', lambda s, t: get.resource(lambda obj: obj.x == x_mid and obj.y == spawn.y))
c_s.atu('box', 'box', 'box', lambda s, t: get.find(home_boxes, st.energetic))


def carrier_task():
    global carrier
    if not carrier:
        res = put.create(spawn, [CARRY, CARRY, CARRY, CARRY, MOVE], 'carrier')
        if st.creep(res):
            carrier = res
            carrier.br = c_s
            carrier.view = View(10)
    else:
        print("carrier :", carrier.br.next())


sapper = None


def sapper_task():
    global sapper
    if not sapper:
        res = put.create(spawn, [CARRY, WORK, WORK, MOVE])
        if st.creep(res):
            sapper = res
            sapper.br = Stage([
                ['birth', 'to box', lambda s, t: get.distance(s.unit, spawn) < 3,
                 put.move(sapper, get.closest(sapper, get.boxes((fn_outer_friend_area, st.energetic))))],
                ['on road', 'on road', None]
            ], 'birth')
            sapper.br.unit = sapper  # dual binding
    else:
        pass


mover = None


def mover_task():
    global mover
    if not mover:
        res = put.create(spawn, [MOVE, MOVE, MOVE])
        mover = res if st.creep(res) else None
    else:
        pass


bcarry = None


def bcarry_task():
    global bcarry
    if not bcarry:
        res = put.create(spawn, [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE])
        bcarry = res if st.creep(res) else None
    else:
        pass

v = View(10, True)
op = Options()
op.opacity = 0.5


def usr_produce_loop():
    carrier_task()

    std.show_usage()
