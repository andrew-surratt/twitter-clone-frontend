import { CreateTweet } from './CreateTweet';
import { Tweets } from './Tweets';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AppProviders';
import { createTweet, getTweets } from '../services/twitterApi';
import { Tweet } from '../services/types';
import { CreateTweetHandlerParams } from './types';

export const FeedView: FC = () => {
  const { session } = useContext(AuthContext);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const resetTweets: () => void = useCallback((): void => {
    if (session) {
      getTweets(session)
        .then((tweetsResponse) => setTweets(tweetsResponse ?? []))
        .catch(console.error);
    }
  }, [session]);

  useEffect(() => {
    resetTweets();
  }, [session, resetTweets]);
  const createTweetHandler = ({
    content,
    username,
    password,
  }: CreateTweetHandlerParams): Promise<Tweet | null> =>
    createTweet({
      tweetText: content,
      username,
      password,
    });
  return (
    <>
      <h1 className="text-xl font-bold px-4 pt-4 pb-8 border-b border-rgb(239, 243, 244)">
        Home
      </h1>
      <CreateTweet
        resetTweets={resetTweets}
        createHandler={createTweetHandler}
      />
      <Tweets tweets={tweets} resetTweets={resetTweets} />
    </>
  );
};
