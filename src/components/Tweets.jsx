import React from 'react';
import { TweetOrigin } from './TweetOrigin';

export const Tweets = ({ tweets, resetTweets }) => {
  return tweets.map((tweet) => (
    <TweetOrigin key={tweet.tweetId} tweet={tweet} resetTweets={resetTweets} />
  ));
};
