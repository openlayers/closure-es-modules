const Compiler = require('google-closure-compiler').compiler;

const compiler = new Compiler({
  js: ['bundle.js', 'src/*.js'],
  entry_point: 'bundle.js',
  module_resolution: 'NODE',
  compilation_level: 'ADVANCED',
  dependency_mode: 'STRICT',
  new_type_inf: true,
  checks_only: true
});

compiler.run((exit, out, err) => {
  if (exit) {
    process.stderr.write(err, () => process.exit(exit));
  } else {
    process.stderr.write(err);
    process.stdout.write(out);
  }
});
