//
//  MSShapePathLayer.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-20.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSLayer.h"
#import "MSShapePath.h"

@interface MSShapePathLayer : MSLayer
@property(retain, nonatomic) MSShapePath *path;
@end
