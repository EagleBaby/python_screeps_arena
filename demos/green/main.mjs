
const __VERSION__ = '0.4a8';
const __PYTHON_VERSION__ = '3.12.1';
import { createConstructionSite, findClosestByPath, findClosestByRange, findInRange, findPath, getCpuTime, getDirection, getHeapStatistics, getObjectById, getObjects, getObjectsByPrototype, getRange, getTerrainAt, getTicks,} from 'game/utils';
import { ConstructionSite as GameConstructionSite, Creep as GameCreep, GameObject as GameObjectProto, OwnedStructure, Resource as GameResource, Source as GameSource, Structure as GameStructure, StructureContainer as GameStructureContainer, StructureExtension as GameStructureExtension, StructureRampart as GameStructureRampart, StructureRoad as GameStructureRoad, StructureSpawn as GameStructureSpawn, StructureWall as GameStructureWall, StructureTower as GameStructureTower} from 'game/prototypes';
import { ATTACK, ATTACK_POWER, BODYPART_COST, BODYPART_HITS, BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, BUILD_POWER, CARRY, CARRY_CAPACITY, CONSTRUCTION_COST, CONSTRUCTION_COST_ROAD_SWAMP_RATIO, CONSTRUCTION_COST_ROAD_WALL_RATIO, CONTAINER_CAPACITY, CONTAINER_HITS, CREEP_SPAWN_TIME, DISMANTLE_COST, DISMANTLE_POWER, ERR_BUSY, ERR_FULL, ERR_INVALID_ARGS, ERR_INVALID_TARGET, ERR_NAME_EXISTS, ERR_NOT_ENOUGH_ENERGY, ERR_NOT_ENOUGH_EXTENSIONS, ERR_NOT_ENOUGH_RESOURCES, ERR_NOT_FOUND, ERR_NOT_IN_RANGE, ERR_NOT_OWNER, ERR_NO_BODYPART, ERR_NO_PATH, ERR_TIRED, EXTENSION_ENERGY_CAPACITY, EXTENSION_HITS, HARVEST_POWER, HEAL, HEAL_POWER, LEFT, MAX_CONSTRUCTION_SITES, MAX_CREEP_SIZE, MOVE, OBSTACLE_OBJECT_TYPES, OK, RAMPART_HITS, RAMPART_HITS_MAX, RANGED_ATTACK, RANGED_ATTACK_DISTANCE_RATE, RANGED_ATTACK_POWER, RANGED_HEAL_POWER, REPAIR_COST, REPAIR_POWER, RESOURCES_ALL, RESOURCE_DECAY, RESOURCE_ENERGY, RIGHT, ROAD_HITS, ROAD_WEAROUT, SOURCE_ENERGY_REGEN, SPAWN_ENERGY_CAPACITY, SPAWN_HITS, STRUCTURE_PROTOTYPES, TERRAIN_PLAIN, TERRAIN_SWAMP, TERRAIN_WALL, TOP, TOP_LEFT, TOP_RIGHT, TOUGH, TOWER_CAPACITY, TOWER_COOLDOWN, TOWER_ENERGY_COST, TOWER_FALLOFF, TOWER_FALLOFF_RANGE, TOWER_HITS, TOWER_OPTIMAL_RANGE, TOWER_POWER_ATTACK, TOWER_POWER_HEAL, TOWER_POWER_REPAIR, TOWER_RANGE, WALL_HITS, WALL_HITS_MAX, WORK} from 'game/constants';

import {arenaInfo} from "game";
import {Visual} from "game/visual"
import {searchPath, CostMatrix} from "game/path-finder"
    
class GameBodyPart{
    constructor(){
    }
};
class GameAreaEffect{
    constructor(){ 
    }
};
class GameFlag{
    constructor(){ 
    }
};
const GameScoreCollector = GameStructureSpawn;
const RESOURCE_SCORE = "undefined";
const RESOURCE_SCORE_X = "undefined";
const RESOURCE_SCORE_Y = "undefined";
const RESOURCE_SCORE_Z = "undefined";
        
export var LANGUAGE = 'en';
const __AUTHOR__ = '●ω＜🤍♪';
const __AUTHOR_CN__ = '我阅读理解一直可以的';
// ---------------------------------------- Module:./org.transcrypt.__runtime__.js ----------------------------------------

// Transcrypt'ed from Python, 2025-03-14 01:36:59
var __name__ = 'org.transcrypt.__runtime__';
export var __envir__ = {};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.9.0';

export function __nest__ (headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split ('.');
        var firstNewIndex = tailChain.length;
        for (var index = 0; index < tailChain.length; index++) {
            if (!current.hasOwnProperty (tailChain [index])) {
                firstNewIndex = index;
                break;
            }
            current = current [tailChain [index]];
        }
        for (var index = firstNewIndex; index < tailChain.length; index++) {
            current [tailChain [index]] = {};
            current = current [tailChain [index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames (value)) {
        Object.defineProperty (current, attrib, {
            get () {return value [attrib];},
            enumerable: true,
            configurable: true
        });
    }
};
export function __init__ (module) {
    if (!module.__inited__) {
        module.__all__.__init__ (module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
};
export function __get__ (aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty ('__class__') || typeof aThis == 'string' || aThis instanceof String) {
            if (quotedFuncName) {
                Object.defineProperty (aThis, quotedFuncName, {
                    value: function () {
                        var args = [] .slice.apply (arguments);
                        return func.apply (null, [aThis] .concat (args));
                    },
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [aThis.__proxy__ ? aThis.__proxy__ : aThis] .concat (args));
            };
        }
        else {
            return func;
        }
    }
    else {
        return func;
    }
};
export function __getcm__ (aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty ('__class__')) {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [aThis.__class__] .concat (args));
        };
    }
    else {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [aThis] .concat (args));
        };
    }
};
export function __getsm__ (aThis, func, quotedFuncName) {
    return func;
};
export var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function (meta, name, bases, attribs) {
        var cls = function () {
            var args = [] .slice.apply (arguments);
            return cls.__new__ (args);
        };
        for (var index = bases.length - 1; index >= 0; index--) {
            var base = bases [index];
            for (var attrib in base) {
                var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                if (descrip == null) {
                    continue;
                }
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (base)) {
                let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
        cls.__bases__ = bases;
        for (var attrib in attribs) {
            var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
            Object.defineProperty (cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols (attribs)) {
            let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
            Object.defineProperty (cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
export var object = {
    __init__: function (self) {},
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function (args) {
        var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
        if ('__getattr__' in this || '__setattr__' in this) {
            instance.__proxy__ = new Proxy (instance, {
                get: function (target, name) {
                    let result = target [name];
                    if (result == undefined) {
                        return target.__getattr__ (name);
                    }
                    else {
                        return result;
                    }
                },
                set: function (target, name, value) {
                    try {
                        target.__setattr__ (name, value);
                    }
                    catch (exception) {
                        target [name] = value;
                    }
                    return true;
                }
            })
			instance = instance.__proxy__
        }
        this.__init__.apply (null, [instance] .concat (args));
        return instance;
    }
};
export function __class__ (name, bases, attribs, meta) {
    if (meta === undefined) {
        meta = bases [0] .__metaclass__;
    }
    return meta.__new__ (meta, name, bases, attribs);
};
export function __pragma__ () {};
export function __call__ (/* <callee>, <this>, <params>* */) {
    var args = [] .slice.apply (arguments);
    if (typeof args [0] == 'object' && '__call__' in args [0]) {
        return args [0] .__call__ .apply (args [1], args.slice (2));
    }
    else {
        return args [0] .apply (args [1], args.slice (2));
    }
};
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {__file__: ''};
var __except__ = null;
export function __kwargtrans__ (anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
export function __super__ (aClass, methodName) {
    for (let base of aClass.__bases__) {
        if (methodName in base) {
           return base [methodName];
        }
    }
    throw new Exception ('Superclass method not found');
}
export function property (getter, setter) {
    if (!setter) {
        setter = function () {};
    }
    return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
}
export function __setproperty__ (anObject, name, descriptor) {
    if (!anObject.hasOwnProperty (name)) {
        Object.defineProperty (anObject, name, descriptor);
    }
}
export function assert (condition, message) {
    if (!condition) {
        throw AssertionError (message, new Error ());
    }
}
export function __mergekwargtrans__ (object0, object1) {
    var result = {};
    for (var attrib in object0) {
        result [attrib] = object0 [attrib];
    }
    for (var attrib in object1) {
        result [attrib] = object1 [attrib];
    }
    return result;
};
export function __mergefields__ (targetClass, sourceClass) {
    let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__']
    if (sourceClass [fieldNames [0]]) {
        if (targetClass [fieldNames [0]]) {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
            }
        }
        else {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set (sourceClass [fieldName]);
            }
        }
    }
}
export function __withblock__ (manager, statements) {
    if (hasattr (manager, '__enter__')) {
        try {
            manager.__enter__ ();
            statements ();
            manager.__exit__ ();
        }
        catch (exception) {
            if (! (manager.__exit__ (exception.name, exception, exception.stack))) {
                throw exception;
            }
        }
    }
    else {
        statements ();
        manager.close ();
    }
};
export function dir (obj) {
    var aList = [];
    for (var aKey in obj) {
        aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
    }
    aList.sort ();
    return aList;
};
export function setattr (obj, name, value) {
    obj [name] = value;
};
export function getattr (obj, name) {
    return name in obj ? obj [name] : obj ['py_' + name];
};
export function hasattr (obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    }
    catch (exception) {
        return false;
    }
};
export function delattr (obj, name) {
    if (name in obj) {
        delete obj [name];
    }
    else {
        delete obj ['py_' + name];
    }
};
export function __in__ (element, container) {
    if (container === undefined || container === null) {
        return false;
    }
    if (container.__contains__ instanceof Function) {
        return container.__contains__ (element);
    }
    else {
        return (
            container.indexOf ?
            container.indexOf (element) > -1 :
            container.hasOwnProperty (element)
        );
    }
};
export function __specialattrib__ (attrib) {
    return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
};
export function len (anObject) {
    if (anObject === undefined || anObject === null) {
        return 0;
    }
    if (anObject.__len__ instanceof Function) {
        return anObject.__len__ ();
    }
    if (anObject.length !== undefined) {
        return anObject.length;
    }
    var length = 0;
    for (var attr in anObject) {
        if (!__specialattrib__ (attr)) {
            length++;
        }
    }
    return length;
};
export function __i__ (any) {
    return py_typeof (any) == dict ? any.py_keys () : any;
}
export function __k__ (keyed, key) {
    var result = keyed [key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array)
            if (key == +key && key >= 0 && keyed.length > key)
                return result;
            else
                throw IndexError (key, new Error());
        else
            throw KeyError (key, new Error());
    }
    return result;
}
export function __t__ (target) {
    return (
        target === undefined || target === null ? false :
        ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
        target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
        target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
        target instanceof Function ? target :
        len (target) !== 0 ? target :
        false
    );
}
export function float (any) {
    if (any == 'inf') {
        return Infinity;
    }
    else if (any == '-inf') {
        return -Infinity;
    }
    else if (any == 'nan') {
        return NaN;
    }
    else if (isNaN (parseFloat (any))) {
        if (any === false) {
            return 0;
        }
        else if (any === true) {
            return 1;
        }
        else {
            throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
        }
    }
    else {
        return +any;
    }
};
float.__name__ = 'float';
float.__bases__ = [object];
export function int (any) {
    return float (any) | 0
};
int.__name__ = 'int';
int.__bases__ = [object];
export function bool (any) {
    return !!__t__ (any);
};
bool.__name__ = 'bool';
bool.__bases__ = [int];
export function py_typeof (anObject) {
    var aType = typeof anObject;
    if (aType == 'object') {
        try {
            return '__class__' in anObject ? anObject.__class__ : object;
        }
        catch (exception) {
            return aType;
        }
    }
    else {
        return (
            aType == 'boolean' ? bool :
            aType == 'string' ? str :
            aType == 'number' ? (anObject % 1 == 0 ? int : float) :
            null
        );
    }
};
export function issubclass (aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo) {
            if (issubclass (aClass, aClass2)) {
                return true;
            }
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) {
            return true;
        }
        else {
            var bases = [].slice.call (aClass2.__bases__);
            while (bases.length) {
                aClass2 = bases.shift ();
                if (aClass2 == classinfo) {
                    return true;
                }
                if (aClass2.__bases__.length) {
                    bases = [].slice.call (aClass2.__bases__).concat (bases);
                }
            }
            return false;
        }
    }
    catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
};
export function isinstance (anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
    }
    catch (exception) {
        return issubclass (py_typeof (anObject), classinfo);
    }
};
export function callable (anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
};
export function repr (anObject) {
    try {
        return anObject.__repr__ ();
    }
    catch (exception) {
        try {
            return anObject.__str__ ();
        }
        catch (exception) {
            try {
                if (anObject == null) {
                    return 'None';
                }
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for (var attrib in anObject) {
                        if (!__specialattrib__ (attrib)) {
                            if (attrib.isnumeric ()) {
                                var attribRepr = attrib;
                            }
                            else {
                                var attribRepr = '\'' + attrib + '\'';
                            }
                            if (comma) {
                                result += ', ';
                            }
                            else {
                                comma = true;
                            }
                            result += attribRepr + ': ' + repr (anObject [attrib]);
                        }
                    }
                    result += '}';
                    return result;
                }
                else {
                    return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                }
            }
            catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
};
export function chr (charCode) {
    return String.fromCharCode (charCode);
};
export function ord (aChar) {
    return aChar.charCodeAt (0);
};
export function max (nrOrSeq) {
    return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
};
export function min (nrOrSeq) {
    return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
};
export var abs = Math.abs;
export function round (number, ndigits) {
    if (ndigits) {
        var scale = Math.pow (10, ndigits);
        number *= scale;
    }
    var rounded = Math.round (number);
    if (rounded - number == 0.5 && rounded % 2) {
        rounded -= 1;
    }
    if (ndigits) {
        rounded /= scale;
    }
    return rounded;
};
export function __jsUsePyNext__ () {
    try {
        var result = this.__next__ ();
        return {value: result, done: false};
    }
    catch (exception) {
        return {value: undefined, done: true};
    }
}
export function __pyUseJsNext__ () {
    var result = this.next ();
    if (result.done) {
        throw StopIteration (new Error ());
    }
    else {
        return result.value;
    }
}
export function py_iter (iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('selector' in iterable) {
        var result = list (iterable) .__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('next' in iterable) {
        var result = iterable
        if (! ('__next__' in result)) {
            result.__next__ = __pyUseJsNext__;
        }
    }
    else if (Symbol.iterator in iterable) {
        var result = iterable [Symbol.iterator] ();
        result.__next__ = __pyUseJsNext__;
    }
    else {
        throw IterableError (new Error ());
    }
    result [Symbol.iterator] = function () {return result;};
    return result;
}
export function py_next (iterator) {
    try {
        var result = iterator.__next__ ();
    }
    catch (exception) {
        var result = iterator.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    if (result == undefined) {
        throw StopIteration (new Error ());
    }
    else {
        return result;
    }
}
export function __PyIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) {
        return this.iterable [this.index++];
    }
    else {
        throw StopIteration (new Error ());
    }
};
export function __JsIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function () {
    if (this.index < this.iterable.py_keys.length) {
        return {value: this.index++, done: false};
    }
    else {
        return {value: undefined, done: true};
    }
};
export function py_reversed (iterable) {
    iterable = iterable.slice ();
    iterable.reverse ();
    return iterable;
};
export function zip () {
    var args = [] .slice.call (arguments);
    for (var i = 0; i < args.length; i++) {
        if (typeof args [i] == 'string') {
            args [i] = args [i] .split ('');
        }
        else if (!Array.isArray (args [i])) {
            args [i] = Array.from (args [i]);
        }
    }
    var shortest = args.length == 0 ? [] : args.reduce (
        function (array0, array1) {
            return array0.length < array1.length ? array0 : array1;
        }
    );
    return shortest.map (
        function (current, index) {
            return args.map (
                function (current) {
                    return current [index];
                }
            );
        }
    );
};
export function range (start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};
export function any (iterable) {
    for (let item of iterable) {
        if (bool (item)) {
            return true;
        }
    }
    return false;
}
export function all (iterable) {
    for (let item of iterable) {
        if (! bool (item)) {
            return false;
        }
    }
    return true;
}
export function sum (iterable) {
    let result = 0;
    for (let item of iterable) {
        result += item;
    }
    return result;
}
export function enumerate (iterable) {
    return zip (range (len (iterable)), iterable);
}
export function copy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = anObject [attrib];
            }
        }
        return result;
    }
}
export function deepcopy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = deepcopy (anObject [attrib]);
            }
        }
        return result;
    }
}
export function list (iterable) {
    let instance = iterable ? Array.from (iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = 'list';
list.__bases__ = [object];
Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
Array.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    else if (stop > this.length) {
        stop = this.length;
    }
    if (step == 1) {
        return Array.prototype.slice.call(this, start, stop);
    }
    let result = list ([]);
    for (let index = start; index < stop; index += step) {
        result.push (this [index]);
    }
    return result;
};
Array.prototype.__setslice__ = function (start, stop, step, source) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    if (step == null) {
        Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
    }
    else {
        let sourceIndex = 0;
        for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
            this [targetIndex] = source [sourceIndex++];
        }
    }
};
Array.prototype.__repr__ = function () {
    if (this.__class__ == set && !this.length) {
        return 'set()';
    }
    let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
    for (let index = 0; index < this.length; index++) {
        if (index) {
            result += ', ';
        }
        result += repr (this [index]);
    }
    if (this.__class__ == tuple && this.length == 1) {
        result += ',';
    }
    result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function (element) {
    this.push (element);
};
Array.prototype.py_clear = function () {
    this.length = 0;
};
Array.prototype.extend = function (aList) {
    this.push.apply (this, aList);
};
Array.prototype.insert = function (index, element) {
    this.splice (index, 0, element);
};
Array.prototype.remove = function (element) {
    let index = this.indexOf (element);
    if (index == -1) {
        throw ValueError ("list.remove(x): x not in list", new Error ());
    }
    this.splice (index, 1);
};
Array.prototype.index = function (element) {
    return this.indexOf (element);
};
Array.prototype.py_pop = function (index) {
    if (index == undefined) {
        return this.pop ();
    }
    else {
        return this.splice (index, 1) [0];
    }
};
Array.prototype.py_sort = function () {
    __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
};
Array.prototype.__add__ = function (aList) {
    return list (this.concat (aList));
};
Array.prototype.__mul__ = function (scalar) {
    let result = this;
    for (let i = 1; i < scalar; i++) {
        result = result.concat (this);
    }
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
export function tuple (iterable) {
    let instance = iterable ? [] .slice.apply (iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [object];
export function set (iterable) {
    let instance = [];
    if (iterable) {
        for (let index = 0; index < iterable.length; index++) {
            instance.add (iterable [index]);
        }
    }
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [object];
Array.prototype.__bindexOf__ = function (element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while (mindex <= maxdex) {
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this [index] + '';
        if (middle < element) {
            mindex = index + 1;
        }
        else if (middle > element) {
            maxdex = index - 1;
        }
        else {
            return index;
        }
    }
    return -1;
};
Array.prototype.add = function (element) {
    if (this.indexOf (element) == -1) {
        this.push (element);
    }
};
Array.prototype.discard = function (element) {
    var index = this.indexOf (element);
    if (index != -1) {
        this.splice (index, 1);
    }
};
Array.prototype.isdisjoint = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issuperset = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) == -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issubset = function (other) {
    return set (other.slice ()) .issuperset (this);
};
Array.prototype.union = function (other) {
    let result = set (this.slice () .sort ());
    for (let i = 0; i < other.length; i++) {
        if (result.__bindexOf__ (other [i]) == -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.intersection = function (other) {
    this.sort ();
    let result = set ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.difference = function (other) {
    let sother = set (other.slice () .sort ());
    let result = set ();
    for (let i = 0; i < this.length; i++) {
        if (sother.__bindexOf__ (this [i]) == -1) {
            result.push (this [i]);
        }
    }
    return result;
};
Array.prototype.symmetric_difference = function (other) {
    return this.union (other) .difference (this.intersection (other));
};
Array.prototype.py_update = function () {
    let updated = [] .concat.apply (this.slice (), arguments) .sort ();
    this.py_clear ();
    for (let i = 0; i < updated.length; i++) {
        if (updated [i] != updated [i - 1]) {
            this.push (updated [i]);
        }
    }
};
Array.prototype.__eq__ = function (other) {
    if (this.length != other.length) {
        return false;
    }
    if (this.__class__ == set) {
        this.sort ();
        other.sort ();
    }
    for (let i = 0; i < this.length; i++) {
        if (this [i] != other [i]) {
            return false;
        }
    }
    return true;
};
Array.prototype.__ne__ = function (other) {
    return !this.__eq__ (other);
};
Array.prototype.__le__ = function (other) {
    if (this.__class__ == set) {
        return this.issubset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] > other [i]) {
                return false;
            }
            else if (this [i] < other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__ge__ = function (other) {
    if (this.__class__ == set) {
        return this.issuperset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] < other [i]) {
                return false;
            }
            else if (this [i] > other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__lt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issubset (other) && !this.issuperset (other) :
        !this.__ge__ (other)
    );
};
Array.prototype.__gt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issuperset (other) && !this.issubset (other) :
        !this.__le__ (other)
    );
};
export function bytearray (bytable, encoding) {
    if (bytable == undefined) {
        return new Uint8Array (0);
    }
    else {
        let aType = py_typeof (bytable);
        if (aType == int) {
            return new Uint8Array (bytable);
        }
        else if (aType == str) {
            let aBytes = new Uint8Array (len (bytable));
            for (let i = 0; i < len (bytable); i++) {
                aBytes [i] = bytable.charCodeAt (i);
            }
            return aBytes;
        }
        else if (aType == list || aType == tuple) {
            return new Uint8Array (bytable);
        }
        else {
            throw py_TypeError;
        }
    }
}
export var bytes = bytearray;
Uint8Array.prototype.__add__ = function (aBytes) {
    let result = new Uint8Array (this.length + aBytes.length);
    result.set (this);
    result.set (aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function (scalar) {
    let result = new Uint8Array (scalar * this.length);
    for (let i = 0; i < scalar; i++) {
        result.set (this, i * this.length);
    }
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
export function str (stringable) {
    if (typeof stringable === 'number')
        return stringable.toString();
    else {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    }
};
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [object];
String.prototype.__iter__ = function () {new __PyIterator__ (this);};
String.prototype.__repr__ = function () {
    return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
};
String.prototype.__str__ = function () {
    return this;
};
String.prototype.capitalize = function () {
    return this.charAt (0).toUpperCase () + this.slice (1);
};
String.prototype.endswith = function (suffix) {
    if (suffix instanceof Array) {
        for (var i=0;i<suffix.length;i++) {
            if (this.slice (-suffix[i].length) == suffix[i])
                return true;
        }
    } else
        return suffix == '' || this.slice (-suffix.length) == suffix;
    return false;
};
String.prototype.find = function (sub, start) {
    return this.indexOf (sub, start);
};
String.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    var result = '';
    if (step == 1) {
        result = this.substring (start, stop);
    }
    else {
        for (var index = start; index < stop; index += step) {
            result = result.concat (this.charAt(index));
        }
    }
    return result;
};
__setproperty__ (String.prototype, 'format', {
    get: function () {return __get__ (this, function (self) {
        var args = tuple ([] .slice.apply (arguments).slice (1));
        var autoIndex = 0;
        return self.replace (/\{(\w*)\}/g, function (match, key) {
            if (key == '') {
                key = autoIndex++;
            }
            if (key == +key) {
                return args [key] === undefined ? match : str (args [key]);
            }
            else {
                for (var index = 0; index < args.length; index++) {
                    if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                        return str (args [index][key]);
                    }
                }
                return match;
            }
        });
    });},
    enumerable: true
});
String.prototype.isalnum = function () {
    return /^[0-9a-zA-Z]{1,}$/.test(this)
}
String.prototype.isalpha = function () {
    return /^[a-zA-Z]{1,}$/.test(this)
}
String.prototype.isdecimal = function () {
    return /^[0-9]{1,}$/.test(this)
}
String.prototype.isdigit = function () {
    return this.isdecimal()
}
String.prototype.islower = function () {
    return /^[a-z]{1,}$/.test(this)
}
String.prototype.isupper = function () {
    return /^[A-Z]{1,}$/.test(this)
}
String.prototype.isspace = function () {
    return /^[\s]{1,}$/.test(this)
}
String.prototype.isnumeric = function () {
    return !isNaN (parseFloat (this)) && isFinite (this);
};
String.prototype.join = function (strings) {
    strings = Array.from (strings);
    return strings.join (this);
};
String.prototype.lower = function () {
    return this.toLowerCase ();
};
String.prototype.py_replace = function (old, aNew, maxreplace) {
    return this.split (old, maxreplace) .join (aNew);
};
String.prototype.lstrip = function () {
    return this.replace (/^\s*/g, '');
};
String.prototype.rfind = function (sub, start) {
    return this.lastIndexOf (sub, start);
};
String.prototype.rsplit = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
        }
        else {
            return result;
        }
    }
};
String.prototype.rstrip = function () {
    return this.replace (/\s*$/g, '');
};
String.prototype.py_split = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
        }
        else {
            return result;
        }
    }
};
String.prototype.startswith = function (prefix) {
    if (prefix instanceof Array) {
        for (var i=0;i<prefix.length;i++) {
            if (this.indexOf (prefix [i]) == 0)
                return true;
        }
    } else
        return this.indexOf (prefix) == 0;
    return false;
};
String.prototype.strip = function () {
    return this.trim ();
};
String.prototype.upper = function () {
    return this.toUpperCase ();
};
String.prototype.__mul__ = function (scalar) {
    var result = '';
    for (var i = 0; i < scalar; i++) {
        result = result + this;
    }
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__ (element) {
    return this.hasOwnProperty (element);
}
function __keys__ () {
    var keys = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            keys.push (attrib);
        }
    }
    return keys;
}
function __items__ () {
    var items = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            items.push ([attrib, this [attrib]]);
        }
    }
    return items;
}
function __del__ (key) {
    delete this [key];
}
function __clear__ () {
    for (var attrib in this) {
        delete this [attrib];
    }
}
function __getdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result == undefined) {
        result = this ['py_' + aKey]
    }
    return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
}
function __setdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        return result;
    }
    var val = aDefault == undefined ? null : aDefault;
    this [aKey] = val;
    return val;
}
function __pop__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        delete this [aKey];
        return result;
    } else {
        if ( aDefault === undefined ) {
            throw KeyError (aKey, new Error());
        }
    }
    return aDefault;
}
function __popitem__ () {
    var aKey = Object.keys (this) [0];
    if (aKey == null) {
        throw KeyError ("popitem(): dictionary is empty", new Error ());
    }
    var result = tuple ([aKey, this [aKey]]);
    delete this [aKey];
    return result;
}
function __update__ (aDict) {
    for (var aKey in aDict) {
        this [aKey] = aDict [aKey];
    }
}
function __values__ () {
    var values = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            values.push (this [attrib]);
        }
    }
    return values;
}
function __dgetitem__ (aKey) {
    return this [aKey];
}
function __dsetitem__ (aKey, aValue) {
    this [aKey] = aValue;
}
export function dict (objectOrPairs) {
    var instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) {
            for (var index = 0; index < objectOrPairs.length; index++) {
                var pair = objectOrPairs [index];
                if ( !(pair instanceof Array) || pair.length != 2) {
                    throw ValueError(
                        "dict update sequence element #" + index +
                        " has length " + pair.length +
                        "; 2 is required", new Error());
                }
                var key = pair [0];
                var val = pair [1];
                if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                     if (!isinstance (objectOrPairs, dict)) {
                         val = dict (val);
                     }
                }
                instance [key] = val;
            }
        }
    }
    else {
        if (isinstance (objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys ();
            for (var index = 0; index < aKeys.length; index++ ) {
                var key = aKeys [index];
                instance [key] = objectOrPairs [key];
            }
        } else if (objectOrPairs instanceof Object) {
            instance = objectOrPairs;
        } else {
            throw ValueError ("Invalid type of object for dict creation", new Error ());
        }
    }
    __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
    __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
    __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
    __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
    __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
    __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
    __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
    __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
    __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
    __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
    __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
    __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
    __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
    __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [object];
function __setdoc__ (docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
export function __jsmod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
export function __mod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
export function __pow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
export var pow = __pow__;
export function __neg__ (a) {
    if (typeof a == 'object' && '__neg__' in a) {
        return a.__neg__ ();
    }
    else {
        return -a;
    }
};
export function __matmul__ (a, b) {
    return a.__matmul__ (b);
};
export function __mul__ (a, b) {
    if (typeof a == 'object' && '__mul__' in a) {
        return a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return b.__rmul__ (a);
    }
    else {
        return a * b;
    }
};
export function __truediv__ (a, b) {
    if (typeof a == 'object' && '__truediv__' in a) {
        return a.__truediv__ (b);
    }
    else if (typeof b == 'object' && '__rtruediv__' in b) {
        return b.__rtruediv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return a / b;
    }
};
export function __floordiv__ (a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) {
        return a.__floordiv__ (b);
    }
    else if (typeof b == 'object' && '__rfloordiv__' in b) {
        return b.__rfloordiv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return Math.floor (a / b);
    }
};
export function __add__ (a, b) {
    if (typeof a == 'object' && '__add__' in a) {
        return a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return b.__radd__ (a);
    }
    else {
        return a + b;
    }
};
export function __sub__ (a, b) {
    if (typeof a == 'object' && '__sub__' in a) {
        return a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return b.__rsub__ (a);
    }
    else {
        return a - b;
    }
};
export function __lshift__ (a, b) {
    if (typeof a == 'object' && '__lshift__' in a) {
        return a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return b.__rlshift__ (a);
    }
    else {
        return a << b;
    }
};
export function __rshift__ (a, b) {
    if (typeof a == 'object' && '__rshift__' in a) {
        return a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return b.__rrshift__ (a);
    }
    else {
        return a >> b;
    }
};
export function __or__ (a, b) {
    if (typeof a == 'object' && '__or__' in a) {
        return a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return b.__ror__ (a);
    }
    else {
        return a | b;
    }
};
export function __xor__ (a, b) {
    if (typeof a == 'object' && '__xor__' in a) {
        return a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return b.__rxor__ (a);
    }
    else {
        return a ^ b;
    }
};
export function __and__ (a, b) {
    if (typeof a == 'object' && '__and__' in a) {
        return a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return b.__rand__ (a);
    }
    else {
        return a & b;
    }
};
export function __eq__ (a, b) {
    if (typeof a == 'object' && '__eq__' in a) {
        return a.__eq__ (b);
    }
    else {
        return a == b;
    }
};
export function __ne__ (a, b) {
    if (typeof a == 'object' && '__ne__' in a) {
        return a.__ne__ (b);
    }
    else {
        return a != b
    }
};
export function __lt__ (a, b) {
    if (typeof a == 'object' && '__lt__' in a) {
        return a.__lt__ (b);
    }
    else {
        return a < b;
    }
};
export function __le__ (a, b) {
    if (typeof a == 'object' && '__le__' in a) {
        return a.__le__ (b);
    }
    else {
        return a <= b;
    }
};
export function __gt__ (a, b) {
    if (typeof a == 'object' && '__gt__' in a) {
        return a.__gt__ (b);
    }
    else {
        return a > b;
    }
};
export function __ge__ (a, b) {
    if (typeof a == 'object' && '__ge__' in a) {
        return a.__ge__ (b);
    }
    else {
        return a >= b;
    }
};
export function __imatmul__ (a, b) {
    if ('__imatmul__' in a) {
        return a.__imatmul__ (b);
    }
    else {
        return a.__matmul__ (b);
    }
};
export function __ipow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__ipow__ (b);
    }
    else if (typeof a == 'object' && '__ipow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
export function __ijsmod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__ismod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
export function __imod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__imod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
export function __imul__ (a, b) {
    if (typeof a == 'object' && '__imul__' in a) {
        return a.__imul__ (b);
    }
    else if (typeof a == 'object' && '__mul__' in a) {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return a = b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return a = b.__rmul__ (a);
    }
    else {
        return a *= b;
    }
};
export function __idiv__ (a, b) {
    if (typeof a == 'object' && '__idiv__' in a) {
        return a.__idiv__ (b);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a = a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return a = b.__rdiv__ (a);
    }
    else {
        return a /= b;
    }
};
export function __iadd__ (a, b) {
    if (typeof a == 'object' && '__iadd__' in a) {
        return a.__iadd__ (b);
    }
    else if (typeof a == 'object' && '__add__' in a) {
        return a = a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return a = b.__radd__ (a);
    }
    else {
        return a += b;
    }
};
export function __isub__ (a, b) {
    if (typeof a == 'object' && '__isub__' in a) {
        return a.__isub__ (b);
    }
    else if (typeof a == 'object' && '__sub__' in a) {
        return a = a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return a = b.__rsub__ (a);
    }
    else {
        return a -= b;
    }
};
export function __ilshift__ (a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) {
        return a.__ilshift__ (b);
    }
    else if (typeof a == 'object' && '__lshift__' in a) {
        return a = a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return a = b.__rlshift__ (a);
    }
    else {
        return a <<= b;
    }
};
export function __irshift__ (a, b) {
    if (typeof a == 'object' && '__irshift__' in a) {
        return a.__irshift__ (b);
    }
    else if (typeof a == 'object' && '__rshift__' in a) {
        return a = a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return a = b.__rrshift__ (a);
    }
    else {
        return a >>= b;
    }
};
export function __ior__ (a, b) {
    if (typeof a == 'object' && '__ior__' in a) {
        return a.__ior__ (b);
    }
    else if (typeof a == 'object' && '__or__' in a) {
        return a = a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return a = b.__ror__ (a);
    }
    else {
        return a |= b;
    }
};
export function __ixor__ (a, b) {
    if (typeof a == 'object' && '__ixor__' in a) {
        return a.__ixor__ (b);
    }
    else if (typeof a == 'object' && '__xor__' in a) {
        return a = a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return a = b.__rxor__ (a);
    }
    else {
        return a ^= b;
    }
};
export function __iand__ (a, b) {
    if (typeof a == 'object' && '__iand__' in a) {
        return a.__iand__ (b);
    }
    else if (typeof a == 'object' && '__and__' in a) {
        return a = a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return a = b.__rand__ (a);
    }
    else {
        return a &= b;
    }
};
export function __getitem__ (container, key) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ (key);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        return container [container.length + key];
    }
    else {
        return container [key];
    }
};
export function __setitem__ (container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ (key, value);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        container [container.length + key] = value;
    }
    else {
        container [key] = value;
    }
};
export function __getslice__ (container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ ([lower, upper, step]);
    }
    else {
        return container.__getslice__ (lower, upper, step);
    }
};
export function __setslice__ (container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ ([lower, upper, step], value);
    }
    else {
        container.__setslice__ (lower, upper, step, value);
    }
};
export var BaseException =  __class__ ('BaseException', [object], {
	__module__: __name__,
});
export var Exception =  __class__ ('Exception', [BaseException], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.__args__ = args;
		if (kwargs.error != null) {
			self.stack = kwargs.error.stack;
		}
		else if (Error) {
			self.stack = new Error ().stack;
		}
		else {
			self.stack = 'No stack trace available';
		}
	});},
	get __repr__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
		}
		else if (len (self.__args__)) {
			return '{}({})'.format (self.__class__.__name__, repr (self.__args__ [0]));
		}
		else {
			return '{}()'.format (self.__class__.__name__);
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return str (tuple (self.__args__));
		}
		else if (len (self.__args__)) {
			return str (self.__args__ [0]);
		}
		else {
			return '';
		}
	});}
});
export var IterableError =  __class__ ('IterableError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
	});}
});
export var StopIteration =  __class__ ('StopIteration', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
	});}
});
export var ValueError =  __class__ ('ValueError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var KeyError =  __class__ ('KeyError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var AssertionError =  __class__ ('AssertionError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		if (message) {
			Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
		}
		else {
			Exception.__init__ (self, __kwargtrans__ ({error: error}));
		}
	});}
});
export var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var IndexError =  __class__ ('IndexError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var AttributeError =  __class__ ('AttributeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var py_TypeError =  __class__ ('py_TypeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var Warning =  __class__ ('Warning', [Exception], {
	__module__: __name__,
});
export var UserWarning =  __class__ ('UserWarning', [Warning], {
	__module__: __name__,
});
export var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
	__module__: __name__,
});
export var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
	__module__: __name__,
});
export var __sort__ = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (key) {
		iterable.sort ((function __lambda__ (a, b) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (key (a) > key (b) ? 1 : -(1));
		}));
	}
	else {
		iterable.sort ();
	}
	if (reverse) {
		iterable.reverse ();
	}
};
export var sorted = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (py_typeof (iterable) == dict) {
		var result = copy (iterable.py_keys ());
	}
	else {
		var result = copy (iterable);
	}
	__sort__ (result, key, reverse);
	return result;
};
export var map = function (func, iterable) {
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			__accu0__.append (func (item));
		}
		return __accu0__;
	}) ();
};
export var filter = function (func, iterable) {
	if (func == null) {
		var func = bool;
	}
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			if (func (item)) {
				__accu0__.append (item);
			}
		}
		return __accu0__;
	}) ();
};
export var divmod = function (n, d) {
	return tuple ([Math.floor (n / d), __mod__ (n, d)]);
};
export var __Terminal__ =  __class__ ('__Terminal__', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.buffer = '';
		try {
			self.element = document.getElementById ('__terminal__');
		}
		catch (__except0__) {
			self.element = null;
		}
		if (self.element) {
			self.element.style.overflowX = 'auto';
			self.element.style.boxSizing = 'border-box';
			self.element.style.padding = '5px';
			self.element.innerHTML = '_';
		}
	});},
	get print () {return __get__ (this, function (self) {
		var sep = ' ';
		var end = '\n';
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
			var __accu0__ = [];
			for (var arg of args) {
				__accu0__.append (str (arg));
			}
			return __accu0__;
		}) ()), end).__getslice__ (-(4096), null, 1);
		if (self.element) {
			self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
			self.element.scrollTop = self.element.scrollHeight;
		}
		else {
			console.log (sep.join ((function () {
				var __accu0__ = [];
				for (var arg of args) {
					__accu0__.append (str (arg));
				}
				return __accu0__;
			}) ()));
		}
	});},
	get input () {return __get__ (this, function (self, question) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
		var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(8), null, 1)));
		self.print (answer);
		return answer;
	});}
});
export var __terminal__ = __Terminal__ ();
export var print = __terminal__.print;
export var input = __terminal__.input;

