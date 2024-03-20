import User from './User';
import Analytics from './Analytics';
import Preferences from './Preferences';
import EventListeners from './EventListeners';
import State from './State';
import Sensitivity from './Sensitivity';
import type { RecordingMaskElement } from './RecordingMask';
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
declare class Smartlook {
    private static _instance;
    /**
     * @summary Static Smartlook wrapper singleton getter. Main entrypoint of the API.
     * @example
     * ```typescript
     *  Smartlook.instance.start();
     * ```
     * @static
     */
    static get instance(): Smartlook;
    private constructor();
    /**
     * Starts the recording, even when no project key is set.
     * @see the docs for more infromation.
     *
     * @category 1) Recording
     */
    start(): Promise<void>;
    /**
     * Stops the recording.
     *
     * @category 1) Recording
     */
    stop(): Promise<void>;
    /**
     * Resets the SDK to a default state.
     *
     * @category 1) Recording
     */
    reset(): Promise<void>;
    /**
     * Enables advanced SDK logging capabilities.
     *
     * @kind **Android only**
     */
    enableLogs(): Promise<void>;
    /**
     * Creates a new @see RecordingMask .
     *
     * @param recordingMask - an array of recording mask elements containing their bounding rectangles and mask types.
     * @see RecordingMaskRect , @see RecordingMaskType
     */
    setRecordingMask(recordingMask: Array<RecordingMaskElement>): Promise<void>;
    user: User;
    analytics: Analytics;
    preferences: Preferences;
    eventListeners: EventListeners;
    state: State;
    sensitivity: Sensitivity;
}
export default Smartlook;
//# sourceMappingURL=Smartlook.d.ts.map