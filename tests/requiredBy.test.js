import forEach from 'mocha-each'

import requiredBy from '../src/requiredBy'

const props = {
  testProp1: 'TestValue',
  testProp2: 3,
  testProp3: 'TestValue'
}
const propName = 'testProp1'
const componentName = 'testComponent'

describe('RequiredBy unit tests', () => {
  forEach([
    ['no error when requiredProp is undefined', 'notExistingProp', [props, propName, componentName], null],
    ['no error when the original prop is defined', 'testProp1', [props, 'testProp1', componentName], null],
    ['error when the original prop is undefined', 'testProp3', [props, 'notDefinedProp', componentName], new TypeError('If testProp3 is defined in testComponent, notDefinedProp must also be defined.')]
  ]).it('Should return %s', (s, requiredByProp, propFunctionArguments, expected) => {
    expect(requiredBy(requiredByProp)(...propFunctionArguments)).toEqual(expected)
  })
})
