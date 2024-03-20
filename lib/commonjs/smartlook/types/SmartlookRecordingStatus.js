"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmartlookRecordingStatus = void 0;
/**
 * A status of SDK's recording state. Either is Recording or one of the recording fault states.
 */let SmartlookRecordingStatus; /**
                                  * Represents a union type of the @see RecordingStatus .
                                  */
exports.SmartlookRecordingStatus = SmartlookRecordingStatus;
(function (SmartlookRecordingStatus) {
  SmartlookRecordingStatus[SmartlookRecordingStatus["Recording"] = 0] = "Recording";
  SmartlookRecordingStatus[SmartlookRecordingStatus["NotStarted"] = 1] = "NotStarted";
  SmartlookRecordingStatus[SmartlookRecordingStatus["Stopped"] = 2] = "Stopped";
  SmartlookRecordingStatus[SmartlookRecordingStatus["BellowMinSdkVersion"] = 3] = "BellowMinSdkVersion";
  SmartlookRecordingStatus[SmartlookRecordingStatus["ProjectLimitReached"] = 4] = "ProjectLimitReached";
  SmartlookRecordingStatus[SmartlookRecordingStatus["StorageLimitReached"] = 5] = "StorageLimitReached";
  SmartlookRecordingStatus[SmartlookRecordingStatus["InternalError"] = 6] = "InternalError";
  SmartlookRecordingStatus[SmartlookRecordingStatus["NotRunningInSwiftUIContext"] = 7] = "NotRunningInSwiftUIContext";
  SmartlookRecordingStatus[SmartlookRecordingStatus["UnsupportedPlatform"] = 8] = "UnsupportedPlatform";
})(SmartlookRecordingStatus || (exports.SmartlookRecordingStatus = SmartlookRecordingStatus = {}));
//# sourceMappingURL=SmartlookRecordingStatus.js.map