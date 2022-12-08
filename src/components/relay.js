const { Relay } = require('johnny-five')

module.exports = (pin) => {
  const relay = new Relay(pin)
  return {
    on: relay.on,
    off: relay.off
  }
}
