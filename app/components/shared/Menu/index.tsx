import React from "react";
import Svg from '@/assets/images/menu.svg'
import Arrow from '@/assets/images/arrow.svg'
import styles from './index.module.scss'

export default function Menu() {

   return (
      <nav className={styles.nav}>
         <ul className={styles.list}>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn}>
                  <Svg className={styles.svg} />
                  <p className={styles.title}>По проекту</p>
               </button>
            </li>
         </ul>
      </nav>
   )
}