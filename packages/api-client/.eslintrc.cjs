const path = require('path');

module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    project: [path.resolve(__dirname, '.tsconfig.json')],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [path.resolve(__dirname, '.tsconfig.json')],
      },
      node: true,
    },
  },
};
