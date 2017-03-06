/**
 * Create a Entity instance
 * @function create
 * @param {...*} args
 * @returns {Entity}
 */
'use strict'

const Entity = require('./entity')

/** @lends create */
function create (...args) {
  return new Entity(...args)
}

module.exports = create
