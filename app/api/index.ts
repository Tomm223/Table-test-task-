
export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const eID = 29497
//const eID = 29510 //main

class API_POST_QUERY {
   postGet() {
      return `${API_URL}${eID}/row/list`
   }
   postCreate() {
      return `${API_URL}${eID}/row/create`
   }
   postSet(rID: number | string) {
      return `${API_URL}${eID}/row/${rID}/update`
   }
   postDelete(rID: number | string) {
      return `${API_URL}${eID}/row/${rID}/delete`
   }
}

export const API_POST = new API_POST_QUERY()

