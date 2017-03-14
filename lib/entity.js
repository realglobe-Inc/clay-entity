/**
 * Entity class for ClayDB
 * @class Entity
 * @param {Object} [attributes={}] - Attributes
 */
'use strict'

const ClayId = require('clay-id')

/** @lends Entity */
class Entity {
  constructor (attributes = {}) {
    const s = this
    let { id } = attributes
    Object.assign(s, attributes)
    if (id === false) {
      delete s.id
    } else {
      s.id = new ClayId(id)
    }
  }

  get $$entity () {
    return true
  }

  // Converter for `String()`
  toString () {
    const s = this
    return `Entity {${JSON.stringify(s.id)}}`
  }

  // Converter for `JSON.stringify`
  toJSON () {
    const s = this
    return Object.assign(s)
  }
}

module.exports = Entity
