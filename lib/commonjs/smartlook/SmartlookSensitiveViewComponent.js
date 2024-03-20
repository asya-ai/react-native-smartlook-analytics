"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
// @ts-expect-error
const isFabricEnabled = global.nativeFabricUIManager != null;

/**
 * Provides a native View wrapper. It can be used to wrap a component that should be marked as sensitive or vice versa not sensitive.
 * Use `isSensitive` prop to control the sensitivity.
 *
 * @example
 * ```typescript
 * <SmartlookSensitiveView isSensitive={true}>
 *  <Text>I am a sensitive text!</Text>
 * </SmartlookSensitiveView>
 * ```
 */
const SmartlookSensitiveViewComponent = isFabricEnabled ? require('./specs/SmartlookSensitiveViewNativeComponent').default : (0, _reactNative.requireNativeComponent)('SmartlookSensitiveView');
var _default = SmartlookSensitiveViewComponent;
exports.default = _default;
//# sourceMappingURL=SmartlookSensitiveViewComponent.js.map