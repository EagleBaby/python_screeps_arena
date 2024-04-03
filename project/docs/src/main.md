```python
from game.const import *
from game.proto import *
from game.utils import *


# -------------------------
# These are currently required for Transcrypt in order to use the following names in JavaScript.
# Without the 'noalias' pragma, each of the following would be translated into something like 'py_Infinity' or 'py_undefined'
# python: if you want to use dict().get(); Please use dict().py_get() instead.
# !!! Do not Move These Pragma !!! #
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')

# -------------------------
from config import *
from std import *
# any module you want to compile should import in main.py.


def loop():
    # your code here
    print("cpu time: ", round(get.cpu_time() / 1000), 'us / 50,000 us')
    heap = get.heap()
    print("heap:", round(heap.used_heap_size / 1024), 'KB /', round(heap.heap_size_limit / 1024), "KB")

```