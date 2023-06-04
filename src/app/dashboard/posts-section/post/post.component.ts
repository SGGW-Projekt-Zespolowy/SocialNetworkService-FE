import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data: PostModel;
  @Output() showDetails = new EventEmitter<PostModel>()

  isFollowed: boolean = false;
  showAllTags: boolean = false;
  isDownVoted: boolean = false;
  isUpVoted: boolean = false;
  rating: number;
  followersCount: number;

  ngOnInit() {
    this.rating = this.data.rate; 
    this.followersCount = this.data.followersCount;
  }

  toggleFollowingStatus() {
    if(this.isFollowed) {
      this.followersCount = this.data.followersCount;
    }
    else {
      this.followersCount = this.data.followersCount + 1;
    }

    this.isFollowed = !this.isFollowed;
  }

  toggleMoreTags() {
    this.showAllTags = !this.showAllTags;
  }

  downVoteToggle() {
    if(this.isDownVoted) {
      this.rating = this.data.rate;
    }
    else {
      this.rating = this.data.rate - 1;
    }

    this.isUpVoted = false;
    this.isDownVoted = !this.isDownVoted;
  }

  upVoteToggle() {
    if(this.isUpVoted) {
      this.rating = this.data.rate;
    }
    else {
      this.rating = this.data.rate + 1;
    }

    this.isDownVoted = false;
    this.isUpVoted = !this.isUpVoted;
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
  degree: string
}

export interface TagModel {
  content: string,
  color: string,
}
