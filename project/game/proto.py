# copy from module "game/prototype"
# time: 2024/03/20
from typing import Optional, List, Union
from game.utils import FindPathOptions, getObjectById  # This will cause a circular import error (But it's not a problem in this case. Because we are not going to run this code)
from game.const import *


# 某些typeing错误不会影响翻译代码运行，所以这里不做处理

class Flag:
    # This is a arena object
    def __init__(self, *args):
        self.my = None


class ScoreController:
    def __init__(self, *args):
        self.my = None
        self.resourceType = None
        self.store = None
        self.scoreTotal = None


class Position:
    def __init__(self, x: int, y: int):
        """
        创建一个新的位置对象。
        x: X坐标
        y: Y坐标
        """
        self.x = x
        self.y = y


# GameObject 类
class GameObject(Position):
    """
    游戏对象的基本原型。
    所有对象和类都从这个类继承
    """

    def __init__(self, exists: bool, id: Union[int, str], ticksToDecay: Optional[int], x: int, y: int):
        """
        exists: 如果此对象当前在游戏中活动，则为 true
        id: 你可以在 getObjectById 中使用的此对象的唯一 ID
        ticksToDecay: 如果定义了，那么这个对象将在这个 tick 数后消失
        x: 房间中的 X 坐标
        y: 房间中的 Y 坐标
        """
        self.exists = exists
        self.id = id
        self.ticksToDecay = ticksToDecay
        self.x = x
        self.y = y

    def findClosestByPath(self, positions: List[Position], options: Optional[FindPathOptions] = None) -> Position:
        """
        从这个游戏对象找到路径最短的位置
        positions: 要搜索的位置。包含 GameObject 或任何包含 x 和 y 属性的对象的数组
        options: 包含额外寻路标志的对象
        options.costMatrix: 自定义导航成本数据
        options.plainCost: 在平原位置行走的成本。默认为2
        options.swampCost: 在沼泽位置行走的成本。默认为10
        options.flee: 这将寻找远离目标的路径，而不是寻找到目标的路径。默认为false
        options.maxOps: 允许的最大寻路操作数。默认值为50000
        options.maxCost: 返回路径的最大允许成本。默认为无穷大
        options.heuristicWeight: 应用于A*公式F = G + weight * H的启发式权重。默认值为1.2
        options.ignore: 在搜索过程中不应被视为障碍的对象
        返回 positions 中最近的对象，如果没有有效位置，则返回 null
        """
        pass

    def findClosestByRange(self, positions: List[Position]) -> Position:
        """
        从这个游戏对象找到线性距离最短的位置
        positions: 要搜索的位置。包含 GameObject 或任何包含 x 和 y 属性的对象的数组
        返回 positions 中最近的对象
        """
        pass

    def findInRange(self, positions: List[Position], range: int) -> List[Position]:
        """
        找到指定线性范围内的所有对象
        positions: 要搜索的位置。包含 GameObject 或任何包含 x 和 y 属性的对象的数组
        range: 范围距离
        返回找到的对象的数组
        """
        pass

    def findPathTo(self, pos: Position, options: Optional[FindPathOptions] = None) -> List[Position]:
        """
        从这个对象找到到给定位置的路径
        pos: 目标位置。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        options: 一个包含额外选项的对象，这些选项将传递给 findPath
        options.costMatrix: 自定义导航成本数据
        options.plainCost: 在平原位置行走的成本。默认为2
        options.swampCost: 在沼泽位置行走的成本。默认为10
        options.flee: 这将寻找远离目标的路径，而不是寻找到目标的路径。默认为false
        options.maxOps: 允许的最大寻路操作数。默认值为50000
        options.maxCost: 返回路径的最大允许成本。默认为无穷大
        options.heuristicWeight: 应用于A*公式F = G + weight * H的启发式权重。默认值为1.2
        options.ignore: 在搜索过程中不应被视为障碍的对象
        返回找到的路径，作为包含 x 和 y 属性的对象的数组
        """
        pass

    def getRangeTo(self, pos: Position) -> int:
        """
        获取此对象和目标对象之间的线性范围
        pos: 目标对象。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        返回两个对象之间的方格数
        """
        pass


