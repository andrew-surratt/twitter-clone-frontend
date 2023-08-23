import React, { FC, useContext, useState } from 'react';
import { AuthContext } from '../providers/AppProviders';
import { config } from '../config/config';
import { CreateTweetProps } from './types';

export const CreateTweet: FC<CreateTweetProps> = ({
  resetTweets,
  createHandler,
  buttonText,
  inputPlaceholder,
  formClass,
}: CreateTweetProps) => {
  const { session } = useContext(AuthContext);
  const [content, setContent] = useState('');
  const {
    profilePictureUrl = '',
    username = '',
    password = '',
  } = session ?? {};
  const buttonTextContent = buttonText ?? 'Tweet';
  const inputPlaceholderContent = inputPlaceholder ?? `What's happening?`;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createHandler({
      content,
      username,
      password,
    })
      .then((_) => resetTweets())
      .catch(console.error);
    setContent('');
  };

  const formClassText =
    formClass ?? 'flex flex-col p-2 w-full border-b border-gray-200';
  return (
    <form onSubmit={handleSubmit} className={formClassText}>
      <div className="flex flex-1 pr-4">
        <img
          src={profilePictureUrl || config.ui.profilePictureDefault}
          alt={username}
          className="flex flex-initial w-12 h-12"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={inputPlaceholderContent}
          className="flex flex-1 w-50 ml-4 p-2"
        />
      </div>
      <div className="flex flex-row w-full h-10 ml-2 mt-1 items-end">
        <div className="flex flex-1 w-10/12 px-4"></div>
        {!content ? (
          <></>
        ) : (
          <button
            type="submit"
            className="flex flex-initial mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {buttonTextContent}
          </button>
        )}
      </div>
    </form>
  );
};
