//
//  MSStyledLayer.h
//  Sync
//
//  Created by David Bainbridge on 10/5/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "MSLayer.h"
#import "MSStyle.h"

@interface MSStyledLayer : MSLayer
@property(retain, nonatomic) MSStyle *style;
@end
