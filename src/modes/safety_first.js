module.exports = (robot) => {
  const TWO_SECONDS = 2000
  const motors = robot.getComponent('MOTORS')
  const obstaclesDetection = robot.getComponent('OBSTACLES_DETECTION')
  const collisionDetection = robot.getComponent('COLLISION_DETECTION')
  const rightLight = robot.getComponent('RIGHT_LIGHT')
  const leftLight = robot.getComponent('LEFT_LIGHT')
  const siren = robot.getComponent('SIREN')
  const rgb = robot.getComponent('RGB')

  // Ensure Lights are on
  rightLight.on()
  leftLight.on()

  // Attach Siren to movement
  motors.on('move', siren.on)
  motors.on('stop', siren.off)

  // Stop and reverse when collision detected
  collisionDetection.on('collision', () => {
    motors.stop()
    rgb.fullRed()
    motors.slowReverse()
    setTimeout(() => {
      motors.stop()
    }, TWO_SECONDS)
  })

  // Slow down when obstacle detected
  obstaclesDetection.on('risk', motors.slowForward)
}
