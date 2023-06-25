import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {
  @Input() data: CommentModel;
  @Output() delete = new EventEmitter();

  constructor(
    public contextService: ContextService
  ) {}
}

export interface CommentModel {
  id: string,
  opTitle: string,
  opName: string,
  opAvatar: string,
  content: string,
  authorId: string
}
