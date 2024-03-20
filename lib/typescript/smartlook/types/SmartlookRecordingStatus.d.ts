/**
 * A status of SDK's recording state. Either is Recording or one of the recording fault states.
 */
export declare enum SmartlookRecordingStatus {
    Recording = 0,
    NotStarted = 1,
    Stopped = 2,
    BellowMinSdkVersion = 3,
    ProjectLimitReached = 4,
    StorageLimitReached = 5,
    InternalError = 6,
    NotRunningInSwiftUIContext = 7,
    UnsupportedPlatform = 8
}
/**
 * Represents a union type of the @see RecordingStatus .
 */
export type RecordingStatus = keyof typeof SmartlookRecordingStatus;
//# sourceMappingURL=SmartlookRecordingStatus.d.ts.map