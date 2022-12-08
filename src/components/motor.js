const { Motor } = require('johnny-five')

module.exports = (pins) => new Motor({ pins })
