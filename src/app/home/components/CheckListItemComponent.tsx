import React from "react";
import styles from '../home.module.css';
type Props = {
    text: string
}
export default function CheckListItemComponent({text}:Props){
    return (
        <div className={styles.itemCheckList}>
            <img src='/check.png' alt='Check' />
            {text}
        </div>
    )
}