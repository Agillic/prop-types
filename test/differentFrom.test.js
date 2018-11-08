import forEach from 'mocha-each'

import differentFrom from '../src/differentFrom'

const props = {
  testProp1: 'TestValue',
  testProp2: 3,
  testProp3: 'TestValue'
}
const propName = 'testProp1'
const componentName = 'testComponent'

describe('DifferentFrom unit tests', () => {
  forEach([
    ['no error when comparing the same props', 'testProp1', [props, propName, componentName], null],
    ['no error when differentFromProp is undefined', 'notExistingProp', [props, propName, componentName], null],
    ['no error when the original prop is undefined', 'testProp1', [props, 'notExistingProp', componentName], null],
    ['no error when the compared props are different', 'testProp2', [props, propName, componentName], null],
    ['error when the props are not different', 'testProp3', [props, propName, componentName], new TypeError('testProp3 should hold different value from testProp1 in testComponent.')]
  ]).it('Should return %s', (s, differentFromProp, propFunctionArguments, expected) => {
    expect(differentFrom(differentFromProp)(...propFunctionArguments)).toEqual(expected)
  })
})
