import type { RecordingStatus } from './types/SmartlookRecordingStatus';
import type { RenderingMode } from './types/SmartlookRenderingMode';
type CallbackParamType = string | RecordingStatus | RenderingMode;
export type CallbackShape<T extends CallbackParamType> = ((callbackParam: T) => void) | ((callbackParam: T) => Promise<void>);
export type EventListenerCallbackShape = ((url: string) => void) | ((url: string) => Promise<void>);
export type RecordingStatusEventListenerCallbackShape = ((recordingStatus: RecordingStatus) => void) | ((recordingStatus: RecordingStatus) => Promise<void>);
export type RenderingModeEventListenerCallbackShape = ((renderingMode: RenderingMode) => void) | ((renderingMode: RenderingMode) => Promise<void>);
/**
 * The EventListeners class provides access to various SDK events listeners.
 * The method internally take care of the subscription and listener removal to the `NativeEventEmitter`.
 */
declare class EventListeners {
    private eventListeners;
    private eventEmitter;
    constructor();
    /**
     * Registers a listener that gets triggered when the User URL changes.
     *
     * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted user URL.
     */
    registerUserChangedListener(eventListenerCallback?: EventListenerCallbackShape): Promise<void>;
    /**
     * Removes the user URL change listener.
     */
    removeUserChangedListener(): Promise<void>;
    /**
     * Registers a listener that gets triggered when the Session URL changes.
     *
     * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted session URL.
     */
    registerSessionChangedListener(eventListenerCallback?: EventListenerCallbackShape): Promise<void>;
    /**
     * Removes the session URL change listener.
     */
    removeSessionChangedListener(): Promise<void>;
    /**
     * Registers a listener that gets triggered when the native SDK's Recording status changes.
     *
     * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted recording status.
     */
    registerRecordingStatusChangedListener(eventListenerCallback?: RecordingStatusEventListenerCallbackShape): Promise<void>;
    /**
     * Removes the recording status change listener.
     */
    removeRecordingStatusChangedListener(): Promise<void>;
    /**
     * Registers a listener that gets triggered when the native SDK's Rendering mode changes.
     *
     * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted rendering mode.
     */
    registerRenderingModeChangedListener(eventListenerCallback?: RenderingModeEventListenerCallbackShape): Promise<void>;
    /**
     * Removes the rendering mode change listener.
     */
    removeRenderingModeChangedListener(): Promise<void>;
}
export default EventListeners;
//# sourceMappingURL=EventListeners.d.ts.map