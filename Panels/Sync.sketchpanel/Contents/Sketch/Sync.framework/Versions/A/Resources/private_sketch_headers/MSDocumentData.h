//
//  MSDocumentData.h
//  Sync
//
//  Created by David Bainbridge on 10/5/16.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

#import "MSModelObject.h"
#import "MSAssetCollection.h"

@interface MSDocumentData : MSModelObject
@property(retain, nonatomic) MSAssetCollection *assets;
@end
