/**
 * Test case for clayEntity.
 * Runs with mocha.
 */
'use strict'

const Entity = require('../lib/entity.js')
const { ok, equal, notEqual, deepEqual } = require('assert')
const co = require('co')

describe('clay-entity', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clay entity', () => co(function * () {
    let entity = new Entity({
      foo: 'bar'
    })
    deepEqual(Object.keys(entity).sort(), [ 'foo', 'id' ])

    ok(String(entity))
  }))
})

/* global describe, before, after, it */
