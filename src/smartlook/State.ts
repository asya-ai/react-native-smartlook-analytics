import SmartlookModule from './SmartlookModule';
import {
  SmartlookRecordingStatus,
  RecordingStatus,
} from './types/SmartlookRecordingStatus';
import {
  RenderingMode,
  SmartlookRenderingMode,
} from './types/SmartlookRenderingMode';

/**
 * The State class provides an access to the current SDK's runtime state settings and properties.
 */
class State {
  public async isRecording(): Promise<boolean> {
    return await SmartlookModule.isRecording();
  }

  /**
   * Retrieves a string containing the current project key.
   * @returns a Promise resolving to a string
   */
  public async getProjectKey(): Promise<string> {
    return await SmartlookModule.getProjectKey();
  }

  /**
   * Retrieves a number representing the current framerate.
   * @returns a Promise resolving to a number
   */
  public async getStateFrameRate(): Promise<number> {
    return await SmartlookModule.getStateFrameRate();
  }

  /**
   * Sets SDK's video rendering mode for captured data.
   * @see SmartlookRenderingMode
   */
  public async setRenderingMode(
    renderingMode: SmartlookRenderingMode
  ): Promise<void> {
    if (!(renderingMode in SmartlookRenderingMode)) return;
    if (renderingMode === SmartlookRenderingMode.Undefined)
      renderingMode = SmartlookRenderingMode.NoRendering;

    await SmartlookModule.setRenderingMode(renderingMode);
  }

  /**
   * Retrieves the current SDK's rendering mode.
   * @returns a Promise resolving to @see RenderingMode
   */
  public async getRenderingMode(): Promise<RenderingMode> {
    const renderingMode: number = await SmartlookModule.getRenderingMode();

    return SmartlookRenderingMode[renderingMode] as RenderingMode;
  }

  /**
   * Retrieves the current recording status. The default SDK value is `NotStarted`.
   * @returns a Promise resolving to @see RecordingStatus
   */
  public async getRecordingStatus(): Promise<RecordingStatus> {
    const recordingStatus: number = await SmartlookModule.getRecordingStatus();

    return SmartlookRecordingStatus[recordingStatus] as RecordingStatus;
  }
}

export default State;
