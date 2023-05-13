import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../redux.config";

export const moviesService = createApi({
  reducerPath: "moviesService",
  baseQuery,
  endpoints: (build) => ({
    data: build.query({
      query: () => ({
        method: "GET",
        url: "/services",
      }),
    }),
  }),
});

export const moviesReducePath = moviesService.reducerPath;

export const { useDataQuery } = moviesService;
