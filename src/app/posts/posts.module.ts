import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailedComponent } from './post-detailed/post-detailed.component';
import { PostCommentsSectionComponent } from './post-detailed/post-comments-section/post-comments-section.component';
import { PostCommentComponent } from './post-detailed/post-comments-section/post-comment/post-comment.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HashtagInputComponent } from './post-form/hashtag-input/hashtag-input.component';
import { HashtagComponent } from './post-form/hashtag-input/hashtag/hashtag.component';
import { ImageInputComponent } from './post-form/image-input/image-input.component';
import { PostOptionsDialogComponent } from './post/post-options-dialog/post-options-dialog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    CreatePostComponent,
    PostDetailedComponent,
    PostCommentsSectionComponent,
    PostCommentComponent,
    PostFormComponent,
    HashtagInputComponent,
    HashtagComponent,
    ImageInputComponent,
    PostOptionsDialogComponent,
    EditPostComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AngularSvgIconModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PostComponent,
    CreatePostComponent,
    PostDetailedComponent,
    PostCommentsSectionComponent,
    PostCommentComponent,
    PostFormComponent,
    HashtagInputComponent,
    HashtagComponent,
    ImageInputComponent,
    PostOptionsDialogComponent,
    EditPostComponent
  ]
})
export class PostsModule { }
