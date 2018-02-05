const Compiler = require('google-closure-compiler').compiler;

const compiler = new Compiler({
  js: 'bundle.js',
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
