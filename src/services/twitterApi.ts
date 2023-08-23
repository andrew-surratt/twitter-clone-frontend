import axios, { AxiosResponse } from 'axios';
import { config } from '../config/config';
import {
  AuthParams,
  CreateReplyParams,
  CreateTweetParams,
  Reply,
  Tweet,
  UpdateProfileParams,
} from './types';
import { Session } from '../providers/types';

const handleAxiosError = (e: unknown): void => {
  console.error(JSON.stringify(e, null, 2));
};

export const signIn = async ({
  username,
  password,
}: AuthParams): Promise<Session | null> => {
  try {
    const { baseUrl, userPath } = config.twitterBE;
    const response = await axios.get<Session>(baseUrl + userPath, {
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
    } else {
      console.error(`Failed to log in ${username}`);
      return null;
    }
  } catch (e: unknown) {
    handleAxiosError(e);
    throw e;
  }
};

export const signUp = async ({
  username,
  password,
}: AuthParams): Promise<Session | null> => {
  try {
    const { baseUrl, userPath } = config.twitterBE;
    const data = {
      username,
    };
    const response = await axios.post<Session>(baseUrl + userPath, data, {
      headers: {
        Accept: 'application/json',
      },
      auth: {
        username,
        password,
      },
    });
    if (response.data.username === username) {
      console.log(`Successfully signed up ${username}`);
      return {
        ...response.data,
        username,
        password,
      };
    } else {
      console.error(`Failed to sign up user ${username}`);
    }
  } catch (e) {
    handleAxiosError(e);
  }
  return null;
};

export const updateProfile = async ({
  username,
  password,
  firstname,
  lastname,
  profilePictureUrl,
}: UpdateProfileParams): Promise<void> => {
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

export const getTweets = async ({
  username,
  password,
}: AuthParams): Promise<Tweet[] | null> => {
  try {
    const { baseUrl, tweetsPath } = config.twitterBE;
    return (
      await axios.get<Tweet[]>(baseUrl + tweetsPath, {
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
    return null;
  }
};

export const createTweet = async ({
  username,
  password,
  tweetText,
}: CreateTweetParams): Promise<Tweet | null> => {
  try {
    const { baseUrl, tweetPath } = config.twitterBE;
    const data = {
      tweetText,
    };
    const response: AxiosResponse<Tweet> = await axios.post<Tweet>(
      baseUrl + tweetPath,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        auth: {
          username,
          password,
        },
      },
    );
    return response.data;
  } catch (e) {
    handleAxiosError(e);
    return null;
  }
};

export const createReply = async ({
  username,
  password,
  tweetId,
  replyText,
}: CreateReplyParams): Promise<Reply | null> => {
  try {
    const { baseUrl, replyPath } = config.twitterBE;
    const data = {
      tweetId,
      replyText,
    };
    return (
      await axios.post<Reply>(baseUrl + replyPath, data, {
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
    return null;
  }
};
