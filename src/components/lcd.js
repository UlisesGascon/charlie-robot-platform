const { LCD } = require('johnny-five')

module.exports = (config) => new LCD(config)
