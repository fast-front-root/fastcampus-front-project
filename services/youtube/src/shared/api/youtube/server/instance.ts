import { GoogleApis } from 'googleapis';

const initYoutubeApiInstance = () => {
  const auth = process.env.YOUTUBE_API_KEY;

  return new GoogleApis({
    auth,
  }).youtube('v3');
}

export const youtubeServerInstance = initYoutubeApiInstance();
