import SmartlookModule from './SmartlookModule';

/**
 * The Preferences class is a representation of the SDK user’s preferred settings.
 */
class Preferences {
  /**
   * Sets a unique project key.
   */
  public async setProjectKey(projectKey: string): Promise<void> {
    await SmartlookModule.setProjectKey(projectKey);
  }

  /**
   * Sets video capturing framerate.
   * Must be between `2` and `10` frames per second.
   */
  public async setFrameRate(frameRate: number): Promise<void> {
    await SmartlookModule.setFrameRate(frameRate);
  }

  /**
   * The video capturing framerate.
   * @return a Promise resolving to a number
   */
  public async getFrameRate(): Promise<number> {
    return await SmartlookModule.getPreferencesFrameRate();
  }

  /**
   * Sets whether or not Android's Jobs are used for uploading.
   *
   * @kind **Android only**
   */
  public async setJobUploadEnabled(isEnabled: boolean): Promise<void> {
    await SmartlookModule.setJobUploadEnabled(isEnabled);
  }

  /**
   * Sets whether or not the SDK should use the adaptive framerate feature to capture video.
   */
  public async setAdaptiveFrameRateEnabled(isEnabled: boolean): Promise<void> {
    await SmartlookModule.setAdaptiveFrameRateEnabled(isEnabled);
  }

  /**
   * A boolean that determines whether the SDK should use adaptive framerate functionality for video capture.
   *
   * @returns a Promise resolving to a boolean
   */
  public async getAdaptiveFrameRateEnabled(): Promise<boolean> {
    return await SmartlookModule.getAdaptiveFrameRateEnabled();
  }

  /**
   * Sets whether or not a WebView class should be considered sensitive.
   * True by default in the SDK.
   */
  public async setWebViewSensitivity(isSensitive: boolean): Promise<void> {
    await SmartlookModule.setWebViewSensitivity(isSensitive);
  }

  /**
   * Enables the tracking of all events.
   */
  public async eventTrackingEnableAll(): Promise<void> {
    await SmartlookModule.eventTrackingEnableAll();
  }

  /**
   * Disables the tracking of all events.
   */
  public async eventTrackingDisableAll(): Promise<void> {
    await SmartlookModule.eventTrackingDisableAll();
  }

  /**
   * Enables the tracking of all navigation events.
   *
   * @kind **Android only**
   */
  public async eventTrackingNavigationEnableAll(): Promise<void> {
    await SmartlookModule.eventTrackingNavigationEnableAll();
  }

  /**
   * Disables the tracking of all navigation events.
   *
   * @kind **Android only**
   */
  public async eventTrackingNavigationDisableAll(): Promise<void> {
    await SmartlookModule.eventTrackingNavigationDisableAll();
  }

  /**
   * Sets whether or not an Activity enter and exit events are automatically tracked.
   *
   * @kind **Android only**
   */
  public async setEventTrackingNavigationActivityStatus(
    isEnabled: boolean
  ): Promise<void> {
    await SmartlookModule.setEventTrackingNavigationActivityStatus(isEnabled);
  }

  /**
   * Sets whether or not a Fragment enter and exit events are automatically tracked.
   *
   * @kind **Android only**
   */
  public async setEventTrackingNavigationFragmentStatus(
    isEnabled: boolean
  ): Promise<void> {
    await SmartlookModule.setEventTrackingNavigationFragmentStatus(isEnabled);
  }

  /**
   * Enables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   */
  public async setEventTrackingInteractionEnableAll(): Promise<void> {
    await SmartlookModule.eventTrackingInteractionEnableAll();
  }

  /**
   * Disables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   */
  public async setEventTrackingInteractionDisableAll(): Promise<void> {
    await SmartlookModule.eventTrackingInteractionDisableAll();
  }

  public async setEventTrackingInteractionUserStatus(
    isEnabled: boolean
  ): Promise<void> {
    await SmartlookModule.setEventTrackingInteractionUserStatus(isEnabled);
  }

  /**
   * Sets whether or not "rage" clicks are automatically tracked.
   */
  public async setEventTrackingInteractionRageClickStatus(
    isEnabled: boolean
  ): Promise<void> {
    await SmartlookModule.setEventTrackingInteractionRageClickStatus(isEnabled);
  }

  /**
   * Sets a proxy host name for data transfer.
   *
   * @kind **Android only**
   */
  public async setRelayProxyHost(relayProxyHost: string): Promise<void> {
    await SmartlookModule.setRelayProxyHost(relayProxyHost);
  }

  /**
   * Sets tracking properties to default values.
   */
  public async restoreDefault(): Promise<void> {
    await SmartlookModule.restoreDefault();
  }
}

export default Preferences;
