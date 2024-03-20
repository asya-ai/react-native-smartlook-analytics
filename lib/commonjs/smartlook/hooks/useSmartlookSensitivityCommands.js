"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _SmartlookSensitiveViewNativeCommands = require("../SmartlookSensitiveViewNativeCommands");
var _useSmartlookSensitiveViewRef = require("./useSmartlookSensitiveViewRef");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Custom callback for an imperative-like sensitivity control over the `SmartlookSensitiveView`'s ref.
 * It utilises the codegenNativeCommands under the hood. Available only in ReactNative 0.68+.
 *
 * @example
 * ```typescript
 * const sensitiveViewRef = useSmartlookSensitiveViewRef();
 * const changeTextViewSensitivity = useSmartlookSensitiveViewCommands(sensitiveViewRef.current);
 *
 * ...
 *
 * <SmartlookSensitiveView ref={sensitiveViewRef} isSensitive={true}>
 *   <Text>I'm a sensitive text!</Text>
 * </SmartlookSensitiveView>
 * <Button
 *  onPress={() => {
 *    changeTextViewSensitivity(false);
 *  }}
 *  title="Change text sensitivity"
 * />
 * ```
 *
 * @returns a `useCallback` hook function accepting a `SmartlookSensitiveView`'s ref. It provides an imperative-like control of the view's ref sensitivity.
 */
function useSmartlookSensitiveViewCommands(sensitiveViewRef) {
  const [viewRef, setViewRef] = React.useState(sensitiveViewRef);
  React.useEffect(() => {
    setViewRef(sensitiveViewRef);
  }, [sensitiveViewRef]);

  /**
   * A custom `useCallback` hook accepting a `SmartlookSensitiveView`'s ref. It provides an imperative-like control of the view's ref sensitivity.
   */
  const changeSmartlookViewSensitivity = React.useCallback(isSensitive => {
    if (viewRef == null) {
      console.warn(_useSmartlookSensitiveViewRef.REF_NOT_INITIALIZED_WARNING);
      return;
    }
    _SmartlookSensitiveViewNativeCommands.Commands.changeIsViewSensitive(viewRef, isSensitive);
  }, [viewRef]);
  return changeSmartlookViewSensitivity;
}
var _default = useSmartlookSensitiveViewCommands;
exports.default = _default;
//# sourceMappingURL=useSmartlookSensitivityCommands.js.map