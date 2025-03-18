
if (typeof gdjs.evtsExt__ObjectStack__Contains !== "undefined") {
  gdjs.evtsExt__ObjectStack__Contains.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectStack__Contains = {};
gdjs.evtsExt__ObjectStack__Contains.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__Contains.GDElementObjects1= [];


gdjs.evtsExt__ObjectStack__Contains.userFunc0x1408f00 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const stackBehaviorName = eventsFunctionContext.getBehaviorName("Behavior");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const stackObjectsLists = eventsFunctionContext.getObjectsLists("Object");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const elementObjectsLists = eventsFunctionContext.getObjectsLists("Element");

eventsFunctionContext.returnValue = gdjs.evtTools.object.twoListsTest(
  (stackObject, element) => {
    const behavior = stackObject.getBehavior(stackBehaviorName);
    return behavior.objectStack.contains(element);
  },
  stackObjectsLists,
  elementObjectsLists,
  false
);
};
gdjs.evtsExt__ObjectStack__Contains.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__Contains.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__Contains.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__Contains.userFunc0x1408f00(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__Contains.func = function(runtimeScene, Object, Behavior, Element, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Element": Element
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Element": gdjs.objectsListsToArray(Element)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectStack"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectStack"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectStack__Contains.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__Contains.GDElementObjects1.length = 0;

gdjs.evtsExt__ObjectStack__Contains.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectStack__Contains.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__Contains.GDElementObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectStack__Contains.registeredGdjsCallbacks = [];