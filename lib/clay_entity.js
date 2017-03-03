/**
 * Entity class for ClayDB
 * @class ClayEntity
 * @param {Object} [attributes={}] - Attributes
 */
'use strict'

const ClayId = require('clay-id')
const { EntitySpec, LogPrefixes } = require('clay-constants')
const { sign } = require('clay-crypto')
const { RESERVED_ATTRIBUTES } = EntitySpec

const reservedAttributeNames = RESERVED_ATTRIBUTES.split(',')

/** @lends ClayEntity */
class ClayEntity {
  constructor (attributes = {}) {
    const s = this
    let { id } = attributes
    Object.assign(s, attributes, {
      id: new ClayId(id)
    })
  }

  /**
   * Get entity attribute.
   * @param {?string} name - Name of attribute
   * @returns {*} values
   */
  get (name) {
    const s = this
    if (arguments.length === 0) {
      return Object.keys(s)
        .filter((name) => !/^[_\$]/.test(name))
        .filter((name) => name !== 'id')
        .reduce((values, name) => Object.assign(values, {
          [name]: s[ name ]
        }), {})
    }
    return s[ name ]
  }

  /**
   * Get values
   * @method set
   * @param {string} name - Name of attribute to set
   * @param {*} value - Value to set
   */
  /**
   * Set values
   * @method set
   * @param {Object} attributes - Attributes to set
   */
  set (attributes) {
    const s = this
    switch (arguments.length) {
      case 0:
        throw new Error('name and value is required')
      case 1:
        break
      default: {
        let name = arguments[ 0 ]
        let value = arguments[ 1 ]
        return s.set({ [name]: value })
      }
    }
    for (let name of Object.keys(attributes)) {
      let isReserved = !!~reservedAttributeNames.indexOf(name)
      if (isReserved) {
        throw new Error(`[clay-entity] Cannot set ${name} because it is reserved`)
      }
      s[ name ] = attributes[ name ]
    }
    s.at(new Date())
  }

  /**
   * Set $$at attribute
   * @method at
   * @param {?Date} at - Date data set at
   */
  /**
   * Get $$at attribute
   * @method at
   * @returns {Date}
   */
  at (at) {
    const s = this
    if (arguments.length === 0) {
      return s.$$at
    }
    s.$$at = at
  }

  /**
   * Seal this entity
   * @method seal
   * @param {string} signingKey - Private key to seal
   */
  /**
   * Get seal
   * @method seal
   * @returns {string}
   */
  seal (signingKey) {
    const s = this
    if (arguments.length === 0) {
      return s.$$seal
    }
    let attributes = Object.assign(s.get(), s.at())
    let text = JSON.stringify(attributes)
    s.$$seal = sign(text, signingKey, {})
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
