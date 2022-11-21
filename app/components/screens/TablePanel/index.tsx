import { useEffect, useState } from "react";
import MainLayout from "../../layout";
import styles from './index.module.scss'
import Arrow from "@/assets/images/arrow_down.svg"
import Menu from "@/components/shared/Menu";
import Table from "@/components/shared/Table";
import { EditModeProvider } from "../../../providers/EditModeProvider"  //"@/providers/EditModeProvider.tsx"
import { useCreatePostMutation, useGetPostsQuery } from '@/store/posts'
import postClass from "shared/postClass";


export default function TablePanel() {

   const { data: posts, error, isLoading, refetch } = useGetPostsQuery(null)
   const [createPost] = useCreatePostMutation()

   const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true)

   useEffect(() => {
      console.log(error);

   }, [error])

   useEffect(() => {
      setTimeout(() => setIsOpenMenu(false), 1500)
   }, [])

   useEffect(() => {
      if (posts && !posts.length && !isLoading) {
         const body = new postClass()
         body.parentId = null
         createPost({ ...body })
      }
   }, [posts, isLoading])


   return (
      <MainLayout>
         <div className={styles.header}>
            <div className={styles.left} onClick={() => setIsOpenMenu(prew => !isOpenMenu)}>
               <p className={styles.left__p}>
                  <span className={styles.left__title}>Название проекта</span>
                  <span className={styles.left__sup}>Аббревиатура</span>
               </p>
               <div className={isOpenMenu ? styles.left__arrow_active : styles.left__arrow}>
                  <Arrow className={styles.left__arrow_item} />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.right__item}>
                  <p>
                     Строительно-монтажные работы
                  </p>
               </div>
            </div>
         </div>
         <div className={styles.main}>
            <div className={isOpenMenu ? styles.menu_active : styles.menu}>
               <Menu />
            </div>
            <div className={isOpenMenu ? styles.table_active : styles.table}>
               {!isLoading ?
                  <EditModeProvider>
                     <Table
                        list={posts}
                     />
                  </EditModeProvider>
                  :
                  <p>Загрузка...</p>
               }
            </div>
         </div>
      </MainLayout>
   )
}