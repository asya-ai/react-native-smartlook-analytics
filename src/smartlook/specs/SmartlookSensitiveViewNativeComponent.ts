import type { HostComponent, ViewProps } from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { SmartlookSensitiveViewType } from '../types/SmartlookSensitiveViewType';

export interface NativeProps extends ViewProps {
  isSensitive: boolean;
}

interface NativeCommands {
  changeIsViewSensitive: (
    viewRef: React.ElementRef<SmartlookSensitiveViewType>,
    isSensitive: boolean
  ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['changeIsViewSensitive'],
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
export default codegenNativeComponent<NativeProps>(
  'SmartlookSensitiveView'
) as HostComponent<NativeProps>;
