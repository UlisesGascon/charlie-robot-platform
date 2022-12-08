const callbacks = []
const values = {}

const emitRisk = () => {
  callbacks.forEach(callback => callback(values))
}

const validateChange = (sensor, minimumDistance) => (value) => {
  values[sensor] = value
  if (value.centimeters < minimumDistance) {
    emitRisk()
  }
}

module.exports = (robot, minimumDistance) => {
  const S1 = robot.getComponent('S1')
  const S2 = robot.getComponent('S2')
  const S3 = robot.getComponent('S3')
  const S4 = robot.getComponent('S4')
  const S5 = robot.getComponent('S5')

  S1.on('change', validateChange('S1', minimumDistance))
  S2.on('change', validateChange('S2', minimumDistance))
  S3.on('change', validateChange('S3', minimumDistance))
  S4.on('change', validateChange('S4', minimumDistance))
  S5.on('change', validateChange('S5', minimumDistance))

  return {
    on (event, callback) {
      if (event !== 'risk') {
        throw new Error(`Event ${event} not supported`)
      }

      callbacks.push(callback)
    }
  }
}
