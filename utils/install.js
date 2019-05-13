const spawn = require('cross-spawn');

const { canUseYarn } = require('./canUseYarn');

const globalDeps = ['prettier', 'commitizen'];

function getInstallArgs(root) {
  const useYarn = canUseYarn();
  const installCommand = useYarn ? 'global add' : 'install';
  const args = [installCommand, '-g'];

  args.push('--registry');
  args.push('https://registry.npm.taobao.org');

  if (useYarn) {
    args.push('--cwd');
    args.push(root);
  }

  return args.concat(globalDeps.sort());
}

function install(root) {
  const command = canUseYarn() ? 'yarn' : 'npm';
  const args = getInstallArgs(root);
  const child = spawn(command, args, {
    stdio: 'inherit',
  });

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        });
        return;
      }
      resolve();
    });
  }).then((resolve, reject) => {
    const command = canUseYarn() ? 'yarn' : 'npm';
    const child = spawn(command, ['install'], {
      stdio: 'inherit',
    });
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        });
        return;
      }
      resolve();
    });
  });
}

module.exports = { install };
