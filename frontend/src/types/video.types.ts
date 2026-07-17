export interface Video {
  _id: string;
  uri: string;
  posterImage: string;
  title: string;
  cast: string[];
  genre: string;
  description: string;
}

export type videoResponse = {
    message: string,
    videos: Video[]
}