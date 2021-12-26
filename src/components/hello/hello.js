import React from 'react'
import styles from './hello.m.css' 

export default function({ name = 'user'}){

    return <div className={styles.box}>
        <h2 className={styles.title}>Hello, {name}</h2>
    </div>
}