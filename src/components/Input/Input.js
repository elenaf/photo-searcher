import React, { useCallback } from 'react';
import styles from './Input.module.css'

export function Input(props) {
    const { value, onChange } = props;

    const cbChange = useCallback((e) => {
        onChange(e.target.value);
    }, []);  // создает коллбэк ф-цию, которая не будет изменяться
                       // при нескольких периодических вызовах

    return (
        <input value={value} onChange={cbChange} className={styles.Input} />
    );
}