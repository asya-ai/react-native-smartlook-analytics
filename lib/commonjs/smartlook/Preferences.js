"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SmartlookModule = _interopRequireDefault(require("./SmartlookModule"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The Preferences class is a representation of the SDK user’s preferred settings.
 */
class Preferences {
  /**
   * Sets a unique project key.
   */
  async setProjectKey(projectKey) {
    await _SmartlookModule.default.setProjectKey(projectKey);
  }

  /**
   * Sets video capturing framerate.
   * Must be between `2` and `10` frames per second.
   */
  async setFrameRate(frameRate) {
    await _SmartlookModule.default.setFrameRate(frameRate);
  }

  /**
   * The video capturing framerate.
   * @return a Promise resolving to a number
   */
  async getFrameRate() {
    return await _SmartlookModule.default.getPreferencesFrameRate();
  }

  /**
   * Sets whether or not Android's Jobs are used for uploading.
   *
   * @kind **Android only**
   */
  async setJobUploadEnabled(isEnabled) {
    await _SmartlookModule.default.setJobUploadEnabled(isEnabled);
  }

  /**
   * Sets whether or not the SDK should use the adaptive framerate feature to capture video.
   */
  async setAdaptiveFrameRateEnabled(isEnabled) {
    await _SmartlookModule.default.setAdaptiveFrameRateEnabled(isEnabled);
  }

  /**
   * A boolean that determines whether the SDK should use adaptive framerate functionality for video capture.
   *
   * @returns a Promise resolving to a boolean
   */
  async getAdaptiveFrameRateEnabled() {
    return await _SmartlookModule.default.getAdaptiveFrameRateEnabled();
  }

  /**
   * Sets whether or not a WebView class should be considered sensitive.
   * True by default in the SDK.
   */
  async setWebViewSensitivity(isSensitive) {
    await _SmartlookModule.default.setWebViewSensitivity(isSensitive);
  }

  /**
   * Enables the tracking of all events.
   */
  async eventTrackingEnableAll() {
    await _SmartlookModule.default.eventTrackingEnableAll();
  }

  /**
   * Disables the tracking of all events.
   */
  async eventTrackingDisableAll() {
    await _SmartlookModule.default.eventTrackingDisableAll();
  }

  /**
   * Enables the tracking of all navigation events.
   *
   * @kind **Android only**
   */
  async eventTrackingNavigationEnableAll() {
    await _SmartlookModule.default.eventTrackingNavigationEnableAll();
  }

  /**
   * Disables the tracking of all navigation events.
   *
   * @kind **Android only**
   */
  async eventTrackingNavigationDisableAll() {
    await _SmartlookModule.default.eventTrackingNavigationDisableAll();
  }

  /**
   * Sets whether or not an Activity enter and exit events are automatically tracked.
   *
   * @kind **Android only**
   */
  async setEventTrackingNavigationActivityStatus(isEnabled) {
    await _SmartlookModule.default.setEventTrackingNavigationActivityStatus(isEnabled);
  }

  /**
   * Sets whether or not a Fragment enter and exit events are automatically tracked.
   *
   * @kind **Android only**
   */
  async setEventTrackingNavigationFragmentStatus(isEnabled) {
    await _SmartlookModule.default.setEventTrackingNavigationFragmentStatus(isEnabled);
  }

  /**
   * Enables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   */
  async setEventTrackingInteractionEnableAll() {
    await _SmartlookModule.default.eventTrackingInteractionEnableAll();
  }

  /**
   * Disables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   */
  async setEventTrackingInteractionDisableAll() {
    await _SmartlookModule.default.eventTrackingInteractionDisableAll();
  }
  async setEventTrackingInteractionUserStatus(isEnabled) {
    await _SmartlookModule.default.setEventTrackingInteractionUserStatus(isEnabled);
  }

  /**
   * Sets whether or not "rage" clicks are automatically tracked.
   */
  async setEventTrackingInteractionRageClickStatus(isEnabled) {
    await _SmartlookModule.default.setEventTrackingInteractionRageClickStatus(isEnabled);
  }

  /**
   * Sets a proxy host name for data transfer.
   *
   * @kind **Android only**
   */
  async setRelayProxyHost(relayProxyHost) {
    await _SmartlookModule.default.setRelayProxyHost(relayProxyHost);
  }

  /**
   * Sets tracking properties to default values.
   */
  async restoreDefault() {
    await _SmartlookModule.default.restoreDefault();
  }
}
var _default = Preferences;
exports.default = _default;
//# sourceMappingURL=Preferences.js.map