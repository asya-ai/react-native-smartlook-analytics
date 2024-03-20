import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
export const Commands = codegenNativeCommands({
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
export default codegenNativeComponent('SmartlookSensitiveView');
//# sourceMappingURL=SmartlookSensitiveViewNativeComponent.js.map