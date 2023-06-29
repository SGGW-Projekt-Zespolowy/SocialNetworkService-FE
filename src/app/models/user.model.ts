import { PostModel } from "./post.model";

export interface UserModel {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  degree: string,
  isVerified: boolean,
  profilePictore: string,
}

export interface UserDetailed {
  id: number,
  email: string,
  lastLogin: Date,
  registrationTime: Date,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  defree: string,
  isVerifired: boolean,
  profilePicture: string,
  posts: PostModel[],
  followers: any[],
  followedByMeUsers: any[],
  publications: any[],
  contacts: any[]
}
