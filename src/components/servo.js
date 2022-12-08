const { Servo } = require('johnny-five')

module.exports = (pin) => {
  return new Servo.Continuous(pin)
}
