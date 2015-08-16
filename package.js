Package.describe({
  name: 'shreks7:coffee-compiler',
  version: '0.0.2',
  summary: 'CoffeeScript Compiler API',
  git: 'https://github.com/shreks7/coffee-compiler.git',
  documentation: 'README.md'
});

Npm.depends({
  "coffee-script": "1.9.3",
  "uglify-js":"2.4.24"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('coffee-compiler.js','server');
  api.export('CoffeeCompiler','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shreks7:coffee-compiler');
  api.addFiles('coffee-compiler.js','server');
  api.addFiles('coffee-compiler-tests.js','server');
});
