//
//  SLEventEmitter.h
//  react-native-smartlook-analytics
//
//  Created by Martin Budínský on 14.11.2022.
//

#import <React/RCTEventEmitter.h>

@interface SLEventEmitter : RCTEventEmitter

+ (instancetype)shared;

@end
