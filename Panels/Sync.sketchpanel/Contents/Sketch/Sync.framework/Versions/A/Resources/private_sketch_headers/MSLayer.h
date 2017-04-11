//
//  MSLayer.h
//  Sync
//
//  Created by David Bainbridge on 10/5/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MSModelObject.h"

@class MSRect;
@class MSExportOptions;
@class MSStyledLayer;
@class MSPage;

@interface MSLayer : MSModelObject
@property(readonly, copy, nonatomic) NSString *objectID;
@property(retain, nonatomic) NSString *originalObjectID;
@property(readonly, copy, nonatomic) NSString *name;
@property(readonly, nonatomic) BOOL isLayerExportable;
@property(retain, nonatomic) MSExportOptions *exportOptions;
@property(retain, nonatomic) MSRect *frame;
@property(readonly, nonatomic) BOOL isFlippedHorizontal;
@property(readonly, nonatomic) BOOL isFlippedVertical;
@property(readonly, nonatomic) BOOL isLocked;
@property(readonly, nonatomic) BOOL isVisible;
@property(nonatomic) struct CGRect rect;
@property(nonatomic) BOOL constrainProportions;
@property(readonly, nonatomic) MSStyledLayer *styledLayer;
@property(readonly, nonatomic) struct CGAffineTransform CGTransformForFrame;
@property(readonly, nonatomic) double rotation;

- (MSPage *)parentPage;
@end
