```python
# ! This Module won't be compiled into the final js code. ! #
# ! Only for defines and IDE identification. ! #

# define jprint console.log

# // Assert Level  // Suggest use FULL if you meet strange unexpected logic. 有助于发现逻辑错误。必要检查可以避免js运行错误
# define ASSERT_FULL 2
# define ASSERT_ESSENTIAL 1
# define ASSERT_DISABLE 0
# define ASSERT_LEVEL ASSERT_DISABLE

# // DLC Module Select // 根据需要自选. 选错会在进游戏对局前报错
# define USE_TUTORIAL_FLAG 0
# define USE_ARENA_FLAG 0
# define USE_SCORE_COLLECTOR 0


# ------------------------------------------------- IDE Identification ---------------------------------------------------
size = 0
array = []
undefined = None
Infinity = float('inf')
result = Math = object()
String = lambda _: _
jprint = lambda *_: _


```