//
//  MSBaseGrid.h
//  Sync
//
//  Created by Devin Schulz on 2016-12-09.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSModelObject.h"

@interface MSBaseGrid : MSModelObject
@property(readonly, nonatomic) double totalWidth;
@property(readonly, nonatomic) double numberOfColumns;
@property(readonly, nonatomic) double horizontalOffset;
@property(readonly, nonatomic) BOOL guttersOutside;
@property(readonly, nonatomic) double columnWidth;
@property(readonly, nonatomic) BOOL drawHorizontal;
@property(readonly, nonatomic) BOOL drawHorizontalLines;
@property(readonly, nonatomic) BOOL drawVertical;
@property(readonly, nonatomic) double gutterHeight;
@property(readonly, nonatomic) double gutterWidth;
@property(readonly, nonatomic) double rowHeightMultiplication;
@end
