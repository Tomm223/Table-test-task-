import styles from './index.module.scss'
import Level3 from '@/assets/images/level3.svg'
import Basket from '@/assets/images/basket.svg'


interface Tree {
   createTree: () => void,
   remove: () => void
}


export default function ButtonsTree({ createTree, remove }: Tree) {

   return (
      <div className={styles.block_3}>
         <ul className={styles.list}>
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
      </div>
   )
}