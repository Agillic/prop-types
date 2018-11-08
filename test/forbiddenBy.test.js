import forEach from 'mocha-each'

import forbiddenBy from '../src/forbiddenBy'

const props = {
  testProp1: 'TestValue',
  testProp2: 3,
  testProp3: 'TestValue'
}
const propName = 'testProp1'
const componentName = 'testComponent'

describe('ForbiddenBy unit tests', () => {
  forEach([
    ['no error when forbiddenByProp is undefined', 'notExistingProp', [props, propName, componentName], null],
    ['no error when the original prop is undefined', 'testProp1', [props, 'notExistingProp', componentName], null],
    ['error when the forbiddenByProp is present', 'testProp3', [props, propName, componentName], new TypeError('If testProp3 is present in testComponent, testProp1 must be undefined')]
  ]).it('Should return %s', (s, forbiddenByProp, propFunctionArguments, expected) => {
    expect(forbiddenBy(forbiddenByProp)(...propFunctionArguments)).toEqual(expected)
  })
})
