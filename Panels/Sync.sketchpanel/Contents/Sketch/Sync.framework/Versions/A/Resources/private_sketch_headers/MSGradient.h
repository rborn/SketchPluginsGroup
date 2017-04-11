//
//  MSGradient.h
//  Sync
//
//  Created by Devin Schulz on 2016-10-19.
//  Copyright © 2016 InVision LABS. All rights reserved.
//

@interface MSGradient
@property(readonly, nonatomic) long long gradientType;
@property(readonly, nonatomic) NSArray *stops;
@property(readonly, nonatomic) struct CGPoint from;
@property(readonly, nonatomic) struct CGPoint to;
@end
