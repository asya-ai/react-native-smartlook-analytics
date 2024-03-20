/**
 * A video rendering mode for captured data.
 */
export let SmartlookRenderingMode;

/**
 * Represents a union type of the @see RenderingMode .
 */
(function (SmartlookRenderingMode) {
  SmartlookRenderingMode[SmartlookRenderingMode["Undefined"] = -1] = "Undefined";
  SmartlookRenderingMode[SmartlookRenderingMode["NoRendering"] = 0] = "NoRendering";
  SmartlookRenderingMode[SmartlookRenderingMode["Native"] = 1] = "Native";
  SmartlookRenderingMode[SmartlookRenderingMode["WireFrame"] = 2] = "WireFrame";
})(SmartlookRenderingMode || (SmartlookRenderingMode = {}));
//# sourceMappingURL=SmartlookRenderingMode.js.map