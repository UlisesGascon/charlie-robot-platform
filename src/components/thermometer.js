// see: https://github.com/rwaldron/johnny-five/blob/main/docs/temperature-MS5611.md
const { Thermometer } = require('johnny-five')

module.exports = (config) => {
  const thermometer = new Thermometer(config)

  return {
    on (event, callback) {
      if (event !== 'change') {
        throw new Error(`Event ${event} not supported`)
      }

      thermometer.on('change', callback)
    }
  }
}
