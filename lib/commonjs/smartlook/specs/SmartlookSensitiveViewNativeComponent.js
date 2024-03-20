"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Commands = void 0;
var _codegenNativeCommands = _interopRequireDefault(require("react-native/Libraries/Utilities/codegenNativeCommands"));
var _codegenNativeComponent = _interopRequireDefault(require("react-native/Libraries/Utilities/codegenNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Commands = (0, _codegenNativeCommands.default)({
  supportedCommands: ['changeIsViewSensitive']
});

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
exports.Commands = Commands;
var _default = (0, _codegenNativeComponent.default)('SmartlookSensitiveView');
exports.default = _default;
//# sourceMappingURL=SmartlookSensitiveViewNativeComponent.js.map