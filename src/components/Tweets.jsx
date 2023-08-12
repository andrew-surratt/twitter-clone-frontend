import React, { useContext, useEffect, useState } from 'react';
import { TweetOrigin } from './TweetOrigin';
import { AuthContext } from '../providers/AppProviders';
import { getTweets } from '../services/twitterApi';

export const Tweets = () => {
  const { session } = useContext(AuthContext);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets(session).then((tweets) => setTweets(tweets));
  }, [session]);

  return tweets.map((tweet) => (
    <TweetOrigin key={tweet.tweetId} tweet={tweet} />
  ));
};
