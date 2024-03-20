#import <Foundation/Foundation.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSmartlookAnalyticsSpec.h"

@interface SmartlookAnalytics : NSObject <NativeSmartlookAnalyticsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SmartlookAnalytics : NSObject <RCTBridgeModule>
#endif

@end
