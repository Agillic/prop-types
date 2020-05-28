"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "componentWithProps", {
  enumerable: true,
  get: function get() {
    return _componentWithProps.default;
  }
});
Object.defineProperty(exports, "differentFrom", {
  enumerable: true,
  get: function get() {
    return _differentFrom.default;
  }
});
Object.defineProperty(exports, "forbiddenBy", {
  enumerable: true,
  get: function get() {
    return _forbiddenBy.default;
  }
});
Object.defineProperty(exports, "greaterThan", {
  enumerable: true,
  get: function get() {
    return _greaterThan.default;
  }
});
Object.defineProperty(exports, "minimumLength", {
  enumerable: true,
  get: function get() {
    return _minimumLength.default;
  }
});
Object.defineProperty(exports, "notOnlyWhiteSpace", {
  enumerable: true,
  get: function get() {
    return _notOnlyWhiteSpace.default;
  }
});
Object.defineProperty(exports, "requiredBy", {
  enumerable: true,
  get: function get() {
    return _requiredBy.default;
  }
});
exports.default = void 0;

var _componentWithProps = _interopRequireDefault(require("./componentWithProps"));

var _differentFrom = _interopRequireDefault(require("./differentFrom"));

var _forbiddenBy = _interopRequireDefault(require("./forbiddenBy"));

var _greaterThan = _interopRequireDefault(require("./greaterThan"));

var _minimumLength = _interopRequireDefault(require("./minimumLength"));

var _notOnlyWhiteSpace = _interopRequireDefault(require("./notOnlyWhiteSpace"));

var _requiredBy = _interopRequireDefault(require("./requiredBy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypesValidators = {
  componentWithProps: _componentWithProps.default,
  differentFrom: _differentFrom.default,
  forbiddenBy: _forbiddenBy.default,
  greaterThan: _greaterThan.default,
  minimumLength: _minimumLength.default,
  notOnlyWhiteSpace: _notOnlyWhiteSpace.default,
  requiredBy: _requiredBy.default
};
var _default = propTypesValidators;
exports.default = _default;