import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() data: PostModel;
  isFollowed: boolean = false;
  showAllTags: boolean = false;

  toggleFollowingStatus() {
    this.isFollowed = !this.isFollowed;
  }

  toggleMoreTags() {
    this.showAllTags = !this.showAllTags;
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
  image: string
}

export interface TagModel {
  content: string,
  color: string,
}
