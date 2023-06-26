export interface PostModel {
  id: string
  authorId: string,
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
  creationDate: Date
}

export interface TagModel {
  content: string,
  color: string,
}