/**
 * Detect a instance is entity or not
 * @function isEntity
 * @param {*} obj - Object to check
 * @returns {boolean} is entity or not
 */
'use strict'

const ClayEntity = require('./entity')

/** @lends isEntity */
function isEntity (obj) {
  if (!obj) {
    return false
  }
  return obj instanceof ClayEntity || !!obj.$$entity
}

module.exports = isEntity
