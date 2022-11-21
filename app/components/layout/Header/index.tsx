import React from "react";
import styles from './index.module.scss'
import Arrow from '@/assets/images/arrow.svg'
import Burger from '@/assets/images/burger.svg'

export function Header() {

   return (
      <nav className={styles.nav}>
         <div className={styles.nav__item}>
            <Burger className={styles.svg} />
         </div>
         <div className={styles.nav__item}>
            <Arrow className={styles.svg} />
         </div>
         <div className={styles.nav__item}>
            <p className={styles.nav__p}>Просмотр</p>
         </div>
         <div className={styles.nav__item}>
            <p className={styles.nav__p}>Управление</p>
         </div>
      </nav>
   )
}