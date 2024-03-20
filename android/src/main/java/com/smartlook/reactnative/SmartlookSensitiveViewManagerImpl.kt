package com.smartlook.reactnative

import com.facebook.react.uimanager.ThemedReactContext
import com.smartlook.android.core.api.extension.isSensitive

object SmartlookSensitiveViewManagerImpl {
  const val NAME = "SmartlookSensitiveView"

  @JvmStatic
  fun createViewInstance(context: ThemedReactContext?): SmartlookSensitiveView {
    return SmartlookSensitiveView(context)
  }

  @JvmStatic
  fun setIsSensitive(view: SmartlookSensitiveView, isSensitive: Boolean) {
      view.isSensitive = isSensitive
  }

  @JvmStatic
  fun changeIsViewSensitive(view: SmartlookSensitiveView, isSensitive: Boolean) {
    this.setIsSensitive(view, isSensitive)
  }
}
