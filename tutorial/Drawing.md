## Drawing
- [Drawing Overview](#drawing-overview)
- [Quick Start](#quick-start)
- [Coordinates, Layers and Persistence](#coordinates-layers-and-persistence)
- [Drawing Text](#drawing-text)
- [Drawing Lines](#drawing-lines)
- [Drawing Shapes](#drawing-shapes)
- [Drawing Paths](#drawing-paths)
- [Drawing Creep Headers](#drawing-creep-headers)
- [Drawing Cluster Results](#drawing-cluster-results)
- [Style Options](#style-options)
- [Drawing in CreepLogic](#drawing-in-creeplogic)
- [Method Reference](#method-reference)
- [Final Code](#final-code)

### Drawing Overview

This section introduces how to draw graphics on the game screen with `View`. Drawing is a great helper for debugging and visualization: by drawing creeps' targets, paths and danger zones, you can tell at a glance whether the logic runs as expected.

`View` is a wrapper around the game's built-in `Visual` (provided by `builtin.view`), and works right after the usual `from builtin import *`. It supports text, lines, dashed lines, circles, rectangles and polygons, plus dedicated graphics such as paths, health headers and clusters.

Drawings are for your eyes only: they do not affect the match result and cost no energy, so you can safely keep them in your final code.

**Note**: Drawing repeatedly on the same layer keeps stacking, so a persistent layer must be cleared with `clear()` before redrawing each tick.

### Quick Start

```python
from builtin import *

V = View(3)                                   # Draw on layer 3

def step(k: GlobalKnowledge):
    V.clear()  # > ignore                       # Clear first, then redraw
    V.text('Hello', Point(5, 5), 0.5, '#FF0000')
    if k.enemies:
        V.circle(k.enemies[0], 0.4, '#FFA500')  # A Creep can be used as the center
```

Non-persistent graphics last only one tick, which suits one-off markers and needs no clearing:

```python
View(99, False).circle(Point(10, 10), 0.4, '#FFA500')
```

**Note**: The compiler may warn about `clear()`; append `# > ignore` to the line to silence it.

### Coordinates, Layers and Persistence

#### Coordinates

All coordinates are measured in tiles, with `(0, 0)` at the top-left corner of the map. Integer coordinates fall exactly on tile centers, so `Point(10, 10)` is the center of the tile at x:10, y:10.

**Note**: For graphics anchored at a top-left corner or a baseline, such as rectangles and text, offset by half a tile when marking a specific tile — for example `Point(x - 0.5, y - 0.5)`.

Every drawing method accepts any object with `x` and `y` properties: `Point`, `Creep` and `Flag` can all be passed in directly, with no manual conversion.

#### Layers and Persistence

The larger the layer number, the more on top its contents are drawn. Assign fixed layers to different purposes to avoid overlaps — layer 3 for paths and layer 4 for markers, for example.

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `layer` | `int` | No | - | Layer number; a larger number is drawn above a smaller one |
| `persistent` | `bool` | Yes | `True` | Whether the graphics persist: `True` keeps them on screen until you call `clear()`; `False` shows them for the current tick only |

**Example**: Persistent markers on layer 4, one-off markers on layer 99

```python
G.flag_view = View(4)              # Persistent layer: keep one global instance and redraw each tick
View(99, False).circle(Point(10, 10), 0.4, '#FFA500')   # Shown for one tick only
```

### Drawing Text

**Signature**: `text(text, pos, font, color, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `text` | `str` | No | - | Text content, Unicode and emoji are supported |
| `pos` | `Point` | No | - | Text position (baseline anchor) |
| `font` | `str` \| `int` \| `float` | No | - | Font size; `0.5` means 0.5 tiles in game coordinates, and `'12px'` or `'0.7 serif'` also work |
| `color` | `str` | No | - | Font color, e.g. `'#FF0000'` |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

**Example**: Show live information above the spawn

```python
V.text(f'Enemies: {len(k.enemies)}', Point(SPAWN.x, SPAWN.y - 1), 0.4, '#FFFFFF')
```

### Drawing Lines

#### Solid Line: line

**Signature**: `line(pos1, pos2, width = 0.1, color = None, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `pos1` | `Point` | No | - | Start point |
| `pos2` | `Point` | No | - | End point |
| `width` | `float` | Yes | `0.1` | Line width in tiles |
| `color` | `str` | Yes | `None` | Line color; white when omitted |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

**Example**: Refresh a front line every tick

```python
V.clear()  # > ignore
V.line(seg[0], seg[1], 0.2, '#FF0000')
```

#### Dashed Line: dashLine

**Signature**: `dashLine(pos1, pos2, dashLength = 0.5, gapLength = 0.5, width = 0.1, color = None, options = None)`

Parameters are the same as `line`, with extra control over the lengths of dashes and gaps:

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `dashLength` | `float` | Yes | `0.5` | Length of each solid dash |
| `gapLength` | `float` | Yes | `0.5` | Length of the gap between dashes |

**Example**: Draw a dashed line for a connection that is "planned but not yet carried out"

```python
V.dashLine(Point(0, 0), Point(10, 10), 0.5, 0.5, 0.1, '#00FF00')
```

If you only want a dashed outline, `lineStyle` in `options` is simpler — see [Style Options](#style-options).

### Drawing Shapes

#### Circle: circle

**Signature**: `circle(pos, radius, fill = None, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `pos` | `Point` | No | - | Circle center |
| `radius` | `float` | No | - | Radius in tiles (`0.5` is about half a tile wide) |
| `fill` | `str` | Yes | `None` | Fill color; draws only the outline when omitted |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

**Example**: A filled circle and an outlined one

```python
View(99, False).circle(Point(10, 10), 0.4, '#FFA500')                     # Filled
V.circle(Point(10, 10), 0.5, None, {'stroke': '#FF0000', 'strokeWidth': 0.1})   # Outline
```

#### Rectangle: rect

**Signature**: `rect(pos, width, height, fill = None, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `pos` | `Point` | No | - | **Top-left** corner |
| `width` | `float` | No | - | Width |
| `height` | `float` | No | - | Height |
| `fill` | `str` | Yes | `None` | Fill color; draws only the outline when omitted |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

**Example**: Mark a tile with an outlined square

```python
# Mark a 1x1 tile: offset the top-left corner by half a tile
V.rect(Point(TARGET_FLAG.x - 0.5, TARGET_FLAG.y - 0.5), 1, 1, None,
       {'stroke': '#98FB98', 'strokeWidth': 0.1})
```

#### Polygon: poly

**Signature**: `poly(points, fill = None, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `points` | `list[Point]` | No | - | List of vertex coordinates, at least 3 points |
| `fill` | `str` | Yes | `None` | Fill color; draws only the outline when omitted |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

**Example**: Draw a triangular area

```python
V.poly([Point(2, 2), Point(8, 2), Point(5, 8)], None,
       {'stroke': '#00BFFF', 'strokeWidth': 0.15})
```

### Drawing Paths

**Signature**: `path(pts, width = 0.2, color = None, options = None)`

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `pts` | `list[Point]` | No | - | Path points, connected in order; at least 2 points |
| `width` | `float` | Yes | `0.2` | Line width |
| `color` | `str` | Yes | `None` | Line color; uses the default theme color `'#AEFC80'` when omitted |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

Compared with calling `line` segment by segment, `path` handles portals automatically: when the path goes through a portal, it draws a dashed line to the exit and continues from there (the dashed color is derived from the solid color, so the two stay distinguishable); if it meets a portal that has not been revealed, it draws a red cross at that spot and stops drawing.

**Example**: Draw a creep's path to a target point

```python
V.path([creep, target], color='#FFA500')

# A path through portals: creep -> entrance -> exit -> target
V.path([creep, portalA, portalB, target])
```

### Drawing Creep Headers

**Signature**: `header(creep)`

Draws "name ❤️ health percentage" above a creep's head, with a color that follows the health: greenish when healthy, closer to red as health drops.

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `creep` | `Creep` | No | - | The creep to annotate |

**Example**: Annotate every enemy with a health header

```python
for e in k.enemies:
    V.header(e)
```

### Drawing Cluster Results

**Signature**: `cluster(cluster, fill = None, options = None)`

Draws a cluster result: shaded squares outline the area the cluster covers, and statistics are listed line by line at the cluster center. What gets shown is controlled by the `draws` switches on `GlobalKnowledge`: the `grade` line is always there, and `sse`, `density` and `entropy` lines are added when `k.draws.cluster_sse`, `k.draws.cluster_density` and `k.draws.cluster_entropy` are `True`.

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `cluster` | `ClusterResult` | No | - | A cluster result, e.g. an item of `k.clusters.enemies` |
| `fill` | `str` | Yes | `None` | Fill color; uses the default theme color when omitted |
| `options` | `UsrObject` | Yes | `None` | Other style options, see [Style Options](#style-options) |

**Example**: Inspect the largest enemy cluster

```python
if k.clusters.enemies:
    V.cluster(k.clusters.enemies[0])
```

### Style Options

Every drawing method takes `options` as its last parameter for fine-tuning the appearance. The commonly used keys are:

| Option | Type | Description |
|--------|------|-------------|
| `fill` | `str` | Fill color, e.g. `'#FF0000'` |
| `stroke` | `str` | Stroke color; circles, rectangles and polygons use it to draw outlines |
| `strokeWidth` | `number` | Stroke width, default `0.1` |
| `opacity` | `number` | Opacity from 0 to 1, for semi-transparent areas |
| `lineStyle` | `str` | Line style: omitted means solid; `'dashed'` and `'dotted'` are also accepted |
| `backgroundColor` | `str` | Text background color, `text` only; keeps text readable on a busy screen |

**Note**: A method's own parameters (such as `color`, `fill`, `width`) take priority over the same keys in `options`.

**Example**: A semi-transparent yellow area plus text with a background

```python
V.rect(Point(3.5, 3.5), 5, 5, '#FFFF00', {'opacity': 0.3})
V.text('Danger', Point(6, 6), 0.5, '#000000', {'backgroundColor': '#FFFF00', 'opacity': 0.9})
```

### Drawing in CreepLogic

If the drawing belongs to a specific creep (its target or patrol route, for example), let `CreepLogic` manage a `View` for you instead of creating and clearing one yourself:

| Class Variable | Type | Default Value | Description |
|-------|------|-------|------|
| `DRAW` | `bool` | `False` | Whether to enable drawing |
| `LAYER` | `int` | `10` | Layer used for drawing |

With `DRAW` enabled, `onDraw` is called automatically at the end of each tick's logic step, and receives a `View` already bound to that layer:

| Parameter Name | Type | Optional | Default Value | Description |
|-------|------|------|--------|------|
| `c` | `Creep` | No | - | Creep instance |
| `v` | `View` | No | - | View dedicated to this logic |
| `k` | `GlobalKnowledge` | No | - | GlobalKnowledge |
| `*refs` | `CreepLogic` | Yes | - | Child instances created by link |

**Example**: Draw a creep's health header and its path to the target

```python
class HunterCreep(CreepLogic):
    NAME = "Hunter"
    DRAW = True                     # Enable drawing
    LAYER = 11                      # Drawing layer

    def onDraw(self, c: Creep, v: View, k: GlobalKnowledge):
        v.header(c)
        if self.target:
            v.path([c, self.target], color='#EE6363')
```

As with `onStep`, you can leave out the parameters you don't need:

```python
def onDraw(self, c, v):  # This will not cause an error
    v.circle(c, 0.4, '#FFA500')
```

### Method Reference

| Category | Method | Description |
|----------|--------|-------------|
| **Creation & Cleanup** | `View(layer, persistent?)` | Create a view |
| | `clear()` | Clear the current layer |
| **Basic Shapes** | `text(text, pos, font, color, options?)` | Text |
| | `line(pos1, pos2, width?, color?, options?)` | Line segment |
| | `dashLine(pos1, pos2, dashLength?, gapLength?, width?, color?, options?)` | Dashed line |
| | `circle(pos, radius, fill?, options?)` | Circle |
| | `rect(pos, width, height, fill?, options?)` | Rectangle (`pos` is the top-left corner) |
| | `poly(points, fill?, options?)` | Polygon |
| **Specialized Graphics** | `path(pts, width?, color?, options?)` | Path (handles portals automatically) |
| | `header(creep)` | Creep health header |
| | `cluster(cluster, fill?, options?)` | Cluster result |
| **Others** | `color` | Returns a different color on every read, handy for coloring multiple objects |
| | `size()` | Returns the size of the drawing data stored in the view |

### Final Code

The following example redraws the battlefield information every tick: static markers live on a persistent layer, while connections and health headers refresh with the situation.

```python
from builtin import *

SPAWN = get.spawn()
V = View(3)                                  # Persistent layer 3, created once globally

def init(k: GlobalKnowledge):
    """At start: draw the static markers once"""
    V.clear()  # > ignore
    for i, flag in enumerate(get.flags()):
        V.rect(Point(flag.x - 0.5, flag.y - 0.5), 1, 1, None,
               {'stroke': '#98FB98', 'strokeWidth': 0.1})
        V.text(f'F{i}', Point(flag.x, flag.y), 0.4, '#98FB98')

def step(k: GlobalKnowledge):
    """Every tick: clear and redraw the dynamic information"""
    V.clear()  # > ignore
    for e in k.enemies:
        V.header(e)                          # Name ❤️ health
        V.path([SPAWN, e], color='#FF0000')  # The enemy's path to the spawn

    if k.enemies:
        # Non-persistent view: a marker that lasts one tick
        View(99, False).circle(k.enemies[0], 0.4, '#FFA500')
```

**Note**: To draw 2D field data (cost fields, distance fields, direction fields), use `Field.view()`; see [Feild.md](./Feild.md) for details.