//# sourceMappingURL=org.transcrypt.__runtime__.map

// ---------------------------------------- Module:./math.js ----------------------------------------


// > sort 0
export var math = {
    pi: Math.PI,
    e: 2.7182818,
    ln2: Math.LN2,
    ln10: Math.LN10,
    log2e: Math.LOG2E,
    log10e: Math.LOG10E,
    sqrt1_2: Math.SQRT1_2,
    sqrt2: Math.SQRT2,
    sqrt: Math.sqrt,
    pow: Math.pow,
    cbrt: Math.cbrt,
    lerp: function (a, b, t) {
        return a + (b - a) * t;
    },
    clamp: function (v, mi, mx) {
        return Math.min(Math.max(v, mi), mx);
    },
    sign: function (x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    },
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    cot: function (x) {
        var _tan = Math.tan(x);
        return _tan ? 1 / _tan : Infinity;
    },
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    atan2: Math.atan2,
    acot: function (x) {
        return x ? Math.atan(1 / x) : Math.PI / 2;
    },
    degree: function (r) {
        return r * 180 / Math.PI;
    },
    radian: function (d) {
        return d * Math.PI / 180;
    },
    min: Math.min,
    max: Math.max,
    abs: Math.abs,
    floor: Math.floor,
    ceil: Math.ceil,
    round: Math.round,
    trunc: Math.trunc,
    log: Math.log,
    exp: Math.exp,
    log10: Math.log10,
    log2: Math.log2,
    epsilon: function (a, b) {
        return Math.abs(a - b) < 0.000001;
    },
    random: function (n = 1.0) {
        return Math.random() * n;
    },
    irandom: function (n) {
        return Math.floor(Math.random() * (n + 1));
    },
    randint: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randfloat: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    randrange: function (min, max, step = undefined) {
        if (step === undefined || step === null) return math.randfloat(min, max);
        if (min > max) [min, max] = [max, min];
        const range = ((max - min) / step) + 1;
        return Math.random() * range * step + min;
    },
    irandrange: function (min, max, step = undefined) {
        return Math.floor(math.randrange(min, max, step));
    },
    choice: function (arr) {
        var _length = len(arr);
        if (_length === 0)
            if (LANGUAGE === "cn")
                std.error("math.choice", "传入的数组为空。");
            else
                std.error("math.choice", "Array is empty.");
        return arr[Math.floor(Math.random() * _length)];
    },
    sample: function (arr, n = 1) {
        var _length = len(arr);
        if (n > _length)
            if (LANGUAGE === "cn")
                std.error("math.sample", `样本大小:${n}大于数组大小:${_length}。`);
            else
                std.error("math.sample", `Sample size:${n} is larger than the array-size:${_length}.`);
        let reservoir = copy(arr);
        for (let i = n; i < arr.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            if (j < n) {
                reservoir[j] = arr[i];
            }
        }
        return reservoir;
    },
    shuffle: function (arr) {
        var m = len(arr), t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }
        return arr;
    }
};

// ---------------------------------------- Module:./stype.js ----------------------------------------

/**
 * @file st.js
 * @description 提供各种类型判断和对象能力判断的工具函数
 * @author EagleBaby
 * @version 1.0
 * @date 2025-01-10
 */
