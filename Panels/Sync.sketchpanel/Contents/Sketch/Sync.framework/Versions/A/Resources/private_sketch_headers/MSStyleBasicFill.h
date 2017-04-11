//
//  MSStyleBasicFill.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//
#import "MSStylePart.h"
#import "MSColor.h"
#import "MSGradient.h"

@interface MSStyleBasicFill : MSStylePart
@property(retain, nonatomic) MSGradient *gradient;
@property(nonatomic) unsigned long long fillType;
@property(retain, nonatomic) MSColor *color;
@end
