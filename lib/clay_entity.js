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
    let { id = null } = attributes
    Object.assign(s, attributes, {
      id: new ClayId(id)
    })
  }

  /**
   * Convert into json
   * @returns {Object}
   */
  toJSON () {
    const s = this
    return Object.assign(s)
  }
}

module.exports = ClayEntity
