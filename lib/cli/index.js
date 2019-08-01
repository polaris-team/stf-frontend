require('please-update-dependencies')(module)

const yargs = require('yargs')
const Promise = require('bluebird')
const app = require('./app')
const package = require('../../package')

Promise.longStackTraces()

yargs.usage('Usage: $0 <command> [options]')
  .strict()
  .command(app)
  .demandCommand(1, 'Must provide a valid command.')
  .help('h', 'Show help.')
  .alias('h', 'help')
  .version('V', 'Show version.', () => package.version)
  .alias('V', 'version')
  .argv
