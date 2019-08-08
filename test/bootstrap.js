const puppeteer = require('puppeteer')
const { expect } = require('chai')
const _ = require('lodash')
const chalk = require('chalk')

const globals = _.pick(global, ['browser', 'expect', 'chalk'])

const headfulness = { // eslint-disable-line no-unused-vars
  headless: false,
  devtools: true,
  defaultViewport: { width: 900, height: 800 },
  slowMo: 30, // milliseconds
}

const opts = {
  ...headfulness,
  args: [ '--start-maximized', '--window-size=1920,1040']
}

before(async () => {
  global.expect = expect
  global.browser = await puppeteer.launch(opts)
  global.chalk = chalk
  global.testData = {}
})

after(async () => {
  browser.close() // eslint-disable-line no-undef
  global.expect = globals.expect
  global.browser = globals.browser
  global.chalk = chalk
  global.testData = {}
})

beforeEach('set global testData values to this.testData', function() {
  // console.log(chalk.cyan('global testData at the start of beforeEach ' + JSON.stringify(testData)))
  this.testData = { ...global.testData }
  // console.log(chalk.cyan('this.testData at the end of beforeEach ' + JSON.stringify(this.testData)))
})

afterEach('set this.testData values to global testData', function() {
  // console.log(chalk.blue('this.testData at the start of afterEach ' + JSON.stringify(this.testData)))
  if (this.testData
  && Object.getPrototypeOf(this.testData).constructor.name === 'Object'
  && Object.keys(this.testData).length) {
    for (let key in this.testData) {
      global.testData[key] = this.testData[key]
    }
  }
  // console.log(chalk.blue('global testData at the end of afterEach ' + JSON.stringify(testData)))
})