import React, { useState } from "react";
import axios from 'axios';
// import { useSession } from "next-auth/client";
// import { useQuery, useMutation } from "@apollo/client";
// import { GET_TWEETS, ADD_TWEET } from "../graphql/queries";

const useSession = () => ([]);
const useQuery = () => ({
    data: {
        tweets: [{
            id: '1',
            user: {
                image: '../logo192.png',
               name: 'John Doe'
            },
            content: 'Hello World'
        },{
            id: '1',
            user: {
                image: '../logo192.png',
                name: 'Jane Doe'
            },
            content: 'Hi World'
        }]
    }
});
const useMutation = () => {};
const GET_TWEETS = () => {};
const ADD_TWEET = () => {};


// Define a custom component for displaying tweets
const Tweet = ({ tweet }) => {
  return (
      <div className="flex p-4 border-b border-gray-200">
        <img
            src={tweet.user.image}
            alt={tweet.user.name}
            className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h4 className="font-bold">{tweet.user.name}</h4>
          <p className="text-gray-600">{tweet.content}</p>
        </div>
      </div>
  );
};

// Define a custom component for adding a new tweet
const NewTweet = () => {
  const [session] = useSession();
  const [content, setContent] = useState("");
  const [addTweet] = useMutation(ADD_TWEET);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet({
      variables: {
        content,
        userId: session.user.id,
      },
      refetchQueries: [{ query: GET_TWEETS }],
    });
    setContent("");
  };

  return (
      <form onSubmit={handleSubmit} className="flex p-4 border-b border-gray-200">
        <img
            src={session.user.image}
            alt={session.user.name}
            className="w-12 h-12 rounded-full"
        />
        <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="flex-1 ml-4 p-2 border rounded-full outline-none"
        />
        <button
            type="submit"
            disabled={!content}
            className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4"
        >
          Tweet
        </button>
      </form>
  );
};

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const backendBaseUrl = 'http://localhost:8080';
        const backendLoginPath = '/login';
        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        axios.post(backendBaseUrl + backendLoginPath, data, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(console.log)
            .catch(console.error);
    };

    return (
        <div className="content-center">
            <form onSubmit={handleSubmit} className="flex p-4 border-b border-gray-200">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="flex-1 ml-4 p-2 border rounded-full outline-none"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="flex-1 ml-4 p-2 border rounded-full outline-none"
            />
            <button
                type="submit"
                disabled={!(username || password)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4"
            >Submit</button>
            </form>
        </div>
    );
}

// Define the main component for rendering the app
const App = () => {
  const [session] = useSession();
  const { loading, error, data } = useQuery(GET_TWEETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold p-4">Twitter Clone</h1>
        {session ? (
            <>
                <NewTweet />
                {data.tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </>) : <>
            <SignIn/>
        </>
        }
      </div>
  );
};

export default App;
