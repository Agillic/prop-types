const greaterThan = greaterThanPropName => ((props, propName, componentName) => {
  if (props[propName] === undefined) {
    return null
  }
  if (props[greaterThanPropName] && props[propName]) {
    if (props[greaterThanPropName] > props[propName]) {
      return new TypeError(`${propName} has to be greater than ${greaterThanPropName} in ${componentName}`)
    }
  }
  return null
})

export default greaterThan
