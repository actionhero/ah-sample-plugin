const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const path = require('path')

process.env.PROJECT_ROOT = path.join(__dirname, '..', 'node_modules', 'actionhero')

const ActionHero = require('actionhero')
const actionhero = new ActionHero.Process()
let api

describe('Action Delta Middleware', () => {
  before(async () => {
    let configChanges = {
      'ah-sample-plugin': { timingKey: 'delta' },
      plugins: {
        'ah-sample-plugin': { path: path.join(__dirname, '..') }
      }
    }
    api = await actionhero.start({ configChanges })
  })

  after(async () => { await actionhero.stop() })

  it('Actions work like normal, but also have the new timing key', async () => {
    let { randomNumber, delta } = await api.specHelper.runAction('randomNumber')
    expect(randomNumber).to.be.at.least(0)
    expect(randomNumber).to.be.at.most(1)
    expect(delta).to.exist()
    expect(delta).to.be.above(-1)
  })

  it('can change the timing key', async () => {
    api.config['ah-sample-plugin'].timingKey = 'newKey'
    let { randomNumber, delta, newKey } = await api.specHelper.runAction('randomNumber')
    expect(randomNumber).to.be.at.least(0)
    expect(randomNumber).to.be.at.most(1)
    expect(delta).not.to.exist()
    expect(newKey).to.exist()
    expect(newKey).to.be.above(-1)
  })
})
