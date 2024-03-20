import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import type { SmartlookSensitiveViewType } from './types/SmartlookSensitiveViewType';

interface NativeCommands {
  changeIsViewSensitive: (
    viewRef: React.ElementRef<SmartlookSensitiveViewType>,
    isSensitive: boolean
  ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['changeIsViewSensitive'],
});
