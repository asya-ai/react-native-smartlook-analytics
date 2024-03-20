import SmartlookModule from './SmartlookModule';
import { SmartlookRecordingStatus } from './types/SmartlookRecordingStatus';
import { SmartlookRenderingMode } from './types/SmartlookRenderingMode';

/**
 * The State class provides an access to the current SDK's runtime state settings and properties.
 */
class State {
  async isRecording() {
    return await SmartlookModule.isRecording();
  }

  /**
   * Retrieves a string containing the current project key.
   * @returns a Promise resolving to a string
   */
  async getProjectKey() {
    return await SmartlookModule.getProjectKey();
  }

  /**
   * Retrieves a number representing the current framerate.
   * @returns a Promise resolving to a number
   */
  async getStateFrameRate() {
    return await SmartlookModule.getStateFrameRate();
  }

  /**
   * Sets SDK's video rendering mode for captured data.
   * @see SmartlookRenderingMode
   */
  async setRenderingMode(renderingMode) {
    if (!(renderingMode in SmartlookRenderingMode)) return;
    if (renderingMode === SmartlookRenderingMode.Undefined) renderingMode = SmartlookRenderingMode.NoRendering;
    await SmartlookModule.setRenderingMode(renderingMode);
  }

  /**
   * Retrieves the current SDK's rendering mode.
   * @returns a Promise resolving to @see RenderingMode
   */
  async getRenderingMode() {
    const renderingMode = await SmartlookModule.getRenderingMode();
    return SmartlookRenderingMode[renderingMode];
  }

  /**
   * Retrieves the current recording status. The default SDK value is `NotStarted`.
   * @returns a Promise resolving to @see RecordingStatus
   */
  async getRecordingStatus() {
    const recordingStatus = await SmartlookModule.getRecordingStatus();
    return SmartlookRecordingStatus[recordingStatus];
  }
}
export default State;
//# sourceMappingURL=State.js.map