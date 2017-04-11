//
//  MSDocument.h
//  Sync
//
//  Created by David Bainbridge on 10/5/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "MSDocumentData.h"

@class MSPage;

@interface MSDocument : NSDocument
@property(retain, nonatomic) MSDocumentData *documentData;
- (void)saveArtboardOrSlice:(id)arg1 toFile:(id)arg2;
- (NSArray *)pages;
- (MSPage *)currentPage;
@end
