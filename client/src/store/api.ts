import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import User from '../types/User'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query<User, string>({
      query: id => `/api/general/user/${id}`,
      providesTags: ['User'],
    }),
  }),
})

export default api

export const { useGetUserQuery } = api
