package com.smartlook.reactnative

import android.graphics.Rect
import android.webkit.WebView
import android.widget.EditText
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.smartlook.android.core.api.Session
import com.smartlook.android.core.api.Smartlook
import com.smartlook.android.core.api.User
import com.smartlook.android.core.api.enumeration.Status
import com.smartlook.android.core.api.extension.isSensitive
import com.smartlook.android.core.api.model.Properties
import com.smartlook.android.core.api.model.RecordingMask
import com.smartlook.android.core.video.annotation.RenderingMode
import com.smartlook.sdk.log.LogAspect
import com.smartlook.sdk.bridge.BridgeManager
import java.net.URL

object SmartlookAnalyticsModuleImpl {
    const val NAME = "SmartlookAnalytics"
    private val smartlook = Smartlook.instance

    @JvmStatic
    fun start() {
        smartlook.start()
    }

    @JvmStatic
    fun stop() {
        smartlook.stop()
    }

    @JvmStatic
    fun reset() {
        smartlook.reset()
    }

    // ANALYTICS

    @JvmStatic
    fun trackEvent(name: String, props: ReadableMap?) {
        smartlook.trackEvent(name, smartlookPropertiesFromReadableMap(props))
    }

    @JvmStatic
    fun trackSelector(selectorName: String, props: ReadableMap?) {
        println("[Smartlook] trackSelector is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun trackNavigationEnter(name: String, props: ReadableMap?) {
        smartlook.trackNavigationEnter(name, smartlookPropertiesFromReadableMap(props))
    }

    @JvmStatic
    fun trackNavigationExit(name: String, props: ReadableMap?) {
        smartlook.trackNavigationExit(name, smartlookPropertiesFromReadableMap(props))
    }

    @JvmStatic
    fun setReferrer(referrer: String, source: String) {
        println("[Smartlook] setReferrer is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun putStringEventProperty(name: String, value: String) {
        smartlook.eventProperties.putString(name, value)
    }

    @JvmStatic
    fun getStringEventProperty(name: String, promise: Promise) {
        promise.resolve(smartlook.eventProperties.getString(name))
    }

    @JvmStatic
    fun removeEventProperty(name: String) {
        smartlook.eventProperties.remove(name)
    }

    @JvmStatic
    fun clearEventProperties() {
        smartlook.eventProperties.clear()
    }

    // USER

    @JvmStatic
    fun setUserIdentifier(identifier: String) {
        smartlook.user.identifier = identifier
    }

    @JvmStatic
    fun setUserName(name: String) {
        smartlook.user.name = name
    }

    @JvmStatic
    fun setUserEmail(email: String) {
        smartlook.user.email = email
    }

    @JvmStatic
    fun setUserProperty(name: String, value: String) {
        smartlook.user.properties.putString(name, value)
    }

    @JvmStatic
    fun getUserProperty(name: String, promise: Promise) {
        promise.resolve(smartlook.user.properties.getString(name))
    }

    @JvmStatic
    fun removeUserProperty(name: String) {
        smartlook.user.properties.remove(name)
    }

    @JvmStatic
    fun openNewUser() {
        smartlook.user.openNew()
    }

    @JvmStatic
    fun openNewSession() {
        smartlook.user.session.openNew()
    }

    @JvmStatic
    fun getUserUrl(promise: Promise) {
        promise.resolve(smartlook.user.url?.toString())
    }

    @JvmStatic
    fun getSessionUrl(promise: Promise) {
        promise.resolve(smartlook.user.session.url?.toString())
    }

    @JvmStatic
    fun getSessionUrlWithTimestamp(promise: Promise) {
        promise.resolve(smartlook.user.session.urlWithTimestamp?.toString())
    }

    // PREFERENCES

    @JvmStatic
    fun setRelayProxyHost(relayProxyHost: String) {
        smartlook.setupConfiguration.relayProxyHost = relayProxyHost
    }

    @JvmStatic
    fun setFrameRate(frameRate: Double) {
        smartlook.preferences.frameRate = frameRate.toInt()
    }

    @JvmStatic
    fun getPreferencesFrameRate(promise: Promise) {
        promise.resolve(smartlook.preferences.frameRate)
    }

    @JvmStatic
    fun setProjectKey(projectKey: String) {
        smartlook.preferences.projectKey = projectKey
    }

    @JvmStatic
    fun setJobUploadEnabled(isEnabled: Boolean) {
        println("[Smartlook] setJobUploadEnabled is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun setAdaptiveFrameRateEnabled(isEnabled: Boolean) {
        println("[Smartlook] setAdaptiveFrameRateEnabled is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun getAdaptiveFrameRateEnabled(promise: Promise) {
        println("[Smartlook] getAdaptiveFrameRateEnabled is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun setWebViewSensitivity(isSensitive: Boolean) {
        WebView::class.isSensitive = isSensitive
    }

    // EVENT TRACKING

    @JvmStatic
    fun eventTrackingEnableAll() {
        smartlook.preferences.eventTracking.enableAll()
    }

    @JvmStatic
    fun eventTrackingDisableAll() {
        smartlook.preferences.eventTracking.disableAll()
    }

    @JvmStatic
    fun eventTrackingNavigationEnableAll() {
        smartlook.preferences.eventTracking.navigation.enableAll()
    }

    @JvmStatic
    fun eventTrackingNavigationDisableAll() {
        smartlook.preferences.eventTracking.navigation.disableAll()
    }

    @JvmStatic
    fun setEventTrackingNavigationActivityStatus(isEnabled: Boolean) {
        smartlook.preferences.eventTracking.navigation.isActivityEnabled = isEnabled
    }

    @JvmStatic
    fun setEventTrackingNavigationFragmentStatus(isEnabled: Boolean) {
        smartlook.preferences.eventTracking.navigation.isFragmentEnabled = isEnabled
    }

    @JvmStatic
    fun setEventTrackingInteractionEnableAll() {
        smartlook.preferences.eventTracking.interaction.enableAll()
    }

    @JvmStatic
    fun setEventTrackingInteractionDisableAll() {
        smartlook.preferences.eventTracking.interaction.disableAll()
    }

    @JvmStatic
    fun setEventTrackingInteractionUserStatus(isEnabled: Boolean) {
        smartlook.preferences.eventTracking.interaction.isSelectorEnabled = isEnabled
        smartlook.preferences.eventTracking.interaction.isTouchEnabled = isEnabled
    }

    @JvmStatic
    fun setEventTrackingInteractionRageClickStatus(isEnabled: Boolean) {
        smartlook.preferences.eventTracking.interaction.isRageClickEnabled = isEnabled
    }

    @JvmStatic
    fun restoreDefault() {
        smartlook.preferences.eventTracking.default()
    }

    // STATE

    @JvmStatic
    fun isRecording(promise: Promise) {
        promise.resolve(smartlook.state.status.isRecording)
    }

    @JvmStatic
    fun getProjectKey(promise: Promise) {
        promise.resolve(smartlook.state.projectKey)
    }

    @JvmStatic
    fun getStateFrameRate(promise: Promise) {
        promise.resolve(smartlook.state.frameRate)
    }

    @JvmStatic
    fun getRenderingMode(promise: Promise) {
        promise.resolve(smartlook.state.renderingMode.ordinal)
    }

    @JvmStatic
    fun getRecordingStatus(promise: Promise) {
        val status = smartlook.state.status

        if (status.isRecording)
            promise.resolve(0)
        else
            promise.resolve(status as Status.NotRecording)
    }

    @JvmStatic
    fun setRenderingMode(renderingModeKey: Double) {
        val renderingMode = when (renderingModeKey.toInt()) {
            0 -> {
                RenderingMode.NO_RENDERING
            }
            1 -> {
                RenderingMode.NATIVE
            }
            2 -> {
                RenderingMode.WIREFRAME
            }
            else -> {
                RenderingMode.NATIVE
            }
        }

        smartlook.preferences.renderingMode = renderingMode
    }

    @JvmStatic
    fun enableLogs() {
        smartlook.log.allowedLogAspects = LogAspect.ALL
    }

    // BRIDGE INTERFACE

    @JvmStatic
    fun setupAndRegisterBridgeInterface(frameworkVersion: String, pluginVersion: String) {
        val rnBridgeInterface = RNSmartlookAnalyticsBridgeInterface(frameworkVersion, pluginVersion, true)
        BridgeManager.bridgeInterfaces.add(rnBridgeInterface)
    }

    // EVENT LISTENERS

    @JvmStatic
    fun registerUserUrlChangedListener(context: ReactApplicationContext?) {
        if (context == null) {
            return
        }

        val emitter = context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        val sessionElement = object : User.Listener {
            override fun onUrlChanged(url: URL) {
                val eventParams: WritableMap = Arguments.createMap().apply {
                    putString("userUrl", url.toString())
                }

                emitter.emit("onUserUrlChanged", eventParams)
            }
        }

        smartlook.user.listeners.add(sessionElement)
    }

    @JvmStatic
    fun removeUserUrlChangedListener() {
        smartlook.user.listeners.clear()
    }

    @JvmStatic
    fun registerSessionUrlChangedListener(context: ReactApplicationContext?) {
        if (context == null) {
            return
        }

        val emitter = context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        val sessionElement = object : Session.Listener {
            override fun onUrlChanged(url: URL) {
                val eventParams: WritableMap = Arguments.createMap().apply {
                    putString("sessionUrl", url.toString())
                }

                emitter.emit("onSessionUrlChanged", eventParams)
            }
        }

        smartlook.user.session.listeners.add(sessionElement)
    }

    @JvmStatic
    fun removeSessionUrlChangedListener() {
        smartlook.user.session.listeners.clear()
    }

    @JvmStatic
    fun registerRenderingModeChangedListener() {
        println("[Smartlook] registerRenderingModeChangedListener is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun removeRenderingModeChangedListener() {
        println("[Smartlook] removeRenderingModeChangedListener is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun registerRecordingStatusChangedListener() {
        println("[Smartlook] registerRecordingStatusChangedListener is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun removeRecordingStatusChangedListener() {
        println("[Smartlook] removeRecordingStatusChangedListener is not implemented in the Smartlook Android bridge.")
    }

    @JvmStatic
    fun setRecordingMask(recordingMaskList: ReadableArray) {
        if (recordingMaskList.size() == 0) return

        val recordingMasks: MutableList<RecordingMask.Element> = mutableListOf()

        for (i in 0 until recordingMaskList.size()) {
            val recordingMask = recordingMaskList.getMap(i)
            val maskType = this.getRecordingMaskType(recordingMask)
            val maskElement = this.getRecordingMaskElementWithType(recordingMask, maskType)

            recordingMasks.add(maskElement)
        }

        Smartlook.instance.recordingMask = RecordingMask(recordingMasks)
    }

    private fun getRecordingMaskElementWithType(recordingMask: ReadableMap, maskType: RecordingMask.Element.Type): RecordingMask.Element {
        val maskRect = recordingMask.getMap("rect")!!

        val left = maskRect.getInt("left")
        val top = maskRect.getInt("top")
        val width = maskRect.getInt("width")
        val height = maskRect.getInt("height")

        return RecordingMask.Element(Rect(left, top, left + width, top + height), maskType)
    }

    private fun getRecordingMaskType(recordingMask: ReadableMap): RecordingMask.Element.Type {
        return if (recordingMask.getInt("maskType") == 0) RecordingMask.Element.Type.COVERING else RecordingMask.Element.Type.ERASING
    }

    @JvmStatic
    fun enableDefaultClassSensitivity() {
        EditText::class.isSensitive = true
        WebView::class.isSensitive = true
    }

    @JvmStatic
    fun disableDefaultClassSensitivity() {
        EditText::class.isSensitive = false
        WebView::class.isSensitive = false
    }

    @JvmStatic
    fun changePlatformClassSensitivity(classNames: ReadableArray?) {
        if (classNames == null) return

        for (i in 0 until classNames.size()) {
            val classNameValueTuple = classNames.getArray(i)
            val sensitivityValue = classNameValueTuple.getBoolean(1)

            when (classNameValueTuple.getInt(0)) {
                0 -> EditText::class.isSensitive = sensitivityValue
                1 -> WebView::class.isSensitive = sensitivityValue
            }
        }
    }

    @JvmStatic
    fun smartlookPropertiesFromReadableMap(readableMap: ReadableMap?): Properties? {
        if (readableMap != null) {
            val properties = Properties()
            for ((key, value) in readableMap.toHashMap()) {
                properties.putString(key, value as String)
            }
            return properties
        }
        return null
    }
}
