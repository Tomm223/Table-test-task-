import styles from './index.module.scss'


export default function SuppItem() {

   return (
      <div className={styles.block_supp}>
         <div className={styles.left}>
            <div className={styles.left__btns}>
               <p>Уровень</p>
            </div>
            <div className={styles.left__title}>
               <p className={styles.left__title_item}>Наименование работ</p>
            </div>
         </div>
         <div className={styles.right}>
            <div>Основная з/п</div>
            <div>Оборудование</div>
            <div>Накладные расходы</div>
            <div>Сметная прибыль</div>
         </div>
      </div>
   )
}