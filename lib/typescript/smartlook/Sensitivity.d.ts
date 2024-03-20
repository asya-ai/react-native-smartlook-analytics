import { SmartlookAndroidClassSensitivity, SmartlookIOSClassSensitivity } from './types/SmartlookClassSensitivity';
type PlatformClassNameType = SmartlookAndroidClassSensitivity | SmartlookIOSClassSensitivity;
export type SmartlookPlatformClassSensitivityTuple = [
    PlatformClassNameType,
    boolean
];
/**
 * The Sensitivity class provides methods to change the SDK's default class sensitivity behaviour.
 *
 * Some classes are set sensitive by default
 *
 * `Android`: `EditText, `WebView`.
 *
 * `iOS`: `UITextView`, `UITextField` and `WKWebView`.
 */
declare class Sensitivity {
    /**
     * Enables the default class sensitivity for both platforms.
     *
     * For `Android`: `EditText, `WebView`.
     *
     * For `iOS`: `UITextView`, `UITextField` and `WKWebView`.
     */
    enableDefaultClassSensitivity(): Promise<void>;
    /**
     * Disables the default class sensitivity for both platforms.
     */
    disableDefaultClassSensitivity(): Promise<void>;
    /**
     * Provides a control to granurarly change a specific default class sensitivity on both platforms
     *
     * @param classNameValueTuples - an array of @SmartlookAndroidClassSensitivity or @SmartlookIOSClassSensitivity class and it sensitivity boolean value tuples.
     *
     * Both iOS- and Android- specific class names can be passed at the same time.
     *
     * @example
     * ```typescript
     * Smartlook.instance.sensitivity.changePlatformClassSensitivity([
     *  [SmartlookIOSClassSensitivity.UITextView, true],
     *  [SmartlookIOSClassSensitivity.UITextField, false],
     *  [SmartlookIOSClassSensitivity.WKWebView, false],
     *  [SmartlookAndroidClassSensitivity.EditText, false],
     * ]);
     * ```
     */
    changePlatformClassSensitivity(classNameValueTuples: Array<SmartlookPlatformClassSensitivityTuple>): Promise<void>;
    private sanitizeClassNames;
}
export default Sensitivity;
//# sourceMappingURL=Sensitivity.d.ts.map