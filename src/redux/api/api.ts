import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: (priority) => {
                return {
                    url: '/todos',
                    method: 'GET',
                    params: { priority },
                }
            },
            providesTags: ['Todo'],
        }),
        addTodo: builder.mutation({
            query: (data) => {
                return {
                    url: '/todo',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['Todo'],
        }),
        updateTodo: builder.mutation({
            query: (data) => {
                console.log("from api=>",data);
                return {
                    url: `/todo/${data._id}`,
                    method: 'PUT',
                    body: data.updatedData,
                }
            },
            invalidatesTags: ['Todo'],
        }),
        toggleState: builder.mutation({
            query: (data) => {
                return {
                    url: `/todo/${data._id}`,
                    method: 'PUT',
                    body: data.updatedTask,
                }
            },
            invalidatesTags: ['Todo'],
        }),
        deleteTodo: builder.mutation({
            query: (id) => {
                return {
                    url: `/todo/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Todo'],
        }),
    }),
})

export const { useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useToggleStateMutation, useDeleteTodoMutation } = baseApi;