from bg import *


class Attacker(CreepLogic):
    NAME = "Attacker"

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs) -> None:
        c.autoAttack()  # 十分耗时。可能的话还是手动索敌。 | Very time-consuming. If possible, manually select the target.
        c.move(EFLAG)
        

class Healer(CreepLogic):
    NAME = "Healer"

    def onStep(self, c: Creep, k: GlobalKnowledge, *refs) -> None:
        c.autoHeal()  # 十分耗时。可能的话还是手动索敌。 | Very time-consuming. If possible, manually select the target.
        c.move(EFLAG)


def TowerLogic(k: GlobalKnowledge):
    # ## State Change ## #
    if not k.tower_state:
        k.tower_state = "wait"

    if k.tower_state == "action" and TOWER1.energy < 10:
        k.tower_state = "wait"
    elif k.tower_state == "wait":
        e = FLAG.closest(k.battles.enemies)
        if TOWER1.energy >= 49 or (e and e.distance(FLAG) <= 10 <= TOWER1.energy):
            k.tower_state = "action"

    # ## Action ## #
    if k.tower_state == "action" and k.now >= 60:
        _score, _target = 0, None
        for ec in k.battles.enemies:  # 计算敌方收益 | Select Target
            dmg = TOWER1.measure(ec) + TOWER2.measure(ec)  # 可以计算伤害/治疗量 (线性测算) | Calculate Damage/Heal (Linear Measurement)
            score = dmg / ec.hp * 100
            if score > _score:
                _score, _target = score, ec

        if _target:  # Do Attack
            TOWER1.attack(_target)
            TOWER2.attack(_target)


def init(k: GlobalKnowledge):
    for c in get.creeps(st.my):
        if st.healable(c):
            Healer(c)
        else:
            Attacker(c)


def step(k: GlobalKnowledge):
    TowerLogic(k)
