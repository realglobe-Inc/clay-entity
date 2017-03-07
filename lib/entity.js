/**
 * Entity class for ClayDB
 * @class ClayEntity
 * @param {Object} [attributes={}] - Attributes
 */
'use strict'

const ClayId = require('clay-id')

/** @lends ClayEntity */
class ClayEntity {
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

  // Converter for `String()`
  toString () {
    const s = this
    return `ClayEntity {${JSON.stringify(s.id)}}`
  }

  // Converter for `JSON.stringify`
  toJSON () {
    const s = this
    return Object.assign(s)
  }
}

module.exports = ClayEntity
