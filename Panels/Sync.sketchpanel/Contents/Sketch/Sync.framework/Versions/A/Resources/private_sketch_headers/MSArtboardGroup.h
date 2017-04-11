//
//  MSArtboardGroup.h
//  Sync
//
//  Created by David Bainbridge on 10/5/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "MSLayerGroup.h"
#import "MSColor.h"
#import "MSLayoutGrid.h"
#import "MSRulerData.h"
#import "MSSimpleGrid.h"

@interface MSArtboardGroup : MSLayerGroup
@property(retain, nonatomic) MSColor *backgroundColor;
@property(nonatomic) BOOL includeBackgroundColorInExport;
@property(nonatomic) BOOL hasBackgroundColor;
@property(retain, nonatomic) MSLayoutGrid *layout;
@property(copy, nonatomic) MSRulerData *horizontalRulerData;
@property(copy, nonatomic) MSRulerData *verticalRulerData;
@property(retain, nonatomic) MSSimpleGrid *grid;
@end
