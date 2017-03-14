/**
 * Entity class for ClayDB
 * @module clay-entity
 */

'use strict'

const create = require('./create')
const decorate = require('./decorate')
const isEntity = require('./is_entity')
const Entity = require('./entity')

let lib = create.bind(this)

Object.assign(lib, Entity, {
  create,
  decorate,
  Entity,
  isEntity
})

module.exports = lib
