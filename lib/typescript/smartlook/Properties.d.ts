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
declare class Properties {
    private map;
    putString(key: string, value: string): this;
    getString(key: string): string | undefined;
    remove(key: string): boolean;
    clear(): void;
    toString(): string;
    /**
     * @hidden
     */
    toObject(): {
        [k: string]: string;
    };
}
export default Properties;
//# sourceMappingURL=Properties.d.ts.map