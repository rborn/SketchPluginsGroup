//
//  MSLayoutGrid.h
//  Sync
//
//  Created by Devin Schulz on 2016-12-09.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MSBaseGrid.h"

@interface MSLayoutGrid : MSBaseGrid
@property(readonly, copy) NSString *debugDescription;
@property(readonly, copy) NSString *description;
@property(retain, nonatomic) NSColor *darkColor;
@property(retain, nonatomic) NSColor *lightColor;
@end
