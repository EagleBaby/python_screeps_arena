# ! This Module won't be compiled into the final js code. ! #
# ! Only for defines and IDE identification. ! #
# These are currently required for Transcrypt in order to use the following names in JavaScript.
# Without the 'noalias' pragma, each of the following would be translated into something like 'py_Infinity' or 'py_undefined'
# python: if you want to use dict().get(); Please use dict().py_get() instead.
# !!! Do not Move These Pragma !!! #
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')

# ------------------------------------------------- IDE Identification ---------------------------------------------------

# define jprint console.log

# // Assert Level  // Suggest use FULL if you meet strange unexpected logic. 有助于发现逻辑错误。必要检查可以避免js运行错误
# define ASSERT_FULL 2
# define ASSERT_ESSENTIAL 1
# define ASSERT_DISABLE 0
# define ASSERT_LEVEL ASSERT_FULL

# // DLC Module Select // 根据需要自选. 选错会在进游戏对局前报错
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0

# // Project Config
# define MAIN_JS_PATH C:/Users/Administer/ScreepsArena/alpha-spawn_and_swamp/main.mjs

# ------------------------------------------------- IDE Identification ---------------------------------------------------
size = 0
array = []
undefined = None
Infinity = float('inf')
result = Math = object()
String = lambda _: _
jprint = lambda *_: _

