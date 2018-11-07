const differentFrom = differentFromPropName => (props, propName, componentName) => {
  if (differentFromPropName !== propName) {
    if ((props[differentFromPropName] !== undefined) && (props[propName] !== undefined)) {
      if (props[propName] === props[differentFromPropName]) {
        return new TypeError(`${differentFromPropName} should hold different value from ${propName} in ${componentName}.`)
      }
    }
  }
  return null
}

export default differentFrom
