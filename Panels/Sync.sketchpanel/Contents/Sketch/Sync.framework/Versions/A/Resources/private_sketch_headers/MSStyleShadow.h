//
//  MSStyleShadow.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-19.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSStylePart.h"
#import "MSColor.h"

@interface MSStyleShadow : MSStylePart
@property(retain, nonatomic) MSColor *color;
@property(nonatomic) double spread;
@property(nonatomic) double offsetY;
@property(nonatomic) double offsetX;
@property(nonatomic) double blurRadius;
@end
