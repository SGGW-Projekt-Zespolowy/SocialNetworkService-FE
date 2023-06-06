import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {
  @Input() data: CommentModel 
}

export interface CommentModel {
  opTitle: string,
  opName: string,
  opAvatar: string,
  content: string,
}
