//
//  MSSymbolInstance.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-13.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSStyledLayer.h"

@interface MSSymbolInstance : MSStyledLayer
@property(retain, nonatomic) NSString *symbolID;
@property(retain, nonatomic) NSDictionary *overrides;
- (BOOL)hasDefaultValues;
- (MSSymbolMaster *)symbolMaster;
@end
