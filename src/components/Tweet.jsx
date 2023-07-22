import React from "react";

// Define a custom component for displaying tweets
export const Tweet = ({ tweet }) => {
    return (
        <div className="flex p-4 border-b border-gray-200">
            <img
                src={tweet.user.image}
                alt={tweet.user.name}
                className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
                <h4 className="text-sm font-bold">{tweet.user.name}</h4>
                <p className="text-sm text-gray-600">{tweet.content}</p>
            </div>
        </div>
    );
};