// > sort 1
const st = {
    // jnumber:    obj => typeof obj === 'number',
    // jlist:      obj => obj instanceof Array,
    // jstring:    obj => typeof obj === 'string',
    // jbool:      obj => typeof obj === 'boolean',
    // jdict:      obj => obj instanceof Object,
    na:         obj => obj === null || obj === undefined,
    // -------------------------------------- PY基础类型判断 | PY Basic Type Judgment -----------------
    // list:       obj => isinstance(obj, list),
    // tuple:      obj => isinstance(obj, tuple),
    // dict:       obj => isinstance(obj, dict),
    // set:        obj => isinstance(obj, set),
    // str:        obj => isinstance(obj, str),
    // int:        obj => isinstance(obj, int),
    // float:      obj => isinstance(obj, float),
    // bool:       obj => isinstance(obj, bool),
    // -------------------------------------- 游戏对象类型判断 | Game Object Type Judgment -----------------
    point:     obj => obj?.x !== undefined && obj?.y !== undefined,
    site:      (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof ConstructionSite,
    creep:     (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof Creep,
    gobject:   (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof GameObject,
    ostructure:(obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof OwnedStructure,
    resource:  (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof Resource,
    source:    (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof Source,
    structure: (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof Structure,
    box:       (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureContainer,
    extension: (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureExtension,
    rampart:   (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureRampart,
    road:      (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureRoad,
    spawn:     (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureSpawn,
    tower:     (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureTower,
    wall:      (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof StructureWall,
    flag:      (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj instanceof Flag,
    // -------------------------------------- 对象能力判断 | Object Ability Type Judgment -----------------
    movable:   (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj?.body?.some(p => p.type === MOVE),
    atkable:   (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj?.body?.some(p => p.type === ATTACK || p.type === RANGED_ATTACK)) || obj instanceof StructureTower),
    melee:     (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj?.body?.some(p => p.type === ATTACK),
    ranged:    (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj?.body?.some(p => p.type === RANGED_ATTACK)) || obj instanceof StructureTower),
    healable:  (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj?.body?.some(p => p.type === HEAL)) || obj instanceof StructureTower),
    hitable:   (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj?.hits !== undefined,
    workable:  (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj?.body?.some(p => p.type === WORK),
    storable:  (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj instanceof ScoreCollector) || (obj instanceof Structure && obj.store) || (obj instanceof Creep && obj?.body?.some(p => p.type === CARRY))),
    dynamicMovable:  (obj, check_exists=true) => st.movable(obj, check_exists) && obj?.info?.dynamicPartsVector.moves > 0,
    dynamicAtkable:  (obj, check_exists=true) => st.atkable(obj, check_exists) && obj?.info?.dynamicAttackPower > 0,
    dynamicMelee:    (obj, check_exists=true) => st.melee(obj, check_exists) && obj?.info?.dynamicMeleePower > 0,
    dynamicRanged:   (obj, check_exists=true) => st.ranged(obj, check_exists) && obj?.info?.dynamicRangedPower > 0,
    dynamicHealable: (obj, check_exists=true) => st.healable(obj, check_exists) && obj?.info?.dynamicPartsVector.heals > 0,
    dynamicWorkable: (obj, check_exists=true) => st.workable(obj, check_exists) && obj?.info?.dynamicPartsVector.works > 0,
    dynamicStorable: (obj, check_exists=true) => st.storable(obj, check_exists) && obj?.info?.dynamicPartsVector.carries > 0,
    energetic: (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj instanceof Structure && obj.store && get.energy(obj) > 0) || (obj instanceof Creep && get.energy(obj) > 0) || (obj instanceof Resource && obj.resourceType === RESOURCE_ENERGY && obj.amount > 0)),
    scoretic:  (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj instanceof ScoreCollector && obj.store) || (obj instanceof Structure && obj.store && get.score(obj) > 0) || (obj instanceof Creep && get.score(obj) > 0) || (obj instanceof Resource && obj.resourceType === RESOURCE_SCORE && obj.amount > 0)),
    scoreticX: (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj instanceof ScoreCollector && obj.store) || (obj instanceof Structure && obj.store && get.scoreX(obj) > 0) || (obj instanceof Creep && get.scoreX(obj) > 0) || (obj instanceof Resource && obj.resourceType === RESOURCE_SCORE_X && obj.amount > 0)),
    scoreticY: (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj instanceof ScoreCollector && obj.store) || (obj instanceof Structure && obj.store && get.scoreY(obj) > 0) || (obj instanceof Creep && get.scoreY(obj) > 0) || (obj instanceof Resource && obj.resourceType === RESOURCE_SCORE_Y && obj.amount > 0)),
    scoreticZ: (obj, check_exists=true) => !(check_exists && !obj?.exists) && ((obj instanceof ScoreCollector && obj.store) || (obj instanceof Structure && obj.store && get.scoreZ(obj) > 0) || (obj instanceof Creep && get.scoreZ(obj) > 0) || (obj instanceof Resource && obj.resourceType === RESOURCE_SCORE_Z && obj.amount > 0)),
    damaged:   (obj, check_exists=true) => !(check_exists && !obj?.exists) && obj.hits < obj.hitsMax,
    empty:     (obj, check_exists=true) => !(check_exists && !obj?.exists) && (!obj || !obj.store || get.energy(obj) === 0),
    full:      (obj, check_exists=true) => !(check_exists && !obj?.exists) && (obj && obj.store && Math.abs(get.energy(obj, true) - 1) < 0.001),
    my:        (obj, check_exists=true) => obj && obj.my && (!check_exists || obj?.exists),
    friend:    (obj, check_exists=true) => obj && obj.my && (!check_exists || obj?.exists),
    neutral:   (obj, check_exists=true) => obj && obj.my === undefined && (!check_exists || obj?.exists),
    enemy:     (obj, check_exists=true) => obj && !obj.my && obj.my !== undefined && (!check_exists || obj?.exists),
};


// ---------------------------------------- Module:./basic.js ----------------------------------------

// > sort 2

const jprint = console.log;

const JS_RED = "\x1b[31m";
const JS_GREEN = "\x1b[32m";
const JS_YELLOW = "\x1b[33m";
const JS_BLUE = "\x1b[34m";
const JS_PURPLE = "\x1b[35m";
const JS_CYAN = "\x1b[36m";
const JS_WHITE = "\x1b[37m";
const JS_GRAY = "\x1b[90m";
const JS_RESET = "\x1b[0m";
const BG_RED = "\x1b[41m";
const BG_GREEN = "\x1b[42m";
const BG_YELLOW = "\x1b[43m";
const BG_BLUE = "\x1b[44m";
const BG_PURPLE = "\x1b[45m";
const BG_CYAN = "\x1b[46m";
const BG_WHITE = "\x1b[47m";
const BG_GRAY = "\x1b[100m";
const BG_RESET = "\x1b[0m";

const DONE = 1;
const ARENA_NAME = arenaInfo["name"];
const ARENA_SHORT_NAME = arenaInfo["name"].toLowerCase().substring(0, 2);
const ARENA_LEVEL = arenaInfo["level"];
const ARENA_SEASON = arenaInfo["season"];
const ARENA_TICKS_LIMIT = arenaInfo["ticksLimit"];
const ARENA_CPU_TIME_LIMIT = arenaInfo["cpuTimeLimit"];
const ARENA_CPU_TIME_LIMIT_FIRST_TICK = arenaInfo["cpuTimeLimitFirstTick"];
const UsrObject = __class__('UsrObject', [object], {
    __module__: __name__,
});

class GlobalKnowledge {
    constructor() {
        this.now = 0
        this.battles = {
            enemies: [],
            friends: [],
        }
        this.civilian = {
            enemies: [],
            friends: [],
        }
        this.clusters = {  // 特指battles的clusters
            enemies: [],
            friends: [],
        }
    }

    handle() {
        this.now = get.ticks();
        const friends = get.creeps(st.friend);
        const enemies = get.creeps(st.enemy);
        this.battles.enemies = get.filter(enemies, c => st.atkable(c) || st.healable(c));
        this.battles.friends = get.filter(friends, c => st.atkable(c) || st.healable(c));
        this.civilian.enemies = get.filter(enemies, c => !st.atkable(c) && !st.healable(c));
        this.civilian.friends = get.filter(friends, c => !st.atkable(c) && !st.healable(c));
        this.clusters.enemies = get.clusters(this.battles.enemies, 4, 1);
        this.clusters.friends = get.clusters(this.battles.friends, 4, 1);

        if (this.view === undefined) this.view = View(1);
        this.view.clear();
        for (const cluster of this.clusters.enemies) {
            if (cluster.grade < 20) continue;
            this.view.cluster(cluster, "#CD5C5C");
        }
        for (const cluster of this.clusters.friends) {
            if (cluster.grade < 20) continue;
            this.view.cluster(cluster, "#87CEEB");
        }
    }
}

const know = new GlobalKnowledge();

const Point = __class__('Point', [object], {
    __module__: __name__,
    exists: true,
    get __init__() {
        return __get__(this, function (self, x, y) {
            self.x = x;
            self.y = y;
        });
    },

    fcenter: function (...points) {
        var length = len(points);
        if (length === 0) {
            return Point(0, 0);
        }
        var x_sum = 0, y_sum = 0;
        for (const p of points) {
            x_sum += p.x;
            y_sum += p.y;
        }
        return Point(x_sum / length, y_sum / length);
    },
    center: function (...points) {
        const p = Point.fcenter(...points);
        p.x = Math.floor(p.x);
        p.y = Math.floor(p.y);
        return p;
    },
    distance: function (target) {
        if (!target || target.x === undefined || target.y === undefined) {
            if (LANGUAGE === "cn") std.warn("Point.distance", `typeof(target)=${typeof target}, 没有.x或者.y属性`, "将返回100");
            else std.warn("Point.distance", `typeof(target)=${typeof target}, no .x or .y property`, "will return 100");
            return 100;
        }
        return Math.max(Math.abs(this.x - target.x), Math.abs(this.y - target.y));

    },
    at: function (target, y = null) {
        if (y === null) {
            return this.x === target.x && this.y === target.y;
        }
        return this.x === target && this.y === y;
    },
    nat: function (target, y = null) {
        if (y === null) {
            return this.x !== target.x || this.y !== target.y;
        }
        return this.x === target && this.y === y;
    },
    offset: function (d_target, dy = null) {
        if (y === null) {
            return Point(this.x + d_target.x, this.y + d_target.y);
        }
        return Point(this.x + d_target, this.y + dy);
    },
    add: function (other, y = null) {
        if (y === null) {
            return Point(this.x + other.x, this.y + other.y);
        }
        return Point(this.x + other, this.y + y);
    },
    sub: function (other, y = null) {
        if (y === null) {
            return Point(this.x - other.x, this.y - other.y);
        }
        return Point(this.x - other, this.y - y);
    },
    neg: function () {
        return Point(-this.x, -this.y);
    },
    dot: function (other, y = null) {
        if (y === null) {
            return this.x * other.x + this.y * other.y;
        }
        return this.x * other + this.y * y;
    },
    mul: function (other) {
        return Point(this.x * other, this.y * other);
    },
    crs: function (other, y = null) {
        if (y === null) {
            return this.x * other.y - this.y * other.x;
        }
        return this.x * y - this.y * other;
    },
    closest: function (objs, filter_fn = undefined, notme = true) {
        if (len(objs) === 0) {
            return null;
        }
        if (filter_fn !== undefined && filter_fn !== null) {
            if (isinstance(filter_fn, tuple([list, tuple, set]))) {
                filter_fn = std.combo(filter_fn);
            }
            objs = filter(filter_fn, objs);
        }
        if (len(objs) === 0) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.closest`, '过滤后没有剩余对象。');
            else std.warn(`${this.name}.closest`, 'No objects left after filtering.')
            return null;
        }
        if (notme) {
            objs = objs.filter(o => o !== this);
        }
        const ret = findClosestByRange(this, objs);
        if (ret === undefined) {
            return null;
        }
        return ret;
    },
    quickest: function (objs, filter_fn = undefined, options = undefined, notme = true) {
        if (len(objs) === 0) {
            return null;
        }
        if (filter_fn !== undefined && filter_fn !== null) {
            if (isinstance(filter_fn, tuple([list, tuple, set]))) {
                filter_fn = std.combo(filter_fn);
            }
            objs = filter(filter_fn, objs);
        }
        if (len(objs) === 0) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.quickest`, '过滤后没有剩余对象。');
            else std.warn(`${this.name}.quickest`, 'No objects left after filtering.')
            return null;
        }
        if (notme) {
            objs = objs.filter(o => o !== this);
        }
        const ret = findClosestByPath(this, objs, options);
        if (ret === undefined) {
            return null;
        }
        return ret;
    },
    inrange: function (objs, range, filter_fn = null) {
        if (len(objs) === 0) {
            return objs;
        }
        if (filter_fn !== undefined && filter_fn !== null) {
            if (isinstance(filter_fn, tuple([list, tuple, set]))) {
                filter_fn = std.combo(filter_fn);
            }
            objs = filter(filter_fn, objs);
        }
        if (len(objs) === 0) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.inrange`, '过滤后没有剩余对象。');
            else std.warn(`${this.name}.inrange`, 'No objects left after filtering.')
            return null;
        }
        const tmp = [];
        for (const _obj of objs) {
            if (this.distance(_obj) <= range) {
                tmp.append(_obj);
            }
        }
        return tmp;
    },

    toString: function () {
        return `(${this.x}◈${this.y})`;
    }
});

const P = Point;

const Rect = __class__('Rect', [object], {
    __module__: __name__,
    exists: true,
    get __init__() {
        return __get__(this, function (self, lt, rb_w, h = undefined, ltrb = undefined) {

            if (ltrb) {
                if (!isinstance(lt, int) ||
                    !isinstance(rb_w, int) ||
                    !isinstance(h, int) ||
                    !isinstance(ltrb, int)) {
                    if (LANGUAGE === "cn") std.error("Rect.init", "lt, rb_w, h, ltrb must be number. Got:", str(lt), str(rb_w), str(h), str(ltrb));
                    else std.error("Rect.init", "lt, rb_w, h, ltrb must be number. Got:", str(lt), str(rb_w), str(h), str(ltrb));
                }
                lt = {x: lt, y: rb_w};
                rb_w = {x: h, y: ltrb};
                h = undefined;
            } else if (!lt || lt.x === undefined || lt.y === undefined) {
                if (LANGUAGE === "cn") std.error("Rect.init", "lt must be Point. Got:", str(lt));
                else std.error("Rect.init", "lt must be Point. Got:", str(lt));
            }
            self.left = Math.floor(lt.x);
            self.top = Math.floor(lt.y);
            if ((!rb_w || rb_w.x === undefined || rb_w.y === undefined) && !isinstance(rb_w, int)) {
                if (LANGUAGE === "cn") std.error("Rect.init", "rb_w must be Point or number. Got:", str(rb_w));
                else std.error("Rect.init", "rb_w must be Point or number. Got:", str(rb_w));
            }
            if (isinstance(rb_w, int)) {
                if (!isinstance(h, int)) {
                    if (LANGUAGE === "cn") std.error("Rect.init", "h must be number. Got:", str(h));
                    else std.error("Rect.init", "h must be number. Got:", str(h));
                }
                self.right = Math.floor(lt.x + rb_w);
                self.bottom = Math.floor(lt.y + h);
            } else {
                self.right = Math.floor(rb_w.x);
                self.bottom = Math.floor(rb_w.y);
            }
        });
    },
    offset(d_target, dy=null) {
        if (dy === null){
            dy = Math.floor(d_target.y);
            d_target = Math.floor(d_target.x);
        } else {
            d_target = Math.floor(d_target);
            dy = Math.floor(dy);
        }
        return Rect(Point(this.left + d_target, this.top + dy), Point(this.right + d_target, this.bottom + dy));
    },
    get center() {
        return Point((this.left + this.right) / 2, (this.top + this.bottom) / 2);
    },
    get width() {
        return this.right - this.left;
    },
    get height() {
        return this.bottom - this.top;
    },
    get area() {
        return this.width * this.height;
    },
    get __str__() {
        return __get__(this, function (self) {
            return 'Rect(left=' + self.left + ', top=' + self.top + ', right=' + self.right + ', bottom=' + self.bottom + ')';
        });
    },
});

class ListenTask {
    constructor(name, func, ...sources) {
        /**
         * @param func {function}
         * @param sources {string[]}
         * */
        if (!func) {
            if (LANGUAGE === "cn") std.error('ListenTask.constructor', 'func 参数不能为空');
            else std.error('ListenTask.constructor', 'func cannot be empty');
        }
        this.name = name;
        this.func = func;
        this.sources = sources;
        for (let i = 0; i < this.sources.length; i++) {
            if (typeof this.sources[i] !== 'string') {
                this.sources[i] = this.sources[i].name;
            }
        }
    }

    checkMatch(target_name) {
        /**
         * @description 检查目标名称是否匹配this.sources。检查使用的是字符串的startswith方法。
         * @example aa00 is matched by [aa, bb]
         * @param target_name {string}
         * */
        if (!target_name) {
            if (LANGUAGE === "cn") std.error('ListenTask.checkMatch', 'target_name 参数不能为空');
            else std.error('ListenTask.checkMatch', 'target_name cannot be empty');
        }
        if (this.sources.length === 0) {
            return true;
        }
        for (const src of this.sources) {
            if (target_name.startsWith(src)) {
                return true;
            }
        }
        return false;
    }

    tryCall(name, ename, ...args) {
        try {
            this.func(...args);
        } catch (e) {
            if (LANGUAGE === "cn") std.warn("ListenSystem", `在 ${name} 的监听事件 ${ename} 中出错:`, e);
            else std.warn("ListenSystem", `Error in ${name}.listen-for ${ename}:`, e);
            // throw e;
        }

    }
}

class ListenSystem {
    constructor(game_object, sp_name = undefined) {
        if (!game_object) {
            if (LANGUAGE === "cn") std.error('ListenSystem.constructor', 'game_object 不能为空');
            else std.error('ListenSystem.constructor', 'game_object cannot be empty');
        }
        this.object = game_object;
        if (sp_name) {
            this.name = sp_name;
        } else {
            this.name = this.object.name ? this.object.name : this.object.id;
        }
        // print(this.name);
        if (typeof this.name !== 'string') {
            if (LANGUAGE === "cn") std.error('ListenSystem.constructor', 'name 必须是字符串');
            else std.error('ListenSystem.constructor', 'name must be a string');
        }
    }

    static __listens__ = new Map(); // 使用Map代替对象存储事件监听

    listenFor(ename, func, sources = undefined) {
        if (typeof ename !== 'string') {
            if (LANGUAGE === "cn") std.error('ListenSystem.listenFor', 'ename 必须是字符串');
            else std.error('ListenSystem.listenFor', 'ename must be a string');
        }
        if (typeof func !== 'function') {
            if (LANGUAGE === "cn") std.error('ListenSystem.listenFor', 'func 必须是函数');
            else std.error('ListenSystem.listenFor', 'func must be a function');
        }
        if (!this.name) {
            if (LANGUAGE === "cn") std.error('ListenSystem.listenFor', 'name 不能为空');
            else std.error('ListenSystem.listenFor', 'name cannot be empty');
        }
        if (sources === undefined) sources = [];
        if (!ListenSystem.__listens__.has(ename)) {
            ListenSystem.__listens__.set(ename, new Map());
        }
        ListenSystem.__listens__.get(ename).set(this.name,
            new ListenTask(this.name, func, ...sources)
        );
    }

    cancelListen(ename) {
        if (typeof ename !== 'string') {
            if (LANGUAGE === "cn") std.error('ListenSystem.cancelListen', 'ename 必须是字符串');
            else std.error('ListenSystem.cancelListen', 'ename must be a string');
        }
        if (!this.name) {
            if (LANGUAGE === "cn") std.error('ListenSystem.cancelListen', 'name 不能为空');
            else std.error('ListenSystem.cancelListen', 'name cannot be empty');
        }
        if (ListenSystem.__listens__.has(ename)) {
            const clstype = ListenSystem.__listens__.get(ename);
            if (clstype.has(this.name)) {
                clstype.delete(this.name);
                if (clstype.size === 0) {
                    ListenSystem.__listens__.delete(ename);
                }
            } else {
                if (LANGUAGE === "cn") console.warn(`没有名为 ${this.name} 的监听器监听事件 ${ename}`);
                else console.warn(`No listener with name ${this.name} for event ${ename}`);
            }
        } else {
            if (LANGUAGE === "cn") console.warn(`没有名为 ${ename} 的事件`);
            else console.warn(`No event named ${ename}`);
        }
    }

    pushEvent(ename, data = null) {
        if (typeof ename !== 'string') {
            if (LANGUAGE === "cn") std.error('ListenSystem.pushEvent', 'ename 必须是字符串');
            else std.error('ListenSystem.pushEvent', 'ename must be a string');
        }
        if (typeof data !== 'object' && data !== null) {
            if (LANGUAGE === "cn") std.error('ListenSystem.pushEvent', 'data 必须是对象');
            else std.error('ListenSystem.pushEvent', 'data must be an object');
        }
        if (!this.name) {
            if (LANGUAGE === "cn") std.error('ListenSystem.pushEvent', 'name 不能为空');
            else std.error('ListenSystem.pushEvent', 'name cannot be empty');
        }
        if (!data) data = {};
        data.py_name = this.name;
        data.inst = this.object;
        if (ListenSystem.__listens__.has(ename)) {
            const listeners = ListenSystem.__listens__.get(ename);
            for (const [name, task] of listeners) {
                if (task.checkMatch(this.name)) {
                    task.tryCall(name, ename, data);
                }
            }
        }
    }
}

class ScheduleSystem {
    static __schedules__ = new Map();  // str(tick) : [callback, ...]

    constructor(gobject) {
        this.object = gobject;
        this.name = this.object.name ? this.object.name : this.object.id;
        if (typeof this.name !== 'string') {
            if (LANGUAGE === "cn") std.error('ScheduleSystem.constructor', 'name 必须是字符串');
            else std.error('ScheduleSystem.constructor', 'name must be a string');
        }
    }

    schedule(tick, callback) { // tick: int
        if (typeof tick !== 'number') {
            if (LANGUAGE === "cn") std.error('ScheduleSystem.schedule', 'tick 必须是数字');
            else std.error('ScheduleSystem.schedule', 'tick must be a number');
        }
        const str_tick = tick.toString();
        let callbacks = ScheduleSystem.__schedules__.get(str_tick);
        if (!callbacks) {
            callbacks = [];
            ScheduleSystem.__schedules__.set(str_tick, callbacks);
        }
        callbacks.push(callback);
    }

    cancelSchedule(callback) {
        for (const [tick, callbacks] of ScheduleSystem.__schedules__) {
            const index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
            if (callbacks.length === 0) {
                ScheduleSystem.__schedules__.delete(tick);
            }
        }
    }

    handle() {
        const s_tick = know.now.toString();
        const callbacks = ScheduleSystem.__schedules__.get(s_tick);
        if (callbacks) {
            for (const callback of callbacks) {
                try {
                    callback();
                } catch (e) {
                    if (LANGUAGE === "cn") std.warn("ScheduleSystem", `在 ${this.name} 的调度任务中出错:`, e);
                    else std.warn("ScheduleSystem", `Error in ${this.name}'s schedule task:`, e);
                }
            }
            ScheduleSystem.__schedules__.delete(s_tick);
        }
    }
}


class PartsVector {
    static INDEXS = {
        [MOVE]: 0,
        [CARRY]: 1,
        [WORK]: 2,
        [ATTACK]: 3,
        [RANGED_ATTACK]: 4,
        [HEAL]: 5,
        [TOUGH]: 6
    };

    constructor(named_recipe) {
        this.recipe = (named_recipe instanceof NamedRecipe) ? named_recipe.recipe : named_recipe;
        this.vec7 = [0, 0, 0, 0, 0, 0, 0];

        for (const part of this.recipe) {
            this.vec7[PartsVector.INDEXS[part]] += 1;
        }

        // non-move  non-carry  count
        this.nmCount = this.vec7[2] + this.vec7[3] + this.vec7[4] + this.vec7[5] + this.vec7[6];

        // total count
        this.bodyCount = this.recipe.length;
    }

    add(parts_vector_recipe) {
        if (!(parts_vector_recipe instanceof PartsVector)) {
            parts_vector_recipe = new PartsVector(parts_vector_recipe);
        }
        for (let i = 0; i < this.vec7.length; i++) {
            this.vec7[i] += parts_vector_recipe.vec7[i];
        }
    }

    sub(parts_vector_recipe) {
        if (!(parts_vector_recipe instanceof PartsVector)) {
            parts_vector_recipe = new PartsVector(parts_vector_recipe);
        }
        for (let i = 0; i < this.vec7.length; i++) {
            this.vec7[i] = Math.max(0, this.vec7[i] - parts_vector_recipe.vec7[i]);
        }
    }

    toString() {
        return this.vec7.toString();
    }

    // getter
    get others() {
        return this.nmCount;
    }

    get moves() {
        return this.vec7[0];
    }

    get carries() {
        return this.vec7[1];
    }

    get works() {
        return this.vec7[2];
    }

    get melees() {
        return this.vec7[3];
    }

    get ranges() {
        return this.vec7[4];
    }

    get heals() {
        return this.vec7[5];
    }

    get toughs() {
        return this.vec7[6];
    }

    get total() {
        return this.bodyCount;
    }

    static similarity(a, b) {
        if (!a || !b) {
            throw new Error("PartsVector instances cannot be None");
        }

        const a_vec7 = a.vec7;
        const b_vec7 = b.vec7;

        if (a_vec7.length !== b_vec7.length) {
            throw new Error("Vectors must be of the same length, but:" + a_vec7.length.toString() + " and " + b_vec7.length.toString());
        }

        let dotProduct = 0;
        let normA = 0;
        let normB = 0;

        for (let i = 0; i < a_vec7.length; i++) {
            dotProduct += a_vec7[i] * b_vec7[i];
            normA += a_vec7[i] ** 2;
            normB += b_vec7[i] ** 2;
        }

        normA = Math.sqrt(normA);
        normB = Math.sqrt(normB);

        if (normA === 0 || normB === 0) {
            return 0.0;
        }

        return dotProduct / (normA * normB);
    }

    static selectVector(a, vecs) {
        if (!a || !Array.isArray(vecs)) {
            throw new Error("Invalid input for selectVector:" + typeof a + " and " + typeof vecs);
        }

        return vecs.reduce((maxVec, currentVec) => {
            return PartsVector.similarity(a, currentVec) > PartsVector.similarity(a, maxVec) ? currentVec : maxVec;
        });
    }

    static parts(creep, broken = true) {
        if (!(creep) || !(creep.body)) {
            if (LANGUAGE === "cn") std.warn('get.parts', 'creep为空或没有body。返回空列表: typeof creep:', typeof creep);
            else std.warn('get.parts', 'creep is NA or has no body. Return empty list: typeof creep', typeof creep);
            return [];
        }
        // print(creep.body);
        const prts = [];
        for (const prt of creep.body) {
            if (broken || prt.hits > 0) {
                prts.append(prt.type);
            }
        }
        return prts;
    }

    static SCORE_TABLE = {
        [ATTACK]: 10,
        [RANGED_ATTACK]: 15,
        [HEAL]: 15,
        [TOUGH]: 1,
        [MOVE]: 2,
        [CARRY]: 2,
        [WORK]: 5,
    }

    static partsGrade(creep_recipe) {
        let carries = 0;
        let moves = 0;
        let score = 0;
        const prts = (creep_recipe instanceof Creep) ? creep_recipe.recipe : creep_recipe;
        for (let [i, prt] of enumerate(prts)) {
            if (prt === ATTACK) {
                score += 10 + i / 5;
            } else if (prt === RANGED_ATTACK) {
                score += 15 + i / 4;
            } else if (prt === HEAL) {
                score += 15 + i;
            } else {
                score++;
                if (prt === MOVE) {
                    moves++;
                } else if (prt === CARRY) {
                    carries++;
                }
            }
        }
        const length = (len(prts) - carries) - moves;
        const movements = moves * 2;
        const swamp_ratio = math.clamp(get.SWAMP_RATIO, 0.1, 0.5);
        // const move_cost = length * (swamp_ratio * 10 + 5);
        const move_cost = length * swamp_ratio * 20;
        let coef;
        if (length === 0) {
            coef = 0;
        } else if (movements > move_cost) {
            coef = 2;
        } else {
            coef = (2 * movements) / move_cost;
        }
        const finalCoef = (1 + coef) / 2;
        return Math.floor(score * finalCoef);
    }

    static partsOptimise(parts) {
        if (len(parts) <= 1) {
            return parts;
        }
        // step1: 将所有的TOUGH部件放在最前面
        const tough_head = parts.filter(part => part === TOUGH);
        const rest_parts = parts.filter(part => part !== TOUGH);

        // step2 create order
        let order = [...new Set(rest_parts.reverse())];

        // step3 count 最少个数的种类
        const each_count = {};
        for (const kind of order) each_count[kind] = rest_parts.filter(part => part === kind).length;
        let min_count = Infinity;
        let min_kind = null;
        for (const kind of order)
            if (each_count[kind] < min_count) {
                min_count = each_count[kind];
                min_kind = kind;
            }

        // step4: 创建 unit_count = { each_count[k].count // min_count } 和 other_count = { each_count[k].count % min_count }
        const unit_count = {};
        const other_count = {};
        for (const kind of order) {
            unit_count[kind] = Math.floor(each_count[kind] / min_count);
            other_count[kind] = each_count[kind] % min_count;
        }

        // step5: create group_pattern. iter 'order', fetch same kind from unit_count if has. until all unit_count is 0
        let group_pattern = [];
        while (true) {
            let flag = false;  // any push will set as true
            for (const kind of order) {
                if (unit_count[kind] > 0) {
                    group_pattern.push(kind);
                    unit_count[kind] -= 1;
                    flag = true;
                }
            }
            if (!flag) break;
        }
        group_pattern = group_pattern.reverse();

        // step6: create others_sequence. iter 'order', fetch same kind from other_count if has. until all other_count is 0
        const others_sequence = [];
        while (true) {
            let flag = false;  // any push will set as true
            for (const kind of order) {
                if (other_count[kind] > 0) {
                    others_sequence.push(kind);
                    other_count[kind] -= 1;
                    flag = true;
                }
            }
            if (!flag) break;
        }

        // inner function: split others into min_count list. can be empty if not has enough
        const split_others = function (min_count, others_sequence) {
            if (min_count <= 1) return [others_sequence];
            const total = (min_count + 1) * min_count / 2;
            let last_idx = 0;
            let cur_idx = 0;
            const res = [];
            for (let i = min_count; i > 0; i--) {
                cur_idx = last_idx + (i / total) * others_sequence.length;
                last_idx = Math.ceil(last_idx);
                cur_idx = Math.ceil(cur_idx);
                res.push(others_sequence.slice(last_idx, cur_idx));
                last_idx = cur_idx;
            }
            return res;
        }

        // step7: split others_sequence into min_count list
        const others_splits = split_others(min_count, others_sequence);

        // step: special optimise:
        // ignore carry, if MOVE * 5  < others: ...
        const tails = [];
        const move_count = each_count[MOVE];
        let not_move_count = 0;
        for (const kind of order) {
            if (kind === MOVE) continue;
            if (kind === CARRY) continue;
            not_move_count += each_count[kind];
        }
        if ((move_count * 2) < (not_move_count * 5)) {
            // 将others_splits[0]中的所有MOVE部件移动到tails中
            const moves = others_splits[0].filter(part => part === MOVE);
            tails.push(...moves);
            others_splits[0] = others_splits[0].filter(part => part !== MOVE);
        } else if (move_count < not_move_count * 5) {
            // 将others_splits[0]中的半数(向上取整)MOVE部件移动到tails中
            const moves = others_splits[0].filter(part => part === MOVE);
            const move_count = Math.ceil(moves.length / 2);
            tails.push(...moves.slice(0, move_count));
            for (let i = 0; i < move_count; i++)
                others_splits[0].remove(MOVE);
        }

        // step8: merge HEAD + (others_splits[i] + group_pattern) + (others_splits[i+1] + group_pattern) + ...
        let res = [];
        res.push(...tough_head);
        for (let i = 0; i < min_count; i++) {
            res.push(...others_splits[i]);
            res.push(...group_pattern);
        }
        res.push(...tails);


        // 提出所有HEAL部件，但是保留最后一个(如果有的话)
        const heals = res.filter(part => part === HEAL);
        if (heals.length > 1) {
            heals.shift();
            for (const heal of heals) res.remove(heal);
            // 找到最后一个HEAL部件，将其余的HEAL部件插入在此
            const last_heal = res.indexOf(HEAL);
            res.splice(last_heal, 0, ...heals);
        }

        return res;
    }

    static PARTS_COST = {
        [MOVE]: 50,
        [WORK]: 100,
        [CARRY]: 50,
        [ATTACK]: 80,
        [RANGED_ATTACK]: 150,
        [HEAL]: 250,
        [TOUGH]: 10,
    }

    static partsCost(creep_recipe) {
        if (creep_recipe instanceof Creep) {
            creep_recipe = creep_recipe.recipe;
        }
        let cost = 0;
        for (const part of creep_recipe) {
            const this_cost = PartsVector.PARTS_COST[part];
            cost += this_cost !== undefined ? this_cost : 0;
        }
        return cost;
    }
}


class NamedRecipe {
    static __recipes__ = new Map();
    static PART_COLOR = {
        [MOVE]: "#a5b7c6",
        [CARRY]: "#5c6e74",
        [WORK]: "#ffdb5b",
        [ATTACK]: "#f92c2e",
        [RANGED_ATTACK]: "#4c8090",
        [HEAL]: "#65d833",
        [TOUGH]: "#c1f0f8"
    }
    static PART_SHORTNAME = {
        [MOVE]: "M",
        [CARRY]: "C",
        [WORK]: "W",
        [ATTACK]: "A",
        [RANGED_ATTACK]: "R",
        [HEAL]: "H",
        [TOUGH]: "T"
    }

    constructor(name, creep_recipe) {
        // check repeat
        if (NamedRecipe.__recipes__.has(name)) {
            if (LANGUAGE === "cn") std.error('NamedRecipe', '重复的配方名: ', name);
            else std.error('NamedRecipe', 'Duplicate recipe name: ', name);
        }

        this.name = name;
        this.recipe = (creep_recipe instanceof GameCreep) ? PartsVector.parts(creep_recipe) : creep_recipe;
        this.grade = PartsVector.partsGrade(this.recipe);
        this.cost = PartsVector.partsCost(this.recipe);
        this.effect = round(this.grade / this.cost * 100, 2) / 100;

        // 创建彩色的配方字符串 使用std.ansi_color() -> str
        this.recipeString = this.recipe.map(part => {
            if (NamedRecipe.PART_SHORTNAME.hasOwnProperty(part) && NamedRecipe.PART_COLOR.hasOwnProperty(part)) {
                const partName = NamedRecipe.PART_SHORTNAME[part];
                const color = NamedRecipe.PART_COLOR[part];
                return std.ansi_color(color) + partName + JS_RESET;
            } else {
                return std.ansi_color('#FF00A0') + part + JS_RESET;
            }
        }).join('');

        // 创建recipeShort字符串，比如M4W2A2H2C2T2
        const vec7 = [0, 0, 0, 0, 0, 0, 0];
        for (const part of this.recipe) {
            vec7[PartsVector.INDEXS[part]] += 1;
        }
        this.recipeShort = vec7.map((count, index) => {
            if (count > 0) {
                return NamedRecipe.PART_SHORTNAME[index] + count.toString();
            }
        }).filter(Boolean).join('');
    }
}

class CreepInfo {
    static ATTACK_POWER = 30;
    static HEAL_POWER = 12;
    static RANGED_ATTACK_POWER = 10;

    constructor(creep) {
        this.creep = creep;
        this.name = creep.name;
        this.py_name = creep.py_name;
        this.namedRecipe = new NamedRecipe(this.name, creep);
        this.partsVector = new PartsVector(this.namedRecipe);
        this.grade = this.namedRecipe.grade;
        this.cost = this.namedRecipe.cost;
        this.effect = this.namedRecipe.effect;

        // 特性描述
        this.melee = st.melee(creep);
        this.ranged = st.ranged(creep);
        this.heal = st.healable(creep);
        this.work = st.workable(creep);
        this.storable = st.storable(creep);

        // 动态特性(确保某个tick内只计算一次)
        this._dynamicUpdateTick = 0;
        this._dynamicPartsVector = null;
    }

    // dynamic
    get dynamicPartsVector() {
        if (know.now !== this._dynamicUpdateTick) {
            this._dynamicUpdateTick = know.now;
            this._dynamicPartsVector = new PartsVector(PartsVector.parts(this.creep, false));
        }
        return this._dynamicPartsVector;
    }

    // 攻击力
    get attackPower() {
        return this.partsVector.melees * CreepInfo.ATTACK_POWER + this.partsVector.ranges * CreepInfo.RANGED_ATTACK_POWER;
    }

    get dynamicAttackPower() {
        return this.dynamicPartsVector.melees * CreepInfo.ATTACK_POWER + this.dynamicPartsVector.ranges * CreepInfo.RANGED_ATTACK_POWER;
    }

    // 近战力
    get meleePower() {
        return this.partsVector.melees * CreepInfo.ATTACK_POWER;
    }

    get dynamicMeleePower() {
        return this.dynamicPartsVector.melees * CreepInfo.ATTACK_POWER;
    }

    // 远程攻击力
    get rangedPower() {
        return this.partsVector.ranges * CreepInfo.RANGED_ATTACK_POWER;
    }

    get dynamicRangedPower() {
        return this.dynamicPartsVector.ranges * CreepInfo.RANGED_ATTACK_POWER;
    }

    // 治疗力
    get healPower() {
        return this.partsVector.heals * CreepInfo.HEAL_POWER;
    }

    get dynamicHealPower() {
        return this.dynamicPartsVector.heals * CreepInfo.HEAL_POWER;
    }

    // 移动率
    get motionAbility() {
        if (this.partsVector.nmCount === 0) return 1;
        return (this.partsVector.moves * 2) / this.partsVector.nmCount / 10;
    }

    get dynamicMotionAbility() {
        if (this.dynamicPartsVector.nmCount === 0) return 1;
        return (this.dynamicPartsVector.moves * 2) / this.dynamicPartsVector.nmCount / 10;
    }

    // 装甲率
    get armorRatio() {
        return round(this.partsVector.toughs / this.partsVector.bodyCount * 100, 2) / 100;
    }

    get dynamicArmorRatio() {
        return round(this.dynamicPartsVector.toughs / this.dynamicPartsVector.bodyCount * 100, 2) / 100;
    }

    __bool_string__(bool) {
        if (bool) return `${JS_GREEN}✔${JS_RESET}`;
        else return `${JS_RED}✘${JS_RESET}`;
    }

    // toString 方法
    toString() {
        if (LANGUAGE === "cn") return `Creep信息(名称: ${this.name}, 配方: ${this.namedRecipe.recipeShort}, 评分: ${this.grade}, 攻击力: ${this.attackPower}, 治疗力: ${this.healPower})`;
        return `CreepInfo(name: ${this.name}, recipe: ${this.namedRecipe.recipeShort}, grade: ${this.grade}, attackPower: ${this.attackPower}, healPower: ${this.healPower})`;
    }

    // details 方法
    details() {
        if (LANGUAGE === "cn") {
            return `Creep详细信息：
	- 名称: ${this.name}
	- 配方: ${this.namedRecipe.recipeString}
	- 评分: ${this.grade} (沼泽率: ${round(get.SWAMP_RATIO * 100, 2)}%)
	- 成本: ${this.cost} Pt
	- 效率: ${round(this.effect * 100, 2)}%
	- 部件向量: ${this.partsVector}
	- 动态部件向量: ${this.dynamicPartsVector}
	- 攻击力: ${this.attackPower}(动态: ${this.dynamicAttackPower})
	- 近战力: ${this.meleePower}(动态: ${this.dynamicMeleePower})
	- 远程攻击力: ${this.rangedPower}(动态: ${this.dynamicRangedPower})
	- 治疗力: ${this.healPower}(动态: ${this.dynamicHealPower})
	- 移动率: ${this.motionAbility * 100}%(动态: ${this.dynamicMotionAbility * 100}%)
	- 装甲率: ${this.armorRatio * 100}%(动态: ${this.dynamicArmorRatio * 100}%)
	- 特性: 近战: ${this.__bool_string__(this.melee)}, 远程: ${this.__bool_string__(this.ranged)}, 治疗: ${this.__bool_string__(this.heal)}, 工作: ${this.__bool_string__(this.work)}, 存储: ${this.__bool_string__(this.storable)}`;
        } else {
            return `CreepInfo Details:
	- Name: ${this.name}
	- Recipe: ${this.namedRecipe.recipeString}
	- Grade: ${this.grade} (Swamp Ratio: ${round(get.SWAMP_RATIO * 100, 2)}%)
	- Cost: ${this.cost} Pt
	- Effect: ${round(this.effect * 100, 2)}%
	- PartsVector: ${this.partsVector}
	- DynamicPartsVector: ${this.dynamicPartsVector}
	- AttackPower: ${this.attackPower} (Dynamic: ${this.dynamicAttackPower})
	- MeleePower: ${this.meleePower} (Dynamic: ${this.dynamicMeleePower})
	- RangedPower: ${this.rangedPower} (Dynamic: ${this.dynamicRangedPower})
	- HealPower: ${this.healPower} (Dynamic: ${this.dynamicHealPower})
	- MotionAbility: ${this.motionAbility * 100}% (Dynamic: ${this.dynamicMotionAbility * 100}%)
	- ArmorRatio: ${this.armorRatio * 100}% (Dynamic: ${this.dynamicArmorRatio * 100}%)
	- Characteristics: melee: ${this.__bool_string__(this.melee)}, ranged: ${this.__bool_string__(this.ranged)}, heal: ${this.__bool_string__(this.heal)}, work: ${this.__bool_string__(this.work)}, storable: ${this.__bool_string__(this.storable)}`;
        }
    }
}

class CreepMotion {
    /**
     * 对己方队友，记录最近一次移动的操作
     * 对敌方敌人，追踪并预测其位置
     * */
    static SEPARATE_LENGTH = 7;  // 每此长度的便取一个点，作为阶段性移动的目标点
    constructor(creep) {
        this.creep = creep

        // 己方运动信息
        this.path = [];  // 记录已有的一组路径，让creep沿着这条路径移动
        this.path_goal = {x: creep.x, y: creep.y};  // 记录路径的终点
        this.path_index = 0;  // 记录路径的索引
        this.next_force = 0;  // 记录下一次强制更新path的时间
        this.last_options = undefined;  // 记录上一次寻路的选项
        /*
        * 假设某个creep需要移动到目标点:
        * 1. this.path为空，那我们为其计算一条路径
        * 	1.1 使用const path_res = searchPath (unit:{x,y}, to:{x, y}, options); 计算一条路径，是一组点
        * 	1.2 根据SEPARETE_LENGTH，取出一些点，作为每个阶段的目标点
        *   1.3 如果path_res长度小于SEPARATE_LENGTH，那么直接单步移动而不保存到path
        *   1.4 如果path_res长度大于SEPARATE_LENGTH，那么保存关键点到path
        *   1.5 同时更新path_goal为path_res的最后一个点;跟新path_index为0
        * 2. this.path不为空，那么取出path[path_index]
        * 	2.1 判断creep与path[path_index]的距离，如果<=1，那么path_index++，如果path_index >= path.length，那么目标点就设为path_goal
        *   2.2 得到阶段性的目标点后，计算creep到阶段点的路径, 作为creep的下一个移动目标
         */

        // 敌方运动信息
        this.lastPoint = {x: this.creep.x, y: this.creep.y};  // 记录敌方creep上一帧的位置

        // debug
        // this.view = View(10);
    }

    seekNext(options = undefined) {
        /**
         * 对友军，寻找下一个目标点
         * 对敌方，寻找下一个预测点
         *
         * @param options {object} 只对友军有效, 作为没有路径时的寻路选项
         * */
        if (options !== undefined) this.last_options = options;
        if (!this.creep.my) {
            if (this.creep.fatigue > 0) return {x: this.creep.x, y: this.creep.y};
            return {x: this.creep.x * 2 - this.lastPoint.x, y: this.creep.y * 2 - this.lastPoint.y};
        } else if (this.creep.x === this.path_goal.x && this.creep.y === this.path_goal.y) {
            return {x: this.creep.x, y: this.creep.y};
        } else {
            let stage_point = this.path_goal;
            if (this.path.length) {
                if (this.path_index < this.path.length) {  // 假设path检查是提前进行的，如果对path不满意，就清空它
                    stage_point = this.path[this.path_index];
                }

                // 如果creep与stage_point距离小于等于SEPARATE_LENGTH，那么就更新path_index
                if (this.creep.__py__.distance(stage_point) <= CreepMotion.SEPARATE_LENGTH) {
                    this.path_index++;
                    stage_point = this.path_index >= this.path.length ? this.path_goal : this.path[this.path_index];
                }
            }


            if (!options) options = {};
            if (!options.maxOps) options.maxOps = CreepMotion.SEPARATE_LENGTH * CreepMotion.SEPARATE_LENGTH;
            const path_res = searchPath(this.creep, stage_point, options);
            if (path_res.incomplete) {
                if (LANGUAGE === "cn") std.warn('CreepMotion.seekNext', `${this.creep.name}到目标(${this.path_goal.x}, ${this.path_goal.y})的路径不完整。`);
                else std.warn('CreepMotion.seekNext', `The path from ${this.creep.name} to (${this.path_goal.x}, ${this.path_goal.y}) is incomplete.`);
            }
            return path_res.path[0];
        }
    }

    seekNextStagePoint(new_path_goal, options = undefined) {
        /*
        * 只对友军有效, 寻找下一个阶段性目标点
        * */

        if (options !== undefined) this.last_options = options;
        if (!this.creep.my) {
            if (LANGUAGE === "cn") std.warn('CreepMotion.seekNextStagePoint', '只对己方creep有效:id=', this.creep.id);
            else std.warn('CreepMotion.seekNextStagePoint', 'Only for friendly creeps, id=', this.creep.id);
        }
        if (this.creep.x === new_path_goal.x && this.creep.y === new_path_goal.y) {
            return {x: this.creep.x, y: this.creep.y};
        } else {
            const dist = Math.max(Math.abs(this.creep.x - new_path_goal.x), Math.abs(this.creep.y - new_path_goal.y));
            if (
                (this.next_force < know.now) ||
                (dist <= 20 && (new_path_goal.x !== this.path_goal.x || new_path_goal.y !== this.path_goal.y)) ||
                (dist > 20 && (Math.abs(new_path_goal.x - this.path_goal.x) > 1 || Math.abs(new_path_goal.y - this.path_goal.y) > 1))
            ) {
                this.path = [];
                this.next_force = know.now + 10;
                this.path_index = 0;
                this.path_goal = {x: new_path_goal.x, y: new_path_goal.y};
                const cell_cost = DEFAULT_MOTION.costMatrix.get(new_path_goal.x, new_path_goal.y);

                const path_res = searchPath(this.creep, cell_cost < 255 ? new_path_goal : {pos: new_path_goal, range: 1}, options);
                if (path_res.incomplete) {
                    if (LANGUAGE === "cn") std.warn('CreepMotion.seekNextStagePoint', `${this.creep.name}到目标(${this.path_goal.x}, ${this.path_goal.y})的路径不完整。`);
                    else std.warn('CreepMotion.seekNextStagePoint', `The path from ${this.creep.name} to (${this.path_goal.x}, ${this.path_goal.y}) is incomplete.`);
                }

                // if (options && options.swampCost){
                //     console.log("options:", options);
                //     console.log("path:", path_res.path);
                // }

                // 每隔SEPARATE_LENGTH取一个点
                const res_length = path_res.path.length;
                if (res_length > CreepMotion.SEPARATE_LENGTH * 2) {
                    const end_reach = res_length - CreepMotion.SEPARATE_LENGTH - 1;
                    this.path = path_res.path.filter((p, i) => ((i + 1) % CreepMotion.SEPARATE_LENGTH === 0) && (i < end_reach));
                }
            }
            let stage_point = this.path_goal;
            if (this.path.length) {
                if (this.path_index < this.path.length) {  // 假设path检查是提前进行的，如果对path不满意，就清空它
                    stage_point = this.path[this.path_index];
                }

                // 如果creep与stage_point距离小于等于1，那么就更新path_index
                if (this.creep.__py__.distance(stage_point) <= 1) {
                    this.path_index++;
                    stage_point = this.path_index >= this.path.length ? this.path_goal : this.path[this.path_index];
                }
            }

            // std.info("name:", this.creep.name, "stage_point:", stage_point.x, stage_point.y);
            // this.view.rect(Point(stage_point.x-.5, stage_point.y-.5), 1, 1, "#ff0000");

            return stage_point;
        }
    }

    clear() {
        /**
         * 清空所有信息
         * */
        this.path = [];
        this.path_goal = null;
        this.path_index = 0;
        this.lastPoint = {x: this.creep.x, y: this.creep.y};
    }

    handle() {
        // this.view.clear();
        if (this.creep.exists && this.creep.fatigue <= 0) {
            this.lastPoint = {x: this.creep.x, y: this.creep.y};  // 记录敌方creep上一帧的位置
        }
    }
}

class GameObject {
    static PREFIX_TABLE = {
        'Creep': "c",
        'StructureSpawn': "sp",
        'StructureExtension': "ext",
        'StructureRoad': "road",
        'StructureWall': "wall",
        'StructureRampart': "ramp",
        'StructureContainer': "box",
        'StructureTower': "twr",
        'Structure': "st",
        'ScoreCollector': "sc",
        'AreaEffect': "ae",
        'Source': "sr",
        'ConstructionSite': "site",
        'Flag': "flag",
        'Resource': "rs",
        'BodyPart': "bp",
        'GameObject': "go",
        'Object': "o",
    };
    static __PROTO__ = GameObjectProto;

    constructor(gobject) {
        this.__object__ = gobject;
        this.__object__.__py__ = this;
        this.__protoname__ = gobject.constructor.name;
        this.__name__ = gobject.name !== undefined ? gobject.name : `${GameObject.PREFIX_TABLE[this.__protoname__]}${gobject.id}`;

        // python
        this.py_name = this.name;
        this.__object__.name = this.name;
        this.__object__.py_name = this.py_name;
    }

    get name() {
        if (this.__name__ !== undefined) return this.__name__;
        this.__name__ = this.__object__.name !== undefined ? this.__object__.name : `${GameObject.PREFIX_TABLE[this.__protoname__]}${this.__object__.id}`;

        // python
        this.py_name = this.__name__;
        this.__object__.name = this.__name__;
        this.__object__.py_name = this.py_name;
    }

    set name(new_name) {
        if (!new_name) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.name`, `新名字不能为空. 本次操作无效.`);
            else std.warn(`${this.name}.name`, `new name can't be empty. This operation is invalid.`);
            return;
        }
        this.__name__ = new_name;
        this.__object__.name = new_name;
        this.__object__.py_name = new_name;
        this.py_name = new_name;
    }

    get id() {
        return this.__object__.id;
    }

    get _get_id() {
        return this.__object__.id;
    }

    get ticksToDecay() {
        return this.__object__.ticksToDecay;
    }

    get my() {
        return this.__object__.my;
    }

    get x() {
        return this.__object__.x;
    }

    get y() {
        return this.__object__.y;
    }

    get exists() {
        return this.__object__.exists;
    }

    distance(target) {
        if (!st.point(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.distance`, `目标:typeof ${typeof target}不是Point类型。忽略并返回65536`);
            else std.warn(`${this.name}.distance`, `target:typeof ${typeof target} is not Point type. Ignore and return 65536`);
            return 65536
        }
        return Math.max(Math.abs(this.x - target.x), Math.abs(this.y - target.y));
    }

    at(target) {
        return this.__object__.x === target.x && this.__object__.y === target.y;
    }

    nat(target) {
        return this.__object__.x !== target.x || this.__object__.y !== target.y;
    }

    offset(dx, dy) {
        return Point(this.x + dx, this.y + dy);
    }

    add(other) {
        return Point(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return Point(this.x - other.x, this.y - other.y);
    }

    neg() {
        return Point(-this.x, -this.y);
    }

    dot(other) {
        return this.x * other.x + this.y * other.y;
    }

    mul(other) {
        return Point(this.x * other, this.y * other);
    }

    crs(other) {
        return this.x * other.y - this.y * other.x;
    }

    closest(objs, filter_fn = undefined, notme = true) {
        if (len(objs) === 0) {
            return null;
        }
        if (filter_fn !== undefined && filter_fn !== null) {
            if (isinstance(filter_fn, tuple([list, tuple, set]))) {
                filter_fn = std.combo(filter_fn);
            }
            objs = filter(filter_fn, objs);
        }
        if (len(objs) === 0) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.closest`, '过滤后没有剩余对象。');
            else std.warn(`${this.name}.closest`, 'No objects left after filtering.')
            return null;
        }
        if (notme) {
            objs = objs.filter(o => o !== this);
        }
        const ret = findClosestByRange(this, objs);
        if (ret === undefined) {
            return null;
        }
        return ret;
    }

    quickest(objs, filter_fn = undefined, options = undefined, notme = true) {
        if (len(objs) === 0) {
            return null;
        }
        if (filter_fn !== undefined && filter_fn !== null) {
            if (isinstance(filter_fn, tuple([list, tuple, set]))) {
                filter_fn = std.combo(filter_fn);
            }
            objs = filter(filter_fn, objs);
        }
        if (len(objs) === 0) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.quickest`, '过滤后没有剩余对象。');
            else std.warn(`${this.name}.quickest`, 'No objects left after filtering.')
            return null;
        }
        if (notme) {
            objs = objs.filter(o => o !== this);
        }
        const ret = findClosestByPath(this, objs, options);
        if (ret === undefined) {
            return null;
        }
        return ret;
    }

    inrange(objs, range, filter_fn = null) {
        if (len(objs) === 0) {
            return objs;
        }
        if (filter_fn !== undefined && filter_fn !== null) {
            if (isinstance(filter_fn, tuple([list, tuple, set]))) {
                filter_fn = std.combo(filter_fn);
            }
            objs = filter(filter_fn, objs);
        }
        if (len(objs) === 0) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.inrange`, '过滤后没有剩余对象。');
            else std.warn(`${this.name}.inrange`, 'No objects left after filtering.')
            return [];
        }
        const tmp = [];
        for (const _obj of objs) {
            if (this.distance(_obj) <= range) {
                tmp.append(_obj);
            }
        }
        return tmp;
    }

    around(objects) {
        /**
         * 这个函数获取unit 3范围内所有objects，然后按照health排序，记作around
         * 然后，获取unit 1范围内所有around，记作nears
         *
         * @return [nears, around]
         * */
        if (!objects) {
            if (LANGUAGE === 'cn') std.warn("get.around", "参数 (!objects) 为True，请检查: typeof objects =", typeof objects);
            else std.warn("get.around", "(!objects) is true: typeof objects =", typeof objects);
            return [[], []];
        }
        const around = sorted(this.inrange(objects, 3), __kwargtrans__({
            key: (function (e) {
                return get.health(e, true);
            })
        }));
        const nears = this.inrange(around, 1);
        return [nears, around];
    }

    get _my_string_() {
        return this.__object__.my ? "😄" : (this.__object__.my === undefined ? "😐" : "😡");
    }

    toString() {
        return `(${this.name}${this._my_string_} ${this.x}◈${this.y})`;
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof GameObject.__PROTO__;
    }
}

class Creep extends GameObject {
    static __PROTO__ = GameCreep;

    constructor(creep) {
        super(creep);
        this.motion = new CreepMotion(creep);
        this.info = new CreepInfo(creep);
        this._grade = this.info.grade;
        this._recipe = this.info.namedRecipe.recipe
        this._partsVector = this.info.partsVector;
        this._dynamic_next = math.irandom(100) + 100;
        this._flag = get.flag();
        this.__eda__ = new ListenSystem(this);
        this.__scs__ = new ScheduleSystem(this);

        // 为每个body内的元素添加py_metatype为其type
        for (const part of this.body) {
            part.py_metatype = part.type;
        }

        if (get.now === 1) {
            this.birthPoint = null;  // 这个应该是开局就有的
        } else {
            let sp = get.spawn(sp => sp.x === creep.x && sp.y === creep.y);
            this.birthPoint = sp ? Point(sp.x, sp.y) : null;
        }

        // 记录最近一个tick的操作内容
        this.actions = {
            move: null,     // Point
            attack: null,    // Creep | Structure
            // 如果同时近战和远程都攻击了，那么以该creep的优势能力的一项为基准
            heal: null,     // Creep
            harvest: null,  // Source
            build: null,    // Site
            fetch: null,    // Resource | Structure | Creep
            deposit: null,  // Creep | Structure | Point
        }
    }

    __update_info__() {
        if (!this._flag) this._dynamic_next = know.now + 999;
        else {
            this.info = new CreepInfo(this.__object__);
            this._recipe = this.info.namedRecipe.recipe
            this._partsVector = this.info.partsVector;
            this._grade = this.info.grade;
            this._dynamic_next = know.now + 40;
        }
    }

    get grade() {
        if (this._dynamic_next <= know.now) {
            this.__update_info__();
        }
        return this._grade;
    }

    get dynamicGrade() {
        if (this._dynamic_next <= know.now) {
            this.__update_info__();
        }
        return this._grade * this.__object__.hits / this.__object__.hitsMax;
    }

    get recipe() {
        if (this._dynamic_next <= know.now) {
            this.__update_info__();
        }
        return this._recipe;
    }

    get partsVector() {
        if (this._dynamic_next <= know.now) {
            this.__update_info__();
        }
        return this._partsVector;
    }

    get birthed() {
        if (this.birthPoint === null) return true;
        else return this.birthPoint.x !== this.__object__.x || this.birthPoint.y !== this.__object__.y; // 出生点变了, 说明出生了
    }

    get fatigue() {
        return this.__object__.fatigue;
    }

    get energy() {
        return this.__object__.store.getUsedCapacity(RESOURCE_ENERGY);
    }

    get energyMax() {
        return this.__object__.store.getCapacity(RESOURCE_ENERGY);
    }

    get hp() {
        return this.__object__.hits;
    }

    get hpMax() {
        return this.__object__.hitsMax;
    }

    get hits() {
        return this.__object__.hits;
    }

    get hitsMax() {
        return this.__object__.hitsMax;
    }


    get store() {
        return this.__object__.store;
    }

    get body() {
        return this.__object__.body;
    }

    handle() {
        /// 为每一个Creep提供更新, 外部调用. 应当在每个tick开始时调用
        this.motion.handle()
    }

    listenFor(event_name, callback, sources = undefined) {
        return this.__eda__.listenFor(event_name, callback, sources);
    }

    pushEvent(event_name, data) {
        return this.__eda__.pushEvent(event_name, data);
    }

    cancelListen(event_name) {
        return this.__eda__.cancelListen(event_name);
    }

    schedule(delay, callback) {
        return this.__scs__.schedule(delay + know.now, callback);
    }

    move(to, options = undefined) {
        // 如果目标为 null 或 undefined，输出警告并返回 -1
        if (to === null || to === undefined) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.move`, `目标点是null或undefined。忽略此操作。`);
            else std.warn(`${this.name}.move`, `The target point is null or undefined. Ignore this operation.`);
            return ERR_INVALID_TARGET;
        }
        this.actions.move = to;


        // 初始化 options，确保其包含 costMatrix，否则使用默认值
        if (!options) options = {};
        else options = Object.assign({}, options);
        if (!options.costMatrix) options.costMatrix = DEFAULT_MOTION.costMatrix;

        if (options.plainCost !== undefined) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.move`, `由于使用了costMatrix，因此options.plainCost 已被禁用。`);
            else std.warn(`${this.name}.move`, `options.plainCost has been disabled since costMatrix is used.`);
        }

        if (options.swampCost !== undefined) {
            if (options.swampCost !== 2) {
                if (LANGUAGE === "cn") std.warn('put.move', `由于使用了costMatrix，因此options.swampCost 已被禁用(除了为2的情况)。`);
                else std.warn('put.move', `options.swampCost has been disabled since costMatrix is used(except for 2).`);
            } else {
                options.costMatrix = SWAMP_MOTION.costMatrix;
            }
        }


        let result = null;
        // print("to:", to);
        // 如果目标有 x 和 y 属性，计算下一个阶段点并移动单位
        if (to.x !== undefined && to.y !== undefined) {
            const dist = Math.max(Math.abs(this.x - to.x), Math.abs(this.y - to.y));
            if (dist === 0) return 0;
            else if (dist <= 2) {
                const dirp = get.directionPoint(get.direction(this, to));
                const point = this.offset(dirp.x, dirp.y);
                // print("this:", this, "point:", point, "to:", to);
                if (DEFAULT_MOTION.costMatrix.get(point.x, point.y) < 254) {  // 99 is creep's
                    return this.__object__.moveTo(point);
                }
            }
            const motion = this.motion;
            const stage_to = motion.seekNextStagePoint(to, options);
            const dist_to = this.distance(stage_to);
            if (!options.maxOps) options.maxOps = dist_to * dist_to * 2;
            result = this.__object__.moveTo(stage_to, options);
        }
        // 如果目标是整数，直接移动单位
        else if (Number.isInteger(to)) {
            result = this.__object__.move(to);
        }
        // 如果目标有 id 属性，但可能已被销毁，输出警告并设置结果为 ERR_INVALID_TARGET
        else if (to.id !== undefined) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.move`, `目标${std.__obj_str__(to)}可能已经被销毁。忽略本次操作。`);
            else std.warn(`${this.name}.move`, `Target ${std.__obj_str__(to)} may have been destroyed. Ignore this operation.`);
            result = ERR_INVALID_TARGET;
        }
        // 对于所有其他情况，目标不是有效的，输出警告并设置结果为 ERR_INVALID_TARGET
        else {
            if (LANGUAGE === "cn") std.warn(`${this.name}.move`, `目标${typeof to}不是有效的目标。忽略本次操作。`);
            else std.warn(`${this.name}.move`, `The target ${typeof to} is not a valid target. Ignore this operation.`);
            result = ERR_INVALID_TARGET;
        }

        return result;
    }

    escape(target, options = undefined) {
        if (!st.point(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.escape`, `目标${std.__obj_str__(target)}不是有效的目标。忽略本次操作。`);
            else std.warn(`${this.name}.escape`, `The target ${std.__obj_str__(target)} is not a valid target. Ignore this operation.`);
            return ERR_INVALID_TARGET;
        }
        const dist = this.distance(target);
        if (dist <= 3) {
            const around = this.inrange(know.battles.enemies, dist + 1);
            target = Point.center(...around);
        }
        if (target.x === this.x && target.y === this.y) {
            // 随机选择[1, 8]
            const random = math.irandrange(1, 8);
            return this.move(random);
        }
        const dx = this.x - target.x;
        const dy = this.y - target.y;
        let to = Point(math.clamp(this.x + dx * 2, 0, 100), math.clamp(this.y + dy * 2, 0, 100));
        to = get.space(to.x, to.y);
        if (this.x === 48 && this.y === 50) print(this, target, to);
        return this.move(to, options);
    }

    __judge__(dm, dr, edm, edr) {
        /// 这个函数判断是否应该靠近目标
        if (dm === 0 && edm > 0) return false;
        if (dm === 0 && edm === 0) {
            if (dr === 0) return false;
            return !(dr > 0 && edr >= dr - 1);

        } else if (dm > 0 && edm > 0) {
            if (dr === 0) return true;  // 你不能远程，你死都得上
            if (dm - edm > 1) return true;
            const melee_bonus = dm * 3 / (dm * 3 + dr);
            const enemy_melee_bonus = edm * 3 / (edm * 3 + edr);
            return melee_bonus >= enemy_melee_bonus - 0.1;
        }
        return true;
    }

    attack(target, move = true) {
        /**
         * 指挥一个单位攻击指定的目标，可选地包含移动逻辑。
         *
         * @param {st.hitable} target - 被攻击的目标对象。
         * @param {Boolean|Object} [move=true] - 是否包含移动逻辑(false表明不移动)，可传递移动选项。
         * @returns {Number) - 一个代表操作结果的常量。
         */
        if (!st.hitable(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.attack`, `目标${std.__obj_str__(target)}不可被攻击。`);
            else std.warn(`${this.name}.attack`, `Target ${std.__obj_str__(target)} cannot be attacked.`);
        }
        this.actions.attack = target;
        const dist = this.distance(target);
        if (dist > 3) {
            if (move) return this.move(target, (move === true ? undefined : move));
            return ERR_NOT_IN_RANGE;
        }
        const melee = st.melee(this.__object__);
        const ranged = st.ranged(this.__object__);
        const dynamicMelees = this.info.dynamicPartsVector.melees;
        const dynamicRanges = this.info.dynamicPartsVector.ranges;
        const enemyDynamicMelees = (target instanceof Creep) ? target.info.dynamicPartsVector.melees : 1;
        const enemyDynamicRanges = (target instanceof Creep) ? target.info.dynamicPartsVector.ranges : 0;

        let melee_result = ERR_NO_BODYPART;
        let ranged_result = ERR_NO_BODYPART;
        if (dist === 1) {
            if (melee) melee_result = this.__object__.attack(target.__object__);
            if (ranged) ranged_result = this.__object__.rangedMassAttack();
            if (move && this.__judge__(dynamicMelees, dynamicRanges, enemyDynamicMelees, enemyDynamicRanges)) {
                this.move(target, (move === true ? undefined : move));
            }
        } else {
            if (ranged) {
                ranged_result = this.__object__.rangedAttack(target.__object__);
                if (move && dist <= 2) {
                    this.escape(target, (move === true ? undefined : move));
                }
            } else if (move && this.__judge__(dynamicMelees, dynamicRanges, enemyDynamicMelees, enemyDynamicRanges)) {
                this.move(target, (move === true ? undefined : move));
                melee_result = ERR_NOT_IN_RANGE;
            }
        }

        if (dynamicMelees > dynamicRanges) return melee_result;
        else if (dynamicMelees < dynamicRanges) return ranged_result;
        else return ERR_NO_BODYPART;
    }

    heal(target, move = true) {
        /**
         * 执行单位的治疗操作。
         *
         * @param {Creep} target - 治疗的目标单位。
         * @param {boolean} [move=true] - 是否允许单位移动以接近目标。
         * @returns {Object} - 一个包含治疗结果的对象，可能的属性有 `heal`、`ranged` 或 `move`。
         */
        // 检查目标是否有效
        if (!st.creep(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.heal`, `目标${std.__obj_str__(target)}不可被治疗。`);
            else std.warn(`${this.name}.heal`, `Target ${std.__obj_str__(target)} cannot be healed.`);
        }
        this.actions.heal = target;

        // 初始化结果对象
        let result = null;

        // 计算单位与目标之间的距离
        const dist = this.distance(target);

        // 如果距离小于等于1，尝试近战治疗
        if (dist <= 1) result = this.__object__.heal(target.__object__);
        // 如果距离在2到3之间，尝试远程治疗
        else if (dist <= 3) result = this.__object__.rangedHeal(target.__object__);
        // 如果距离大于3且允许移动，移动单位接近目标
        else if (move) {
            this.move(target, (move === true ? undefined : move));
            result = ERR_NOT_IN_RANGE;
        }

        // 返回治疗结果
        return result;
    }

    __induce_resource_type__(target) {
        if (!target) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.__induce_resource_type__`, `目标为:${target}。默认为能量。`);
            else std.warn(`${this.name}.__induce_resource_type__`, `The target is:${target}. Default to energy.`);
            return RESOURCE_ENERGY;
        }
        if (target instanceof Source) return RESOURCE_ENERGY;
        if (target instanceof Resource) return target.resourceType;
        if (target instanceof StructureTower) return RESOURCE_ENERGY;
        if (target instanceof StructureSpawn) return RESOURCE_ENERGY;
        if (target instanceof StructureExtension) return RESOURCE_ENERGY;
        if (target instanceof ScoreCollector) return target.resourceType;
        if (!target.store) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.__induce_resource_type__`, `目标${std.__obj_str__(target)}没有store的能力。默认为能量类型。`);
            else std.warn(`${this.name}.__induce_resource_type__`, `The target ${std.__obj_str__(target)} has no store ability. Default to energy type.`);
            return RESOURCE_ENERGY;
        }
        const store = target.store;
        const cap_energy = store.getUsedCapacity(RESOURCE_ENERGY);
        const cap_score = store.getUsedCapacity(RESOURCE_SCORE);
        const cap_score_x = store.getUsedCapacity(RESOURCE_SCORE_X);
        const cap_score_y = store.getUsedCapacity(RESOURCE_SCORE_Y);
        const cap_score_z = store.getUsedCapacity(RESOURCE_SCORE_Z);
        // print(this.name, cap_energy, cap_score, cap_score_x, cap_score_y, cap_score_z)
        if (cap_energy > 0) return RESOURCE_ENERGY;
        else if (cap_score > 0) return RESOURCE_SCORE;
        else if (cap_score_x > 0) return RESOURCE_SCORE_X;
        else if (cap_score_y > 0) return RESOURCE_SCORE_Y;
        else if (cap_score_z > 0) return RESOURCE_SCORE_Z;
        // if (LANGUAGE === "cn") std.warn(`${this.name}.__induce_resource_type__`, `目标未检测到任何资源类型。默认返回能量类型。`);
        // else std.warn(`${this.name}.__induce_resource_type__`, `No resource type detected for the target. Default to energy type.`);
        return RESOURCE_ENERGY;

    }

    fetch(target, resource_type = null, amount = null, move = true) {
        /**
         * fetch - 从指定目标获取资源。
         *
         * 该函数用于从目标获取资源。它可以处理移动到目标、捡起资源、从结构中提取资源或从另一个单位转移资源。
         *
         * @param {Resource|Creep|Structure} target - 资源的来源。
         * @param {String} [resource_type=RESOURCE_ENERGY] - 要获取的资源类型。
         * @param {number} [amount=null] - 要获取的资源数量。
         * @param {boolean|Object} [move=true] - 是否移动到目标。如果为 `true`，则使用默认移动选项。
         * @returns {number} 操作结果的错误代码。
         */
        // 检查目标是否有效
        if (!st.storable(target) && !(target instanceof Resource)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.fetch`, `目标${std.__obj_str__(target)}没有store的能力。`);
            else std.warn(`${this.name}.fetch`, `Target ${std.__obj_str__(target)} has no store ability.`);
            return ERR_INVALID_TARGET;
        }
        this.actions.fetch = target;

        if (resource_type === null || resource_type === undefined) resource_type = this.__induce_resource_type__(target);

        // 如果需要移动且单位与目标距离大于1，则移动到目标
        if (move && this.distance(target) > 1) {
            return this.move(target, (move === true ? undefined : move));
        }

        // 如果目标是资源对象且为能量，则尝试捡起
        if ((target instanceof Resource) && target.resourceType === RESOURCE_ENERGY) return this.__object__.pickup(target.__object__);

        // 根据目标类型和是否指定了数量，执行转移或提取操作
        if (amount) {
            if (target instanceof Creep) return target.__object__.transfer(this.__object__, resource_type, amount);
            if (target instanceof Structure) return this.__object__.withdraw(target.__object__, resource_type, amount);
        } else {
            if (target instanceof Creep) return target.__object__.transfer(this.__object__, resource_type);
            if (target instanceof Structure) return this.__object__.withdraw(target.__object__, resource_type);
        }

        // 如果以上所有操作均失败，则返回目标无效错误
        return ERR_INVALID_TARGET;
    }

    deposit(target, resource_type = null, amount = null, move = true) {
        /**
         * deposit - 将资源存储到指定目标或丢弃资源。
         *
         * 该函数用于将 `this` 的资源存储到 `target`，如果 `target` 为 `null`，则丢弃资源。
         * 它可以处理移动到目标、转移资源或丢弃资源。
         *
         * @param {Structure|Creep|null} target - 资源的目标。可以是结构、单位或 `null` 以丢弃资源。
         * @param {String} [resource_type=RESOURCE_ENERGY] - 要存储的资源类型。如果为 `null`，则默认为能量。
         * @param {number} [amount=null] - 要存储的资源数量。如果为 `null`，则存储所有该类型的资源。
         * @param {boolean|Object} [move=true] - 是否移动到目标。如果为 `true`，则使用默认移动选项。
         * @returns {number} 操作结果的错误代码。
         */
        this.actions.deposit = target;

        // 如果目标为 null，则丢弃资源
        if (target === null) {
            this.actions.deposit = {x: this.__object__.x, y: this.__object__.y};
            if (resource_type === null || resource_type === undefined) resource_type = this.__induce_resource_type__(this);
            return this.__object__.drop(resource_type, amount);
        }

        if (resource_type === null || resource_type === undefined) resource_type = this.__induce_resource_type__(target);
        if (resource_type === null || resource_type === undefined) print("new resource_type", resource_type);

        if (!st.point(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.deposit`, `目标${std.__obj_str__(target)}不是一个有效的目标。`);
            else std.warn(`${this.name}.deposit`, `The target ${std.__obj_str__(target)} is not a valid target.`);
            return ERR_INVALID_TARGET;
        }

        // 如果需要移动且单位与目标距离大于1，则移动到目标
        if (move && this.distance(target) > 1) {
            return this.move(target, (move === true ? undefined : move));
        }

        // 根据目标是否可存储和是否指定了数量，执行转移或丢弃操作
        if (amount) {
            if (st.storable(target)) return this.__object__.transfer(target.__object__, resource_type, amount);

        } else {
            // print("deposit", target, target.__object__, resource_type);
            if (st.storable(target)) return this.__object__.transfer(target.__object__, resource_type);
        }

        this.actions.deposit = {x: this.__object__.x, y: this.__object__.y};
        return this.__object__.drop(resource_type);
    }

    build(site, move = true) {
        /**
         * build - 执行建造操作。
         *
         * 该函数用于在指定位置建造结构。如果单位与建造位置的距离大于3，它会先移动到该位置。
         *
         * @param {ConstructionSite} site - 建造的目标位置。
         * @param {boolean|Object} [move=true] - 是否移动到建造位置。如果为 `true`，则使用默认移动选项。
         * @returns {number} 操作结果的错误代码。
         */

        // 检查建造位置是否有效
        if (!st.site(site)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.build`, `目标${std.__obj_str__(site)}不是有效的建造位置。`);
            else std.warn(`${this.name}.build`, `The target ${std.__obj_str__(site)} is not a valid construction site.`);
        }
        this.actions.build = site;

        // 如果需要移动且单位与建造位置距离大于3，则移动到该位置
        if (move && this.distance(site) > 3) {
            return this.move(site, (move === true ? undefined : move));
        }

        // 执行建造操作
        return this.__object__.build(site.__object__);
    }

    harvest(target, move = true) {
        /**
         * harvest - 执行采集操作。
         *
         * 该函数用于从资源点采集资源。如果单位与资源点的距离大于1，它会先移动到该位置。
         * 如果目标不是资源点，会发出警告并忽略该命令。
         *
         * @param {Source} target - 采集的目标，必须是资源点。
         * @param {boolean|Object} [move=true] - 是否移动到资源点。如果为 `true`，则使用默认移动选项。
         * @returns {number} 操作结果的错误代码。
         */
        // 检查目标是否有效
        if (!st.source(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.harvest`, `目标${std.__obj_str__(target)}不是有效的资源点。`);
            else std.warn(`${this.name}.harvest`, `The target ${std.__obj_str__(target)} is not a valid source.`);
        }
        this.actions.harvest = target;

        // 如果需要移动且单位与资源点距离大于1，则移动到该位置
        if (move && this.distance(this, target) > 1) {
            return this.move(target, (move === true ? undefined : move));
        }

        // 执行采集操作
        return this.__object__.harvest(target.__object__);
    }

    intermit(target, resource_type = null, options = null) {
        /**
         * intermit - 促进单位以“断断续续”的方式搬运资源。
         *
         * 该函数通过让 `this` 在移动时放下和重新捡起资源，从而有效地将资源搬运到 `target`。
         * 这种方法特别适用于移动能力有限但携带能力高的单位，因为它可以减少移动时的疲劳积累。
         *
         * @param {Structure|Creep|null} target - 资源的目标位置。可以是结构、单位或 `null` 以放下资源。
         * @param {String} [resource_type=RESOURCE_ENERGY] - 要搬运的资源类型。
         * @param {Object|null} [options=null] - 移动选项。如果为 `null`，则使用默认选项。
         * @returns {number} 操作结果的错误代码。
         */
        // 设置资源类型为能量，如果未指定
        if (!st.point(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.intermit`, `目标${std.__obj_str__(target)}不是有效的位置。`);
            else std.warn(`${this.name}.intermit`, `The target ${std.__obj_str__(target)} is not a valid point.`);
            return ERR_INVALID_TARGET;
        }

        if (resource_type === null || resource_type === undefined) resource_type = RESOURCE_ENERGY;

        let result = null;

        // 获取单位最后掉落的资源
        const drops = get.resources(function (obj) {
            return obj.resourceType === resource_type && this._last_idrop && this._last_idrop.x === obj.x && this._last_idrop.y === obj.y;
        }.bind(this));

        // 获取单位的剩余存储空间
        const free = this.store.getFreeCapacity(resource_type);

        // 如果有掉落的资源且单位有剩余存储空间，尝试捡起这些资源
        if (len(drops) && free > 0) {
            return this.fetch(drops[0], resource_type, free, false);
        }

        // 如果单位没有携带任何该类型的资源，完成操作
        const current = this.store.getUsedCapacity(resource_type);
        if (current === 0) {
            return DONE;
        }

        // 检查目标是否有效
        if (!st.storable(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.intermit`, `目标${std.__obj_str__(target)}不是有效的存储位置。`);
            else std.warn(`${this.name}.intermit`, `The target ${std.__obj_str__(target)} is not a valid storage location.`);
        }

        // 计算单位与目标之间的距离
        const dist = this.distance(target);

        // 如果距离小于等于1，直接将资源存储到目标
        if (dist <= 1) {
            result = this.deposit(target, resource_type, null, (options ? options : true));
            if (result !== OK) {
                return result;
            }
            return DONE;
        }

        // 如果距离大于1，先放下资源，然后移动到目标
        else {
            result = this.deposit(null, resource_type, null, (options ? options : true));
            if (this._last_idrop) {
                this._last_idrop.x = this.x;
                this._last_idrop.y = this.y;
            } else {
                this._last_idrop = Point(this.x, this.y);
            }
            if (result !== OK) {
                return result;
            }
            return this.move(target, options);
        }
    }

    follow(target, distance, options = null) {
        /**
         * follow - 管理单位跟随目标的行为。
         *
         * 该函数根据 `target` 是否属于我方，控制 `this` 的移动行为。如果 `target` 属于我方，
         * `this` 会尝试保持在 `stop_dist` 和 `ignore_dist` 之间的距离。如果 `target` 不属于我方，
         * `this` 会在距离过近或 `target` 有疲劳时尝试逃逸。
         *
         * 如果目标是 Creep，那么评估的距离是 `this` 到目标的下一个预测点的距离。
         *
         * @param {Creep|Structure} target - 被跟随的目标。
         * @param {number|tuple} distance - 与目标保持的距离。可以是一个数或一个元组 `[stop_dist, ignore_dist]`。
         * @param {Object|null} [options=null] - 移动选项。如果为 `null`，则使用默认选项。
         * @returns {number} 操作结果的错误代码。
         */
        // 检查目标是否有效
        if (!st.point(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.follow`, `目标${std.__obj_str__(target)}不是有效的位置。`);
            else std.warn(`${this.name}.follow`, `The target ${std.__obj_str__(target)} is not a valid position.`);
            return ERR_INVALID_TARGET;
        }

        let result = null;
        const target_is_creep = st.creep(target);

        // 处理 distance 参数，确保它是一个元组 [stop_dist, ignore_dist]
        const __left0__ = (Array.isArray(distance) ? distance : [distance, 0]);
        const stop_dist = __left0__[0];
        const ignore_dist = __left0__[1];

        // 计算单位与目标之间的距离
        const pre_target = (target instanceof Creep) ? target.motion.seekNext() : target;
        const dist = this.distance(pre_target);

        // 分支逻辑基于 target 是否属于我方
        if (target.my) {
            // 目标属于我方
            if (target_is_creep && (ignore_dist >= dist && dist > stop_dist)) {
                // 如果在 stop_dist 和 ignore_dist 之间，则尝试移动 target 向 this
                result = target.move(this, options);
                if (result !== OK) {
                    return result;
                }
            }
            // 否则，在距离外就移动 this 向 target
            if (dist > stop_dist) {
                return this.move(target, options);
            } else {
                return OK;  // 否则不需要移动
            }
        } else {
            // 目标不属于我方
            print(this, "dist:", dist, "stop_dist:", stop_dist, "fatigue:", target.fatigue);
            if (dist < stop_dist || (dist === stop_dist && target.fatigue !== undefined && target.fatigue <= 0)) {
                // 如果距离过近或 target 没有疲劳，则尝试逃逸
                return this.escape(target, options);
            } else if (dist > stop_dist) {
                // 否则，移动 this 向 target
                return this.move(target, options);
            }
            return OK;  // 否则不需要移动
        }
    }

    carry(src, dst, resource_type = null, options = null, intermit = false) {
        /**
         * carry - 管理单位在源点和目标之间搬运资源。
         *
         * 该函数处理 `this` 从 `src` 到 `dst` 的资源搬运。它根据 `intermit` 参数决定是采用常规搬运还是“断断续续”搬运。
         * 在常规搬运中，`this` 直接从 `src` 搬运资源到 `dst`。在断断续续搬运中，`this` 会先放下资源，然后移动到 `dst`，
         * 以减少移动时的疲劳积累，特别适用于移动能力有限但携带能力高的单位。
         *
         * @param {Structure|Creep} src - 资源的来源位置。
         * @param {Structure|Creep} dst - 资源的目标位置。
         * @param {String} [resource_type=RESOURCE_ENERGY] - 要搬运的资源类型。
         * @param {Object|null} [options=null] - 移动选项。如果为 `null`，则使用默认选项。
         * @param {boolean} [intermit=false] - 是否采用“断断续续”的搬运方式。但是注意，如果你的moves>=carrys，在平地上仍然会使用非intermit的方式。
         * @returns {number} 操作结果的错误代码。如果搬运完成，返回 `DONE`。
         */
        if (!st.point(dst)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.carry`, `参数dst:${std.__obj_str__(dst)}不是有效的位置。`);
            else std.warn(`${this.name}.carry`, `The parameter dst:${std.__obj_str__(dst)} is not a valid position.`);
            return ERR_INVALID_TARGET;
        }
        if (resource_type === null || resource_type === undefined) resource_type = this.__induce_resource_type__(dst);

        // 分支到常规搬运或断断续续搬运，基于 intermit 参数
        if (!intermit) {
            // 常规搬运逻辑
            if (this.store.getUsedCapacity(resource_type) === 0) {
                // 单位没有该类型的资源
                if (!st.storable(src)) {
                    if (LANGUAGE === "cn") std.warn(`${this.name}.carry`, `参数src:${std.__obj_str__(src)}不是有效的存储位置。`);
                    else std.warn(`${this.name}.carry`, `The parameter src:${std.__obj_str__(src)} is not a valid storage position.`);
                }
                if (this.distance(src) <= 1) {
                    const _ = this.fetch(src, resource_type, null, false);
                    return this.move(dst, options);
                }
                return this.fetch(src, resource_type, null, (options ? options : true));
            }
            if (this.distance(dst) <= 1) {
                // print("carry", dst, resource_type, this.deposit(dst, resource_type, null, false));
                this.deposit(dst, resource_type, null, false);
                if (!st.storable(dst)) {
                    if (LANGUAGE === "cn") std.warn(`${this.name}.carry`, `参数dst:${std.__obj_str__(dst)}不是有效的存储位置。`);
                    else std.warn(`${this.name}.carry`, `The parameter dst:${std.__obj_str__(dst)} is not a valid storage position.`);
                }
                return this.move(src, options);
            }
            const result = this.deposit(dst, resource_type, null, (options ? options : true));
            if (result < 0) return result;

            // 检查一下目标是否有足够的裕量
            const eng0 = this.store.getUsedCapacity(resource_type);
            const cap0 = dst.store.getFreeCapacity(resource_type);
            if (cap0 < eng0) return 0;
            else return DONE;
        } else {
            // 断断续续搬运逻辑
            let result = null;
            const drops = get.resources(function (obj) {
                return obj.resourceType === resource_type && this._last_idrop && this._last_idrop.x === obj.x && this._last_idrop.y === obj.y;
            }.bind(this));
            const free = this.store.getFreeCapacity(resource_type);

            // print("drops:", drops.length, "free:", free);
            if (drops.length > 0 && free > 0) {
                return this.fetch(drops[0], resource_type, free, false);
            }

            const current = this.store.getUsedCapacity(resource_type);
            // print("current:", current);
            if (current === 0) {
                if (!st.storable(src)) {
                    if (LANGUAGE === "cn") std.warn(`${this.name}.carry`, `参数src:${std.__obj_str__(src)}不是有效的存储位置。`);
                    else std.warn(`${this.name}.carry`, `The parameter src:${std.__obj_str__(src)} is not a valid storage position.`);
                }
                return this.fetch(src, resource_type, null, (options ? options : true));
            }

            const dist = this.distance(dst);
            // print("dist:", dist);
            if (dist <= 1) {
                result = this.deposit(dst, resource_type, null, (options ? options : true));
                if (result !== OK) {
                    return result;
                }

                // 检查一下目标是否有足够的裕量
                const eng0 = this.store.getUsedCapacity(resource_type);
                const cap0 = dst.store.getFreeCapacity(resource_type);
                if (cap0 < eng0) return 0;
                else {
                    if (st.storable(src)) this.move(src, options);
                    return DONE;
                }
            } else {
                if (this.fatigue > 0) return ERR_TIRED;
                // 判断move能力是否足够
                if ((this.partsVector.moves - this.partsVector.carries - this.partsVector.others) < 0 || get.COST_ARRAY2D[this.y][this.x] >= 10) {
                    result = this.deposit(null, resource_type, null, (options ? options : true));
                    if (this._last_idrop) {
                        this._last_idrop.x = this.x;
                        this._last_idrop.y = this.y;
                    } else {
                        this._last_idrop = Point(this.x, this.y);
                    }
                    if (result !== OK) {
                        return result;
                    }
                } else {
                    this._last_idrop = undefined;
                }
                return this.move(dst, options);
            }
        }
    }

    patrol(points, options = null) {
        /**
         * patrol - 指令 creep 按顺序循环访问 points 中的所有点。
         *
         * @param {Point[]} points - 要访问的点的数组。
         * @param {Object} [options=null] - 移动选项。
         * @returns {number} 返回移动 move 结果
         */
            // 生成巡逻点的哈希值
        let hash = 0;
        for (let i = 0; i < points.length; i++) {
            hash |= points[i].x;
            hash <<= 1;
            hash |= points[i].y;
            hash <<= 1;
            hash &= 0x7FFFFFFF;
        }

        // 如果哈希值发生变化，重新初始化巡逻路径和索引
        if (this.patrol_hash === undefined || this.patrol_hash !== hash) {
            // print("patrol hash changed:", this.patrol_hash, hash);
            this.patrol_hash = hash;
            this.patrol_path = points;
            this.patrol_index = 0;

            // 遍历所有点，找到最近的点
            let min_dist = 999;
            for (let i = 0; i < points.length; i++) {
                const dist = this.distance(points[i]);
                if (dist < min_dist) {
                    min_dist = dist;
                    this.patrol_index = i;
                }
            }
        }

        // print("patrol:", this.patrol_index, this.patrol_path.length);
        // 获取当前目标点
        const pt = this.patrol_path[this.patrol_index];
        const dist = this.distance(pt);

        // 如果距离小于等于2，则切换到下一个点
        if (dist <= 2) {
            this.patrol_index = (this.patrol_index + 1) % this.patrol_path.length;
        }

        // 移动到当前目标点
        return this.move(pt, options);
    }

    pull(target, options = null) {
        if (!(target instanceof Creep)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.pull`, `目标${std.__obj_str__(target)}不是Creep类型。`);
            else std.warn(`${this.name}.pull`, `Target ${std.__obj_str__(target)} is not a Creep type.`);
        }
        if (this.distance(target) > 1) {
            this.move(target, options);
            return ERR_NOT_IN_RANGE;
        }
        target.move(this);
        return this.__object__.pull(target.__object__);
    }

    push(target, options = null) {
        if (!st.movable(target)) {
            if (LANGUAGE === "cn") std.warn(`${this.name}.push`, `目标${std.__obj_str__(target)}不可被推动。`);
            else std.warn(`${this.name}.push`, `Target ${std.__obj_str__(target)} cannot be pushed.`);
        }

        target.__object__.pull(this.__object__);
        if (this.distance(target) > 1) return this.move(target, options);
        return this.move(target);
    }

    __umin__(array, callback, log = false) {
        /**
         * @param {Array} array -
         * @param {Function} callback - 用于计算的回调函数。
         * @param {boolean} [log=false] - 是否打印结果。
         **/
            // 计算callback(item) => number 的结果
        const results = [];
        for (let i = 0; i < array.length; i++) {
            results.push(callback(array[i], i));
        }
        if (log) {
            const prints = [];
            for (let i = 0; i < array.length; i++) prints.push({name: array[i].name, x: array[i].x, y: array[i].y, result: results[i]});
            std.log(`${this.name}.__umin__`, prints);
        }
        // 返回最小值的对应的原数组的值
        let _min_val = 9999;
        let _min_index = 0;
        for (let i = 0; i < results.length; i++) {
            if (results[i] < _min_val) {
                _min_val = results[i];
                _min_index = i;
            }
        }
        if (log) std.log(`${this.name}.__umin__`, `min_index:${_min_index}, min_val:${_min_val}`);
        return array[_min_index];
    }

    static LIMIT_SEARCH = {maxOps: 9};

    // 通用逻辑
    autoAttack(view_range = 50, wall = true) {
        /**
         * autoAttack - 管理单位的自动攻击逻辑。
         *
         * 该函数根据单位周围的敌人类型和优先级，决定单位的近战和远程攻击目标。
         * 它首先选择近战目标，然后选择远程目标，确保单位在近战和远程范围内有效攻击敌人。
         * 该函数还处理目标锁定，确保单位持续跟踪最接近的高优先级敌人。
         *
         * @param {number} [view_range=50] - 单位的视野范围。
         * @param {boolean} [wall=true] - 是否允许攻击墙壁。
         * @returns {Array} 返回一个包含两个元素的数组：
         *   - `locked`：锁定的目标，用于持续跟踪。
         *   - `target`：该tick被攻击的目标，如果附近被攻击的目标，返回null。
         */
        let target = null;
        let _melee_target = null;  // 仅用于记录近战目标
        let locked = null;
        let extreme = false;

        // 获取周围不同类型的敌人
        let [nears_battle, around_battle] = this.around(know.battles.enemies, true);
        let [nears_civilian, around_civilian,] = this.around(know.civilian.enemies);
        let [nears_spawns, around_spawns,] = this.around(get.spawns(st.enemy));
        let [nears_extensions, around_extensions,] = this.around(get.extensions(st.enemy));
        let [nears_towers, around_towers,] = this.around(get.towers(st.enemy));
        let [nears_ramparts, around_ramparts,] = this.around(get.ramparts(st.enemy));
        let [nears_walls, around_walls,] = wall ? this.around(get.walls()) : [[], []];

        // 选择近战攻击目标
        if (len(nears_battle)) {
            // 按照dynamicAttackPower + dynamicHealPower来排序
            target = this.__umin__(nears_battle, u => u.hp * (u.info.dynamicAttackPower + u.info.dynamicHealPower) ? 0.9 : 1);
            locked = nears_battle[0];
        } else if (len(nears_civilian)) target = nears_civilian[0];
        else if (len(nears_extensions)) target = nears_extensions[0];
        else if (len(nears_towers)) target = nears_towers[0];
        else if (len(nears_spawns)) target = nears_spawns[0];
        else if (len(nears_ramparts)) target = nears_ramparts[0];
        else if (len(nears_walls)) target = nears_walls[0];

        // 执行近战攻击
        if (target) this.attack(target, false);
        _melee_target = target;
        target = null;

        // 选择远程攻击目标
        if (!locked && len(around_battle)) {
            target = around_battle[0];

            if (this.info.dynamicPartsVector.melees) {
                // 避免重复计算
                const _calculated = {};
                // 避免极端情况
                const _ignores = {};
                locked = this.__umin__(around_battle, u => {
                    const hp_ratio = u.hits / u.hitsMax;

                    const tmp_dist = this.distance(u);
                    const dist_ratio = 1;

                    const path = get.path(this, u, Creep.LIMIT_SEARCH);
                    if (path.length <= 0) return tmp_dist * dist_ratio + hp_ratio;
                    // 判断目标点附近1范围和距离2的敌人数量
                    const p = Point(path[0].x, path[0].y);
                    // 检查是否已经计算过
                    let score = _calculated[`${p.x},${p.y}`];
                    if (score !== undefined) return score + hp_ratio;

                    const melees2 = [];
                    const melees1 = [];
                    for (const e of around_battle) {
                        if (p.distance(e) <= 1) melees1.push(e);
                        if (p.distance(e) <= 2) melees2.push(e);
                    }
                    // melees的melees的dynamicMelees总和越大，评分越高
                    let melees1_score = 0;
                    let melees2_score = 0;
                    for (const melee of melees1) melees1_score += melee.info.dynamicPartsVector.melees;
                    if (melees1_score > this.info.dynamicPartsVector.melees * 1.8) _ignores[`${u.x},${u.y}`] = true;
                    for (const melee of melees2) melees2_score += melee.fatigue <= 0 ? melee.info.dynamicPartsVector.melees : 0;
                    score = tmp_dist * dist_ratio + melees1_score + melees2_score * 0.25;
                    // print(`p:${p} melees1:${melees1.length} melees2:${melees2.length} score:${score} ${score + hp_ratio}`);
                    _calculated[`${p.x},${p.y}`] = score;
                    return score + hp_ratio;
                });
                // 避免极端情况
                if (_ignores[`${locked.x},${locked.y}`]) {
                    locked = null;
                    extreme = true;
                }
            } else if (!locked) locked = around_battle[0];
        } else if (len(around_civilian)) target = around_civilian[0];
        else if (len(around_extensions)) target = around_extensions[0];
        else if (len(around_towers)) target = around_towers[0];
        else if (len(around_spawns)) target = around_spawns[0];
        else if (len(around_ramparts)) target = around_ramparts[0];
        else if (len(around_walls)) target = around_walls[0];

        // 锁定目标
        if (locked === null && len(know.battles.enemies) > 0 && !extreme) {
            const tmp_es = this.inrange(know.battles.enemies, view_range);
            if (len(tmp_es) > 0) locked = this.closest(tmp_es);
        }

        // 执行远程攻击
        if (target) this.attack(target, false);

        // 返回锁定目标和近战目标
        return [locked, _melee_target ? _melee_target : target];
    }

    autoHeal(view_range = 50, lock_healer = true) {
        /**
         * autoHeal - 管理单位的自动治疗逻辑。
         *
         * 该函数根据单位周围的友方单位的健康状况，决定单位的治疗目标。
         * 它首先检查近战范围内的战斗单位，然后是周围范围内的战斗单位，
         * 接着是近战范围内的平民单位，最后是周围范围内的平民单位。
         * 如果没有立即的治疗目标，它会锁定视野范围内的最接近的战斗单位，
         * 以确保持续的治疗支持。
         *
         * @param {number} [view_range=50] - 单位的视野范围。
         * @returns {Array} 返回一个包含两个元素的数组：
         *   - `locked`：锁定的目标，用于持续跟踪。
         *   - `target`：当前治疗的目标。
         */
        let target = null;
        let locked = null;

        // 获取周围不同类型的友方单位
        let [nears_battles, around_battles] = this.around(know.battles.friends);
        let [nears_civilians, around_civilians] = this.around(know.civilian.friends);

        // 选择治疗目标
        if (len(nears_battles) && nears_battles[0].hits < nears_battles[0].hitsMax) {
            if (lock_healer || nears_battles[0].partsVector.heals <= 0) locked = nears_battles[0];
            target = nears_battles[0];
        } else if (len(around_battles) && around_battles[0].hits < around_battles[0].hitsMax) {
            target = around_battles[0];
            if (lock_healer || nears_battles[0].partsVector.heals <= 0) locked = around_battles[0];
        } else if (len(nears_civilians) && nears_civilians[0].hits < nears_civilians[0].hitsMax) {
            target = nears_civilians[0];
        } else if (len(around_civilians) && around_civilians[0].hits < around_civilians[0].hitsMax) {
            target = around_civilians[0];
        }

        // 锁定目标
        if (!locked) {
            const tmp_es = this.inrange(know.battles.friends, view_range, u => (this !== u && (lock_healer || u.partsVector.heals <= 0)));
            if (len(tmp_es) > 0) locked = this.closest(tmp_es);
        }

        // 执行治疗
        if (target) this.heal(target, false);

        // 返回锁定目标和治疗目标
        return [locked, target];
    }

    cancelMove() {
        /**
         * cancelMove - 取消单位的移动指令。
         * 
         * 可以取消目标的下述指令:
         *  .move
         *  .push
         *  .escape
         *  .patrol
         *  .follow
         *  .其他指令的move方法带来的移动指令。
         * 
         * *后续的上述指令不会受到影响，可以覆盖此。
         */
        this.__object__.moveTo(this.__object__.x, this.__object__.y);
    }
    
    details() {
        return this.info.details();
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            const capacityMax = this.store.getCapacity();
            const capacityString = ` 📦${this.store.getUsedCapacity()}/${capacityMax}`;
            return `(${this.name}${this._my_string_} ${this.x}◈${this.y} ⭐️${this.grade} ❤️${this.hits}/${this.hitsMax}${capacityMax ? capacityString : ""})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof Creep.__PROTO__;
    }

}

