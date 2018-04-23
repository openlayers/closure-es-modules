/**
 * @filedesc
 * Expands module path type to point to default export when no name is given
 */

const fs = require('fs');
const path = require('path');

let moduleRoot;

function addDefaultExportPath(obj) {
  obj.names.forEach((name, index) => {
    if (name.indexOf('module:') == 0 && !/[~\.]/.test(name)) {
      const checkFile = path.resolve(moduleRoot, name.replace(/^module\:/, ''));
      const file = fs.readFileSync(require.resolve(checkFile), 'utf-8');
      const lines = file.split('\n');
      let hasDefaultExport = false;
      for (let i = 0, ii = lines.length; i < ii; ++i) {
        hasDefaultExport = hasDefaultExport || lines[i].indexOf('export default ') == 0;
        const match = lines[i].match(/^export default ([A-Za-z_$][A-Za-z0-9_$]+);$/);
        if (match) {
          // Use variable name if default export is assigned to a variable.
          obj.names[index] += `~${match[1]}`;
          return;
        }
      }
      if (hasDefaultExport) {
        // Duplicate last part if default export is not assigned to a variable.
        obj.names[index] += `~${name.split('/').pop()}`;
      }
    }
  });
}

exports.handlers = {

  /**
   * Adds default export to module path types without name
   * @param {Object} e Event object.
   */
  newDoclet: function(e) {
    const doclet = e.doclet;
    if (doclet.kind == 'module') {
      const levelsUp = doclet.longname.replace(/^module\:/, '').split('/');
      if (doclet.meta.filename != 'index.js') {
        levelsUp.pop();
      }
      const pathArgs = [doclet.meta.path].concat(levelsUp.map(() => '../'));
      moduleRoot = path.resolve.apply(null, pathArgs);
    } else {
      if (doclet.params) {
        doclet.params.forEach(p => addDefaultExportPath(p.type));
      }
      if (doclet.returns) {
        doclet.returns.forEach(r => addDefaultExportPath(r.type));
      }
      if (doclet.properties) {
        doclet.properties.forEach(p => addDefaultExportPath(p.type));
      }
      if (doclet.type) {
        addDefaultExportPath(doclet.type);
      }
    }
  },

  /**
   * Adds `options.*` params for options that match the longname of one of the
   * collected typedefs.
   * @param {Object} e Event object.
   */
  parseComplete: function(e) {
  }

};
