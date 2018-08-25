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
    const {id} = attributes
    Object.assign(this, attributes)
    if (id === false) {
      delete this.id
    } else {
      this.id = new ClayId(id)
    }
  }

  get $$entity () {
    return true
  }

  set $$entity ($$entity) {
    if (!$$entity) {
      throw new Error('`$$entity` must always true')
    }
  }

  // Converter for `String()`
  toString () {
    const s = this
    return `Entity {${JSON.stringify(s.id)}}`
  }

  // Converter for `JSON.stringify`
  toJSON () {
    return Object.assign({}, this, {$$entity: true, id: String(this.id)})
  }
}

module.exports = Entity
