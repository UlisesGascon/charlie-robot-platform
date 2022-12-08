const { Proximity } = require('johnny-five')

module.exports = (pin, range) => {
  const proximity = new Proximity({
    controller: 'GP2Y0A21YK',
    pin
  })

  return {
    on (event, callback) {
      if (event !== 'change') {
        throw new Error(`Event ${event} not supported`)
      }

      // Clean out values outside of range
      if (event === 'change') {
        proximity.on('change', proximity => {
          if (!range) {
            return callback(proximity)
          }

          if (proximity.centimeters >= range.min && proximity.centimeters <= range.max) {
            callback(proximity)
          }
        })
      }
    }
  }
}
