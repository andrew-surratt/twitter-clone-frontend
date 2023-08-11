import React, {useContext, useState} from "react";
import {createTweet} from "../services/twitterApi";
import {AuthContext} from "../providers/AppProviders";
import {config} from "../config/config";

// Define a custom component for adding a new tweet
export const CreateTweet = () => {
    const {session} = useContext(AuthContext);
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTweet({
            tweetText: content,
            ...session,
        });
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-4 border-b border-gray-200">
            <div className="flex flex-row">
                <img
                    src={session.userImage || config.ui.profilePictureDefault}
                    alt={session.username}
                    className="flex flex-initial w-12 h-12"
                />
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's happening?"
                    className="flex flex-1 w-50 ml-4 p-2"
                />
            </div>
            <div className="flex flex-col items-end w-100%">
                <button
                    type="submit"
                    disabled={!content}
                    className="w-20% mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Tweet
                </button>
            </div>
        </form>
    );
};
