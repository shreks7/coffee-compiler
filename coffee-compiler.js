var coffee = Npm.require('coffee-script')
var UglifyJS = Npm.require("uglify-js");

CoffeeCompiler = {
	compileToJS:function(str,callback,minified){
		process.nextTick(function(){
			//Compiling CoffeeScript to JS
			if(typeof callback != 'undefined' || typeof callback != 'function')
			{	
				try
				{
					var compiledStr = coffee.compile(str);
					if(minified == true){
						//Minify JS
						compiledStr = UglifyJS.minify(compiledStr, {fromString: true});
						callback(compiledStr.code);
					}
					else{
						callback(null,compiledStr);
					}
				}
				catch(e){
					callback(e.toString(),null);
				}
				
			}
			else{
				//Callback function not defined
				return "Callback error";
			}

			return;
		});
	},
}