import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import { Tweet } from './Tweet';
import { CreateTweet } from './CreateTweet';
import { createReply } from '../services/twitterApi';
import { CreateTweetHandlerParams, TweetOriginProps } from './types';
import { Reply } from '../services/types';

export const TweetOrigin: FC<TweetOriginProps> = ({
  tweet,
  resetTweets,
}: TweetOriginProps) => {
  const {
    profilePictureUrl: image,
    firstname,
    lastname,
    username,
  } = tweet.user;
  const tweetText = tweet.tweet;
  const dateCreated = tweet.created;
  const createTweetHandler = ({
    content,
    username,
    password,
  }: CreateTweetHandlerParams): Promise<Reply | null> =>
    createReply({
      tweetId: tweet.tweetId,
      replyText: content,
      username,
      password,
    });
  return (
    <div className="border-b border-gray-200">
      <Tweet
        username={username}
        profilePicture={image}
        firstname={firstname}
        lastname={lastname}
        dateCreated={dateCreated}
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
                  username={reply.user.username}
                  profilePicture={reply.user.profilePictureUrl}
                  firstname={reply.user.firstname}
                  lastname={reply.user.lastname}
                  dateCreated={reply.created}
                  tweetText={reply.reply}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <div className="ml-10 border-l border-gray-200">
          <CreateTweet
            resetTweets={resetTweets}
            createHandler={createTweetHandler}
            inputPlaceholder={'Post your reply!'}
            buttonText={'Reply'}
            formClass={'flex flex-row p-4 w-full'}
          />
        </div>
      </div>
    </div>
  );
};
