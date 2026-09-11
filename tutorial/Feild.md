# Field Class Documentation

- [Core Concepts](#core-concepts)
- [Quick Start](#quick-start)
- [Core Features](#core-features)
  - [Data Operations](#data-operations)
  - [Field Transformations](#field-transformations)
  - [Visualization](#visualization)
  - [Morphology](#morphology)
  - [Object Copying (clone)](#object-copying-clone)
- [Appendix: Complete Method Reference](#appendix-complete-method-reference)

---

## Core Concepts

`Field` is a container for 2D integer grids, supporting three data semantics:
- **Normal Field**: Stores cost values (0-254 traversable, 255 obstacle)
- **Distance Field**: Manhattan distance calculated via BFS
- **Direction Field**: 8-direction encoding (1-8), pointing to the nearest target

All morphological operations **modify in-place** by default, returning `self` to support method chaining.

---

## Quick Start

```python
# Create from 2D array (Screeps terrain data)
field = Field(get.COST_ARRAY2D)
# field = Field(get.COST_MATRIX)  # Equivalent

# Get distance field to your SPAWN
dist = field.toDistance(SPAWN)
dist.view()
```

**Note**:
  - get.COST_ARRAY2D and get.COST_MATRIX are dynamic constants
  - At tick = 0, they are equivalent to default map data
  - At tick = 1, they update with various blocking effects

---

## Core Features

### Data Operations

**Cell Read/Write**: `at(x: int, y: int, v: int = None) -> int | None`

The most basic operation. **Returns** cell value when reading; **modifies in-place** and returns `None` when writing.

**Example**:
```python
def init(k: GlobalKnowledge):
    DIST = Field(get.COST_ARRAY2D).toDistance(SPAWN)
  
# Sort enemies by proximity to SPAWN
enemies = sorted(k.enemies, lambda e: DIST.at(e.x, e.y))
```
---

**Area Fill**: `fill(x: int, y: int, w: int, h: int, v: int) -> None`

Batch assign values to rectangular region, modified in-place.

---

### Field Transformations

**Signature**: `toDistance(target: Point | int, y: int = None) -> Field`

BFS calculates the shortest steps from each grid cell to the target. Obstacles (≥255) are not traversable, unreachable cells are filled with `Field.DEFAULT`.

---

### `toMatrix` / `toMotion`

Convert Field back to Screeps native objects for final path planning.

**`toMatrix()`**: Convert to CostMatrix (limited to 100×100), for use with `PathFinder.search`  
**`toMotion()`**: Convert to MotionOptions, for use with `creep.move`  

---

### Visualization

**Signature**: `view(layer: int = 1) -> bool`

Cyclically displays a 33×33 block on the specified layer. Automatically shows numerical values or direction arrows based on field type.

**Example**:
```python
field.view()  # Completely displays the map once every 9 ticks
```

Returns `True` when a round of visualization is complete, otherwise returns `False`.

---

### Morphology

Expand or shrink obstacle areas (cells with value 255).

**`dilate()`**: Dilation—walls expand one cell into 8-neighborhood  
**`erode()`**: Erosion—wall edges shrink by one cell
---

### Object Copying: `clone`

**Signature**: `clone() -> Field`

Creates a deep copy of Field, returning a new instance.

Used to save a snapshot of original data, avoiding side effects from in-place modifications.

---

## Appendix: Complete Method Reference

| Category | Method | Description |
|----------|--------|-------------|
| **Data Operations** | `at(x, y, v?)` | Read/write cell value |
| | `roi(x, y, w, h)` | Extract sub-region as new Field |
| | `fill(x, y, w, h, v)` | Rectangle area fill |
| | `flood(x, y, v?)` | `None`=magic wand selection, value=fill |
| **Field Transformations** | `toEdges()` | Obstacle edge detection (255=edge) |
| | `toDistance(target: Point \| int, y: int = None)` | Normal field to distance field |
| | `toDirect(reverse?)` | Distance field to direction field (1-8) |
| | `toMatrix()` | Convert to CostMatrix (limit 100×100) |
| | `toMotion()` | Convert to MotionOptions pathfinding options |
| | `toPool(k, s, mode)` | Max/avg pooling, optional stride |
| **Visualization** | `view(layer?)` | Display 33×33 block on specified layer |
| **Morphology** | `dilate()`, `erode()` | Dilate/erode (value 255) |
| | `opening(k?)`, `closing(k?)` | Opening/closing (erode then dilate / vice versa) |
| | `topHat(k?)`, `blackHat(k?)` | Top-hat/black-hat transform |
| **Gradient** | `gradient(k?)` | Morphological gradient (max-min) |
| | `gradientI(k?)`, `gradientEx(k?)` | Internal/external gradient |
| **Filtering** | `blur(kw, kh)`, `gaussBlur(kw, kh, sigma)`, `medianBlur(k?)` | Mean/Gaussian/median blur |
| | `bilateralFilter(d, sigmaColor, sigmaSpace)` | Edge-preserving smoothing |
| **Edge Detection** | `sobel(dx, dy, ksize, scale, delta)`, `scharr(dx, dy)`, `laplacian(ksize)` | Standard convolution operators |
| **Raycasting** | `ray(pt0, pt1, threshold?)` | Bresenham line obstacle detection |
| **Spiral Search** | `space(tx, ty, maxVal?, rot?)` | Find nearest available position |
| **Data Copying** | `clone()` | Deep copy |
| **Static** | `getStructuringElement(shape, kw, kh)` | Get morphological kernel |

---

**Note**: All `ksize` must be positive odd numbers. In-place modification methods return `self` to support method chaining.
