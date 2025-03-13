from builtin import *

SPAWN = get.spawn(st.my)
ESPAWN = get.spawn(st.enemy)

SIDE = -1 if SPAWN.y < 50 else 1

SC = get.scoreCollector(95, 49)
SRC0 = get.source(0, 49)

if SIDE == -1:
    SRC1 = get.source(4, 0)
    SRC2 = get.source(98, 3)
else:
    SRC1 = get.source(4, 98)
    SRC2 = get.source(98, 95)
