"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var greaterThan = function greaterThan(greaterThanPropName) {
  return function (props, propName, componentName) {
    if (props[propName] === undefined) {
      return null;
    }

    if (props[greaterThanPropName] && props[propName]) {
      if (props[greaterThanPropName] > props[propName]) {
        return new TypeError("".concat(propName, " has to be greater than ").concat(greaterThanPropName, " in ").concat(componentName));
      }
    }

    return null;
  };
};

var _default = greaterThan;
exports.default = _default;