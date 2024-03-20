package com.smartlook.reactnative

import com.facebook.react.bridge.*

class SmartlookAnalyticsModule internal constructor(private val context: ReactApplicationContext?) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return SmartlookAnalyticsModuleImpl.NAME
    }

    @ReactMethod
    fun start() {
        SmartlookAnalyticsModuleImpl.start()
    }

    @ReactMethod
    fun stop() {
        SmartlookAnalyticsModuleImpl.stop()
    }

    @ReactMethod
    fun reset() {
        SmartlookAnalyticsModuleImpl.reset()
    }

    // ANALYTICS

    @ReactMethod
    fun trackEvent(name: String, props: ReadableMap?) {
        SmartlookAnalyticsModuleImpl.trackEvent(name, props)
    }

    @ReactMethod
    fun trackSelector(selectorName: String, props: ReadableMap?) {
      SmartlookAnalyticsModuleImpl.trackSelector(selectorName, props)
    }

    @ReactMethod
    fun trackNavigationEnter(name: String, props: ReadableMap?) {
        SmartlookAnalyticsModuleImpl.trackNavigationEnter(name, props)
    }

    @ReactMethod
    fun trackNavigationExit(name: String, props: ReadableMap?) {
        SmartlookAnalyticsModuleImpl.trackNavigationExit(name, props)
    }

    @ReactMethod
    fun setReferrer(referrer: String, source: String) {
        SmartlookAnalyticsModuleImpl.setReferrer(referrer, source)
    }

    @ReactMethod
    fun putStringEventProperty(name: String, value: String) {
        SmartlookAnalyticsModuleImpl.putStringEventProperty(name, value)
    }

    @ReactMethod
    fun getStringEventProperty(name: String, promise: Promise) {
        SmartlookAnalyticsModuleImpl.getStringEventProperty(name, promise)
    }

    @ReactMethod
    fun removeEventProperty(name: String) {
        SmartlookAnalyticsModuleImpl.removeEventProperty(name)
    }

    @ReactMethod
    fun clearEventProperties() {
        SmartlookAnalyticsModuleImpl.clearEventProperties()
    }

    // USER

    @ReactMethod
    fun setUserIdentifier(identifier: String) {
        SmartlookAnalyticsModuleImpl.setUserIdentifier(identifier)
    }

    @ReactMethod
    fun setUserName(name: String) {
        SmartlookAnalyticsModuleImpl.setUserName(name)
    }

    @ReactMethod
    fun setUserEmail(email: String) {
        SmartlookAnalyticsModuleImpl.setUserEmail(email)
    }

    @ReactMethod
    fun setUserProperty(name: String, value: String) {
        SmartlookAnalyticsModuleImpl.setUserProperty(name, value)
    }

    @ReactMethod
    fun getUserProperty(name: String, promise: Promise) {
        SmartlookAnalyticsModuleImpl.getUserProperty(name, promise)
    }

    @ReactMethod
    fun removeUserProperty(name: String) {
        SmartlookAnalyticsModuleImpl.removeUserProperty(name)
    }

    @ReactMethod
    fun openNewUser() {
        SmartlookAnalyticsModuleImpl.openNewUser()
    }

    @ReactMethod
    fun openNewSession() {
        SmartlookAnalyticsModuleImpl.openNewSession()
    }

    @ReactMethod
    fun getUserUrl(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getUserUrl(promise)
    }

    @ReactMethod
    fun getSessionUrl(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getSessionUrl(promise)
    }

    @ReactMethod
    fun getSessionUrlWithTimestamp(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getSessionUrlWithTimestamp(promise)
    }

    // PREFERENCES

    @ReactMethod
    fun setRelayProxyHost(relayProxyHost: String) {
        SmartlookAnalyticsModuleImpl.setRelayProxyHost(relayProxyHost)
    }

    @ReactMethod
    fun setFrameRate(frameRate: Double) {
        SmartlookAnalyticsModuleImpl.setFrameRate(frameRate)
    }

    @ReactMethod
    fun getPreferencesFrameRate(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getPreferencesFrameRate(promise)
    }

    @ReactMethod
    fun setProjectKey(projectKey: String) {
        SmartlookAnalyticsModuleImpl.setProjectKey(projectKey)
    }

    @ReactMethod
    fun setJobUploadEnabled(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setJobUploadEnabled(isEnabled)
    }

    @ReactMethod
    fun setAdaptiveFrameRateEnabled(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setAdaptiveFrameRateEnabled(isEnabled)
    }

    @ReactMethod
    fun getAdaptiveFrameRateEnabled(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getAdaptiveFrameRateEnabled(promise)
    }

    @ReactMethod
    fun setWebViewSensitivity(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setWebViewSensitivity(isEnabled)
    }

    // EVENT TRACKING

    @ReactMethod
    fun eventTrackingEnableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingEnableAll()
    }

    @ReactMethod
    fun eventTrackingDisableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingDisableAll()
    }

    @ReactMethod
    fun eventTrackingNavigationEnableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingNavigationEnableAll()
    }

    @ReactMethod
    fun eventTrackingNavigationDisableAll() {
        SmartlookAnalyticsModuleImpl.eventTrackingNavigationDisableAll()
    }

    @ReactMethod
    fun setEventTrackingNavigationActivityStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingNavigationActivityStatus(isEnabled)
    }

    @ReactMethod
    fun setEventTrackingNavigationFragmentStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingNavigationFragmentStatus(isEnabled)
    }

    @ReactMethod
    fun eventTrackingInteractionEnableAll() {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionEnableAll()
    }

    @ReactMethod
    fun eventTrackingInteractionDisableAll() {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionDisableAll()
    }

    @ReactMethod
    fun setEventTrackingInteractionUserStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionUserStatus(isEnabled)
    }

    @ReactMethod
    fun setEventTrackingInteractionRageClickStatus(isEnabled: Boolean) {
        SmartlookAnalyticsModuleImpl.setEventTrackingInteractionRageClickStatus(isEnabled)
    }

    @ReactMethod
    fun restoreDefault() {
        SmartlookAnalyticsModuleImpl.restoreDefault()
    }

    // STATE

    @ReactMethod
    fun isRecording(promise: Promise) {
        SmartlookAnalyticsModuleImpl.isRecording(promise)
    }

    @ReactMethod
    fun getProjectKey(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getProjectKey(promise)
    }

    @ReactMethod
    fun getStateFrameRate(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getStateFrameRate(promise)
    }

    @ReactMethod
    fun getRenderingMode(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getRenderingMode(promise)
    }

    @ReactMethod
    fun getRecordingStatus(promise: Promise) {
        SmartlookAnalyticsModuleImpl.getRecordingStatus(promise)
    }

    @ReactMethod
    fun setRenderingMode(renderingMode: Double) {
        SmartlookAnalyticsModuleImpl.setRenderingMode(renderingMode)
    }

    @ReactMethod
    fun enableLogs() {
        SmartlookAnalyticsModuleImpl.enableLogs()
    }

    @ReactMethod
    fun setupAndRegisterBridgeInterface(frameworkVersion: String, pluginVersion: String) {
        SmartlookAnalyticsModuleImpl.setupAndRegisterBridgeInterface(frameworkVersion, pluginVersion)
    }

    @ReactMethod
    fun registerUserUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.registerUserUrlChangedListener(context)
    }

    @ReactMethod
    fun registerSessionUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.registerSessionUrlChangedListener(context)
    }

    @ReactMethod
    fun removeUserUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.removeUserUrlChangedListener()
    }

    @ReactMethod
    fun removeSessionUrlChangedListener() {
        SmartlookAnalyticsModuleImpl.removeSessionUrlChangedListener()
    }

    @ReactMethod
    fun registerRenderingModeChangedListener() {
        SmartlookAnalyticsModuleImpl.registerRenderingModeChangedListener()
    }

    @ReactMethod
    fun removeRenderingModeChangedListener() {
        SmartlookAnalyticsModuleImpl.removeRenderingModeChangedListener()
    }

    @ReactMethod
    fun registerRecordingStatusChangedListener() {
        SmartlookAnalyticsModuleImpl.registerRecordingStatusChangedListener()
    }

    @ReactMethod
    fun removeRecordingStatusChangedListener() {
        SmartlookAnalyticsModuleImpl.removeRecordingStatusChangedListener()
    }

    @ReactMethod
    fun setRecordingMask(recordingMaskList: ReadableArray) {
        SmartlookAnalyticsModuleImpl.setRecordingMask(recordingMaskList)
    }

    @ReactMethod
    fun enableDefaultClassSensitivity() {
        SmartlookAnalyticsModuleImpl.enableDefaultClassSensitivity()
    }

    @ReactMethod
    fun disableDefaultClassSensitivity() {
        SmartlookAnalyticsModuleImpl.disableDefaultClassSensitivity()
    }

    @ReactMethod
    fun changePlatformClassSensitivity(classNameValueTuples: ReadableArray?) {
        SmartlookAnalyticsModuleImpl.changePlatformClassSensitivity(classNameValueTuples)
    }


  companion object {
        const val NAME = SmartlookAnalyticsModuleImpl.NAME
    }
}
