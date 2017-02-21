/**
 * Create a ClayEntity instance
 * @function create
 * @param {...*} args
 * @returns {ClayEntity}
 */
'use strict'

const ClayEntity = require('./clay_entity')

/** @lends create */
function create (...args) {
  return new ClayEntity(...args)
}

module.exports = create
