import React, { useContext, useEffect, useState } from 'react';
import { Tweet } from './Tweet';
import { AuthContext } from '../providers/AppProviders';
import { getTweets } from '../services/twitterApi';

export const Tweets = () => {
  const { session } = useContext(AuthContext);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets(session).then((tweets) => setTweets(tweets));
  }, [session]);

  return tweets.map((tweet) => <Tweet key={tweet.tweetId} tweet={tweet} />);
};