class Structure extends GameObject {
    static __PROTO__ = GameStructure;

    constructor(object) {
        super(object);
        this.hitsMax = object.hitsMax;
    }

    get hits() {
        return this.__object__.hits;
    }

    get hp() {
        return this.__object__.hits;
    }

    get hpMax() {
        return this.__object__.hitsMax;
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            return `(${this.name}${this._my_string_} ${this.x}◈${this.y} ❤️${this.hits}/${this.hitsMax})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof Structure.__PROTO__;
    }
}

class Resource extends GameObject {
    static __PROTO__ = GameResource;

    constructor(object) {
        super(object);
        this.resourceType = object.resourceType;
    }

    get amount() {
        return this.__object__.amount;
    }

    get energy() {
        return this.amount;
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}☠️)`;
        } else {
            return `(${this.name} ${this.x}◈${this.y} ${this.resourceType} 📦${this.amount})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof Resource.__PROTO__;
    }
}

class Source extends GameObject {
    static __PROTO__ = GameSource;

    constructor(object) {
        super(object);
        this.energyCapacity = object.energyCapacity;
    }

    get energy() {
        return this.__object__.energy;
    }

    get energyMax() {
        return this.energyCapacity;
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}☠️)`;
        } else {
            return `(${this.name} ${this.x}◈${this.y} 📦${this.energy}/${this.energyCapacity})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof Source.__PROTO__;
    }
}

class StructureContainer extends Structure {
    static __PROTO__ = GameStructureContainer;

    constructor(object) {
        super(object);
        this.cost = 200;
        this.capacity = this.energyMax;
    }

    get store() {
        return this.__object__.store;
    }

    get energy() {
        return this.__object__.store.getUsedCapacity(RESOURCE_ENERGY);
    }

    get energyMax() {
        return this.__object__.store.getCapacity(RESOURCE_ENERGY);
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            let decay_string = "";
            if (this.ticksToDecay !== undefined) decay_string = ` ⏳${this.ticksToDecay}t`;
            const energyMax = this.energyMax;
            return `(${this.name}${this._my_string_} ${this.x}◈${this.y} ❤️${this.hits}/${this.hitsMax} 📦${this.energy}/${energyMax >= 0 ? energyMax : "?"}${decay_string})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureContainer.__PROTO__;
    }
}

class StructureExtension extends StructureContainer {
    static __PROTO__ = GameStructureExtension;

    constructor(object) {
        super(object);
        this.cost = 200;
        this.capacity = this.energyMax;
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureExtension.__PROTO__;
    }
}

class _ScoreCollectorStore_ {

}

class ScoreCollector extends GameObject {
    static __PROTO__ = GameScoreCollector;

    constructor(object) {
        super(object);
        this.capacity = object.scoreTotal;
        this.scoreTotal = object.scoreTotal;
        this.resourceType = RESOURCE_SCORE;
    }

    get my() {
        return this.__object__.my;
    }

    get score() {
        return this.__object__.score;
    }

    get scoreMax() {
        return this.__object__.scoreTotal;
    }

    get scoreX() {
        return this.resourceType === RESOURCE_SCORE_X ? this.__object__.score : 0;
    }

    get scoreXMax() {
        return this.resourceType === RESOURCE_SCORE_X ? this.__object__.scoreTotal : 0;
    }

    get scoreY() {
        return this.resourceType === RESOURCE_SCORE_Y ? this.__object__.score : 0;
    }

    get scoreYMax() {
        return this.resourceType === RESOURCE_SCORE_Y ? this.__object__.scoreTotal : 0;
    }

    get scoreZ() {
        return this.resourceType === RESOURCE_SCORE_Z ? this.__object__.score : 0;
    }

    get scoreZMax() {
        return this.resourceType === RESOURCE_SCORE_Z ? this.__object__.scoreTotal : 0;
    }

    get store() {
        const resourceType = this.resourceType;
        const score = this.score;
        const scoreTotal = this.scoreTotal;

        const handler = {
            get: function (target, prop, receiver) {
                // 处理方法
                if (prop === 'getCapacity') {
                    return (res) => res === undefined ? scoreTotal : (res === resourceType ? scoreTotal : 0);
                } else if (prop === 'getFreeCapacity') {
                    return (res) => {
                        const free = scoreTotal - score;
                        return res === undefined ? free : (res === resourceType ? free : 0);
                    };
                } else if (prop === 'getUsedCapacity') {
                    return (res) => res === undefined ? score : (res === resourceType ? score : 0);
                } else {
                    // 处理资源类型属性访问
                    return prop === resourceType ? score : 0;
                }
            }
        };

        return new Proxy({}, handler);
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}☠️)`;
        } else {
            return `(${this.name} ${this.x}◈${this.y} ${this.resourceType} 📦${this.score}/${this.scoreTotal})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof ScoreCollector.__PROTO__;
    }
}

class AreaEffect extends GameObject {
    static __PROTO__ = GameAreaEffect;

    constructor(object) {
        super(object);
        this.effect = object.effect;
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}☠️)`;
        } else {
            let decay_string = "";
            if (this.ticksToDecay !== undefined) decay_string = ` ⏳${this.ticksToDecay}t`;
            return `(${this.name} ${this.x}◈${this.y} ${this.effect}${decay_string})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof AreaEffect.__PROTO__;
    }
}

class StructureWall extends Structure {
    static __PROTO__ = GameStructureWall;

    constructor(object) {
        super(object);
        this.cost = 100;
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureWall.__PROTO__;
    }
}

class StructureRampart extends Structure {
    static __PROTO__ = GameStructureRampart;

    constructor(object) {
        super(object);
        this.cost = 200;
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureRampart.__PROTO__;
    }
}

class StructureRoad extends Structure {
    static __PROTO__ = GameStructureRoad;

    constructor(object) {
        super(object);
        this.cost = get.terrain(this.x, this.y) === TERRAIN_SWAMP ? 50 : 10;
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureRoad.__PROTO__;
    }
}

class StructureTower extends StructureContainer {
    static __PROTO__ = GameStructureTower;

    constructor(object) {
        super(object);
        this.cost = 1250;
        this.capacity = this.energyMax;
    }

    get cooldown() {
        return this.__object__.cooldown;
    }

    measure(target) {
        /// 计算对目标的伤害或是治疗量
        let dist = this.distance(target);
        // Attack effectiveness	150 hits at range ≤5 to 37 hits at range ≥20
        // Heal effectiveness	100 hits at range ≤5 to 25 hits at range ≥20
        if (dist > 50) return 0;

        dist = math.clamp(dist, 5, 20);

        if (target.my) {
            return math.lerp(100, 25, (dist - 5) / 15);
        } else {
            return math.lerp(150, 37, (dist - 5) / 15);
        }
    }

    attack(target) {
        return this.__object__.attack(target.__object__);
    }

