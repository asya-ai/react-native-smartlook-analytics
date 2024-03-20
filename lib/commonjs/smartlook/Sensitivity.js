"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SmartlookModule = _interopRequireDefault(require("./SmartlookModule"));
var _SmartlookClassSensitivity = require("./types/SmartlookClassSensitivity");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    await _SmartlookModule.default.enableDefaultClassSensitivity();
  }

  /**
   * Disables the default class sensitivity for both platforms.
   */
  async disableDefaultClassSensitivity() {
    await _SmartlookModule.default.disableDefaultClassSensitivity();
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
    await _SmartlookModule.default.changePlatformClassSensitivity(classNameValueTuples);
  }
  sanitizeClassNames(classNameValueTuples) {
    const isSupportedClassName = value => value[0] in _SmartlookClassSensitivity.SmartlookAndroidClassSensitivity || value[0] in _SmartlookClassSensitivity.SmartlookIOSClassSensitivity;
    return classNameValueTuples.every(isSupportedClassName);
  }
}
var _default = Sensitivity;
exports.default = _default;
//# sourceMappingURL=Sensitivity.js.map