/**
 * Test case for decorate.
 * Runs with mocha.
 */
'use strict'

const Entity = require('../lib/entity.js')
const decorate = require('../lib/decorate.js')
const { generate:generateKeys } = require('clay-crypto')
const { ok, equal, notEqual, deepEqual } = require('assert')
const co = require('co')

describe('decorate', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))
  it('Get set', () => co(function * () {
    let entity = decorate(new Entity({
      foo: 'this is foo'
    }))
    entity.set({ foo2: 'this is foo2' })
    entity.set('foo3', 'this is foo3')
    equal(entity.get('foo'), 'this is foo')
    deepEqual(entity.get(), {
      foo: 'this is foo',
      foo2: 'this is foo2',
      foo3: 'this is foo3'
    })
    let { values } = entity
    ok(values.id)
    ok(values.$$at)
  }))

  it('Seal and verify', () => co(function * () {
    let entity = decorate(new Entity({
      foo: 'this is foo'
    }))
    let { publicKey, privateKey } = generateKeys()
    entity.seal(privateKey)
    ok(entity.verify(publicKey))
    entity.set({ foo: 'bar' })
    ok(!entity.verify(publicKey))
  }))
})

/* global describe, before, after, it */
