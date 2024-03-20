import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  start(): void;
  stop(): void;
  reset(): void;
  trackEvent(eventName: string, props?: Object): void;
  trackSelector(selectorName: string, props?: Object): void;
  trackNavigationEnter(eventName: string, props?: Object): void;
  trackNavigationExit(eventName: string, props?: Object): void;
  setReferrer(referrer: string, source: string): void;
  putStringEventProperty(propertyName: string, value: string): void;
  getStringEventProperty(propertyName: string): Promise<string>;
  removeEventProperty(propertyName: string): void;
  clearEventProperties(): void;
  setUserIdentifier(identifier: string): void;
  setUserName(name: string): void;
  setUserEmail(email: string): void;
  setUserProperty(propertyName: string, value: string): void;
  getUserProperty(propertyName: string): Promise<string>;
  removeUserProperty(propertyName: string): void;
  openNewUser(): void;
  openNewSession(): void;
  getUserUrl(): Promise<string>;
  getSessionUrl(): Promise<string>;
  getSessionUrlWithTimestamp(): Promise<string>;
  setRelayProxyHost(relaxyProxyHost: string): void;
  setFrameRate(frameRate: number): void;
  getPreferencesFrameRate(): Promise<number>;
  setJobUploadEnabled(isEnabled: boolean): void;
  setAdaptiveFrameRateEnabled(isEnabled: boolean): void;
  getAdaptiveFrameRateEnabled(): Promise<boolean>;
  eventTrackingEnableAll(): void;
  eventTrackingDisableAll(): void;
  setProjectKey(key: string): void;
  isRecording(): Promise<boolean>;
  getProjectKey(): Promise<string>;
  setEventTrackingInteractionUserStatus(isEnabled: boolean): void;
  setEventTrackingInteractionRageClickStatus(isEnabled: boolean): void;
  restoreDefault(): void;
  setWebViewSensitivity(isSensitive: boolean): void;
  getRenderingMode(): Promise<number>;
  getRecordingStatus(): Promise<number>;
  getStateFrameRate(): Promise<number>;
  setRenderingMode(renderingMode: number): void;
  setupAndRegisterBridgeInterface(
    frameworkVersion: string,
    pluginVersion: string
  ): void;
  registerUserUrlChangedListener(): void;
  registerSessionUrlChangedListener(): void;
  registerRenderingModeChangedListener(): void;
  registerRecordingStatusChangedListener(): void;
  removeUserUrlChangedListener(): void;
  removeSessionUrlChangedListener(): void;
  removeRenderingModeChangedListener(): void;
  removeRecordingStatusChangedListener(): void;
  setRecordingMask(
    recordingMaskList: Array<{
      maskType: Int32;
      maskRect: { left: number; top: number; width: number; height: number };
    }>
  ): void;
  enableDefaultClassSensitivity(): void;
  disableDefaultClassSensitivity(): void;
  changePlatformClassSensitivity(
    classNameValueTuples: Array<[Int32, boolean]>
  ): void;
  // ANDROID ONLY
  eventTrackingNavigationEnableAll(): void;
  eventTrackingNavigationDisableAll(): void;
  setEventTrackingNavigationActivityStatus(isEnabled: boolean): void;
  setEventTrackingNavigationFragmentStatus(isEnabled: boolean): void;
  eventTrackingInteractionEnableAll(): void;
  eventTrackingInteractionDisableAll(): void;
  enableLogs(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SmartlookAnalytics');
