import * as React from 'react';
import { Commands as SmartlookSensitiveViewCommands } from '../SmartlookSensitiveViewNativeCommands';
import type { SmartlookSensitiveViewType } from '../types/SmartlookSensitiveViewType';
import { REF_NOT_INITIALIZED_WARNING } from './useSmartlookSensitiveViewRef';

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
function useSmartlookSensitiveViewCommands(
  sensitiveViewRef: React.ElementRef<SmartlookSensitiveViewType> | null
) {
  const [viewRef, setViewRef] = React.useState(sensitiveViewRef);

  React.useEffect(() => {
    setViewRef(sensitiveViewRef);
  }, [sensitiveViewRef]);

  /**
   * A custom `useCallback` hook accepting a `SmartlookSensitiveView`'s ref. It provides an imperative-like control of the view's ref sensitivity.
   */
  const changeSmartlookViewSensitivity = React.useCallback(
    (isSensitive: boolean) => {
      if (viewRef == null) {
        console.warn(REF_NOT_INITIALIZED_WARNING);
        return;
      }

      SmartlookSensitiveViewCommands.changeIsViewSensitive(
        viewRef,
        isSensitive
      );
    },
    [viewRef]
  );

  return changeSmartlookViewSensitivity;
}

export default useSmartlookSensitiveViewCommands;
