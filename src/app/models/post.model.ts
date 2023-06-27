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
  images: string[],
  category: string,
  verified: boolean,
  degree: string,
  isFollowed: boolean
  isUpVoted: boolean
  isDownVoted: boolean
  creationDate: Date,
  isSolved: boolean
}

export interface TagModel {
  content: string,
  color: string,
}

export interface PostEditModel {
  title: string,
  content: string,
  category: string,
  tags: TagModel[],
  images: string[]
}