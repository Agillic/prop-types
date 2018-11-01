const minimumLength = minimumLengthValue => ((props, propName, componentName) => {
  if ((typeof props[propName] === 'string') && (props[propName].length < minimumLengthValue)) {
    return new TypeError(`${propName}'s length has to be at least ${minimumLengthValue} in ${componentName}`)
  }
  return null
})

export default minimumLength
