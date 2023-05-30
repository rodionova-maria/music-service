import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
    }),
    getCollection: builder.query({
      query: () => `/catalog/selection/`,
    }),
  }),
})

export const { useGetAllTracksQuery, useGetCollectionQuery } = catalogApi
