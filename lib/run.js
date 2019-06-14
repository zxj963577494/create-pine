const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const clipboardy = require('clipboardy');
const spawn = require('cross-spawn');

const runGenerator = async (generatorPath, { name = '', cwd = process.cwd() }) => {
  return new Promise(resolve => {
    if (name) {
      mkdirp.sync(name);
      cwd = path.join(cwd, name);
    }

    const Generator = require(generatorPath);
    const generator = new Generator({
      name,
      env: {
        cwd,
      },
      resolved: require.resolve(generatorPath),
    });

    return generator.run(() => {
      if (name) {
        clipboardy.writeSync(`cd ${name}`);

        console.log('📋 Copied to clipboard, just use Ctrl+V');

        spawn.sync('git', ['init', name], {
          stdio: 'inherit',
        });

        resolve(true);
      }
      console.log('✨ File Generate Done');
    });
  });
};

const run = async config => {
  return runGenerator(`./generators/app`, config);
};

module.exports = run;
