const forbiddenBy = forbiddenByPropName => (props, propName, componentName) => {
  if (props[forbiddenByPropName] !== undefined) {
    if (props[propName] !== undefined) {
      return new TypeError(`If ${forbiddenByPropName} is present in ${componentName}, ${propName} must be undefined`)
    }
  }
  return null
}

export default forbiddenBy
