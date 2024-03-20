/**
 * The User class provides access to a representation of the mobile app user and his associated session.
 */
declare class User {
    /**
     * Sets new identification for the recorded user.
     */
    setIdentifier(identifier: string): Promise<void>;
    /**
     * Sets user’s full name.
     */
    setName(name: string): Promise<void>;
    /**
     * Sets user’s email address.
     */
    setEmail(email: string): Promise<void>;
    /**
     * Initializes a new user for recording.
     */
    openNewUser(): Promise<void>;
    /**
     * Opens a new recording session.
     */
    openNewSession(): Promise<void>;
    /**
     * Retrieves the unique URL of this recorded user.
     */
    getUserUrl(): Promise<string>;
    /**
     * Retrieves the unique URL of this recording session.
     */
    getSessionUrl(): Promise<string>;
    /**
     * Retrieves the unique session URL with the exact location on the timeline.
     */
    getSessionUrlWithTimestamp(): Promise<string>;
    /**
     * Sets or adds a new value to the user properties.
     */
    setUserProperty(propertyName: string, value: string): Promise<void>;
    /**
     * Retrieves a user property value with a given key.
     * @returns a Promise resolving to a string
     */
    getUserProperty(propertyName: string): Promise<string>;
    /**
     * Removes a user property given a key.
     */
    removeUserProperty(propertyName: string): Promise<void>;
}
export default User;
//# sourceMappingURL=User.d.ts.map