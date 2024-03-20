package com.smartlook.reactnative

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

class SmartlookSensitiveViewManager(var mCallerContext: ReactApplicationContext) :
    ViewGroupManager<SmartlookSensitiveView>() {
    override fun getName(): String {
        return SmartlookSensitiveViewManagerImpl.NAME
    }

    public override fun createViewInstance(context: ThemedReactContext): SmartlookSensitiveView {
        return SmartlookSensitiveViewManagerImpl.createViewInstance(context)
    }

    @ReactProp(name = "isSensitive")
    fun setIsSensitive(view: SmartlookSensitiveView, isSensitive: Boolean) {
        SmartlookSensitiveViewManagerImpl.setIsSensitive(view, isSensitive)
    }

    override fun receiveCommand(view: SmartlookSensitiveView, commandId: String?, args: ReadableArray?) {
        super.receiveCommand(view, commandId, args)
        when (commandId) {
            "changeIsViewSensitive" -> {
                if (args != null) {
                  val isSensitive = args.getBoolean(0)
                  SmartlookSensitiveViewManagerImpl.setIsSensitive(view, isSensitive)
                }
            }
        }
    }
}
