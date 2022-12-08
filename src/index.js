const components = require('./components')
const settings = require('./settings')
const robot = require('./robot')
// Components
const bumper = require('./components/bumper')
const proximity = require('./components/proximity')
const piezo = require('./components/piezo')
const rgb = require('./components/rgb')
const servo = require('./components/servo')
const relay = require('./components/relay')
const lcd = require('./components/lcd')
const motor = require('./components/motor')
const gyro = require('./components/gyro')
const thermometer = require('./components/thermometer')
// Abstractions
const collisionDetection = require('./abstractions/collision_detection')
const obstaclesDetection = require('./abstractions/obstacles_detection')
const motors = require('./abstractions/motors')
// Modes
const safetyFirst = require('./modes/safety_first')

;(async () => {
  await robot.init()

  // -- Register components
  await robot.addComponent('B1', bumper(components.BUMPERS.B1))
  await robot.addComponent('B2', bumper(components.BUMPERS.B2))
  await robot.addComponent('B3', bumper(components.BUMPERS.B3))
  await robot.addComponent('S1', proximity(components.PROXIMITY.S1), settings.proximity)
  await robot.addComponent('S2', proximity(components.PROXIMITY.S2), settings.proximity)
  await robot.addComponent('S3', proximity(components.PROXIMITY.S3), settings.proximity)
  await robot.addComponent('S4', proximity(components.PROXIMITY.S3), settings.proximity)
  await robot.addComponent('S5', proximity(components.PROXIMITY.S3), settings.proximity)
  await robot.addComponent('PIEZO', piezo(components.PIEZO))
  await robot.addComponent('RGB', rgb(components.RGB))
  await robot.addComponent('RIGHT_SERVO', servo(components.SERVO.RIGHT))
  await robot.addComponent('LEFT_SERVO', servo(components.SERVO.LEFT))
  await robot.addComponent('RIGHT_LIGHT', relay(components.RELAY.RIGHT_LIGHT))
  await robot.addComponent('LEFT_LIGHT', relay(components.RELAY.LEFT_LIGHT))
  await robot.addComponent('SIREN', relay(components.RELAY.SIREN))
  await robot.addComponent('RIGHT_MOTOR', motor(components.MOTOR.RIGHT))
  await robot.addComponent('LEFT_MOTOR', motor(components.MOTOR.LEFT))
  await robot.addComponent('LCD', lcd(components.LCD))
  await robot.addComponent('GYRO', gyro(components.GYRO))
  await robot.addComponent('THERMOMETER', thermometer(components.THERMOMETER))

  // -- Register Abstractions
  await robot.addComponent('MOTORS', motors(robot))
  await robot.addComponent('OBSTACLES_DETECTION', obstaclesDetection(robot, settings.obstacles.minimumDistance))
  await robot.addComponent('COLLISION_DETECTION', collisionDetection(robot))

  // -- Register Modes
  safetyFirst(robot)
})()
