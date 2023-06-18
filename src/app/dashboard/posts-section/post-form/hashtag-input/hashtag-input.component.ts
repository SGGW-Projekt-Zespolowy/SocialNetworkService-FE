import { Component } from '@angular/core';

@Component({
  selector: 'hashtag-input',
  templateUrl: './hashtag-input.component.html',
  styleUrls: ['./hashtag-input.component.scss']
})
export class HashtagInputComponent {
  newHashtag: string = "";
  hashtags: string[] = [];

  addHashtag() {
    const hashtag = this.newHashtag;
    console.log(hashtag);
    this.hashtags.push(hashtag);
  }
}
