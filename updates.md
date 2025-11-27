# PyScreeps-Arena Changelog

> A Python development toolkit for Screeps: Arena players. With `std.py` serving as the glue layer between JS and Python, players can write logic code in `main.py` and run `build.py` to generate `main.mjs` for submission to the game.
> 
> **Important Note**: Screeps: Arena code is not compatible with Screeps: World.

## Version Naming Conventions

- `x.y.z`: Official release version
- `x.ya/z`: Alpha/beta pre-release versions
- Early `0.1.x` series used continuous iteration without strict differentiation between feature updates and fixes

---

## [0.5.x] - 2025-Q4 | Arena 1.0 Adaptation

### 0.5.5.x (coming soon)
- **Feature**: Added `path()` method to `View` class for intelligent route visualization. Automatically handles portal connections with dashed lines, derives complementary colors via HSV shift, and marks unrevealed portals with error indicators.
- **Fix**: Fixed pathfinding error when map contain initial roads.

### 0.5.4.x
- **Feature**: Enhanced compiler: `from XXX import *` now imports all modules from `__init__.py`-less directories (subdirectories ignored with warning). Behavior unchanged for packages with `__init__.py`
- **Fix**: Fixed logic error in `recursive` decorator under special conditions  
- **Fix**: Fixed missing `get.parts`; added `.parts: list[str]` and `.dynamicParts: list[str]` attributes to `CreepInfo`
- **Feature**: Added `.disable()` and `.enable()` instance methods to `Scheduler` for temporarily disabling/enabling scheduler
- **Feature**: Added `basic.py` file to `src` directory in new projects
- **Feature**: Added `.hpPer` attribute to `Creep` for retrieving creep's health percentage
- **Docs**: Fixed comment accuracy for some functions in `math` library

### 0.5.3.x
- **Feature**: Added `enemies: list[Creep]` and `friends: list[Creep]` attributes to `GlobalKnowledge` (know, k)  
- **Feature**: `Portal.destination` now supports manual assignment to another portal when explicitly ensured  
- **Fix**: Tightened boundary conditions in `Creep.intermit` for transporting to simple `Point`-type targets  
- **Optimization**: Pruned `Creep.autoAttack` logic—skip ranged attack when dynamic ranged attack power is 0  
- **Docs**: Updated docstring for `CreepLogic.PRIORITY`  
- **Docs**: Updated docstring for `get.chebRotate45x`  
- **New**: `get.directionRotate(direction: int, count: int) -> int` – rotates direction by count × 45°  
- **New**: `get.length(obj: st.point, target: st.point) -> int` – returns path length between two points  
- **New**: `get.cost(pt: st.point, option: UsrObject = None) -> int` – returns cost of specified position

### 0.5.2.x
- **Fix**: Inaccurate `uid` annotation issue
- **Fix**: Logic error in `intermit` when transporting to empty tiles
- **Optimization**: Enhanced `TeamLogic` component functionality

### 0.5.1.0
- **Feature**: Extended API support for new game modes

### 0.5.0.0
- **Major Update**: Adapted for Screeps: Arena 1.0 version
- **New**: Support for 3 new game modes

---

## [0.4.x] - 2025-Q1 | Lightweight OS Development Library

### 0.4.1.x Maintenance Releases
- **0.4.1.2**: Fixed scheduler boundary condition issues
- **0.4.1.1**: Optimized monitor memory usage
- **0.4.1**: Stable release, fixed CreepLogic state switching anomalies

### 0.4.0
- **Major Update**: Introduced state logic controller system
  - `Logic`: Basic state machine framework
  - `CreepLogic`: Unit behavior state management
  - Embedded scheduler and monitor components
- **Architecture Evolution**: Upgraded from HAL library level to lightweight OS development library

### 0.4 Pre-release Series (0.4a0 → 0.4b0)
- 0.4a8-b0: Scheduler performance optimization and API freeze
- 0.4a5-a7: Monitor component refactoring
- 0.4a3-a4: CreepLogic state persistence implementation
- 0.4a0-a2: Logic framework prototype design and validation

---

## [0.3.x] - 2024-Q4 | Dynamic Type Architecture Refactor

### 0.3.6
- **Fix**: Dynamic type inference issues in certain boundary scenarios

### 0.3.5
- **Feature**: Expanded game object type encapsulation (added 5 new structs)

### 0.3.2
- **Optimization**: Improved dynamic method call performance by approximately 30%

### 0.3.0
- **Major Update**: Complete refactor of the underlying architecture
- **New**: Full dynamic encapsulation of game types, supporting instance method calls
- **Removed**: Deprecated `put` static call pattern (retained `get` static functions)
- **Migration Guide**: 0.2.x code needs to be refactored to object-oriented style

### 0.3 Early Preview (0.3a0 → 0.3a4)
- 0.3a4: Dynamic prototype chain final implementation
- 0.3a2-a3: Iteration on type system encapsulation solutions
- 0.3a0-a1: New architecture feasibility validation

---

## [0.2.x] - 2024-Q2 | Static Utility Library Era

### 0.2.2
- **Fix**: `get` function anomalies in cross-tick caching

### 0.2.1
- **Feature**: Added 8 high-frequency utility functions

### 0.2.0
- **Major Update**: Established `get`/`put` static call paradigm
- **Feature**: Preliminary implementation of core Python → JS transpilation logic
- **Architecture**: Similar to register-level development experience

### 0.2a0
- **Preview**: Static utility library concept validation version

---

## [0.1.x] - 2024-Q1 | Project Genesis

### 0.1.20 - 0.1.21
- **Feature**: Build system stabilization

### 0.1.10 - 0.1.11
- **Feature**: Basic transpiler completed, supporting simple logic code generation

### 0.1.5 - 0.1.9
- **Feature**: Core functions of `std.py` glue layer implementation
- **Testing**: Verified communication capability with Arena basic APIs

### 0.1.1 - 0.1.4
- **Initialization**: Project structure setup
- **Experimental**: Explored Python and JS interoperability solutions

### 0.1.0
- **Birth**: PyScreeps-Arena project officially established
- **Vision**: Let Python players also enjoy Screeps: Arena

---

## Version Migration Recommendations

| Current Version | Recommended Upgrade Path | Main Change Cost |
|-----------------|--------------------------|------------------|
| ≤ 0.2.x | → 0.3.0 | High (requires rewriting to dynamic types) |
| 0.3.x | → 0.4.0 | Medium (requires understanding state machine patterns) |
| 0.4.x | → 0.5.x | Low (mainly API adaptation) |

---

## Future Planning (Roadmap)

> Based on the 0.5.x architecture, subsequent versions will focus on:
> - Visual tool development
> - Error discovery and fixing
