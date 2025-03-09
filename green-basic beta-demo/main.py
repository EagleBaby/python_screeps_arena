# Lib Version: 0.4a6
from builtin import *

know.spawn = get.spawn(st.my)
know.espawn = get.spawn(st.enemy)
if know.spawn.x < 50:
    know.side = -1
    know.walls = [
        get.wall(2, 47),
        get.wall(11, 45),
    ]
    know.boxes = [
        get.box(1, 44),
        get.box(12, 46),
        get.box(1, 46),
        get.box(12, 44),
    ]
else:
    know.side = 1
    know.walls = [
        get.wall(97, 52),
        get.wall(88, 54),
    ]
    know.boxes = [
        get.box(98, 55),
        get.box(87, 53),
        get.box(98, 53),
        get.box(87, 55),
    ]


# ## Type ## #
class CarrierType(CreepLogic):
    NAME = "Carrier"
    LINK = ["Carrier", "Worrier"]
    RECIPE = [MOVE, CARRY]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        c.carry(
            get.find(k.boxes, st.energetic),
            self.spawn
        )


class WorrierType(CreepLogic):
    NAME = "Worrier"
    RECIPE = [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        c.attack(k.espawn)


# ## main ## #
def init(k: GlobalKnowledge):
    CreepLogic("Carrier", k.spawn)


def step(k: GlobalKnowledge):
    CreepLogic.showQueue()
