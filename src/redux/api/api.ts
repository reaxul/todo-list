import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => ({
                url: '/todos',
                method: 'GET',
            })
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: data,
            })
        }),
    }),
})

export const { useGetTodoQuery, useAddTodoMutation } = baseApi;