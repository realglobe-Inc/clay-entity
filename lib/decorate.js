/**
 * Decorate an entity
 * @function decorate
 * @param {Entity} decorate
 * @returns {DecoratedEntity}
 */
'use strict'

const { EntitySpec, LogPrefixes } = require('clay-constants')
const { RESERVED_ATTRIBUTES } = EntitySpec
const { cleanup } = require('asobj')
const { sign, verify } = require('clay-crypto')
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
   * Set value
   * @method DecoratedEntity#set
   * @param {string} name - Name of attribute to set
   * @param {*} value - Value to set
   * @returns {DecoratedEntity} Returns this
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
   * @returns {DecoratedEntity} Returns this
   */
  /**
   * Get $$at attribute
   * @method DecoratedEntity#at
   * @returns {Date}
   */
  at (at) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return entity.$$at
    }
    entity.$$at = at
    return s
  }

  /**
   * Set $$by attribute
   * @method DecoratedEntity#by
   * @param {?string} by - Lump id
   * @returns {DecoratedEntity} Returns this
   */
  /**
   * Get $$by attribute
   * @method DecoratedEntity#by
   * @returns {string}
   */
  by (by) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return entity.$$by
    }
    entity.$$by = by
    return s
  }

  /**
   * Seal this entity
   * @method DecoratedEntity#seal
   * @param {string} privateKey - Private key to seal
   * @returns {DecoratedEntity} Returns this
   */
  /**
   * Get seal
   * @method DecoratedEntity#seal
   * @returns {string}
   */
  seal (privateKey) {
    const s = this
    const { entity } = s
    if (arguments.length === 0) {
      return entity.$$seal
    }
    let values = s.toValues()
    delete values.$$seal
    entity.$$seal = sign(privateKey, values)
    return s
  }

  /**
   * Verify the entity with public key
   * @param {string} publicKey
   * @returns {boolean}
   */
  verify (publicKey) {
    const s = this
    let values = s.toValues()
    delete values.$$seal
    return verify(publicKey, values, s.seal())
  }

  /** @deprecated */
  get values () {
    const s = this
    console.warn('`ClayEntity#values` is now deprecated. Use `ClayEntity.toValues() instead`')
    return s.toValues()
  }

  /**
   * Convert into value object
   * @returns {Object}
   */
  toValues () {
    const s = this
    const { id, $$at, $$by, $$seal } = s.entity
    return cleanup(Object.assign(s.get(), { id, $$at, $$by, $$seal }))
  }

}

/** @lends decorate */
function decorate (entity) {
  return new DecoratedEntity(entity)
}

module.exports = decorate
