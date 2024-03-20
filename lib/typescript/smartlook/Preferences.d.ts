/**
 * The Preferences class is a representation of the SDK user’s preferred settings.
 */
declare class Preferences {
    /**
     * Sets a unique project key.
     */
    setProjectKey(projectKey: string): Promise<void>;
    /**
     * Sets video capturing framerate.
     * Must be between `2` and `10` frames per second.
     */
    setFrameRate(frameRate: number): Promise<void>;
    /**
     * The video capturing framerate.
     * @return a Promise resolving to a number
     */
    getFrameRate(): Promise<number>;
    /**
     * Sets whether or not Android's Jobs are used for uploading.
     *
     * @kind **Android only**
     */
    setJobUploadEnabled(isEnabled: boolean): Promise<void>;
    /**
     * Sets whether or not the SDK should use the adaptive framerate feature to capture video.
     */
    setAdaptiveFrameRateEnabled(isEnabled: boolean): Promise<void>;
    /**
     * A boolean that determines whether the SDK should use adaptive framerate functionality for video capture.
     *
     * @returns a Promise resolving to a boolean
     */
    getAdaptiveFrameRateEnabled(): Promise<boolean>;
    /**
     * Sets whether or not a WebView class should be considered sensitive.
     * True by default in the SDK.
     */
    setWebViewSensitivity(isSensitive: boolean): Promise<void>;
    /**
     * Enables the tracking of all events.
     */
    eventTrackingEnableAll(): Promise<void>;
    /**
     * Disables the tracking of all events.
     */
    eventTrackingDisableAll(): Promise<void>;
    /**
     * Enables the tracking of all navigation events.
     *
     * @kind **Android only**
     */
    eventTrackingNavigationEnableAll(): Promise<void>;
    /**
     * Disables the tracking of all navigation events.
     *
     * @kind **Android only**
     */
    eventTrackingNavigationDisableAll(): Promise<void>;
    /**
     * Sets whether or not an Activity enter and exit events are automatically tracked.
     *
     * @kind **Android only**
     */
    setEventTrackingNavigationActivityStatus(isEnabled: boolean): Promise<void>;
    /**
     * Sets whether or not a Fragment enter and exit events are automatically tracked.
     *
     * @kind **Android only**
     */
    setEventTrackingNavigationFragmentStatus(isEnabled: boolean): Promise<void>;
    /**
     * Enables the tracking of all user's interaction events.
     *
     * @kind **Android only**
     */
    setEventTrackingInteractionEnableAll(): Promise<void>;
    /**
     * Disables the tracking of all user's interaction events.
     *
     * @kind **Android only**
     */
    setEventTrackingInteractionDisableAll(): Promise<void>;
    setEventTrackingInteractionUserStatus(isEnabled: boolean): Promise<void>;
    /**
     * Sets whether or not "rage" clicks are automatically tracked.
     */
    setEventTrackingInteractionRageClickStatus(isEnabled: boolean): Promise<void>;
    /**
     * Sets a proxy host name for data transfer.
     *
     * @kind **Android only**
     */
    setRelayProxyHost(relayProxyHost: string): Promise<void>;
    /**
     * Sets tracking properties to default values.
     */
    restoreDefault(): Promise<void>;
}
export default Preferences;
//# sourceMappingURL=Preferences.d.ts.map