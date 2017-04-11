//
//  MSStyleBorderOptions.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-19.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSStylePart.h"

@interface MSStyleBorderOptions : MSStylePart
@property(nonatomic) unsigned long long lineJoinStyle;
@property(nonatomic) unsigned long long lineCapStyle;
@property(copy, nonatomic) NSArray *dashPattern;
@end
