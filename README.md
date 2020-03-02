# canvas-cli
📖🎓Simple Node.js CLI for Canvas LMS  📖🎓

## Documentation for Canvas LMS


`https://canvas.instructure.com/doc/api/`

## Setup
 - Create a file named `config.json` in the src folder that looks like this:
 
 ```` 
{
    "Token": "",
    "baseURL": ""
 } 
 ````
 
 And populate it with a token generated from canvas account settings, and url to your canvas LMS.

 ## Make command global
 1. Make binary into executable. Run the following in project root
```` 
chmod +x bin/canvas-cli
 ````

 2. Try running the following to verify that everything is installed correctly, before creating symlink. While in the project root, try running the newly created executable. This should show you the 'help' screen of the CLI  
```` 
./bin/canvas-cli
 ````

 3. if all is fine, run the following in the project root. This wil make it accesible from outside the current directory
 ```` 
npm link 
 ````

 4. Verify by running the following from a new terminal
 ```` 
canvas
 ````

 5. Voila  :v:

 
