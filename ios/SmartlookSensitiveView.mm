//
//  SmartlookSensitiveView.m
//  react-native-smartlook-analytics
//
//  Created by Martin Budínský on 18.11.2022.
//

#ifdef RCT_NEW_ARCH_ENABLED
#import "SmartlookSensitiveView.h"

#import <react/renderer/components/RNSmartlookSensitiveViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNSmartlookSensitiveViewSpec/EventEmitters.h>
#import <react/renderer/components/RNSmartlookSensitiveViewSpec/Props.h>
#import <react/renderer/components/RNSmartlookSensitiveViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

#import <SmartlookObjcProxy/SmartlookObjcProxy-Swift.h>

using namespace facebook::react;

@interface SmartlookSensitiveView () <RCTSmartlookSensitiveViewViewProtocol>

@end

@implementation SmartlookSensitiveView {
    UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<SmartlookSensitiveViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const SmartlookSensitiveViewProps>();
    _props = defaultProps;

    _view = [[UIView alloc] init];
    _view.slSensitive = defaultProps->isSensitive;
      
    self.contentView = _view;
  }

  return self;
}

- (void)updateState:(const facebook::react::State::Shared &)state oldState:(const facebook::react::State::Shared &)oldState {
    NSLog(@"Update State");
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<SmartlookSensitiveViewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<SmartlookSensitiveViewProps const>(props);

    if (oldViewProps.isSensitive != newViewProps.isSensitive) {
        
        _view.slSensitive = newViewProps.isSensitive;
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> SmartlookSensitiveViewCls(void)
{
    return SmartlookSensitiveView.class;
}

- (void)changeIsViewSensitive:(BOOL)isSensitive {
    _view.slSensitive = isSensitive;
}

- (void)handleCommand:(const NSString *)commandName args:(const NSArray *)args
{
    RCTSmartlookSensitiveViewHandleCommand(self, commandName, args);
}

@end
#endif
