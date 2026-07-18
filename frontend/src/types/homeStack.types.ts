import { Video } from './video.types';

export type HomeStackParamList = {
  Home: undefined;
  MovieCard: { item: Video };
  VideoScreen: {item: Video}
};