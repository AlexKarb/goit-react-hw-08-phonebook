import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const contactQuery = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['Post'],

  endpoints: builder => ({
    getAllContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Post'],
    }),

    saveNewContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetAllContactQuery,
  useSaveNewContactMutation,
  useDeleteContactMutation,
} = contactQuery;
