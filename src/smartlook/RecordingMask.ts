import { SmartlookRecordingMaskType } from './types/SmartlookRecordingMaskType';
import { Platform, PixelRatio } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const PX_RATIO = PixelRatio.get();

/**
 * The RecordingMask class defines an overlay that masks a specified screen part to protect it from unwanted recording.
 */
export class RecordingMaskElement {
  private recordingMaskType: SmartlookRecordingMaskType;
  private recordingMaskRect: RecordingMaskRect;

  /**
   * Creates an overlay that masks a specified screen part to protect it from unwanted recording.
   * @param recordingMaskType - Represents the type of a mask element.
   * @param recordingMaskRect - Defines an area of the recording mask.
   */
  public constructor(
    recordingMaskType: SmartlookRecordingMaskType,
    recordingMaskRect: RecordingMaskRect
  ) {
    this.recordingMaskType = recordingMaskType;
    this.recordingMaskRect = recordingMaskRect;
  }

  /**
   * @ignore
   */
  public toObject() {
    if (!(this.recordingMaskType in SmartlookRecordingMaskType))
      this.recordingMaskType = SmartlookRecordingMaskType.Covering;

    return {
      rect: this.recordingRectToObject(),
      maskType: this.recordingMaskType,
    };
  }

  private recordingRectToObject() {
    const { left, top, width, height } = this.recordingMaskRect;
    return {
      left: IS_ANDROID ? left * PX_RATIO : left,
      top: IS_ANDROID ? top * PX_RATIO : top,
      width: IS_ANDROID ? width * PX_RATIO : width,
      height: IS_ANDROID ? height * PX_RATIO : height,
    };
  }
}

/**
 * Defines an area of the recording mask.
 */
export class RecordingMaskRect {
  public left: number;
  public top: number;
  public width: number;
  public height: number;

  /**
   * Creates a new mask element structure bound to a coordinate-specified area.
   */
  public constructor(left: number, top: number, width: number, height: number) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
}
