const callbacks = []

const emitRisk = () => callbacks.forEach(callback => callback())

module.exports = (robot) => {
  ['B1', 'B2', 'B3'].forEach(bumper => {
    const component = robot.getComponent(bumper)
    component.on('hit', emitRisk)
    component.on('blocked', emitRisk)
  })

  return {
    on (event, callback) {
      if (event !== 'collision') {
        throw new Error(`Event ${event} not supported`)
      }

      callbacks.push(callback)
    }
  }
}
