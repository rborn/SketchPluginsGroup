//
//  MSExportFormat.h
//  Sync
//
//  Created by David Bainbridge on 10/6/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSModelObject.h"

@interface MSExportFormat : MSModelObject
@property(readonly, nonatomic) NSString *fileFormat;
@property(readonly, nonatomic) NSString *name;
@end
