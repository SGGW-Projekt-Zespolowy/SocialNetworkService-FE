import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from 'src/app/models/post.model';

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
