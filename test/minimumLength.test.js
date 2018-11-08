import forEach from 'mocha-each'

import minimumLength from '../src/minimumLength'

const props = {
  testProp1: 'TestValue',
  testProp2: 3,
  testProp3: 'TestValue',
  testProp4: 4
}
const propName = 'testProp1'
const componentName = 'testComponent'

describe('MinimumLength unit tests', () => {
  forEach([
    ['no error when the given prop is not a string', 'testProp2', [props, propName, componentName], null],
    ['no error when the length of the props is greater than minimum', 5, [props, 'testProp1', componentName], null],
    ['error when the the length of the props is not greater than minimum', 12, [props, 'testProp1', componentName], new TypeError('testProp1\'s length has to be at least 12 in testComponent')]
  ]).it('Should return %s', (s, minimumLengthProp, propFunctionArguments, expected) => {
    expect(minimumLength(minimumLengthProp)(...propFunctionArguments)).toEqual(expected)
  })
})
