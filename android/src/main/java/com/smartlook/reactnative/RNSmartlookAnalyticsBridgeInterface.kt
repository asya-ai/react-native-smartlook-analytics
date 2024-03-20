package com.smartlook.reactnative

import android.view.View
import com.smartlook.sdk.bridge.model.BridgeFrameworkInfo
import com.smartlook.sdk.bridge.model.BridgeInterface
import com.smartlook.sdk.bridge.model.BridgeWireframe

class RNSmartlookAnalyticsBridgeInterface(
    private val frameworkVersion: String,
    private val pluginVersion: String, override val isRecordingAllowed: Boolean
): BridgeInterface {
    override fun obtainFrameworkInfo(callback: (BridgeFrameworkInfo?) -> Unit) {
        val frameworkInfo = BridgeFrameworkInfo(
            framework = "REACT_NATIVE",
            frameworkPluginVersion = this.pluginVersion,
            frameworkVersion = this.frameworkVersion
        )

        callback(frameworkInfo)
    }

    override fun obtainWireframeData(instance: View, callback: (BridgeWireframe?) -> Unit) {
        callback(null)
    }

    override fun obtainWireframeRootClasses(): List<Class<out View>> {
        return emptyList()
    }
}