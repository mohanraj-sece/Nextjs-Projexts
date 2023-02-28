import React from 'react';
import {useState} from 'react';
import styles from '@/styles/Home.module.css'

function Slider({name,minVal,maxVal,stepVal,type,setVal}) {
    const [data,setData]=useState(minVal);

    function changeValue(e){
        e.preventDefault();
        setData(e.target.value);
        setVal(e.target.value);
    }

  return (
    <div >
        <p className={styles.headName}>{name}</p>
        <div className={styles.slider}>
        <input type="range" className={styles.range} min={minVal} max={maxVal} step={stepVal} value={data} onChange={changeValue}>
        </input>
        <h3 className={styles.inputVal}> {((type ==='rupees')? '\u20B9': '') + Number(data).toLocaleString("en-In") }</h3>
        </div>
    </div>
  ) 
  
}

export default Slider