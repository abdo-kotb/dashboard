import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type Product from '../types/Product'
import type User from '../types/User'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products', 'Customers'],
  endpoints: build => ({
    getUser: build.query<User, string>({
      query: id => `/api/general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query<Product[], void>({
      query: () => '/api/client/products',
      providesTags: ['Products'],
    }),
    getCustomers: build.query<User[], void>({
      query: () => '/api/client/customers',
      providesTags: ['Customers'],
    }),
  }),
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  api

export default api
