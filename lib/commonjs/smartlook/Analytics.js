"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _SmartlookModule = _interopRequireDefault(require("./SmartlookModule"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    await _SmartlookModule.default.trackEvent(name, props === null || props === void 0 ? void 0 : props.toObject());
  }
  async trackSelector(selectorName, props) {
    await _SmartlookModule.default.trackSelector(selectorName, props === null || props === void 0 ? void 0 : props.toObject());
  }

  /**
   * Logs a new navigation sreen-entering event in the application.
   * @param name - Navigation event name
   * @params props - optional event properties, @see Properties
   */
  async trackNavigationEnter(name, props) {
    await _SmartlookModule.default.trackNavigationEnter(name, props === null || props === void 0 ? void 0 : props.toObject());
  }

  /**
   * Logs a new navigation sreen-exiting event in the application.
   * @param name - Navigation event name
   * @params props - optional event properties, @see Properties
   */
  async trackNavigationExit(name, props) {
    await _SmartlookModule.default.trackNavigationExit(name, props === null || props === void 0 ? void 0 : props.toObject());
  }
  async setReferrer(referrer, source) {
    await _SmartlookModule.default.setReferrer(referrer, source);
  }

  /**
   * Sets a user-passed event property.
   */
  async putStringEventProperty(propertyName, value) {
    await _SmartlookModule.default.putStringEventProperty(propertyName, value);
  }

  /**
   * Retrieves a user-passed event property.
   */
  async getStringEventProperty(propertyName) {
    return await _SmartlookModule.default.getStringEventProperty(propertyName);
  }

  /**
   * Removes a user-passed event property.
   */
  async removeEventProperty(propertyName) {
    await _SmartlookModule.default.removeEventProperty(propertyName);
  }

  /**
   * Clears all user-passed event properties.
   */
  async clearEventProperties() {
    await _SmartlookModule.default.clearEventProperties();
  }
}
var _default = Analytics;
exports.default = _default;
//# sourceMappingURL=Analytics.js.map