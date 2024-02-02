import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => ({
                url: '/task',
                method: 'GET',
            })
        }),
    }),
})

export const { useGetTodoQuery } = baseApi;