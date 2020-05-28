"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var componentWithProps = function componentWithProps(_ref) {
  var propTypes = _ref.propTypes,
      checkPropTypes = _ref.checkPropTypes;
  return function (_ref2, propName, componentName) {
    var _ref2$children = _ref2.children,
        children = _ref2$children === void 0 ? [] : _ref2$children;
    children.forEach(function (_ref3) {
      var props = _ref3.props;
      checkPropTypes(propTypes, props, propName, componentName);
    });
    return null;
  };
};

var _default = componentWithProps;
exports.default = _default;