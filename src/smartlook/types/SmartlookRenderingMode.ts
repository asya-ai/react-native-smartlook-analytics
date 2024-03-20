/**
 * A video rendering mode for captured data.
 */
export enum SmartlookRenderingMode {
  /**
   * @ignore
   */
  Undefined = -1,
  /**
   * Renders the whole screen as a black image. Actual content is not part of the final video.
   */
  NoRendering = 0,
  /**
   * Renders the video just as the screen images.
   */
  Native = 1,
  /**
   * Renders the video as a wireframe representation of screen data.
   * @kind **Android only** in the currect implementation
   */
  WireFrame = 2,
}

/**
 * Represents a union type of the @see RenderingMode .
 */
export type RenderingMode = keyof typeof SmartlookRenderingMode;
