from builtin import *

SPAWN = get.spawn(st.my)
ESPAWN = get.spawn(st.enemy)
if SPAWN.x < 50:
    SIDE = -1
else:
    SIDE = 1

# details
if SIDE < 0:
    WALLS = [
        get.wall(2, 47),
        get.wall(11, 45),
    ]
    BOXES = [
        get.box(1, 44),
        get.box(12, 46),
        get.box(1, 46),
        get.box(12, 44),
    ]

else:
    WALLS = [
        get.wall(97, 52),
        get.wall(88, 54),
    ]
    BOXES = [
        get.box(98, 55),
        get.box(87, 53),
        get.box(98, 53),
        get.box(87, 55),
    ]
