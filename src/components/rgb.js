// See: https://github.com/rwaldron/johnny-five/blob/main/docs/led-rgb-intensity.md
const { Led } = require('johnny-five')
const red = '#FF0000'
const green = '#00FF00'
const blue = '#0000FF'

module.exports = ({ R, G, B }) => {
  const led = new Led.RGB([R, G, B])
  return {
    fullRed: () => led.color(red).intensity(100),
    fullGreen: () => led.color(green).intensity(100),
    fullBlue: () => led.color(blue).intensity(100),
    mediumRed: () => led.color(red).intensity(65),
    mediumGreen: () => led.color(green).intensity(65),
    mediumBlue: () => led.color(blue).intensity(65),
    lowRed: () => led.color(red).intensity(30),
    lowGreen: () => led.color(green).intensity(30),
    lowBlue: () => led.color(blue).intensity(30),
    ...led
  }
}
