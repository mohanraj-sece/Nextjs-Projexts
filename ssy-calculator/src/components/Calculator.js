import React,{useState} from 'react'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Slider';
import LineChart from '@/components/LineChart';
import  DoughnutChart  from '@/components/DoughnutChart';
import {FaChartPie} from 'react-icons/fa';
import {MdOutlineShowChart} from 'react-icons/md';

function Calculator() {
    const [check,setCheck]=useState(true);
    const [amount,setAmount]=useState(250);
    const [age,setAge]=useState(1);

    function cal(e){
      e.preventDefault();
      console.log(amount);
      console.log(age);
    }
    
  return (
    <div>
        <div className={styles.container}>
          {/* Column 1 - user data */}
              <div className={styles.inputContainer }>
                    <div className={styles.field}> 
                            <Slider name={'Yearly investment'} minVal={250} maxVal={150000} stepVal={250} type={'rupees'}  setVal={setAmount}/>
                    </div>
                    <div className={styles.field}>
                            <Slider name={"Girl's age (years)"}  minVal={1} maxVal={10} stepVal={1} type={'years'} setVal={setAge} />
                    </div>
                    <div className={styles.rate}>
                          <p className={styles.headName}>Latest Interest Rate</p>
                          <h3 className={styles.rateseparate} >7.6%</h3> 
                    </div>
                    <div className={styles.dashedBtn}>
                        <button className={styles.btn} onClick={cal}>Calculate</button>
                    </div>
              </div>
            {/* Column 2 - vertical line */}
              <div className={styles.verticalline}>
              </div>
            {/* Column 3 - line chart */}
            <div className={styles.graphContainer}>

                <div className={styles.toggle}>
                <button className={check?styles.icon2:styles.icon1} onClick={()=>{setCheck(true)}}><MdOutlineShowChart/></button>
                <button className={check?styles.icon1:styles.icon2} onClick={()=>{setCheck(false)}}><FaChartPie /></button>
                </div>

               <div className={styles.chart}>
               {check?<LineChart  />:<DoughnutChart />} 
               </div>

              <div className={styles.chartAnswer}>
                <div className={styles.chartOutput}>
                <p className={styles.headName}>Maturity value </p> 
                <p className={styles.headName}>{'\u20B9'}2,25,000</p>
                </div>
                
                <div className={styles.chartOutput}>
                <p className={styles.headName}>Total Investment </p> 
                <p className={styles.headName}>{'\u20B9'}1,50,000</p>
                </div>
                
                <div className={styles.chartOutput}>
                <p className={styles.headName}>Maturity Year </p> 
                <p className={styles.headName}>2045</p>
                </div>
                
                <div className={styles.chartOutput}>
                <p className={styles.headName}>Total Interest  </p> 
                <p className={styles.headName}>{'\u20B9'}75,000</p>
                </div>
                
              </div>
              
              
              </div>
        </div>  
    </div>
  )
}

export default Calculator