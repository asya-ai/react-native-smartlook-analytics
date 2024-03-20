/// <reference types="react" />
import type { HostComponent, ViewProps } from 'react-native';
import type { SmartlookSensitiveViewType } from '../types/SmartlookSensitiveViewType';
export interface NativeProps extends ViewProps {
    isSensitive: boolean;
}
interface NativeCommands {
    changeIsViewSensitive: (viewRef: React.ElementRef<SmartlookSensitiveViewType>, isSensitive: boolean) => void;
}
export declare const Commands: NativeCommands;
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
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=SmartlookSensitiveViewNativeComponent.d.ts.map