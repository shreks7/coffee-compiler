Tinytest.addAsync('compileToJSTest', function (test,onComplete) {
  var script = 'console.log "hello"';
  CoffeeCompiler.compileToJS(script,function(result){
	     test.equal(result,'(function(){console.log("hello")}).call(this);');
	     onComplete();
	},true);
});
