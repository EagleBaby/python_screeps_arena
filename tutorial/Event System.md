## Event System
- [Event Overview](#event-overview)
- [Using std Static Methods](#using-std-static-methods)
- [Using Creep Instance Methods](#using-creep-instance-methods)
- [Using Stage Instance Methods](#using-stage-instance-methods)
- [@listen Decorator](#listen-decorator)
- [Event Data Format](#event-data-format)
- [Final Code](#final-code)
### Event Overview

The event system is based on the publish-subscribe pattern and includes three core operations:

1. **Listen for events** - Register interest in specific events
2. **Push events** - Trigger events and notify all listeners
3. **Cancel listening** - Remove event listeners

The system provides two usage methods:
- Static methods of the `std` module - Global event management
- Instance methods of `Stage` and its subclasses - Object-level event management
- `@listen` decorator - Declarative event listening

### Using std Static Methods

The `std` module provides three static methods for event operations:

#### std.listenFor

Register a global event listener.

| Parameter Name | Type | Optional | Default Value | Description |
|---------------|------|----------|---------------|-------------|
| `event_name` | `str` | No | - | Event name |
| `func` | `callable` | No | - | Callback function to be called when the event is triggered |
| `*sources` | `str` | Yes | `[]` | Event source filter, only listen to events from these sources |

**Example**: Listen for all "resource_depleted" events

```python
from builtin import *

def on_resource_depleted(data):
    print(f"[DEBUG] Resource depleted: {data}")  # Debug output: view event data

std.listenFor("resource_depleted", on_resource_depleted)
```

#### std.pushEvent

Trigger a global event.

| Parameter Name | Type | Optional | Default Value | Description |
|---------------|------|----------|---------------|-------------|
| `event_name` | `str` | No | - | Event name |
| `data` | `any` | Yes | `None` | Event data, which will be passed to all listeners |
| `*targets` | `str` | Yes | `[]` | Event target filter, only notify listeners of these targets |

**Example**: Trigger a "resource_depleted" event

```python
std.pushEvent("resource_depleted", {"source_id": "source1", "position": Point(10, 10)})
```

#### std.cancelEvent

Cancel global event listening.

| Parameter Name | Type | Optional | Default Value | Description |
|---------------|------|----------|---------------|-------------|
| `event_name` | `str` | No | - | The name of the event to cancel listening for |

**Example**: Cancel listening for "resource_depleted" events

```python
std.cancelEvent("resource_depleted")
```


### Using Creep Instance Methods

All Creep instances obtained in the game have the following event methods:
- `listenFor(event_name: str, func: callable, *sources: str)`
- `pushEvent(event_name: str, data: any, *targets: str)`
- `cancelEvent(event_name: str)`

**Note**: Same parameter format as std, but must be called through Creep instances.

### Using Stage Instance Methods

All instances that inherit from `Stage` and its subclasses (such as `CreepLogic`, `Logic`) have the following event methods:
- `listenFor(event_name: str, func: callable, *sources: str)`
- `pushEvent(event_name: str, data: any, *targets: str)`
- `cancelEvent(event_name: str)`
  
**Note**: Same parameter format as std, but can only be used in class instance methods.

### @listen Decorator

The `@listen` decorator provides a declarative way to register event listeners.

**Syntax**:
```python
@listen(event_name: str, *sources: str)
```

**Note**: Can only be used for instance methods of Stage and its subclasses, not for independent functions or other classes' methods.

**Example**: Using decorator to register event listening

```python
from builtin import *

class SmartMinerCreep(CreepLogic):
    NAME = "SmartMiner"
    
    @listen("source_empty")
    def handle_source_empty(self, data):
        """Automatically called when source is depleted"""
        print(f"[DEBUG] {self.name} received source_empty event through decorator")  # Debug output: confirm decorator works
        self.transform("FindNewSource")
```
### Event Matching Rules

The event system supports flexible matching mechanisms:

#### Source Filtering

Specify the `sources` parameter when registering a listener to only receive events from these sources:

```python
# Only listen to energy_full events from "Harvester1" and "Harvester2"
self.listenFor("energy_full", self.on_energy_full, "Harvester1", "Harvester2")

# Using decorator
@listen("energy_full", "Harvester1", "Harvester2")
def on_energy_full(self, data):
    pass
```

#### Target Filtering

Specify the `targets` parameter when pushing an event to only notify listeners of these targets:

```python
# Only notify listeners whose names start with "Transporter"
self.pushEvent("energy_full", data, "Transporter")
```

#### Prefix Matching

The event system uses `startsWith` for source and target matching:

```python
# Listen to all event sources starting with "Harvester"
self.listenFor("energy_full", self.on_energy_full, "Harvester")

# This will match "Harvester1", "Harvester2", "HarvesterAlpha", etc.
```

### Event Data Format

Event data is a dictionary or object, and the system automatically adds the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| `inst` | `<named>` | Event source, an instance object containing a 'name' attribute |

**Example**: Complete event data structure

```python
# Trigger event in HarvesterLogic
self.pushEvent("energy_full", {
    "energy_amount": 100,
    "position": Point(10, 20)
})

# Data format received by listeners
{
    "energy_amount": 100,
    "position": Point(10, 20),
    "inst": <HarvesterLogic instance>  # Automatically added
}
```

### Final Code

Here is a minimal event system usage example, focusing on the core event functionality:

```python
from builtin import *

# Event Sender
class EventSender(Logic):
    NAME = "Sender"
    
    def onStep(self, creep, k):
        # Trigger event every 100 ticks
        if k.now % 100 == 0:
            # Push custom event with data
            self.pushEvent("custom_event", {
                "message": "Hello from Sender",
                "tick": k.now
            })

# Event Receiver
class EventReceiver(Logic):
    NAME = "Receiver"
    
    def onStart(self, creep, k):
        # Listen for specific event, with optional source filtering
        self.listenFor("custom_event", self.on_custom_event, "Sender")
    
    def on_custom_event(self, data):
        # Event handling logic
        print(f"Received event: {data['message']}, tick: {data['tick']}")
        print(f"Event source: {data.inst.name}")

# Decorator Usage Example
class DecoratorReceiver(Logic):
    NAME = "DecoratorReceiver"
    
    # Use @listen decorator to listen for events
    @listen("custom_event")
    def handle_event(self, data):
        print(f"Decorator received event: {data['message']}")

# Main Logic
SPAWN = get.spawn()

def init(k: GlobalKnowledge):
    # Create instances
    EventSender(SPAWN)
    EventReceiver(SPAWN)
    DecoratorReceiver(SPAWN)

def step(k: GlobalKnowledge):
    pass
```

