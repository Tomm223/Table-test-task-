import React, { useCallback, useEffect, useRef, useState } from "react";
import { Post } from '../../../../../shared/types/posts.types'
import { useEditMode } from "app/providers/EditModeProvider";
import { useChangePostMutation, useCreatePostMutation, useDeletePostMutation, useGetPostsQuery, useLazyGetPostsQuery } from '@/store/posts'
import TableEdit from "../../../ui/tables/items/edit";
import TableChildren from "../../../ui/tables/items/childs";
import TableWatch from "../../../ui/tables/items/watch";
import postClass from "shared/postClass";


interface TableItem {
   post: Post,
   parentId?: number,
   level: number
}

export interface FormChange {
   rowName: string,
   salary: number,
   equipmentCosts: number,
   overheads: number,
   estimatedProfit: number
}


export default function TableItem({ post, level, parentId, }: TableItem) {

   const [changePost, { isLoading: isLoadingChange }] = useChangePostMutation()
   const [createPost, { isLoading: isLoadingCreate }] = useCreatePostMutation()
   const [deletePost, { isLoading: isLoadingDelete }] = useDeletePostMutation()

   const [editMode, setEditMode] = useEditMode()

   useEffect(() => {
      if (post.rowName == '') {
         setEditMode(post.id)
      }
      if (editMode == post.id) {
         setEditMode(null)
      }
   }, [post])


   const createThis = useCallback(() => {
      if (editMode) return
      const parentID = level > 1 ? parentId : null
      const body = new postClass()
      body.parentId = parentID
      createPost({ ...body })
   }, [editMode])

   const createChildren = useCallback(() => {
      if (editMode) return
      const body = new postClass()
      body.parentId = post.id
      createPost({ ...body })
   }, [editMode])

   const remove = useCallback(() => {
      if (editMode) return
      deletePost(post.id)
   }, [editMode])

   const change = useCallback(async (form: FormChange) => {
      const body = new postClass()
      body.id = post.id
      body.parentId = post.parentId
      body.rowName = form.rowName
      body.salary = form.salary
      body.equipmentCosts = form.equipmentCosts
      body.overheads = form.overheads
      body.estimatedProfit = form.estimatedProfit
      body.child = post.child
      console.log(body);

      await changePost({ ...body })

   }, [])

   if (editMode == post.id) {

      return (
         <>
            <TableEdit
               level={level}
               onSubmit={change}
               post={post}
               key={post.id}
            />
            <TableChildren
               nextLevel={level + 1}
               parentId={post.id}
               posts={post.child}
            />
         </>
      )
   }

   return (
      <>
         <TableWatch
            key={post.id}
            post={post}
            level={level}
            parentId={parentId}
            createChildren={createChildren}
            createThis={createThis}
            remove={remove}
         />
         <TableChildren
            nextLevel={level + 1}
            parentId={post.id}
            posts={post.child}
         />
      </>
   )
}