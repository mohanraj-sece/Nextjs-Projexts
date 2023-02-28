import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai';
import {HiOutlineChevronDown,HiOutlineChevronUp} from 'react-icons/hi';
import styles from '../styles/Home.module.css';

export default function ToolQuestion({name, answer, last}) {
  const [check,setCheck]=useState(false);
  const text= answer.split('\n').map ((item, i) => (<><p key={i}>{item}</p><br/> </>));
  return (
    <div className={last?styles.questionBoxtrue:styles.questionBoxfalse}>
      
      <div className={styles.question}>
      <p className={styles.qname}>{name}?</p>

      <button className={styles.icon} onClick={()=>{setCheck(!check)}}>

        {check?<HiOutlineChevronUp  style={{fontSize: "1.2rem",fontWeight: "bolder"}}></HiOutlineChevronUp>:<HiOutlineChevronDown  style={{fontSize: "1.2rem",fontWeight: "bolder"}}></HiOutlineChevronDown>}

      </button>
        
      </div>

      <div className={styles.answer}>
              {check? <p >{text}</p>: ''}
      </div>
        
    </div>
  )
}

