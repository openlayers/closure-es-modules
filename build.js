const Compiler = require('google-closure-compiler').compiler;

const compiler = new Compiler({
  js: './src/**.js',
  module_resolution: 'NODE',
  compilation_level: 'ADVANCED'
});

compiler.run((exit, out, err) => {
  if (exit) {
    process.stderr.write(err, () => process.exit(exit));
  } else {
    process.stderr.write(err);
    process.stdout.write(out);
  }
});
