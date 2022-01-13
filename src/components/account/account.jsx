import React, { createFactory } from 'react'
import styles from './acount.m.css' 


const Account = ({ name = 'user'}) => {
    return ( 
        <div className={styles.box}>
        <h2 className={styles.title}>Hello, {name}</h2>
    </div>
     );
  };
  
  export default Account;