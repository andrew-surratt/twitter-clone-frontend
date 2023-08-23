import { AppConfig } from './types';

export const config: AppConfig = {
  twitterBE: {
    baseUrl: 'http://localhost:8080',
    userPath: '/user',
    tweetsPath: '/tweets',
    tweetPath: '/tweet',
    replyPath: '/reply',
  },
  ui: {
    profilePictureDefault: 'https://api.iconify.design/twemoji/robot.svg',
  },
};