# BodyPartType 类
class BodyPartType:
    ATTACK = ATTACK
    CARRY = CARRY
    HEAL = HEAL
    MOVE = MOVE
    RANGED_ATTACK = RANGED_ATTACK
    TOUGH = TOUGH
    WORK = WORK


# CreepAttackResult 类
class CreepAttackResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepBuildResult 类
class CreepBuildResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepDropResult 类
class CreepDropResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_INVALID_ARGS = ERR_INVALID_ARGS
    ERR_NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES


# CreepHarvestResult 类
class CreepHarvestResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepHealResult 类
class CreepHealResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepMoveResult 类
class CreepMoveResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_TIRED = ERR_TIRED
    ERR_INVALID_ARGS = ERR_INVALID_ARGS


# CreepPickupResult 类
class CreepPickupResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_FULL = ERR_FULL
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepPullResult 类
class CreepPullResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_TIRED = ERR_TIRED
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepRangedAttackResult 类
class CreepRangedAttackResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepRangedHealResult 类
class CreepRangedHealResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE


# CreepRangedMassAttackResult 类
class CreepRangedMassAttackResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_NO_BODYPART = ERR_NO_BODYPART


# CreepTransferResult 类
class CreepTransferResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_INVALID_ARGS = ERR_INVALID_ARGS
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE
    ERR_FULL = ERR_FULL
    ERR_NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES


# CreepWithdrawResult 类
class CreepWithdrawResult:
    OK = OK
    ERR_NOT_OWNER = ERR_NOT_OWNER
    ERR_INVALID_ARGS = ERR_INVALID_ARGS
    ERR_INVALID_TARGET = ERR_INVALID_TARGET
    ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE
    ERR_FULL = ERR_FULL
    ERR_NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES


# Structure 类
class Structure(GameObject):
    def __init__(self, exists: bool, id: Union[int, str], ticksToDecay: Optional[int], x: int, y: int, hits: Optional[int] = None, hitsMax: Optional[int] = None):
        super().__init__(exists, id, ticksToDecay, x, y)
        """
        hits: 结构的当前生命值
        hitsMax: 结构的最大生命值
        """
        self.hits = hits
        self.hitsMax = hitsMax


