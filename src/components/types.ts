import { CreateTweetParams, Reply, Tweet } from '../services/types';

export type CreateTweetHandlerParams = Omit<CreateTweetParams, 'tweetText'> & {
  content: string;
};

export type ResetTweets = () => void;

export interface CreateTweetProps {
  resetTweets: ResetTweets;
  createHandler: (p: CreateTweetHandlerParams) => Promise<Tweet | Reply | null>;
  buttonText?: string;
  inputPlaceholder?: string;
  formClass?: string;
}

export interface TweetProps {
  username: string;
  profilePicture: string;
  firstname: string;
  lastname: string;
  dateCreated: string;
  tweetText: string;
}

export interface TweetOriginProps {
  tweet: Tweet;
  resetTweets: ResetTweets;
}

export interface TweetsProps {
  tweets: Tweet[];
  resetTweets: ResetTweets;
}
