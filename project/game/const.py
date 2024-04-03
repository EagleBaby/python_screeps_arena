# copy from module "game/constants"
# time: 2024/03/20
OK = 0
ERR_NOT_OWNER = -1
ERR_NO_PATH = -2
ERR_NAME_EXISTS = -3
ERR_BUSY = -4
ERR_NOT_FOUND = -5
ERR_NOT_ENOUGH_ENERGY = -6
ERR_NOT_ENOUGH_RESOURCES = -6
ERR_INVALID_TARGET = -7
ERR_FULL = -8
ERR_NOT_IN_RANGE = -9
ERR_INVALID_ARGS = -10
ERR_TIRED = -11
ERR_NO_BODYPART = -12
ERR_NOT_ENOUGH_EXTENSIONS = -6

MOVE = 'move'
RANGED_ATTACK = 'ranged_attack'
HEAL = 'heal'
ATTACK = 'attack'
CARRY = 'carry'
TOUGH = 'tough'
WORK = 'work'

TOP = 1
TOP_RIGHT = 2
RIGHT = 3
BOTTOM_RIGHT = 4
BOTTOM = 5
BOTTOM_LEFT = 6
LEFT = 7
TOP_LEFT = 8

TERRAIN_PLAIN = 0
TERRAIN_WALL = 1
TERRAIN_SWAMP = 2

BODYPART_HITS = 100

RANGED_ATTACK_POWER = 10
RANGED_ATTACK_DISTANCE_RATE = None
ATTACK_POWER = 30
HEAL_POWER = 12
RANGED_HEAL_POWER = 4
CARRY_CAPACITY = 50
REPAIR_POWER = 100
DISMANTLE_POWER = 50
REPAIR_COST = 0.01
DISMANTLE_COST = 0.005
HARVEST_POWER = 2
BUILD_POWER = 5

OBSTACLE_OBJECT_TYPES = None

TOWER_ENERGY_COST = 10
TOWER_RANGE = 50
TOWER_HITS = 3000
TOWER_CAPACITY = 50
TOWER_POWER_ATTACK = 150
TOWER_POWER_HEAL = 100
TOWER_POWER_REPAIR = 200
TOWER_OPTIMAL_RANGE = 5
TOWER_FALLOFF_RANGE = 20
TOWER_FALLOFF = 0.75
TOWER_COOLDOWN = 10

BODYPART_COST = None

MAX_CREEP_SIZE = 50
CREEP_SPAWN_TIME = 3

RESOURCE_SCORE = "score"
RESOURCE_ENERGY = "energy"
RESOURCES_ALL = None

SOURCE_ENERGY_REGEN = 10

RESOURCE_DECAY = 1000

MAX_CONSTRUCTION_SITES = 10

CONSTRUCTION_COST = None
STRUCTURE_PROTOTYPES = None

CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5
CONSTRUCTION_COST_ROAD_WALL_RATIO = 150

CONTAINER_HITS = 300
CONTAINER_CAPACITY = 2000

WALL_HITS = 10000
WALL_HITS_MAX = 10000

RAMPART_HITS = 10000
RAMPART_HITS_MAX = 10000

ROAD_HITS = 500
ROAD_WEAROUT = 1

EXTENSION_HITS = 100
EXTENSION_ENERGY_CAPACITY = 100

SPAWN_ENERGY_CAPACITY = 1000
SPAWN_HITS = 3000
