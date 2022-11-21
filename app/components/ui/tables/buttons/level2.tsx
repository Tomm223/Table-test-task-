import styles from './index.module.scss'
import Level2 from '@/assets/images/level2.svg'
import Level3 from '@/assets/images/level3.svg'
import Basket from '@/assets/images/basket.svg'

interface Two {
   createTwo: () => void,
   createTree: () => void,
   remove: () => void
}

export default function ButtonsTwo({ createTwo, createTree, remove }: Two) {

   return (
      <div className={styles.block_2}>
         <ul className={styles.list}>
            <li className={styles.item}>
               <button className={styles.btn} onClick={createTwo}>
                  <Level2 className={styles.img} />

               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn} onClick={createTree}>
                  <Level3 className={styles.img} />
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn} onClick={remove}>
                  <Basket className={styles.img} />
               </button>
            </li>
         </ul>
      </div >
   )
}