# Creep 类
class Creep(GameObject):
    def __init__(self, exists: bool, id: Union[int, str], ticksToDecay: Optional[int], x: int, y: int, body: List[Dict[str, Union[BodyPartType, int]]], fatigue: int, hits: int,
                 hitsMax: int, my: bool, store: Store, spawning: bool):
        super().__init__(exists, id, ticksToDecay, x, y)
        """
        body: 描述 creep 身体的数组
        fatigue: 移动疲劳指标。如果大于零，creep 无法移动
        hits: creep 的当前生命值
        hitsMax: creep 的最大生命值
        my: 是否是你的 creep
        store: 包含此 creep 货物的 Store 对象
        spawning: 此 creep 是否仍在孵化
        """
        self.body = body
        self.fatigue = fatigue
        self.hits = hits
        self.hitsMax = hitsMax
        self.my = my
        self.store = store
        self.spawning = spawning

    def attack(self, target: Union[Creep, Structure]) -> CreepAttackResult:
        """
        短距离攻击另一个 creep 或结构。需要 ATTACK 身体部位
        target: 目标对象
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def build(self, target: ConstructionSite) -> CreepBuildResult:
        """
        使用携带的能量在目标建筑工地建造结构。
        需要 WORK 和 CARRY 身体部位
        target: 要建造的目标建筑工地
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def drop(self, resource: ResourceType, amount: Optional[int] = None) -> CreepDropResult:
        """
        在地面上丢弃资源
        resource: RESOURCE_* 常量之一
        amount: 要丢弃的资源单位数量。如果省略，将使用所有可用的携带量
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def harvest(self, target: Source) -> CreepHarvestResult:
        """
        从源中收集能量。需要 WORK 身体部位
        target: 要收集的对象
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def heal(self, target: Creep) -> CreepHealResult:
        """
        治疗自己或附近的另一个 creep。需要 HEAL 身体部位。
        target: 目标 creep 对象
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def move(self, direction: Direction) -> CreepMoveResult:
        """
        将 creep 向指定方向移动一格。需要 MOVE 身体部位
        direction: 要移动的方向
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def moveTo(self, target: Position, options: Optional[FindPathOptions] = None) -> CreepMoveResult:
        """
        找到到目标的最佳路径并移动到那里。需要 MOVE 身体部位
        target: 要移动到的目标。可以是 GameObject 或任何包含 x 和 y 属性的对象。
        options: 一个包含额外选项的对象，这些选项将传递给 findPath
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def pickup(self, target: Resource) -> CreepPickupResult:
        """
        捡起一个物品（掉落的资源片段）。需要 CARRY 身体部位。
        target: 要捡起的目标对象
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def pull(self, target: Creep) -> CreepPullResult:
        """
        帮助另一个 creep 跟随这个 creep。需要 MOVE 身体部位。
        target: 目标 creep
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def rangedAttack(self, target: Union[Creep, Structure]) -> CreepRangedAttackResult:
        """
        对另一个 creep 或结构进行远程攻击。需要 RANGED_ATTACK 身体部位。
        target: 要攻击的目标对象
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def rangedHeal(self, target: Creep) -> CreepRangedHealResult:
        """
        在远处治疗另一个 creep。需要 HEAL 身体部位。
        target: 目标 creep 对象
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def rangedMassAttack(self) -> CreepRangedMassAttackResult:
        """
        对范围内 3 格的所有敌对 creep 或结构进行远程攻击。需要 RANGED_ATTACK 身体部位。
        返回 OK 或 ERR_* 错误代码之一
        """
        pass

    def transfer(self, target: Union[Structure, Creep], resource: ResourceType, amount: Optional[int] = None) -> CreepTransferResult:
        """
        将资源从 creep 转移到另一个对象
        target: 目标对象
        resource: RESOURCE_* 常量之一
        amount: 要转移的资源数量。如果省略，将使用所有可用的携带量
        """
        pass

    def withdraw(self, target: Structure, resource: ResourceType, amount: Optional[int] = None) -> CreepWithdrawResult:
        """
        从结构中提取资源
        target: 目标结构
        resource: RESOURCE_* 常量之一
        amount: 要转移的资源数量。如果省略，将使用所有可用的携带量
        返回 OK 或 ERR_* 错误代码之一
        """
        pass


class OwnedStructure(Structure):
    def __init__(self, exists: bool, id: Union[int, str], ticksToDecay: Optional[int], x: int, y: int, hits: Optional[int] = None, hitsMax: Optional[int] = None):
        super().__init__(exists, id, ticksToDecay, x, y, hits, hitsMax)
        """
        my: 如果这是你的结构，则为 true
        """
        self.my = None


# TowerAttackResult 类型
TowerAttackResult = Union[OK, ERR_NOT_OWNER, ERR_TIRED, ERR_INVALID_TARGET, ERR_NOT_ENOUGH_ENERGY]

# TowerHealResult 类型
TowerHealResult = Union[OK, ERR_NOT_OWNER, ERR_TIRED, ERR_INVALID_TARGET, ERR_NOT_ENOUGH_ENERGY]


# StructureTower 类
class StructureTower(OwnedStructure):
    def __init__(self, store: Store, cooldown: int):
        """
        store: 包含此结构货物的 Store 对象
        cooldown: 此塔不能使用的剩余 tick 数
        """
        self.store = store
        self.cooldown = cooldown

    def attack(self, target: Union[Creep, Structure]) -> TowerAttackResult:
        """
        远程攻击范围内的任何 creep 或结构
        target: 目标对象
        """
        pass

    def heal(self, target: Creep) -> TowerHealResult:
        """
        远程治疗范围内的任何 creep
        target: 目标 creep
        """
        pass


# StructureWall 类
class StructureWall(Structure):
    pass


# ResourceType 类型
ResourceType = str


# Store 类型
class Store:
    def __init__(self, resources: Dict[ResourceType, int]):
        self.resources = resources

    def getCapacity(self, resource: Optional[ResourceType] = None) -> Union[int, None]:
        """
        返回此存储对指定资源的容量
        """
        pass

    def getUsedCapacity(self, resource: Optional[ResourceType] = None) -> Union[int, None]:
        """
        返回存储使用的容量
        """
        pass

    def getFreeCapacity(self, resource: Optional[ResourceType] = None) -> Union[int, None]:
        """
        返回存储的剩余容量
        """
        pass


# SpawnCreepResult 类型
class SpawnCreepResult:
    def __init__(self, object: Optional[Creep] = None, error: Optional[Union[ERR_NOT_OWNER, ERR_INVALID_ARGS, ERR_NOT_ENOUGH_ENERGY, ERR_BUSY]] = None):
        """
        object: 正在孵化的 Creep 实例
        error: 错误代码
        """
        self.object = object
        self.error = error


# Spawning 类
class Spawning:
    def __init__(self, needTime: int, remainingTime: int, creep: Creep):
        """
        needTime: 完成孵化所需的总时间
        remainingTime: 剩余时间
        creep: 正在孵化的 creep
        """
        self.needTime = needTime
        self.remainingTime = remainingTime
        self.creep = creep

    def cancel(self) -> Union[OK, ERR_NOT_OWNER, None]:
        """
        立即取消孵化
        """
        pass


# StructureSpawn 类
class StructureSpawn(OwnedStructure):
    def __init__(self, store: Store, spawning: Spawning):
        """
        store: 包含此结构货物的 Store 对象
        spawning: 如果孵化站正在孵化新的 creep，此对象将包含一个 Spawning 对象，否则为 null
        """
        self.store = store
        self.spawning = spawning

    def spawnCreep(self, body: List[BodyPartType]) -> SpawnCreepResult:
        """
        开始 creep 孵化过程
        body: 描述新 creep 的身体的数组
        返回带有调用结果的 SpawnCreepResult 对象
        """
        pass


class ConstructionSite(GameObject):
    """
    A site of a structure which is currently under construction
    """

    def __init__(self):
        self.progress = None  # The current construction progress
        self.progressTotal = None  # The total construction progress needed for the structure to be built
        self.structure = None  # The structure that will be built (when the construction site is completed)
        self.my = None  # Whether it is your construction site

    def remove(self):
        """
        Remove this construction site
        """
        pass


# Source 类
class Source(GameObject):
    def __init__(self, exists: bool, id: Union[int, str], ticksToDecay: Optional[int], x: int, y: int, energy: int, energyCapacity: int):
        super().__init__(exists, id, ticksToDecay, x, y)
        """
        energy: 能源中的当前能量量
        energyCapacity: 能源中的最大能量量
        """
        self.energy = energy
        self.energyCapacity = energyCapacity


# StructureRoad 类
class StructureRoad(Structure):
    pass


# Resource 类
class Resource(GameObject):
    def __init__(self, exists: bool, id: Union[int, str], ticksToDecay: Optional[int], x: int, y: int, amount: int, resourceType: ResourceType):
        super().__init__(exists, id, ticksToDecay, x, y)
        """
        amount: 掉落的资源量
        resourceType: 掉落的资源类型（RESOURCE_* 常量之一）
        """
        self.amount = amount
        self.resourceType = resourceType


# StructureRampart 类
class StructureRampart(OwnedStructure):
    pass


# StructureExtension 类
class StructureExtension(OwnedStructure):
    def __init__(self, store: Store):
        """
        store: 包含此结构货物的 Store 对象
        """
        self.store = store


# StructureContainer 类
class StructureContainer(OwnedStructure):
    def __init__(self, store: Store):
        """
        store: 包含此结构货物的 Store 对象
        """
        self.store = store
