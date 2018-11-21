// This could have been solved with dynamic imports, however using require is more readable

module.exports = process.env.NODE_ENV === 'production' ? require('./mocks') : require('./validators')
