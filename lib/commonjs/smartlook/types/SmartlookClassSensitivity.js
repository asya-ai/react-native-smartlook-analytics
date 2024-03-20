"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmartlookIOSClassSensitivity = exports.SmartlookAndroidClassSensitivity = void 0;
/**
 * Represents the Android SDK's default class sensitivity.
 */let SmartlookAndroidClassSensitivity; /**
                                          * Represents the iOS SDK's default class sensitivity.
                                          */
exports.SmartlookAndroidClassSensitivity = SmartlookAndroidClassSensitivity;
(function (SmartlookAndroidClassSensitivity) {
  SmartlookAndroidClassSensitivity[SmartlookAndroidClassSensitivity["EditText"] = 0] = "EditText";
  SmartlookAndroidClassSensitivity[SmartlookAndroidClassSensitivity["WebView"] = 1] = "WebView";
})(SmartlookAndroidClassSensitivity || (exports.SmartlookAndroidClassSensitivity = SmartlookAndroidClassSensitivity = {}));
let SmartlookIOSClassSensitivity;
exports.SmartlookIOSClassSensitivity = SmartlookIOSClassSensitivity;
(function (SmartlookIOSClassSensitivity) {
  SmartlookIOSClassSensitivity[SmartlookIOSClassSensitivity["UITextView"] = 2] = "UITextView";
  SmartlookIOSClassSensitivity[SmartlookIOSClassSensitivity["UITextField"] = 3] = "UITextField";
  SmartlookIOSClassSensitivity[SmartlookIOSClassSensitivity["WKWebView"] = 4] = "WKWebView";
})(SmartlookIOSClassSensitivity || (exports.SmartlookIOSClassSensitivity = SmartlookIOSClassSensitivity = {}));
//# sourceMappingURL=SmartlookClassSensitivity.js.map