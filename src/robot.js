const components = {}
const five = require('johnny-five')

const init = () => new Promise((resolve, reject) => {
  const board = new five.Board()
  board.on('ready', () => {
    addComponent('board', board)
    resolve()
  })
  board.on('fail', (err) => {
    reject(err)
  })
})

const listComponents = () => Promise.resolve(Object.keys(components))

const getComponent = (name) => new Promise((resolve, reject) => {
  if (components[name]) {
    resolve(components[name])
  }
  reject(new Error(`Component ${name} not found`))
})

const addComponent = (name, component) => new Promise((resolve, reject) => {
  if (components[name]) {
    reject(new Error(`Component ${name} already exists`))
  }
  components[name] = component
  resolve(component)
})

const removeComponent = (name) => new Promise((resolve, reject) => {
  if (components[name]) {
    delete components[name]
    resolve()
  }
  reject(new Error(`Component ${name} not found`))
})

module.exports = {
  addComponent,
  removeComponent,
  getComponent,
  listComponents,
  init
}
