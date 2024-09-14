const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const {
    wrapWithReanimatedMetroConfig,
  } = require('react-native-reanimated/metro-config');

const config = {};
const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);