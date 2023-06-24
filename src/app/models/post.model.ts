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