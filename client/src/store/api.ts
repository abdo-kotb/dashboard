import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type Product from '../types/Product'
import type User from '../types/User'
import type Transactions from '../types/Transaction'
import type Geography from '../types/Geography'
import type Sales from '../types/Sales'

interface TransactionsParams {
  page: number
  pageSize: number
  sort: string
  search: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: [
    'User',
    'Products',
    'Customers',
    'Transactions',
    'Geography',
    'Sales',
    'Admins',
  ],
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
    getTransactions: build.query<Transactions, TransactionsParams>({
      query: ({ page, pageSize, search, sort }) => ({
        url: '/api/client/transactions',
        method: 'GET',
        params: { page, pageSize, search, sort },
      }),
      providesTags: ['Transactions'],
    }),
    getGeography: build.query<Geography[], void>({
      query: () => '/api/client/geography',
      providesTags: ['Geography'],
    }),
    getSales: build.query<Sales, void>({
      query: () => '/api/sales',
      providesTags: ['Sales'],
    }),
    getAdmins: build.query<User[], void>({
      query: () => '/api/management/admins',
      providesTags: ['Admins'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
} = api

export default api
