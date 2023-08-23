import React, { FC } from 'react';
import { TweetOrigin } from './TweetOrigin';
import { TweetsProps } from './types';

export const Tweets: FC<TweetsProps> = ({
  tweets,
  resetTweets,
}: TweetsProps) => {
  return (
    <>
      {tweets.map((tweet) => (
        <TweetOrigin
          key={tweet.tweetId}
          tweet={tweet}
          resetTweets={resetTweets}
        />
      ))}
    </>
  );
};
