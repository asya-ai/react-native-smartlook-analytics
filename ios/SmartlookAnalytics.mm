#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

#import "SmartlookAnalytics.h"
#import "SmartlookAnalytics+EventEmitter.h"
#import "SmartlookAnalytics+BridgeInterface.h"

#import <SmartlookObjcProxy/SmartlookObjcProxy-Swift.h>
#import <SmartlookAnalytics/SmartlookAnalytics-Swift.h>


@implementation SmartlookAnalytics
RCT_EXPORT_MODULE()

#ifdef DEBUG
#   define DLog(fmt, ...) NSLog((@"👀[Smartlook]: [Line %d] " fmt), __LINE__, ##__VA_ARGS__);
#else
#   define DLog(...)
#endif

RCT_EXPORT_METHOD(start) {
    [SmartlookObjc start];
}

RCT_EXPORT_METHOD(stop) {
    [SmartlookObjc stop];
}

RCT_EXPORT_METHOD(reset) {
    [SmartlookObjc reset];
}

/// MARK: ANALYTICS

RCT_EXPORT_METHOD(trackEvent:(NSString *)eventName props:(NSDictionary *)props) {
    [SmartlookObjc trackEventWithName:eventName propertiesMap:props];
}

RCT_EXPORT_METHOD(trackSelector:(NSString *)selectorName props:(NSDictionary *)props) {
    [SmartlookObjc trackSelectorWithName:selectorName propertiesMap:props];
}

RCT_EXPORT_METHOD(trackNavigationEnter:(NSString *)eventName props:(NSDictionary *)props) {
    [SmartlookObjc trackNavigationEnterWithName:eventName propertiesMap:props];
}

RCT_EXPORT_METHOD(trackNavigationExit:(NSString *)eventName props:(NSDictionary *)props) {
    [SmartlookObjc trackNavigationExitWithName:eventName propertiesMap:props];
}


RCT_EXPORT_METHOD(putStringEventProperty:(NSString *)propertyName value:(NSString *)value) {
    [SmartlookObjc setEventPropertyWithName:propertyName value:value];
}

RCT_EXPORT_METHOD(getStringEventProperty:(NSString *)propertyName resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSString *property = [SmartlookObjc getEventPropertyWithName:propertyName];
    resolve(property);
}

RCT_EXPORT_METHOD(removeEventProperty:(NSString *)propertyName) {
    [SmartlookObjc removeEventPropertyWithName:propertyName];
}

RCT_EXPORT_METHOD(clearEventProperties) {
    [SmartlookObjc clearAllEventProperties];
}

/// MARK: USER


RCT_EXPORT_METHOD(setUserEmail:(NSString *)email) {
    [SmartlookObjc setUserEmail:email];
}

RCT_EXPORT_METHOD(setUserIdentifier:(NSString *)identifier) {
    [SmartlookObjc setUserIdentifier:identifier];
}

RCT_EXPORT_METHOD(setUserName:(NSString *)name) {
    [SmartlookObjc setUserName:name];
}

RCT_EXPORT_METHOD(setUserProperty:(NSString *)propertyName value:(NSString *)value) {
    [SmartlookObjc setUserPropertyWithName:propertyName value:value];
}

RCT_EXPORT_METHOD(getUserProperty:(NSString *)propertyName resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSString *property = [SmartlookObjc getUserPropertyWithName:propertyName];
    resolve(property);
}

RCT_EXPORT_METHOD(removeUserProperty:(NSString *)propertyName) {
    [SmartlookObjc removeUserPropertyWithName:propertyName];
}

RCT_EXPORT_METHOD(getUserUrl:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSString *userUrl = [SmartlookObjc userUrl];
    resolve(userUrl);
}

RCT_EXPORT_METHOD(openNewSession) {
    [SmartlookObjc openNewSession];
}

RCT_EXPORT_METHOD(openNewUser) {
    [SmartlookObjc openNewUser];
}

RCT_EXPORT_METHOD(getSessionUrl:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSString *sessionUrl = [SmartlookObjc sessionUrl];
    resolve(sessionUrl);
}

RCT_EXPORT_METHOD(getSessionUrlWithTimestamp:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSString *sessionUrlWithTimestamp = [SmartlookObjc sessionUrlWithTimeStamp];
    resolve(sessionUrlWithTimestamp);
}


