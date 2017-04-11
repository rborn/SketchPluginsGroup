//
//  MSStyleFill.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSStyleBasicFill.h"
#import "MSImageData.h"

@interface MSStyleFill : MSStyleBasicFill
@property(retain, nonatomic) MSImageData *image;
@end
