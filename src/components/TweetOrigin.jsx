import React from 'react';
import { Icon } from '@iconify/react';
import { Tweet } from './Tweet';

// Define a custom component for displaying tweets
export const TweetOrigin = ({ tweet }) => {
  const image = tweet.user.profilePictureUrl;
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
