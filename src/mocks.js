const noOp = () => null

noOp.isRequired = noOp

const noOpThunk = () => noOp

const propTypesValidatorsMocks = {
  differentFrom: noOpThunk,
  forbiddenBy: noOpThunk,
  greaterThan: noOpThunk,
  minimumLength: noOpThunk,
  notOnlyWhiteSpace: noOpThunk,
  requiredBy: noOpThunk
}

export {
  noOpThunk as differentFrom,
  noOpThunk as forbiddenBy,
  noOpThunk as greaterThan,
  noOpThunk as minimumLength,
  noOpThunk as notOnlyWhiteSpace,
  noOpThunk as requiredBy
}

export default propTypesValidatorsMocks

