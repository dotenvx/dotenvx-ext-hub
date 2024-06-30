#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

const packageJson = require('./../lib/helpers/packageJson')
const store = require('./../shared/store')
const { logger } = require('./../shared/logger')

// cli
program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)

const loginAction = require('./actions/login')
program
  .command('login')
  .description('authenticate to dotenvx hub')
  .option('-h, --hostname <url>', 'set hostname', store.getHostname())
  .action(function (...args) {
    logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')

    loginAction.apply(this, args)
  })

const pushAction = require('./actions/push')
program
  .command('push')
  .description('push .env.keys to dotenvx hub')
  .argument('[directory]', 'directory to push', '.')
  .option('-h, --hostname <url>', 'set hostname', store.getHostname())
  .action(function (...args) {
    logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')

    pushAction.apply(this, args)
  })

const pullAction = require('./actions/pull')
program
  .command('pull')
  .description('pull .env.keys from dotenvx hub')
  .argument('[directory]', 'directory to pull', '.')
  .option('-h, --hostname <url>', 'set hostname', store.getHostname())
  .action(function (...args) {
    logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')

    pullAction.apply(this, args)
  })

// const openAction = require('./actions/open')
// hub
//   .command('open')
//   .description('view repository on dotenvx hub')
//   .option('-h, --hostname <url>', 'set hostname', store.getHostname())
//   .action(function (...args) {
//     logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')
//
//     openAction.apply(this, args)
//   })
//
// const tokenAction = require('./actions/token')
// hub
//   .command('token')
//   .description('print the auth token dotenvx hub is configured to use')
//   .option('-h, --hostname <url>', 'set hostname', 'https://hub.dotenvx.com')
//   .action(function (...args) {
//     logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')
//
//     tokenAction.apply(this, args)
//   })
//
// const statusAction = require('./actions/status')
// hub
//   .command('status')
//   .description('display logged in user')
//   .action(function (...args) {
//     logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')
//
//     statusAction.apply(this, args)
//   })
//
// const logoutAction = require('./actions/logout')
// hub
//   .command('logout')
//   .description('log out this machine from dotenvx hub')
//   .option('-h, --hostname <url>', 'set hostname', store.getHostname())
//   .action(function (...args) {
//     logger.warn('DEPRECATION NOTICE: to be replaced by [dotenvx pro]')
//
//     logoutAction.apply(this, args)
//   })

program.parse(process.argv)
