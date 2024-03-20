import { NativeModules, NativeEventEmitter } from 'react-native';
import SmartlookModule from './SmartlookModule';
/**
 * The EventListeners class provides access to various SDK events listeners.
 * The method internally take care of the subscription and listener removal to the `NativeEventEmitter`.
 */
class EventListeners {
  constructor() {
    this.eventListeners = new Map();
    this.eventEmitter = new NativeEventEmitter(NativeModules.SmartlookEventEmitter);
  }

  // USER LISTENER

  /**
   * Registers a listener that gets triggered when the User URL changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted user URL.
   */
  async registerUserChangedListener(eventListenerCallback) {
    if (this.eventListeners.has('onUserUrlChangedListener')) return;
    const listener = this.eventEmitter.addListener('onUserUrlChanged', _ref => {
      let {
        userUrl
      } = _ref;
      if (eventListenerCallback) {
        eventListenerCallback(userUrl);
      }
    });
    this.eventListeners.set('onUserUrlChangedListener', listener);
    await SmartlookModule.registerUserUrlChangedListener();
  }

  /**
   * Removes the user URL change listener.
   */
  async removeUserChangedListener() {
    var _this$eventListeners$;
    if (!this.eventListeners.has('onUserUrlChangedListener')) return;
    (_this$eventListeners$ = this.eventListeners.get('onUserUrlChangedListener')) === null || _this$eventListeners$ === void 0 ? void 0 : _this$eventListeners$.remove();
    this.eventListeners.delete('onUserUrlChangedListener');
    await SmartlookModule.removeUserUrlChangedListener();
  }

  // SESSION LISTENER

  /**
   * Registers a listener that gets triggered when the Session URL changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted session URL.
   */
  async registerSessionChangedListener(eventListenerCallback) {
    if (this.eventListeners.has('onSessionUrlChangedListener')) return;
    const listener = this.eventEmitter.addListener('onSessionUrlChanged', _ref2 => {
      let {
        sessionUrl
      } = _ref2;
      if (eventListenerCallback) {
        eventListenerCallback(sessionUrl);
      }
    });
    this.eventListeners.set('onSessionUrlChangedListener', listener);
    await SmartlookModule.registerSessionUrlChangedListener();
  }

  /**
   * Removes the session URL change listener.
   */
  async removeSessionChangedListener() {
    var _this$eventListeners$2;
    if (!this.eventListeners.has('onSessionUrlChangedListener')) return;
    (_this$eventListeners$2 = this.eventListeners.get('onSessionUrlChangedListener')) === null || _this$eventListeners$2 === void 0 ? void 0 : _this$eventListeners$2.remove();
    this.eventListeners.delete('onSessionUrlChangedListener');
    await SmartlookModule.removeSessionUrlChangedListener();
  }

  // RECORDING STATUS LISTENER

  /**
   * Registers a listener that gets triggered when the native SDK's Recording status changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted recording status.
   */
  async registerRecordingStatusChangedListener(eventListenerCallback) {
    if (this.eventListeners.has('onRecordingStatusChangedListener')) return;
    const listener = this.eventEmitter.addListener('onRecordingStatusChanged', _ref3 => {
      let {
        recordingStatus
      } = _ref3;
      if (eventListenerCallback) {
        eventListenerCallback(recordingStatus);
      }
    });
    this.eventListeners.set('onRecordingStatusChangedListener', listener);
    await SmartlookModule.registerRecordingStatusChangedListener();
  }

  /**
   * Removes the recording status change listener.
   */
  async removeRecordingStatusChangedListener() {
    var _this$eventListeners$3;
    if (!this.eventListeners.has('onRecordingStatusChangedListener')) return;
    (_this$eventListeners$3 = this.eventListeners.get('onRecordingStatusChangedListener')) === null || _this$eventListeners$3 === void 0 ? void 0 : _this$eventListeners$3.remove();
    this.eventListeners.delete('onRecordingStatusChangedListener');
    await SmartlookModule.removeRecordingStatusChangedListener();
  }

  // RENDERING MODE LISTENER

  /**
   * Registers a listener that gets triggered when the native SDK's Rendering mode changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted rendering mode.
   */
  async registerRenderingModeChangedListener(eventListenerCallback) {
    if (this.eventListeners.has('onRenderingModeChangedListener')) return;
    const listener = this.eventEmitter.addListener('onRenderingModeChanged', _ref4 => {
      let {
        renderingMode
      } = _ref4;
      if (eventListenerCallback) {
        eventListenerCallback(renderingMode);
      }
    });
    this.eventListeners.set('onRenderingModeChangedListener', listener);
    await SmartlookModule.registerRenderingModeChangedListener();
  }

  /**
   * Removes the rendering mode change listener.
   */
  async removeRenderingModeChangedListener() {
    var _this$eventListeners$4;
    if (!this.eventListeners.has('onRenderingModeChangedListener')) return;
    (_this$eventListeners$4 = this.eventListeners.get('onRenderingModeChangedListener')) === null || _this$eventListeners$4 === void 0 ? void 0 : _this$eventListeners$4.remove();
    this.eventListeners.delete('onRenderingModeChangedListener');
    await SmartlookModule.removeRenderingModeChangedListener();
  }
}
export default EventListeners;
//# sourceMappingURL=EventListeners.js.map