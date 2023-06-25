import { Component, OnDestroy } from '@angular/core';
import { CommentModel } from './post-comment/post-comment.component';
import { ContextService } from 'src/app/services/context.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-comments-section',
  templateUrl: './post-comments-section.component.html',
  styleUrls: ['./post-comments-section.component.scss']
})
export class PostCommentsSectionComponent implements OnDestroy {

  newComment: string = "";

  comments = comments;
  userSub: Subscription;

  constructor(
    public contextService: ContextService
  ) {}

  addComment() {
    if(this.newComment.length > 0) {
      console.log(this.newComment)
      this.userSub = this.contextService.user.subscribe(user => {
        const comment = {
          opTitle: user.degree,
          opName: `${user.firstName} ${user.lastName}`,
          content: this.newComment,
          opAvatar: user.profilePictore
        };
        this.comments.unshift(comment);
        this.newComment = "";
      });
    }
  }

  ngOnDestroy() {
    if(this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}

const comments: CommentModel[] = [
  {
    opTitle: 'Student',
    opName: 'Tomasz Budny',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati.',

    opAvatar: 'https://i.ytimg.com/vi/V8f-1olyC1s/maxresdefault.jpg'
  },

  {
    opTitle: 'Student',
    opName: 'Kowal Pawelczyk',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi! repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',

    opAvatar: 'https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg'
  },

  {
    opTitle: 'Dr n. med.',
    opName: 'janek Paweł Wypych',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil omnis eum molestias neque iste exercitationem sapiente? Ratione odio ut ab tenetur quis culpa, quo illo quasi sequi. Eveniet earum vero eligendi iusto repudiandae aspernatur dolore aliquam quo obcaecati dignissimos suscipit non exercitationem, beatae, est deserunt ab voluptas sequi!',

    opAvatar: 'https://thumbs.dreamstime.com/b/lekarz-medycyny-z-pastylkami-27402514.jpg'
  },
];

