"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * The Properties class represents user-passed properties.
 * An entered property will not be added to properties if its definition does not meet the following criteria:
 *
 *  Property name (key)
 *    - Length must be between one and 200 characters.
 *    - It can only contain alphanumeric characters and some special characters.
 *    - Must start with an alphabetic character.
 *
 *  Value
 *    - Its size is under 5 kilobytes.
 *
 * In addition to alphanumeric characters, the following characters are also allowed as part of the property name:
 *
 * **LOW LINE**, **SPACE**, **FULL STOP**, **HYPHEN-MINUS**
 *
 * The above property name validation rules can be expressed using the following regular expression:
 * `^[a-zA-Z][a-zA-Z0-9_ ,\\.-]{0,199}$`
 */
class Properties {
  map = new Map();
  putString(key, value) {
    this.map.set(key, value);
    return this;
  }
  getString(key) {
    return this.map.get(key);
  }
  remove(key) {
    return this.map.delete(key);
  }
  clear() {
    return this.map.clear();
  }
  toString() {
    return JSON.stringify(Object.fromEntries(this.map), null, '\t');
  }

  /**
   * @hidden
   */
  toObject() {
    return Object.fromEntries(this.map);
  }
}
var _default = Properties;
exports.default = _default;
//# sourceMappingURL=Properties.js.map