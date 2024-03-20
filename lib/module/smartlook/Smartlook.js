import SmartlookModule from './SmartlookModule';
import User from './User';
import Analytics from './Analytics';
import Preferences from './Preferences';
import EventListeners from './EventListeners';
import State from './State';
import Sensitivity from './Sensitivity';
import { Platform } from 'react-native';
import { REACT_NATIVE_VERSION, SMARTLOOK_SDK_VERSION } from './version';

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
    if (Platform.OS === 'ios') {
      SmartlookModule.setAdaptiveFrameRateEnabled(false);
    }

    // Bridge interface setup
    SmartlookModule.setupAndRegisterBridgeInterface(REACT_NATIVE_VERSION, SMARTLOOK_SDK_VERSION);
  }

  /**
   * Starts the recording, even when no project key is set.
   * @see the docs for more infromation.
   *
   * @category 1) Recording
   */
  async start() {
    await SmartlookModule.start();
  }

  /**
   * Stops the recording.
   *
   * @category 1) Recording
   */
  async stop() {
    await SmartlookModule.stop();
  }

  /**
   * Resets the SDK to a default state.
   *
   * @category 1) Recording
   */
  async reset() {
    await SmartlookModule.reset();
  }

  /**
   * Enables advanced SDK logging capabilities.
   *
   * @kind **Android only**
   */
  async enableLogs() {
    return await SmartlookModule.enableLogs();
  }

  /**
   * Creates a new @see RecordingMask .
   *
   * @param recordingMask - an array of recording mask elements containing their bounding rectangles and mask types.
   * @see RecordingMaskRect , @see RecordingMaskType
   */
  async setRecordingMask(recordingMask) {
    if (!recordingMask || !(recordingMask.length > 0)) return;
    return await SmartlookModule.setRecordingMask(recordingMask.map(mask => mask.toObject()));
  }
  user = new User();
  analytics = new Analytics();
  preferences = new Preferences();
  eventListeners = new EventListeners();
  state = new State();
  sensitivity = new Sensitivity();
}
export default Smartlook;
//# sourceMappingURL=Smartlook.js.map