/// MARK: PREFERENCES


RCT_EXPORT_METHOD(setFrameRate:(double)frameRate) {
    [SmartlookObjc setPreferredFrameRate:frameRate];
}

RCT_EXPORT_METHOD(setJobUploadEnabled:(BOOL)isEnabled) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(setProjectKey:(NSString *)key) {
    [SmartlookObjc setProjectKey:key];
}

RCT_EXPORT_METHOD(setReferrer:(NSString *)referrer source:(NSString *)source) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(setRelayProxyHost:(NSString *)relaxyProxyHost) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(setAdaptiveFrameRateEnabled:(BOOL)isEnabled) {
    [SmartlookObjc setPreferredUseAdaptiveFrameRate:isEnabled];
}

RCT_EXPORT_METHOD(getAdaptiveFrameRateEnabled:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@([SmartlookObjc preferredUseAdaptiveFrameRate]));
}

RCT_EXPORT_METHOD(getPreferencesFrameRate:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@([SmartlookObjc preferredFrameRate]));
}

RCT_EXPORT_METHOD(setWebViewSensitivity:(BOOL)isSensitive) {
    [SmartlookObjc setViewClassSensitivityWithViewClass:[WKWebView class] isSensitive:isSensitive];
}

/// MARK: EVENT TRACKING

 
RCT_EXPORT_METHOD(eventTrackingDisableAll) {
    SmartlookObjc.preferredEventTracking = SLEventTracking.noTracking;
}

RCT_EXPORT_METHOD(eventTrackingEnableAll) {
    SmartlookObjc.preferredEventTracking = SLEventTracking.default_;
}

RCT_EXPORT_METHOD(eventTrackingInteractionDisableAll) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(eventTrackingInteractionEnableAll) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(eventTrackingNavigationDisableAll) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(eventTrackingNavigationEnableAll) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(setEventTrackingInteractionRageClickStatus:(BOOL)isEnabled) {
    [SmartlookObjc.preferredEventTracking setTrackRageClicks:isEnabled];
}

RCT_EXPORT_METHOD(setEventTrackingInteractionUserStatus:(BOOL)isEnabled) {
    [SmartlookObjc.preferredEventTracking setTrackUserInteraction:isEnabled];
}

RCT_EXPORT_METHOD(setEventTrackingNavigationActivityStatus:(BOOL)isEnabled) {
    [SmartlookObjc.preferredEventTracking setTrackNavigation:isEnabled];
}

RCT_EXPORT_METHOD(setEventTrackingNavigationFragmentStatus:(BOOL)isEnabled) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(restoreDefault) {
    SmartlookObjc.preferredEventTracking = SLEventTracking.default_;
}


/// MARK: STATE


RCT_EXPORT_METHOD(isRecording:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@([SmartlookObjc isRecording]));
}
RCT_EXPORT_METHOD(enableLogs) {
    NSLog(@"%@", @"[Smartlook]: This method is not implemented in the Smartlook iOS bridge.");
}

RCT_EXPORT_METHOD(getProjectKey:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSString *currentProjectKey = [SmartlookObjc projectKey];
    resolve(currentProjectKey);
}

RCT_EXPORT_METHOD(getRecordingStatus:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@([SmartlookObjc stateStatus]));
}

RCT_EXPORT_METHOD(setRenderingMode:(double)renderingMode) {
    SLRenderingMode slRenderingMode;
    
    switch ((int)renderingMode) {
        case -1:
            slRenderingMode = SLRenderingModeNative;
        case 0:
            slRenderingMode = SLRenderingModeNoRendering;
            break;
        case 1:
            slRenderingMode = SLRenderingModeNative;
            break;
        case 2:
            slRenderingMode = SLRenderingModeWireframe;
            break;
            
        default:
            slRenderingMode = SLRenderingModeNative;
            break;
    }
    
    [SmartlookObjc setPreferredRenderingMode:slRenderingMode];
}

