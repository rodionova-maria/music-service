import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    tagTypes: ['Tracks'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access
      //   console.log(token)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
      providesTags: ['Tracks'],
    }),
    getPlaylistByID: builder.query({
      query: (id) => `/catalog/selection/${id}/`,
      providesTags: ['Playlist'],
    }),
    setLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracks', 'Playlist'],
    }),
    setUnlike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks', 'Playlist'],
    }),
  }),
})

export const { useGetAllTracksQuery, useGetPlaylistByIDQuery, useSetLikeMutation, useSetUnlikeMutation } = catalogApi