    heal(target) {
        return this.__object__.heal(target.__object__);
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            const energyMax = this.energyMax;
            return `(${this.name}${this._my_string_} ${this.x}◈${this.y} ❤️${this.hits}/${this.hitsMax} 📦${this.energy}/${energyMax >= 0 ? energyMax : "?"} 🔄${this.cooldown})t`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureTower.__PROTO__;
    }

}

class SpawnRecipeManager {
    constructor() {
        this.data = {};
    }

    // 添加数组到对应长度的组中
    add(arr_or_has_recipe) {
        const obj = arr_or_has_recipe.recipe ? arr_or_has_recipe : {recipe: arr_or_has_recipe};
        const length = obj.recipe.length;
        if (!this.data[length]) {
            this.data[length] = []; // 每个长度对应一个数组
        }
        this.data[length].push(obj); // 插入的对象包含 recipe 属性
    }

    // 弹出指定长度和索引的数组
    pop(length, index) {
        if (!this.data[length] || index < 0 || index >= this.data[length].length) {
            return undefined;
        }
        const popped = this.data[length].splice(index, 1);
        if (this.data[length].length === 0) {
            delete this.data[length];
        }
        return popped && popped[0]; // 返回弹出的对象
    }

    // 获取指定长度和索引的数组
    get(length, index) {
        if (!this.data[length] || index < 0 || index >= this.data[length].length) {
            return undefined;
        }
        return this.data[length][index]; // 返回对象
    }

    /**
     * 在给定的数组中查找匹配的索引。
     *
     * @param {Array} arr - 需要查找的数组。
     * @returns {Number} - 匹配的索引，如果未找到则返回 -1。
     */
    index(arr) {
        // 获取输入数组的长度
        const length = arr.length;

        // 从数据对象中获取与数组长度匹配的可能项
        const possibleMatches = this.data[length];

        // 如果没有可能的匹配项，返回 -1
        if (!possibleMatches) return -1;

        // 初始化一个对象，用于记录在当前迭代中需要跳过的匹配项
        const skips = {};

        // 初始化结果变量
        let result_index = -1;
        let result_flag = false;

        // 遍历输入数组的每个元素
        for (let i = 0; i < length; i++) {
            result_flag = false; // 重置结果标志

            // 遍历每个可能的匹配项
            for (let j = 0; j < possibleMatches.length; j++) {
                // 如果匹配项在当前迭代中被跳过，继续下一个
                if (skips[j]) continue;

                // 检查当前元素是否匹配
                if (possibleMatches[j].recipe[i] !== arr[i]) {
                    // 如果不匹配，标记为跳过
                    skips[j] = true;
                } else {
                    // 如果匹配，更新结果索引并设置标志
                    result_index = j;
                    result_flag = true;
                }
            }

            // 如果在任何位置没有找到匹配项，提前退出
            if (!result_flag) break;
        }

        // 如果找到了匹配项，返回其索引；否则返回 -1
        return result_flag ? result_index : -1;
    }

    // 移除指定的数组
    remove(arr) {
        const length = arr.length;
        const idx = this.index(arr);
        if (idx !== -1) {
            this.pop(length, idx);
        }
    }

    // 获取当前数据结构
    getData() {
        return this.data;
    }
}

class StructureSpawn extends StructureContainer {
    static __PROTO__ = GameStructureSpawn;

    constructor(object) {
        super(object);
        this.cost = 3000;
        this.capacity = 1000;
        this.__current__ = {
            creep: null,
            name: null,
            recipe: [],
            directions: [],
            nextTick: 0,
        }
        this.__records__ = new SpawnRecipeManager();
    }

    get spawning() {
        return this.__object__.spawning;
    }

    get needTime() {
        if (this.__object__.spawning) return this.__object__.spawning.needTime;
        else return 0;
    }

    get remainingTime() {
        if (this.__object__.spawning) return this.__object__.spawning.remainingTime;
        else return -1;
    }

    get creep() {
        if (this.__object__.spawning) return this.__object__.creep;
        else return null;
    }

    cancel() {
        if (this.__object__.spawning) {
            this.__records__.remove(this.__current__.recipe);
            this.__current__ = {
                creep: null,
                name: null,
                recipe: [],
                directions: [],
                nextTick: 0,
            }
            return this.__object__.spawning.cancel();
        }
        return ERR_NOT_FOUND;
    }

    __compareStringArrays__(arr1, arr2) {
        // 如果长度不相等，立即返回false
        if (arr1.length !== arr2.length) {
            return false;
        }
        // 如果两个数组长度均为0，立即返回true
        if (arr1.length === 0) {
            return true;
        }
        // 如果两个数组长度均为1，直接比较唯一元素
        if (arr1.length === 1) {
            return arr1[0] === arr2[0];
        }
        // 遍历数组，逐项比较
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        // 如果所有项都相同，返回true
        return true;
    }

    create(recipe, creep_name = null, optimise = true, direction = null) {
        /**
         * create - 从 spawn 使用指定的配方创建一个 creep。
         *
         * @param {String[]} recipe - 用于创建 creep 的身体部位数组。
         * @param {string} [creep_name=null] - 可选的 creep 名称。
         * @param {boolean} [optimise=true] - 是否优化配方以提高功能完存率。
         * @param {number} [direction=null] - 可选的方向参数，用于指定 creep 诞生时的方向。
         *               如果诞生时指定的方向被占据，会自动尝试相邻的方向。如果仍然无法诞生，该参数会被忽略。
         * @returns {Creep|number} 返回新创建的 creep 或剩余的孵化时间(>0)，或错误代码(<0)。
         */

        // 检查第一帧(remainingTime is 0)重复同一recipe的情况
        if (this.remainingTime === -1 && get.now < this.__current__.nextTick) {
            return this.__current__.recipe.length * CREEP_SPAWN_TIME - 1;
        }
        // 空闲 或 与当前配方不同
        const equal = this.__compareStringArrays__(this.__current__.recipe, recipe);
        if (this.remainingTime > 0 && equal) return this.__object__.spawning.remainingTime - 1;
        if (this.remainingTime <= 0 || !equal) {
            // 检查__records__中是否有相同的配方
            const index = this.__records__.index(recipe);
            if (index !== -1) {

                const result = this.__records__.get(recipe.length, index);

                this.__records__.pop(recipe.length, index);
                // console.log("creep:", result.creep);
                return new Creep(result.creep);
            }
        }

        if (this.remainingTime <= 0) {  // 此处已经排除了先前生产过的情况
            // 优化配方
            const raw_recipe = recipe;
            if (optimise) recipe = PartsVector.partsOptimise(recipe);

            // 尝试孵化 creep
            const result = this.__object__.spawnCreep(recipe);
            if (result.error !== undefined) return result.error;
            // console.log("result:", result);
            if (creep_name) result.object.name = creep_name;
            this.__current__ = {
                creep: result.object,
                name: creep_name,
                recipe: raw_recipe,
                directions: direction !== null ? get.expandDirection(direction) : [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT],
                nextTick: get.now + 3,
                costTime: recipe.length * CREEP_SPAWN_TIME,
                finishTime: get.now + recipe.length * CREEP_SPAWN_TIME,
            }
            this.__records__.add(this.__current__);
            // console.log("set Directions:", this.__current__.directions);
            this.__object__.setDirections(this.__current__.directions);
            return recipe.length * CREEP_SPAWN_TIME - 1;  // 返回剩余孵化时间
        }

        return ERR_BUSY;
    }

    __compareCurrent__(current, record) {
        // 子函数：判断两个记录是否完全一致
        // 比较 recipe
        if (!this.__compareStringArrays__(current.recipe, record.recipe)) {
            return false;
        }

        // 比较 name
        if (current.name !== record.name) {
            return false;
        }

        // 比较 finishTime
        return current.finishTime === record.finishTime;
    }

    seek(recipe, creep_name = null, optimise = true, direction = null) {
        /**
         * seek - 检查有无给定参数下完成孵化的 creep。如果有，①若孵化完毕则返回该 creep(并从记录中移除)；②孵化中返回true；③没有记录返回false。
         *
         * 所有参数和返回值与 create 方法相同。
         */

            // 检查 __records__ 中是否有匹配的 recipe
        const index = this.__records__.index(recipe);
        if (index !== -1) {
            const record = this.__records__.get(recipe.length, index);
            if (record) {
                // 如果孵化完成（当前时间大于等于 finishTime），返回对应的 creep 并从记录中移除
                if (get.now >= record.finishTime) {
                    this.__records__.pop(recipe.length, index);

                    // 如果目标 record 与 current 的内容完全一致，将 current 置空
                    if (this.__compareCurrent__(this.__current__, record)) {
                        this.__current__ = {
                            creep: null,
                            name: null,
                            recipe: [],
                            directions: [],
                            nextTick: 0,
                            costTime: 0,
                            finishTime: 0,
                        };
                    }

                    return new Creep(record.creep);
                } else {
                    // 如果孵化未完成，返回 true
                    return true;
                }
            }
        }

        // 如果没有找到匹配的记录，返回 false
        return false;
    }

    static CLOCKS = [
        "🕛", "🕐", "🕑", "🕒", "🕓", "🕔",
        "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛"
    ];

    static PERIOD = 1.0 / 13;

    toString() {
        if (!this.__object__.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            let time_string = "☕"
            if (this.remainingTime > 0) {
                const ratio = 1 - this.remainingTime / this.__current__.costTime;
                time_string = `${StructureSpawn.CLOCKS[Math.floor(ratio / StructureSpawn.PERIOD)]}${this.remainingTime}t`;
            }
            const energyMax = this.energyMax;
            return `(${this.name}${this._my_string_} ${this.x}◈${this.y} ❤️${this.hits}/${this.hitsMax} 📦${this.energy}/${energyMax >= 0 ? energyMax : "?"} ${time_string})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof StructureSpawn.__PROTO__;
    }
}

class ConstructionSite extends GameObject {
    static __PROTO__ = GameConstructionSite;

    constructor(object) {
        super(object);
        this.type = undefined;  // 用于记录建筑类型

    }

    get py_metatype() {
        return this.type;
    }

    static plan(x, y, building_type, single = false) {
        /**
         * site - 在指定位置创建一个建筑工地。
         *
         * 该函数用于在游戏地图上的指定位置创建一个建筑工地。如果 `single` 参数为 `true`，
         * 它会确保没有其他相同类型的工地已经存在于该位置。如果尝试创建重复的工地，
         * 则返回 `ERR_NAME_EXISTS`。否则，它会尝试创建工地并返回结果。
         *
         * @param {number} x - 建筑工地的 x 坐标。
         * @param {number} y - 建筑工地的 y 坐标。
         * @param {object} building_type - 要创建的建筑类型。
         * @param {boolean} [single=false] - 是否确保工地唯一。如果为 `true`，则不能创建重复的工地。
         * @returns {ConstructionSite|number} 返回创建的工地对象或错误代码。
         */
        if (!building_type || !building_type.__PROTO__) return ERR_INVALID_ARGS;
        // 如果 single 为 true，检查是否已经存在相同类型的工地
        if (single) {
            const exists = get.site(function (ste) {
                return ste.x === x && ste.y === y && ste.type === building_type;
            });
            if (exists) {
                return ERR_NAME_EXISTS;
            }
        }

        // 尝试创建建筑工地
        const result = createConstructionSite(x, y, building_type.__PROTO__);
        if (result.object !== undefined) {
            // 如果成功，返回工地对象
            const site = new ConstructionSite(result.object);
            site.type = building_type;
            return site;
        }
        // 如果失败，返回错误代码
        return result.error;
    }

    get progressTotal() {
        return this.__object__.progressTotal;
    }

    get progress() {
        return this.__object__.progress;
    }

    get structure() {
        return this.__object__.structure;
    }

    get percentage() {
        return this.progress / this.progressTotal;
    }


    remove() {
        return this.__object__.remove();
    }

    toString() {
        if (!this.__object__.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            return `(${this.name}:${this.type.name}${this._my_string_} ${this.x}◈${this.y} 🔧${this.progress}/${this.progressTotal})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof ConstructionSite.__PROTO__;
    }

}

class Flag extends GameObject {
    static __PROTO__ = GameFlag;

    constructor(object) {
        super(object);
    }

    toString() {
        if (!this.exists) {
            return `(${this.name}${this._my_string_}☠️)`;
        } else {
            return `(${this.name}${this._my_string_} ${this.x}◈${this.y})`;
        }
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof Flag.__PROTO__;
    }
}

class BodyPart extends GameObject {
    static __PROTO__ = GameBodyPart;

    constructor(object) {
        super(object);
        this.type = object.type;

        //
        this.py_metatype = this.type;
    }

    toString() {
        let decay_string = "";
        if (this.ticksToDecay !== undefined) decay_string = ` ⏳${this.ticksToDecay}t`;
        return `(${this.name}:${this.type} ${this.x}◈${this.y}${decay_string})`;
    }

    static [Symbol.hasInstance](obj) {
        return obj && obj.__object__ instanceof BodyPart.__PROTO__;
    }
}

const PYEMBED_TABLE = {
    'Creep': Creep,
    'ConstructionSite': ConstructionSite,
    'StructureSpawn': StructureSpawn,
    'StructureExtension': StructureExtension,
    'StructureRoad': StructureRoad,
    'StructureWall': StructureWall,
    'StructureRampart': StructureRampart,
    'StructureContainer': StructureContainer,
    'StructureTower': StructureTower,
    'Structure': Structure,
    'Source': Source,
    'Resource': Resource,
    'BodyPart': BodyPart,
    'Flag': Flag,
    'ScoreCollector': ScoreCollector,
    'AreaEffect': AreaEffect,
    'GameObject': GameObject,
};

const std = {
    __obj_str__: function (obj) {
        /**
         * 这个函数尝试对一个obj进行字符串化
         * */
        if (obj === undefined) return 'undefined';
        if (obj === null) return 'null';
        try {
            return obj.toString();
        } catch (e) {
            if (obj.name !== undefined) return `$${obj.name}`;
            if (obj.id !== undefined) return `$${obj.id}`;
            return `$${typeof obj}`;
        }
    },
    __expand_composite_as_list__: function (filter_composite) {
        var tmp = [];
        if (isinstance(filter_composite, tuple([tuple, list]))) {
            for (var each of filter_composite)
                tmp.extend(std.__expand_composite_as_list__(each));
            return tmp;
        }
        if (isinstance(filter_composite, set))
            return std.__expand_composite_as_list__(py_next(py_iter(filter_composite)));
        return [filter_composite];
    },
    __generate_combo_js_eval__: function (filter_composite, fid) {
        if (isinstance(filter_composite, list)) {
            return ('(' + ' || '.join((function () {
                var __accu0__ = [];
                for (var each of filter_composite) {
                    __accu0__.append(std.__generate_combo_js_eval__(each, fid));
                }
                return py_iter(__accu0__);
            })())) + ')';
        }
        if (isinstance(filter_composite, tuple)) {
            return ('(' + ' && '.join((function () {
                var __accu0__ = [];
                for (var each of filter_composite) {
                    __accu0__.append(std.__generate_combo_js_eval__(each, fid));
                }
                return py_iter(__accu0__);
            })())) + ')';
        }
        if (isinstance(filter_composite, set))
            return (' !(' + std.__generate_combo_js_eval__(py_next(py_iter(filter_composite)), fid)) + ')';
        return ('%' + fid [filter_composite]) + '%';

    },
    __expand_memory__: dict({}),
    combo: function (filter_composite) {
        const memory_key = str(filter_composite);
        const fn = std.__expand_memory__.py_get(memory_key, null);
        if (fn) return fn;
        const fn_ids = dict({});
        const id_fns = dict({});
        const _ = std.__expand_composite_as_list__(filter_composite);
        for (var [f_id, each_fn] of enumerate(set(_))) {
            f_id++;
            fn_ids [each_fn] = f_id;
            id_fns [f_id] = each_fn;
        }
        var _eval_str = std.__generate_combo_js_eval__(filter_composite, fn_ids);
        var _inner = function (obj) {
            var eval_str = _eval_str + '';
            for (var [fn_id, func] of id_fns.py_items()) {
                eval_str = eval_str.replace('%' + fn_id + '%', String(!!func(obj)));
                // pass;
            }
            return eval(eval_str);
        };
        std.__expand_memory__ [memory_key] = _inner;
        return _inner;
    },
    log: function (caller_name, ...args) {
        console.log("[" + caller_name, " [33m" + "Log" + "[0m" + "]:", ...args)
    },
    info: function (caller_name, ...args) {
        console.log("[" + caller_name, " [42m" + "Info" + "[0m" + "]:", ...args)
    },
    warn: function (caller_name, ...args) {
        console.log("[" + caller_name, " [43m" + "Warn" + "[0m" + "]:", ...args)
    },
    error: function (caller_name, ...args) {
        throw new Error("[" + caller_name + " [41m" + "Error" + "[0m" + "]: " + args.join(" "))
    },
    ansi_color: function (r, g = undefined, b = undefined, bg = false) {
        /**
         * ansi_color - 生成 ANSI 颜色代码字符串。
         *
         * 该函数根据提供的 RGB 值或十六进制颜色字符串生成 ANSI 颜色代码。
         * 它支持生成前景颜色和背景颜色代码。如果输入无效或 RGB 值超出范围，
         * 它会报告错误并返回 ANSI 重置代码。
         *
         * @param {string|number} r - 十六进制颜色字符串（以 `#` 开头）或红色分量（0-255）。
         * @param {number} [g=undefined] - 如果 `r` 是数字，则为绿色分量（0-255）。如果 `r` 是字符串，则为背景颜色标志。
         * @param {number} [b=undefined] - 如果 `r` 是数字，则为蓝色分量（0-255）。
         * @param {boolean} [bg=false] - 是否生成背景颜色代码。
         * @returns {string} ANSI 颜色代码字符串或 ANSI 重置代码 `JS_RESET`，如果输入无效。
         */
        let red, green, blue;

        // 如果第一个参数是字符串，假设是十六进制颜色字符串
        if (typeof r === 'string' && r.startsWith('#')) {
            red = parseInt(r.slice(1, 3), 16);
            green = parseInt(r.slice(3, 5), 16);
            blue = parseInt(r.slice(5, 7), 16);
            bg = g;
        }
        // 否则，假设是三个 RGB 值
        else if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number') {
            red = r;
            green = g;
            blue = b;
        } else {
            if (LANGUAGE === 'cn') {
                std.error('ansi_color', '无效的颜色输入', r, g, b);
            } else {
                std.error('ansi_color', 'Invalid color input', r, g, b);
            }
            return JS_RESET;
        }

        // 检查 RGB 值是否在有效范围内
        if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
            if (LANGUAGE === 'cn') {
                std.error('ansi_color', '无效的 RGB 值', r, g, b);
            } else {
                std.error('ansi_color', 'Invalid RGB value', r, g, b);
            }
            return JS_RESET;
        }

        // 构造 ANSI 颜色代码字符串
        return bg ? `\x1b[48;2;${red};${green};${blue}m` : `\x1b[38;2;${red};${green};${blue}m`;
    },

    WRAP_END_TABLE: {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>',
        '"': '"',
        "'": "'"
    },
    wrap_bracket: function (str, bracket, color) {
        /**
         * @description: 在字符串两端添加指定的括号和颜色
         * @param {string} str - 要添加括号的字符串
         * @param {string} bracket - 括号类型，例如'(', '[', '{', '<', '"', "'"中的一种
         * @param {string} color - 颜色代码，例如'\x1b[32m'表示绿色
         * */
        const end_bracket = std.WRAP_END_TABLE [bracket];
        if (end_bracket === undefined)
            if (LANGUAGE === 'cn') std.error('wrap_bracket', '括号类型错误:', bracket);
            else std.error('wrap_bracket', 'Bracket type error:', bracket);

        return `${color}${bracket}${JS_RESET}${str}${color}${end_bracket}${JS_RESET}`;
    },

    print_map: function (rect_) {
        /**
         * print_map - 打印游戏地图的指定矩形区域。
         *
         * 该函数遍历地图的指定矩形区域，从 `rect_.top` 到 `rect_.bottom` 和从 `rect_.left` 到 `rect_.right`。
         * 对于每个位置 (x, y)，它从 `COST_MATRIX` 中获取值，并根据值的不同使用不同的字符表示：
         * - 数字（<10）：直接打印数字。
         * - 10：打印 `#`。
         * - 64：打印 `C`。
         * - 其他情况：打印 `X`。
         * 每一行构建完毕后，使用 `console.log` 打印该行。
         *
         * @param {object} rect_ - 定义要打印的矩形区域的对象，包含 `top`、`bottom`、`left` 和 `right` 属性。
         * @returns {void} 无返回值。输出直接打印到控制台。
         */
        /// 这个函数用于打印地图中的一个矩形区域，<10的部分使用数字填充, 10使用#填充, 64使用C填充, 其他使用X填充。
        for (var y = rect_.top; y <= rect_.bottom; y++) {
            if (y < 0 || y >= 100) continue;  // 跳过无效的 y 坐标
            var line = '';
            for (var x = rect_.left; x <= rect_.right; x++) {
                if (x < 0 || x >= 100) continue;  // 跳过无效的 x 坐标
                var value = get.COST_ARRAY2D[y][x];  // 获取当前位置的值
                if (value < 10) line += value.toString() + " ";  // 数字 <10
                else if (value === 10) line += '# ';  // 数字 10
                else if (value <= 200) line += 'Z ';  // 数字 50
                else if (value === 254) line += 'C ';  // 数字 254
                else line += 'X ';  // 数字 255
            }
            console.log(line);  // 打印构建的行
        }
    },
    broadcast: function (arr, func = (x, y, val) => val, start = {x: 0, y: 0}, end = undefined) {
        /**
         * broadcast - 对二维数组的指定区域中的每个元素应用函数，并将结果存储回原数组。
         *
         * 该函数遍历二维数组 `arr` 的指定区域，从 `start` 到 `end`，对每个元素应用 `func` 函数。
         * `func` 函数接受当前元素的 `x` 和 `y` 坐标以及当前值 `val`，并返回新值，该值将存储回 `arr[y][x]`。
         * 如果 `end` 未指定，则 `end` 会被设置为 `arr` 的形状。
         *
         * @param {number[][]} arr - 要操作的二维数组。
         * @param {function(x:number, y:number, val:number): number} [func=(x, y, val)=>val] - 要应用到每个元素的函数。
         * @param {object} [start={x:0, y:0}] - 指定起始坐标 `{x:0, y:0}`。
         * @param {object} [end=undefined] - 指定结束坐标。如果为 `undefined`，则设置为 `arr` 的形状。
         * @returns {void} 无返回值。原数组 `arr` 被修改。
         */
        /// 允许对一个2d数组中指定区域的元素进行逐个操作，并将返回值存储在原数组中。
        if (end === undefined) end = get.shape(arr);
        for (let x = start.x; x < end.x; x++) {
            for (let y = start.y; y < end.y; y++) {
                arr[y][x] = func(x, y, arr[y][x]);
            }
        }
    },

    __cpu_limit__: Math.floor(ARENA_CPU_TIME_LIMIT / 1000),
    __cpu_first_limit__: Math.floor(ARENA_CPU_TIME_LIMIT_FIRST_TICK / 1000000),
    show_welcome: function () {
        // 获取当前竞技场的信息
        const info = get.arena();
        const arena_name = info.py_name.__getslice__(0, 2, 1).lower();

        // 根据不同的竞技场名称，调整背景颜色
        var bg_color = '\x1b[48;2;45;45;45m';
        if (arena_name === 'sp') bg_color = '\x1b[48;2;45;64;39m';
        else if (arena_name === 'ca') bg_color = '\x1b[48;2;38;50;80m';
        else if (arena_name === 'co') bg_color = '\x1b[48;2;70;46;31m';

        // 根据语言设置，打印欢迎信息
        if (LANGUAGE === 'cn') {
            console.log(bg_color + '---------- 欢迎来到' + '\x1b[1m\x1b[38;2;205;85;85mScreeps \x1b[38;2;65;105;225mArena\x1b[22m' + '\x1b[37m' + '! ----------' + '\x1b[0m');
            console.log('工具库版本: ' + __VERSION__ + ', Python版本: ' + __PYTHON_VERSION__);
            console.log('作者: ' + `${__AUTHOR_CN__} | ${__AUTHOR__}`, '\n');
        } else {
            console.log(bg_color + '---------- Welcome to ' + '\x1b[1m\x1b[38;2;205;85;85mScreeps \x1b[38;2;65;105;225mArena\x1b[22m' + '\x1b[37m' + '! ----------' + '\x1b[0m');
            console.log('Package Version: ' + __VERSION__ + ', Python Version: ' + __PYTHON_VERSION__);
            console.log('Author: ' + __AUTHOR__, '\n');
        }
    },
    show_usage: function () {
        const game_tick = get.ticks();

        // 根据语言设置，打印硬件使用情况的标题
        if (LANGUAGE === 'cn') console.log('[性能使用情况]');
        else console.log('[Hardware Usage]');

        // 显示CPU使用情况
        if (game_tick <= 1) {
            var v = round(get.cpu() / 1000000);
            var color = (v < 800 ? (v < 600 ? '\x1b[32m' : '\x1b[33m') : '\x1b[31m');
            console.log('cpu: ' + (color + v.toString()) + '\x1b[0m' + ' ms / {} ms'.format(std.__cpu_first_limit__));
        } else {
            var v = round(get.cpu() / 1000);
            var color = (v < 75000 ? (v < 50000 ? '\x1b[32m' : '\x1b[33m') : '\x1b[31m');
            console.log('cpu: ' + (color + v.toString()) + '\x1b[0m' + ' us / {} us'.format(std.__cpu_limit__));
        }

        // 显示内存使用情况
        const heap = get.heap();
        var v = round(heap.used_heap_size / 1024);
        var v_limit = round(heap.heap_size_limit / 1024);
        var color = (v < v_limit * 0.6 ? '\x1b[32m' : (v < v_limit * 0.8 ? '\x1b[33m' : '\x1b[31m'));
        if (LANGUAGE === 'cn') {
            console.log('内存: ' + (color + v.toString()) + '\x1b[0m' + ' KB / ' + v_limit + ' KB');
        } else {
            console.log('heap: ' + (color + v.toString()) + '\x1b[0m' + ' KB / ' + v_limit + ' KB');
        }
    },
}

