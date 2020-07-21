'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class SomeProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton('Some/String', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('./String'))(Config)
    })
    this.app.singleton('Some/Key', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('./Key'))(Config)
    })
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot() {
    //
  }
}

module.exports = SomeProvider
