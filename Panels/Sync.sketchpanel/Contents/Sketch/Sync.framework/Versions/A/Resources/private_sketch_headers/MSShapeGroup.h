//
//  MSShapeGroup.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-19.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MSLayerGroup.h"

@interface MSShapeGroup : MSLayerGroup
@property(retain, nonatomic) NSBezierPath *bezierPath;
@property(nonatomic) double length;
@property(nonatomic) double y2;
@property(nonatomic) double x2;
@property(nonatomic) double y1;
@property(nonatomic) double x1;
@end
