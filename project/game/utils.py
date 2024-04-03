# copy from module "game/utils"
# time: 2024/03/20
from typing import Optional, List, Union, Dict, Type

from game.proto import *  # This will cause a circular import error (But it's not a problem in this case. Because we are not going to run this code)
from game.const import *


# 某些typeing错误不会影响翻译代码运行，所以这里不做处理

# SearchPathOptions 类型
class SearchPathOptions:
    def __init__(self, costMatrix=None, plainCost=2, swampCost=10, flee=False, maxOps=50000, maxCost=float('inf'), heuristicWeight=1.2):
        """
        costMatrix: 自定义导航成本数据
        plainCost: 在平原位置行走的成本，默认为2
        swampCost: 在沼泽位置行走的成本，默认为10
        flee: 是否寻找远离目标的路径，默认为False
        maxOps: 允许的最大寻路操作数，默认为50000
        maxCost: 返回路径的最大允许成本，默认为无穷大
        heuristicWeight: 应用于A*公式F = G + weight * H的启发式权重，默认为1.2
        """
        self.costMatrix = costMatrix
        self.plainCost = plainCost
        self.swampCost = swampCost
        self.flee = flee
        self.maxOps = maxOps
        self.maxCost = maxCost
        self.heuristicWeight = heuristicWeight


# SearchPathResult 类型
class SearchPathResult:
    def __init__(self, path, ops, cost, incomplete):
        """
        path: 找到的路径，作为包含x和y属性的对象的数组
        ops: 计算此路径前执行的操作总数
        cost: 路径的总成本，由plainCost、swampCost和给定的CostMatrix实例推导出
        incomplete: 如果寻路器未能找到完整的路径，此值为True
        """
        self.path = path
        self.ops = ops
        self.cost = cost
        self.incomplete = incomplete


# CostMatrix 类
class CostMatrix:
    """
    自定义导航成本数据的容器。
    如果在CostMatrix中找到非0值，则将使用该值代替默认的地形成本。
    """

    def __init__(self):
        """
        创建一个新的CostMatrix，所有位置都包含0。
        """
        pass

    def get(self, x: int, y: int) -> int:
        """
        获取此CostMatrix中位置的成本。
        x: 游戏中的X位置
        y: 游戏中的Y位置
        返回指定位置的成本
        """
        pass

    def set(self, x: int, y: int, cost: int):
        """
        设置此CostMatrix中位置的成本。
        x: 游戏中的X位置
        y: 游戏中的Y位置
        cost: 此位置的成本。
        """
        pass

    def clone(self):
        """
        返回一个新的CostMatrix实例。
        """
        pass


# Goal 类型
Goal = Union[Position, Dict[str, Union[Position, int]]]


# searchPath 函数
def searchPath(origin: Position, goal: Union[Goal, List[Goal]], options: Optional[SearchPathOptions] = None) -> SearchPathResult:
    """
    在起点和目标之间找到最优路径。
    origin: 起始位置。
    goal: 一个目标或目标数组
    options: 包含额外寻路标志的对象
    options.costMatrix: 自定义导航成本数据
    options.plainCost: 在平原位置行走的成本。默认为2
    options.swampCost: 在沼泽位置行走的成本。默认为10
    options.flee: 这将寻找远离目标的路径，而不是寻找到目标的路径。默认为false
    options.maxOps: 允许的最大寻路操作数。默认值为50000
    options.maxCost: 返回路径的最大允许成本。默认为无穷大
    options.heuristicWeight: 应用于A*公式F = G + weight * H的启发式权重。默认值为1.2
    返回一个带有搜索结果的SearchPathResult对象
    """
    pass


# -------------------------------------------------------------------------------------------------------------------- # End PathFinder
# Direction 类
class Direction:
    TOP = TOP
    TOP_RIGHT = TOP_RIGHT
    RIGHT = RIGHT
    BOTTOM_RIGHT = BOTTOM_RIGHT
    BOTTOM = BOTTOM
    BOTTOM_LEFT = BOTTOM_LEFT
    LEFT = LEFT
    TOP_LEFT = TOP_LEFT


