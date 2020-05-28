"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var requiredBy = function requiredBy(requierdByPropName) {
  return function (props, propName, componentName) {
    if (props[requierdByPropName] !== undefined) {
      if (props[propName] === undefined) {
        return new TypeError("If ".concat(requierdByPropName, " is defined in ").concat(componentName, ", ").concat(propName, " must also be defined."));
      }
    }

    return null;
  };
};

var _default = requiredBy;
exports.default = _default;