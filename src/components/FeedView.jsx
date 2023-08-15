import { CreateTweet } from './CreateTweet';
import { Tweets } from './Tweets';
import React from 'react';

export const FeedView = () => (
  <>
    <h1 className="text-xl font-bold px-4 pt-4 pb-8 border-b border-rgb(239, 243, 244)">
      Home
    </h1>
    <CreateTweet />
    <Tweets />
  </>
);
