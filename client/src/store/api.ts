import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type Product from '../types/Product'
import type User from '../types/User'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products'],
  endpoints: build => ({
    getUser: build.query<User, string>({
      query: id => `/api/general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query<Product[], void>({
      query: () => '/api/client/products',
      providesTags: ['Products'],
    }),
  }),
})

export default api

export const { useGetUserQuery, useGetProductsQuery } = api
