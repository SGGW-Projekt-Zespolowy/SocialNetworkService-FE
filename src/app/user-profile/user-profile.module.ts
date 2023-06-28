import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostsModule } from '../posts/posts.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UserProfilePostsComponent } from './user-profile-posts/user-profile-posts.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
    declarations: [
        UserProfileComponent,
        UserProfilePostsComponent,
        ActivityComponent
    ],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        SharedModule,
        PostsModule,
        AngularSvgIconModule.forRoot()
    ]
})
export class UserProfileModule { }
