import React from "react";
import styles from '../home/home.module.css';

type Props = {
    abbr: string,
    name: string,
}

const CompanySelectedComponent: React.FC<Props> = ({ abbr, name }) => (
    <div className={styles.item}>
        <span className={styles.abbr}>{abbr}</span>
        <span className={styles.nameItem}>{name}</span>
        <img src='/plus.png' alt='Plus' />
    </div>
);

export default CompanySelectedComponent;