# Terrain 类
class Terrain:
    TERRAIN_WALL = TERRAIN_WALL
    TERRAIN_SWAMP = TERRAIN_SWAMP
    TERRAIN_PLAIN = TERRAIN_PLAIN


# DoesZapCodeSpaceFlag 类
class DoesZapCodeSpaceFlag:
    FLAG_0 = 0
    FLAG_1 = 1


# HeapInfo 类
class HeapInfo:
    def __init__(self, total_heap_size: int, total_heap_size_executable: int, total_physical_size: int, total_available_size: int, used_heap_size: int, heap_size_limit: int,
                 malloced_memory: int, peak_malloced_memory: int, does_zap_garbage: DoesZapCodeSpaceFlag, number_of_native_contexts: int, number_of_detached_contexts: int,
                 externally_allocated_size: int):
        self.total_heap_size = total_heap_size
        self.total_heap_size_executable = total_heap_size_executable
        self.total_physical_size = total_physical_size
        self.total_available_size = total_available_size
        self.used_heap_size = used_heap_size
        self.heap_size_limit = heap_size_limit
        self.malloced_memory = malloced_memory
        self.peak_malloced_memory = peak_malloced_memory
        self.does_zap_garbage = does_zap_garbage
        self.number_of_native_contexts = number_of_native_contexts
        self.number_of_detached_contexts = number_of_detached_contexts
        self.externally_allocated_size = externally_allocated_size


# FindPathOptions 类
class FindPathOptions(SearchPathOptions):
    def __init__(self, ignore: Optional[List[GameObject]] = None, **kwargs):
        super().__init__(**kwargs)
        self.ignore = ignore


# CreateConstructionSiteResult 类
class CreateConstructionSiteResult:
    """
    createConstructionSite 调用结果
    """

    def __init__(self, object: Optional[ConstructionSite] = None, error: Optional[Union[ERR_INVALID_ARGS, ERR_INVALID_TARGET, ERR_FULL]] = None):
        """
        object: 此调用创建的 ConstructionSite 实例
        error: 错误代码
        """
        self.object = object
        self.error = error


# createConstructionSite 函数
def createConstructionSite(pos: Position, structurePrototype: Type[Structure]) -> CreateConstructionSiteResult:
    """
    在指定位置创建新的 ConstructionSite。
    pos: 位置，作为一个包含 x 和 y 属性的对象。
    structurePrototype: 扩展 GameObject 的原型
    返回一个带有调用结果的 CreateConstructionSiteResult 对象
    """
    pass


# findClosestByPath 函数
def findClosestByPath(fromPos: Position, positions: List[Position], options: Optional[FindPathOptions] = None) -> Position:
    """
    从给定位置找到路径最短的位置
    fromPos: 要搜索的位置。可能是 GameObject 或任何包含 x 和 y 属性的对象
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


# findClosestByRange 函数
def findClosestByRange(fromPos: Position, positions: List[Position]) -> Position:
    """
    从给定位置找到线性距离最短的位置
    fromPos: 要搜索的位置。可能是 GameObject 或任何包含 x 和 y 属性的对象
    positions: 要搜索的位置。包含 GameObject 或任何包含 x 和 y 属性的对象的数组
    返回 positions 中最近的对象
    """
    pass


# findInRange 函数
def findInRange(fromPos: Position, positions: List[Position], range: int) -> List[Position]:
    """
    找到指定线性范围内的所有对象
    fromPos: 原点位置。可能是 GameObject 或任何包含 x 和 y 属性的对象
    positions: 要搜索的位置。包含 GameObject 或任何包含 x 和 y 属性的对象的数组
    range: 范围距离
    返回找到的对象的数组
    """
    pass


# findPath 函数
def findPath(fromPos: Position, toPos: Position, options: Optional[FindPathOptions] = None) -> List[Position]:
    """
    在 fromPos 和 toPos 之间找到最优路径。
    与 searchPath 不同，findPath 默认避开所有障碍（除非指定了 costMatrix）。
    fromPos: 起始位置。可能是 GameObject 或任何包含 x 和 y 属性的对象。
    toPos: 目标位置。可能是 GameObject 或任何包含 x 和 y 属性的对象。
    options: 包含额外寻路标志的对象
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


