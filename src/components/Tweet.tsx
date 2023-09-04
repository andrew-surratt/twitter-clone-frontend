import { config } from '../config/config';
import React, { FC } from 'react';
import { TweetProps } from './types';
import { formatISODatetime } from '../services/datetime';

const replaceLinksWithHtmlLinks = (tweetText: string): string => {
  const expression = /https*:\S+/g;
  return tweetText.replaceAll(
    expression,
    (link) => `<a href=${link}>${link}</a>`,
  );
};

export const Tweet: FC<TweetProps> = ({
  username,
  profilePicture,
  firstname,
  lastname,
  dateCreated,
  tweetText,
}: TweetProps) => {
  const textWithLinksRendered = replaceLinksWithHtmlLinks(tweetText);
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
          <h4 className="text-sm text-gray-600 pl-1">
            - {formatISODatetime(dateCreated)}
          </h4>
        </div>
        <div
          className="text-sm text-gray-600 whitespace-normal break-words"
          dangerouslySetInnerHTML={{ __html: textWithLinksRendered }}
        />
      </div>
    </div>
  );
};
