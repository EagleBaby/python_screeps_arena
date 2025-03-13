from bg import *


# ## Type ## #
class CarrierType(CreepLogic):
    NAME = "Carrier"
    LINK = ["Carrier", "Worrier"]
    RECIPE = [MOVE, CARRY]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        c.carry(
            get.find(BOXES, st.energetic),
            self.spawn
        )


class WorrierType(CreepLogic):
    NAME = "Worrier"
    RECIPE = [MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        c.attack(ESPAWN)


# ## main ## #
def init(k: GlobalKnowledge):
    CreepLogic("Carrier", SPAWN)


def step(k: GlobalKnowledge):
    CreepLogic.showQueue()
