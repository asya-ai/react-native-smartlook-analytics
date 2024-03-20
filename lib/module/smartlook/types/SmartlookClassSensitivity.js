/**
 * Represents the Android SDK's default class sensitivity.
 */
export let SmartlookAndroidClassSensitivity;

/**
 * Represents the iOS SDK's default class sensitivity.
 */
(function (SmartlookAndroidClassSensitivity) {
  SmartlookAndroidClassSensitivity[SmartlookAndroidClassSensitivity["EditText"] = 0] = "EditText";
  SmartlookAndroidClassSensitivity[SmartlookAndroidClassSensitivity["WebView"] = 1] = "WebView";
})(SmartlookAndroidClassSensitivity || (SmartlookAndroidClassSensitivity = {}));
export let SmartlookIOSClassSensitivity;
(function (SmartlookIOSClassSensitivity) {
  SmartlookIOSClassSensitivity[SmartlookIOSClassSensitivity["UITextView"] = 2] = "UITextView";
  SmartlookIOSClassSensitivity[SmartlookIOSClassSensitivity["UITextField"] = 3] = "UITextField";
  SmartlookIOSClassSensitivity[SmartlookIOSClassSensitivity["WKWebView"] = 4] = "WKWebView";
})(SmartlookIOSClassSensitivity || (SmartlookIOSClassSensitivity = {}));
//# sourceMappingURL=SmartlookClassSensitivity.js.map