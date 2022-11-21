import styles from './index.module.scss'
import { Post } from '../../../../../shared/types/posts.types'
import TableButton from '@/components/shared/Table/TableButtons/index'

interface TableWatch {
   post: Post,
   level: number,
   parentId?: number
   createThis: () => void,
   createChildren: () => void,
   remove: () => void
}

export default function TableWatch({ post, level, createThis, createChildren, remove }: TableWatch) {

   return (
      <>
         <div className={styles.block} id={`${post.id}`}>
            <div className={styles.left} id={`${post.id}`}>
               <div className={styles.left__btns} id={`${post.id}`}>
                  <TableButton
                     level={level}
                     createThis={createThis}
                     createChildren={createChildren}
                     remove={remove}
                  />
               </div>
               <div className={styles.left__title} id={`${post.id}`}>
                  <p className={styles.left__title_item} id={`${post.id}`}>{post.rowName}</p>
               </div>
            </div>
            <div className={styles.right} id={`${post.id}`}>
               <div id={`${post.id}`}>{post.salary}</div>
               <div id={`${post.id}`}>{post.equipmentCosts}</div>
               <div id={`${post.id}`}>{post.overheads}</div>
               <div id={`${post.id}`}>{post.estimatedProfit}</div>
            </div>
         </div>
      </>
   )
}