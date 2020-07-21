'use strict'

const uuidAPIKey = require('uuid-apikey')

class Key {
  /**
   * Create api key
   * @return {object}{
   *    uuid: string,
   *    apiKey: string
   * }
   */
  create() {
    return uuidAPIKey.create()
  }

  /**
   * Check is UUID
   * @param {string} uuid
   * @return {boolean}
   */
  isUUID(uuid) {
    return uuidAPIKey.isUUID(uuid)
  }

  /**
   * Check is APIKey
   * @param {string} apiKey
   * @return {boolean}
   */
  isAPIKey(apiKey) {
    return uuidAPIKey.isAPIKey(apiKey)
  }

  /**
   * Convert apiKey to UUID
   * @param {string} apiKey
   * @return {string}
   */
  toUUID(apiKey) {
    return uuidAPIKey.toUUID(apiKey)
  }

  /**
   * Check is apiKey invalid
   * @param {string} apiKey
   * @param {string} uuid
   * @return {string}
   */
  check(apiKey, uuid) {
    return uuidAPIKey.check(apiKey, uuid)
  }
}

module.exports = Key
