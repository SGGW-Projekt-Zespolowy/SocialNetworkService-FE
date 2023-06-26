import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentModel } from 'src/app/models/comment.model';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {

  @Input() isAuthorReading: boolean
  @Input() data: CommentModel;
  @Output() delete = new EventEmitter();

  constructor(
    public contextService: ContextService
  ) {}
}