const requiredBy = requierdByPropName => (props, propName, componentName) => {
  if (props[requierdByPropName] !== undefined) {
    if (props[propName] === undefined) {
      return new TypeError(`If ${requierdByPropName} is defined in ${componentName}, ${propName} must also be defined.`)
    }
  }
  return null
}

export default requiredBy
