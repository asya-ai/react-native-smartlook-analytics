import type { NativeComponentType } from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps } from 'react-native';

interface NativeProps extends ViewProps {
  isSensitive: boolean;
}

export type SmartlookSensitiveViewType = NativeComponentType<NativeProps>;
