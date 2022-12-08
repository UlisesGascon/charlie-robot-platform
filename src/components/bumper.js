const five = require('johnny-five')

module.exports = (pin) => {
  const bumper = new five.Button({
    pin,
    isPullup: true
  })
  return {
    on (event, callback) {
      if (!['hit', 'blocked', 'released'].includes(event)) {
        throw new Error(`Event ${event} not supported`)
      }

      if (event === 'hit') {
        bumper.on('down', callback)
      }

      if (event === 'blocked') {
        bumper.on('hold', callback)
      }

      if (event === 'released') {
        bumper.on('up', callback)
      }
    }
  }
}
