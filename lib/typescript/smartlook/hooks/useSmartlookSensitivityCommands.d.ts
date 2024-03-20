import * as React from 'react';
import type { SmartlookSensitiveViewType } from '../types/SmartlookSensitiveViewType';
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
declare function useSmartlookSensitiveViewCommands(sensitiveViewRef: React.ElementRef<SmartlookSensitiveViewType> | null): (isSensitive: boolean) => void;
export default useSmartlookSensitiveViewCommands;
//# sourceMappingURL=useSmartlookSensitivityCommands.d.ts.map