# getCpuTime 函数
def getCpuTime() -> int:
    """
    返回当前 tick 中经过的 CPU 壁钟时间（以纳秒为单位）
    """
    pass


# getDirection 函数
def getDirection(dx: int, dy: int) -> Direction:
    """
    通过 x 和 y 的差异获取线性方向。
    dx: X 坐标的差异。
    dy: Y 坐标的差异。
    返回表示方向常量之一的数字。
    """
    pass


# getHeapStatistics 函数
def getHeapStatistics() -> HeapInfo:
    """
    使用此方法获取虚拟机的堆统计信息。
    """
    pass


# getObjectById 函数
def getObjectById(game_id: str) -> GameObject:
    """
    通过id获取对象

    Args:
        game_id: str (X) 对象的id

    Returns:
        GameObject
    """
    pass


# getObjects 函数
def getObjects() -> List[GameObject]:
    """
    获取游戏中的所有游戏对象
    """
    pass


# getObjectsByPrototype 函数
def getObjectsByPrototype(prototype: Type[GameObject]) -> List[GameObject]:
    """
    获取游戏中具有指定原型的所有对象，例如，所有的 creep
    prototype: 扩展 GameObject 的原型
    返回具有指定原型的对象的数组
    """
    pass


# getRange 函数
def getRange(a: Position, b: Position) -> int:
    """
    获取两个对象之间的线性范围。a 和 b 可能是 GameObject 或任何包含 x 和 y 属性的对象
    a: 两个对象中的第一个。可能是 GameObject 或任何包含 x 和 y 属性的对象。
    b: 两个对象中的第二个。可能是 GameObject 或任何包含 x 和 y 属性的对象。
    返回两个对象之间的方格数
    """
    pass


# getTerrainAt 函数
def getTerrainAt(pos: Position) -> Terrain:
    """
    获取给定位置的地形的整数表示。
    pos: 位置，作为一个包含 x 和 y 属性的对象。
    返回 TERRAIN_PLAIN、TERRAIN_WALL 或 TERRAIN_SWAMP 中的一个
    """
    pass


# getTicks 函数
def getTicks() -> int:
    """
    返回从当前游戏开始经过的 tick 数。
    """
    pass


# --------------------------------------------------------------- # End utils

# Color 类型
Color = str

# LineStyle 类型
LineStyle = Union[None, "dashed", "dotted"]

# TextAlign 类型
TextAlign = Union["center", "left", "right"]


# CircleVisualStyle 类
class CircleVisualStyle:
    def __init__(self, radius: Optional[float] = 0.15, fill: Optional[Color] = "#ffffff", opacity: Optional[float] = 0.5, stroke: Optional[Color] = "#ffffff",
                 strokeWidth: Optional[float] = 0.1, lineStyle: Optional[LineStyle] = None):
        """
        radius: 圆的半径，默认为0.15
        fill: 填充颜色，格式为：#ffffff（十六进制三元组）。默认为#ffffff
        opacity: 不透明度值，默认为0.5
        stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为#ffffff
        strokeWidth: 描边线宽，默认为0.1
        lineStyle: 线条样式，可以是 undefined（实线）、dashed（虚线）或 dotted（点线）。默认为 undefined
        """
        self.radius = radius
        self.fill = fill
        self.opacity = opacity
        self.stroke = stroke
        self.strokeWidth = strokeWidth
        self.lineStyle = lineStyle


