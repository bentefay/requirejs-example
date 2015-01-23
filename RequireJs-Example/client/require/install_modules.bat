@rem	This batch file installs the node.js modules we need to run requirejs optimizer.
@rem	The modules are installed into this directory. By default, node 
@rem	searches for modules relative to the javascript file that is running. For our widgets,
@rem	this root javascript file is the r.js file in this directory. This file is the requirejs optimizer.

@rem	Before running this batch file, install node from http://nodejs.org/ (make sure you also 
@rem	install npm, the node package manager - it should come bundled with the installer). Due 
@rem	to a bug in npm for windows, npm may error when running this batch file. You will need to 
@rem	create a folder called "npm" at the location specified in the error message.

npm install less@1.7.5 csso@1.3.11