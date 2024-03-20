import SmartlookModule from './SmartlookModule';

/**
 * The User class provides access to a representation of the mobile app user and his associated session.
 */
class User {
  /**
   * Sets new identification for the recorded user.
   */
  async setIdentifier(identifier) {
    await SmartlookModule.setUserIdentifier(identifier);
  }

  /**
   * Sets user’s full name.
   */
  async setName(name) {
    await SmartlookModule.setUserName(name);
  }

  /**
   * Sets user’s email address.
   */
  async setEmail(email) {
    await SmartlookModule.setUserEmail(email);
  }

  /**
   * Initializes a new user for recording.
   */
  async openNewUser() {
    await SmartlookModule.openNewUser();
  }

  /**
   * Opens a new recording session.
   */
  async openNewSession() {
    await SmartlookModule.openNewSession();
  }

  /**
   * Retrieves the unique URL of this recorded user.
   */
  async getUserUrl() {
    return await SmartlookModule.getUserUrl();
  }

  /**
   * Retrieves the unique URL of this recording session.
   */
  async getSessionUrl() {
    return await SmartlookModule.getSessionUrl();
  }

  /**
   * Retrieves the unique session URL with the exact location on the timeline.
   */
  async getSessionUrlWithTimestamp() {
    return await SmartlookModule.getSessionUrlWithTimestamp();
  }

  /**
   * Sets or adds a new value to the user properties.
   */
  async setUserProperty(propertyName, value) {
    await SmartlookModule.setUserProperty(propertyName, value);
  }

  /**
   * Retrieves a user property value with a given key.
   * @returns a Promise resolving to a string
   */
  async getUserProperty(propertyName) {
    return await SmartlookModule.getUserProperty(propertyName);
  }

  /**
   * Removes a user property given a key.
   */
  async removeUserProperty(propertyName) {
    await SmartlookModule.removeUserProperty(propertyName);
  }
}
export default User;
//# sourceMappingURL=User.js.map