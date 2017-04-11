//
//  MSReplaceImageAction.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSDocumentAction.h"

@interface MSReplaceImageAction : MSDocumentAction
- (void)applyImage:(NSImage *)image tolayer:(MSLayer *)layer;
@end
