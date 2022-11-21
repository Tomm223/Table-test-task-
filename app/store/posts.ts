import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_POST, API_URL } from '@/api/index'
import type { Post, PostId } from '../../shared/types/posts.types'

export const postApi = createApi({
   reducerPath: 'postApi',
   baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
   tagTypes: ['posts'],
   endpoints: (builder) => ({
      getPosts: builder.query<[Post], null>({
         query: () => API_POST.postGet(),
         providesTags: result => [{ type: 'posts' }]
      }),
      createPost: builder.mutation<[Post], Post>({
         query: (post) => ({
            url: API_POST.postCreate(),
            method: 'POST',
            body: post
         }),
         invalidatesTags: result => [{ type: 'posts' }]
      }),
      changePost: builder.mutation<[Post], Post>({
         query: (post) => ({
            url: API_POST.postSet(post.id),
            method: 'POST',
            body: post
         }),
         invalidatesTags: result => [{ type: 'posts' }]
      }),
      deletePost: builder.mutation<[Post], PostId>({
         query: (id) => ({
            url: API_POST.postDelete(id),
            method: 'DELETE'
         }),
         invalidatesTags: result => [{ type: 'posts' }]
      })
   }),
})


export const {
   useChangePostMutation,
   useCreatePostMutation,
   useDeletePostMutation,
   useGetPostsQuery,
   useLazyGetPostsQuery,
   usePrefetch
} = postApi