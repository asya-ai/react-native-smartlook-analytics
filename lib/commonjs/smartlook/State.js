"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SmartlookModule = _interopRequireDefault(require("./SmartlookModule"));
var _SmartlookRecordingStatus = require("./types/SmartlookRecordingStatus");
var _SmartlookRenderingMode = require("./types/SmartlookRenderingMode");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The State class provides an access to the current SDK's runtime state settings and properties.
 */
class State {
  async isRecording() {
    return await _SmartlookModule.default.isRecording();
  }

  /**
   * Retrieves a string containing the current project key.
   * @returns a Promise resolving to a string
   */
  async getProjectKey() {
    return await _SmartlookModule.default.getProjectKey();
  }

  /**
   * Retrieves a number representing the current framerate.
   * @returns a Promise resolving to a number
   */
  async getStateFrameRate() {
    return await _SmartlookModule.default.getStateFrameRate();
  }

  /**
   * Sets SDK's video rendering mode for captured data.
   * @see SmartlookRenderingMode
   */
  async setRenderingMode(renderingMode) {
    if (!(renderingMode in _SmartlookRenderingMode.SmartlookRenderingMode)) return;
    if (renderingMode === _SmartlookRenderingMode.SmartlookRenderingMode.Undefined) renderingMode = _SmartlookRenderingMode.SmartlookRenderingMode.NoRendering;
    await _SmartlookModule.default.setRenderingMode(renderingMode);
  }

  /**
   * Retrieves the current SDK's rendering mode.
   * @returns a Promise resolving to @see RenderingMode
   */
  async getRenderingMode() {
    const renderingMode = await _SmartlookModule.default.getRenderingMode();
    return _SmartlookRenderingMode.SmartlookRenderingMode[renderingMode];
  }

  /**
   * Retrieves the current recording status. The default SDK value is `NotStarted`.
   * @returns a Promise resolving to @see RecordingStatus
   */
  async getRecordingStatus() {
    const recordingStatus = await _SmartlookModule.default.getRecordingStatus();
    return _SmartlookRecordingStatus.SmartlookRecordingStatus[recordingStatus];
  }
}
var _default = State;
exports.default = _default;
//# sourceMappingURL=State.js.map