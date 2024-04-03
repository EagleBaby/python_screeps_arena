from game.const import *
from game.proto import *
from game.utils import *
from config import *
from std import *
# ----------------------------------
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')
from usr_core import *
from usr_produce import *

tar_spawn = get.spawn(st.enemy)

owner_area = lambda obj: (spawn.x < 50 and obj.x < 10) or (spawn.x >= 50 and obj.x > 90)
other_area = lambda obj: 10 < obj.x < 90

stage = [0, 0]

CARRY_FATIGUE_SET = 2
ATTACK_TIMELINE = 800
WARRIOR_LOW = 1000
IGNORE_SWAMP = Options()
IGNORE_SWAMP.swampCost = 2
LIKE_SWAMP = Options()
LIKE_SWAMP.swampCost = 1

if spawn.x > 50:
    upper_entry = Position(85, 15)
    lower_entry = Position(85, 85)
else:
    upper_entry = Position(15, 15)
    lower_entry = Position(15, 85)


def loop():
    usr_produce_loop()
    return

    site = get.closest(spawn, get.sites(st.friend), owner_area)
    loader = get.creep(combo((st.friend, lambda obj: obj.name == 'loader')))
    carrier = get.creep(combo((st.friend, lambda obj: obj.name == 'carrier')))
    extensions = get.extensions(lambda obj: get.energy(obj) < 90 and owner_area(obj))
    enemies = get.creeps(st.enemy)
    warriors = get.creeps(combo((st.friend, lambda obj: obj.name == 'attacker')))
    defenders = get.creeps(combo((st.friend, lambda obj: obj.name == 'defender')))
    sapper = get.creep(combo((st.friend, lambda obj: obj.name == 'sapper')))
    ashers = get.creeps(combo((st.friend, lambda obj: obj.name == 'asher')))
    builder = get.creep(combo((st.friend, lambda obj: obj.name == 'builder')))
    rampart_up = get.rampart(lambda obj: obj.y == spawn.y - 2 and obj.x == spawn.x)
    rampart_down = get.rampart(lambda obj: obj.y == spawn.y + 2 and obj.x == spawn.x)
    if stage[0] == 0 and not site:
        put.site(spawn.x, spawn.y - 2, StructureRampart)
        put.site(spawn.x, spawn.y + 2, StructureRampart)
        if rampart_up and rampart_down:
            stage[0] = 1

    elif stage[0] == 1:
        put.site(spawn.x, spawn.y, StructureRampart)
        if spawn.x < 50:
            put.site(spawn.x - 2, spawn.y - 1, StructureExtension)
            put.site(spawn.x - 2, spawn.y + 1, StructureExtension)
            put.site(spawn.x - 2, spawn.y - 0, StructureExtension)
            put.site(spawn.x - 3, spawn.y - 0, StructureExtension)
        else:
            put.site(spawn.x + 2, spawn.y - 1, StructureExtension)
            put.site(spawn.x + 2, spawn.y + 1, StructureExtension)
            put.site(spawn.x + 2, spawn.y - 0, StructureExtension)
            put.site(spawn.x + 3, spawn.y - 0, StructureExtension)
        stage[0] = 2
    elif stage[0] == 2:
        if get.ticks() >= ATTACK_TIMELINE and len(warriors) >= 3:
            stage[0] = 3

    if (not stage[0] and get.energy(spawn) > 600) or (stage[0] and get.energy(spawn) > 800):
        stage[1] = 1
    elif get.energy(spawn) < 400:
        stage[1] = 0

    if builder:
        if get.energy(builder) > 0:
            if site:
                put.build(builder, site)
        if stage[1] == 1:
            put.fetch(builder, spawn)

    if carrier:
        print('carrier terrain:', get.terrain(carrier))
        closest = get.closest(carrier, enemies, st.atkable)
        if closest and get.distance(carrier, closest) <= 5:
            put.escape(carrier, closest)
        else:
            storage = get.closest(carrier, get.storages(combo(({st.empty}, [st.box, st.resource]))))

            if len(extensions) and not site:
                put.carry(carrier, storage, extensions[0])
            else:
                put.carry(carrier, storage, spawn)

    if loader:
        print("loader terrain:", get.terrain(loader))
        closest = get.closest(loader, enemies, st.atkable)
        if not closest:
            closest = get.spawn(st.enemy)
        dist_em = get.distance(loader, closest) if closest else 65535
        outer_box = get.closest(loader, get.boxes(combo(({st.empty}, other_area))))
        if get.distance(loader, spawn) <= 5 and loader.working_state == DONE:

            if closest and closest.y > spawn.y:
                # print("enemy lower")
                loader.select_init_pos = upper_entry
            else:
                loader.select_init_pos = lower_entry

        if loader.select_init_pos:
            print("Go To Init Pos")
            if get.distance(loader, loader.select_init_pos) > 4:
                put.move(loader, loader.select_init_pos)
            else:
                loader.select_init_pos = None

        else:
            print("Go For work")
            if dist_em <= 5:
                put.deposit(loader, None)
                put.escape(loader, closest, LIKE_SWAMP)
            else:  # 外面基本上一直有非空的箱子
                inner_nf_box = get.box(combo(({st.full}, owner_area)))
                loader.working_state = put.carry(loader, outer_box, inner_nf_box, RESOURCE_ENERGY, IGNORE_SWAMP, True)

    if not carrier:
        put.create(spawn, [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], 'carrier')
    elif (get.ticks() == 1000 or get.ticks() < 120) and not loader:
        put.create(spawn, [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
                           MOVE], 'loader')
    # elif get.ticks() < 150 and not fore_poster:
    #     to.create(spawn, [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
    #                       MOVE], 'loader')
    elif loader or get.ticks() > 150:
        if not sapper and get.ticks() < 300:
            put.create(spawn,
                       [CARRY, CARRY, WORK, WORK, MOVE, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE],
                       'sapper')
        elif len(ashers) < 2 and get.ticks() < 400:
            put.create(spawn, [MOVE], 'asher')
        elif get.ticks() < 200 and not builder:
            put.create(spawn, [CARRY, WORK, WORK], 'builder')

        elif len(defenders) < 2 and get.ticks() < 600:
            put.create(spawn,
                       [MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, ATTACK],
                       'defender')
        else:
            put.create(spawn, [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                               RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, HEAL], 'attacker')
        #  -------------------- Finish Create --------------------
    if sapper:
        dropped = get.resource(
            lambda obj: obj and obj.resourceType == RESOURCE_ENERGY and get.distance(sapper, obj) <= 1)
        select_box = get.closest(sapper, get.boxes(other_area))
        ex_inrange = get.closest(sapper, get.extensions(combo((other_area, st.friend, {st.full}))))
        site_inrange = get.closest(sapper, get.sites(combo((other_area, st.friend))))
        closest = get.closest(sapper, enemies, st.atkable)
        if not closest:
            closest = get.spawn(st.enemy)
        egy = get.energy(sapper)
        if get.distance(sapper, spawn) <= 5:

            if closest and closest.y > spawn.y:
                # print("enemy lower")
                sapper.select_init_pos = upper_entry
            else:
                sapper.select_init_pos = lower_entry

        if sapper.select_init_pos:
            if get.distance(sapper, sapper.select_init_pos) > 4:
                put.move(sapper, sapper.select_init_pos)
            else:
                sapper.select_init_pos = None

            sapper.last_box = None
            sapper.work = None

        else:

            print("Go For Sapper")
            if not select_box:
                print("not box found")
                if egy > 0:
                    put.deposit(sapper, None)
                if site_inrange:
                    site_inrange.remove()
                put.move(sapper, spawn)
            if site_inrange and site_inrange.x == spawn.x and site_inrange.y == spawn.y:
                site_inrange.remove()
            if ex_inrange and get.distance(sapper, ex_inrange) > 2:
                ex_inrange = None
            if closest and get.distance(sapper, closest) <= 10:
                print("sapper meet enemies")
                if egy > 0:
                    put.deposit(sapper, None)
                if site_inrange:
                    site_inrange.remove()

                put.move(sapper, spawn)

            elif sapper.work:
                if egy < 150 and dropped:
                    put.fetch(sapper, dropped)

                if not dropped or (dropped.amount + egy) < 100:
                    sapper.work = None
                    sapper.last_box = None
                elif ex_inrange:
                    print("sapper charge extension")
                    put.deposit(sapper, ex_inrange)
                elif site_inrange:
                    print("sapper build site")
                    sapper.build(site_inrange)
                else:
                    print("create site")
                    # around box.x and box.y  :x: -1 - 1, y: -1 - 1. except (0, 0)
                    flag = False
                    for x in range(-1, 2):
                        if flag:
                            break
                        for y in range(-1, 2):
                            if x == 0 and y == 0:
                                continue
                            if x == sapper.x and y == sapper.y:
                                continue
                            if not put.site(sapper.x + x, sapper.y + y, StructureExtension).error:
                                flag = True
                                break

            elif select_box and sapper.last_box and sapper.last_box == select_box:
                if get.energy(select_box) == 0:
                    sapper.work = True
                else:
                    put.deposit(sapper, None)
                    put.fetch(sapper, select_box)
            elif select_box and sapper.last_box and sapper.last_box != select_box:
                amount = dropped.amount if dropped else 0
                if amount > 350:
                    sapper.work = True
                else:
                    sapper.work = False

            elif get.distance(sapper, select_box) > 1:
                print("sapper goto box")
                if egy > 0:
                    put.deposit(sapper, None)
                if site_inrange:
                    site_inrange.remove()
                put.move(sapper, select_box)
            elif select_box:
                sapper.last_box = select_box

    # if sapper:
    #     put.push(ashers, sapper)
    for i, ash in enumerate(ashers):
        sapper.pull(ash)
        put.move(ash, sapper)
        closest = get.closest(ash, enemies)
        if closest and get.ticks() >= 500:
            put.move(ash, closest)

        elif not ash.root:
            pos = Options()
            pos.y = 85 if i else 15
            if spawn.x > 50:
                pos.x = 85
            else:
                pos.x = 15
            ash.root = pos
            ash.reach = False
        elif not ash.reach:
            put.move(ash, ash.root)
            if get.distance(ash, ash.root) <= 5:
                ash.reach = True
        elif closest:
            put.follow(ash, closest, 8, LIKE_SWAMP)

    if len(defenders) >= 2:
        defenders[1].moveTo(Position(spawn.x, spawn.y - 2))
        closest = get.closest(defenders[1], enemies)
        if closest:
            if get.distance(defenders[1], closest) <= 1:
                defenders[1].rangedMassAttack()
                defenders[1].attack(closest)
            else:
                defenders[1].rangedAttack(closest)

    if len(defenders) >= 1:
        defenders[0].moveTo(Position(spawn.x, spawn.y + 2))
        closest = get.closest(defenders[0], enemies)
        if closest:
            if get.distance(defenders[0], closest) <= 1:
                defenders[0].rangedMassAttack()
                defenders[0].attack(closest)
            else:
                defenders[0].rangedAttack(closest)

    # 战士的代码
    if (get.ticks() >= ATTACK_TIMELINE and stage[0] >= 3) or (
            enemies and (get.distance(spawn, get.closest(spawn, enemies)) <= 4 or (
            len(warriors) >= 3 and get.distance(spawn, get.closest(spawn, enemies)) <= 5))):

        if len(warriors) >= 2:
            put.follow(warriors[1:], warriors[0], (5, 20))

        for i, warrior in enumerate(warriors):
            damaged = get.creep(
                lambda obj: obj.id != warrior.id and obj.my and st.atkable(obj) and obj.hits < obj.hitsMax)
            closest = get.closest(warrior, enemies, combo([st.atkable, st.healable, st.workable]))
            if not closest or get.distance(warrior, closest) > get.distance(warrior, tar_spawn):
                closest = tar_spawn
            enemy_dist = get.distance(warrior, closest)

            atk_res = Options()

            if (i == 0 and not get.moved(warrior)) or enemy_dist < 6:
                atk_res = put.attack(warrior, closest)

            if warrior.hits < (0.8 * warrior.hitsMax) and atk_res.attack != OK:
                put.heal(warrior, warrior, False)

            elif damaged and enemy_dist > 3:
                put.heal(warrior, damaged, False)

    else:
        for warrior in warriors:
            damaged = get.creep(
                lambda obj: obj.id != warrior.id and obj.my and obj.hits < obj.hitsMax)
            put.move(warrior, spawn)

            if warrior.hits < (0.8 * warrior.hitsMax):
                put.heal(warrior, warrior, False)

            elif damaged:
                put.heal(warrior, damaged, False)

    std.show_usage()




