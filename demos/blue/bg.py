from builtin import *

FLAG = get.flag(st.my)
EFLAG = get.flag(st.enemy)
SIDE = 1 if FLAG.y > 50 else -1

TOWER1 = get.towers(st.my)[0]
TOWER2 = get.towers(st.my)[1]

