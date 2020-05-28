"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.requiredBy = exports.notOnlyWhiteSpace = exports.minimumLength = exports.greaterThan = exports.forbiddenBy = exports.differentFrom = exports.componentWithProps = void 0;

var noOp = function noOp() {
  return null;
};

noOp.isRequired = noOp;

var noOpThunk = function noOpThunk() {
  return noOp;
};

exports.requiredBy = exports.notOnlyWhiteSpace = exports.minimumLength = exports.greaterThan = exports.forbiddenBy = exports.differentFrom = exports.componentWithProps = noOpThunk;
var propTypesValidatorsMocks = {
  componentWithProps: noOpThunk,
  differentFrom: noOpThunk,
  forbiddenBy: noOpThunk,
  greaterThan: noOpThunk,
  minimumLength: noOpThunk,
  notOnlyWhiteSpace: noOpThunk,
  requiredBy: noOpThunk
};
var _default = propTypesValidatorsMocks;
exports.default = _default;