const get = {
    now: 0,
    ticks: getTicks,
    cpu: getCpuTime,
    heap: getHeapStatistics,
    byid: getObjectById,
    handle: function () {
        get.now = getTicks();
        get.ALL_THIS_TICK_TABLE = {};
    },
    cpu_us: function () {
        return Math.floor(getCpuTime() / 1000);
    },
    get arena() {
        return function () {
            var tmp = UsrObject();
            tmp.py_name = ARENA_NAME;
            tmp.level = ARENA_LEVEL;
            tmp.season = ARENA_SEASON;
            tmp.ticksLimit = ARENA_TICKS_LIMIT;
            tmp.cpuTimeLimit = ARENA_CPU_TIME_LIMIT;
            tmp.cpuTimeLimitFirstTick = ARENA_CPU_TIME_LIMIT_FIRST_TICK;
            return tmp;
        };
    },
    path: function (obj, target, options = null) {
        if (target === null || target === undefined) {
            if (LANGUAGE === "cn") std.warn('get.path', '目标{target}为空。返回null');
            else std.warn('get.path', 'target is NA. Return null');
            return null;
        }
        if (obj === null || obj === undefined) {
            if (LANGUAGE === "cn") std.warn('get.path', '对象为空{obj}。返回null');
            else std.warn('get.path', 'obj is NA. Return null');
            return null;
        }
        var path_res = searchPath(obj, target, options);
        // if (path_res.incomplete) {
        //     if (LANGUAGE === "cn") std.warn('get.path', '目标{' + target.id.toString() + '}的路径不完整。');
        //     else std.warn('get.path', 'Path to target:', target.id, ' is incomplete.');
        // }
        return path_res.path;
    },
    __getFilterFn__: function (filter_fn_id_x_l, y_t, w, h, src_tip) {
        if (filter_fn_id_x_l === undefined || filter_fn_id_x_l === null) {
            return null;
        }

        if (isinstance(filter_fn_id_x_l, tuple([list, tuple, set]))) {
            return std.combo(filter_fn_id_x_l);
        } else if (isinstance(filter_fn_id_x_l, str)) {
            return (obj) => obj.id === filter_fn_id_x_l;
        } else if (isinstance(filter_fn_id_x_l, int)) {
            if (!isinstance(y_t, int)) {
                if (LANGUAGE === "cn") {
                    std.warn('get.' + src_tip, `参数filter_fn_id_x_l(${filter_fn_id_x_l})为整数，但y_t不是整数(${y_t})。将返回空。`);
                } else {
                    std.warn('get.' + src_tip, `Argument 'filter_fn_id_x_l'(${filter_fn_id_x_l}) is an integer, but 'y_t' is not an integer(${y_t}). Return empty.`);
                }
                return false; // 返回一个特殊的标记，表示需要返回空数组
            }

            if (!isinstance(w, int)) {
                return (obj) => obj.x === filter_fn_id_x_l && obj.y === y_t;
            } else {
                if (!isinstance(h, int)) {
                    if (LANGUAGE === "cn") {
                        std.warn('get.' + src_tip, `参数filter_fn_id_x_l(${filter_fn_id_x_l})、y_t(${y_t})、w(${w})为整数，但h不是整数(${h})。将返回空。`);
                    } else {
                        std.warn('get.' + src_tip, `Argument 'filter_fn_id_x_l'(${filter_fn_id_x_l})、'y_t'(${y_t})、'w'(${w}) are integers, but 'h' is not an integer(${h}). Return empty.`);
                    }
                    return false; // 返回一个特殊的标记，表示需要返回空数组
                } else {
                    return (obj) => obj.x >= filter_fn_id_x_l && obj.x < filter_fn_id_x_l + w && obj.y >= y_t && obj.y < y_t + h;
                }
            }
        }

        return filter_fn_id_x_l;
    },
    find: function (objs, filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        if (len(objs) === 0) {
            return null;
        }

        let filter_fn = null;
        if (filter_fn_id_x_l !== undefined && filter_fn_id_x_l !== null) {
            filter_fn = get.__getFilterFn__(filter_fn_id_x_l, y_t, w, h, "find");
            if (filter_fn === false) { // 如果参数异常，直接返回null
                return null;
            }
        } else {
            if (LANGUAGE === "cn") std.warn('get.find', '过滤函数为空。默认返回第一个对象');
            else std.warn('get.find', 'filter_fn is NA. Return first object');
        }

        if (filter_fn !== null) {
            objs = filter(filter_fn, objs);
        }

        return len(objs) ? objs[0] : null;
    },

    filter: function (objs, filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        if (len(objs) === 0) {
            return objs;
        }

        let filter_fn = null;
        if (filter_fn_id_x_l !== undefined && filter_fn_id_x_l !== null) {
            filter_fn = get.__getFilterFn__(filter_fn_id_x_l, y_t, w, h, "filter");
            if (filter_fn === false) { // 如果参数异常，直接返回原数组
                return objs;
            }
        } else {
            if (LANGUAGE === "cn") std.warn('get.filter', '过滤函数为空。返回原数组|列表。');
            else std.warn('get.filter', 'filter_fn is NA. Return the original array|list.');
        }

        if (filter_fn !== null) {
            return filter(filter_fn, objs);
        }

        return objs;
    },
    terrain: function (x_or_point, y) {
        if (x_or_point === null || x_or_point === undefined) {
            if (LANGUAGE === "cn") std.warn('get.terrain', 'x_or_point为空。返回null');
            else std.warn('get.terrain', 'x_or_point is NA. Return null');
            return null;
        }
        if (y === null || y === undefined) {
            if (x_or_point.x === undefined || x_or_point.y === undefined) {
                if (LANGUAGE === "cn") std.warn('get.terrain', 'x_or_point不是一个点。返回null');
                else std.warn('get.terrain', 'x_or_point is not a point. Return null');
                return null;
            }

            return getTerrainAt(x_or_point);
        }
        return getTerrainAt(Point(x_or_point, y));
    },
    terrainCost: function (x_or_point, y) {
        if (x_or_point === null || x_or_point === undefined) {
            if (LANGUAGE === "cn") std.warn('get.terrain', 'x_or_point为空。返回null');
            else std.warn('get.terrain', 'x_or_point is NA. Return null');
            return null;
        }
        if (y === null || y === undefined) {
            if (x_or_point.x === undefined || x_or_point.y === undefined) {
                if (LANGUAGE === "cn") std.warn('get.terrain', 'x_or_point不是一个点。返回null');
                else std.warn('get.terrain', 'x_or_point is not a point. Return null');
                return null;
            }

            return getTerrainAt(x_or_point);
        }
        const tt = getTerrainAt(Point(x_or_point, y));
        if (tt === TERRAIN_WALL) return 255;
        if (tt === TERRAIN_SWAMP) return 10;
        return 2;
    },
    ALL_THIS_TICK_TABLE: {},
    all: function (p_type, filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        let objs = get.ALL_THIS_TICK_TABLE[p_type.name];
        if (objs === undefined) {
            objs = getObjectsByPrototype(p_type);
            const tmp = [];

            for (const obj of objs) {
                if (!obj.__py__) {
                    const pyembed = PYEMBED_TABLE[obj.constructor.name];
                    if (pyembed !== undefined) {
                        obj.__py__ = new pyembed(obj);
                    } else {
                        obj.__py__ = obj;
                        obj.__object__ = obj;
                    }
                }
                if (obj instanceof GameCreep) {
                    // if ((obj.my === false) || (obj.__spawn__ !== undefined)) {
                    if (obj.__py__.birthed) {
                        tmp.append(obj.__py__);
                    }
                } else tmp.append(obj.__py__);
            }
            objs = tmp;
        }

        const filter_fn = get.__getFilterFn__(filter_fn_id_x_l, y_t, w, h, "all");
        if (filter_fn === false) { // 如果返回false，表示参数异常，直接返回空数组
            return [];
        } else if (filter_fn !== null) { // 如果返回有效的过滤函数，则进行过滤
            objs = filter(filter_fn, objs);
        }
        return objs;
    },
    one: function (p_type, filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        var objs = get.all(p_type, filter_fn_id_x_l, y_t, w, h);
        if (len(objs) === 0) {
            return null;
        }
        return objs[0];
    },
    creeps: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameCreep, filter_fn_id_x_l, y_t, w, h);
    },
    creep: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameCreep, filter_fn_id_x_l, y_t, w, h);
    },
    spawns: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureSpawn, filter_fn_id_x_l, y_t, w, h);
    },
    spawn: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureSpawn, filter_fn_id_x_l, y_t, w, h);
    },
    structures: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructure, filter_fn_id_x_l, y_t, w, h);
    },
    structure: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructure, filter_fn_id_x_l, y_t, w, h);
    },
    sources: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameSource, filter_fn_id_x_l, y_t, w, h);
    },
    source: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameSource, filter_fn_id_x_l, y_t, w, h);
    },
    sites: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameConstructionSite, filter_fn_id_x_l, y_t, w, h);
    },
    site: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameConstructionSite, filter_fn_id_x_l, y_t, w, h);
    },
    resources: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameResource, filter_fn_id_x_l, y_t, w, h);
    },
    resource: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameResource, filter_fn_id_x_l, y_t, w, h);
    },
    towers: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureTower, filter_fn_id_x_l, y_t, w, h);
    },
    tower: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureTower, filter_fn_id_x_l, y_t, w, h);
    },
    walls: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureWall, filter_fn_id_x_l, y_t, w, h);
    },
    wall: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureWall, filter_fn_id_x_l, y_t, w, h);
    },
    ramparts: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureRampart, filter_fn_id_x_l, y_t, w, h);
    },
    rampart: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureRampart, filter_fn_id_x_l, y_t, w, h);
    },
    extensions: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureExtension, filter_fn_id_x_l, y_t, w, h);
    },
    extension: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureExtension, filter_fn_id_x_l, y_t, w, h);
    },
    boxes: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureContainer, filter_fn_id_x_l, y_t, w, h);
    },
    box: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureContainer, filter_fn_id_x_l, y_t, w, h);
    },
    roads: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameStructureRoad, filter_fn_id_x_l, y_t, w, h);
    },
    road: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameStructureRoad, filter_fn_id_x_l, y_t, w, h);
    },
    flags: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameFlag, filter_fn_id_x_l, y_t, w, h);
    },
    flag: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameFlag, filter_fn_id_x_l, y_t, w, h);
    },
    gobjects: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameObjectProto, filter_fn_id_x_l, y_t, w, h);
    },
    gobject: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameObjectProto, filter_fn_id_x_l, y_t, w, h);
    },
    bodyParts: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameBodyPart, filter_fn_id_x_l, y_t, w, h);
    },
    bodyPart: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameBodyPart, filter_fn_id_x_l, y_t, w, h);
    },
    scoreCollectors: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameScoreCollector, filter_fn_id_x_l, y_t, w, h);
    },
    scoreCollector: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameScoreCollector, filter_fn_id_x_l, y_t, w, h);
    },
    areaEffects: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.all(GameAreaEffect, filter_fn_id_x_l, y_t, w, h);
    },
    areaEffect: function (filter_fn_id_x_l = null, y_t = null, w = null, h = null) {
        return get.one(GameAreaEffect, filter_fn_id_x_l, y_t, w, h);
    },

    store: function (target, resource_type, percent = false) {
        if (target === null || !(target.store)) {
            if (LANGUAGE === "cn") std.warn('get.store', '目标为空或不是一个存储对象。返回-1; target:', target);
            else std.warn('get.store', 'target is NA or not a storable object. Return -1; target:', target);
            return -(1);
        }
        var current = target.store.getUsedCapacity(resource_type);
        if (current === null) {
            if (LANGUAGE === "cn") std.warn('get.store', `目标${target}不包含资源${resource_type}。返回-1`);
            else std.warn('get.store', 'target:', target, 'does not contain resource:', resource_type, '. Return -1');
            return -(1);
        }
        var value = current;
        if (percent) {
            var total = target.store.getCapacity(resource_type);
            if (total === null) {
                if (LANGUAGE === "cn") std.warn('get.store', `目标${target}不包含资源${resource_type}。返回-1`);
                else std.warn('get.store', 'target:', target, 'does not contain resource:', resource_type, '. Return -1');
                return -(1);
            }
            value = current / total
        }
        return value;
    },
    energy: function (target, percent = false) {
        return get.store(target, RESOURCE_ENERGY, percent)
    },
    score: function (target, percent = false) {
        return get.store(target, RESOURCE_SCORE, percent)
    },
    scoreX: function (target, percent = false) {
        return get.store(target, RESOURCE_SCORE_X, percent)
    },
    scoreY: function (target, percent = false) {
        return get.store(target, RESOURCE_SCORE_Y, percent)
    },
    scoreZ: function (target, percent = false) {
        return get.store(target, RESOURCE_SCORE_Z, percent)
    },
    health: function (target, percent = false) {
        if (target === null) {
            return 0;
        }
        if (target.hits === undefined) {
            return 0;
        }
        var current = target.hits;
        var value = current;
        if (percent) {
            if (target.hitsMax === undefined) {
                return 0;
            }
            var total = target.hitsMax;
            value = current / total
        }
        return value;
    },
    wait: function (creep) {
        var move_count = get.partCount(creep, MOVE, false);
        if (move_count === -1) {
            return -1;
        }
        if (move_count === 0) {
            return 65535;
        }
        var fatigue = creep.fatigue;
        if (fatigue <= 0) {
            return 0;
        }
        return Math.ceil((fatigue / 2) / move_count);
    },
    situation: function () {
        // 获取场上存活的双方出兵的情况
        /*
        * this.creepHistory = {
            enemies:{
                vector: new PartsVector([]),
                count: 0,
                grade: 0,
            },
            friends:{
                vector: new PartsVector([]),
                count: 0,
                grade: 0,
            }
        }
        * */
        return Monitor().creepHistory;
    },
    SCORE_COLLECTORS: null,
    controlled: function () {
        if (get.SCORE_COLLECTORS === null) {
            get.SCORE_COLLECTORS = get.scoreCollectors();
        }
        if (get.SCORE_COLLECTORS.length === 0) {
            return undefined;
        }
        // return True if all .my is True
        for (const obj of get.SCORE_COLLECTORS) {
            if (!obj.my) return false;
        }
        return true;
    },

    /// MACHINE -------------------------------------------------------------------
    clusters: function (objs, dist = 3, minPts = 2) {
        const clusters = [];
        const visited = new Set();

        // 主算法
        for (let i = 0; i < objs.length; i++) {
            const obj = objs[i];
            if (visited.has(obj)) continue;
            visited.add(obj);

            // 获取邻域内的点
            const neighbors = objs.filter(other => (obj.distance(other) <= dist && other !== obj));
            if (neighbors.length < (minPts - 1)) {
                continue; // 不满足最小点数要求，跳过
            }

            const cluster = {x: 0, y: 0, grade: obj.grade !== undefined ? obj.grade : 0, objects: [obj]};
            clusters.push(cluster);

            // 使用队列来处理邻域扩展
            const queue = neighbors;
            while (queue.length > 0) {
                const current = queue.shift();
                if (!visited.has(current)) {
                    visited.add(current);
                    const currentNeighbors = objs.filter(other => (current.distance(other) <= dist && other !== current));
                    if (currentNeighbors.length >= minPts) {
                        queue.push(...currentNeighbors);
                    }
                }
                if (!cluster.objects.includes(current)) {
                    cluster.objects.push(current);
                    cluster.grade += current.grade !== undefined ? current.grade : 0;
                }
            }

            // 更新簇的质心
            const centroid = Point.fcenter(...cluster.objects);
            cluster.x = centroid.x;
            cluster.y = centroid.y;
        }


        // 所有质心取round
        for (const cluster of clusters) {
            cluster.x = Math.round(cluster.x);
            cluster.y = Math.round(cluster.y);
        }

        return clusters;
    },

    /// GRAPH -------------------------------------------------------------------
    DEGREE_TABLE_REFLECT: { // (360 / 45) -> Direction
        0: RIGHT,
        1: TOP_RIGHT,
        2: TOP,
        3: TOP_LEFT,
        4: LEFT,
        5: BOTTOM_LEFT,
        6: BOTTOM,
        7: BOTTOM_RIGHT,
    },
    direction: function (vec_point, target = undefined) {
        /**
         * 根据给定的向量点确定其方向。
         *
         * 该函数通过计算向量与 x 轴正方向之间的角度，将角度映射到八个基本方向之一：
         * `RIGHT`、`TOP_RIGHT`、`TOP`、`TOP_LEFT`、`LEFT`、`BOTTOM_LEFT`、`BOTTOM`、`BOTTOM_RIGHT`。
         *
         * 如果提供了目标点 `target`，函数会计算从 `vec_point` 到 `target` 的向量。
         * 否则，它将使用 `vec_point` 作为相对于原点的向量。
         *
         * 角度计算使用 `math.atan2(y, x)`，结果以弧度为单位，然后转换为度数。
         * 负角度会加上 360 度，使其在 [0, 360) 度范围内。
         *
         * 为了将角度映射到八个方向，函数将角度加上 22.5 度，以对齐方向边界，
         * 然后除以 45 度并取整，找到最接近的方向索引。
         * 这样可以确保角度均匀分布在各个方向之间。
         *
         * 最后，函数使用 `DEGREE_TABLE_REFLECT` 表返回对应的方向。
         *
         * @param {Point} vec_point - 表示向量的点。
         * @param {Point} [target] - 可选的目标点，用于计算相对向量。
         * @returns {String} - 八个基本方向之一的名称。
         */
        if (target !== undefined) {
            vec_point = Point(target.x - vec_point.x, target.y - vec_point.y);
        }
        let x = vec_point.x, y = vec_point.y;
        let theta = -math.atan2(y, x);  // 计算弧度
        let dtheta = math.degree(theta);  // 转换为度

        // 将角度范围调整到 [0, 360)
        if (dtheta < 0)
            dtheta += 360

        // 计算最接近的方向
        let dir_idx = math.floor((dtheta + 22.5) / 45) % 8

        return get.DEGREE_TABLE_REFLECT[dir_idx]
    },
    OPPOSITE_MAP: {  // Direction -> Direction
        1: 5,
        2: 6,
        3: 7,
        4: 8,
        5: 1,
        6: 2,
        7: 3,
        8: 4,
    },
    reversedDirection: function (direction) {
        const ret = get.OPPOSITE_MAP[direction];
        if (ret === undefined) {
            if (LANGUAGE === "cn") std.warn("get.reversedDirection", "未知的方向:", direction);
            else std.warn("get.reversedDirection", "Unknown direction:", direction);
            return 1;
        }
        return ret;
    },
    expandDirection: function (direction) {
        return [direction, (direction + 6) % 8 + 1, direction % 8 + 1];
    },
    DIRECTION_TO_ANGLE: {  // Direction -> Angle
        [TOP]: 270,  // TOP实际上是-y轴方向
        [TOP_RIGHT]: 315,
        [RIGHT]: 0,
        [BOTTOM_RIGHT]: 45,
        [BOTTOM]: 90,
        [BOTTOM_LEFT]: 135,
        [LEFT]: 180,
        [TOP_LEFT]: 225,
    },
    directionAngle: function (direction) {
        /// 根据给定的方向返回对应的角度。
        /// 如果方向无效，记录错误并返回0度。
        const ret = get.DIRECTION_TO_ANGLE[direction];
        if (ret === undefined) {
            if (LANGUAGE === "cn") std.warn("get.directionAngle", "未知的方向:", direction);
            else std.warn("get.directionAngle", "Unknown direction:", direction);
            return 0;
        }
        return ret;
    },
    directionDelta: function (direction0, direction1) {
        /// 计算从 direction0 到 direction1 的方向变化。
        /// 返回值是角度差异，确保为正数且为45度的倍数。
        /// 如果任何一个方向无效，记录错误并返回0度。
        const a0 = get.DIRECTION_TO_ANGLE[direction0];
        const a1 = get.DIRECTION_TO_ANGLE[direction1];
        if (a0 === undefined || a1 === undefined) {
            if (LANGUAGE === "cn") std.warn("get.directionDelta", "未知的方向:", direction0, direction1);
            else std.warn("get.directionDelta", "Unknown direction:", direction0, direction1);
            return 0;
        }
        let delta = a1 - a0;
        if (delta < 0) delta += 360;
        return delta;
    },
    DIRECTION_TO_DELTAPIONT: {  // Direction -> Point
        1: {x: 0, y: -1},
        2: {x: 1, y: -1},
        3: {x: 1, y: 0},
        4: {x: 1, y: 1},
        5: {x: 0, y: 1},
        6: {x: -1, y: 1},
        7: {x: -1, y: 0},
        8: {x: -1, y: -1},
    },
    directionPoint: function (direction, base_point = undefined) {
        let point = get.DIRECTION_TO_DELTAPIONT[direction];
        if (base_point !== undefined) {
            return {x: base_point.x + point.x, y: base_point.y + point.y};
        }
        return point;
    },
    pooling: function (tarArr, kernelSize = 2) {
        /**
         * Pooling the array with kernelSize and stride with 'mean'
         *
         * @param {number[][]} tarArr - The target array
         * @param {number} kernelSize - The size of the kernel, strides will equal to kernelSize
         * @returns {number[][]} The pooled array
         */
        if (kernelSize < 2) {
            if (LANGUAGE === "cn") std.error("get.pooling", "池化核大小应大于1:", kernelSize);
            else std.error("get.pooling", "Kernel size should be greater than 1:", kernelSize);
        }
        if (tarArr.length < kernelSize || tarArr[0].length < kernelSize) {
            if (LANGUAGE === "cn") std.error("get.pooling", "数组大小应大于池化核大小:", len(tarArr), len(tarArr[0]));
            else std.error("get.pooling", "Array size should be greater than kernel size:", len(tarArr), len(tarArr[0]));
        }
        const res = [];
        const kSquare = kernelSize ** 2;
        const lenH = (Math.floor(tarArr.length / kernelSize)) * kernelSize;
        const lenW = (Math.floor(tarArr[0].length / kernelSize)) * kernelSize;
        for (let i = 0; i < lenH; i += kernelSize) {
            const newLine = [];
            for (let j = 0; j < lenW; j += kernelSize) {
                let sum = 0;
                for (let k = 0; k < kernelSize; k++) {
                    for (let l = 0; l < kernelSize; l++) {
                        sum += tarArr[i + k][j + l];
                    }
                }
                newLine.push(Math.floor(sum / kSquare));
            }
            res.push(newLine);
        }
        return res;
    },
    COST_ARRAY2D: [],
    COST_MATRIX: new CostMatrix(),
    costArray2D: function (start = {x: 0, y: 0}, end = {x: 100, y: 100}, __new__ = false) {
        // 这个函数返回整个地图的对应roi区域的拷贝
        const ret = [];
        if (__new__) {
            for (let j = start.y; j < end.y; j++) {
                const newLine = [];
                for (let i = start.x; i < end.x; i++) {
                    const terrain = get.terrain(i, j);

                    if (terrain === TERRAIN_PLAIN) {
                        newLine.push(2);
                    } else if (terrain === TERRAIN_SWAMP) {
                        newLine.push(10);
                    } else {
                        newLine.push(255);
                    }
                }
                ret.push(newLine);
            }
            return ret;
        } else {
            for (let j = 0; j < end.y; j++) {
                const newLine = [];
                for (let i = start.x; i < end.x; i++) {
                    newLine.push(get.COST_ARRAY2D[j][i]);
                }
                ret.push(newLine);
            }
            return ret;
        }
    },
    shape: function (arr) {
        let rows = len(arr);
        if (rows === 0) return {x: 0, y: 0};
        return {x: len(arr[0]), y: rows};
    },
    slice2d: function (arr, start = {x: 0, y: 0}, end = undefined) {
        const ret = [];
        if (end === undefined) end = get.shape(arr);
        for (let j = start.y; j < end.y; j++) {
            const newLine = [];
            for (let i = start.x; i < end.x; i++) {
                newLine.push(arr[j][i]);
            }
            ret.push(newLine);
        }
        return ret;
    },
    min2d: function (arr) {
        let min = Infinity;
        for (let i = 0; i < len(arr); i++) {
            min = Math.min(min, Math.min(...arr[i]));
        }
        return min;
    },
    max2d: function (arr) {
        let max = -Infinity;
        for (let i = 0; i < len(arr); i++) {
            max = Math.max(max, Math.max(...arr[i]));
        }
        return max;
    },
    sum2d: function (arr) {
        let sum = 0;
        for (let i = 0; i < len(arr); i++) {
            sum += sum(arr[i]);
        }
        return sum;
    },
    mean2d: function (arr) {
        return get.sum2d(arr) / (len(arr) * len(arr[0]));
    },
    poolingPrefab: function (psize) {
        if (psize === 1) return get.COST_ARRAY2D;
        if (psize === 2) return get.P2;
        if (psize === 4) return get.P4;
        if (psize === 5) return get.P5;
        if (psize === 8) return get.P8;
        if (psize === 10) return get.P10;
        // throw new Error("psize should be 1, 2, 4, 5, 8 or 10. Got: " + psize);
        if (LANGUAGE === "cn") std.error("get.poolingPrefab", "psize应为1, 2, 4, 5, 8或10。得到:", psize);
        else std.error("get.poolingPrefab", "psize should be 1, 2, 4, 5, 8 or 10. Got:", psize);
    },
    space: function (tx, ty, rot = 0) {
        /**
         * Find a 1x1 space with the base point tx, ty
         *
         * @param {number} tx - the x position of the 100x100 space
         * @param {number} ty - the y position of the 100x100 space
         * @param {number} rot - 0/1, indicating the spiral direction, 0 for counterclockwise left, 1 for counterclockwise right
         *
         * @returns {Object} the position of the 1x1 space
         */

        let pool = get.poolingPrefab(1); // Assuming getPooling is defined elsewhere
        let shape = get.shape(pool);
        const width = shape.x;
        const height = shape.y;

        let tix = tx;
        let tiy = ty;
        let step = 1;
        let dirId = 0;
        let bestVal = 255;
        let bestPos = {x: tx, y: ty};

        // Determine the spiral direction based on the rot parameter
        let directs;
        if (rot) {
            directs = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // Spiral direction: counterclockwise right
        } else {
            directs = [[1, 0], [0, -1], [-1, 0], [0, 1]]; // Spiral direction: counterclockwise left
        }

        // Start spiral search from the target point, find the position with a value <= 10 and return it. If not found, return the best position found.
        while (true) {
            for (let _ = 0; _ < 2; _++) {
                for (let _ = 0; _ < step; _++) {
                    if (0 <= tix && tix < width && 0 <= tiy && tiy < height) {
                        let val = pool[tiy][tix];
                        if (val <= 10) {
                            return Point(tix, tiy);
                        } else if (val < bestVal) {
                            bestVal = val;
                            bestPos = {x: tix, y: tiy};
                        }
                    } else if (tix < 0 || tix >= width || tiy < 0 || tiy >= height) {
                        return Point(bestPos.x, bestPos.y);
                    }
                    tix += directs[dirId][0];
                    tiy += directs[dirId][1];
                }
                dirId = (dirId + 1) % 4;
            }
            step += 1;
        }
    },
    space2x: function (psize, x, y, rot = 0) {
        /**
         * Find a 2x psize square space with the base point x, y
         *
         * @param {number} psize - the size of the pool. (1, 2, 4, 5, 8, 10) corresponding to search space sizes (2x2, 4x4, 8x8, 10x10, 16x16, 20x20)
         * @param {number} x - the x position of the 100x100 space
         * @param {number} y - the y position of the 100x100 space
         * @param {number} rot - 0/1, indicating the spiral direction, 0 for counterclockwise left, 1 for counterclockwise right
         *
         * @returns {Object} the lt position of the 2x2 space
         */

        function calcMean2x2(arr, tx, ty) {
            /**
             * Calculate the mean of the 2x2 area
             *
             * @param {Array} arr
             * @param {number} tx
             * @param {number} ty
             *
             * @returns {number}
             */
            let sum = 0;
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    sum += arr[ty + j][tx + i];
                }
            }
            return Math.floor(sum / 4);
        }

        let pool = get.poolingPrefab(psize); // Assuming getPooling is defined elsewhere
        let pSize = psize;

        const shape = get.shape(pool);
        const width = shape.x;
        const height = shape.y;
        let tix = Math.floor(x / pSize);
        let tiy = Math.floor(y / pSize);
        let step = 1;
        let dirId = 0;
        let bestVal = 255;
        let bestPos = {x: x, y: y};

        let directs;
        if (rot) {
            directs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        } else {
            directs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
        }

        // Start spiral search from the target point, calculate the mean of each 2x2 area, find the position with a value <= 10 and return it. If not found, return tix, tiy
        while (true) {
            for (let _ = 0; _ < 2; _++) {
                for (let _ = 0; _ < step; _++) {
                    if (0 <= tix && tix < (width - 1) && 0 <= tiy && tiy < (height - 1)) {
                        let val = calcMean2x2(pool, tix, tiy);
                        if (val <= 10) {
                            return Point(tix * pSize, tiy * pSize);
                        } else if (val < bestVal) {
                            bestVal = val;
                            bestPos = {x: tix * pSize, y: tiy * pSize};
                        }
                    } else if ((tix < 0 || tix >= width - 1) && (tiy < 0 || tiy >= height - 1)) {
                        return Point(bestPos.x, bestPos.y);
                    }
                    tix += directs[dirId][0];
                    tiy += directs[dirId][1];
                }
                dirId = (dirId + 1) % 4;
            }
            step += 1;
        }
    },
    CHEB_ROTATION45X_MATRIX: {
        0: [[1, 0], [0, 1]],
        45: [[1, -1], [1, 0]],
        90: [[0, -1], [1, 0]],
        135: [[-1, 0], [1, -1]],
        180: [[-1, 0], [0, -1]],
        225: [[-1, 1], [-1, 0]],
        270: [[0, 1], [-1, 0]],
        315: [[1, 0], [-1, 1]]
    },
    chebRotate45x(point, old_direction, new_direction) {
        /**
         * 将一个点根据给定的方向旋转到新的方向。
         *
         * 该函数接受一个点和两个方向（旧方向和新方向），计算它们之间的角度差，
         * 然后使用预定义的旋转矩阵将该点旋转相应的角度。
         *
         * @param {Point} point - 需要旋转的点，包含 x 和 y 坐标。
         * @param {Direction} old_direction - 点的原始方向。
         * @param {Direction} new_direction - 点需要旋转到的新方向。
         * @returns {Point} - 旋转后的点，包含新的 x 和 y 坐标。
         *
         * @example
         * const rotatedPoint = chebRotate45x({x: 1, y: 1}, RIGHT, TOP);
         * console.log(rotatedPoint); // {x: -1, y: 1}
         *
         * 注意：
         * - 该函数假设方向以 45 度为增量。
         * - 如果计算的角度差不在预定义的矩阵中，将抛出错误。
         * - 旋转矩阵是针对 45 度增量预计算的。
         */
        let angle_delta = get.directionAngle(new_direction) - get.directionAngle(old_direction);
        if (angle_delta < 0) angle_delta += 360;
        let matrix = get.CHEB_ROTATION45X_MATRIX[angle_delta];
        if (matrix === undefined)
            if (LANGUAGE === 'cn') std.error("get.chebRotate45x", "未知的旋转角度: " + angle_delta.toString());
            else std.error("get.chebRotate45x", "Unknown rotation angle: " + angle_delta.toString());
        // return {
        //     x: point.x * matrix[0][0] + point.y * matrix[0][1],
        //     y: point.x * matrix[1][0] + point.y * matrix[1][1]
        // };
        return Point(point.x * matrix[0][0] + point.y * matrix[0][1], point.x * matrix[1][0] + point.y * matrix[1][1]);
    },
    expandMapBlock: function (arr2d) {
        // 深拷贝原数组，防止修改原数组
        let newArr2d = arr2d.map(row => row.slice());

        const shape = get.shape(arr2d);
        const width = shape.x;
        const height = shape.y;


        // 边缘检测并标记
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (arr2d[i][j] === 255) {
                    let isEdge = false;
                    for (let di = -1; di <= 1; di++) {
                        for (let dj = -1; dj <= 1; dj++) {
                            if (di === 0 && dj === 0) continue;
                            let ni = i + di, nj = j + dj;
                            if (ni < 0 || ni >= height || nj < 0 || nj >= width || arr2d[ni][nj] !== 255) {
                                isEdge = true;
                                break;
                            }
                        }
                        if (isEdge) break;
                    }
                    if (isEdge) {
                        newArr2d[i][j] = -1; // 用-1标记边缘的255单元格
                    }
                }
            }
        }

        // 膨胀操作并还原标记的边缘单元格
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (newArr2d[i][j] === -1) { // 对标记的边缘单元格进行膨胀
                    newArr2d[i][j] = 255; // 先将标记的边缘单元格还原为255
                    for (let di = -1; di <= 1; di++) {
                        for (let dj = -1; dj <= 1; dj++) {
                            if (di === 0 && dj === 0) continue;
                            let ni = i + di, nj = j + dj;
                            if (ni >= 0 && ni < height && nj >= 0 && nj < width && newArr2d[ni][nj] !== 255) {
                                newArr2d[ni][nj] = 255;
                            }
                        }
                    }
                }
            }
        }

        return newArr2d;
    },
    boundingRect: function (pts) {
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;

        pts.forEach(pt => {
            if (pt.x < left) left = pt.x;
            if (pt.x > right) right = pt.x;
            if (pt.y < top) top = pt.y;
            if (pt.y > bottom) bottom = pt.y;
        });

        let center = {
            x: (left + right) / 2,
            y: (top + bottom) / 2
        };

        return Rect(
            left,
            top,
            right,
            bottom,
        );
    },
    findNarrow: function (arr2d, p0, p1, direct, length = -1, end = 255) {
        /**
         * Find the narrowest length from (p0, p1) towards direct
         *
         * @param {Array} arr2d - 二维数组
         * @param {Object} p0 - 点对象，包含x和y属性
         * @param {Object} p1 - 点对象，包含x和y属性
         * @param {number} direct - 方向，只支持4个轴方向
         * @param {number} length - 长度
         * @param {number} end - 结束值
         *
         * @returns {Object}
         *  .length: number - narrow的长度
         *  .points: Array - narrow的点集
         *  .distance: number - narrow的位置
         */
        let min_ = 65535;
        let min_s_ = [];
        let min_i_ = -1;

        const shape = get.shape(arr2d);
        const width = shape.x;
        const height = shape.y;

        if (direct === RIGHT) {
            for (let x = p0.x; x < width; x++) {
                let tmp = [];
                if (length === 0) break;
                length -= 1;
                for (let y = p0.y; y <= p1.y; y++) {
                    if (arr2d[y][x] < end) {
                        tmp.push({x, y});
                    }
                }
                if (tmp.length && tmp.length < min_) {
                    min_ = tmp.length;
                    min_s_ = tmp;
                    min_i_ = x;
                }
            }
        } else if (direct === LEFT) {
            for (let x = p0.x; x >= 0; x--) {
                let tmp = [];
                if (length === 0) break;
                length -= 1;
                for (let y = p0.y; y <= p1.y; y++) {
                    if (arr2d[y][x] < end) {
                        tmp.push({x, y});
                    }
                }
                if (tmp.length && tmp.length < min_) {
                    min_ = tmp.length;
                    min_s_ = tmp;
                    min_i_ = x;
                }
            }
        } else if (direct === BOTTOM) {
            for (let y = p0.y; y < height; y++) {
                let tmp = [];
                if (length === 0) break;
                length -= 1;
                for (let x = p0.x; x <= p1.x; x++) {
                    if (arr2d[y][x] < end) {
                        tmp.push({x, y});
                    }
                }
                if (tmp.length && tmp.length < min_) {
                    min_ = tmp.length;
                    min_s_ = tmp;
                    min_i_ = y;
                }
            }
        } else if (direct === TOP) {
            for (let y = p0.y; y >= 0; y--) {
                let tmp = [];
                if (length === 0) break;
                length -= 1;
                for (let x = p0.x; x <= p1.x; x++) {
                    if (arr2d[y][x] < end) {
                        tmp.push({x, y});
                    }
                }
                if (tmp.length && tmp.length < min_) {
                    min_ = tmp.length;
                    min_s_ = tmp;
                    min_i_ = y;
                }
            }
        }

        return {
            length: min_,
            points: min_s_,
            distance: min_i_
        };
    },
    marksMap: function (arr2d, value, ...points) {
        if (points.length === 0) {
            return;
        }
        const shape = get.shape(arr2d);
        for (let i = 0; i < points.length; i++) {
            let p = points[i];
            if (p.x >= 0 && p.x < shape.x && p.y >= 0 && p.y < shape.y) {
                arr2d[p.y][p.x] = value;
            }
        }
    },
    SWAMP_RATIO: 0,
    swampRatio: function (arr2d) {
        let swamp_cells = 0;
        let accessible_cells = 0;
        const shape = get.shape(arr2d);
        for (let y = 0; y < shape.y; y++) {
            for (let x = 0; x < shape.x; x++) {
                if (arr2d[y][x] === 10) {
                    swamp_cells += 1;
                }
                if (arr2d[y][x] < 255) {
                    accessible_cells += 1;
                }
            }
        }
        return swamp_cells / accessible_cells;
    },
}

function __init_my_exists_creep_before_k__() {
    const objs = getObjectsByPrototype(Creep);
    for (const obj of objs) {
        if (obj.my) {
            obj.__spawn__ = true;
        }
    }
}

// new COST_ARRAY2D
get.COST_ARRAY2D = get.costArray2D({x: 0, y: 0}, {x: 100, y: 100}, true);
for (let ih = 0; ih < 100; ih++) {
    for (let iw = 0; iw < 100; iw++) {
        get.COST_MATRIX.set(iw, ih, get.COST_ARRAY2D[ih][iw]);
    }
}

get.SWAMP_RATIO = get.swampRatio(get.COST_ARRAY2D);
get.P2 = get.pooling(get.COST_ARRAY2D, 2);
get.P4 = get.pooling(get.P2, 2);
get.P5 = get.pooling(get.COST_ARRAY2D, 5);
get.P8 = get.pooling(get.P4, 2);
get.P10 = get.pooling(get.P5, 2);

const COST_MATRIX_LIBS = {
    default: get.COST_MATRIX.clone(),
    swamp: get.COST_MATRIX.clone(),
    set(x, y, cost) {
        this.default.set(x, y, cost);
        this.swamp.set(x, y, cost);
    }
}

for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
        if (COST_MATRIX_LIBS.default.get(x, y) === 10) {
            COST_MATRIX_LIBS.swamp.set(x, y, 2);
        }
    }
}

const DEFAULT_MOTION = {
    costMatrix: COST_MATRIX_LIBS.default,
    flee: false,
    maxOps: 50000,
    maxCost: Infinity,
    heuristicWeight: 1.2,
    clone() {
        return {
            costMatrix: this.costMatrix.clone(),
            flee: this.flee,
            maxOps: this.maxOps,
            maxCost: this.maxCost,
            heuristicWeight: this.heuristicWeight,
        }
    }

};
const SWAMP_MOTION = {
    costMatrix: COST_MATRIX_LIBS.swamp,
    flee: false,
    maxOps: 50000,
    maxCost: Infinity,
    heuristicWeight: 1.2,
    clone() {
        return {
            costMatrix: this.costMatrix.clone(),
            flee: this.flee,
            maxOps: this.maxOps,
            maxCost: this.maxCost,
            heuristicWeight: this.heuristicWeight,
        }
    }
};


// ---------------------------------------- Module:./engine.js ----------------------------------------

// > sort 6

class _Engine_Scheduler {
    static instance = null;
    constructor() {
        if (_Engine_Scheduler.instance !== null) {
            return _Engine_Scheduler.instance;
        }
        this.prototypes = {};  // name:prototype
        this.updates = [];
        this.waits = [];
        // instance
        _Engine_Scheduler.instance = this;
    }

    login(prototype) {
        if (prototype.NAME !== undefined) {
            if (this.prototypes[prototype.NAME] !== undefined) {
                if (LANGUAGE === "cn") {
                    std.warn("Scheduler.login", "名称重复:'" + prototype.NAME + "'");
                } else {
                    std.warn("Scheduler.login", "Name repeat:'" + prototype.NAME + "'");
                }
            }
            // prototype name不允许以数字结尾
            if (prototype.NAME.match(/\d+$/)) {
                if (LANGUAGE === "cn") {
                    std.error("Scheduler.login", "类型名称不允许以数字结尾:'" + prototype.NAME + "'");
                } else {
                    std.error("Scheduler.login", "Type-Name not allowed to end with a number:'" + prototype.NAME + "'");
                }
            }
        } else if (LANGUAGE === "cn") {
            std.error("Scheduler.login", "未指定名称:'NAME'");
        } else {
            std.error("Scheduler.login", "No 'NAME' specified");
        }

        this.prototypes[prototype.NAME] = prototype;

    }

    add(name, ...args) {
        let instance = name;
        if (name.PRIORITY === undefined) {
            // 根据name找到prototype，然后创建实例
            const prototype = this.prototypes[name];
            if (prototype === undefined) {
                if (LANGUAGE === "cn") {
                    std.error("Scheduler.add", "找不到名称:'" + name + "'");
                } else {
                    std.error("Scheduler.add", "Name not found:'" + name + "'");
                }
                return;
            }
            try {
                instance = prototype(...args);  //  this is a python prototype, so it can be called instead of new
            } catch (e) {
                if (LANGUAGE === "cn") std.warn("Scheduler.add", "创建实例失败:'" + name + "'\n", e);
                else std.warn("Scheduler.add", "Failed to create instance:'" + name + "'\n", e);
            }
        }
        
        try{
            instance.onLoading(instance._inst, know, ...instance._children);  // call onLoading by Scheduler
        } catch (e) {
            if (LANGUAGE === "cn") std.warn(`${instance._name}:onLoading`, "初始化失败, 忽略\n", e);
            else std.warn(`${instance._name}:onLoading`, "Initialization failed. Ignored\n", e);
        }

        // 如果updates为空，那么直接添加到updates
        // 否则无序添加到waits
        if (this.updates.length === 0) {
            this.updates.push(instance);
        } else {
            this.waits.push(instance);
        }

        return instance;
    }
    
    __waits_to_updates__() {
        if (this.waits.length <= 0) return;
        for (const item of this.waits) {
            const instance = item;
            let left = 0;
            let right = this.updates.length;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                // 修改比较条件，当优先级相等时，继续向右查找
                if (this.updates[mid].PRIORITY >= instance.PRIORITY) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            this.updates.splice(left, 0, instance);
        }
        this.waits = []; // 清空原 waits 队列
    }

    handle() {

        // print("current updates0:", this.updates);
        // print("current waits0:", this.waits);    
        // 更新两个队列
        this.__waits_to_updates__();
        
        // print("current updates1:", this.updates);
        // print("current waits1:", this.waits);    
        
        const _length = len(this.updates);
        if (this.updates.length <= 0) return;

        let removes = [];
        let skips = {};  // 如果某item报错，跳过后续
        let firstIndex_checkedFailure = -1; // 第一个检查失败的实例索引

        /// ① Check-Seek Stage
        for (let i = 0; i < _length; i++) {
            const item = this.updates[i];
            if (item === undefined || item === null){
                if (LANGUAGE === "cn") std.warn("Scheduler", "发现未定义或null的实例，已删除");
                else std.warn("Scheduler", "Found undefined or null instance, deleted");
                removes.push(i);
                continue;
            }
            if (!item._enabled) continue;

            try {
                const checked_result = item._check(firstIndex_checkedFailure!==-1);  // _check(is_seek:bool) -> bool|str|null|undefined
                
                // print("name-result:", firstIndex_checkedFailure!==-1, item._name, checked_result, checked_result === false, firstIndex_checkedFailure);
                // null|undefined: 默认为正常
                //str: 为错误信息
                if (checked_result instanceof String) {
                    // 我们认为返回str的报错信息并不能且不应当阻碍后续逻辑
                    skips[i] = true;
                    throw new Error(checked_result); // 抛出错误
                }

                if (checked_result === false) {
                    // 如果检查失败，那么后续为seek
                    if (firstIndex_checkedFailure === -1) firstIndex_checkedFailure = i;
                    skips[i] = true;
                }
            } catch (e) {
                if (LANGUAGE === "cn") std.warn("Scheduler", "在执行'" + item._name + ":check时发生错误\n", e, `\n    Tick=${know.now}不再处理其后续逻辑。`);
                else std.warn("Scheduler", "An error occurred while executing '" + item._name + ":check\n", e, `\n    Tick=${know.now} no longer processes its subsequent logic.`);
                skips[i] = true;
            }
        }
        
        // console.log(skips);
        
        /// ② Enter Stage
        for (let i = 0; i < _length; i++) {
            if (skips[i]) continue;
            const item = this.updates[i];
            if (item === undefined || item === null) continue; // 如果发现未定义或null的实例，那么跳过
            if (item._isEntered) continue;
            if (!item._enabled) continue;
            try {
                item._enter();
                item._isEntered = true;
            } catch (e) {
                if (LANGUAGE === "cn") std.warn("Scheduler", "在执行'" + item._name + ":enter时发生错误\n", e, `\n    Tick=${know.now}不再处理其后续逻辑。`);
                else std.warn("Scheduler", "An error occurred while executing '" + item._name + ":enter\n", e, `\n    Tick=${know.now} no longer processes its subsequent logic.`);
                skips[i] = true;
            }

        }

        /// ③ Step Stage
        for (let i = 0; i < _length; i++) {
            if (skips[i]) continue;
            const item = this.updates[i];
            if (item === undefined || item === null) continue; // 如果发现未定义或null的实例，那么跳过
            if (!item._enabled) continue;
            try {
                const step_result = item._step();
                if (step_result instanceof String) {
                    skips[i] = true;
                    throw new Error(step_result); // 抛出错误
                }

                if (step_result === false) {
                    skips[i] = true;
                }
            } catch (e) {
                if (LANGUAGE === "cn") std.warn("Scheduler", "在执行'" + item._name + ":step时发生错误\n", e, `\n    Tick=${know.now}不再处理其后续逻辑。`);
                else std.warn("Scheduler", "An error occurred while executing '" + item._name + ":step\n", e, `\n    Tick=${know.now} no longer processes its subsequent logic.`);
                skips[i] = true;
            }
        }


        /// ④ Exit Stage
        for (let i = _length - 1; i >= 0; i--) {
            const item = this.updates[i];
            if (item === undefined || item === null) continue; // 如果发现未定义或null的实例，那么跳过
            if (item._alive) continue;
            removes.push(i);
        }
        if (removes.length) {
            removes = new Set(removes);
            removes = Array.from(removes);
            removes = removes.sort((a, b) => b - a);

            for (let j = len(removes) - 1; j >= 0; j--) {
                const item = this.updates[removes[j]];
                this.updates.splice(removes[j], 1);
                try {
                    item._exit();
                } catch (e) {
                    if (LANGUAGE === "cn") std.warn("Scheduler", "在执行'" + item._name + ":exit时发生错误\n", e, `\n    Tick=${know.now}不再处理其后续逻辑。`);
                    else std.warn("Scheduler", "An error occurred while executing '" + item._name + ":exit\n", e, `\n    Tick=${know.now} no longer processes its subsequent logic.`);
                }
            }
        }
    }
}


