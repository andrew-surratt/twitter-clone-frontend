import React from 'react';
import { config } from '../config/config';

// Define a custom component for displaying tweets
export const Tweet = ({ tweet }) => {
  const image = tweet.userProfile || config.ui.profilePictureDefault;
  return (
    <div className="flex p-4 border-b border-gray-200">
      <img
        src={image}
        alt={tweet.user.username}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col ml-4 pr-3 w-11/12">
        <div className="flex flex-row">
          <h4 className="text-sm font-bold">
            {tweet.user.firstname} {tweet.user.lastname}
          </h4>
          <h4 className="text-sm text-gray-600 pl-1">@{tweet.user.username}</h4>
        </div>
        <div className="text-sm text-gray-600 whitespace-normal break-words">
          {tweet.tweet}
        </div>
      </div>
    </div>
  );
};
