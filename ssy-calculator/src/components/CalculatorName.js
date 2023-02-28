import React from 'react';
import styles from '@/styles/Home.module.css';

function CalculatorName({name}) {
  return (
    <div className={styles.nameContainer}>
        <h4 className={styles.greenText}>{name}</h4>
    </div>
  )
}

export default CalculatorName