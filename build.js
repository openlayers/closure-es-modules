const Compiler = require('google-closure-compiler').compiler;

const compiler = new Compiler({
  js: [
    'typecheck/**.js',
    'node_modules/rbush/package.json', 'node_modules/rbush/**.js',
    'node_modules/quickselect/package.json', 'node_modules/quickselect/**.js'
  ],
  entry_point: 'typecheck/index.js',
  module_resolution: 'NODE',
  dependency_mode: 'STRICT',
  process_common_js_modules: true,
  hide_warnings_for: 'node_modules',
  checks_only: true,
  jscomp_error: ['newCheckTypes']
});

compiler.run((exit, out, err) => {
  if (exit) {
    process.stderr.write(err, () => process.exit(exit));
  } else {
    process.stderr.write(err);
    process.stdout.write(out);
  }
});
