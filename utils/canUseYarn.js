const execSync = require('child_process');

function canUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    console.log(e)
    return false;
  }
}

module.exports = { canUseYarn };
