"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-smartlook-analytics' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const SmartlookAnalyticsModule = isTurboModuleEnabled ? require('./specs/NativeSmartlookAnalytics').default : _reactNative.NativeModules.SmartlookAnalytics;
var _default = SmartlookAnalyticsModule ? SmartlookAnalyticsModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
exports.default = _default;
//# sourceMappingURL=SmartlookModule.js.map