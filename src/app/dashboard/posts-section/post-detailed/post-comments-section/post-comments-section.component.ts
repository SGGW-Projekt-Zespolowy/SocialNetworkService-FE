import { Component, Input, OnDestroy } from '@angular/core';
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
  newComment: string = "";

  comments;

  constructor(
    public commentService: CommentService,
    public contextService: ContextService
  ) {}

  ngOnInit() {
    this.commentService.getCommentForPost(this.postId)
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
        const comment = {
          id: (this.comments.length + 1).toString(),
          opTitle: user.degree,
          opName: `${user.firstName} ${user.lastName}`,
          content: this.newComment,
          opAvatar: user.profilePictore,
          authorId: user.id
        };
        this.comments.unshift(comment);
        this.newComment = "";
      });
    }
  }

  onDeleteComment(comment: CommentModel) {
    const index = this.comments.indexOf(comment);
    this.comments.splice(index, 1); 
  }
}

// const comments: CommentModel[] = [
//   {
//     id: '1',
//     opTitle: 'Student',
//     opName: 'Tomasz Budny',
//     content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati.',

//     opAvatar: 'https://i.ytimg.com/vi/V8f-1olyC1s/maxresdefault.jpg',
//     authorId: '1'
//   },

//   {
//     id: '2',
//     opTitle: 'Student',
//     opName: 'Kowal Pawelczyk',
//     content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi! repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',

//     opAvatar: 'https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg',
//     authorId: '1'
//   },

//   {
//     id: '3',
//     opTitle: 'Dr n. med.',
//     opName: 'janek Paweł Wypych',
//     content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',

//     opAvatar: 'https://thumbs.dreamstime.com/b/lekarz-medycyny-z-pastylkami-27402514.jpg',
//     authorId: '1'
//   },
// ];

