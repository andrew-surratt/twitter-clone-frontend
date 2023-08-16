import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AppProviders';
import { config } from '../config/config';

export const CreateTweet = ({
  resetTweets,
  createHandler,
  buttonText,
  inputPlaceholder,
  formClass,
}) => {
  const { session } = useContext(AuthContext);
  const [content, setContent] = useState('');
  const buttonTextContent = buttonText ?? 'Tweet';
  const inputPlaceholderContent = inputPlaceholder ?? "What's happening?";

  const handleSubmit = (e) => {
    e.preventDefault();
    createHandler({
      content,
      ...session,
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
          src={session.profilePictureUrl || config.ui.profilePictureDefault}
          alt={session.username}
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
      <div className="flex flex-2 flex-col p-2 items-end">
        <button
          type="submit"
          disabled={!content}
          className="w-20% mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {buttonTextContent}
        </button>
      </div>
    </form>
  );
};
