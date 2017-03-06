/**
 * Decorate an entity
 * @function decorate
 * @param {Entity} decorate
 * @returns {DecoratedEntity}
 */
'use strict'

const { EntitySpec, LogPrefixes } = require('clay-constants')
const { RESERVED_ATTRIBUTES } = EntitySpec
const reservedAttributeNames = RESERVED_ATTRIBUTES.split(',')

/**
 * @class DecoratedEntity
 * @param {Entity} entity - Entity to decorate
 */
class DecoratedEntity {
  constructor (entity) {
    const s = this
    s.entity = entity
  }

  /**
   * Get entity attribute.
   * @method DecoratedEntity#get
   * @param {?string} name - Name of attribute
   * @returns {*} values
   */
  get (name) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return Object.keys(entity)
        .filter((name) => !/^[_\$]/.test(name))
        .filter((name) => name !== 'id')
        .reduce((values, name) => Object.assign(values, {
          [name]: entity[ name ]
        }), {})
    }
    return entity[ name ]
  }

  /**
   * Get values
   * @method DecoratedEntity#set
   * @param {string} name - Name of attribute to set
   * @param {*} value - Value to set
   */
  /**
   * Set values
   * @method DecoratedEntity#set
   * @param {Object} attributes - Attributes to set
   * @returns {DecoratedEntity} Returns this
   */
  set (attributes) {
    const s = this
    const { entity } = s
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
      entity[ name ] = attributes[ name ]
    }
    s.at(new Date())
    return s
  }

  /**
   * Set $$at attribute
   * @method DecoratedEntity#at
   * @param {?Date} at - Date data set at
   */
  /**
   * Get $$at attribute
   * @method DecoratedEntity#at
   * @returns {Date}
   * @returns {DecoratedEntity} Returns this
   */
  at (at) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return s.$$at
    }
    entity.$$at = at
    return s
  }

  /**
   * Set $$by attribute
   * @method DecoratedEntity#by
   * @param {?string} by - Lump id
   */
  /**
   * Get $$by attribute
   * @method DecoratedEntity#by
   * @returns {string}
   * @returns {DecoratedEntity} Returns this
   */
  by (by) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return s.$$by
    }
    entity.$$by = by
    return s
  }

  /**
   * Seal this entity
   * @method DecoratedEntity#seal
   * @param {string} signingKey - Private key to seal
   */
  /**
   * Get seal
   * @method DecoratedEntity#seal
   * @returns {string}
   */
  seal (signingKey) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return s.$$seal
    }
    let attributes = Object.assign(s.get(), s.at())
    entity.$$seal = '' // TODO Generate signature with attributes
    return s
  }

  /**
   * Convert int ovalues
   * @returns {*}
   */
  get values () {
    const s = this
    const { id, $$at, $$by, $$seal } = s.entity
    return Object.assign(s.get(), { id, $$at, $$by, $$seal })
  }

}

/** @lends decorate */
function decorate (entity) {
  return new DecoratedEntity(entity)
}

module.exports = decorate
