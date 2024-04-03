from game.const import *
from game.proto import *
from game.utils import *

from config import *

# // Module Select
# if USE_TUTORIAL_FLAG
# insert import {Flag} from "game/prototypes"
# endif
# if USE_ARENA_FLAG
# insert import { Flag } from 'arena/season_alpha/capture_the_flag/basic';
# endif
# if USE_SCORE_COLLECTOR
# insert import { RESOURCE_SCORE, ScoreCollector } from 'arena/season_alpha/collect_and_control/basic';
# endif


# insert import {searchPath} from "game/path-finder"
# insert import {Visual} from "game/visual"

# sort 0
# ----------------------------------
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')

DONE = 1


# -------------------------


class Options:
    pass


class Result:
    pass


class DataArea:
    pass


class Position:  # js中position只是type
    def __init__(self, x, y):
        self.x = x
        self.y = y


# ----------------------------------------------------------------------------------------------------------------------
# 以下是对外接口


# define jprint console.log


class st:
    NOT_NUMBER = "obj is not number."
    NOT_CREEP = "obj is not creep."
    NOT_SPAWN = "obj is not spawn."
    NOT_TOWER = "obj is not tower."
    NOT_STRUCTURE = "obj is not structure."
    NOT_SITE = "obj is not site."
    NOT_RESOURCE = "obj is not resource."
    NOT_SOURCE = "obj is not source."
    NOT_FLAG = "obj is not flag."
    NOT_RAMPART = "obj is not rampart."
    NOT_WALL = "obj is not wall."
    NOT_ROAD = "obj is not road."
    NOT_BOX = "obj is not box."
    NOT_EXTENSION = "obj is not extension."

    NOT_MOVABLE = "obj is not movable."
    NOT_ATKABLE = "obj is not atkable."
    NOT_HEALABLE = "obj is not healable."
    NOT_HITABLE = "obj is not hitable."
    NOT_WORKABLE = "obj is not workable."
    NOT_STORABLE = "obj is not storable."
    NOT_FRIEND = "obj is not friend."
    NOT_ENEMY = "obj is not enemy."
    NOT_POINT = "obj is not point."

    POOR = "Not enough energy or resources."
    BUSY = "The structure is busy."
    INVALID = "Invalid arguments or target."
    OUT_RANGE = "The target is out of range."
    CREEP_FULL = "The creep is full."

    @staticmethod
    def number(obj: object) -> bool:
        """
        判断一个对象是否是js Number
        

        Args:
            obj:

        Returns:
        
        """
        # __pragma__('js', "return typeof obj === 'number';")
        pass

    @staticmethod
    def list(obj: object) -> bool:
        """
        判断一个对象是否是py list
        

        Args:
            obj: 

        Returns:
        
        """
        return isinstance(obj, list)

    @staticmethod
    def creep(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Creep

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof Creep;')
        pass

    @staticmethod
    def spawn(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Spawn

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureSpawn;')
        pass

    @staticmethod
    def tower(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureTower

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureTower;')
        pass

    @staticmethod
    def structure(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Structure

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof Structure;')
        pass

    @staticmethod
    def site(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:ConstructionSite

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof ConstructionSite;')
        pass

    @staticmethod
    def resource(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Resource

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof Resource;')
        pass

    @staticmethod
    def source(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Source

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof Source;')
        pass

    @staticmethod
    def flag(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Flag

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof Flag;')
        pass

    @staticmethod
    def rampart(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureRampart

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureRampart;')
        pass

    @staticmethod
    def wall(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureWall

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureWall;')
        pass

    @staticmethod
    def road(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureRoad

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureRoad;')
        pass

    @staticmethod
    def box(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureContainer

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureContainer;')
        pass

    @staticmethod
    def extension(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureExtension

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureExtension;')
        pass

    # -------------------------------------- Ducking: --------------------------------------

    @staticmethod
    def movable(obj: object) -> bool:
        """
        判断一个game object是否可以移动

        Args:
            obj: 

        Returns:
        
        """
        # insert if(obj && obj.body) for(var p of obj.body) if (p.type == MOVE) return true;
        return False

    @staticmethod
    def atkable(obj: object) -> bool:
        """
        判断一个game object是否可以攻击(或远程攻击)

        Args:
            obj: 

        Returns:
        
        """
        if obj:
            if obj.body:
                # __pragma__('js', 'for(var p of obj.body) if (p.type == ATTACK || p.type == RANGED_ATTACK) return true;')
                pass
            elif obj.attack:
                return True
        return False

    @staticmethod
    def melee(obj: object) -> bool:
        """
        判断一个game object是否可以近战攻击

        Args:
            obj: 

        Returns:
        
        """
        # insert if(obj && obj.body) for(var p of obj.body) if (p.type == ATTACK) return true;
        return False

    @staticmethod
    def ranged(obj: object) -> bool:
        """
        判断一个game object是否可以远程攻击

        Args:
            obj: 

        Returns:
        
        """
        if obj:
            if obj.body:
                # __pragma__('js', 'for(var p of obj.body) if (p.type == RANGED_ATTACK) return true;')
                pass
            elif obj.attack:
                return True
        return False

    @staticmethod
    def healable(obj: object) -> bool:
        """
        判断一个game object是否可以治疗他人

        Args:
            obj: 

        Returns:
        
        """
        if obj:
            if obj.body:
                # __pragma__('js', 'for(var p of obj.body) if (p.type == HEAL) return true;')
                pass
            elif obj.heal:
                return True
        return False

    @staticmethod
    def hitable(obj: object) -> bool:
        """
        判断一个game object是否可以被攻击

        Args:
            obj: 

        Returns:
        
        """
        return obj and obj.hits != undefined

    @staticmethod
    def workable(obj: object) -> bool:
        """
        判断一个game object是否可以工作

        Args:
            obj: 

        Returns:
        
        """
        # insert if(obj && obj.body) for(var p of obj.body) if (p.type == WORK) return true;
        return False

    @staticmethod
    def storable(obj: object) -> bool:
        """
        判断一个game object是否可以储存资源(和现有资源情况无关)

        Args:
            obj: 

        Returns:
        
        """
        # insert if(obj instanceof Structure && obj.store) return true;
        # insert if(obj instanceof Creep && obj.body) for(var p of obj.body) if (p.type == CARRY) return true;
        return False

    @staticmethod
    def energetic(obj: object) -> bool:
        """
        判断一个game object是否可以被单位拿取到能量

        Args:
            obj:

        Returns:

        """
        # insert if(obj instanceof Structure && obj.store && get.energy(obj) > 0) return true;
        # insert if(obj instanceof Creep && get.energy(obj) > 0) return true;
        # insert if(obj instanceof Resource && obj.amount > 0) return true;
        pass

    @staticmethod
    def damaged(obj: object) -> bool:
        """
        判断一个game object是否受损

        Args:
            obj:

        Returns:

        """
        # insert if(obj.hits < obj.hitsMax) return true;
        pass

    @staticmethod
    def friend(obj: object) -> bool:
        """
        判断一个game object是否是友方

        Args:
            obj: 

        Returns:
        
        """
        return obj and obj.my

    @staticmethod
    def my(obj: object) -> bool:
        """
        判断一个game object是否是己方

        Args:
            obj: 

        Returns:
        
        """
        return obj and obj.my

    @staticmethod
    def enemy(obj: object) -> bool:
        """
        判断一个game object是否是敌方

        Args:
            obj: 

        Returns:
        
        """
        return obj and not obj.my

    @staticmethod
    def point(obj: object) -> bool:
        """
        判断一个对象是否是一个坐标点(具有x和y属性)

        Args:
            obj: 

        Returns:
        
        """
        return obj.x != undefined and obj.y != undefined

    @staticmethod
    def empty(obj: object) -> bool:
        """
        判断一个对象的store是否为空(特指RESOURCE_ENERGY)

        Args:
            obj: 

        Returns:
        
        """
        if not obj or not obj.store:
            return True
        return get.energy(obj) == 0

    @staticmethod
    def full(obj: object) -> bool:
        """
        判断一个对象的store是否满(特指RESOURCE_ENERGY)

        Args:
            obj: 

        Returns:
        
        """
        if not obj or not obj.store:
            return True
        return get.energy(obj, True, '=100')


class std:
    """
    标准库基础函数
    """
    OBJECT_PREVIEW_LENGTH = 20

    @staticmethod
    def _caller_() -> str:
        """
        获取上一个函数的caller

        *不会考虑 lambda之类的函数，返回最近的一个实名函数的调用堆栈信息

        ! 不大可能由用户来直接调用

        Returns:
            上一个函数的调用信息
        """
        # __pragma__("js", "var stack = new Error().stack;")
        # __pragma__("js", 'var cline, cname;')
        # __pragma__("js", 'var size = stack.length;')
        i = 3  # 0是本函数，1是调用本函数的函数，2是调用调用本函数的函数
        while i < size:
            # __pragma__("js", r'cline = stack.split("\n")[i];')
            # __pragma__("js", r'cname = cline.match(/at\s+(.*)\s+\(/)[1];')
            # __pragma__("js", r'if (cname.indexOf("<anonymous>") == -1) break;')
            i += 1
        # __pragma__("js", 'return cline;')

    @staticmethod
    def param_assert(params: list[object], names: list[str], shoulds: list[callable], errs: list[str], __raise: bool = True):
        """
        打印invalid参数错误信息

        Args:
            params: 参数列表 list of object
            names: 参数名列表 list of string
            shoulds: 期望的参数检查列表 list of function
            errs: 对应的错误信息列表 list of string
            __raise: 是否抛出异常(默认True)

        Returns:

        """
        length = min(len(params), len(shoulds), len(errs))  # 保证长度一致
        errored_params, errored_names, errored_errs, err_flag = [], [], [], False  # 错误参数列表
        for i in range(length):
            if not shoulds[i](params[i]):
                errored_params.append(params[i])
                errored_names.append(names[i])
                errored_errs.append(errs[i])
                err_flag = True
        if err_flag:  # 如果有错误
            caller_info = std._caller_()
            error_params = []

            txt = "[PyScreeps-Arena Error Params]:" + caller_info
            length = len(errored_names)
            for i in range(length):
                error_params.append(errored_params[i])
                txt += "\n\terror '" + errored_names[i] + "': '" + errored_errs[
                    i] + "'  // preview: see at the above."
            txt += '\n ----------------------------------------------- \n'

            if not __raise:
                # __pragma__('js', '{}', 'console.log(txt)')
                return False
            txt = txt + "\nTick Aborted by Param Error.\n\n[Stack Info]:"
            print("Error Params:")
            for i, each in enumerate(error_params):
                jprint(i, each)
            # __pragma__('js', '{}', 'throw new Error(txt);')

        return True

    @staticmethod
    def _expand_composite_as_list(filter_composite: tuple | list | set | callable):
        """
        展开函数容器表达式为list
        :param filter_composite:
        :return:
        """
        _ = []
        if isinstance(filter_composite, (tuple, list)):
            for each in filter_composite:
                _.extend(std._expand_composite_as_list(each))
            return _
        elif isinstance(filter_composite, set):
            return std._expand_composite_as_list(next(iter(filter_composite)))
        else:
            return [filter_composite]

    @staticmethod
    def _generate_combo_js_eval(filter_composite: tuple | list | set | callable, fid: dict):
        """
        生成js表达串
        :param filter_composite:
        :param fid:
        :return:
        """
        if isinstance(filter_composite, list):
            return "(" + ' || '.join(std._generate_combo_js_eval(each, fid) for each in filter_composite) + ")"
        elif isinstance(filter_composite, tuple):
            return "(" + ' && '.join(std._generate_combo_js_eval(each, fid) for each in filter_composite) + ")"
        elif isinstance(filter_composite, set):
            return ' !(' + std._generate_combo_js_eval(next(iter(filter_composite)), fid) + ')'
        else:
            return '%' + fid[filter_composite] + '%'

    _expand_memory = {}

    @staticmethod
    def combo_filter(filter_composite: tuple | list | set | callable) -> callable:
        """
        展开函数容器表达式

        函数容器表达式是一个由list(表示或)，tuple(表示与), set(表示not)组成的表达式，支持嵌套

        * 你可以直接使用combo来代替std.combo_filter

        Args:
            filter_composite: 只由tuple、list和set组成的过滤器结构(最小单元是callable)

        Returns:
            一个新的可以表达输入表达式的函数
        """
        memory_key = str(filter_composite)
        fn = std._expand_memory.py_get(memory_key, None)  # py_get是python的dict的get方法
        if fn: return fn

        fn_ids, id_fns = {}, {}  # 函数到id的映射，id到函数的映射
        _ = std._expand_composite_as_list(filter_composite)  # 将表达式展开为list
        for f_id, each_fn in enumerate(set(_)):
            f_id += 1
            fn_ids[each_fn], id_fns[f_id] = f_id, each_fn

        # 创建js表达串，其中各个函数使用%fid%表示S
        _eval_str = std._generate_combo_js_eval(filter_composite, fn_ids)

        def _inner(obj):
            eval_str = _eval_str + ""  # js string copy
            for fn_id, func in id_fns.items():
                # __pragma__('js', "eval_str = eval_str.replace('%' + fn_id + '%', String(!!func(obj)));")
                pass

            return eval(eval_str)

        std._expand_memory[memory_key] = _inner
        return _inner

    @staticmethod
    def info(caller_name: str, *args: str):
        """
        [caller_name Info]: *args

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'console.log("[" + caller_name, "Info]:", ...args)')
        pass

    @staticmethod
    def warn(caller_name: str, *args: str):
        """
        [caller_name Warn]: *args

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'console.log("[" + caller_name, "Warn]:", ...args)')
        pass

    @staticmethod
    def error(caller_name: str, *args: str):
        """
        [caller_name Error]: *args

        * 会抛出一个js的Error

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'throw new Error("[" + caller_name + " Error]: " + args.join(" "))')
        pass

    @staticmethod
    def show_usage():
        print("cpu time: ", round(get.cpu_time() / 1000), 'us / 50,000us')
        heap = get.heap()
        print("heap:", round(heap.used_heap_size / 1024), 'KB /', round(heap.heap_size_limit / 1024), "KB")


combo = std.combo_filter


class put:
    """
    标准命令输出函数库

    格式说明(例如):


    unit: st.friend & st.movable (ES: st.creep) 一个可移动的友方单位   # '完全检查'时需要为st.friend & st.movable，'必要检查'时需要为st.creep

    to: st.point | int (ES: X)一个目标点或是一个方向   # '完全检查'时需要为st.point | int，'必要检查'时不检查该参数

    options: Options (X) 寻路选项(只在to为st.point时有效)   # 任何情况下都不会检查该参数，你需要确保传入的参数是正确的

    __assert: bool 是否进行参数检查   # 该参数任何情况下都不会被检查

    """
    _spawn_memory = []  # 用于存储spawn生产信息的memory

    @staticmethod
    def move(unit: st.friend & st.movable, to: st.point | int, options: Options = None, __assert: bool = True) -> int:
        """
        命令Creep移动到目标点或向某个方向移动

        Args:
            unit: st.friend & st.movable (ES: st.creep) 一个可移动的友方单位
            to: st.point | int (ES: X)一个目标点或是一个方向
            options: Options (X) 寻路选项(只在to为st.point时有效)
            __assert: bool 是否进行参数检查

        Returns:
            成功返回OK(0)，否则返回错误码(<0)
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, to],
                             ['unit', 'to'],
                             [combo((st.friend, st.movable)), combo([st.point, st.number])],
                             [st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE, st.NOT_POINT + ' | ' + st.NOT_NUMBER])
            # else
            if to is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        if to.x != undefined and to.y != undefined:  # to is a point:
            if options:  # 寻路 options
                if unit.path_goal != to:  # 如果目标不同，重新寻路
                    path_res = searchPath(unit, to, options)
                    if path_res.incomplete:
                        print('Can not find a options path to target:', to, "use default path.")
                    else:
                        # 保留对同一目标的寻路结果(减少cpu消耗)
                        unit.path = path_res.path
                        unit.path_goal = to
                        unit.path_index = 0
            if unit.path:
                to = unit.path[unit.path_index]
                unit.path_index += 1
                if unit.path_index >= unit.path.length:
                    unit.path = None
                    unit.path_index = 0
            _ = unit.moveTo(to)
        else:
            _ = unit.move(to)

        if _ == OK:  # 作为判定依据  (get.ticks()应该效率很高)
            unit.last_move = get.ticks()

        return _

    @staticmethod
    def push(unit: list | (st.friend & st.movable), target: st.friend & st.movable, __assert: bool = True) -> int:
        """
        命令一个或多个Creep推动目标Creep
        * 可以让多个高机动力的Creep帮助推动一个低机动力的Creep移动(target必须正在移动)

        Args:
            unit: list | (st.friend & st.movable) (ES: st.creep | list) 一个可移动的友方单位
            target: st.friend & st.movable (ES: st.creep)一个可移动的友方单位
            __assert: bool 是否进行参数检查

        Returns:
            成功返回OK(0)，否则返回错误码(<0)
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo([st.list, (st.friend, st.movable)]), combo((st.friend, st.movable))],
                             ['obj is not a list | (' + st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE + ')', st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE])
            # else
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo([st.creep, st.list]), st.creep],
                             ['obj is not a creep | list', st.NOT_CREEP])
            # endif
        # endif

        if isinstance(unit, list):
            for each in unit:
                target.pull(each)
                _ = put.move(each, target, None, False)
                if _ != OK:
                    return _
        else:
            target.pull(unit)
            return put.move(unit, target, None, False)

    @staticmethod
    def attack(unit: st.friend & st.atkable, target: st.enemy & st.hitable, move: bool | Options = True, __assert: bool = True) -> Result:
        """
        命令Tower或Creep攻击敌方目标

        Args:
            unit: st.friend & st.atkable (ES: *.attack != undefined) 一个友方的可攻击单位，例如：*.attack != undefined
            target: st.enemy & st.hitable (ES: X) 一个敌方的可被攻击的单位
            move: bool | Options (X) 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            Result (如果没有执行某条操作，则不包含对应属性)

                .melee: int 发动近战攻击时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .ranged: int 发动远程攻击时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .move: int   移动时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.atkable)), combo((st.enemy, st.hitable))],
                             [st.NOT_FRIEND + ' & ' + st.NOT_ATKABLE, st.NOT_ENEMY + ' & ' + st.NOT_HITABLE])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [lambda obj: obj and obj.attack != undefined],
                             ['unit do not have .attack method.'])
            # endif
        # endif

        # insert if (unit instanceof StructureTower) return {attack: unit.attack(target)};

        # 获取攻击距离
        melee, ranged = st.melee(unit), st.ranged(unit)
        dist = get.distance(unit, target)  # 获取距禮
        # insert var result = {};

        if dist == 1:
            if melee:
                result.melee = unit.attack(target)
            if ranged:
                result.ranged = unit.rangedMassAttack()

            if move and not melee and st.atkable(target):  # 如果敌方单位能攻击, 自身又不能近战攻击
                result.move = put.escape(unit, target, None if move is True else move, False)
        elif dist <= 3:
            if ranged:
                result.ranged = unit.rangedAttack(target)
                if move and dist <= 2:  # 如果敌方单位是近战单位并且距离为2(尝试风筝对面)
                    result.move = put.escape(unit, target, None if move is True else move, False)
            elif move and melee:
                result.move = put.move(unit, target, None if move is True else move, False)
        elif move:
            result.move = put.move(unit, target, None if move is True else move, False)

        if result.melee == OK:
            unit.last_melee = get.ticks()
        if result.ranged == OK:
            unit.last_ranged = get.ticks()

        return result

    @staticmethod
    def heal(unit: st.friend & st.healable, target: st.friend & st.creep, move: bool | Options = True, __assert: bool = True) -> Result:
        """
        命令Tower或Creep治疗目标单位

        Args:
            unit: st.friend & st.healable (ES: *.heal != undefined) 一个友方的具有治疗能力的单位
            target: st.friend & st.creep (ES: X) 一个友方的creep
            move: bool | Options (X) 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            Result (如果没有执行某条操作，则不包含对应属性)

                .heal: int 近距离治疗时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .ranged: int 远程治疗时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .move: int   移动时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

        """

        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.healable)), combo((st.friend, st.creep))],
                             [st.NOT_FRIEND + ' & ' + st.NOT_HEALABLE, st.NOT_FRIEND + ' & ' + st.NOT_CREEP])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [lambda obj: obj and obj.heal != undefined],
                             ['unit do not have .heal method.'])
            # endif
        # endif

        # insert if (unit instanceof StructureTower) return {heal: unit.heal(target)};
        # insert var result = {};

        dist = get.distance(unit, target)
        if dist <= 1:
            result.heal = unit.heal(target)
        elif dist <= 3:
            result.ranged = unit.rangedHeal(target)
        elif move:
            result.move = put.move(unit, target, None if move is True else move, False)

        if result.heal == OK or result.ranged == OK:
            unit.last_heal = get.ticks()
        return result

    @staticmethod
    def fetch(unit: st.friend & st.storable, target: st.storable | st.resource, resource_type: int = RESOURCE_ENERGY, amount: int | None = None,
              move: bool | Options = True,
              __assert: bool = True) -> int:
        """
        命令单位从目标处取出资源

        Args:
            unit: st.friend & st.storable (ES: st.creep) 一个友方的可携带资源的单位
            target: st.storable | st.resource (ES: X)一个可存储的目标或掉落的资源
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            amount: int | None (X)资源数量，如果没有指定，则取出所有资源
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.storable)), combo([st.storable, st.resource])],
                             [st.NOT_FRIEND + ' & ' + st.NOT_STORABLE, st.NOT_STORABLE + ' | ' + st.NOT_RESOURCE])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        if move and get.distance(unit, target) > 1:
            return put.move(unit, target, None if move is True else move, False)

        # insert if((target instanceof Resource) && target.resourceType == RESOURCE_ENERGY) return unit.pickup(target);

        unit.last_fetch = get.ticks()

        if amount:
            # insert if(target instanceof Creep) return target.transfer(unit, resource_type, amount);
            # insert if(target instanceof Structure) return unit.withdraw(target, resource_type, amount);
            pass
        else:
            # insert if(target instanceof Creep) return target.transfer(unit, resource_type);
            # insert if(target instanceof Structure) return unit.withdraw(target, resource_type);
            pass
        return ERR_INVALID_TARGET

    @staticmethod
    def deposit(unit: st.friend & st.storable, target: st.storable | None, resource_type: int = RESOURCE_ENERGY, amount: int | None = None,
                move: bool | Options = True, __assert: bool = True) -> int:
        """
        命令单位将身上的资源放置于目标处

        Args:
            unit: st.friend & st.storable (ES: st.creep) 一个友方的可携带资源的单位
            target: st.storable | None (ES: X)一个可存储的目标，如果为None，单位会直接丢弃资源到原地
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            amount: int | None (X)资源数量，如果没有指定，则转移所有资源
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)

        Examples:
            ```python
            # 让worker采集资源并把采集到的资源运回spawn
            worker = get.friend(lambda obj: obj.name == 'worker')
            spawn = get.spawn(st.friend)
            source = get.source()
            if get.energy(worker, True) == 100:
                put.deposit(worker, spawn, RESOURCE_ENERGY)
            else:
                put.harvest(worker, source)
            ```
            ```python
            # 让carrier从box不停地取出资源并把资源丢在地上
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            box = get.closest(carrier, get.boxes())
            if get.energy(box) > 0:
                if get.energy(carrier) == 0:
                    put.fetch(carrier, box, RESOURCE_ENERGY)
                else:
                    put.deposit(carrier, None, RESOURCE_ENERGY)
            ```
            ```python
            # 让carrier从box取出资源并把资源送给worker
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            worker = get.friend(lambda obj: obj.name == 'worker')
            box = get.closest(carrier, get.boxes(combo( {st.empty} )))  # 最近的非空box
            if get.energy(carrier, True) > 50:  # 自身带有50%以上的能量就先给worker
                put.deposit(carrier, worker, RESOURCE_ENERGY)
            elif box:
                put.fetch(carrier, box, RESOURCE_ENERGY)
            ```
        """

        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.storable)), combo([st.storable, lambda obj: obj is None])],
                             [st.NOT_FRIEND + ' & ' + st.NOT_STORABLE, st.NOT_STORABLE + ' | ' + 'obj is not None'])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        unit.last_deposit = get.ticks()

        if target is None:
            return unit.drop(resource_type, amount)

        if move and get.distance(unit, target) > 1:
            return put.move(unit, target, None if move is True else move, False)

        if amount:
            return unit.transfer(target, resource_type, amount)
        else:
            return unit.transfer(target, resource_type)

    @staticmethod
    def build(unit: st.friend & st.workable, site: st.site, move: bool | Options = True, __assert: bool = True) -> int:
        """
        命令单位建造建筑

        Args:
            unit: st.friend & st.workable (ES: st.creep) 一个友方的可工作单位
            site: st.site (ES: X)一个ConstructionSite实例对象
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
        """

        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit],
                             ['unit'],
                             [combo((st.friend, st.workable))],
                             [st.NOT_FRIEND + ' & ' + st.NOT_WORKABLE])
            # else
            if site is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        unit.last_build = get.ticks()

        if move and get.distance(unit, site) > 3:
            return put.move(unit, site, None if move is True else move, False)
        return unit.build(site)

    @staticmethod
    def harvest(unit: st.friend & st.workable, target: st.source, move: bool | Options = True, __assert: bool = True) -> int:
        """
        命令单位采集资源

        Args:
            unit: st.friend & st.workable (ES: st.creep) 一个友方的可工作单位
            target: st.source (ES: X)一个资源点
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)

        Examples:
            ```python
            # 让worker采集资源(装满了就回家，否则就继续采集)
            worker = get.friend(lambda obj: obj.name == 'worker')
            spawn = get.spawn(st.friend)
            source = get.source()
            if get.energy(worker, True) == 100:
                put.deposit(worker, spawn, RESOURCE_ENERGY)
            else:
                put.harvest(worker, source)
            ```
        """

        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.workable)), st.source],
                             [st.NOT_FRIEND + ' & ' + st.NOT_WORKABLE, st.NOT_SOURCE])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        unit.last_harvest = get.ticks()

        if move and get.distance(unit, target) > 1:
            return put.move(unit, target, None if move is True else move, False)

        return unit.harvest(target)

    site = createConstructionSite

    @staticmethod
    def create(spawn: st.friend & st.spawn, recipe: list[str], name: str | None = None, __assert: bool = True) -> int | object:
        """
        命令spawn按照指定的配方生产一个creep

        Args:
            spawn: st.friend & st.spawn (ES: st.spawn)一个友方的Spawn
            recipe: list[str] (ES: X) 一个creep的配方, 一般用const下的MOVE, CARRY, WORK等常量
            name: str | None (X) 一个creep的名字(默认为None), 这样创建的creep会带有.name属性
            __assert: bool 是否进行参数检查

        Returns:
            int | object 如果成功(生产完成)，返回创建的creep对象; 否则返回错误码(<0)

        Examples:
            ```python
            # 生成一个名为'worker'的creep
            spawn = get.spawn(st.friend)
            worker = get.friend(lambda obj: obj.name == 'worker')
            if not worker:
                put.create(spawn, [CARRY, MOVE, WORK], 'worker')
            ```
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([spawn],
                             ['spawn'],
                             [combo((st.spawn, st.friend))],
                             [st.NOT_SPAWN + ' & ' + st.NOT_FRIEND])
            # else
            std.param_assert([spawn],
                             ['spawn'],
                             [st.spawn],
                             [st.NOT_SPAWN])
            # endif
        # endif

        ready_index, now_ticks = -1, get.ticks()
        for i in range(len(put._spawn_memory)):
            if put._spawn_memory[i].birth_date <= now_ticks:
                ready_index = i
                break
        if ready_index != -1:
            return put._spawn_memory.pop(ready_index)

        if spawn.lock:
            if now_ticks <= spawn.lock:
                return ERR_BUSY
            spawn.lock = undefined

        # 开始生产
        info = spawn.spawnCreep(recipe)
        if info.error:
            return info.error

        spawn.lock = now_ticks + 2
        if name: info.object.name = name
        info.object.birth_date = get.ticks() + CREEP_SPAWN_TIME * len(recipe)
        put._spawn_memory.append(info.object)

        return ERR_BUSY

    # -------------------------------------- Extension: --------------------------------------

    @staticmethod
    def escape(unit: st.friend & st.movable, target: st.point, options: Options = None, __assert: bool = True) -> int:
        """
        命令Creep远离目标

        ! 不是很好的逃离算法，只是一个简单的逃跑算法(尝试过传入.flee，但是貌似不工作)

        Args:
            unit: st.friend, st.movable (ES: st.creep) 一个可移动的友方单位
            target: st.point (ES: X)目标点
            options: Options (X) 寻路选项
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)

        Examples:
            ```python
            # 让worker远离最近的敌人
            worker = get.friend(lambda obj: obj.name == 'worker')
            enemy = get.closest(worker, get.enemies())
            if enemy and get.distance(worker, enemy) <= 8:
                put.escape(worker, enemy)
            ```
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.movable)), st.point],
                             [st.NOT_FRIEND + " & " + st.NOT_MOVABLE, st.NOT_POINT])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        pos = Options()
        pos.x = unit.x + get.sign(unit.x - target.x)
        pos.y = unit.y + get.sign(unit.y - target.y)
        if get.terrain(pos) == TERRAIN_WALL:
            spawn = get.spawn(st.friend)
            if spawn:
                return put.move(unit, spawn, options)
        return put.move(unit, pos, options)


    @staticmethod
    def intermit(unit: st.friend & st.storable & st.movable, target: st.storable, resource_type: int = RESOURCE_ENERGY, options: Options = None,
                 __assert: bool = True) -> int:
        """
        断断续续地搬运资源到目标

        * 特别适用于空载和满载状态下移动能力差距巨大的单位

        Args:
            unit: st.friend & st.storable & st.movable (ES: st.creep) 一个友方的可移动的可存储资源的单位
            target: st.storable (ES: X)一个可存储的目标
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            options: Options (X) 寻路选项
            __assert: bool 是否进行参数检查

        Returns:
            int 成功搬运完毕或是无资源可搬运，返回DONE(1); 搬运中返回OK(0)或是错误码(<0)

        Examples:
            ```python
            # 将身上或地上的资源搬运回家(确保身上或地上有资源)
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            spawn = get.spawn(st.friend)
            put.intermit(carrier, spawn, RESOURCE_ENERGY)
            ```
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo((st.friend, st.storable, st.movable)), st.storable],
                             [st.NOT_FRIEND + ' & ' + st.NOT_STORABLE + ' & ' + st.NOT_MOVABLE, st.NOT_STORABLE])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        drops = get.resources(lambda obj: obj.resourceType == resource_type and get.distance(unit, obj) <= 1)
        free = unit.store.getFreeCapacity(resource_type)
        if len(drops) and free > 0:
            unit.last_intermit = get.ticks()
            return put.fetch(unit, drops[0], resource_type, free, False, False)  # 捡起东西后这个回合就不会再移动了

        current = unit.store.getUsedCapacity(resource_type)
        if current == 0:
            return DONE

        unit.last_intermit = get.ticks()

        dist = get.distance(unit, target)
        if dist <= 1:
            _ = put.deposit(unit, target, resource_type, None, options if options else True, False)
            if _ != OK:
                return _
            return DONE
        else:

            _ = put.deposit(unit, None, resource_type, None, options if options else True, False)
            if _ != OK:
                return _
            return put.move(unit, target, options, False)

    @staticmethod
    def follow(unit: list | (st.friend & st.movable), target: st.movable, distance: int | tuple, options: Options = None,
               move: bool | Options = True, __assert: bool = True) -> int:
        """
        命令一个或多个单位跟随目标(可以是尾随，Creep祟祟)

        * 跟随友方时，distance为距离最大值，超出距离(且启用move)时将命令target主动靠近unit(或最远的unit)

        * 跟随敌方时，distance为距离最小值

        Args:
            unit: list | (st.friend & st.movable) (ES: list | st.creep) 一个或多个可移动的友方单位
            target: st.point (ES: X) 一个目标点
            distance: int | tuple (X)最大或最小距离, tuple: 距离范围, 只在友方时有效(允许忽略过于遥远的友方跟随者)。否则将[0]作为参数
            options: Options (X) unit进行移动时的move options
            move: bool | Options (X) 友方target是否会回靠(的options)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)

        Examples:
            ```python
            leader = get.friend(lambda obj: obj.name == 'leader')
            warriors = get.friends(lambda obj: obj.name == 'warrior')
            # warriors跟随leader，距离不超过5。leader不考虑距离超过20的warrior。
            put.follow(warriors, leader, (5, 20))
            ```
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [combo([st.list, (st.friend, st.movable)]), st.point],
                             ['obj is not python list. | (' + st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE + ')', st.NOT_POINT])
            # else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [combo([st.list, st.creep])],
                             ['obj is not python list. | ' + st.NOT_CREEP])
            # endif
        # endif

        target_is_creep = st.creep(target)
        stop_dist, ignore_dist = distance if isinstance(distance, tuple) else (distance, 0xffff)
        if isinstance(unit, list):
            max_dist, furthest = 0, None
            for _unit in unit:
                dist = get.distance(_unit, target)

                if target.my:

                    if ignore_dist > dist > max_dist:  # 只有在友方时才考虑
                        max_dist = dist
                        furthest = _unit

                    _ = put.move(_unit, target, options, False)
                    if _ != OK:
                        return _
                else:
                    if dist <= stop_dist:
                        _ = put.escape(_unit, target, options, False)
                        if _ != OK:
                            return _
                    _ = put.move(_unit, target, options, False)
                    if _ != OK:
                        return _

            # print("follows furthest:", target.my, max_dist, furthest, "move:", move)
            if move and target.my and target_is_creep and furthest and max_dist > stop_dist:
                return put.move(target, furthest, None if move is True else move, False)
            return OK
        else:
            dist = get.distance(unit, target)
            if target.my:
                if move and target_is_creep and ignore_dist >= dist >= stop_dist:
                    _ = put.move(target, unit, None if move is True else move, False)
                    if _ != OK:
                        return _
                return put.move(unit, target, options, False)
            else:
                if dist <= stop_dist:
                    return put.escape(unit, target, options, False)
                return put.move(unit, target, options, False)

    @staticmethod
    def carry(unit: st.friend & st.storable & st.movable, src: st.storable, dst: st.storable, resource_type: int = RESOURCE_ENERGY,
              options: Options = None, intermit: bool = False,
              __assert: bool = True) -> int:
        """
        命令单位从src处搬运资源到dst处

        Args:
            unit: st.friend & st.storable & st.movable (ES: st.creep) 一个友方的可携带资源的可移动单位
            src: st.storable (ES: X) 从哪里取得资源
            dst: st.storable (ES: X) 被搬运资源的目标容器
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            options: Options (X) 寻路选项
            intermit: bool 是否断断续续地搬运资源
            __assert: bool 是否进行参数检查

        Returns:
            int 若intermit=False，成功返回OK(0)，否则返回错误码(<0); 若intermit=True，则在搬运完毕或是无资源可搬运时，返回DONE(1)，其余和前者相同

        Examples:
            ```python
            # 将身上的资源搬运回家(确保身上有资源)
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            spawn = get.spawn(st.friend)
            box = get.closest(carrier, get.boxes(st.energetic))
            put.carry(carrier, box, spawn, RESOURCE_ENERGY)
            ```
        """
        # if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, src, dst],
                             ['unit', 'src', 'dst'],
                             [combo((st.friend, st.storable, st.movable)), st.storable, st.storable],
                             [st.NOT_FRIEND + ' & ' + st.NOT_STORABLE + ' & ' + st.NOT_MOVABLE, st.NOT_STORABLE, st.NOT_STORABLE])
            # else
            if src is undefined or dst is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [st.creep],
                             [st.NOT_CREEP])
            # endif
        # endif

        if not intermit:
            if get.energy(unit) == 0:
                return put.fetch(unit, src, resource_type, None, options if options else True, False)
            return put.deposit(unit, dst, resource_type, None, options if options else True, False)
        else:
            drops = get.resources(lambda obj: obj.resourceType == resource_type and get.distance(unit, obj) <= 1)
            free = unit.store.getFreeCapacity(resource_type)
            if len(drops) and free > 0:
                return put.fetch(unit, drops[0], resource_type, free, False, False)  # 捡起东西后这个回合就不会再移动了

            current = unit.store.getUsedCapacity(resource_type)
            if current == 0:
                return put.fetch(unit, src, resource_type, None, options if options else True, False)

            dist = get.distance(unit, dst)
            if dist <= 1:
                _ = put.deposit(unit, dst, resource_type, None, options if options else True, False)
                if _ != OK:
                    return _
                return DONE
            else:

                _ = put.deposit(unit, None, resource_type, None, options if options else True, False)
                if _ != OK:
                    return _
                return put.move(unit, dst, options, False)


class get:
    @staticmethod
    def ticks() -> int:
        """
        获取当前游戏tick数

        Returns:
            int
        """
        pass

    @staticmethod
    def cpu_time() -> int:
        """
        获取游戏当前tick消耗的cpu时间(us)

        Returns:
            int
        """
        pass

    @staticmethod
    def heap() -> HeapInfo:
        """
        获取当前游戏内存使用情况

        Returns:
            HeapInfo  具体属性详见Arena的HeapInfo类型
        """
        pass

    @staticmethod
    def byid(id: str) -> GameObject:
        """
        通过id获取对象

        Args:
            id: str (X) 对象的id

        Returns:
            GameObject
        """
        pass

    # 上面的定义是用于文档生成的，实际上为了减少cpu消耗，这里不会再包装一层函数
    ticks = getTicks
    cpu_time = getCpuTime
    heap = getHeapStatistics
    byid = getObjectById

    @staticmethod
    def distance(obj: st.point, target: st.point) -> int:
        """
        返回obj到目标的距离(单位: 方块数)

        Args:
            obj: st.point (X) 一个坐标点
            target: st.point (X) 一个坐标点

        Returns:
            int
        """
        if target is None:
            print('get.distance: target is None. Return 65535')
            return 0xffff
        return obj.getRangeTo(target)

    @staticmethod
    def sign(x: int) -> int:
        """
        返回x的符号
        Args:
            x:

        Returns:
            0, 1, -1
        """
        if x < 0:
            return -1
        if x > 0:
            return 1
        return 0

    @staticmethod
    def find(objs: list | tuple, filter_fn: list | tuple | set | callable) -> object:
        """
        Find the first object that satisfies the condition

        Args:
            objs: list | tuple (X) 待查找的对象列表
            filter_fn: list | tuple | set | callable (X) 容器函数表达式

        Returns:
            object
        """
        for obj in objs:
            if filter_fn(obj):
                return obj
        return None

    @staticmethod
    def filter(objs: list | tuple, filter_fn: list | tuple | set | callable) -> list:
        """
        Returns a list of objects that satisfy the condition

        Args:
            objs: list | tuple (X) 待查找的对象列表
            filter_fn: list | tuple | set | callable (X) 容器函数表达式

        Returns:
            list
        """
        return list(filter(filter_fn, objs))

    @staticmethod
    def classname(game_object: GameObject) -> str:
        """
        获取游戏相关的js对象的类名
        Args:
            game_object: GameObject (X) 游戏对象

        Returns:
            str
        """
        # __pragma__('js', "if (game_object instanceof Creep) return 'Creep';")
        # __pragma__('js', "if (game_object instanceof Structure) {")
        # __pragma__('js', "    if (game_object instanceof StructureSpawn) return 'Spawn';")
        # __pragma__('js', "    if (game_object instanceof StructureExtension) return 'Extension';")
        # __pragma__('js', "    if (game_object instanceof StructureRoad) return 'Road';")
        # __pragma__('js', "    if (game_object instanceof StructureWall) return 'Wall';")
        # __pragma__('js', "    if (game_object instanceof StructureRampart) return 'Rampart';")
        # __pragma__('js', "    if (game_object instanceof StructureTower) return 'Tower';")
        # __pragma__('js', "    return 'Structure';")
        # __pragma__('js', "}")
        # __pragma__('js', "if (game_object instanceof Source) return 'Source';")
        # __pragma__('js', "if (game_object instanceof Flag) return 'Flag';")
        # __pragma__('js', "if (game_object instanceof ConstructionSite) return 'Site';")
        # __pragma__('js', "if (game_object instanceof Resource) return 'Resource';")
        # __pragma__('js', "if (game_object instanceof GameObject) return 'GameObject';")
        # __pragma__('js', "return 'Object';")
        pass

    @staticmethod
    def terrain(x_or_point: int | st.point, y: None | int = None) -> int:
        """
        获取指定位置的地形

        Args:
            x_or_point: int| st.point (X) x坐标或者坐标点
            y: None|int (X) y坐标。 如果传入了y坐标，那么期望的第一个参数x为int类型

        Returns:
            int 地形常量
        """
        return getTerrainAt(Position(x_or_point, y)) if y else getTerrainAt(x_or_point)

    @staticmethod
    def all(p_type: type, filter_fn: list | tuple | set | callable | None = None) -> list:
        """
        获取所有指定类型、指定条件的所有对象

        Args:
            p_type: type (X) 对象的类型
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        objs = list(getObjectsByPrototype(p_type))
        if p_type == Creep:  # 过滤掉还没准备好的Creep
            tmp, now_ticks = [], get.ticks()
            for obj in objs:
                if not obj.birth_date or (obj.my and obj.birth_date <= now_ticks):
                    tmp.append(obj)
            # __pragma__("js", "objs = tmp;")
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            _ = filter(filter_fn, objs)
            return _
        return objs

    @staticmethod
    def one(p_type: type, filter_fn: list | tuple | set | callable | None = None) -> object | None:
        """
        获取所有指定类型、指定条件的一个对象

        Args:
            p_type: type (X) 对象的类型
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            object | None 如果没有找到，返回None
        """
        objs = get.all(p_type, filter_fn)
        return objs[0] if objs else None

    @staticmethod
    def creeps(filter_fn: list | tuple | set | callable | None = None) -> list[Creep]:
        """
        获取所有满足条件的Creep

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Creep, filter_fn)

    @staticmethod
    def creep(filter_fn: list | tuple | set | callable | None = None) -> Creep | None:
        """
        获取一个满足条件的Creep

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Creep 如果没有找到，返回None
        """
        return get.one(Creep, filter_fn)

    @staticmethod
    def friends(filter_fn: list | tuple | set | callable | None = None) -> list[GameObject]:
        """
        获取所有满足条件的友方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Creep, lambda obj: obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def friend(filter_fn: list | tuple | set | callable | None = None) -> GameObject | None:
        """
        获取一个满足条件的友方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            GameObject 如果没有找到，返回None
        """
        return get.one(Creep, lambda obj: obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def enemies(filter_fn: list | tuple | set | callable | None = None) -> list[GameObject]:
        """
        获取所有满足条件的敌方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Creep, lambda obj: not obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def enemy(filter_fn: list | tuple | set | callable | None = None) -> GameObject | None:
        """
        获取一个满足条件的敌方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            GameObject 如果没有找到，返回None
        """
        return get.one(Creep, lambda obj: not obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def spawns(filter_fn: list | tuple | set | callable | None = None) -> list[StructureSpawn]:
        """
        获取所有满足条件的Spawn

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureSpawn, filter_fn)

    @staticmethod
    def spawn(filter_fn: list | tuple | set | callable | None = None) -> StructureSpawn | None:
        """
        获取一个满足条件的Spawn

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureSpawn 如果没有找到，返回None
        """
        return get.one(StructureSpawn, filter_fn)

    @staticmethod
    def structures(filter_fn: list | tuple | set | callable | None = None) -> list[Structure]:
        """
        获取所有满足条件的Structure

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Structure, filter_fn)

    @staticmethod
    def structure(filter_fn: list | tuple | set | callable | None = None) -> Structure | None:
        """
        获取一个满足条件的Structure

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Structure 如果没有找到，返回None
        """
        return get.one(Structure, filter_fn)

    @staticmethod
    def sources(filter_fn: list | tuple | set | callable | None = None) -> list[Source]:
        """
        获取所有满足条件的Source

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Source, filter_fn)

    @staticmethod
    def source(filter_fn: list | tuple | set | callable | None = None) -> Source | None:
        """
        获取一个满足条件的Source

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Source 如果没有找到，返回None
        """
        return get.one(Source, filter_fn)

    @staticmethod
    def sites(filter_fn: list | tuple | set | callable | None = None) -> list[ConstructionSite]:
        """
        获取所有满足条件的ConstructionSite

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(ConstructionSite, filter_fn)

    @staticmethod
    def site(filter_fn: list | tuple | set | callable | None = None) -> ConstructionSite | None:
        """
        获取一个满足条件的ConstructionSite

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            ConstructionSite 如果没有找到，返回None
        """
        return get.one(ConstructionSite, filter_fn)

    @staticmethod
    def resources(filter_fn: list | tuple | set | callable | None = None) -> list[Resource]:
        """
        获取所有满足条件的Resource

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Resource, filter_fn)

    @staticmethod
    def resource(filter_fn: list | tuple | set | callable | None = None) -> Resource | None:
        """
        获取一个满足条件的Resource

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Resource 如果没有找到，返回None
        """
        return get.one(Resource, filter_fn)

    @staticmethod
    def towers(filter_fn: list | tuple | set | callable | None = None) -> list[StructureTower]:
        """
        获取所有满足条件的Tower

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureTower, filter_fn)

    @staticmethod
    def tower(filter_fn: list | tuple | set | callable | None = None) -> StructureTower | None:
        """
        获取一个满足条件的Tower

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureTower 如果没有找到，返回None
        """
        return get.one(StructureTower, filter_fn)

    @staticmethod
    def walls(filter_fn: list | tuple | set | callable | None = None) -> list[StructureWall]:
        """
        获取所有满足条件的Wall

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureWall, filter_fn)

    @staticmethod
    def wall(filter_fn: list | tuple | set | callable | None = None) -> StructureWall | None:
        """
        获取一个满足条件的Wall

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureWall 如果没有找到，返回None
        """
        return get.one(StructureWall, filter_fn)

    @staticmethod
    def ramparts(filter_fn: list | tuple | set | callable | None = None) -> list[StructureRampart]:
        """
        获取所有满足条件的Rampart

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureRampart, filter_fn)

    @staticmethod
    def rampart(filter_fn: list | tuple | set | callable | None = None) -> StructureRampart | None:
        """
        获取一个满足条件的Rampart

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureRampart 如果没有找到，返回None
        """
        return get.one(StructureRampart, filter_fn)

    @staticmethod
    def extensions(filter_fn: list | tuple | set | callable | None = None) -> list[StructureExtension]:
        """
        获取所有满足条件的Extension

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureExtension, filter_fn)

    @staticmethod
    def extension(filter_fn: list | tuple | set | callable | None = None) -> StructureExtension | None:
        """
        获取一个满足条件的Extension

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureExtension 如果没有找到，返回None
        """
        return get.one(StructureExtension, filter_fn)

    @staticmethod
    def boxes(filter_fn: list | tuple | set | callable | None = None) -> list[StructureContainer]:
        """
        获取所有满足条件的Container

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureContainer, filter_fn)

    @staticmethod
    def box(filter_fn: list | tuple | set | callable | None = None) -> StructureContainer | None:
        """
        获取一个满足条件的Container

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureContainer 如果没有找到，返回None
        """
        return get.one(StructureContainer, filter_fn)

    @staticmethod
    def roads(filter_fn: list | tuple | set | callable | None = None) -> list[StructureRoad]:
        """
        获取所有满足条件的Road

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureRoad, filter_fn)

    @staticmethod
    def road(filter_fn: list | tuple | set | callable | None = None) -> StructureRoad | None:
        """
        获取一个满足条件的Road

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureRoad 如果没有找到，返回None
        """
        return get.one(StructureRoad, filter_fn)

    # --------------------------Arenas---------------------------

    @staticmethod
    def flags(filter_fn: list | tuple | set | callable | None = None) -> list[Flag]:
        """
        获取所有满足条件的Flag

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Flag, filter_fn)

    @staticmethod
    def flag(filter_fn: list | tuple | set | callable | None = None) -> Flag | None:
        """
        获取一个满足条件的Flag

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Flag 如果没有找到，返回None
        """
        return get.one(Flag, filter_fn)

    @staticmethod
    def score_controllers(filter_fn: list | tuple | set | callable | None = None) -> list[ScoreController]:
        """
        获取所有满足条件的ScoreController

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(ScoreController, filter_fn)

    @staticmethod
    def score_controller(filter_fn: list | tuple | set | callable | None = None) -> ScoreController | None:
        """
        获取一个满足条件的ScoreController

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            ScoreController 如果没有找到，返回None
        """
        return get.one(ScoreController, filter_fn)

    @staticmethod
    def storages(filter_fn: list | tuple | set | callable | None = None) -> list[GameObject]:
        """
        获取所有满足条件的Storage

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(GameObject, lambda obj: st.storable(obj) and filter_fn(obj))

    @staticmethod
    def storage(filter_fn: list | tuple | set | callable | None = None) -> GameObject | None:
        """
        获取一个满足条件的Storage

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            GameObject 如果没有找到，返回None
        """
        return get.one(GameObject, lambda obj: st.storable(obj) and filter_fn(obj))

    @staticmethod
    def moved(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过移动命令

        * 只能判断由put下达的移动命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_move == get.ticks() + ticks_offset

    @staticmethod
    def attacked(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过攻击命令

        * 只能判断由put下达的攻击命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return (unit.last_attack == get.ticks() + ticks_offset) or (unit.last_ranged == get.ticks() + ticks_offset)

    @staticmethod
    def meleed(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过近战攻击命令

        * 只能判断由put下达的攻击命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_melee == get.ticks() + ticks_offset

    @staticmethod
    def ranged(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过远程攻击命令

        * 只能判断由put下达的攻击命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_ranged == get.ticks() + ticks_offset

    @staticmethod
    def healed(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过治疗命令

        * 只能判断由put下达的治疗命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_heal == get.ticks() + ticks_offset

    @staticmethod
    def fetched(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过拿取命令

        * 只能判断由put下达的拿取命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_fetch == get.ticks() + ticks_offset

    @staticmethod
    def deposited(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过放置命令

        * 只能判断由put下达的放置命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_deposit == get.ticks() + ticks_offset

    @staticmethod
    def built(unit: st.creep, ticks_offset:int=0) -> bool:
        """
        判断单位当前tick是否被下达过建造命令

        * 只能判断由put下达的建造命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_build == get.ticks() + ticks_offset

    @staticmethod
    def intermited(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过intermit命令

        * 只能判断由put下达的放置命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_intermit == get.ticks() + ticks_offset

    @staticmethod
    def closest(obj: st.point, objs: list[st.point], filter_fn: list | tuple | set | callable | None = None) -> st.point | None:
        """
        返回距离最近的对象

        Args:
            obj: st.point (X) 一个坐标点
            objs: list[st.point] (X) 一个坐标点列表
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            st.point | None 如果没有找到，返回None
        """

        if len(objs) == 0: return None
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            # __pragma__("js", "objs = filter(filter_fn, objs)")
            pass
        # __pragma__("js", 'var tmp_list = [];')
        # __pragma__("js", 'for (var i = 0; i < objs.length; i++)')
        # __pragma__("js", '	tmp_list.push(objs[i]);')
        # __pragma__("js", 'objs = tmp_list;')
        obj = findClosestByRange(obj, objs)
        if obj == undefined: return None
        return obj

    @staticmethod
    def quickest(obj: st.point, objs: list[st.point], filter_fn: list | tuple | set | callable | None = None) -> st.point | None:
        """
        返回移动到目标所需时间最短的对象

        Args:
            obj: st.point (X) 一个坐标点
            objs: list[st.point] (X) 一个坐标点列表
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            st.point | None 如果没有找到，返回None
        """
        if len(objs) == 0: return None
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            # __pragma__("js", "objs = filter(filter_fn, objs)")
            pass
        # __pragma__("js", 'var tmp_list = [];')
        # __pragma__("js", 'for (var i = 0; i < objs.length; i++)')
        # __pragma__("js", '	tmp_list.push(objs[i]);')
        # __pragma__("js", 'objs = tmp_list;')
        obj = findClosestByRange(obj, objs)
        if obj == undefined: return None
        return obj

    @staticmethod
    def inrange(obj: st.point, objs: list[st.point], range: int, filter_fn: list | tuple | set | callable | None = None) -> list[st.point]:
        """
        返回在指定范围内的对象列表

        Args:
            obj: st.point (X) 一个坐标点
            objs: list[st.point] (X) 一个坐标点列表
            range: int (X) 查找的最大范围距离
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        if len(objs) == 0: return []
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            # __pragma__("js", "objs = filter(filter_fn, objs)")
            pass
        # __pragma__("js", 'var tmp_list = [];')
        # __pragma__("js", 'for (var i = 0; i < objs.length; i++)')
        # __pragma__("js", '	tmp_list.push(objs[i]);')
        # __pragma__("js", 'objs = tmp_list;')
        return list(findInRange(obj, objs, range))

    @staticmethod
    def _cmp(value, cmp: str):
        if cmp:
            if cmp[0] == '=':
                return value == int(cmp[1:])
            if cmp[0] == '>':
                return value > int(cmp[1:])
            if cmp[0] == '<':
                return value < int(cmp[1:])
        return value

    @staticmethod
    def energy(target: st.storable, percent: bool = False, cmp: str = None) -> int | bool:
        """
        获取目标的能量值

        Args:
            target: st.storable (X) 一个可存储资源的游戏对象
            percent: bool (X) 是否返回百分比
            cmp: str (X) 便捷比较表达式，如'>100', '<50', '=0' (没有<= >=)

        Returns:
            int | bool 没有cmp字符串时，如果percent为True，返回百分比[0, 100]，否则返回具体能量值int; 有cmp字符串时，返回比较结果bool

        """
        if target is None or not target.store: return -1

        current = target.store.getUsedCapacity(RESOURCE_ENERGY)
        if current is None: return -1
        value = current
        if percent:
            total = target.store.getCapacity(RESOURCE_ENERGY)
            if total is None: return -1
            # __pragma__('js', 'value = int(current / total * 100 + 0.5)')
        return get._cmp(value, cmp) if cmp else value

    @staticmethod
    def health(target: st.hitable, percent: bool = False, cmp: str = None) -> int | bool:
        """
        获取目标的生命值

        Args:
            target: st.hitable (X) 一个可被攻击的游戏对象
            percent: bool (X) 是否返回百分比
            cmp: str (X) 便捷比较表达式，如'>100', '<50', '=0' (没有<= >=)

        Returns:
            int | bool 没有cmp字符串时，如果percent为True，返回百分比[0, 100]，否则返回具体生命值int; 有cmp字符串时，返回比较结果bool
        """
        if target is None: return 0
        if target.hits == undefined: return 0
        current = target.hits
        value = current
        if percent:
            if target.hitsMax == undefined: return 0
            total = target.hitsMax
            # __pragma__('js', 'value = int(current / total * 100 + 0.5)')
        return get._cmp(value, cmp) if cmp else value

    @staticmethod
    def parts(creep: st.creep) -> list[str]:
        """
        获取creep的parts信息

        Args:
            creep: st.creep (X) 一个Creep对象

        Returns:
            list[str]  返回一个列表，包含了目标creep的所有部件(字符串形式). 如果获取失败，返回空列表
        """
        if not creep or not creep.body: return []
        return [part.type for part in creep.body]

    @staticmethod
    def pcount(creep: st.creep, part_type: str, broken: bool = True) -> int:
        """
        获取creep的body中指定类型的部件数量

        Args:
            creep: st.creep (X) 一个Creep对象
            part_type: str (X) 部件类型, 如MOVE, CARRY, ATTACK, WORK, RANGED_ATTACK 等
            broken: bool (X) 是否包含完全损坏的部件. False时可以忽略hit = 0的部件

        Returns:
            int  返回指定类型的部件数量. 如果获取失败，返回-1

        """
        if not creep or not creep.body: return -1
        count = 0
        for part in creep.body:
            if part.type == part_type:
                if broken or part.hits > 0:
                    count += 1
        return count

    @staticmethod
    def wait(creep: st.creep) -> int:
        """
        获取目标creep需要等待多少tick后才能进行移动

        Args:
            creep: st.creep (X) 一个Creep对象

        Returns:
            int  返回等待的tick数. 如果获取失败，返回-1. 如果目标无法移动，返回0xffff
        """
        move_count = get.pcount(creep, MOVE, False)
        if move_count == -1: return -1
        if move_count == 0: return 0xffff
        fatigue = creep.fatigue

        if fatigue <= 0: return 0
        return Math.ceil(fatigue / 2 / move_count)

    @staticmethod
    def offset(pos: st.point, dx: float, dy: float) -> st.point:
        """
        返回一个新的坐标点，位移dx, dy

        Args:
            pos: st.point (X) 一个坐标点
            dx: float (X) x轴位移, 单位为方块
            dy: float (X) y轴位移, 单位为方块

        Returns:
            st.point  返回一个新的坐标点
        """
        return Position(pos.x + dx, pos.y + dy)


class Stage:
    """
    有限状态机

    .current: str 当前状态

    .next(): str 从当前状态转移到下一个状态

    Args:
        sdef: 一个list对象, 每个元素是一个转移定义: <br/>[src: str | tuple, dst: str | tuple, condition: callable -> bool, action: callable]

            * 每个callable形如 callable(stage:Stage, trans-local:object). stage表示所有当前的Stage实例; trans-local表示当前转移内部的局部空间

            * 如果是固定跳转，那么可以只传入action。即: [src: str | tuple, dst: str | tuple, action: callable]

            !!! 注意: sdef不能是空列表

            * 特别的，src可以是 ＊。当某个src没有任何可行跳转时，会尝试使用 ＊ -> 的跳转判断。

            * 特别的，src和dst可以是tuple。这通常表示二者的condition和action是一样的。

            例如: [('a', 'b'), 'c', ...]将被解析为 ['a', 'b', ...], ['b', 'c', ...]

        entry: 初始状态. 如果不指定, 则默认为sdef[0]的src

    Examples:
        ```python
        spawn = get.spawn(st.friend)

        # 一个Carrier的状态机
        sc = Stage([
            # 任何状态下，如果我没有能量储备了，就去获取Energy
            ['*', 'fetch', lambda s, t: get.energy(s.unit) == 0, lambda s, t: put.fetch(s.unit, get.closest(s.unit, get.boxes(st.energetic)))],
            # 任何状态下，如果我身上有能量，就把能量带回家
            ['*', 'deposit', lambda s, t: get.energy(s.unit) > 0, lambda s, t: put.deposit(s.unit, spawn)],
        ])


        def loop():
            if not sc.unit:
                res = put.create(spawn, [CARRY, MOVE])
                sc.unit = res if st.creep(res) else None
            else:
                print('carrier:', sc.next())
        ```
    """

    def __init__(self, sdef: list, entry: str = None):
        self._raw = sdef
        def_len = len(sdef)
        if def_len == 0:
            raise ValueError("Empty transition definition")

        # 获取状态集 set[str]
        # 获取状态转移字典 dict[src, list[tuple(dst, condition, action)]]  # 若无action, 则为None
        self._trans, self._any_trans, tmp = {}, [], []

        for i in range(len(sdef)):
            item = sdef[i]

            # 这一段是考虑到transcrypt的语法解析问题，不敢写的太风骚: for src, dst, *rest in smdef. 怕出问题
            len_trans = len(item)
            if not 3 <= len_trans <= 4:
                raise ValueError(f"Invalid transition definition: {sdef[i]}")
            src, dst, cond = item[0], item[1], item[2]
            action = item[3] if len_trans == 4 else None

            if isinstance(src, str):
                src = [src]

            if isinstance(dst, str):
                dst = [dst]

            # 形式上写在一起，因此共用一个DataArea
            da = DataArea()

            for _src in src:
                for _dst in dst:
                    if _src != '*':
                        # 写入到常规跳转表
                        stage_node = self._trans.py_get(_src, None)
                        if stage_node:
                            stage_node.append((_dst, cond, action, da))
                        else:
                            self._trans[_src] = [(_dst, cond, action, da)]

                        tmp.extend([_src, _dst])
                    else:
                        self._any_trans.append((_dst, cond, action, da))

        # 再把any_trans添加到所有跳转集的末尾
        for v in self._trans.values():
            v.extend(self._any_trans)

        self._states = set(tmp)
        self.current = entry if entry else sdef[0][0]  # 当前状态 str

        # // 更新函数集
        self._su = []  # (attr_name, value_func)
        self._cu = {}  # current: [(attr_name, value_func)]
        self._tu = {}  # (src, dst): [(attr_name, value_func)]

    def asu(self, attr_name: str, value_func: callable):
        """
        Add Stage Update<br/>
        添加属性更新函数<br/>
        用于在状态机的next时自动更新属性<br/>
        * 暂时无法移除，谨慎添加

        Args:
            attr_name: str 属性名
            value_func: callable(s) -> any 更新函数，s为当前Stage实例

        Returns:

        Examples:
            ```python
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            sc = Stage([
                ['home', 'boxing', lambda s, t: s.energy == 0, lambda s, t: put.fetch(carrier, t.box)],
                ['boxing', 'home', lambda s, t: s.energy > 0, lambda s, t: put.deposit(carrier, s.spawn)],
            ])

            # update on every next
            sc.asu('energy', lambda s: get.energy(carrier))
            # update on every next if current is 'boxing'
            sc.acu('boxing', 'spawn', lambda s: get.spawn(st.friend))  # 实际建议将spawn放在全局初始化中, 这里只是举例
            # only update when 'home -> boxing'
            sc.atu('home', 'boxing', 'box', lambda s, t: get.closest(carrier, get.boxes(st.energetic)) )
            ```

        """
        self._su.append((attr_name, value_func))

    def acu(self, current: str | tuple, attr_name: str, value_func: callable):
        """
        Add Current Update<br/>
        添加特定状态下的属性更新函数<br/>
        用于在状态机特定current下的next时自动更新属性<br/>
        * 暂时无法移除，谨慎添加

        Args:
            current: str | tuple 当前状态, 如果是tuple则表示多个状态均添加
            attr_name: str 属性名
            value_func: callable(s) -> any 更新函数，s为当前Stage实例

        Returns:

        Examples:
            ```python
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            sc = Stage([
                ['home', 'boxing', lambda s, t: s.energy == 0, lambda s, t: put.fetch(carrier, t.box)],
                ['boxing', 'home', lambda s, t: s.energy > 0, lambda s, t: put.deposit(carrier, s.spawn)],
            ])

            # update on every next
            sc.asu('energy', lambda s: get.energy(carrier))
            # update on every next if current is 'boxing'
            sc.acu('boxing', 'spawn', lambda s: get.spawn(st.friend))  # 实际建议将spawn放在全局初始化中, 这里只是举例
            # only update when 'home -> boxing'
            sc.atu('home', 'boxing', 'box', lambda s, t: get.closest(carrier, get.boxes(st.energetic)) )
            ```
        """
        if isinstance(current, str):
            current = [current]
        for c in current:
            v = self._cu.py_get(c, None)
            if not v:
                v = []
                self._cu[c] = v
            v.append((attr_name, value_func))

    def atu(self, src: str | tuple, dst: str | tuple, attr_name: str, value_func: callable):
        """
        Add Trans Update<br/>
        添加特定转移时的属性更新函数<br/>
        用于在状态机特定 src->dst 时对trans-area中属性的自动更新<br/>
        * 暂时无法移除，谨慎添加

        Args:
            src: str | tuple 当前状态, 如果是tuple则表示多个状态均添加
            dst: str | tuple 目标状态, 如果是tuple则表示多个状态均添加
            attr_name: str 属性名
            value_func: callable(s, t) -> any 更新函数，s为当前Stage实例, t为当前转移的局部空间

        Returns:

        Examples:
            ```python
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            sc = Stage([
                ['home', 'boxing', lambda s, t: s.energy == 0, lambda s, t: put.fetch(carrier, t.box)],
                ['boxing', 'home', lambda s, t: s.energy > 0, lambda s, t: put.deposit(carrier, s.spawn)],
            ])

            # update on every next
            sc.asu('energy', lambda s: get.energy(carrier))
            # update on every next if current is 'boxing'
            sc.acu('boxing', 'spawn', lambda s: get.spawn(st.friend))  # 实际建议将spawn放在全局初始化中, 这里只是举例
            # only update when 'home -> boxing'
            sc.atu('home', 'boxing', 'box', lambda s, t: get.closest(carrier, get.boxes(st.energetic)) )
            ```
        """
        if isinstance(src, str):
            src = [src]
        if isinstance(dst, str):
            dst = [dst]
        for s in src:
            for d in dst:
                v = self._tu.py_get((s, d), None)
                if not v:
                    v = []
                    self._tu[(s, d)] = v
                v.append((attr_name, value_func))

    def next(self, log: bool = True) -> str:
        """
        从当前状态转移到下一个状态

        Args:
            log: 是否返回log信息

        Returns:
            str: log=False: 下一个状态. 如果没有进行转移, 则返回当前状态 | log=True: 返回一句跳转信息: 'src -> dst'
        """

        # 更新su
        for a_name, vfn in self._su:
            setattr(self, a_name, vfn(self))

        # 更新cu
        v = self._cu.py_get(self.current, None)
        if v:
            for a_name, vfn in v:
                setattr(self, a_name, vfn(self))

        tset = self._trans.py_get(self.current)
        tset = tset if tset else self._any_trans
        for dst, cond, action, trans_local in tset:
            v = self._tu.py_get((self.current, dst), None)
            if v:
                for a_name, vfn in v:
                    setattr(trans_local, a_name, vfn(self, trans_local))

            try:
                cond_res = bool(cond(self, trans_local))
            except Exception as e:
                raise ValueError(f"[Stage] {self.current} -> {dst}: Usr Condition error: \n{e}")

            if not action:
                cond_res = True

            if cond_res:
                if action:
                    try:
                        action(self, trans_local)
                    except Exception as e:
                        raise ValueError(f"[Stage] {self.current} -> {dst}: Usr Action error: \n{e}")
                info = self.current + " -> " + dst
                self.current = dst
                if log:
                    return info
                return dst
        if log:
            return self.current + " -> " + self.current
        return self.current

    def copy(self):
        """
        '复制'一个Stage实例

        * 只会复制当前sdef和各种update函数，不会复制当前状态和局部空间数据

        Returns:
            Stage

        """
        s = Stage(self._raw)
        s._su = self._su.copy()
        s._cu = self._cu.copy()
        s._tu = self._tu.copy()
        return s


class View:
    NAME_OPTS = Options()

    def __init__(self, layer: int, persistent: bool = True):
        self.v = object
        # insert self.v = new Visual(layer, persistent);

    def clear(self):
        """
        清空当前视图

        Returns:
            View
        """
        self.v.clear()  # ignore;
        return self

    def text(self, text: str, pos: st.point, font:str|int|float, color:str, options: Options = None):
        """
        绘制文字

        Args:
            text: str (X) 文字内容
            pos: st.point (X) 文字位置
            font: str | int | float (X) 字体大小 可以是 0.5 '12px' 这样的
            color: str (X) 颜色  比如 '#FF0000'
            options: 详见ScreepsArena文档

        Returns:
            View
        """
        options = options or Options()
        options.font = font
        options.color = color
        self.v.text(text, pos, options)
        return self

    def circle(self, pos: st.point, radius: float, fill:str=None, options: Options = None):
        """
        绘制圆形

        Args:
            pos: st.point (X) 圆心坐标
            radius: float (X) 半径
            fill: str (X) 填充颜色
            options: 详见ScreepsArena文档

        Returns:
            View
        """
        options = options or Options()
        options.radius = radius
        options.fill = fill
        self.v.circle(pos, options)
        return self

    def line(self, pos1: st.point, pos2: st.point, width: float = 0.1, color: str = None, options: Options = None):
        """
        绘制线段

        Args:
            pos1: st.point (X) 起点坐标
            pos2: st.point (X) 终点坐标
            width: float (X) 线宽
            color: str (X) 颜色
            options: 详见ScreepsArena文档

        Returns:
            View
        """
        options = options or Options()
        options.width = width
        options.color = color
        self.v.line(pos1, pos2, options)
        return self

    def rect(self, pos: st.point, width: float, height: float, fill: str = None, options: Options = None):
        """
        绘制矩形

        Args:
            pos: st.point (X) 左上角坐标
            width: float (X) 宽度
            height: float (X) 高度
            fill: str (X) 填充颜色
            options: 详见ScreepsArena文档

        Returns:
            View
        """
        options = options or Options()
        options.fill = fill
        self.v.rect(pos, width, height, options)
        return self

    def poly(self, points: list[st.point], fill: str = None, options: Options = None):
        """
        绘制多边形

        Args:
            points: list[st.point] (X) 多边形的顶点坐标
            fill: str (X) 填充颜色
            options: 详见ScreepsArena文档

        Returns:
            View
        """
        options = options or Options()
        options.fill = fill

        # insert var array = [];
        # insert for (var i = 0; i < len(points); i++) {
        # insert     array.push(points[i]);
        # insert }

        self.v.poly(array, options)
        return self

    def size(self):
        """
        返回视图的大小<br/>
        * 详见ScreepsArena文档

        Returns:
            int
        """
        return self.v.size()

    def header(self, creep: st.creep):
        """
        为一个Creep绘制标题
        Args:
            creep:

        Returns:

        """
        if creep:
            txt = creep.name or ""
            hp_percent = get.health(creep, True)  # int:0 - 100
            _hex = Math.floor(hp_percent * 255 / 100).toString(16).padStart(2, '0');
            color = f'#AE{_hex}80'
            txt += f"|{hp_percent}"
            self.text(txt, get.offset(creep, 0, -0.6), 0.4, color, View.NAME_OPTS)
        return self


View.NAME_OPTS.font = '0.5'
View.NAME_OPTS.align = 'center'
View.NAME_OPTS.opacity = 0.7
View.NAME_OPTS.color = '#AEFC80'


