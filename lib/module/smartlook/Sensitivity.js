import SmartlookModule from './SmartlookModule';
import { SmartlookAndroidClassSensitivity, SmartlookIOSClassSensitivity } from './types/SmartlookClassSensitivity';
/**
 * The Sensitivity class provides methods to change the SDK's default class sensitivity behaviour.
 *
 * Some classes are set sensitive by default
 *
 * `Android`: `EditText, `WebView`.
 *
 * `iOS`: `UITextView`, `UITextField` and `WKWebView`.
 */
class Sensitivity {
  /**
   * Enables the default class sensitivity for both platforms.
   *
   * For `Android`: `EditText, `WebView`.
   *
   * For `iOS`: `UITextView`, `UITextField` and `WKWebView`.
   */
  async enableDefaultClassSensitivity() {
    await SmartlookModule.enableDefaultClassSensitivity();
  }

  /**
   * Disables the default class sensitivity for both platforms.
   */
  async disableDefaultClassSensitivity() {
    await SmartlookModule.disableDefaultClassSensitivity();
  }

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
  async changePlatformClassSensitivity(classNameValueTuples) {
    if (!this.sanitizeClassNames(classNameValueTuples)) {
      return;
    }
    await SmartlookModule.changePlatformClassSensitivity(classNameValueTuples);
  }
  sanitizeClassNames(classNameValueTuples) {
    const isSupportedClassName = value => value[0] in SmartlookAndroidClassSensitivity || value[0] in SmartlookIOSClassSensitivity;
    return classNameValueTuples.every(isSupportedClassName);
  }
}
export default Sensitivity;
//# sourceMappingURL=Sensitivity.js.map