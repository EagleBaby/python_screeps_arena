from bg import *


class ScoreCarrier(CreepLogic):
    NAME = "scCarrier"
    RECIPE = [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs) -> None:
        box = c.closest(get.boxes(st.scoretic))
        if box:
            c.carry(box, SC)
        else:
            c.patrol([SPAWN, SC])


class Worker(CreepLogic):
    NAME = "worker"
    RECIPE = [WORK, WORK, WORK, CARRY]
    DIRECTION = TOP_LEFT if SIDE == -1 else BOTTOM_LEFT

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs) -> None:
        c.harvest(SRC1)


class Bridge(CreepLogic):
    NAME = "bridge"
    RECIPE = [CARRY, MOVE]
    LINK = ["worker", "worker"]
    DIRECTION = TOP if SIDE == -1 else BOTTOM

    def go0(self, c: Creep, k: GlobalKnowledge, *refs):
        if not refs[0].creep:
            c.move(Point(SPAWN.x - 1, SPAWN.y + SIDE * 2))
        else:
            c.move(Point(SPAWN.x, SPAWN.y + SIDE))  # Move to top of SPAWN (or bottom)
            c.pull(refs[0].creep)  # Pull-hold the target so that it moves along with you.
            return "cc0"

    def cc0(self, c: Creep, k: GlobalKnowledge, *refs):
        if c.energy:
            c.deposit(SPAWN)
        elif refs[1].creep:
            c.pull(refs[1].creep)
            c.move(Point(SPAWN.x + 1, SPAWN.y + SIDE * 2))
            return "go1"
        else:
            c.fetch(refs[0].creep)

    def go1(self, c: Creep, k: GlobalKnowledge, *refs):
        if c.fatigue > 0: return
        c.move(Point(SPAWN.x, SPAWN.y + SIDE))
        c.pull(refs[1].creep)
        return "cc1_s0"

    def cc1_s0(self, c: Creep, k: GlobalKnowledge, *refs):
        c.fetch(refs[0].creep)
        return "cc1_s1"

    def cc1_s1(self, c: Creep, k: GlobalKnowledge, *refs):
        c.fetch(refs[1].creep)
        return "cc1_s2"

    def cc1_s2(self, c: Creep, k: GlobalKnowledge, *refs):
        c.deposit(SPAWN)
        return "cc1_s0"
    

# Init at tick == 1
def init(k: GlobalKnowledge):
    CreepLogic("bridge", SPAWN)


# Step at each tick >= 1
def step(k: GlobalKnowledge):
    CreepLogic.showQueue()

    if len(CreepLogic.productQueue()) <= 0:
        CreepLogic("scCarrier", SPAWN)