# LineVisualStyle 类
class LineVisualStyle:
    def __init__(self, width: Optional[float] = 0.1, color: Optional[Color] = "#ffffff", opacity: Optional[float] = 0.5, lineStyle: Optional[LineStyle] = None):
        """
        width: 线宽，默认为0.1
        color: 线条颜色，格式为：#ffffff（十六进制三元组）。默认为#ffffff
        opacity: 不透明度值，默认为0.5
        lineStyle: 线条样式，可以是 undefined（实线）、dashed（虚线）或 dotted（点线）。默认为 undefined
        """
        self.width = width
        self.color = color
        self.opacity = opacity
        self.lineStyle = lineStyle


# PolyVisualStyle 类
class PolyVisualStyle:
    def __init__(self, fill: Optional[Color] = "#ffffff", opacity: Optional[float] = 0.5, stroke: Optional[Color] = "#ffffff", strokeWidth: Optional[float] = 0.1,
                 lineStyle: Optional[LineStyle] = None):
        """
        fill: 填充颜色，格式为：#ffffff（十六进制三元组）。默认为#ffffff
        opacity: 不透明度值，默认为0.5
        stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为#ffffff
        strokeWidth: 描边线宽，默认为0.1
        lineStyle: 线条样式，可以是 undefined（实线）、dashed（虚线）或 dotted（点线）。默认为 undefined
        """
        self.fill = fill
        self.opacity = opacity
        self.stroke = stroke
        self.strokeWidth = strokeWidth
        self.lineStyle = lineStyle


# RectVisualStyle 类
class RectVisualStyle:
    def __init__(self, fill: Optional[Color] = None, opacity: Optional[float] = None, stroke: Optional[Color] = None, strokeWidth: Optional[float] = None,
                 lineStyle: Optional[LineStyle] = None):
        self.fill = fill
        self.opacity = opacity
        self.stroke = stroke
        self.strokeWidth = strokeWidth
        self.lineStyle = lineStyle


# TextVisualStyle 类
class TextVisualStyle:
    def __init__(self, align: Optional[TextAlign] = "center", backgroundColor: Optional[Color] = None, backgroundPadding: Optional[float] = 0.3, color: Optional[Color] = "#ffffff",
                 font: Optional[Union[float, str]] = None, opacity: Optional[float] = 1, stroke: Optional[Color] = None, strokeWidth: Optional[float] = 0.15):
        """
        align: 文本对齐，可以是 center、left 或 right。默认为 center
        backgroundColor: 背景颜色，格式为：#ffffff（十六进制三元组）。默认为 undefined（无背景）。启用背景时，文本垂直对齐设置为 middle（默认为 baseline）
        backgroundPadding: 背景矩形填充，默认为0.3
        color: 字体颜色，格式为：#ffffff（十六进制三元组）。默认为#ffffff
        font: 可以是数字或以下形式的字符串之一：
            "0.7"（游戏坐标中的相对大小），
            "20px"（像素的绝对大小），
            "0.7 serif"，或
            "bold italic 1.5 Times New Roman"
        opacity: 不透明度值，默认为1
        stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为 undefined（无描边）
        strokeWidth: 描边线宽，默认为0.15
        """
        self.align = align
        self.backgroundColor = backgroundColor
        self.backgroundPadding = backgroundPadding
        self.color = color
        self.font = font
        self.opacity = opacity
        self.stroke = stroke
        self.strokeWidth = strokeWidth


