import { Component, EventEmitter, Output } from '@angular/core';
import { take } from 'rxjs';
import { PostEditModel, PostModel } from 'src/app/models/post.model';
import { ContextService } from 'src/app/services/context.service';
import { PostPopUpService } from 'src/app/services/post-pop-up.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  constructor(
    public postPopUpService: PostPopUpService,
    private contextService: ContextService,
    private postService: PostService
  ) {}

  createComment(data: PostEditModel) {
    this.contextService.user.pipe(take(1))
      .subscribe(user => {
        const post: PostModel = {
          id: '1',
          authorId: user.id,
          title: data.title,
          author: `${user.firstName} ${user.lastName}`,
          content: data.content,
          rate: 0,
          commentsCount: 0,
          followersCount: 0,
          tags: data.tags,
          image: data.images[0],
          category: data.category,
          verified: user.isVerified,
          degree: user.degree,
          isFollowed: false,
          isUpVoted: false,
          isDownVoted: false,
          creationDate: new Date(),
          isSolved: false
        }

        this.postPopUpService.closeCreatePostModal();
        this.postService.addPost(post);
      })
  }
}
