import axios from 'axios';
import { config } from '../config/config';

const handleAxiosError = (e) => {
  console.error(JSON.stringify(e, null, 2));
};

export const signIn = async ({ username, password }) => {
  try {
    const { baseUrl, userPath } = config.twitterBE;
    const response = await axios.get(baseUrl + userPath, {
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
      return {
        ...response.data,
        username,
        password,
      };
    }
  } catch (e) {
    handleAxiosError(e);
    throw e;
  }
};

export const signUp = async ({ username, password }) => {
  try {
    const { baseUrl, userPath } = config.twitterBE;
    const data = {
      username,
    };
    const response = await axios.post(baseUrl + userPath, data, {
      headers: {
        Accept: 'application/json',
      },
      auth: {
        username,
        password,
      },
    });
    if (response.data.username === username) {
      console.log(`Successfully signed up.`);
      return {
        ...response.data,
        username,
        password,
      };
    }
  } catch (e) {
    handleAxiosError(e);
  }
};

export const updateProfile = async ({
  username,
  password,
  firstname,
  lastname,
  profilePictureUrl,
}) => {
  try {
    const { baseUrl, userPath } = config.twitterBE;
    const data = {
      firstname,
      lastname,
      profilePictureUrl,
    };
    return (
      await axios.patch(baseUrl + userPath, data, {
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

export const createReply = async ({
  username,
  password,
  tweetId,
  replyText,
}) => {
  try {
    const { baseUrl, replyPath } = config.twitterBE;
    const data = {
      tweetId,
      replyText,
    };
    return (
      await axios.post(baseUrl + replyPath, data, {
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