function Scheduler() {
    if (_Engine_Scheduler.instance !== null) return _Engine_Scheduler.instance;
    return new _Engine_Scheduler();
}

class _Engine_ChebRotateRef {
    // 接收一个Creep作为leader，然后允许添加一组带有相对位置信息的Creep作为follower，这些follower会跟随leader的移动而旋转
    // 默认TOP为正方向
    constructor(leader) {
        this.leader = leader;
        this.followers = [];
        this.follwer_relpos = { // name:Point

        }
        this.follower_looses = { // name:number

        }
        this._built = false;  // 如果运行，那么被设置为true

        // ---
        this.alldirs_relpos = {

        };
        this.curdir = TOP;
        this.curels = undefined;
        this._handled = false;  // 如果运行，那么被设置为true

        // getter
        this._update_tick = -1;
        this._update_pos = null;
        this.path = null;
        this.path_goal = null;
        this.path_index = 0;
        this.to = null;

    }

    get hits() {
        let hits = 0;
        if (st.creep(this.leader)) hits += this.leader.hits;
        for (const follower of this.followers) {
            if (st.creep(follower)) hits += follower.hits;
        }
        return hits;
    }

    get hitsMax() {
        let hitsMax = 0;
        if (st.creep(this.leader)) hitsMax += this.leader.hitsMax;
        for (const follower of this.followers) {
            if (st.creep(follower)) hitsMax += follower.hitsMax;
        }
        return hitsMax;
    }

    get exists() {
        const leader = this.__select_leader();
        return leader !== null && leader.exists;
    }


    get x() {
        if (this._update_tick !== know.now){
            this._update_tick = know.now;
            const leader = this.__select_leader();
            const relpos = this.__get_direlpos(leader);
            this._update_pos = Point(leader.x - relpos.x, leader.y - relpos.y);
        }
        return this._update_pos.x;
    }

    get y() {
        if (this._update_tick !== know.now){
            this._update_tick = know.now;
            const leader = this.__select_leader();
            const relpos = this.__get_direlpos(leader);
            this._update_pos = Point(leader.x - relpos.x, leader.y - relpos.y);
        }
        return this._update_pos.y;
    }

    __check_built() {
        if (this._built) {
            if (LANGUAGE === "cn") std.error("ChebRotateRef", "不允许动态添加follower");
            else std.error("ChebRotateRef", "Dynamic addition of follower is not allowed");
        }
    }

    __check_not_built() {
        if (!this._built) {
            if (LANGUAGE === "cn") std.error("ChebRotateRef", "未初始化。请确保至少handle执行一次");
            else std.error("ChebRotateRef", "Not initialized. Make sure handle is executed at least once");
        }
    }

    add(follower, relpos, loose) {
        this.__check_built();
        if (!relpos || relpos.x === undefined || relpos.y === undefined) {
            if (LANGUAGE === "cn") std.error("ChebRotateRef.add", "relpos参数不合法, relpos:", relpos.toString());
            else std.error("ChebRotateRef.add", "Illegal relpos parameter, relpos:", relpos.toString());
        }
        this.followers.push(follower);
        this.follwer_relpos[follower.id] = relpos;
        this.follower_looses[follower.id] = loose;
    }

    remove(follower) {
        this.__check_built();
        const index = this.followers.indexOf(follower);
        if (index !== -1) {
            this.followers.splice(index, 1);
            delete this.follwer_relpos[follower.id];
            delete this.follower_looses[follower.id];
        }
    }

    contains(follower) {
        return this.followers.includes(follower);
    }


    build() {
        this.__check_built();
        this._built = true;

        // 使用get.chebRotate45x(point, old_direction, new_direction) 方法，计算除Top外的其他方向的相对位置，记录到this.alldirs_relpos[TOP\TOP_RIGHT ...]中
        const directions = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];
        this.alldirs_relpos[TOP] = this.follwer_relpos;  // 默认方向
        for (const direction of directions) {
            if (direction === TOP) continue;
            for (const follower of this.followers) {
                const relpos = this.follwer_relpos[follower.id];
                if (this.alldirs_relpos[direction] === undefined) this.alldirs_relpos[direction] = {};
                this.alldirs_relpos[direction][follower.id] = get.chebRotate45x(relpos, TOP, direction);
            }
        }
    }

    __select_leader() {
        // 选择一个leader，如果当前leader阵亡，那么选择一个follower作为leader
        if (this.leader.exists) return this.leader;
        for (const follower of this.followers) {
            if (follower.exists) return follower;
        }
        return null;
    }

    __get_direlpos(leader_follower) {
        if (this.leader.id === leader_follower.id) return Point(0, 0);
        return this.curels[leader_follower.id];   // 请检查是否已经build，视作内部函数，就不检查了
    }

    __induce_nextpos(creep) {
        // 这个函数推测目标下一步的位置
        if (creep.to !== undefined && get.moved(creep)) {
            return creep.to;
        }
        return creep;
    }

    toward(dir) {
        this.__check_not_built();
        this.curdir = dir;
        this.curels = this.alldirs_relpos[dir];
    }

    move(to){
        // 和直接put.move()的区别是，这个函数可以避免leader阵亡导致的follower无法移动的问题
        const leader = this.__select_leader();
        if (leader === null){
            if (LANGUAGE === "cn") std.error("ChebRotateRef.move", "该阵型所有单位都已阵亡");
            else std.error("ChebRotateRef.move", "All units in this formation have been wiped out");
        }
        const rel = this.__get_direlpos(leader);
        const to_pos = get.offset(to, rel);
        return put.move(leader, to_pos);
        // if (!(this.path_goal) || this.path_goal.x !== to.x && this.path_goal.y !== to.y) {
        //     var path_res = searchPath (leader, to);
        //     if (path_res.incomplete) {
        //         if (LANGUAGE === "cn") std.warn ('cheb.move', `到目标的路径不完整。`);
        //         else std.warn ('cheb.move', 'Path to target:', to, ' is incomplete.');
        //     }
        //     this.path = path_res.path;
        //     this.path_goal = to;
        //     this.path_index = 0;
        // }
        // if (this.path) {
        //     this.to = this.path [this.path_index];
        //     this.path_index++;
        //     if (this.path_index >= this.path.length) {
        //         this.path = null;
        //         this.path_index = 0;
        //     }
        // }
    }

    handle(){
        //这个函数根据当前leader的位置和this.curdir，更新所有follower的位置并返回
        if (!this._built) this.build();

        // leader.x, leader.y;
        // 如果leader阵亡，那么寻找一个依然存在的follower，计算出虚拟的leader位置
        const leader = this.__select_leader();
        if (leader === null) {
            if (LANGUAGE === "cn") std.error("ChebRotateRef.handle", "该阵型所有单位都已阵亡");
            else std.error("ChebRotateRef.handle", "All units in this formation have been wiped out");
        }
        const leader_rel = this.__get_direlpos(leader);
        // const leader_pos = this.__induce_nextpos(leader);
        const leader_pos = leader;

        // 获得next的相对于原始leader的位置
        const virtual_leader = {
            x: leader_pos.x - leader_rel.x,
            y: leader_pos.y - leader_rel.y,
        }

        // 先遍历一轮，检查所有follower的loose情况
        if (this._handled)
            for (const follower of this.followers) {
                if (get.terrainCost(follower.refpos) >= TERRAIN_WALL) continue;
                if (leader.x ===  follower.x && leader.y === follower.y) continue;
                const blocker = get.find(this.followers, c => c !== follower && c.x === follower.refpos.x && c.y === follower.refpos.y);
                if (blocker) continue;
                const dist = follower.distance(follower.refpos);
                if (dist > this.follower_looses[follower.id]) {
                    // 暂停更新
                    return;
                }
            }
        else
            this._handled = true;


        leader.refpos = virtual_leader;
        // console.log(this.curels);
        for (const follower of this.followers) {
            const relpos = this.curels[follower.id];
            follower.refpos = Point(virtual_leader.x + relpos.x, virtual_leader.y + relpos.y);
            // print(`follower ${follower} set ref: ${follower.refpos.x}, ${follower.refpos.y}`)
        }
    }
}

function ChebRotateRef(leader) {
    return new _Engine_ChebRotateRef(leader);
}

class _Engine_Monitor {
    static instance = null;
    constructor(N) {
        if (_Engine_Monitor.instance !== null) {
            return _Engine_Monitor.instance;
        }
        if (N < 1) {
            if  (LANGUAGE === "cn") std.error("Monitor", "参数 N 必须大于等于 1:", N);
            else std.error("Monitor", "Parameter N must be greater than or equal to 1:", N);
        }
        this.N = N;
        this.olds = null;
        this.nows = null;
        this.name= "monitor";
        this.py_name= "monitor";
        this.eda = new ListenSystem(this);
        // --------
        this.nowBatchSize = 0;
        this.oldBatchSize = 0;
        this.nowCurrentIndex = 0; // 当前正在处理的gobject的索引
        this.oldCurrentIndex = 0;
        // --------
        this._red_mode = get.controlled() !== undefined;
        this.freezes = [];  // AreaEffect:freeze
        this.fz_length = 0;
        this.fz_index = 0;
        // --------
        this.creepHistory = {
            enemies:{
                vector: new PartsVector([]),
                count: 0,
                grade: 0,
            },
            friends:{
                vector: new PartsVector([]),
                count: 0,
                grade: 0,
            }
        }
        // -----------
        this.records = {

        }
    }

    onCreepAdded(creeps){
        const enemies = [];
        const friends = [];
        let enemies_grade = 0;
        let friends_grade = 0;
        const enemies_partsVector = new PartsVector([]);
        const friends_partsVector = new PartsVector([]);
        for (const creep of creeps) {
            if (!creep.my){
                enemies.push(creep);
                enemies_grade += creep.grade;
                enemies_partsVector.add(creep.partsVector);
            } else{
                friends.push(creep);
                friends_grade += creep.grade;
                friends_partsVector.add(creep.partsVector);
            }
        }
        if (enemies.length > 0) {
            this.creepHistory.enemies.vector.add(enemies_partsVector);
            this.creepHistory.enemies.count += enemies.length;
            this.creepHistory.enemies.grade += enemies_grade;
            this.eda.pushEvent("enemyNew:Creep", {
                creeps: enemies,
                current: {
                    grade: enemies_grade,
                    count: enemies.length,
                    vector: enemies_partsVector
                },
                history: this.creepHistory
            });
        }
        if (friends.length > 0) {
            this.creepHistory.friends.vector.add(friends_partsVector);
            this.creepHistory.friends.count += friends.length;
            this.creepHistory.friends.grade += friends_grade;
            this.eda.pushEvent("myNew:Creep", {
                creeps: friends,
                current: {
                    grade: enemies_grade,
                    count: friends.length,
                    vector: friends_partsVector
                },
                history: this.creepHistory
            });
        }
        
    }

    onCreepRemoved(creeps){
        const enemies = [];
        const friends = [];
        let enemies_grade = 0;
        let friends_grade = 0;
        const enemies_partsVector = new PartsVector([]);
        const friends_partsVector = new PartsVector([]);
        for (const creep of creeps){
            if (!creep.my){
                enemies.push(creep);
                enemies_grade += creep.grade;
                enemies_partsVector.add(creep.partsVector);
            } else{
                friends.push(creep);
                friends_grade += creep.grade;
                friends_partsVector.add(creep.partsVector);
            }

            delete creep.py;
        }
        // print("enemyLost:", enemies.length, enemies_grade)
        // print("myLost:", friends.length, friends_grade)
        if (enemies.length > 0) {
            this.creepHistory.enemies.vector.sub(enemies_partsVector);
            this.creepHistory.enemies.count -= enemies.length;
            this.creepHistory.enemies.grade -= enemies_grade;
            this.eda.pushEvent("enemyLost:Creep", {
                creeps: enemies,
                current: {
                    count: enemies.length,
                    grade: enemies_grade,
                    vector: enemies_partsVector,
                },
                history: this.creepHistory
            });
        }
        if (friends.length > 0) {
            this.creepHistory.friends.vector.sub(friends_partsVector);
            this.creepHistory.friends.count -= friends.length;
            this.creepHistory.friends.grade -= friends_grade;
            this.eda.pushEvent("myLost:Creep", {
                creeps: friends,
                current: {
                    count: friends.length,
                    grade: friends_grade,
                    vector: friends_partsVector,
                },
                history: this.creepHistory
            });
        }
    }

    onWallAdded(walls){
        if (this.records["Wall"] === undefined) {
            this.records["Wall"] = [];
        }
        for (const wall of walls) {
            COST_MATRIX_LIBS.default.set(wall.x, wall.y, 255);
            COST_MATRIX_LIBS.swamp.set(wall.x, wall.y, 255);
            get.COST_ARRAY2D[wall.y][wall.x] = 255;
            this.records["Wall"].push({id: wall.id, x: wall.x, y: wall.y});
        }


    }

    onExtensionAdded(exts){
        if (this.records["Extension"] === undefined) {
            this.records["Extension"] = [];
        }
        for (const ext of exts) {
            COST_MATRIX_LIBS.default.set(ext.x, ext.y, 255);
            COST_MATRIX_LIBS.swamp.set(ext.x, ext.y, 255);
            get.COST_ARRAY2D[ext.y][ext.x] = 255;
            this.records["Extension"].push({id: ext.id, x: ext.x, y: ext.y});
        }


    }

    onSpawnAdded(spawns){
        if (this.records["Spawn"] === undefined) {
            this.records["Spawn"] = [];
        }
        for (const spawn of spawns) {
            COST_MATRIX_LIBS.default.set(spawn.x, spawn.y, 255);
            COST_MATRIX_LIBS.swamp.set(spawn.x, spawn.y, 255);
            get.COST_ARRAY2D[spawn.y][spawn.x] = 255;
            this.records["Spawn"].push({id: spawn.id, x: spawn.x, y: spawn.y});
        }

    }

    onTowerAdded(towers){
        if (this.records["Tower"] === undefined) {
            this.records["Tower"] = [];
        }
        for (const tower of towers) {
            COST_MATRIX_LIBS.default.set(tower.x, tower.y, 255);
            COST_MATRIX_LIBS.swamp.set(tower.x, tower.y, 255);
            get.COST_ARRAY2D[tower.y][tower.x] = 255;
            this.records["Tower"].push({id: tower.id, x: tower.x, y: tower.y});
        }

    }
    
    
    onRoadAdded(roads){
        if (this.records["Road"] === undefined) {
            this.records["Road"] = [];
        }
        for (const road of roads) {
            COST_MATRIX_LIBS.default.set(road.x, road.y, 1);
            COST_MATRIX_LIBS.swamp.set(road.x, road.y, 1);
            get.COST_ARRAY2D[road.y][road.x] = 1;
            this.records["Road"].push({id: road.id, x: road.x, y: road.y});
        }

    }


    onRampartAdded(ramps){
        if (this.records["Rampart"] === undefined) {
            this.records["Rampart"] = [];
        }
        for (const ramp of ramps) {
            if (ramp.my) continue;
            // print("ramp:", ramp)
            COST_MATRIX_LIBS.default.set(ramp.x, ramp.y, 255);
            COST_MATRIX_LIBS.swamp.set(ramp.x, ramp.y, 255);
            get.COST_ARRAY2D[ramp.y][ramp.x] = 255;
            this.records["Rampart"].push({id: ramp.id, x: ramp.x, y: ramp.y});
        }

    }

    onAreaEffectAdded(effects){
        if (this.records["AreaEffect"] === undefined) {
            this.records["AreaEffect"] = [];
        }
        for (const effect of effects) {
            if (effect.effect === EFFECT_FREEZE){
                COST_MATRIX_LIBS.default.set(effect.x, effect.y, 200);
                COST_MATRIX_LIBS.swamp.set(effect.x, effect.y, 200);
                get.COST_ARRAY2D[effect.y][effect.x] = 200;
            } else if(effect.effect === EFFECT_DAMAGE){
                COST_MATRIX_LIBS.default.set(effect.x, effect.y, 255);
                COST_MATRIX_LIBS.swamp.set(effect.x, effect.y, 255);
                get.COST_ARRAY2D[effect.y][effect.x] = 255;
            }
            this.records["AreaEffect"].push({id: effect.id, x: effect.x, y: effect.y});
        }
    }

    onWallRemoved(walls){
        if (this.records["Wall"] === undefined || this.records["Wall"].length === 0) return;
        for (let wall of walls) {
            // 从records中弹出该元素
            const index = this.records["Wall"].findIndex((record) => record.id === wall.id);
            if (index !== -1) {
                wall = this.records["Wall"][index];
                this.records["Wall"].splice(index, 1);
                const terrain = get.terrainCost(wall.x, wall.y);
                COST_MATRIX_LIBS.default.set(wall.x, wall.y, terrain);
                COST_MATRIX_LIBS.swamp.set(wall.x, wall.y, terrain);
                get.COST_ARRAY2D[wall.y][wall.x] = terrain;
            }
        }
    }

    onExtensionRemoved(exts){
        if (this.records["Extension"] === undefined || this.records["Extension"].length === 0) return;
        for (let ext of exts) {
            // 从records中弹出该元素
            const index = this.records["Extension"].findIndex((record) => record.id === ext.id);
            if (index !== -1) {
                ext = this.records["Extension"][index];
                this.records["Extension"].splice(index, 1);
                const terrain = get.terrainCost(ext.x, ext.y);
                COST_MATRIX_LIBS.default.set(ext.x, ext.y, terrain);
                COST_MATRIX_LIBS.swamp.set(ext.x, ext.y, terrain);
                get.COST_ARRAY2D[ext.y][ext.x] = terrain;
            }
        }
    }

    onSpawnRemoved(spawns){
        if (this.records["Spawn"] === undefined || this.records["Spawn"].length === 0) return;
        for (let spawn of spawns) {
            // 从records中弹出该元素
            const index = this.records["Spawn"].findIndex((record) => record.id === spawn.id);
            if (index !== -1) {
                spawn = this.records["Spawn"][index];
                this.records["Spawn"].splice(index, 1);
                const terrain = get.terrainCost(spawn.x, spawn.y);
                COST_MATRIX_LIBS.default.set(spawn.x, spawn.y, terrain);
                COST_MATRIX_LIBS.swamp.set(spawn.x, spawn.y, terrain);
                get.COST_ARRAY2D[spawn.y][spawn.x] = terrain;
            }
        }
    }

    onTowerRemoved(towers){
        if (this.records["Tower"] === undefined || this.records["Tower"].length === 0) return;
        for (let tower of towers) {
            // 从records中弹出该元素
            const index = this.records["Tower"].findIndex((record) => record.id === tower.id);
            if (index !== -1) {
                tower = this.records["Tower"][index];
                this.records["Tower"].splice(index, 1);
                const terrain = get.terrainCost(tower.x, tower.y);
                COST_MATRIX_LIBS.default.set(tower.x, tower.y, terrain);
                COST_MATRIX_LIBS.swamp.set(tower.x, tower.y, terrain);
                get.COST_ARRAY2D[tower.y][tower.x] = terrain;
            }
        }
    }

    onRoadRemoved(roads){
        if (this.records["Road"] === undefined || this.records["Road"].length === 0) return;
        for (let road of roads) {
            // 从records中弹出该元素
            const index = this.records["Road"].findIndex((record) => record.id === road.id);
            if (index !== -1) {
                road = this.records["Road"][index];
                this.records["Road"].splice(index, 1);
                const terrain = get.terrainCost(road.x, road.y);
                COST_MATRIX_LIBS.default.set(road.x, road.y, terrain);
                COST_MATRIX_LIBS.swamp.set(road.x, road.y, terrain);
                get.COST_ARRAY2D[road.y][road.x] = terrain;
            }
        }
    }

    onRampartRemoved(ramps){
        if (this.records["Rampart"] === undefined || this.records["Rampart"].length === 0) return;
        for (let ramp of ramps) {
            // 从records中弹出该元素
            const index = this.records["Rampart"].findIndex((record) => record.id === ramp.id);
            if (index !== -1) {
                ramp = this.records["Rampart"][index];
                this.records["Rampart"].splice(index, 1);
                const terrain = get.terrainCost(ramp.x, ramp.y);
                COST_MATRIX_LIBS.default.set(ramp.x, ramp.y, terrain);
                COST_MATRIX_LIBS.swamp.set(ramp.x, ramp.y, terrain);
                get.COST_ARRAY2D[ramp.y][ramp.x] = terrain;
            }
        }
    }

    onAreaEffectRemoved(effects){
        if (this.records["AreaEffect"] === undefined || this.records["AreaEffect"].length === 0) return;
        for (let effect of effects) {
            // 从records中弹出该元素
            const index = this.records["AreaEffect"].findIndex((record) => record.id === effect.id);
            if (index !== -1) {
                effect = this.records["AreaEffect"][index];
                this.records["AreaEffect"].splice(index, 1);
                const terrain = get.terrainCost(effect.x, effect.y);
                if (terrain < 2){
                    print(effect.x, effect.y, "terrain:", terrain, getTerrainAt(effect))
                }
                COST_MATRIX_LIBS.default.set(effect.x, effect.y, terrain);
                COST_MATRIX_LIBS.swamp.set(effect.x, effect.y, terrain);
                get.COST_ARRAY2D[effect.y][effect.x] = terrain;
            }
        }
    }

    updateFreezeEffects(){
        if (this.fz_index >= this.fz_length && this.records["AreaEffect"]) {
            // copy
            this.freezes = this.records["AreaEffect"].filter((effect) => effect.effect === EFFECT_FREEZE);
            this.fz_length = this.freezes.length;
            this.fz_index = 0;
        }
        // update 50 per tick
        for (let i = 0; i < 50; i++) {
            if (this.fz_index >= this.fz_length) break;
            const effect = this.freezes[this.fz_index];
            if (!effect.exists) continue;
            if (effect.ticksToDecay === undefined || effect.ticksToDecay === null) continue;
            if (effect.ticksToDecay <= 1){
                const new_cost = get.terrainCost(effect.x, effect.y);
                COST_MATRIX_LIBS.default.set(effect.x, effect.y, new_cost);
                COST_MATRIX_LIBS.swamp.set(effect.x, effect.y, new_cost);
                get.COST_ARRAY2D[effect.y][effect.x] = new_cost;
            } else {
                if (get.COST_ARRAY2D[effect.y][effect.x] > 200) continue;
                const new_cost = math.floor(effect.ticksToDecay * 1.5);
                COST_MATRIX_LIBS.default.set(effect.x, effect.y, new_cost);
                COST_MATRIX_LIBS.swamp.set(effect.x, effect.y, new_cost);
                get.COST_ARRAY2D[effect.y][effect.x] = new_cost;
            }
            this.fz_index++;
        }

    }

    onNewCallback(news){
        // news是一个{type-string: array<gobject>}
        for (const type in news) {
            this.eda.pushEvent(`__new:${type}__`, {
                objects: news[type],
            })
            // for (const obj of news[type]) {
            //     print("new:", obj, type)
            // }
            if (type === "Creep") this.onCreepAdded(news[type]);
            else if (type === "StructureWall") this.onWallAdded(news[type]);
            else if (type === "StructureSpawn") this.onSpawnAdded(news[type]);
            else if (type === "StructureTower") this.onTowerAdded(news[type]);
            else if (type === "StructureRoad") this.onRoadAdded(news[type]);
            else if (type === "StructureRampart") this.onRampartAdded(news[type]);
            else if (type === "StructureExtension") this.onExtensionAdded(news[type]);
            else if (type === "AreaEffect" && !get.controlled()) this.onAreaEffectAdded(news[type]);
        }
    }
    onLostCallback(losts){
        // losts是一个{type-string: array<gobject>}
        for (const type in losts) {
            this.eda.pushEvent(`__lost:${type}__`, {
                objects: losts[type],
            })
            if (type === "Creep") this.onCreepRemoved(losts[type]);
            else if (type === "StructureWall") this.onWallRemoved(losts[type]);
            else if (type === "StructureSpawn") this.onSpawnRemoved(losts[type]);
            else if (type === "StructureTower") this.onTowerRemoved(losts[type]);
            else if (type === "StructureRoad") this.onRoadRemoved(losts[type]);
            else if (type === "StructureRampart") this.onRampartRemoved(losts[type]);
            else if (type === "StructureExtension") this.onExtensionRemoved(losts[type]);
            else if (type === "AreaEffect") this.onAreaEffectRemoved(losts[type]);
        }
    }

    calcBatchSize() {
        // 假设新版的逻辑是，第一个tick处理平常tick 50%的工作量，后续tick处理量为100%.  所有tick的总工作量恰好等于一轮完整的工作量
        const total = (this.N - 1) * 2 + 1;
        this.oldBatchSize = Math.ceil(this.olds.length / total * 2);
        this.nowBatchSize = Math.ceil(this.nows.length / total * 2);
    }

