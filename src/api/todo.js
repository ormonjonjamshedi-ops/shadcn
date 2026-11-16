import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://to-dos-api.softclub.tj' }),
  tagTypes: ['Todos'],
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => '/api/to-dos',
      providesTags: ['Todos'],
    }),

    getTodoById: build.query({
      query: (id) => `/api/to-dos/${id}`,
    }),

    // Add: FormData (расм дорад)
    addTodo: build.mutation({
      query: (fd) => ({
        url: '/api/to-dos',
        method: 'POST',
        body: fd,
      }),
      invalidatesTags: ['Todos'],
    }),

    // Edit: JSON (объекти оддӣ, Content-Type худаш гузошта мешавад)
    editTodo: build.mutation({
      query: (body) => ({
        url: '/api/to-dos',
        method: 'PUT',
        body, // { id, name, description, isCompleted }
      }),
      invalidatesTags: ['Todos'],
    }),

    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/api/to-dos?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = todoApi;