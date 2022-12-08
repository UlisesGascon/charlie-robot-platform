const { Gyro } = require('johnny-five')

module.exports = (config) => {
  const gyro = new Gyro(config)

  gyro.recalibrate()

  return {
    on (event, callback) {
      if (event !== 'change') {
        throw new Error(`Event ${event} not supported`)
      }

      gyro.on('change', callback)
    }
  }
}