    partialHandle(batch_count){
        const news = {};
        const losts = {};
        let any_news_flag = false;
        let any_losts_flag = false;

        /// 遵循左闭右开原则

        // Now
        const nowEndIndex = Math.min(
            this.nowCurrentIndex + Math.ceil(batch_count * this.nowBatchSize),
            this.nows.length
        );
        for (let i = this.nowCurrentIndex; i < nowEndIndex; i++) {
            const now = this.nows[i];
            // check new
            let flag = false;
            for (const old of this.olds) {
                if (old.id === now.id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                const typename = now.constructor.name;
                if (news[typename] === undefined) {
                    news[typename] = [];
                }
                news[typename].push(now);
                any_news_flag = true;
            }
        }

        // Old
        const oldEndIndex = Math.min(
            this.oldCurrentIndex + Math.ceil(batch_count * this.oldBatchSize),
            this.olds.length
        );
        for (let i = this.oldCurrentIndex; i < oldEndIndex; i++) {
            const old = this.olds[i];
            // check lost
            let flag = false;
            for (const now of this.nows) {
                if (old.id === now.id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                const typename = old.constructor.name;
                if (losts[typename] === undefined) {
                    losts[typename] = [];
                }
                losts[typename].push(old);
                any_losts_flag = true;
            }
        }

        if (any_news_flag) this.onNewCallback(news); // 处理new
        if (any_losts_flag) this.onLostCallback(losts); // 处理lost

        // 更新索引
        this.nowCurrentIndex = nowEndIndex;
        this.oldCurrentIndex = oldEndIndex;
    }
    handle() {
        const state = (know.now - 1) % this.N;  // run at tick==1
        // iter all creep
        DEFAULT_MOTION.costMatrix = COST_MATRIX_LIBS.default.clone();
        SWAMP_MOTION.costMatrix = COST_MATRIX_LIBS.swamp.clone();
        for (const creep of get.creeps()) {
            DEFAULT_MOTION.costMatrix.set(creep.x, creep.y, 254);
            SWAMP_MOTION.costMatrix.set(creep.x, creep.y, 254);
        }
        if (state === 0 || this.olds === null) {
            this.olds = this.nows;
            this.nows = get.gobjects();
            if (this.olds === null) {
                this.olds = this.nows;
                const walls = get.filter(this.olds, c=>c instanceof StructureWall);
                this.onWallAdded(walls);
                const extensions = get.filter(this.olds, c=>c instanceof StructureExtension);
                this.onExtensionAdded(extensions);
                const spawns = get.filter(this.olds, c=>c instanceof StructureSpawn);
                this.onSpawnAdded(spawns);
                const towers = get.filter(this.olds, c=>c instanceof StructureTower);
                this.onTowerAdded(towers);
                const ramparts = get.filter(this.olds, c=>c instanceof StructureRampart);
                this.onRampartAdded(ramparts);
            }
            this.calcBatchSize();
            this.nowCurrentIndex = 0;
            this.oldCurrentIndex = 0;

            this.partialHandle(0.5);
        } else {
            this.partialHandle(1);
        }


        // red: update
        if (this._red_mode) {
            this.updateFreezeEffects();
        }
    }
}

function Monitor(N) {
    if (_Engine_Monitor.instance === null) {
        _Engine_Monitor.instance = new _Engine_Monitor(N);
    }
    return _Engine_Monitor.instance;
}


// ---------------------------------------- Module:./view.js ----------------------------------------

// > sort 6

class __View {
    static DEFAULT_OPTS = {
        font: '0.5',
        align: 'center',
        opacity: 0.7,
        color: '#AEFC80'
    }
    constructor(layer, persistent = true) {
        this.v = new Visual(layer, persistent);
    }

    clear() {
        this.v.clear(); // > ignore
        return this;
    }

    text(text, pos, font, color, options = null) {
        options = options? options : {};
        options.font = font;
        options.color = color;
        this.v.text(text, pos, options);
        return this;
    }

    circle(pos, radius, fill = null, options = null) {
        options = options? options : {};
        options.radius = radius;
        options.fill = fill;
        this.v.circle(pos, options);
        return this;
    }

    line(pos1, pos2, width = 0.1, color = null, options = null) {
        options = options? options : {};
        options.width = width;
        options.color = color;
        this.v.line(pos1, pos2, options);
        return this;
    }
    
    dashLine(pos1, pos2, dashLength = 0.2, gapLength = 0.2, width = 0.1, color = null, options = null) {
        options = options ?? {};
        options.width = width;
        options.color = color;
    
        // 计算两点之间的距离和方向
        const dx = pos2.x - pos1.x;
        const dy = pos2.y - pos1.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const directionX = dx / length;
        const directionY = dy / length;
    
        // 计算虚线的总段数
        const totalDashes = Math.ceil(length / (dashLength + gapLength));
    
        for (let i = 0; i < totalDashes; i++) {
            const start = pos1.x + directionX * i * (dashLength + gapLength);
            const end = start + dashLength * directionX;
            const startY = pos1.y + directionY * i * (dashLength + gapLength);
            const endY = startY + dashLength * directionY;
    
            // 绘制虚线段
            this.v.line(
                { x: start, y: startY },
                { x: end, y: endY },
                options
            );
        }
    
        return this;
    }

    rect(pos, width, height, fill = null, options = null) {
        options = options? options : {};
        options.fill = fill;
        this.v.rect(pos, width, height, options);
        return this;
    }

    poly(points, fill = null, options = null) {
        options = options? options : {};
        options.fill = fill;

        let array = [];
        for (let i = 0; i < points.length; i++) {
            array.push(points[i]);
        }

        this.v.poly(array, options);
        return this;
    }

    size() {
        return this.v.size();
    }

    header(creep) {
        if (creep) {
            let txt = creep.name || creep.id;
            let hp_percent = creep.hits / creep.hitsMax * 100;  // int:0 - 100
            let _hex = Math.floor(hp_percent * 255 / 100).toString(16).padStart(2, '0');
            let color = `#AE${_hex}80`;
            txt += `❤️${Math.round(hp_percent)}`;
            this.text(txt, creep.offset(0, -0.6), 0.4, color, __View.DEFAULT_OPTS);
        } else {
            std.warn("View.header", "No creep object:", creep);
        }
        return this;
    }

    cluster(cluster, fill = null, options = null) {
        options = options ?? {}; // 使用空值合并运算符更简洁
        options.fill = fill || __View.DEFAULT_OPTS.color;
        options.opacity = 0.2;

        const grid = new Map(); // 使用 Map 存储坐标及其相关内容

        // 遍历 cluster.objects，计算 7x7 格子并存入 Map
        for (const obj of cluster.objects) {
            for (let i = -3; i <= 3; i++) {
                for (let j = -3; j <= 3; j++) {
                    const key = `${obj.x + i},${obj.y + j}`; // 用字符串 "x,y" 作为键
                    grid.set(key, true); // 存储任何值（这里用 true 表示存在）
                }
            }
        }

        // 遍历 Map，将每个格子画成方形
        for (const key of grid.keys()) {
            const [x, y] = key.split(',').map(Number);
            this.rect(
                { x: x - 0.5, y: y - 0.5 },
                1,
                1,
                fill,
                options
            );
        }

        // 在cluster的中心位置绘制cluster的grade:int信息
        this.text(`grade:${cluster.grade}`, Point(cluster.x, cluster.y), 0.4, "#CDCDCD", __View.DEFAULT_OPTS);
    }
}

function View(layer, persistent = true) {
    return new __View(layer, persistent);
}


// ---------------------------------------- Module:./bg.js ----------------------------------------

// Transcrypt'ed from Python, 2025-03-14 01:36:59
var __name__ = 'bg';
export var SPAWN = get.spawn (st.my);
export var ESPAWN = get.spawn (st.enemy);
if (SPAWN.x < 50) {
	var SIDE = -(1);
}
else {
	var SIDE = 1;
}
if (SIDE < 0) {
	var WALLS = [get.wall (2, 47), get.wall (11, 45)];
	var BOXES = [get.box (1, 44), get.box (12, 46), get.box (1, 46), get.box (12, 44)];
	var POS1 = Point (13, 10);
	var POS2 = Point (13, 89);
}
else {
	var WALLS = [get.wall (97, 52), get.wall (88, 54)];
	var BOXES = [get.box (98, 55), get.box (87, 53), get.box (98, 53), get.box (87, 55)];
	var POS1 = Point (87, 89);
	var POS2 = Point (87, 10);
}

//# sourceMappingURL=bg.map

// ---------------------------------------- Module:./builtin.engine.js ----------------------------------------

// Transcrypt'ed from Python, 2025-03-14 01:36:59
var __name__ = 'builtin.engine';
export var StageMachineLogicMeta =  __class__ ('StageMachineLogicMeta', [py_metatype], {
	__module__: __name__,
	logs: [],
	__recursive__: [],
	__protos__: dict ({}),
	IGNORES: ['ref', 'refLast', 'refNext', 'refAdjacent', 'refEnd', 'link', 'creeps', 'listenFor', 'cancelListen', 'pushEvent', 'schedule', 'cancelSchedule', 'handleStage', 'onStart', 'onStop', 'onStep', 'onChanged', 'onKilled', 'onDraw', 'onLoading', 'productQueue', 'showQueue', 'jumpQueue'],
	get __new__ () {return __get__ (this, function (meta, py_name, bases, attrs) {
		attrs ['__states__'] = [];
		attrs ['__recursive__'] = StageMachineLogicMeta.__recursive__;
		StageMachineLogicMeta.__recursive__ = [];
		for (var base of bases) {
			if (base.__states__) {
				attrs ['__states__'].extend (base.__states__);
			}
			if (base.__recursive__) {
				attrs ['__recursive__'].extend (base.__recursive__);
			}
		}
		attrs ['__states__'] = list (set (attrs ['__states__']));
		attrs ['__recursive__'] = list (set (attrs ['__recursive__']));
		const iters = Object.entries(attrs);
		for (var [key, value] of iters) {
			if (!(key.startswith ('_')) && callable (value)) {
				if (key.isupper ()) {
					continue;
				}
				if (__in__ (key, StageMachineLogicMeta.IGNORES)) {
					continue;
				}
				attrs ['__states__'].append (key);
			}
		}
		var new_class = py_metatype.__new__ (meta, py_name, bases, attrs);
		if (py_name != 'CreepLogic' && py_name != 'Logic' && py_name != 'Stage' && py_name != 'TeamLogic') {
			Scheduler ().login (new_class);
		}
		if (py_name != 'CreepLogic' && py_name != 'Logic' && py_name != 'Stage' && py_name != 'TeamLogic') {
			StageMachineLogicMeta.__protos__ [new_class.NAME] = new_class;
		}
		return new_class;
	});},
	get proto () {return __getcm__ (this, function (cls, py_name) {
		if (__in__ (py_name, cls.__protos__)) {
			return cls.__protos__ [py_name];
		}
		else if (LANGUAGE == 'cn') {
			std.error ('StageMachineLogicMeta.proto', '找不到Stage原型: ' + py_name);
		}
		else {
			std.error ('StageMachineLogicMeta.proto', 'Stage prototype not found: ' + py_name);
		}
	});}
});
export var recursive = function (function_name) {
	StageMachineLogicMeta.__recursive__.append (function_name);
	var _inner_ = function (f) {
		return f;
	};
	return _inner_;
};
export var _NamedNode =  __class__ ('_NamedNode', [object], {
	__module__: __name__,
	NAME: '',
	get __init__ () {return __get__ (this, function (self) {
		self._parent = null;
		self._children = [];
		self._name = self.NAME;
	});},
	get __add_child__ () {return __get__ (this, function (self, child) {
		if (!(isinstance (child, _NamedNode))) {
			if (LANGUAGE == 'cn') {
				std.warn ('_NamedNode<{}>'.format (self.NAME), 'child 不是 _NamedNode 类型：{}'.format (py_typeof (child)));
			}
			else {
				std.warn ('_NamedNode<{}>'.format (self.NAME), 'child is not an instance of _NamedNode: {}'.format (py_typeof (child)));
			}
			return ;
		}
		if (child._parent !== null) {
			if (LANGUAGE == 'cn') {
				std.warn ('_NamedNode<{}>'.format (self.NAME), 'child 已有父节点'.format ());
			}
			else {
				std.warn ('_NamedNode<{}>'.format (self.NAME), 'child already has a parent'.format ());
			}
			return ;
		}
		self._children.append (child);
		child._parent = self;
	});},
	get __remove_child__ () {return __get__ (this, function (self, child_or_name) {
		var target_child = null;
		if (isinstance (child_or_name, _NamedNode)) {
			if (__in__ (child_or_name, self._children)) {
				var target_child = child_or_name;
			}
		}
		else if (isinstance (child_or_name, str)) {
			for (var child of self._children) {
				if (child._name == child_or_name) {
					var target_child = child;
					break;
				}
			}
		}
		else {
			if (LANGUAGE == 'cn') {
				std.warn ('_NamedNode<{}>'.format (self.NAME), '无效的参数类型：{}'.format (py_typeof (child_or_name)));
			}
			else {
				std.warn ('_NamedNode<{}>'.format (self.NAME), 'Invalid parameter type: {}'.format (py_typeof (child_or_name)));
			}
			return ;
		}
		if (target_child !== null) {
			self._children.remove (target_child);
			target_child._parent = null;
		}
		else if (LANGUAGE == 'cn') {
			std.warn ('_NamedNode<{}>'.format (self.NAME), '未找到子节点：{}'.format (child_or_name));
		}
		else {
			std.warn ('_NamedNode<{}>'.format (self.NAME), 'Child not found: {}'.format (child_or_name));
		}
	});}
});
export var Stage =  __class__ ('Stage', [_NamedNode], {
	__module__: __name__,
	NAME: 'Stage',
	LIMIT: 16,
	__id__: dict ({}),
	__states__: [],
	__recursive__: [],
	get __init__ () {return __get__ (this, function (self, inst) {
		if (typeof inst == 'undefined' || (inst != null && inst.hasOwnProperty ("__kwargtrans__"))) {;
			var inst = null;
		};
		__super__ (Stage, '__init__') (self);
		if (!(self.NAME)) {
			if (LANGUAGE == 'cn') {
				std.error (self.__class__.__name__, 'NAME值没有设定或设定为空串。');
			}
			else {
				std.error (self.__class__.__name__, 'NAME value is not set or is an empty string.');
			}
		}
		if (self.NAME && self.NAME [len (self.NAME) - 1].isdigit ()) {
			if (LANGUAGE == 'cn') {
				std.error (self.__class__.__name__, 'NAME值以数字结尾，这是不允许的。:{}'.format (self.NAME));
			}
			else {
				std.error (self.__class__.__name__, 'NAME value ends with a digit, which is not allowed.: ' + self.NAME);
			}
		}
		if (!(isinstance (self.LIMIT, int)) || self.LIMIT <= 0) {
			if (LANGUAGE == 'cn') {
				std.error ('{}<{}>'.format (self.__class__.__name__, self.NAME), 'LIMIT必须是正整数，但是得到了{}。'.format (self.LIMIT));
			}
			else {
				std.error ('{}<{}>'.format (self.__class__.__name__, self.NAME), 'LIMIT must be a positive integer, but got {}.'.format (self.LIMIT));
			}
		}
		if (self.LIMIT > 64) {
			if (LANGUAGE == 'cn') {
				std.warn ('{}<{}>'.format (self.__class__.__name__, self.NAME), 'LIMIT值较大: {}'.format (self.LIMIT));
			}
			else {
				std.warn ('{}<{}>'.format (self.__class__.__name__, self.NAME), 'LIMIT value is large: {}'.format (self.LIMIT));
			}
		}
		self._inst = inst;
		self._recursive_left = self.LIMIT;
		self._states_length = len (self.__states__);
		self._current = null;
		self._uid = self.__get_id__ (self.NAME);
		self._name = '{}{}'.format (self.NAME, self._uid);
		self.py_name = self._name;
		if (!(self._name)) {
			self._name = self.__class__.__name__;
		}
		self._eda = new ListenSystem(self, self._name);
		self._scs = new ScheduleSystem(self);
	});},
	get __get_id__ () {return __getcm__ (this, function (cls, _name) {
		if (!__in__ (_name, cls.__id__)) {
			cls.__id__ [_name] = -(1);
		}
		cls.__id__ [_name]++;
		return cls.__id__ [_name];
	});},
	get _get_inst () {return __get__ (this, function (self) {
		return self._inst;
	});},
	get _get_name () {return __get__ (this, function (self) {
		return self._name;
	});},
	get _set_name () {return __get__ (this, function (self, value) {
		self._name = value;
	});},
	get handleStage () {return __get__ (this, function (self, log) {
		if (typeof log == 'undefined' || (log != null && log.hasOwnProperty ("__kwargtrans__"))) {;
			var log = true;
		};
		if (self._states_length == 0) {
			return ;
		}
		if (!__in__ (self._current, self.__states__)) {
			if (len (self.__states__) && (self._current === null || self._current === undefined)) {
				self._current = self.__states__ [0];
			}
			else if (LANGUAGE == 'cn') {
				std.error (self._name + '.stageMachine', '无效的状态: ' + self._current);
			}
			else {
				std.error (self._name + '.stageMachine', 'Invalid state: ' + self._current);
			}
		}
		try {
			var next_state = getattr (self, self._current) (self._inst, know, ...self._children);
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				var e = __except0__;
				if (LANGUAGE == 'cn') {
					std.error ((self._name + '.') + self._current, '执行状态逻辑时发生错误: ' + str (e));
				}
				else {
					std.error ((self._name + '.') + self._current, 'An error occurred while executing the state logic: ' + str (e));
				}
				return ;
			}
			else {
				throw __except0__;
			}
		}
		if (!(isinstance (next_state, str))) {
			var next_state = self._current;
		}
		if (!__in__ (next_state, self.__states__)) {
			if (LANGUAGE == 'cn') {
				std.error (self._name + '.stageMachine', '无效的新状态: ' + next_state);
			}
			else {
				std.error (self._name + '.stageMachine', 'Invalid next state: ' + next_state);
			}
		}
		var recursive_flag = false;
		if (__in__ (self._current, self.__recursive__) || __in__ (next_state, self.__recursive__)) {
			self._recursive_left--;
			if (self._recursive_left <= 0) {
				if (LANGUAGE == 'cn') {
					std.error (self._name + '.stageMachine', '递归调用次数超过限制: ' + str (self.LIMIT));
				}
				else {
					std.error (self._name + '.stageMachine', 'Recursive call count exceeded limit: ' + str (self.LIMIT));
				}
				return ;
			}
			var recursive_flag = true;
		}
		if (log) {
			std.info (self._name + '.stageMachine', (self._current + ' -> ') + next_state, (recursive_flag ? '...' : ''));
		}
		try {
			if (self._current != next_state) {
				self.onChanged (self._current, next_state, self._inst, know);
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				var e = __except0__;
				if (LANGUAGE == 'cn') {
					std.error (self._name + '.changed', '执行状态切换逻辑时发生错误: ' + str (e));
				}
				else {
					std.error (self._name + '.changed', 'An error occurred while executing the state change logic: ' + str (e));
				}
			}
			else {
				throw __except0__;
			}
		}
		self._current = next_state;
		if (recursive_flag) {
			self.handleStage (log);
		}
	});},
	get onChanged () {return __get__ (this, function (self, src, dst, inst, k) {
		// pass;
	});}
});
Object.defineProperty (Stage, 'name', property.call (Stage, Stage._get_name, Stage._set_name));
Object.defineProperty (Stage, 'inst', property.call (Stage, Stage._get_inst));;
export var Logic =  __class__ ('Logic', [Stage], {
	__module__: __name__,
	LOG: true,
	NAME: 'Logic',
	PRIORITY: 0,
	__names__: dict ({}),
	__types__: dict ({}),
	get __init__ () {return __get__ (this, function (self, inst) {
		if (typeof inst == 'undefined' || (inst != null && inst.hasOwnProperty ("__kwargtrans__"))) {;
			var inst = null;
		};
		__super__ (Logic, '__init__') (self, inst);
		self._alive = true;
		self._enabled = true;
		self._isEntered = false;
		Scheduler ().add (self);
	});},
	get _get_alive () {return __get__ (this, function (self) {
		return self._alive;
	});},
	get _set_alive () {return __get__ (this, function (self, value) {
		self._alive = value;
	});},
	get _get_uid () {return __get__ (this, function (self) {
		return self._uid;
	});},
	get _get_current () {return __get__ (this, function (self) {
		return self._current;
	});},
	get _get_enabled () {return __get__ (this, function (self) {
		return self._enabled;
	});},
	get _set_enabled () {return __get__ (this, function (self, value) {
		self._enabled = value;
	});},
	get _check () {return __get__ (this, function (self, is_seek) {
		return true;
	});},
	get _enter () {return __get__ (this, function (self) {
		self.onStart (self._inst, know, ...self._children);
		return ;
	});},
	get _exit () {return __get__ (this, function (self) {
		self.onStop (self._inst, know, ...self._children);
		return ;
	});},
	get _step () {return __get__ (this, function (self) {
		self.handleStage (self.LOG);
		self.onStep (self._inst, know, ...self._children);
		return ;
	});},
	get ref () {return __getcm__ (this, function (cls, py_name) {
		if (py_name === null || py_name === undefined) {
			return null;
		}
		var name_len = len (py_name);
		if (name_len <= 0) {
			if (LANGUAGE == 'cn') {
				std.error ('{}.ref'.format (cls.__name__), '参数name的传入值不能为空。');
			}
			else {
				std.error ('{}.ref'.format (cls.__name__), "The value of parameter 'name' cannot be empty.");
			}
			return null;
		}
		if (!(py_name [name_len - 1].isdigit ())) {
			var insts = cls.__names__.py_get (py_name, dict ({}));
			var insts = list (insts.py_values ());
			return insts;
		}
		else {
			if (name_len <= 1) {
				var error_msg = (LANGUAGE == 'cn' ? '{}.ref: 传入的参数name的值不能只包含数字: {}'.format (cls.__name__, py_name) : "{}.ref: The value of parameter 'name' cannot only contain numbers: {}".format (cls.__name__, py_name));
				std.error (error_msg);
				return null;
			}
			for (var i = name_len - 2; i > -(1); i--) {
				if (!(py_name [i].isdigit ())) {
					var name_part = py_name.__getslice__ (0, i + 1, 1);
					var num_part = int (py_name.__getslice__ (i + 1, null, 1));
					var insts = cls.__names__.py_get (name_part, dict ({}));
					var insts_list = list (insts.py_values ());
					if (num_part < len (insts_list)) {
						return insts_list [num_part];
					}
					else {
						return null;
					}
				}
			}
			return null;
		}
	});},
	get refLast () {return __get__ (this, function (self) {
		var lst = self.ref (self._name);
		if (lst === null) {
			if (LANGUAGE == 'cn') {
				std.warn ('{}.refLast'.format (self._name), '指定的基础名不存在: ' + self._name);
			}
			else {
				std.warn ('{}.refLast'.format (self._name), 'The specified base name does not exist: ' + self._name);
			}
			return null;
		}
		var length = len (lst);
		if (length <= 1) {
			return null;
		}
		var found = -(1);
		for (var i = 1; i < length; i++) {
			if (lst [i] == self) {
				var found = i;
				break;
			}
		}
		if (found != -(1)) {
			return (found > 0 ? lst [found - 1] : null);
		}
		else {
			return null;
		}
	});},
	get refNext () {return __get__ (this, function (self) {
		var lst = self.ref (self._name);
		if (lst === null) {
			if (LANGUAGE == 'cn') {
				std.warn ('{}.refNext'.format (self._name), '指定的基础名不存在: ' + self._name);
			}
			else {
				std.warn ('{}.refNext'.format (self._name), 'The specified base name does not exist: ' + self._name);
			}
			return null;
		}
		var length = len (lst);
		if (length <= 1) {
			return null;
		}
		var found = -(1);
		for (var i = 0; i < length; i++) {
			if (lst [i] == self) {
				var found = i;
				break;
			}
		}
		if (found != -(1) && found < length - 1) {
			return lst [found + 1];
		}
		else {
			return null;
		}
	});},
	get refAdjacent () {return __get__ (this, function (self) {
		var instance_list = self.ref (self._name);
		if (instance_list === null) {
			return tuple ([null, null]);
		}
		var length = len (instance_list);
		if (length <= 1) {
			return tuple ([null, null]);
		}
		var current_index = -(1);
		for (var [idx, inst] of enumerate (instance_list)) {
			if (inst == self) {
				var current_index = idx;
				break;
			}
		}
		var prev_instance = (current_index > 0 ? instance_list [current_index - 1] : null);
		var next_instance = (current_index < length - 1 ? instance_list [current_index + 1] : null);
		return tuple ([prev_instance, next_instance]);
	});},
	get refEnd () {return __get__ (this, function (self) {
		var instance_list = self.ref (self._name);
		if (!(instance_list)) {
			return null;
		}
		return instance_list [-(1)];
	});},
	get onLoading () {return __get__ (this, function (self, it, k) {
		var children = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get onStart () {return __get__ (this, function (self, it, k) {
		var children = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get onStep () {return __get__ (this, function (self, it, k) {
		var children = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get onStop () {return __get__ (this, function (self, it, k) {
		var children = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get productQueue () {return function () {
		var res = [];
		var sch = Scheduler ();
		for (var logic of sch.updates) {
			if (logic._isEntered) {
				continue;
			}
			res.append (logic);
		}
		return res;
	};},
	get showQueue () {return __getcm__ (this, function (cls) {
		var queues = cls.productQueue ();
		if (len (queues) > 0) {
			if (LANGUAGE == 'cn') {
				std.info ('{}.showQueue'.format (cls.__name__), '当前等待生产creep的CreepLogic的实例列表: \n' + '\n'.join ((function () {
					var __accu0__ = [];
					for (var lc of queues) {
						__accu0__.append (str (lc));
					}
					return __accu0__;
				}) ()));
			}
			else {
				std.info ('{}.showQueue'.format (cls.__name__), 'Current list of CreepLogic waiting to produce creep: \n' + '\n'.join ((function () {
					var __accu0__ = [];
					for (var lc of queues) {
						__accu0__.append (str (lc));
					}
					return __accu0__;
				}) ()));
			}
		}
		else if (LANGUAGE == 'cn') {
			std.info ('{}.showQueue'.format (cls.__name__), '当前没有等待生产creep的CreepLogic的实例列表');
		}
		else {
			std.info ('{}.showQueue'.format (cls.__name__), 'No CreepLogic waiting to produce creep');
		}
		print ();
	});},
	get listenFor () {return __get__ (this, function (self, ename, callback, sources) {
		if (typeof sources == 'undefined' || (sources != null && sources.hasOwnProperty ("__kwargtrans__"))) {;
			var sources = null;
		};
		var sources = (sources ? sources : []);
		self._eda.listenFor (ename, callback, sources);
	});},
	get pushEvent () {return __get__ (this, function (self, ename, data) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		self._eda.pushEvent (ename, data);
	});},
	get cancelListen () {return __get__ (this, function (self, ename) {
		self._eda.cancelListen (ename);
	});},
	get schedule () {return __get__ (this, function (self, delay, callback) {
		self._scs.schedule (delay, callback);
	});},
	get cancelSchedule () {return __get__ (this, function (self, callback) {
		self._scs.cancelSchedule (callback);
	});},
	get __str__ () {return __get__ (this, function (self) {
		return '{}({})'.format (self.__class__.__name__, self._name);
	});}
}, StageMachineLogicMeta);
Object.defineProperty (Logic, 'enabled', property.call (Logic, Logic._get_enabled, Logic._set_enabled));
Object.defineProperty (Logic, 'current', property.call (Logic, Logic._get_current));
Object.defineProperty (Logic, 'uid', property.call (Logic, Logic._get_uid));
Object.defineProperty (Logic, 'alive', property.call (Logic, Logic._get_alive, Logic._set_alive));;
export var _CreepLogicSettings =  __class__ ('_CreepLogicSettings', [Logic], {
	__module__: __name__,
	DRAW: false,
	LAYER: 10,
	LINK: null,
	ONCE: true,
	SPAWNABLE: true,
	RECIPE: ['MOVE'],
	OPTIMISE: true,
	EXTENSION: true,
	DIRECTION: null
});
export var CreepLogic =  __class__ ('CreepLogic', [_CreepLogicSettings], {
	__module__: __name__,
	SCH: Scheduler (),
	NAME: 'CreepLogic',
	get __new__ () {return __get__ (this, function (args) {
		var spawn_creep_name = args [0];
		var _spawn = args [1];
		if (isinstance (spawn_creep_name, str)) {
			var proto = StageMachineLogicMeta.proto (spawn_creep_name);
			if (proto === null) {
				if (LANGUAGE == 'cn') {
					std.error ('CreepLogic', '未找到指定的爬虫逻辑: ' + spawn_creep_name);
				}
				else {
					std.error ('CreepLogic', 'CreepLogic not found: ' + spawn_creep_name);
				}
			}
			return proto (_spawn);
		}
		else {
			var obj = object.__new__.call(this, args);
			return obj;
		}
	});},
	get __init__ () {return __get__ (this, function (self, spawn_creep_name, _spawn) {
		if (typeof spawn_creep_name == 'undefined' || (spawn_creep_name != null && spawn_creep_name.hasOwnProperty ("__kwargtrans__"))) {;
			var spawn_creep_name = null;
		};
		if (typeof _spawn == 'undefined' || (_spawn != null && _spawn.hasOwnProperty ("__kwargtrans__"))) {;
			var _spawn = null;
		};
		__super__ (CreepLogic, '__init__') (self);
		self._creep = null;
		self._spawn = null;
		self.__param_in__ (spawn_creep_name, _spawn);
		self._recipe = (self.RECIPE.recipe ? self.RECIPE.recipe : self.RECIPE);
		self._extension = self.EXTENSION;
		self._view = (self.DRAW ? View (self.LAYER) : null);
		self._pv = new PartsVector(self._recipe);
		self._cost = PartsVector.partsCost (self._recipe);
		self._grade = PartsVector.partsGrade (self._recipe);
		self._expand_name = self.__expand_name__ (self._name, 16);
		self.__after_check__ ();
		if (self.__class__.LINK) {
			var tmp = self.__class__.LINK;
			self.__class__.LINK = null;
			if (isinstance (tmp, tuple ([list, tuple]))) {
				self.link (...tmp);
			}
			else if (isinstance (tmp, str)) {
				self.link (tmp);
			}
			else if (LANGUAGE == 'cn') {
				std.warn ('CreepLogic<{}>'.format (self._name), 'LINK属性必须是list或str, Got type=', str (py_typeof (tmp)));
			}
			else {
				std.warn ('CreepLogic<{}>'.format (self._name), 'LINK must be a list or str, Got type=', str (py_typeof (tmp)));
			}
		}
	});},
	get __param_in__ () {return __get__ (this, function (self, sc, _spawn) {
		if (st.spawn (sc)) {
			self._spawn = sc;
		}
		else if (st.creep (sc)) {
			self._creep = sc;
			self._creep.logic = self;
			self._creep.py_name = self._name;
			self._creep.name = self._name_;
			self._inst = self._creep;
		}
		if (_spawn && !(self._spawn)) {
			self._spawn = _spawn;
		}
	});},
	get __after_check__ () {return __get__ (this, function (self) {
		var name_len = len (self.NAME);
		if (name_len <= 0) {
			if (LANGUAGE == 'cn') {
				std.error ('CreepLogic'.format (), 'CreepLogic必须有非空的唯一NAME，当前:' + self.NAME);
			}
			else {
				std.error ('CreepLogic', 'CreepLogic must has not empty NAME, Got:' + self.NAME);
			}
		}
		if (self.NAME [name_len - 1].isdigit ()) {
			self.NAME += '_';
		}
		if (__in__ (self.NAME, CreepLogic.__types__) && self.__class__.__name__ !== CreepLogic.__types__ [self.NAME]) {
			if (LANGUAGE == 'cn') {
				std.error ('CreepLogic', 'CreepLogic必须具有唯一的NAME，当前:' + self.NAME, '上一个使用此NAME的class:' + self.__class__.__name__);
			}
			else {
				std.error ('CreepLogic', "CreepLogic must has unique type, Got '" + self.NAME, "' last used by class " + self.__class__.__name__);
			}
		}
		else {
			CreepLogic.__types__ [self._name] = self.__class__.__name__;
		}
		if (!__in__ (self.NAME, CreepLogic.__names__)) {
			CreepLogic.__names__ [self.NAME] = dict ({});
		}
		CreepLogic.__names__ [self.NAME] [self._uid] = self;
		if (!(self._recipe)) {
			if (LANGUAGE == 'cn') {
				std.error ('CreepLogic<{}>'.format (self._name), 'CreepLogic必须含有正确的属性: RECIPE。当前类型:' + str (py_typeof (self._recipe)));
			}
			else {
				std.error ('CreepLogic<{}>'.format (self._name), 'CreepLogic must has correct property: RECIPE. Got type:' + str (py_typeof (self._recipe)));
			}
		}
	});},
	get creeps () {return function () {
		var logics = tuple ([].slice.apply (arguments).slice (0));
		return (function () {
			var __accu0__ = [];
			for (var logic of logics) {
				__accu0__.append ((st.creep (logic._creep) ? logic._creep : null));
			}
			return __accu0__;
		}) ();
	};},
	get _get_creep () {return __get__ (this, function (self) {
		return self._creep;
	});},
	get _get_spawn () {return __get__ (this, function (self) {
		return self._spawn;
	});},
	get _get_x () {return __get__ (this, function (self) {
		if (!(self._creep) || !(self._creep.exists)) {
			return undefined;
		}
		return self._creep.x;
	});},
	get _get_y () {return __get__ (this, function (self) {
		if (!(self._creep) || !(self._creep.exists)) {
			return undefined;
		}
		return self._creep.y;
	});},
	get _get_id () {return __get__ (this, function (self) {
		if (!(self._creep)) {
			return '';
		}
		return self._creep.id;
	});},
	get _get_exists () {return __get__ (this, function (self) {
		if (!(self._creep)) {
			return false;
		}
		return self._creep.exists;
	});},
	get _get_partsVector () {return __get__ (this, function (self) {
		if (self._creep && self._creep.exists) {
			return self._creep.partsVector;
		}
		return self._pv;
	});},
	get _get_cost () {return __get__ (this, function (self) {
		return self._cost;
	});},
	get _get_grade () {return __get__ (this, function (self) {
		if (!(self._creep) || !(self._creep.exists)) {
			return undefined;
		}
		return self._creep.grade;
	});},
	get _get_ready () {return __get__ (this, function (self) {
		return self._creep && self._creep.exists;
	});},
	get link () {return __get__ (this, function (self) {
		var next_logics = tuple ([].slice.apply (arguments).slice (1));
		if (len (next_logics) <= 0) {
			return [];
		}
		var results = [];
		try {
			for (var py_name of next_logics) {
				var _new = CreepLogic (py_name, self._spawn);
				results.append (_new);
				self.__add_child__ (_new);
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				var e = __except0__;
				std.error ('CreepLogic<{}>.link'.format (self.NAME), e);
			}
			else {
				throw __except0__;
			}
		}
		return results;
	});},
	get onLoading () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get onStart () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
	});},
	get onStep () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get onStop () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get onDraw () {return __get__ (this, function (self, c, v, k) {
		var refs = tuple ([].slice.apply (arguments).slice (4));
		// pass;
	});},
	get onKilled () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});},
	get _check () {return __get__ (this, function (self, is_seek) {
		var result = self._creep && self._creep.exists;
		var result = bool (result);
		if (self._isEntered && !(result)) {
			self.onKilled (self._creep, know, ...self._children);
			if (self.ONCE) {
				self._alive = false;
			}
		}
		if (!(result) && self._spawn) {
			var result = self._spawn.seek (self._recipe, self.py_name, self.OPTIMISE, self.DIRECTION);
			if (result === true) {
				var result = false;
			}
			else if (result !== false) {
				self._creep = result;
				self._creep.logic = self;
				self._creep.py_name = self._name;
				self._inst = self._creep;
				var result = true;
			}
		}
		if (is_seek || result) {
			return result;
		}
		if (!(self.SPAWNABLE)) {
			return ;
		}
		if (!(self._recipe)) {
			self._alive = false;
			return false;
		}
		else if (self._spawn) {
			if (!(self._extension)) {
				if (get.energy (self._spawn) < self._cost) {
					return false;
				}
			}
			self._creep = self._spawn.create (self._recipe, self.py_name, self.OPTIMISE, self.DIRECTION);
			if (isinstance (self._creep, int) && self._creep > 0) {
				self._extension = true;
			}
			if (!(st.creep (self._creep))) {
				self._creep = null;
				return false;
			}
			self._inst = self._creep;
			self._creep.logic = self;
			self._extension = self.EXTENSION;
			return true;
		}
		else {
			if (LANGUAGE == 'cn') {
				std.error ('CreepLogic<{}>'.format (self.NAME), 'CreepLogic在初始化时没有传入spawn或creep，_check阶段无法创建或重生creep。');
			}
			else {
				std.error ('CreepLogic<{}>'.format (self.NAME), 'CreepLogic did not pass in a spawn or creep when initialized, and cannot create or respawn creep during the _check stage.');
			}
			return null;
		}
	});},
	get _step () {return __get__ (this, function (self) {
		self.handleStage (self.LOG);
		self.onStep (self._inst, know, ...self._children);
		return ;
	});},
	BRACKET_COLOR: std.ansi_color (255, 248, 220),
	BRACKET_COLOR2: std.ansi_color (255, 228, 225),
	get __get_state__ () {return function (logic) {
		return (logic.ready === undefined || logic.ready ? '🟢 ' : (logic.enabled ? '🔵 ' : (logic.alive ? '🟡 ' : '☠️')));
	};},
	get __expand_name__ () {return function (_name, _length) {
		var current_length = 0;
		for (var char of _name) {
			if (('一' <= char && char <= '鿿')) {
				current_length += 1.6;
			}
			else {
				current_length++;
			}
		}
		var current_length = math.ceil (current_length);
		if (current_length >= _length) {
			return _name;
		}
		var spaces_to_add = _length - current_length;
		var expanded_blanks = [];
		for (var i = 0; i < spaces_to_add; i++) {
			expanded_blanks.append (' ');
		}
		var expanded_name = _name + ''.join (expanded_blanks);
		return expanded_name;
	};},
	get __str__ () {return __get__ (this, function (self) {
		var creep_flag = st.creep (self._creep);
		var spawn_flag = st.spawn (self._spawn);
		if (creep_flag) {
			var creep_string = str (self._creep);
		}
		else {
			var creep_string = std.wrap_bracket ((LANGUAGE == 'cn' ? '未绑定Creep' : 'No Creep'), '[', self.BRACKET_COLOR2);
		}
		if (spawn_flag) {
			var spawn_string = str (self._spawn);
		}
		else {
			var spawn_string = std.wrap_bracket ((LANGUAGE == 'cn' ? '未绑定Spawn' : 'No Spawn'), '[', self.BRACKET_COLOR2);
		}
		if (creep_flag) {
			var spawn_string = '';
		}
		else if (spawn_flag) {
			var creep_string = '';
		}
		if (!(self._parent) || self._parent.ready) {
			var after_string = '{}{}'.format (creep_string, spawn_string);
		}
		else {
			var after_string = std.wrap_bracket ('{}{}'.format (self.__get_state__ (self._parent), self._parent.py_name), '[', self.BRACKET_COLOR);
		}
		return '{}{} {}'.format (self.__get_state__ (self), self._expand_name, after_string);
	});}
}, StageMachineLogicMeta);
Object.defineProperty (CreepLogic, 'ready', property.call (CreepLogic, CreepLogic._get_ready));
Object.defineProperty (CreepLogic, 'grade', property.call (CreepLogic, CreepLogic._get_grade));
Object.defineProperty (CreepLogic, 'cost', property.call (CreepLogic, CreepLogic._get_cost));
Object.defineProperty (CreepLogic, 'partsVector', property.call (CreepLogic, CreepLogic._get_partsVector));
Object.defineProperty (CreepLogic, 'exists', property.call (CreepLogic, CreepLogic._get_exists));
Object.defineProperty (CreepLogic, 'id', property.call (CreepLogic, CreepLogic._get_id));
Object.defineProperty (CreepLogic, 'y', property.call (CreepLogic, CreepLogic._get_y));
Object.defineProperty (CreepLogic, 'x', property.call (CreepLogic, CreepLogic._get_x));
Object.defineProperty (CreepLogic, 'spawn', property.call (CreepLogic, CreepLogic._get_spawn));
Object.defineProperty (CreepLogic, 'creep', property.call (CreepLogic, CreepLogic._get_creep));;
export var Mate =  __class__ ('Mate', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, name_creep_logic, spawn) {
		if (typeof spawn == 'undefined' || (spawn != null && spawn.hasOwnProperty ("__kwargtrans__"))) {;
			var spawn = null;
		};
		self._name = null;
		self._proto = null;
		self._logic = null;
		self._spawn = spawn;
		self._current_tick = 0;
		self._current_result = null;
		self._no_spawn_warn_flag = false;
		if (isinstance (name_creep_logic, str)) {
			self._name = name_creep_logic;
			self._proto = StageMachineLogicMeta.proto (name_creep_logic);
			if (!(self._proto)) {
				if (LANGUAGE == 'cn') {
					std.error ('Mate<{}>'.format (self._name), '未找到指定的CreepLogic: ' + name_creep_logic);
				}
				else {
					std.error ('Mate<{}>'.format (self._name), 'CreepLogic not found: ' + name_creep_logic);
				}
			}
		}
		else if (isinstance (name_creep_logic, Creep)) {
			self._logic = name_creep_logic.logic;
			if (!(self._logic)) {
				if (LANGUAGE == 'cn') {
					std.error ('Mate', 'Creep实例未绑定CreepLogic. Creep:', str (name_creep_logic));
				}
				else {
					std.error ('Mate', 'Creep instance is not bound to CreepLogic. Creep:', str (name_creep_logic));
				}
			}
			self._name = self._logic.NAME;
			self._proto = self._logic.__class__;
		}
		else if (isinstance (name_creep_logic, CreepLogic)) {
			self._name = name_creep_logic.NAME;
			self._proto = name_creep_logic;
		}
		else if (LANGUAGE == 'cn') {
			std.error ('Mate', '参数错误: name_creep_logic必须是str或Creep或CreepLogic类型');
		}
		else {
			std.error ('Mate', 'Parameter error: name_creep_logic must be of type str or Creep or CreepLogic');
		}
	});},
	get __get__ () {return __get__ (this, function (self, instance, owner) {
		if (know.now === self._current_tick) {
			return self._current_result;
		}
		self._current_tick = know.now;
		self._current_result = self.__respawn__ ();
		return self._current_result;
	});},
	get __set__ () {return __get__ (this, function (self, instance, value) {
		if (isinstance (value, StructureSpawn)) {
			self._spawn = value;
		}
		else if (isinstance (value, str)) {
			self._name = value;
			self._proto = StageMachineLogicMeta.proto (value);
			if (!(self._proto)) {
				if (LANGUAGE == 'cn') {
					std.error ('Mate<{}>'.format (self._name), '未找到指定的CreepLogic: ' + value);
				}
				else {
					std.error ('Mate<{}>'.format (self._name), 'CreepLogic not found: ' + value);
				}
			}
		}
		else if (isinstance (value, Creep)) {
			self._logic = value.logic;
			if (!(self._logic)) {
				if (LANGUAGE == 'cn') {
					std.error ('Mate', 'Creep实例未绑定CreepLogic. Creep:', str (value));
				}
				else {
					std.error ('Mate', 'Creep instance is not bound to CreepLogic. Creep:', str (value));
				}
			}
			self._name = self._logic.NAME;
			self._proto = self._logic.__class__;
		}
		else if (isinstance (value, CreepLogic)) {
			self._name = value.NAME;
			self._proto = value;
		}
		else if (LANGUAGE == 'cn') {
			std.error ('Mate', '参数错误: value必须是str或Creep或CreepLogic类型');
		}
		else {
			std.error ('Mate', "Parameter error: 'value' must be of type str or Creep or CreepLogic");
		}
		self._no_spawn_warn_flag = false;
	});},
	get __respawn__ () {return __get__ (this, function (self) {
		if (self._logic && self._logic.ready) {
			return self._logic.creep;
		}
		if (!(self._spawn)) {
			if (!(self._no_spawn_warn_flag)) {
				if (LANGUAGE == 'cn') {
					std.warn ('Mate<{}>'.format (self._name), '未指定spawn，无法respawn.');
				}
				else {
					std.warn ('Mate<{}>'.format (self._name), 'Spawn not specified, unable to respawn.');
				}
				self._no_spawn_warn_flag = true;
			}
			return null;
		}
	});}
});
export var TeamLogic =  __class__ ('TeamLogic', [Logic], {
	__module__: __name__,
	NAME: 'TeamLogic',
	get __init__ () {return __get__ (this, function (self) {
		__super__ (TeamLogic, '__init__') (self);
		self._mates = self.__scan_mates__ ();
	});},
	get __scan_mates__ () {return __get__ (this, function (self) {
		var mates = dict ({});
		for (var [key, value] of self.__class__.__dict__.py_items ()) {
			if (isinstance (value, Mate)) {
				mates [key] = value;
			}
		}
		return mates;
	});}
});

//# sourceMappingURL=builtin.engine.map

    // Transcrypt'ed from Python, 2025-03-14 01:36:59
var __name__ = '__main__';
export var CarrierType =  __class__ ('CarrierType', [CreepLogic], {
	__module__: __name__,
	NAME: 'Carrier',
	LINK: ['Carrier', 'Builder', 'Healer', 'Worrier', 'Healer', 'Worrier'],
	RECIPE: [MOVE, CARRY],
	get onStep () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		c.carry (get.find (BOXES, st.energetic), self.spawn);
	});}
});
export var BuilderType =  __class__ ('BuilderType', [CreepLogic], {
	__module__: __name__,
	NAME: 'Builder',
	RECIPE: [MOVE, WORK, CARRY],
	DIRECTION: TOP,
	get onLoading () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		self.site = ConstructionSite.plan (SPAWN.x, SPAWN.y, StructureRampart);
	});},
	get build_rampart () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		if (st.site (self.site)) {
			c.fetch (SPAWN);
			c.build (self.site);
		}
		else {
			c.deposit (SPAWN);
			return 'idle';
		}
	});},
	get idle () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		// pass;
	});}
});
export var WorrierType =  __class__ ('WorrierType', [CreepLogic], {
	__module__: __name__,
	NAME: 'Worrier',
	RECIPE: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK],
	get onStep () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		c.autoAttack ();
		c.move (ESPAWN);
	});}
});
export var HealerType =  __class__ ('HealerType', [CreepLogic], {
	__module__: __name__,
	NAME: 'Healer',
	RECIPE: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL],
	get onStep () {return __get__ (this, function (self, c, k) {
		var refs = tuple ([].slice.apply (arguments).slice (3));
		c.autoHeal ();
		var follow_target = null;
		var worrier_logic = self.ref ('Worrier{}'.format (self.uid));
		if (worrier_logic && worrier_logic.ready) {
			var follow_target = worrier_logic.creep;
		}
		else {
			var follow_target = get.creep ((function __lambda__ (it) {
				return it != c && it.my;
			}));
		}
		if (follow_target) {
			c.follow (follow_target, 1);
		}
	});}
});
export var init = function (k) {
	CreepLogic ('Carrier', SPAWN);
};
export var step = function (k) {
	CreepLogic.showQueue ();
};

//# sourceMappingURL=main.map

export var sch = Scheduler();
var monitor = Monitor(1);
know.now = 0;

StageMachineLogicMeta.__types__ = [];  // 清空js首次构造时引入的数据
StageMachineLogicMeta.__recursive__ = [];  // 清空js首次构造时引入的数据
__init_my_exists_creep_before_k__();
let knowCost = 0;
let monitorCost = 0;
let stepCost = 0;
let timeLine = 0;
export var loop = function () {
	get.handle();
	know.now = get.now;
	timeLine = get.cpu_us();
    know.handle();
    knowCost = get.cpu_us() - timeLine;
	if (know.now === 1) {
	    std.show_welcome();
		init (know);
		
	}
	
    timeLine = get.cpu_us();
    monitor.handle();
    monitorCost = get.cpu_us() - timeLine;
    for (const creep of get.creeps()){
        creep.handle();
    }
	step (know);
    timeLine = get.cpu_us();
	sch.handle();
	stepCost = get.cpu_us() - timeLine;
	std.show_usage ();
	print("knowCost:", knowCost, "monitorCost:", monitorCost, "stepCost:", stepCost);
};
    