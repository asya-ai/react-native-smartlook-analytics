import {
  EmitterSubscription,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import SmartlookModule from './SmartlookModule';
import type { RecordingStatus } from './types/SmartlookRecordingStatus';
import type { RenderingMode } from './types/SmartlookRenderingMode';

type CallbackParamType = string | RecordingStatus | RenderingMode;

export type CallbackShape<T extends CallbackParamType> =
  | ((callbackParam: T) => void)
  | ((callbackParam: T) => Promise<void>);

export type EventListenerCallbackShape =
  | ((url: string) => void)
  | ((url: string) => Promise<void>);

export type RecordingStatusEventListenerCallbackShape =
  | ((recordingStatus: RecordingStatus) => void)
  | ((recordingStatus: RecordingStatus) => Promise<void>);

export type RenderingModeEventListenerCallbackShape =
  | ((renderingMode: RenderingMode) => void)
  | ((renderingMode: RenderingMode) => Promise<void>);

/**
 * The EventListeners class provides access to various SDK events listeners.
 * The method internally take care of the subscription and listener removal to the `NativeEventEmitter`.
 */
class EventListeners {
  private eventListeners: Map<string, EmitterSubscription>;
  private eventEmitter: NativeEventEmitter;

  constructor() {
    this.eventListeners = new Map<string, EmitterSubscription>();
    this.eventEmitter = new NativeEventEmitter(
      NativeModules.SmartlookEventEmitter
    );
  }

  // USER LISTENER

  /**
   * Registers a listener that gets triggered when the User URL changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted user URL.
   */
  public async registerUserChangedListener(
    eventListenerCallback?: EventListenerCallbackShape
  ): Promise<void> {
    if (this.eventListeners.has('onUserUrlChangedListener')) return;

    const listener = this.eventEmitter.addListener(
      'onUserUrlChanged',
      ({ userUrl }) => {
        if (eventListenerCallback) {
          eventListenerCallback(userUrl);
        }
      }
    );

    this.eventListeners.set('onUserUrlChangedListener', listener);
    await SmartlookModule.registerUserUrlChangedListener();
  }

  /**
   * Removes the user URL change listener.
   */
  public async removeUserChangedListener() {
    if (!this.eventListeners.has('onUserUrlChangedListener')) return;

    this.eventListeners.get('onUserUrlChangedListener')?.remove();
    this.eventListeners.delete('onUserUrlChangedListener');
    await SmartlookModule.removeUserUrlChangedListener();
  }

  // SESSION LISTENER

  /**
   * Registers a listener that gets triggered when the Session URL changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted session URL.
   */
  public async registerSessionChangedListener(
    eventListenerCallback?: EventListenerCallbackShape
  ): Promise<void> {
    if (this.eventListeners.has('onSessionUrlChangedListener')) return;

    const listener = this.eventEmitter.addListener(
      'onSessionUrlChanged',
      ({ sessionUrl }) => {
        if (eventListenerCallback) {
          eventListenerCallback(sessionUrl);
        }
      }
    );

    this.eventListeners.set('onSessionUrlChangedListener', listener);
    await SmartlookModule.registerSessionUrlChangedListener();
  }

  /**
   * Removes the session URL change listener.
   */
  public async removeSessionChangedListener() {
    if (!this.eventListeners.has('onSessionUrlChangedListener')) return;

    this.eventListeners.get('onSessionUrlChangedListener')?.remove();
    this.eventListeners.delete('onSessionUrlChangedListener');
    await SmartlookModule.removeSessionUrlChangedListener();
  }

  // RECORDING STATUS LISTENER

  /**
   * Registers a listener that gets triggered when the native SDK's Recording status changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted recording status.
   */
  public async registerRecordingStatusChangedListener(
    eventListenerCallback?: RecordingStatusEventListenerCallbackShape
  ): Promise<void> {
    if (this.eventListeners.has('onRecordingStatusChangedListener')) return;

    const listener = this.eventEmitter.addListener(
      'onRecordingStatusChanged',
      ({ recordingStatus }) => {
        if (eventListenerCallback) {
          eventListenerCallback(recordingStatus);
        }
      }
    );

    this.eventListeners.set('onRecordingStatusChangedListener', listener);
    await SmartlookModule.registerRecordingStatusChangedListener();
  }

  /**
   * Removes the recording status change listener.
   */
  public async removeRecordingStatusChangedListener() {
    if (!this.eventListeners.has('onRecordingStatusChangedListener')) return;

    this.eventListeners.get('onRecordingStatusChangedListener')?.remove();
    this.eventListeners.delete('onRecordingStatusChangedListener');
    await SmartlookModule.removeRecordingStatusChangedListener();
  }

  // RENDERING MODE LISTENER

  /**
   * Registers a listener that gets triggered when the native SDK's Rendering mode changes.
   *
   * @param eventListenerCallback? an optional callback. Gets called when the native event occurs. It accepts then new emitted rendering mode.
   */
  public async registerRenderingModeChangedListener(
    eventListenerCallback?: RenderingModeEventListenerCallbackShape
  ): Promise<void> {
    if (this.eventListeners.has('onRenderingModeChangedListener')) return;

    const listener = this.eventEmitter.addListener(
      'onRenderingModeChanged',
      ({ renderingMode }) => {
        if (eventListenerCallback) {
          eventListenerCallback(renderingMode);
        }
      }
    );

    this.eventListeners.set('onRenderingModeChangedListener', listener);
    await SmartlookModule.registerRenderingModeChangedListener();
  }

  /**
   * Removes the rendering mode change listener.
   */
  public async removeRenderingModeChangedListener() {
    if (!this.eventListeners.has('onRenderingModeChangedListener')) return;

    this.eventListeners.get('onRenderingModeChangedListener')?.remove();
    this.eventListeners.delete('onRenderingModeChangedListener');
    await SmartlookModule.removeRenderingModeChangedListener();
  }
}

export default EventListeners;
