<p align="center">
    <img src="https://www.agillic.com/wp-content/uploads/2016/02/Logo.svg"
        height="170">
</p>

<p align="center">
  <a href="https://gitlab.com/agillic-ci/prop-types/commits/master"><img alt="pipeline status" src="https://gitlab.com/agillic-ci/prop-types/badges/master/pipeline.svg" /></a>
</p>
<p align="center">
  <a href="https://gitlab.com/agillic-ci/prop-types/commits/master"><img alt="coverage report" src="https://gitlab.com/agillic-ci/prop-types/badges/master/coverage.svg" /></a>
</p>


# Agillic Prop Types

Enhance your React PropTypes validators using these custom ones!
Made with :heart: by Agillic

## Installation

```sh
npm install --save-dev @agillic/prop-types
```

Or if you're using `yarn`

```sh
yarn add --dev @agillic/prop-types
```

## Usage

Agillic PropTypes are compatible with the standard React ones, so you can just import them and carry on with business as usual.

In order to import all the validators, use:

```javascript
import agillicPropTypes from '@agillic/prop-types'
```

or to import validators separately:

```javascript
import {nameOfValidator} from '@agillic/prop-types'
```

Or for some good old nostalgia:

```javascript
const agillicPropTypes = require('@agillic/prop-types')
```

Currently supported validators:

- `differentFrom`
- `requiredBy`
- `forbiddenBy`
- `greaterThan`
- `minimumLength`
- `notOnlyWhiteSpace`
- `componentWithProps`

### NPM Scrips description

- `build` - transpiles and builds project files and outputs them to the top-level `build` directory,
- `build:watch` - as above but additionally also watches for changes in the files and rebuilds as needed,
- `lint` - runs ESlint on all the files and outputs any warnings and errors to the console,
- `test` - runs all the tests in watch mode,
- `help` - shows description of the project's NPM scripts.

### differentFrom

`differentFrom` validator checks that the validated prop is different from the one given as argument.

```javascript
MyComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: differentFrom('firstName')
}
```

This will return a `lastName should hold different value from firstName in MyComponent` `TypeError` if the `firstName` and `lastName` are equal (using Strict Equality Comparison)

### requiredBy

`requiredBy` validator checks that if the prop given as an argument is defined the validated prop also needs to be defined.

```javascript
MyComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: requiredBy('firstName')
}
```

This will return a `If lastName is defined in MyComponent, firstName must also be defined`

### forbiddenBy

`forbiddenBy` validator checks that if the prop given as argument is defined the validated prop must not be defined.

```javascript
MyComponent.propTypes = {
  photoUrl: PropTypes.string,
  backgroundColor: forbiddenBy('photoUrl')
}
```

This will return an `If photoUrl is pressent in MyComponent, backgroundColor must be undefined` `TypeError` in case when `photoUrl` and `backgroundColor` are both defined (not `undefined`).

### greaterThan

`greaterThan` validator checks that the value of the validated prop is greater than the value of the given prop.

```javascript
MyComponent.propTypes = {
  childAge: PropTypes.number,
  parentAge: greaterThan('childAge')
}
```

This will return a `parentAge has to be greater than childAge in MyComponent` `TypeError` in case when the value of `parentAge` is not greater than the value of `childAge`.

### minimumLength

`minimumLength` validator checks that the validated prop has a minimal length.

```javascript
MyComponent.propTypes = {
  username: minimumLength(5)
}
```

This will return a `username\'s length has to be at least 5 in MyComponent` `TypeError` in case when the length of `username` is less than `5`.

### notOnlyWhiteSpace

`notOnlyWhiteSpace` validator checks that the validated prop is not composed of only white space.

```javascript
MyComponent.propTypes = {
  username: notOnlyWhiteSpace
}
```

This will return a `username should not contain only whitespace in MyComponent` in case `username` is only white space.

### componentWithProps

`componentWithProps` is typically used on the `children` prop as a means of performing an ordinary prop types check on nested components

An example use-case would be a child component which is being stripped of its props in the parent component. Will run validation for all child components.

 *NB:* Utilizing the RORO pattern, `componentWithProps` only takes one parameter with two properties:
- `propTypes`: the prop types
- `checkPropTypes`: the original `checkPropTypes` fn from facebook's [prop-types](https://github.com/facebook/prop-types) project

```javascript
MyComponent.propTypes = {
  children: componentWithProps({
    propTypes: {
      firstName: PropTypes.string,
      isAdmin: PropTypes.bool
    },
    checkPropTypes
  })
}
```

## Scripts

- `npm run build:watch` will transpile all the sources on file save,
- `npm test` will run tests in watch mode,
- `npm run test:coverage` will run tests and report coverage statistics,
- `npm run lint` will lint the source files.

## See also
Agillic PropTypes work great in combination with [the original React PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), as well as [the amazing extension created by AirBnB](https://github.com/airbnb/prop-types)

Check out the following example:

```javascript
MyComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: and([
    PropTypes.string,
    requiredBy('firstName')
  ])
}
```

Here we use a combination of `PropTypes.string` from React, `and` from AirBnB and `requiredBy` from Agillic.

## Chaining isRequired

Chaining `isRequired` in Agillic PropTypes validators is not supported. If you want to rely on `isRequired` rules, we recommend that you use basic React PropTypes validators that do support the chaining of `isRequired` in combination with `and` from AirBnB PropTypes:

```javascript
MyComponent.propTypes = {
  secretCode: and([
    PropTypes.string.isRequired,
    notOnlyWhiteSpace()
  ])
}

```
