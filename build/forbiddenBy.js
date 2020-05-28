"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var forbiddenBy = function forbiddenBy(forbiddenByPropName) {
  return function (props, propName, componentName) {
    if (props[forbiddenByPropName] !== undefined) {
      if (props[propName] !== undefined) {
        return new TypeError("If ".concat(forbiddenByPropName, " is present in ").concat(componentName, ", ").concat(propName, " must be undefined"));
      }
    }

    return null;
  };
};

var _default = forbiddenBy;
exports.default = _default;