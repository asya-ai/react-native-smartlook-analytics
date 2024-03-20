package com.smartlook.reactnative

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.uimanager.ViewManager
import java.util.HashMap

class SmartlookAnalyticsPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == SmartlookAnalyticsModule.NAME) {
            SmartlookAnalyticsModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            val moduleInfos: MutableMap<String, ReactModuleInfo> = HashMap()
            val isTurboModule = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            moduleInfos[SmartlookAnalyticsModule.NAME] = ReactModuleInfo(
                SmartlookAnalyticsModule.NAME,
                SmartlookAnalyticsModule.NAME,
                false,  // canOverrideExistingModule
                false,  // needsEagerInit
                true,  // hasConstants
                false,  // isCxxModule
                isTurboModule // isTurboModule
            )
            moduleInfos
        }
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<*, *>> {
        val viewManagers: MutableList<ViewManager<*, *>> = ArrayList()
        viewManagers.add(SmartlookSensitiveViewManager(reactContext))

        return viewManagers
    }
}
