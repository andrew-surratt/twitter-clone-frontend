import axios from 'axios';
import { config } from '../config/config';

const handleAxiosError = (e) => {
  console.error(JSON.stringify(e, null, 2));
};

export const signIn = async ({ username, password }) => {
  try {
    const { baseUrl, loginPath } = config.twitterBE;
    const response = await axios.get(baseUrl + loginPath, {
      headers: {
        Accept: 'application/json',
      },
      auth: {
        username,
        password,
      },
    });
    if (response.data.username === username) {
      console.log(`Successfully logged in.`);
      return { username, password };
    }
  } catch (e) {
    handleAxiosError(e);
  }
};

export const getTweets = async ({ username, password }) => {
  try {
    const { baseUrl, tweetsPath } = config.twitterBE;
    return (
      await axios.get(baseUrl + tweetsPath, {
        headers: {
          Accept: 'application/json',
        },
        auth: {
          username,
          password,
        },
      })
    ).data;
  } catch (e) {
    handleAxiosError(e);
  }
};

export const createTweet = async ({ username, password, tweetText }) => {
  try {
    const { baseUrl, tweetPath } = config.twitterBE;
    const data = {
      tweetText,
    };
    return (
      await axios.post(baseUrl + tweetPath, data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        auth: {
          username,
          password,
        },
      })
    ).data;
  } catch (e) {
    handleAxiosError(e);
  }
};
