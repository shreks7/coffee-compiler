<h1>CoffeeScript Compiler API</h1>

This package helps you compile coffeescript snippets to javscript asynchronously using the coffee-script API.
This only runs on the server side. I made this because I wanted to do string based realtime compiling.

My first meteor pacakge.

<b>Installation:

```meteor add shreks7:coffee-compiler```

<b>Usage:

``` javascript
if (Meteor.isServer)
	CoffeeCompiler.compileToJS(str,callback,minified)
```

<h3>Parameters</h3>

<b>callback = function(error,result)</b>
	<br>It throws an error if you pass an invalid string

<p>
<b> minified: true| false</b>
	<br>Set true if you wish to minify your JS
</p>
