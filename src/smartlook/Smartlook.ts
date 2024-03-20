import SmartlookModule from './SmartlookModule';
import User from './User';
import Analytics from './Analytics';
import Preferences from './Preferences';
import EventListeners from './EventListeners';
import State from './State';
import Sensitivity from './Sensitivity';
import type { RecordingMaskElement } from './RecordingMask';

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
  private static _instance: Smartlook;

  /**
   * @summary Static Smartlook wrapper singleton getter. Main entrypoint of the API.
   * @example
   * ```typescript
   *  Smartlook.instance.start();
   * ```
   * @static
   */
  public static get instance() {
    if (!Smartlook._instance) {
      Smartlook._instance = new Smartlook();
    }
    return Smartlook._instance;
  }

  private constructor() {
    // TODO remove when the adaptive frame rate on iOS is fixed
    if (Platform.OS === 'ios') {
      SmartlookModule.setAdaptiveFrameRateEnabled(false);
    }

    // Bridge interface setup
    SmartlookModule.setupAndRegisterBridgeInterface(
      REACT_NATIVE_VERSION,
      SMARTLOOK_SDK_VERSION
    );
  }

  /**
   * Starts the recording, even when no project key is set.
   * @see the docs for more infromation.
   *
   * @category 1) Recording
   */
  public async start(): Promise<void> {
    await SmartlookModule.start();
  }

  /**
   * Stops the recording.
   *
   * @category 1) Recording
   */
  public async stop(): Promise<void> {
    await SmartlookModule.stop();
  }

  /**
   * Resets the SDK to a default state.
   *
   * @category 1) Recording
   */
  public async reset(): Promise<void> {
    await SmartlookModule.reset();
  }

  /**
   * Enables advanced SDK logging capabilities.
   *
   * @kind **Android only**
   */
  public async enableLogs(): Promise<void> {
    return await SmartlookModule.enableLogs();
  }

  /**
   * Creates a new @see RecordingMask .
   *
   * @param recordingMask - an array of recording mask elements containing their bounding rectangles and mask types.
   * @see RecordingMaskRect , @see RecordingMaskType
   */
  public async setRecordingMask(
    recordingMask: Array<RecordingMaskElement>
  ): Promise<void> {
    if (!recordingMask || !(recordingMask.length > 0)) return;

    return await SmartlookModule.setRecordingMask(
      recordingMask.map((mask) => mask.toObject())
    );
  }

  public user = new User();
  public analytics = new Analytics();
  public preferences = new Preferences();
  public eventListeners = new EventListeners();
  public state = new State();
  public sensitivity = new Sensitivity();
}

export default Smartlook;
