import { Component } from '@angular/core';
import { TagModel } from '../../post/post.component';

@Component({
  selector: 'hashtag-input',
  templateUrl: './hashtag-input.component.html',
  styleUrls: ['./hashtag-input.component.scss']
})
export class HashtagInputComponent {
  newHashtag: string = "";
  hashtags: TagModel[] = [];

  addHashtag() {
    const hashtagName = this.newHashtag;
    const hashtagColor = 'orange';
    this.newHashtag = "";

    this.hashtags.push({content: hashtagName, color: hashtagColor});
  }

  onDeleteHashtag(id: number) {
    this.hashtags.splice(id, 1);
  }
}
