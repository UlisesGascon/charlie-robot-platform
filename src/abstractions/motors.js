const callbacks = []

const emit = (type) => callbacks.filter(cb => cb.type === type).forEach(cb => cb.action())

module.exports = (robot) => {
  const rightMotor = robot.getComponent('RIGHT_MOTOR')
  const leftMotor = robot.getComponent('RIGHT_MOTOR')

  return {
    fullForward: () => {
      rightMotor.forward(255)
      leftMotor.forward(255)
      emit('move')
    },
    slowForward: () => {
      rightMotor.forward(100)
      leftMotor.forward(100)
      emit('move')
    },
    fullReverse: () => {
      rightMotor.reverse(255)
      leftMotor.reverse(255)
      emit('move')
    },
    slowReverse: () => {
      rightMotor.reverse(100)
      leftMotor.reverse(100)
      emit('move')
    },
    stop: () => {
      rightMotor.stop()
      leftMotor.stop()
      emit('stop')
    },
    on: (event, callback) => {
      if (!['move', 'stop'].includes(event)) {
        throw new Error(`Event ${event} not supported`)
      }

      callbacks.push({ type: event, action: callback })
    }
  }
}
