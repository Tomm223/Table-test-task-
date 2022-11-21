import { API_POST } from '@/api/index'
import axios from 'axios'
import { Post } from 'shared/types/posts.types'
class Post_API {

   async get() {
      try {
         console.log(API_POST.postGet());

         const resp = await axios.get<[Post]>(API_POST.postGet())
         console.log('');

         return resp.data
      }
      catch (e) {
         console.log('errr');

         return e
      }
   }
   async create() {
      try {
         console.log(API_POST.postGet());

         const resp = await axios.get<[Post]>(API_POST.postGet())
         console.log('');

         return resp.data
      }
      catch (e) {
         console.log('errr');

         return e
      }
   }
   async set(id: number | string) {
      const resp = await axios.get<[Post]>(API_POST.postSet(id))
      return resp.data
   }
   async delete(id: number | string) {
      const resp = await axios.get<[Post]>(API_POST.postDelete(id))
      return resp.data
   }

}

export const PostAPI = new Post_API()