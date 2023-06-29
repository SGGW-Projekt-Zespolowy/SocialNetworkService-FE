import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Subscription, take } from 'rxjs';
import { CommentService } from 'src/app/services/comment.service';
import { CommentModel } from 'src/app/models/comment.model';

@Component({
  selector: 'app-post-comments-section',
  templateUrl: './post-comments-section.component.html',
  styleUrls: ['./post-comments-section.component.scss']
})
export class PostCommentsSectionComponent {

  @Input() postAuthorId: string;
  @Input() postId: string;
  @Output() commentCounterChange = new EventEmitter<number>();
  newComment: string = "";

  comments: CommentModel[];

  constructor(
    public commentService: CommentService,
    public contextService: ContextService
  ) {}

  ngOnInit() {
    this.commentService.getCommentsForPost(this.postId)
      .subscribe(comments => {
        this.comments = comments;
      })
  }

  addComment() {
    if(this.newComment.length > 0) {
      this.contextService.user.pipe(take(1))
      .subscribe(user => {
        if(!user) {
          return;
        }
        const comment: CommentModel = {
          id: (this.comments.length + 1).toString(),
          authorDegree: user.degree,
          authorName: `${user.firstName} ${user.lastName}`,
          content: this.newComment,
          authorAvatar: user.profilePictore,
          authorId: user.id,
          isHelpful: false
        };
        this.comments.unshift(comment);
        this.newComment = "";
        this.commentCounterChange.emit(1);
      });
    }
  }

  onDeleteComment(comment: CommentModel) {
    const index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
    this.commentCounterChange.emit(-1); 
  }
}
