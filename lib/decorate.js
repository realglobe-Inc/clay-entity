/**
 * Decorate an entity
 * @function decorate
 * @param {Entity} decorate
 * @returns {DecoratedEntity}
 */
'use strict'

const {EntitySpec, LogPrefixes} = require('clay-constants')
const {RESERVED_ATTRIBUTES} = EntitySpec
const {cleanup, clone} = require('asobj')
const {sign, verify} = require('clay-crypto')
const reservedAttributeNames = RESERVED_ATTRIBUTES.split(',')

const sealTarget = (values) => clone(values, {
  without: ['id', '$$seal']
})

/**
 * @class DecoratedEntity
 * @param {Entity} entity - Entity to decorate
 */
class DecoratedEntity {
  constructor (entity) {
    this.entity = entity
  }

  /**
   * Get entity attribute.
   * @method DecoratedEntity#get
   * @param {?string} name - Name of attribute
   * @returns {*} values
   */
  get (name) {
    const {entity} = this
    if (arguments.length === 0) {
      return Object.keys(entity)
        .filter((name) => name !== 'id')
        .reduce((values, name) => Object.assign(values, {
          [name]: entity[name]
        }), {})
    }
    return entity[name]
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
   * @param {Object} [options={}] - Optional settings
   * @param {boolean} [options.allowReserved=false] - Allow to set reserved
   * @returns {DecoratedEntity} Returns this
   */
  set (attributes, options = {}) {
    let {
      allowReserved = false
    } = options
    const {entity} = this
    switch (arguments.length) {
      case 0:
        throw new Error('name and value is required')
      case 1:
        break
      default: {
        if (typeof arguments[0] === 'string') {
          let name = arguments[0]
          let value = arguments[1]
          return this.set({[name]: value}, arguments[3])
        }
      }
    }
    for (let name of Object.keys(attributes)) {
      let isReserved = !!~reservedAttributeNames.indexOf(name)
      if (isReserved && !allowReserved) {
        throw new Error(`[clay-entity] Cannot set ${name} because it is reserved`)
      }
      entity[name] = attributes[name]
    }
    this.at(new Date())
    return this
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
    const {entity} = this
    if (arguments.length === 0) {
      return entity.$$at
    }
    entity.$$at = at
    return this
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
    const {entity} = this
    if (arguments.length === 0) {
      return entity.$$by
    }
    entity.$$by = by
    return this
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
    const {entity} = s
    if (arguments.length === 0) {
      return entity.$$seal
    }
    let values = s.toValues()
    entity.$$seal = sign(privateKey, sealTarget(values))
    return s
  }

  /**
   * Set resource name as as
   * @method DecoratedEntity#as
   * @param {string} as - As
   * @returns {DecoratedEntity} Returns this
   */
  /**
   * Get as
   * @method DecoratedEntity#as
   * @returns {string} As resource name
   */
  as (as) {
    const {entity} = this
    if (arguments.length === 0) {
      return entity.$$as
    }
    entity.$$as = String(as)
    return this
  }

  /**
   * Set entity number as num
   * @method DecoratedEntity#num
   * @param {string} num - As
   * @returns {DecoratedEntity} Returns this
   */
  /**
   * Get num
   * @method DecoratedEntity#num
   * @returns {string} As resource name
   */
  num (num) {
    const {entity} = this
    if (arguments.length === 0) {
      return entity.$$num
    }
    entity.$$num = Number(num)
    return this
  }

  /**
   * Verify the entity with public key
   * @param {string} publicKey
   * @returns {boolean}
   */
  verify (publicKey) {
    let values = this.toValues()
    return verify(publicKey, sealTarget(values), this.seal())
  }

  /** @deprecated */
  get values () {
    console.warn('`ClayEntity#values` is now deprecated. Use `ClayEntity.toValues() instead`')
    return this.toValues()
  }

  /**
   * Convert into value object
   * @returns {Object}
   */
  toValues () {
    const {id, $$as, $$at, $$by, $$seal} = this.entity
    return cleanup(Object.assign(this.get(), {id, $$as, $$at, $$by, $$seal}))
  }
}

/** @lends decorate */
function decorate (entity) {
  return new DecoratedEntity(entity)
}

module.exports = decorate
