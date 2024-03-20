"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SmartlookModule = _interopRequireDefault(require("./SmartlookModule"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The User class provides access to a representation of the mobile app user and his associated session.
 */
class User {
  /**
   * Sets new identification for the recorded user.
   */
  async setIdentifier(identifier) {
    await _SmartlookModule.default.setUserIdentifier(identifier);
  }

  /**
   * Sets user’s full name.
   */
  async setName(name) {
    await _SmartlookModule.default.setUserName(name);
  }

  /**
   * Sets user’s email address.
   */
  async setEmail(email) {
    await _SmartlookModule.default.setUserEmail(email);
  }

  /**
   * Initializes a new user for recording.
   */
  async openNewUser() {
    await _SmartlookModule.default.openNewUser();
  }

  /**
   * Opens a new recording session.
   */
  async openNewSession() {
    await _SmartlookModule.default.openNewSession();
  }

  /**
   * Retrieves the unique URL of this recorded user.
   */
  async getUserUrl() {
    return await _SmartlookModule.default.getUserUrl();
  }

  /**
   * Retrieves the unique URL of this recording session.
   */
  async getSessionUrl() {
    return await _SmartlookModule.default.getSessionUrl();
  }

  /**
   * Retrieves the unique session URL with the exact location on the timeline.
   */
  async getSessionUrlWithTimestamp() {
    return await _SmartlookModule.default.getSessionUrlWithTimestamp();
  }

  /**
   * Sets or adds a new value to the user properties.
   */
  async setUserProperty(propertyName, value) {
    await _SmartlookModule.default.setUserProperty(propertyName, value);
  }

  /**
   * Retrieves a user property value with a given key.
   * @returns a Promise resolving to a string
   */
  async getUserProperty(propertyName) {
    return await _SmartlookModule.default.getUserProperty(propertyName);
  }

  /**
   * Removes a user property given a key.
   */
  async removeUserProperty(propertyName) {
    await _SmartlookModule.default.removeUserProperty(propertyName);
  }
}
var _default = User;
exports.default = _default;
//# sourceMappingURL=User.js.map