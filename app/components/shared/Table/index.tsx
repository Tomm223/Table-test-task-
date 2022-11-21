import SuppItem from '@/components/ui/tables/items/sup'
import { useClickAndDoubleClickHandler } from '@/hooks/useClickAndDoubleClickHandler'
import { useCreatePostMutation } from '@/store/posts'
import { useEditMode, useGetEditMode, useSetEditMode } from 'app/providers/EditModeProvider'
import React, { useEffect } from 'react'
import postClass from 'shared/postClass'
import { Post } from 'shared/types/posts.types'
import styles from './index.module.scss'
import TableItem from './TableItem'

interface Table {
   list: [Post]
}

export default function Table({ list }: Table) {

   const [editMode, setEditMode] = useEditMode()

   const onSingleClick = () => {

   }
   const onDoubleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (editMode) return

      const { id } = event.target as HTMLElement
      console.log(event);

      if (id) {
         console.log(setEditMode);

         setEditMode(id)
      }
   }
   const clickHandler = useClickAndDoubleClickHandler(onSingleClick, onDoubleClick, 300)

   const [createPost] = useCreatePostMutation()

   /*const start = (e: React.MouseEvent<HTMLButtonElement>) => {
      const body = new postClass()
      body.parentId = null
      createPost({ ...body })
   } */
   //                  <button className={styles.btn_start} onClick={start}>Начать</button>
   return (
      <div className={styles.overflow}>
         <ul className={styles.list} onClick={clickHandler}>
            <SuppItem />
            {
               list.length ?
                  list.map(item => {

                     return (
                        <TableItem
                           level={1}
                           post={item}
                           key={item.id}
                        />
                     )
                  })
                  :
                  <></>
            }


         </ul>
      </div>
   )
}