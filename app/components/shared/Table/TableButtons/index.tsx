import React from "react";
import styles from './index.module.scss'
import ButtonsOne from "../../../ui/tables/buttons/level1";
import ButtonsTwo from "../../../ui/tables/buttons/level2";
import ButtonsTree from "../../../ui/tables/buttons/level3";

interface TableButtons {
   level: number,
   createChildren?: () => void,
   createThis?: () => void,
   remove: () => void
}


export default function TableItemButton({
   level, createThis, createChildren, remove
}: TableButtons) {
   if (level === 1) {
      return (
         <div className={styles.level1}>
            <ButtonsOne
               createOne={createThis}
               createTwo={createChildren}
               remove={remove}
            />
         </div>
      )
   }
   if (level === 2) {
      return (
         <div className={styles.level2}>
            <ButtonsTwo
               createTwo={createThis}
               createTree={createChildren}
               remove={remove}
            />
         </div>
      )
   }
   if (level === 3) {
      return (
         <div className={styles.level3}>
            <ButtonsTree
               createTree={createThis}
               remove={remove}
            />
         </div>
      )
   }
}






