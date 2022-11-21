import styles from './index.module.scss'
import Level1 from '@/assets/images/level1.svg'
import Level2 from '@/assets/images/level2.svg'
import Basket from '@/assets/images/basket.svg'

interface One {
   createOne: () => void,
   createTwo: () => void,
   remove: () => void
}


export default function ButtonsOne({ createOne, createTwo, remove }: One) {
   return (
      <div className={styles.block_1}>
         <ul className={styles.list}>
            <li className={styles.item}>
               <button className={styles.btn} onClick={createOne}>
                  <Level1 className={styles.img} />
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn} onClick={createTwo}>
                  <Level2 className={styles.img} />
               </button>
            </li>
            <li className={styles.item}>
               <button className={styles.btn} onClick={remove}>
                  <Basket className={styles.img} />
               </button>
            </li>
         </ul>
      </div>
   )
}