//
//  MSGradientStop.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-19.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSColor.h"
#import "MSModelObject.h"

@interface MSGradientStop : MSModelObject
@property(readonly, nonatomic) double position;
@property(retain, nonatomic) MSColor *color;
@end
