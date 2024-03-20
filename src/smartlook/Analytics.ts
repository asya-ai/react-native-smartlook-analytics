import type Properties from './Properties';
import SmartlookModule from './SmartlookModule';

/**
 * The Analytics class provides an access to event, navigation and property tracking methods.
 */
class Analytics {
  /**
   * Logs a new event in the application.
   * @param name - Application event name
   * @params props - optional event properties, @see Properties
   */
  public async trackEvent(name: string, props?: Properties): Promise<void> {
    await SmartlookModule.trackEvent(name, props?.toObject());
  }

  public async trackSelector(
    selectorName: string,
    props?: Properties
  ): Promise<void> {
    await SmartlookModule.trackSelector(selectorName, props?.toObject());
  }

  /**
   * Logs a new navigation sreen-entering event in the application.
   * @param name - Navigation event name
   * @params props - optional event properties, @see Properties
   */
  public async trackNavigationEnter(
    name: string,
    props?: Properties
  ): Promise<void> {
    await SmartlookModule.trackNavigationEnter(name, props?.toObject());
  }

  /**
   * Logs a new navigation sreen-exiting event in the application.
   * @param name - Navigation event name
   * @params props - optional event properties, @see Properties
   */
  public async trackNavigationExit(
    name: string,
    props?: Properties
  ): Promise<void> {
    await SmartlookModule.trackNavigationExit(name, props?.toObject());
  }

  public async setReferrer(referrer: string, source: string) {
    await SmartlookModule.setReferrer(referrer, source);
  }

  /**
   * Sets a user-passed event property.
   */
  public async putStringEventProperty(
    propertyName: string,
    value: string
  ): Promise<void> {
    await SmartlookModule.putStringEventProperty(propertyName, value);
  }

  /**
   * Retrieves a user-passed event property.
   */
  public async getStringEventProperty(propertyName: string): Promise<string> {
    return await SmartlookModule.getStringEventProperty(propertyName);
  }

  /**
   * Removes a user-passed event property.
   */
  public async removeEventProperty(propertyName: string): Promise<void> {
    await SmartlookModule.removeEventProperty(propertyName);
  }

  /**
   * Clears all user-passed event properties.
   */
  public async clearEventProperties(): Promise<void> {
    await SmartlookModule.clearEventProperties();
  }
}

export default Analytics;
