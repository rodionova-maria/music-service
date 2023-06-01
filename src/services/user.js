import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/user/login/',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: '/user/signup/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = userApi
