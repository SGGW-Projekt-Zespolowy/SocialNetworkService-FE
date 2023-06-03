import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data: PostModel;
  isFollowed: boolean = false;
  showAllTags: boolean = false;
  isDownVoted: boolean = false;
  isUpVoted: boolean = false;
  rating: number;

  ngOnInit() {
    this.rating = this.data.rate; 
  }

  toggleFollowingStatus() {
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
  verified: boolean
}

export interface TagModel {
  content: string,
  color: string,
}
