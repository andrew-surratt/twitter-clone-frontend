import React from 'react';
import { config } from '../config/config';
import { Icon } from '@iconify/react';

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

// Define a custom component for displaying tweets
export const TweetOrigin = ({ tweet }) => {
  const image = tweet.userProfile;
  const firstname = tweet.user.firstname;
  const lastname = tweet.user.lastname;
  const username = tweet.user.username;
  const tweetText = tweet.tweet;
  return (
    <div className="border-b border-gray-200">
      <Tweet
        username={username}
        profilePicture={image}
        firstname={firstname}
        lastname={lastname}
        tweetText={tweetText}
      />
      <div>
        <div className="flex flex-1 border-b border-gray-200 py-2">
          <div className="flex flex-1">
            <Icon
              className="ml-auto mt-0.5 mr-2 block h-full"
              icon="material-symbols:chat-bubble-outline-rounded"
            />
            <p className="mr-auto block h-full">{tweet.replies?.length}</p>
          </div>
          <div className="flex flex-1"></div>
          <div className="flex flex-1"></div>
          <div className="flex flex-1"></div>
        </div>
        {tweet.replies?.length ? (
          <div className="py-2 ml-10 border-l border-gray-200">
            {tweet.replies?.map((reply) => {
              return (
                <Tweet
                  username={reply.username}
                  profilePicture={null}
                  firstname={null}
                  lastname={null}
                  tweetText={reply.reply}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
