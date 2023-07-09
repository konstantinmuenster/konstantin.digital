const prettierConfig = require('@kmuenster/prettier-config');
const prettierTailwind = require('prettier-plugin-tailwindcss');

module.exports = {
  ...prettierConfig,
  plugins: [prettierTailwind],
  tailwindFunctions: ['clsx', 'tv'],
};
