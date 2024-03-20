import type Properties from './Properties';
/**
 * The Analytics class provides an access to event, navigation and property tracking methods.
 */
declare class Analytics {
    /**
     * Logs a new event in the application.
     * @param name - Application event name
     * @params props - optional event properties, @see Properties
     */
    trackEvent(name: string, props?: Properties): Promise<void>;
    trackSelector(selectorName: string, props?: Properties): Promise<void>;
    /**
     * Logs a new navigation sreen-entering event in the application.
     * @param name - Navigation event name
     * @params props - optional event properties, @see Properties
     */
    trackNavigationEnter(name: string, props?: Properties): Promise<void>;
    /**
     * Logs a new navigation sreen-exiting event in the application.
     * @param name - Navigation event name
     * @params props - optional event properties, @see Properties
     */
    trackNavigationExit(name: string, props?: Properties): Promise<void>;
    setReferrer(referrer: string, source: string): Promise<void>;
    /**
     * Sets a user-passed event property.
     */
    putStringEventProperty(propertyName: string, value: string): Promise<void>;
    /**
     * Retrieves a user-passed event property.
     */
    getStringEventProperty(propertyName: string): Promise<string>;
    /**
     * Removes a user-passed event property.
     */
    removeEventProperty(propertyName: string): Promise<void>;
    /**
     * Clears all user-passed event properties.
     */
    clearEventProperties(): Promise<void>;
}
export default Analytics;
//# sourceMappingURL=Analytics.d.ts.map