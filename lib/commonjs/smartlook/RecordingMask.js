"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecordingMaskRect = exports.RecordingMaskElement = void 0;
var _SmartlookRecordingMaskType = require("./types/SmartlookRecordingMaskType");
var _reactNative = require("react-native");
const IS_ANDROID = _reactNative.Platform.OS === 'android';
const PX_RATIO = _reactNative.PixelRatio.get();

/**
 * The RecordingMask class defines an overlay that masks a specified screen part to protect it from unwanted recording.
 */
class RecordingMaskElement {
  /**
   * Creates an overlay that masks a specified screen part to protect it from unwanted recording.
   * @param recordingMaskType - Represents the type of a mask element.
   * @param recordingMaskRect - Defines an area of the recording mask.
   */
  constructor(recordingMaskType, recordingMaskRect) {
    this.recordingMaskType = recordingMaskType;
    this.recordingMaskRect = recordingMaskRect;
  }

  /**
   * @ignore
   */
  toObject() {
    if (!(this.recordingMaskType in _SmartlookRecordingMaskType.SmartlookRecordingMaskType)) this.recordingMaskType = _SmartlookRecordingMaskType.SmartlookRecordingMaskType.Covering;
    return {
      rect: this.recordingRectToObject(),
      maskType: this.recordingMaskType
    };
  }
  recordingRectToObject() {
    const {
      left,
      top,
      width,
      height
    } = this.recordingMaskRect;
    return {
      left: IS_ANDROID ? left * PX_RATIO : left,
      top: IS_ANDROID ? top * PX_RATIO : top,
      width: IS_ANDROID ? width * PX_RATIO : width,
      height: IS_ANDROID ? height * PX_RATIO : height
    };
  }
}

/**
 * Defines an area of the recording mask.
 */
exports.RecordingMaskElement = RecordingMaskElement;
class RecordingMaskRect {
  /**
   * Creates a new mask element structure bound to a coordinate-specified area.
   */
  constructor(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
}
exports.RecordingMaskRect = RecordingMaskRect;
//# sourceMappingURL=RecordingMask.js.map