import forEach from 'mocha-each'

import greaterThan from '../src/greaterThan'

const props = {
  testProp1: 'TestValue',
  testProp2: 3,
  testProp3: 'TestValue',
  testProp4: 4
}
const propName = 'testProp1'
const componentName = 'testComponent'

describe('GreaterThan unit tests', () => {
  forEach([
    ['no error when greaterThanProp is undefined', 'notExistingProp', [props, propName, componentName], null],
    ['no error when the original prop is undefined', 'testProp1', [props, 'notExistingProp', componentName], null],
    ['no error when the original props is greater', 'testProp2', [props, 'testProp4', componentName], null],
    ['error when the the original prop is not greater', 'testProp4', [props, 'testProp2', componentName], new TypeError('testProp2 has to be greater than testProp4 in testComponent')]
  ]).it('Should return %s', (s, greaterThanProp, propFunctionArguments, expected) => {
    expect(greaterThan(greaterThanProp)(...propFunctionArguments)).toEqual(expected)
  })
})
