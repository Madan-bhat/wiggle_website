import { moviesReducePath, moviesService } from "./api/api";

export const reducer = {
  [moviesReducePath]: moviesService.reducer,
};
