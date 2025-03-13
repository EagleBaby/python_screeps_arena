from bg import *


# ## Type ## #
class CarrierType(CreepLogic):
    NAME = "Carrier"
    LINK = ["Carrier", "Builder", 
            "Healer", "Worrier", 
            "Healer", "Worrier"]
    RECIPE = [MOVE, CARRY]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        c.carry(
            get.find(BOXES, st.energetic),
            self.spawn
        )


class BuilderType(CreepLogic):
    NAME = "Builder"
    RECIPE = [MOVE, WORK, CARRY]
    DIRECTION = TOP

    def onLoading(self, c: Creep | None, k: GlobalKnowledge, *refs: "CreepLogic") -> None:
        self.site = ConstructionSite.plan(SPAWN.x, SPAWN.y, StructureRampart)
        
    def build_rampart(self, c: Creep, k: GlobalKnowledge, *refs):
        if st.site(self.site):
            c.fetch(SPAWN)
            c.build(self.site)
        else:
            c.deposit(SPAWN)
            return "idle"
    
    def idle(self, c: Creep, k: GlobalKnowledge, *refs):
        pass
            

class WorrierType(CreepLogic):
    NAME = "Worrier"
    RECIPE = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        # c.attack(ESPAWN)
        c.autoAttack()  # cost time a lot. Auto attack any enemy closed to it.
        c.move(ESPAWN)  # move to enemy spawn point


class HealerType(CreepLogic):
    NAME = "Healer"
    RECIPE = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs: "CreepLogic") -> any:
        c.autoHeal()  # cost time a lot. Auto Heal any enemy closed to it.
        
        # ## Follow ## #
        follow_target = None
        
        # try follow  worrier
        worrier_logic = self.ref(f"Worrier{self.uid}")
        if worrier_logic and worrier_logic.ready:
            follow_target = worrier_logic.creep
        else:
            follow_target = get.creep(lambda it: it != c and it.my)
        
        if follow_target:
            c.follow(follow_target, 1)

        # why not 'move'?
        # ans: If healer adjacent to worrier, and worrier goto healer, healer will move to worrier's position.
        #      Sometimes it mean closer to enemy. But 'follow' good deal with it.


# ## main ## #
def init(k: GlobalKnowledge):
    CreepLogic("Carrier", SPAWN)


def step(k: GlobalKnowledge):
    CreepLogic.showQueue()
