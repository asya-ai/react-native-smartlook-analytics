import SmartlookModule from './SmartlookModule';

/**
 * The Preferences class is a representation of the SDK user’s preferred settings.
 */
class Preferences {
  /**
   * Sets a unique project key.
   */
  async setProjectKey(projectKey) {
    await SmartlookModule.setProjectKey(projectKey);
  }

  /**
   * Sets video capturing framerate.
   * Must be between `2` and `10` frames per second.
   */
  async setFrameRate(frameRate) {
    await SmartlookModule.setFrameRate(frameRate);
  }

  /**
   * The video capturing framerate.
   * @return a Promise resolving to a number
   */
  async getFrameRate() {
    return await SmartlookModule.getPreferencesFrameRate();
  }

  /**
   * Sets whether or not Android's Jobs are used for uploading.
   *
   * @kind **Android only**
   */
  async setJobUploadEnabled(isEnabled) {
    await SmartlookModule.setJobUploadEnabled(isEnabled);
  }

  /**
   * Sets whether or not the SDK should use the adaptive framerate feature to capture video.
   */
  async setAdaptiveFrameRateEnabled(isEnabled) {
    await SmartlookModule.setAdaptiveFrameRateEnabled(isEnabled);
  }

  /**
   * A boolean that determines whether the SDK should use adaptive framerate functionality for video capture.
   *
   * @returns a Promise resolving to a boolean
   */
  async getAdaptiveFrameRateEnabled() {
    return await SmartlookModule.getAdaptiveFrameRateEnabled();
  }

  /**
   * Sets whether or not a WebView class should be considered sensitive.
   * True by default in the SDK.
   */
  async setWebViewSensitivity(isSensitive) {
    await SmartlookModule.setWebViewSensitivity(isSensitive);
  }

  /**
   * Enables the tracking of all events.
   */
  async eventTrackingEnableAll() {
    await SmartlookModule.eventTrackingEnableAll();
  }

  /**
   * Disables the tracking of all events.
   */
  async eventTrackingDisableAll() {
    await SmartlookModule.eventTrackingDisableAll();
  }

  /**
   * Enables the tracking of all navigation events.
   *
   * @kind **Android only**
   */
  async eventTrackingNavigationEnableAll() {
    await SmartlookModule.eventTrackingNavigationEnableAll();
  }

  /**
   * Disables the tracking of all navigation events.
   *
   * @kind **Android only**
   */
  async eventTrackingNavigationDisableAll() {
    await SmartlookModule.eventTrackingNavigationDisableAll();
  }

  /**
   * Sets whether or not an Activity enter and exit events are automatically tracked.
   *
   * @kind **Android only**
   */
  async setEventTrackingNavigationActivityStatus(isEnabled) {
    await SmartlookModule.setEventTrackingNavigationActivityStatus(isEnabled);
  }

  /**
   * Sets whether or not a Fragment enter and exit events are automatically tracked.
   *
   * @kind **Android only**
   */
  async setEventTrackingNavigationFragmentStatus(isEnabled) {
    await SmartlookModule.setEventTrackingNavigationFragmentStatus(isEnabled);
  }

  /**
   * Enables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   */
  async setEventTrackingInteractionEnableAll() {
    await SmartlookModule.eventTrackingInteractionEnableAll();
  }

  /**
   * Disables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   */
  async setEventTrackingInteractionDisableAll() {
    await SmartlookModule.eventTrackingInteractionDisableAll();
  }
  async setEventTrackingInteractionUserStatus(isEnabled) {
    await SmartlookModule.setEventTrackingInteractionUserStatus(isEnabled);
  }

  /**
   * Sets whether or not "rage" clicks are automatically tracked.
   */
  async setEventTrackingInteractionRageClickStatus(isEnabled) {
    await SmartlookModule.setEventTrackingInteractionRageClickStatus(isEnabled);
  }

  /**
   * Sets a proxy host name for data transfer.
   *
   * @kind **Android only**
   */
  async setRelayProxyHost(relayProxyHost) {
    await SmartlookModule.setRelayProxyHost(relayProxyHost);
  }

  /**
   * Sets tracking properties to default values.
   */
  async restoreDefault() {
    await SmartlookModule.restoreDefault();
  }
}
export default Preferences;
//# sourceMappingURL=Preferences.js.map