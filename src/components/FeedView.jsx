import { CreateTweet } from './CreateTweet';
import { Tweets } from './Tweets';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AppProviders';
import { createTweet, getTweets } from '../services/twitterApi';

export const FeedView = () => {
  const { session } = useContext(AuthContext);
  const [tweets, setTweets] = useState([]);

  const resetTweets = useCallback(() => {
    getTweets(session)
      .then((tweets) => setTweets(tweets))
      .catch(console.error);
  }, [session]);

  useEffect(() => {
    resetTweets();
  }, [session, resetTweets]);
  return (
    <>
      <h1 className="text-xl font-bold px-4 pt-4 pb-8 border-b border-rgb(239, 243, 244)">
        Home
      </h1>
      <CreateTweet
        resetTweets={resetTweets}
        createHandler={({ content, username, password }) =>
          createTweet({
            tweetText: content,
            username,
            password,
          })
        }
      />
      <Tweets tweets={tweets} resetTweets={resetTweets} />
    </>
  );
};
