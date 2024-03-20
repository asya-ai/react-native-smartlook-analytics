//
//  SmartlookAnalytics+EventEmitter.m
//  react-native-smartlook-analytics
//
//  Created by Martin Budínský on 14.11.2022.
//

#import <Foundation/Foundation.h>
#import "SmartlookAnalytics+EventEmitter.h"

// TODO: fix this to also support recording status and type events
static NSString *onUserUrlChanged = @"onUserUrlChanged";
static NSString *onSessionUrlChanged = @"onSessionUrlChanged";
static NSString *onRecordingStatusChanged = @"onRecordingStatusChanged";
static NSString *onRenderingModeChanged = @"onRenderingModeChanged";

static SLEventEmitter* eventEmitter = nil;

@implementation SLEventEmitter

/// Exposing "SmartlookEventEmitter" name to RN
RCT_EXPORT_MODULE(SmartlookEventEmitter);

- (instancetype)init {
  if (self = [super init]) {
    eventEmitter = self;
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

+ (instancetype)shared {
  return eventEmitter;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[onUserUrlChanged, onSessionUrlChanged, onRecordingStatusChanged, onRenderingModeChanged];
}

@end
