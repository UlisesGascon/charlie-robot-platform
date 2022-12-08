const { Piezo } = require('johnny-five')

module.exports = (pin) => new Piezo(pin)
