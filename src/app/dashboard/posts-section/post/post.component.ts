import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

export interface PostModel {
  title: string;
  author: string;
  content: string;
  rate: number;
  commentsCount: number;
  followersCount: number;
  tags: TagModel[]
  image: string,
  category: string,
  verified: boolean,
  degree: string,
  isFollowed: boolean
  isUpVoted: boolean
  isDownVoted: boolean
}

export interface TagModel {
  content: string,
  color: string,
}
