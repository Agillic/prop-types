"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var minimumLength = function minimumLength(minimumLengthValue) {
  return function (props, propName, componentName) {
    if (typeof props[propName] === 'string' && props[propName].length < minimumLengthValue) {
      return new TypeError("".concat(propName, "'s length has to be at least ").concat(minimumLengthValue, " in ").concat(componentName));
    }

    return null;
  };
};

var _default = minimumLength;
exports.default = _default;