export interface UIConfig {
  profilePictureDefault: string;
}

export interface TwitterBEConfig {
  baseUrl: string;
  userPath: string;
  tweetsPath: string;
  tweetPath: string;
  replyPath: string;
}

export interface AppConfig {
  twitterBE: TwitterBEConfig;
  ui: UIConfig;
}
