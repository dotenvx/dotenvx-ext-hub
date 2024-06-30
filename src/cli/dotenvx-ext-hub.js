#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

const packageJson = require('./../lib/helpers/packageJson')

// cli
program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)

// dotenvx ext hub hello
program.command('hello')
  .description('say hello')
  .action(function (...args) {
    console.log('hello from [dotenvx ext hub]')
  })

program.parse(process.argv)
