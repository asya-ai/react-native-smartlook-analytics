import SmartlookModule from './SmartlookModule';
import {
  SmartlookAndroidClassSensitivity,
  SmartlookIOSClassSensitivity,
} from './types/SmartlookClassSensitivity';

type PlatformClassNameType =
  | SmartlookAndroidClassSensitivity
  | SmartlookIOSClassSensitivity;
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
class Sensitivity {
  /**
   * Enables the default class sensitivity for both platforms.
   *
   * For `Android`: `EditText, `WebView`.
   *
   * For `iOS`: `UITextView`, `UITextField` and `WKWebView`.
   */
  public async enableDefaultClassSensitivity(): Promise<void> {
    await SmartlookModule.enableDefaultClassSensitivity();
  }

  /**
   * Disables the default class sensitivity for both platforms.
   */
  public async disableDefaultClassSensitivity(): Promise<void> {
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
  public async changePlatformClassSensitivity(
    classNameValueTuples: Array<SmartlookPlatformClassSensitivityTuple>
  ) {
    if (!this.sanitizeClassNames(classNameValueTuples)) {
      return;
    }

    await SmartlookModule.changePlatformClassSensitivity(classNameValueTuples);
  }

  private sanitizeClassNames(
    classNameValueTuples: Array<SmartlookPlatformClassSensitivityTuple>
  ): boolean {
    const isSupportedClassName = (
      value: SmartlookPlatformClassSensitivityTuple
    ) =>
      value[0] in SmartlookAndroidClassSensitivity ||
      value[0] in SmartlookIOSClassSensitivity;

    return classNameValueTuples.every(isSupportedClassName);
  }
}

export default Sensitivity;
