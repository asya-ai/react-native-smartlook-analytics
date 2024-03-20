import { SmartlookRecordingMaskType } from './types/SmartlookRecordingMaskType';
/**
 * The RecordingMask class defines an overlay that masks a specified screen part to protect it from unwanted recording.
 */
export declare class RecordingMaskElement {
    private recordingMaskType;
    private recordingMaskRect;
    /**
     * Creates an overlay that masks a specified screen part to protect it from unwanted recording.
     * @param recordingMaskType - Represents the type of a mask element.
     * @param recordingMaskRect - Defines an area of the recording mask.
     */
    constructor(recordingMaskType: SmartlookRecordingMaskType, recordingMaskRect: RecordingMaskRect);
    /**
     * @ignore
     */
    toObject(): {
        rect: {
            left: number;
            top: number;
            width: number;
            height: number;
        };
        maskType: SmartlookRecordingMaskType;
    };
    private recordingRectToObject;
}
/**
 * Defines an area of the recording mask.
 */
export declare class RecordingMaskRect {
    left: number;
    top: number;
    width: number;
    height: number;
    /**
     * Creates a new mask element structure bound to a coordinate-specified area.
     */
    constructor(left: number, top: number, width: number, height: number);
}
//# sourceMappingURL=RecordingMask.d.ts.map