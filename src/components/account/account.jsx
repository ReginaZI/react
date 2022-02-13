import React, { createFactory } from 'react'
import styles from './acount.m.css' 


const Account = (props) => {
    return ( 
        
        <div className={styles.content}>
            <h2 className={styles.title}>Hello, {props.name}</h2>
        </div>
     );
  };
  
  export default Account;