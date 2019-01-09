const componentWithProps = ({propTypes, checkPropTypes}) => (({children = []}, propName, componentName) => {
  children.forEach(({props}) => {
    checkPropTypes(propTypes, props, propName, componentName)
  })
  return null
})

export default componentWithProps
