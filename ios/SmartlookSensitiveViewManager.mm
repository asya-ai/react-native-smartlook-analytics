//
//  SmartlookSensitiveViewManager.m
//  react-native-smartlook-analytics
//
//  Created by Martin Budínský on 18.11.2022.
//

#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"
#import <SmartlookObjcProxy/SmartlookObjcProxy-Swift.h>

@interface SmartlookSensitiveViewManager : RCTViewManager
@end

@implementation SmartlookSensitiveViewManager

RCT_EXPORT_MODULE(SmartlookSensitiveView)

- (UIView *)view
{
    return [[UIView alloc] init];
}


RCT_EXPORT_METHOD(changeIsViewSensitive:(nonnull NSNumber *)reactTag isSensitive:(BOOL) isSensitive) {
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
        UIView *view = viewRegistry[reactTag];
        view.slSensitive = isSensitive;
    }];
}

RCT_CUSTOM_VIEW_PROPERTY(isSensitive, BOOL, UIView)
{
    BOOL sensitive = [json boolValue];
    [SmartlookObjc setViewInstanceSensitivityWithView:view isSensitive:sensitive];
}

@end
