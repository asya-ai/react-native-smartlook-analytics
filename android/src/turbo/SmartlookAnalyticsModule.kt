package com.smartlook.reactnative

import com.facebook.react.bridge.*

class SmartlookAnalyticsModule internal constructor(private val context: ReactApplicationContext?) :
    NativeSmartlookAnalyticsSpec(context) {
    override fun getName(): String {
        return SmartlookAnalyticsModuleImpl.NAME
    }

    @ReactMethod
    override fun start() {
        SmartlookAnalyticsModuleImpl.start()
    }

    @ReactMethod
    override fun stop() {
        SmartlookAnalyticsModuleImpl.stop()
    }

    @ReactMethod
    override fun reset() {
        SmartlookAnalyticsModuleImpl.reset()
    }

    // ANALYTICS

    @ReactMethod
    override fun trackEvent(name: String, props: ReadableMap?) {
        SmartlookAnalyticsModuleImpl.trackEvent(name, props)
    }

    @ReactMethod
    override fun trackSelector(selectorName: String, props: ReadableMap?) {
      SmartlookAnalyticsModuleImpl.trackSelector(selectorName, props)
    }

    @ReactMethod
    override fun trackNavigationEnter(name: String, props: ReadableMap?) {
        SmartlookAnalyticsModuleImpl.trackNavigationEnter(name, props)
    }

    @ReactMethod
    override fun trackNavigationExit(name: String, props: ReadableMap?) {
        SmartlookAnalyticsModuleImpl.trackNavigationExit(name, props)
    }

    @ReactMethod
    override fun setReferrer(referrer: String, source: String) {
        SmartlookAnalyticsModuleImpl.setReferrer(referrer, source)
    }

    @ReactMethod
    override fun putStringEventProperty(name: String, value: String) {
        SmartlookAnalyticsModuleImpl.putStringEventProperty(name, value)
    }

    @ReactMethod
    override fun getStringEventProperty(name: String, promise: Promise) {
        SmartlookAnalyticsModuleImpl.getStringEventProperty(name, promise)
    }

    @ReactMethod
    override fun removeEventProperty(name: String) {
        SmartlookAnalyticsModuleImpl.removeEventProperty(name)
    }

    @ReactMethod
    override fun clearEventProperties() {
        SmartlookAnalyticsModuleImpl.clearEventProperties()
    }

    // USER

    @ReactMethod
    override fun setUserIdentifier(identifier: String) {
        SmartlookAnalyticsModuleImpl.setUserIdentifier(identifier)
    }

    @ReactMethod
    override fun setUserName(name: String) {
        SmartlookAnalyticsModuleImpl.setUserName(name)
    }

    @ReactMethod
    override fun setUserEmail(email: String) {
        SmartlookAnalyticsModuleImpl.setUserEmail(email)
    }

    @ReactMethod
    override fun setUserProperty(name: String, value: String) {
        SmartlookAnalyticsModuleImpl.setUserProperty(name, value)
    }

    @ReactMethod
    override fun getUserProperty(name: String, promise: Promise) {
        SmartlookAnalyticsModuleImpl.getUserProperty(name, promise)
    }

    @ReactMethod
    override fun removeUserProperty(name: String) {
        SmartlookAnalyticsModuleImpl.removeUserProperty(name)
    }

    @ReactMethod
    override fun openNewUser() {
        SmartlookAnalyticsModuleImpl.openNewUser()
    }

    @ReactMethod
    override fun openNewSession() {
        SmartlookAnalyticsModuleImpl.openNewSession()
    }

    @ReactMethod
    override fun getUserUrl(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getUserUrl(promise)
    }

    @ReactMethod
    override fun getSessionUrl(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getSessionUrl(promise)
    }

    @ReactMethod
    override fun getSessionUrlWithTimestamp(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getSessionUrlWithTimestamp(promise)
    }

    // PREFERENCES

    @ReactMethod
    override fun setRelayProxyHost(relayProxyHost: String) {
        SmartlookAnalyticsModuleImpl.setRelayProxyHost(relayProxyHost)
    }

    @ReactMethod
    override fun setFrameRate(frameRate: Double) {
        SmartlookAnalyticsModuleImpl.setFrameRate(frameRate)
    }

    @ReactMethod
    override fun getPreferencesFrameRate(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getPreferencesFrameRate(promise)
    }

    @ReactMethod
    override fun setProjectKey(projectKey: String) {
        SmartlookAnalyticsModuleImpl.setProjectKey(projectKey)
    }

    @ReactMethod
    override fun setJobUploadEnabled(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setJobUploadEnabled(isEnabled)
    }

    @ReactMethod
    override fun setAdaptiveFrameRateEnabled(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setAdaptiveFrameRateEnabled(isEnabled)
    }

    @ReactMethod
    override fun getAdaptiveFrameRateEnabled(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getAdaptiveFrameRateEnabled(promise)
    }

    @ReactMethod
    override fun setWebViewSensitivity(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setWebViewSensitivity(isEnabled)
    }

    // EVENT TRACKING

    @ReactMethod
    override fun eventTrackingEnableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingEnableAll()
    }

    @ReactMethod
    override fun eventTrackingDisableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingDisableAll()
    }

    @ReactMethod
    override fun eventTrackingNavigationEnableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingNavigationEnableAll()
    }

    @ReactMethod
    override fun eventTrackingNavigationDisableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingNavigationDisableAll()
    }

    @ReactMethod
    override fun setEventTrackingNavigationActivityStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingNavigationActivityStatus(isEnabled)
    }

    @ReactMethod
    override fun setEventTrackingNavigationFragmentStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingNavigationFragmentStatus(isEnabled)
    }

    @ReactMethod
    override fun eventTrackingInteractionEnableAll() {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionEnableAll()
    }

    @ReactMethod
    override fun eventTrackingInteractionDisableAll() {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionDisableAll()
    }

    @ReactMethod
    override fun setEventTrackingInteractionUserStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionUserStatus(isEnabled)
    }

    @ReactMethod
    override fun setEventTrackingInteractionRageClickStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionRageClickStatus(isEnabled)
    }

    @ReactMethod
    override fun restoreDefault() {
        SmartlookAnalyticsModuleImpl.restoreDefault()
    }

    // STATE

    @ReactMethod
    override fun isRecording(promise: Promise) {
        SmartlookAnalyticsModuleImpl.isRecording(promise)
    }

    @ReactMethod
    override fun getProjectKey(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getProjectKey(promise)
    }

    @ReactMethod
    override fun getStateFrameRate(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getStateFrameRate(promise)
    }

    @ReactMethod
    override fun getRenderingMode(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getRenderingMode(promise)
    }

    @ReactMethod
    override fun getRecordingStatus(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getRecordingStatus(promise)
    }

    @ReactMethod
    override fun setRenderingMode(renderingMode: Double) {
        SmartlookAnalyticsModuleImpl.setRenderingMode(renderingMode)
    }

    @ReactMethod
    override fun enableLogs() {
        SmartlookAnalyticsModuleImpl.enableLogs()
    }

    @ReactMethod
    override fun setupAndRegisterBridgeInterface(frameworkVersion: String, pluginVersion: String) {
        SmartlookAnalyticsModuleImpl.setupAndRegisterBridgeInterface(frameworkVersion, pluginVersion);
    }

    @ReactMethod
    override fun registerUserUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.registerUserUrlChangedListener(context)
    }

    @ReactMethod
    override fun registerSessionUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.registerSessionUrlChangedListener(context)
    }

    @ReactMethod
    override fun removeUserUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.removeUserUrlChangedListener()
    }

    @ReactMethod
    override fun removeSessionUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.removeSessionUrlChangedListener()
    }

    @ReactMethod
    override fun registerRenderingModeChangedListener() {
      SmartlookAnalyticsModuleImpl.registerRenderingModeChangedListener()
    }

    @ReactMethod
    override fun removeRenderingModeChangedListener() {
      SmartlookAnalyticsModuleImpl.removeRenderingModeChangedListener()
    }

    @ReactMethod
    override fun registerRecordingStatusChangedListener() {
      SmartlookAnalyticsModuleImpl.registerRecordingStatusChangedListener()
    }

    @ReactMethod
    override fun removeRecordingStatusChangedListener() {
      SmartlookAnalyticsModuleImpl.removeRecordingStatusChangedListener()
    }

    @ReactMethod
    override fun setRecordingMask(recordingMaskList: ReadableArray) {
       SmartlookAnalyticsModuleImpl.setRecordingMask(recordingMaskList)
    }

    @ReactMethod
    override fun enableDefaultClassSensitivity() {
      SmartlookAnalyticsModuleImpl.enableDefaultClassSensitivity()
    }

    @ReactMethod
    override fun disableDefaultClassSensitivity() {
      SmartlookAnalyticsModuleImpl.disableDefaultClassSensitivity()
    }

    @ReactMethod
    override fun changePlatformClassSensitivity(classNameValueTuples: ReadableArray?) {
      SmartlookAnalyticsModuleImpl.changePlatformClassSensitivity(classNameValueTuples)
    }

    companion object {
        const val NAME = SmartlookAnalyticsModuleImpl.NAME
    }
}
