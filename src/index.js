const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'messages':
      require('./cmds/messages')(args)
      break

      case 'help':
      require('./cmds/help')(args)
      break

      case 'version':
      require('./cmds/version')(args)
      break

      case 'assignments':
      require('./cmds/assignments')(args)
      break

      case 'announcements':
      require('./cmds/announcements')(args)
      break


      
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}