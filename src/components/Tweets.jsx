import React from "react";
import {Tweet} from "./Tweet";

const useQuery = () => ({
  data: {
    tweets: [{
      id: '1',
      user: {
        image: '../logo192.png',
        name: 'John Doe'
      },
      content: 'Hello World'
    }, {
      id: '1',
      user: {
        image: '../logo192.png',
        name: 'Jane Doe'
      },
      content: 'Hi World'
    }]
  }
});

export const Tweets = () => {
  const {loading, error, data} = useQuery();

  return (data.tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} />
  )));
}
