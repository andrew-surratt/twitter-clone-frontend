import React, {useState} from "react";
import {createTweet} from "../services/twitterApi";
import {useSession} from "../hooks/useSession";

// Define a custom component for adding a new tweet
export const CreateTweet = () => {
    const [session] = useSession();
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTweet({
            content,
            username: session.username,
        });
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-4 border-b border-gray-200">
            <div className="flex flex-row">
                <img
                    src={session.userImage}
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
