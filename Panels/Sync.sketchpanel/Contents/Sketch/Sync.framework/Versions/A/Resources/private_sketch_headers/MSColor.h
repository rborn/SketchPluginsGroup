//
//  MSColor.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-19.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

@interface MSColor
@property(readonly, nonatomic) double brightness;
@property(readonly, nonatomic) double saturation;
@property(readonly, nonatomic) double hue;
@property(readonly, nonatomic) double alpha;
@property(readonly, nonatomic) double blue;
@property(readonly, nonatomic) double green;
@property(readonly, nonatomic) double red;
- (NSColor *)NSColorWithColorSpace:(id)arg1;
@end
