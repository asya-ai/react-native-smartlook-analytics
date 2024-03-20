"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SmartlookModule = _interopRequireDefault(require("./SmartlookModule"));
var _User = _interopRequireDefault(require("./User"));
var _Analytics = _interopRequireDefault(require("./Analytics"));
var _Preferences = _interopRequireDefault(require("./Preferences"));
var _EventListeners = _interopRequireDefault(require("./EventListeners"));
var _State = _interopRequireDefault(require("./State"));
var _Sensitivity = _interopRequireDefault(require("./Sensitivity"));
var _reactNative = require("react-native");
var _version = require("./version");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The main Smartlook SDK wrapper.
 *
 * @summary The main entry point of the React Native Smartlook wrapper.
 *  It waguely mimics the class structure of the native SDKs.
 *  The class is NOT instantiable, use it by accessing the static `instance` singleton property, e.g.
 *
 * @example
 * ```typescript
 * Smartlook.instance.start();
 * ```
 */
class Smartlook {
  /**
   * @summary Static Smartlook wrapper singleton getter. Main entrypoint of the API.
   * @example
   * ```typescript
   *  Smartlook.instance.start();
   * ```
   * @static
   */
  static get instance() {
    if (!Smartlook._instance) {
      Smartlook._instance = new Smartlook();
    }
    return Smartlook._instance;
  }
  constructor() {
    // TODO remove when the adaptive frame rate on iOS is fixed
    if (_reactNative.Platform.OS === 'ios') {
      _SmartlookModule.default.setAdaptiveFrameRateEnabled(false);
    }

    // Bridge interface setup
    _SmartlookModule.default.setupAndRegisterBridgeInterface(_version.REACT_NATIVE_VERSION, _version.SMARTLOOK_SDK_VERSION);
  }

  /**
   * Starts the recording, even when no project key is set.
   * @see the docs for more infromation.
   *
   * @category 1) Recording
   */
  async start() {
    await _SmartlookModule.default.start();
  }

  /**
   * Stops the recording.
   *
   * @category 1) Recording
   */
  async stop() {
    await _SmartlookModule.default.stop();
  }

  /**
   * Resets the SDK to a default state.
   *
   * @category 1) Recording
   */
  async reset() {
    await _SmartlookModule.default.reset();
  }

  /**
   * Enables advanced SDK logging capabilities.
   *
   * @kind **Android only**
   */
  async enableLogs() {
    return await _SmartlookModule.default.enableLogs();
  }

  /**
   * Creates a new @see RecordingMask .
   *
   * @param recordingMask - an array of recording mask elements containing their bounding rectangles and mask types.
   * @see RecordingMaskRect , @see RecordingMaskType
   */
  async setRecordingMask(recordingMask) {
    if (!recordingMask || !(recordingMask.length > 0)) return;
    return await _SmartlookModule.default.setRecordingMask(recordingMask.map(mask => mask.toObject()));
  }
  user = new _User.default();
  analytics = new _Analytics.default();
  preferences = new _Preferences.default();
  eventListeners = new _EventListeners.default();
  state = new _State.default();
  sensitivity = new _Sensitivity.default();
}
var _default = Smartlook;
exports.default = _default;
//# sourceMappingURL=Smartlook.js.map