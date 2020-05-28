"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var differentFrom = function differentFrom(differentFromPropName) {
  return function (props, propName, componentName) {
    if (differentFromPropName !== propName) {
      if (props[differentFromPropName] !== undefined && props[propName] !== undefined) {
        if (props[propName] === props[differentFromPropName]) {
          return new TypeError("".concat(differentFromPropName, " should hold different value from ").concat(propName, " in ").concat(componentName, "."));
        }
      }
    }

    return null;
  };
};

var _default = differentFrom;
exports.default = _default;