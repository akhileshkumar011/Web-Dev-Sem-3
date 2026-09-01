localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server
every request from client have a pair of {request,response}


## Node package manager (NPM)
used to install , run , uninstall any program/project and package 
-npm install <packageName>
-npm uninstall <packageName>

to use npm , the  project must be npm project , 
to create npm project we can use 

- npm init  -y 
- it creates a package.json file automatically 
 package.json holds all the information related to install 
 packages from npm 
- update package.json , set type = 'module'
- it also create a folder node_modules automatically 
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore