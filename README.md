CoffeeScript Compiler API - 

This package helps you compile coffeescript snippets to javscript asynchronously using the coffee-script API.
This only runs on the server side.

Installation:

meteor add shreks7:coffee-compiler

Usage:

if (Meteor.isServer)
	CoffeeCompiler.compileToJS(str,callback,minified)

callback: function(result | error)
		  It throws an error if you pass an invalid string

minified: true| false
		  You can minify your JS