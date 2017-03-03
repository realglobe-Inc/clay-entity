/**
 * Test case for clayEntity.
 * Runs with mocha.
 */
'use strict'

const ClayEntity = require('../lib/clay_entity.js')
const { ok, equal, notEqual, deepEqual } = require('assert')
const { generate: generateKeys } = require('clay-crypto')
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
    deepEqual(Object.keys(entity).sort(), [ 'foo', 'id' ])

    ok(String(entity))
  }))

  it('Get set', () => co(function * () {
    let entity = new ClayEntity({
      foo: 'this is foo'
    })
    entity.set({ foo2: 'this is foo2' })
    entity.set('foo3', 'this is foo3')
    equal(entity.get('foo'), 'this is foo')
    deepEqual(entity.get(), {
      foo: 'this is foo',
      foo2: 'this is foo2',
      foo3: 'this is foo3'
    })
    ok(entity.id)
    ok(entity.$$at)
  }))

  it('Seal', () => co(function * () {
    const { privateKey: privateKey01 } = generateKeys('hoge', 32)
    const { privateKey: privateKey02 } = generateKeys('hoge', 32)
    let entity = new ClayEntity({
      foo: 'this is foo'
    })
    entity.seal(privateKey01)
    let seal01 = entity.seal()
    entity.seal(privateKey01)
    let seal02 = entity.seal()
    equal(seal01, seal02)
    entity.seal(privateKey02)
    let seal03 = entity.seal()
    equal(seal01, seal03)
  }))
})

/* global describe, before, after, it */
