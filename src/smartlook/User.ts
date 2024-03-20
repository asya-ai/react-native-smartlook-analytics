import SmartlookModule from './SmartlookModule';

/**
 * The User class provides access to a representation of the mobile app user and his associated session.
 */
class User {
  /**
   * Sets new identification for the recorded user.
   */
  public async setIdentifier(identifier: string): Promise<void> {
    await SmartlookModule.setUserIdentifier(identifier);
  }

  /**
   * Sets user’s full name.
   */
  public async setName(name: string): Promise<void> {
    await SmartlookModule.setUserName(name);
  }

  /**
   * Sets user’s email address.
   */
  public async setEmail(email: string): Promise<void> {
    await SmartlookModule.setUserEmail(email);
  }

  /**
   * Initializes a new user for recording.
   */
  public async openNewUser(): Promise<void> {
    await SmartlookModule.openNewUser();
  }

  /**
   * Opens a new recording session.
   */
  public async openNewSession(): Promise<void> {
    await SmartlookModule.openNewSession();
  }

  /**
   * Retrieves the unique URL of this recorded user.
   */
  public async getUserUrl(): Promise<string> {
    return await SmartlookModule.getUserUrl();
  }

  /**
   * Retrieves the unique URL of this recording session.
   */
  public async getSessionUrl(): Promise<string> {
    return await SmartlookModule.getSessionUrl();
  }

  /**
   * Retrieves the unique session URL with the exact location on the timeline.
   */
  public async getSessionUrlWithTimestamp(): Promise<string> {
    return await SmartlookModule.getSessionUrlWithTimestamp();
  }

  /**
   * Sets or adds a new value to the user properties.
   */
  public async setUserProperty(
    propertyName: string,
    value: string
  ): Promise<void> {
    await SmartlookModule.setUserProperty(propertyName, value);
  }

  /**
   * Retrieves a user property value with a given key.
   * @returns a Promise resolving to a string
   */
  public async getUserProperty(propertyName: string): Promise<string> {
    return await SmartlookModule.getUserProperty(propertyName);
  }

  /**
   * Removes a user property given a key.
   */
  public async removeUserProperty(propertyName: string): Promise<void> {
    await SmartlookModule.removeUserProperty(propertyName);
  }
}

export default User;
