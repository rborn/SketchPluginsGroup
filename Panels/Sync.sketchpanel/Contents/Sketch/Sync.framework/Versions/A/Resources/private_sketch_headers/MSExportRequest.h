//
//  MSExportRequest.h
//  Sync
//
//  Created by David Bainbridge on 10/6/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MSLayer.h"

@interface MSExportRequest : NSObject
+ (id)exportRequestsFromExportableLayer:(MSLayer *)layer;

@property(nonatomic) BOOL includeArtboardBackground;
@property(nonatomic) unsigned long long exporterOptions;
@property(nonatomic) BOOL progressive;
@property(nonatomic) double compression;
@property(nonatomic) BOOL saveForWeb;
@property(copy, nonatomic) NSString *format;
@property(nonatomic) BOOL shouldTrim;
@property(nonatomic) double scale;
@property(copy, nonatomic) NSSet *includedLayerIDs;
@property(nonatomic) unsigned long long options;
@property(copy, nonatomic) NSString *name;
@property(nonatomic) struct CGRect rect;

@end
