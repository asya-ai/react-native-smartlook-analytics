//
//  BridgeInterface.m
//  react-native-smartlook-analytics
//
//  Created by Martin Budínský on 12.11.2022.
//

#import <Foundation/Foundation.h>
#import <SmartlookAnalytics/SmartlookAnalytics-Swift.h>

#import "SmartlookAnalytics+BridgeInterface.h"

@implementation SLReactNativeBridge
- (id)init {
    self = [super init];
    return self;
}

- (id)initWithFrameworkInfo:(SLFrameworkInfo *)frameworkInfo {
    self = [super init];
    self.frameworkInfo = frameworkInfo;
    return self;
}

- (void) obtainFrameworkInfoWithCompletion:(void (^)(SLFrameworkInfo * _Nullable))completion {
    completion(nil);
}

- (void)obtainWireframeDataWithIdentifier:(id _Nullable)identifier completion:(void (^ _Nonnull)(SLBridgeWireframe * _Nullable))completion {
    completion(nil);
}

- (void)obtainWireframeRootClassesWithCompletion:(void (^ _Nonnull)(NSArray<NSString *> * _Nonnull))completion {
    completion(@[]);
}

@synthesize frameworkInfo;

@synthesize recordingAllowed;

@end
