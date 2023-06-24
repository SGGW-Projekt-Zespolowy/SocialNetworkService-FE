import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() data: PostModel;
  @Output() showDetails = new EventEmitter<PostModel>()
  showAllTags: boolean = false;

  toggleFollowingStatus() {
    if(this.data.isFollowed) {
      this.data.followersCount = this.data.followersCount - 1;
    }
    else {
      this.data.followersCount = this.data.followersCount + 1;
    }
    this.data.isFollowed = !this.data.isFollowed; 
  }

  toggleMoreTags() {
    this.showAllTags = !this.showAllTags;
  }

  downVoteToggle() {
    if(this.data.isDownVoted) {
      this.data.rate = this.data.rate + 1;
    }
    else {
      if(this.data.isUpVoted) {
        this.data.rate = this.data.rate - 2;
      }
      else {
        this.data.rate = this.data.rate - 1;
      }
    }

    this.data.isUpVoted = false;
    this.data.isDownVoted = !this.data.isDownVoted;
  }

  upVoteToggle() {
    if(this.data.isUpVoted) {
      this.data.rate = this.data.rate - 1;
    }
    else {
      if(this.data.isDownVoted) {
        this.data.rate = this.data.rate + 2;
      }
      else {
        this.data.rate = this.data.rate + 1;
      }
    }

    this.data.isDownVoted = false;
    this.data.isUpVoted = !this.data.isUpVoted;
  }
}
