import forEach from 'mocha-each'

import notOnlyWhiteSpace from '../src/notOnlyWhiteSpace'

const props = {
  testProp1: 'TestValue',
  testProp2: 3,
  testProp3: '   ',
  testProp4: 4
}
const propName = 'testProp1'
const componentName = 'testComponent'

describe('NotOnlyWhiteSpace unit tests', () => {
  forEach([
    ['no error when the given prop is not a string', [props, propName, componentName], null],
    ['no error when the given prop is not only white space', [props, 'testProp1', componentName], null],
    ['error when the the given prop is only white space', [props, 'testProp3', componentName], new TypeError('testProp3 should not contain only whitespace in testComponent')]
  ]).it('Should return %s', (s, propFunctionArguments, expected) => {
    expect(notOnlyWhiteSpace(...propFunctionArguments)).toEqual(expected)
  })
})
