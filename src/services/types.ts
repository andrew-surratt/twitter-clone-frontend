export interface User {
  profilePictureUrl: string;
  firstname: string;
  lastname: string;
  username: string;
  created: string;
}

export interface Reply {
  reply: string;
  created: string;
  user: User;
}

export interface Tweet {
  tweetId: string;
  tweet: string;
  created: string;
  user: User;
  replies: Reply[];
}

export interface AuthParams {
  username: string;
  password: string;
}

export interface UpdateProfileParams extends AuthParams {
  firstname: string;
  lastname: string;
  profilePictureUrl: string;
}
export interface CreateTweetParams extends AuthParams {
  tweetText: string;
}

export interface CreateReplyParams extends AuthParams {
  tweetId: string;
  replyText: string;
}
