//
//  MSLayerGroup.h
//  Sync
//
//  Created by David Bainbridge on 10/5/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "MSStyledLayer.h"

@interface MSLayerGroup : MSStyledLayer
@property(readonly, nonatomic) NSArray *layers;
@end
