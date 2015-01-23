We are using requirejs to manage dependencies for our widgets. Requirejs has excellent documentation 
at http://requirejs.org/. Requirejs can be run without any compilation by including the javascript file.
However, in a production environment, requirejs allows you to merge all of your dependencies (including
css and html files) into a single file with compression. This makes loading and
running much faster while providing some small measure of obfustication for your code. The requirejs
optimizer is written in javascript, and is intended to be executed using node.js. 

To run the optimizer we have included node.js in the solution at client/node/node.exe. Each widget then
has a batch file located in client/[widget]/build which will execute node to run the optimizer over the widget.
The batch file for each widget is executed as a post-build step on the project. The optimizer returns build
errors which appear in Visual Studio's Error List. However, the errors shown in the Error List can be sparse. 
Typically the Output window will contain more detailed information about the nature of the errors.

We have also included a number of requirejs plugins to support building our widgets. These can be found at 
/client/require/plugins. Examples of these include: 
- "text" for retrieving and embedding html files
- "require-css" for retrieving and embedding css files
- "require-less" for retrieving, parsing and embedding less files. 

Require-less needs some node modules (i.e. modules that were written specifically for node, rather
than javascript running in a browser) to run. These modules can be downloaded by running 
"client/require/install_modules.bat". See this file for more information.