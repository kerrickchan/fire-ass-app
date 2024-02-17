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
          alias: {
            '@components': './components',
            '@screens': './screens',
            '@assets': './assets',
            '@locales': './locales',
            '@config': './config',
            '@utils': './utils',
            '@services': './services',
            '@store': './store',
            '@slices': './slices',
            '@hooks': './hooks',
            '@navigations': './navigations',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
