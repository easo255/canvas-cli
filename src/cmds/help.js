const menus = {
    main: `

      *******CANVAS CLI**********

      canvas [command] <options>
  
      
      version ............ show package version
      help ............... show help menu for a command
      messages .............. Get subject, date and participants of last unread messages
      announcements .............. Get unread announcements in a selected subject optional flag --all for getting read announcements
      assignments .............. Get all assignments in selected subject`,
  
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }