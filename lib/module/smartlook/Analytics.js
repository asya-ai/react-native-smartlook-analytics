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
  async trackEvent(name, props) {
    await SmartlookModule.trackEvent(name, props === null || props === void 0 ? void 0 : props.toObject());
  }
  async trackSelector(selectorName, props) {
    await SmartlookModule.trackSelector(selectorName, props === null || props === void 0 ? void 0 : props.toObject());
  }

  /**
   * Logs a new navigation sreen-entering event in the application.
   * @param name - Navigation event name
   * @params props - optional event properties, @see Properties
   */
  async trackNavigationEnter(name, props) {
    await SmartlookModule.trackNavigationEnter(name, props === null || props === void 0 ? void 0 : props.toObject());
  }

  /**
   * Logs a new navigation sreen-exiting event in the application.
   * @param name - Navigation event name
   * @params props - optional event properties, @see Properties
   */
  async trackNavigationExit(name, props) {
    await SmartlookModule.trackNavigationExit(name, props === null || props === void 0 ? void 0 : props.toObject());
  }
  async setReferrer(referrer, source) {
    await SmartlookModule.setReferrer(referrer, source);
  }

  /**
   * Sets a user-passed event property.
   */
  async putStringEventProperty(propertyName, value) {
    await SmartlookModule.putStringEventProperty(propertyName, value);
  }

  /**
   * Retrieves a user-passed event property.
   */
  async getStringEventProperty(propertyName) {
    return await SmartlookModule.getStringEventProperty(propertyName);
  }

  /**
   * Removes a user-passed event property.
   */
  async removeEventProperty(propertyName) {
    await SmartlookModule.removeEventProperty(propertyName);
  }

  /**
   * Clears all user-passed event properties.
   */
  async clearEventProperties() {
    await SmartlookModule.clearEventProperties();
  }
}
export default Analytics;
//# sourceMappingURL=Analytics.js.map