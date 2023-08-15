import { config } from '../config/config';
import React from 'react';

export const Tweet = ({
  username,
  profilePicture,
  firstname,
  lastname,
  tweetText,
}) => {
  return (
    <div className="flex p-4 border-b border-gray-200">
      <img
        src={profilePicture || config.ui.profilePictureDefault}
        alt={username}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col ml-4 pr-3 w-11/12">
        <div className="flex flex-row">
          <h4 className="text-sm font-bold">
            {firstname} {lastname}
          </h4>
          <h4 className="text-sm text-gray-600 pl-1">@{username}</h4>
        </div>
        <div className="text-sm text-gray-600 whitespace-normal break-words">
          {tweetText}
        </div>
      </div>
    </div>
  );
};
