//
//  MSTextLayer.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-13.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MSStyledLayer.h"
#import "MSColor.h"

@interface MSTextLayer : MSStyledLayer
@property(copy, nonatomic) NSString *stringValue;
@property(readonly, nonatomic) long long textBehaviour;
@property(readonly, nonatomic) NSFont *font;
@property(copy, nonatomic) MSColor *textColor;
@property(nonatomic) double lineHeight;
- (void)adjustFrameToFit;
- (void)setTextBehaviour:(long long)arg1;
- (NSParagraphStyle *)paragraphStyle;
- (float)kerning;
@end
