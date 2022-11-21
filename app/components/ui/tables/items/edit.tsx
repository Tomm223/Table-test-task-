import { FormChange } from "../../../shared/Table/TableItem"
import styles from './index.module.scss'
import { Post } from "../../../../../shared/types/posts.types"
import TableButton from '@/components/shared/Table/TableButtons/index'
import { useEffect, useRef } from "react"

import { Formik } from 'formik'
import { validationSettingForm as validate } from './validate'


interface TableEdit {
   post: Post,
   level: number,
   onSubmit: (post: FormChange) => void
}
export default function TableEdit({ post, level, onSubmit }: TableEdit) {

   const rowName = useRef(null)
   useEffect(() => {
      rowName.current.focus()
   }, [])

   const name = post.rowName === 'string' ? '' : post.rowName

   const formState = {
      rowName: name,
      salary: post.salary,
      equipmentCosts: post.equipmentCosts,
      overheads: post.overheads,
      estimatedProfit: post.estimatedProfit
   }
   const formKeys = {
      rowName: 'rowName',
      salary: 'salary',
      equipmentCosts: 'equipmentCosts',
      overheads: 'overheads',
      estimatedProfit: 'estimatedProfit'
   }

   return (
      <Formik
         initialValues={formState}
         validationSchema={validate}
         validateOnBlur
         onSubmit={onSubmit}
      >
         {({ values, errors, touched, isValid, handleBlur, handleChange, handleSubmit, setFieldValue, dirty }) => (

            <form className={styles.block} onSubmit={handleSubmit}>
               <div className={styles.left}>
                  <div className={styles.left__btns}>
                     <TableButton
                        level={level}
                        createThis={() => { }}
                        createChildren={() => { }}
                        remove={() => { }}
                     />
                  </div>
                  <div className={styles.left__title}>
                     <input className={errors.rowName ? styles.edit__input_error : styles.edit__input}
                        ref={rowName}
                        name={formKeys.rowName} onChange={handleChange}
                        onBlur={handleBlur} value={values.rowName} placeholder='Название' />
                  </div>
               </div>
               <div className={styles.right}>
                  <input
                     className={errors.salary ? styles.edit__input_error : styles.edit__input}
                     name={formKeys.salary} onChange={handleChange}
                     onBlur={handleBlur} value={values.salary} placeholder='0' />

                  <input
                     className={errors.equipmentCosts ? styles.edit__input_error : styles.edit__input}
                     name={formKeys.equipmentCosts} onChange={handleChange}
                     onBlur={handleBlur} value={values.equipmentCosts} placeholder='0' />

                  <input
                     className={errors.overheads ? styles.edit__input_error : styles.edit__input}
                     name={formKeys.overheads} onChange={handleChange}
                     onBlur={handleBlur} value={values.overheads} placeholder='0' />

                  <input
                     className={errors.estimatedProfit ? styles.edit__input_error : styles.edit__input}
                     name={formKeys.estimatedProfit} onChange={handleChange}
                     onBlur={handleBlur} value={values.estimatedProfit} placeholder='0' />
               </div>
            </form>

         )}

      </Formik>
   )



}