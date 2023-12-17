import React from "react";
import styles from './Button.module.css';

export function Button(props) {
    const { title, onClick } = props;

    return <button className={styles.button} onClick={onClick}>{title}</button>
}