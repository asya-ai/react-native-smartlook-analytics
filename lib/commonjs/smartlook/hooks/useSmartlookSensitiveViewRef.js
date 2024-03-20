"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.REF_NOT_INITIALIZED_WARNING = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const REF_NOT_INITIALIZED_WARNING = "The ref hasn't been initialized yet. This might happen if it is not mounted, or if it hasn't finished mounting.";
exports.REF_NOT_INITIALIZED_WARNING = REF_NOT_INITIALIZED_WARNING;
/**
 * Custom utility hook intended to replace 'useRef' when working with SmartlookSensitiveView. It takes care of the necessary typing and checks the ref's initialization.
 * It is designed to be used in parallel with `useSmartlookSensitiveViewCommands`.
 *
 * @example
 * ```typescript
 * const sensitiveViewRef = useSmartlookSensitiveViewRef();
 * 
 * <SmartlookSensitiveView ref={sensitiveViewRef} isSensitive={true}>
    <Text>I am a sensitive text!</Text>
 * </SmartlookSensitiveView>
 * ```
 */
function useSmartlookSensitiveViewRef() {
  const sensitiveViewRef = React.useRef(null);
  React.useEffect(() => {
    if (sensitiveViewRef == null) {
      console.warn(REF_NOT_INITIALIZED_WARNING);
      return;
    }
  }, []);
  return sensitiveViewRef;
}
var _default = useSmartlookSensitiveViewRef;
exports.default = _default;
//# sourceMappingURL=useSmartlookSensitiveViewRef.js.map