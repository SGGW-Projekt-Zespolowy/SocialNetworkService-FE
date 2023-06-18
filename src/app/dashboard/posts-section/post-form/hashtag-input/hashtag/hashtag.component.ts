import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../../post/post.component';

@Component({
  selector: 'hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent {
  @Input() tag: TagModel;
  @Input() id: number;

  @Output() delete = new EventEmitter<number>()
}
