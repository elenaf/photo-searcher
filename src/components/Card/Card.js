import React from "react";
import styles from './Card.module.css';

export function Card(props) {
    const { card } = props;
    const { alt, author, title, url } = card;

    return (
        <div className={styles.root}>
            <img className={styles.image} src={url} alt={alt} />
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{author}</p>
        </div>
    )
}