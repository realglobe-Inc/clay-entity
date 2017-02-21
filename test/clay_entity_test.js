/**
 * Test case for clayEntity.
 * Runs with mocha.
 */
'use strict'

const ClayEntity = require('../lib/clay_entity.js')
const assert = require('assert')
const co = require('co')

describe('clay-entity', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clay entity', () => co(function * () {
    let entity = new ClayEntity({
      foo: 'bar'
    })
    assert.deepEqual(Object.keys(entity).sort(), [ 'foo', 'id' ])
  }))
})

/* global describe, before, after, it */
