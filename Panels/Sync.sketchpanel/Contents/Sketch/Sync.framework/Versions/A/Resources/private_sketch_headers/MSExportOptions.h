//
//  MSExportOptions.h
//  Sync
//
//  Created by David Bainbridge on 10/6/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSModelObject.h"

@interface MSExportOptions : MSModelObject
@property(readonly, nonatomic) NSArray *exportFormats;
@end
