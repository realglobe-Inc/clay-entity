/**
 * Test case for decorate.
 * Runs with mocha.
 */
'use strict'

const Entity = require('../lib/entity.js')
const decorate = require('../lib/decorate.js')
const { generate: generateKeys } = require('clay-crypto')
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
    let { values } = entity
    ok(values.id)
    ok(values.$$at)

    {
      let caught
      try {
        entity.set({ id: 1 })
      } catch (e) {
        caught = e
      }
      ok(caught)
      notEqual(entity.toValues().id, 1)
      entity.set({ id: 1 }, { allowReserved: true })
      equal(entity.toValues().id, 1)
    }
  }))

  it('Mark as', () => co(function * () {
    let entity = decorate(new Entity({
      foo: 'this is foo'
    }))
    entity.as('hoge')
    equal(entity.as(), 'hoge')
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
