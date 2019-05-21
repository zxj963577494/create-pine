const BasicGenerator = require('../../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'isFull',
        type: 'confirm',
        message: 'Do you want to use a full boilerplate?',
        default: false,
      },
      {
        name: 'isTypeScript',
        type: 'confirm',
        message: 'Do you want to use typescript?',
        default: false,
      },
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  writing() {
    this.writeFiles({
      context: {
        name: this.name,
        ...this.prompts,
      },
      filterFiles: f => {
        const { isTypeScript, isFull } = this.prompts;

        if (isFull) {
          if (['src/App.less', 'logo.svg'].includes(f)) return false;

          if (isTypeScript) {
            if (f.endsWith('.js') || f.endsWith('.jsx')) {
              if (
                f.startsWith('mock/') ||
                f.startsWith('internals/') ||
                f.startsWith('server/') ||
                f.startsWith('.commitlintrc.js') ||
                f.startsWith('.eslintrc.js') ||
                f.startsWith('.prettierrc.js') ||
                f.startsWith('.postcssrc.js') ||
                f.startsWith('.stylelintrc.js') ||
                f.startsWith('jest.config.js')
              ) {
                return true;
              }
              return false;
            }
          } else {
            if (this.isTsFile(f)) return false;
          }
        } else {
          if (
            f.startsWith('src/components/') ||
            f.startsWith('src/models/') ||
            f.startsWith('src/pages/') ||
            f.startsWith('src/services/') ||
            f.startsWith('src/utils/') ||
            f.startsWith('src/typings/')
          )
            return false;

          if (isTypeScript) {
            if (f.endsWith('.js') || f.endsWith('.jsx')) {
              if (
                f.startsWith('mock/') ||
                f.startsWith('internals/') ||
                f.startsWith('server/') ||
                f.startsWith('.commitlintrc.js') ||
                f.startsWith('.eslintrc.js') ||
                f.startsWith('.prettierrc.js') ||
                f.startsWith('.postcssrc.js') ||
                f.startsWith('.stylelintrc.js') ||
                f.startsWith('jest.config.js')
              ) {
                return true;
              }
              return false;
            }
          } else {
            if (this.isTsFile(f)) return false;
          }
        }

        return true;
      },
    });
  }
}

module.exports = Generator;
