import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './posts-section/post/post.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';
import { FriendsSectionComponent } from './friends-section/friends-section.component';
import { ControlSectionComponent } from './control-section/control-section.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PostDetailedComponent } from './posts-section/post-detailed/post-detailed.component';
import { PostCommentsSectionComponent } from './posts-section/post-detailed/post-comments-section/post-comments-section.component';
import { PostCommentComponent } from './posts-section/post-detailed/post-comments-section/post-comment/post-comment.component';
import { PostFormComponent } from './posts-section/post-form/post-form.component';
import { CreatePostComponent } from './posts-section/create-post/create-post.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent,
    PostsSectionComponent,
    FriendsSectionComponent,
    ControlSectionComponent,
    PostDetailedComponent,
    PostCommentsSectionComponent,
    PostCommentComponent,
    PostFormComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class DashboardModule { }
