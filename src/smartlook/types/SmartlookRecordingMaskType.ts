/**
 * Represents the type of a mask element.
 */
export enum SmartlookRecordingMaskType {
  /**
   * Covers an area that will not be recorded.
   */
  Covering = 0,
  /**
   * Erases the lower layers of the mask.
   */
  Erasing = 1,
}

/**
 * Represents a union type of the @see SmartlookRecordingMaskType .
 */
export type RecordingMaskType = keyof typeof SmartlookRecordingMaskType;
