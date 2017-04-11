//
//  MSStyle.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSModelObject.h"
#import "MSStyleBorderOptions.h"
#import "MSGraphicsContextSettings.h"

@interface MSStyle : MSModelObject
@property(readonly, nonatomic) NSArray *fills;
@property(readonly, nonatomic) NSArray *innerShadows;
@property(readonly, nonatomic) NSArray *shadows;
@property(readonly, nonatomic) NSArray *borders;
@property(retain, nonatomic) MSStyleBorderOptions *borderOptions;
@property(retain, nonatomic) MSGraphicsContextSettings *contextSettings;
@end
