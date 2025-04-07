
Welcome to the Screeps-Arena Tutorial! 
This series will guide you through the fundamentals of code usage.  

## 1. Console Output  

The first lesson focuses on how to use the console. 
In Python, console output primarily relies on the `print` statement. 
In the Screeps Arena (abbreviated as `SA`) environment, there is also the `jprint` statement. Let’s start by opening your project.  

### Print  
Open your `main.py` file. You will immediately notice three locations where you can insert `print` statements:  

```python
from builtin import *

print("Hello, at global.")  # tick == 0

def init(k: GlobalKnowledge):
    print("Hello, at init.")  # tick == 1

def step(k: GlobalKnowledge):
    print("Hello, at step.")  # tick >= 1
```

In the `SA` environment, content is only output to the console when `tick >= 1`. This means the message `"Hello, at global."` will **not** be displayed. Be mindful of this when using `print` statements.  

### Jprint  
<details>  
<summary>  
Compared to the traditional `print` statement, `SA` provides a JavaScript-equivalent `console.log` method—`jprint`—due to its JS environment. As a beginner, you can skip this section if needed.  
</summary>  

```python
from builtin import *

def init(k: GlobalKnowledge):
    a = 1
    b = [1, 2]
    c = {'a': a}
    print(a, b, c)       # Python-style output
    jprint(a, b, c)      # JS-style output

def step(k: GlobalKnowledge):
    pass
```

When printing simple data types (e.g., `int`, `float`, `str`, `list`), there is no difference between `print` and `jprint`. However, when printing objects:  
- `jprint` displays the actual properties of the object in JavaScript.  
- `print` shows a Python-style formatted string.  

Use `jprint` for detailed debugging and `print` for everyday use.  

</details>  

### Compilation and Execution  
Configure `build.py` as follows:  
1. In the game, open Tutorial 1’s file via **External Editor** (click the filename above **Play Game**).  
2. In the opened VSCode, right-click `main.mjs` and copy its file path.  
3. Paste the path into `config.target` in `build.py` (uncomment the line if necessary).  

Set the language in `config.language` to `'en'` (English output) or `'cn'` (partial Chinese output).  

Run `build.py` in PyCharm to transpile Python to JavaScript. If successful, click **Play Game** to see the result and receive a `Pass` popup.
