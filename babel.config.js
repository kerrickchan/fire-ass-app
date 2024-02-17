const tsconfig = require('./tsconfig.json')

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: tsconfig.compilerOptions.paths,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