# Visual 类
class Visual:
    def __init__(self, layer: Optional[int] = 0, persistent: Optional[bool] = False):
        """
        创建一个新的空的 Visual 实例。
        layer: 此对象中视觉效果的层。较高层的视觉效果会覆盖较低层的视觉效果。默认为0。
        persistent: 此对象中的视觉效果是否持久。非持久的视觉效果只在当前 tick 可见。
        """
        self.layer = layer
        self.persistent = persistent

    def clear(self) -> Visual:
        """
        从对象中移除所有视觉效果。
        返回 Visual 对象本身，以便你可以链式调用。
        """
        pass

    def circle(self, position: Position, style: Optional[CircleVisualStyle] = None) -> Visual:
        """
        绘制一个圆。
        position: 中心的位置对象。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        style: 一个包含额外选项的对象
        style.radius: 圆的半径，默认为0.15
        style.fill: 填充颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.opacity: 不透明度值，默认为0.5
        style.stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.strokeWidth: 描边线宽，默认为0.1
        style.lineStyle: 要么是未定义（实线），要么是虚线，要么是点线。默认为未定义
        返回 Visual 对象本身，以便你可以链式调用。
        """
        pass

    def line(self, pos1: Position, pos2: Position, style: Optional[LineVisualStyle] = None) -> Visual:
        """
        绘制一条线。
        pos1: 起始位置对象。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        pos2: 结束位置对象。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        style: 一个包含额外选项的对象
        style.width: 线宽，默认为0.1
        style.color: 线颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.opacity: 不透明度值，默认为0.5
        style.lineStyle: 要么是未定义（实线），要么是虚线，要么是点线。默认为未定义
        返回 Visual 对象本身，以便你可以链式调用。
        """
        pass

    def poly(self, points: List[Position], style: Optional[PolyVisualStyle] = None) -> Visual:
        """
        绘制一个折线。
        points: 点的数组。每个项目可能是 GameObject 或任何包含 x 和 y 属性的对象。
        style: 一个包含额外选项的对象
        style.fill: 填充颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.opacity: 不透明度值，默认为0.5
        style.stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.strokeWidth: 描边线宽，默认为0.1
        style.lineStyle: 要么是未定义（实线），要么是虚线，要么是点线。默认为未定义
        返回 Visual 对象本身，以便你可以链式调用。
        """
        pass

    def rect(self, pos: Position, w: int, h: int, style: Optional[RectVisualStyle] = None) -> Visual:
        """
        绘制一个矩形。
        pos: 左上角的位置对象。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        w: 矩形的宽度。
        h: 矩形的高度。
        style: 一个包含额外选项的对象
        style.fill: 填充颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.opacity: 不透明度值，默认为0.5
        style.stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.strokeWidth: 描边线宽，默认为0.1
        style.lineStyle: 要么是未定义（实线），要么是虚线，要么是点线。默认为未定义
        返回 Visual 对象本身，以便你可以链式调用。
        """
        pass

    def size(self) -> int:
        """
        返回以字节为单位的视觉效果的大小。
        """
        pass

    def text(self, text: str, pos: Position, style: Optional[TextVisualStyle] = None) -> Visual:
        """
        绘制一个文本标签。你可以使用任何有效的 Unicode 字符，包括 emoji。
        text: 文本消息。
        pos: 标签基线的位置对象。可能是 GameObject 或任何包含 x 和 y 属性的对象。
        style: 一个包含额外选项的对象
        style.align: 文本对齐，可以是 center、left 或 right。默认为 center。
        style.backgroundColor: 背景颜色，格式为：#ffffff（十六进制三元组）。默认为未定义（无背景）。
        style.backgroundPadding: 背景矩形填充，默认为0.3
        style.color: 字体颜色，格式为：#ffffff（十六进制三元组）。默认为 #ffffff
        style.font: 要么是一个数字，要么是以下形式之一的字符串："0.7"、"20px"、"0.7 serif" 或 "bold italic 1.5 Times New Roman"
        style.opacity: 不透明度值，默认为1
        style.stroke: 描边颜色，格式为：#ffffff（十六进制三元组）。默认为未定义（无描边）
        style.strokeWidth: 描边线宽，默认为0.15
        返回 Visual 对象本身，以便你可以链式调用。
        """
        pass