RCT_EXPORT_METHOD(getRenderingMode:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    SLRenderingMode renderingMode = [SmartlookObjc stateRenderingMode];
    int convertedRenderingMode = -1;
    
    switch (renderingMode) {
        case SLRenderingModeNative:
            convertedRenderingMode = 1;
            break;
        case SLRenderingModeNoRendering:
            convertedRenderingMode = 0;
            break;
        case SLRenderingModeWireframe:
            convertedRenderingMode = 2;
            break;
            
        default:
            break;
    }
    
    resolve(@(convertedRenderingMode));
}

RCT_EXPORT_METHOD(getStateFrameRate:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@([SmartlookObjc stateFrameRate]));
}


/// MARK: BRIDGE INTERFACE


RCT_EXPORT_METHOD(setupAndRegisterBridgeInterface:(NSString *)frameworkVersion pluginVersion:(NSString *)pluginVersion) {
    SLFrameworkInfo *frameworkInfo = [[SLFrameworkInfo alloc] init];
    
    frameworkInfo.framework = @"REACT_NATIVE";
    frameworkInfo.frameworkVersion = frameworkVersion;
    frameworkInfo.frameworkPluginVersion = pluginVersion;
    
    SLReactNativeBridge *bridgeInterface = [[SLReactNativeBridge alloc] init];
    bridgeInterface.frameworkInfo = frameworkInfo;
   
    [SmartlookObjc registerBridgeInterface:bridgeInterface];
}


/// MARK: EVENT LISTENERS


RCT_EXPORT_METHOD(registerUserUrlChangedListener) {
    [SmartlookObjc registerNewUserObserverWithCallback:^(NSString * _Nullable userUrl) {
        NSString *urlOrEmptyMessage = userUrl ? [NSString stringWithString:userUrl] : @"[Smartlook] Empty user url";
        
        NSDictionary *body = @{@"userUrl" : urlOrEmptyMessage};
        
        [SLEventEmitter.shared sendEventWithName:@"onUserUrlChanged" body:body];
    }];
}

RCT_EXPORT_METHOD(removeUserUrlChangedListener) {
    [SmartlookObjc unregisterNewUserObserver];
}

RCT_EXPORT_METHOD(registerSessionUrlChangedListener) {
    [SmartlookObjc registerNewSessionObserverWithCallback:^(NSString * _Nullable sessionUrl) {
        NSString *urlOrEmptyMessage = sessionUrl ? [NSString stringWithString:sessionUrl] : @"[Smartlook] Empty session url";
        
        NSDictionary *body = @{@"sessionUrl" : urlOrEmptyMessage};
        
        [SLEventEmitter.shared sendEventWithName:@"onSessionUrlChanged" body:body];
    }];
}

RCT_EXPORT_METHOD(removeSessionUrlChangedListener) {
    [SmartlookObjc unregisterNewSessionObserver];
}

RCT_EXPORT_METHOD(registerRenderingModeChangedListener) {
    [SmartlookObjc registerRenderingModeChangeObserverWithCallback:^(enum SLRenderingMode renderingMode) {
        NSDictionary *body = @{@"renderingMode" : [NSNumber numberWithInt:renderingMode]};
        [SLEventEmitter.shared sendEventWithName:@"onRenderingModeChanged" body:body];
    }];
}

RCT_EXPORT_METHOD(removeRenderingModeChangedListener) {
    [SmartlookObjc unregisterRenderingModeChangeObserver];
}

RCT_EXPORT_METHOD(registerRecordingStatusChangedListener) {
    [SmartlookObjc registerStatusChangeObserverWithCallback:^(enum SLStatus recordingStatus) {
        NSDictionary *body = @{@"recordingStatus" : [NSNumber numberWithInt:recordingStatus]};
        [SLEventEmitter.shared sendEventWithName:@"onRecordingStatusChanged" body:body];
    }];
}

RCT_EXPORT_METHOD(removeRecordingStatusChangedListener) {
    [SmartlookObjc unregisterStatusChangeObserver];
}


/// MARK: RECORDING MASK


RCT_EXPORT_METHOD(setRecordingMask:(NSArray *)recordingMaskList) {
    if (recordingMaskList.count == 0) return;
    
    [SmartlookObjc setRecordingMask:[self getRecordingMaskFromObjectArray:recordingMaskList]];
}

