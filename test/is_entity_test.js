/**
 * Test case for isEntity.
 * Runs with mocha.
 */
'use strict'

const isEntity = require('../lib/is_entity.js')
const ClayEntity = require('../lib/entity')
const { ok } = require('assert')
const co = require('co')

describe('is-entity', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is entity', () => co(function * () {
    ok(isEntity(new ClayEntity()))
    ok(isEntity({ $$entity: true }))
    ok(!isEntity(ClayEntity))
    ok(!isEntity({}))
    ok(!isEntity(null))
    ok(!isEntity(undefined))
    ok(!isEntity(false))
    ok(!isEntity(true))
  }))
})

/* global describe, before, after, it */
