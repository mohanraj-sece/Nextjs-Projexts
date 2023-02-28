import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai';
import {HiOutlineChevronDown,HiOutlineChevronUp} from 'react-icons/hi';
import styles from '../styles/Home.module.css';

export default function ToolQuestion({name, answer, last}) {
  const [check,setCheck]=useState(false);
  return (
    <div className={last?styles.questionBoxtrue:styles.questionBoxfalse}>
      
      <div className={styles.question}>
      <p className={styles.qname}>{name}?</p>

      <button className={styles.icon} onClick={()=>{setCheck(!check)}}>

        {check?<HiOutlineChevronUp  style={{fontSize: "1.2rem",fontWeight: "bolder"}}></HiOutlineChevronUp>:<HiOutlineChevronDown  style={{fontSize: "1.2rem",fontWeight: "bolder"}}></HiOutlineChevronDown>}

      </button>
        
      </div>

      <div className={styles.answer}>
              {check? <p >{answer}</p>: ''}
      </div>
        
    </div>
  )
}

