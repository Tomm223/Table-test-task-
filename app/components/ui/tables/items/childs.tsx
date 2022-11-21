import { Post } from 'shared/types/posts.types'
import TableItem from '../../../shared/Table/TableItem'


interface TableChildren {
   posts: [Post] | [],
   nextLevel: number,
   parentId: number
}

export default function TableChildren({ posts, nextLevel, parentId }: TableChildren) {
   return (
      <>
         {
            posts.length ?
               <>
                  {
                     posts.map(item => {
                        return (
                           <TableItem
                              key={item.id}
                              parentId={parentId}
                              level={nextLevel}
                              post={item}
                           />
                        )
                     })
                  }
               </>
               :
               <></>
         }
      </>
   )
}