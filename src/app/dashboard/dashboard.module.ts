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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashtagInputComponent } from './posts-section/post-form/hashtag-input/hashtag-input.component';
import { HashtagComponent } from './posts-section/post-form/hashtag-input/hashtag/hashtag.component';
import { ImageInputComponent } from './posts-section/post-form/image-input/image-input.component';

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
    CreatePostComponent,
    HashtagInputComponent,
    HashtagComponent,
    ImageInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class DashboardModule { }
