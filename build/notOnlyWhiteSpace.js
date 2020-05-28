"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var notOnlyWhiteSpace = function notOnlyWhiteSpace(props, propName, componentName) {
  if (typeof props[propName] === 'string' && props[propName].trim().length < 1) {
    return new TypeError("".concat(propName, " should not contain only whitespace in ").concat(componentName));
  }

  return null;
};

var _default = notOnlyWhiteSpace;
exports.default = _default;