RCT_EXPORT_METHOD(changePlatformClassSensitivity:(NSArray *)classNameValueTuples) {
    if (classNameValueTuples == nil) return;
    
    for (id object in classNameValueTuples) {
        NSArray *classNameValueTuple = [[NSArray alloc] initWithArray:(NSArray *)object];
        int className = [(NSNumber *)[classNameValueTuple objectAtIndex:0] intValue];
        BOOL classSensitivity = [[classNameValueTuple objectAtIndex:1] boolValue];
        
        switch (className) {
            case 2:
                [SmartlookObjc setViewClassSensitivityWithViewClass:[UITextView class] isSensitive:classSensitivity];
                break;
            case 3:
                [SmartlookObjc setViewClassSensitivityWithViewClass:[UITextField class] isSensitive:classSensitivity];
                break;
            case 4:
                [SmartlookObjc setViewClassSensitivityWithViewClass:[WKWebView class] isSensitive:classSensitivity];
                break;
                
            default:
                break;
        }
    }
    
}


RCT_EXPORT_METHOD(disableDefaultClassSensitivity) {
    [SmartlookObjc setViewClassSensitivityWithViewClass:[UITextView class] isSensitive:false];
    [SmartlookObjc setViewClassSensitivityWithViewClass:[UITextField class] isSensitive:false];
    [SmartlookObjc setViewClassSensitivityWithViewClass:[WKWebView class] isSensitive:false];
}


RCT_EXPORT_METHOD(enableDefaultClassSensitivity) {
    [SmartlookObjc setViewClassSensitivityWithViewClass:[UITextView class] isSensitive:true];
    [SmartlookObjc setViewClassSensitivityWithViewClass:[UITextField class] isSensitive:true];
    [SmartlookObjc setViewClassSensitivityWithViewClass:[WKWebView class] isSensitive:true];
}


- (SLRecordingMask *)getRecordingMaskFromObjectArray:(NSArray *)recordingMaskList {
    NSMutableArray<SLMaskElement *> *masks = [[NSMutableArray alloc] init];
    
    for (id object in recordingMaskList) {
        NSDictionary *maskContainer = [[NSDictionary alloc] initWithDictionary:(NSDictionary *)object];
        
        [masks addObject:[self getRecordingMaskElementFromObject:maskContainer]];
    }
    SLRecordingMask *mask = [[SLRecordingMask alloc] initWithElements:masks];
    
    return mask;
}

- (SLMaskType)getRecordingMaskTypeFromObject:(NSDictionary *)maskElementContainer {
    NSNumber *isCovering = [NSNumber numberWithInteger:[[maskElementContainer objectForKey:@"maskType"] integerValue]];
    SLMaskType maskType = isCovering.integerValue == 0 ? SLMaskTypeCovering : SLMaskTypeErasing;
    
    return maskType;
}

- (SLMaskElement *)getRecordingMaskElementFromObject:(NSDictionary *)maskElementContainer {
    NSDictionary *elementContainer = [[NSDictionary alloc] initWithDictionary:[maskElementContainer objectForKey:@"rect"]];
//    NSNumber *left = [NSNumber numberWithDouble:[[elementContainer objectForKey:@"left"] doubleValue]];
//    NSNumber *top = [NSNumber numberWithDouble:[[elementContainer objectForKey:@"top"] doubleValue]];
//    NSNumber *width = [NSNumber numberWithDouble:[[elementContainer objectForKey:@"width"] doubleValue]];
//    NSNumber *height = [NSNumber numberWithDouble:[[elementContainer objectForKey:@"height"] doubleValue]];
//    CGPoint elementOrigin = { left.doubleValue, top.doubleValue };
//    CGSize elementSize = { width.doubleValue, height.doubleValue };
    
    CGSize elementSize = { [[elementContainer objectForKey:@"width"] doubleValue], [[elementContainer objectForKey:@"height"] doubleValue] };
    CGPoint elementOrigin = { [[elementContainer objectForKey:@"left"] doubleValue], [[elementContainer objectForKey:@"top"] doubleValue] };
    
    CGRect elementRect = { elementOrigin, elementSize };
    
    SLMaskElement *maskElement = [[SLMaskElement alloc] initWithRect:elementRect type:[self getRecordingMaskTypeFromObject:maskElementContainer]];
    
    return maskElement;
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeSmartlookAnalyticsSpecJSI>(params);
}
#endif

@end
