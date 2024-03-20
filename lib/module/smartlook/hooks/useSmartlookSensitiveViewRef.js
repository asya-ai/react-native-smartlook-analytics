import * as React from 'react';
export const REF_NOT_INITIALIZED_WARNING = "The ref hasn't been initialized yet. This might happen if it is not mounted, or if it hasn't finished mounting.";
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
export default useSmartlookSensitiveViewRef;
//# sourceMappingURL=useSmartlookSensitiveViewRef.js.map