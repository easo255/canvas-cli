# canvas-cli
Simple Node.js CLI for Canvas LMS  📖🎓

This CLI is developed for the University of Bergen canvas implementation, www.mitt.uib.no. Since the API for Canvas is the same for all implementations, it should work with other institutions as well. Some modifications may be necessary to ensure that all functionality works as expected, and the experience will largely depend on how your institution uses canvas. 

***Note: this is not in any way affiliated with Canvas LMS or the University of Bergen.***



## Usage
As of now, the CLI supports following commands: 

```
canvas [command] <options>
  
      
      version ............ show package version
      help ............... show help menu for a command
      messages .............. Get subject, date and participants of last unread messages
      announcements .............. Get unread announcements in a selected subject optional flag --all for getting read announcements
      assignments .............. Get all assignments in selected subject

```
## Setup
 - Create a file named `config.json` in the src folder that looks like this:
 
 ```` 
{
    "Token": "",
    "baseURL": ""
 } 
 ````
 
 And populate it with a token generated from canvas account settings, and url to your canvas LMS. Instructions here: 
 https://community.canvaslms.com/docs/DOC-14409-4214861717

 ## Make command global
 1. Make binary into executable. Run the following in project root
```` 
chmod +x bin/canvas-cli
 ````

 2. Try running the following to verify that everything is installed correctly, before creating symlink. While in the project root, try running the newly created executable. This should show you the 'help' screen of the CLI  
```` 
./bin/canvas-cli
 ````

 3. If all is fine, run the following in the project root. This wil make it accesible from outside the current directory
 ```` 
npm link 
 ````

 4. Verify by running the following from a new terminal
 ```` 
canvas
 ````

 5. Voila  :v:
 
 ## Documentation for Canvas LMS


`https://canvas.instructure.com/doc/api/`

 
