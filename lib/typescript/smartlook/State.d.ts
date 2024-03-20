import { RecordingStatus } from './types/SmartlookRecordingStatus';
import { RenderingMode, SmartlookRenderingMode } from './types/SmartlookRenderingMode';
/**
 * The State class provides an access to the current SDK's runtime state settings and properties.
 */
declare class State {
    isRecording(): Promise<boolean>;
    /**
     * Retrieves a string containing the current project key.
     * @returns a Promise resolving to a string
     */
    getProjectKey(): Promise<string>;
    /**
     * Retrieves a number representing the current framerate.
     * @returns a Promise resolving to a number
     */
    getStateFrameRate(): Promise<number>;
    /**
     * Sets SDK's video rendering mode for captured data.
     * @see SmartlookRenderingMode
     */
    setRenderingMode(renderingMode: SmartlookRenderingMode): Promise<void>;
    /**
     * Retrieves the current SDK's rendering mode.
     * @returns a Promise resolving to @see RenderingMode
     */
    getRenderingMode(): Promise<RenderingMode>;
    /**
     * Retrieves the current recording status. The default SDK value is `NotStarted`.
     * @returns a Promise resolving to @see RecordingStatus
     */
    getRecordingStatus(): Promise<RecordingStatus>;
}
export default State;
//# sourceMappingURL=State.d.ts.map