import { requireNativeComponent } from 'react-native';

// @ts-expect-error
const isFabricEnabled = global.nativeFabricUIManager != null;

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
const SmartlookSensitiveViewComponent = isFabricEnabled ? require('./specs/SmartlookSensitiveViewNativeComponent').default : requireNativeComponent('SmartlookSensitiveView');
export default SmartlookSensitiveViewComponent;
//# sourceMappingURL=SmartlookSensitiveViewComponent.js.map