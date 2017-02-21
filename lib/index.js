/**
 * Entity class for ClayDB
 * @module clay-entity
 */

'use strict'

const create = require('./create')
const ClayEntity = require('./clay_entity')

let lib = create.bind(this)

Object.assign(lib, ClayEntity, {
  create,
  ClayEntity
})

module.exports = lib
