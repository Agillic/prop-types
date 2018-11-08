const notOnlyWhiteSpace = ((props, propName, componentName) => {
  if ((typeof props[propName] === 'string') && (props[propName].trim().length < 1)) {
    return new TypeError(`${propName} should not contain only whitespace in ${componentName}`)
  }
  return null
})

export default notOnlyWhiteSpace
