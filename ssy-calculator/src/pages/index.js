import Head from 'next/head'
import {useState} from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Calculator from '@/components/Calculator';
import ToolQuestion from '@/components/ToolQuestion';
import CalculatorName from '@/components/CalculatorName';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (

    <>
      <Head>
        <title>SSY Calculator</title>
        <meta name="description" content="Sukanya Samriddhi Yojana Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href='./logo.png' />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>


      <Image className={styles.image} src='/app-background.png' width={1080} height={500}></Image>
      

      <main className={styles.main}>

      {/* Introduction and sub heading */}
        <div className={styles.headline}>

          <h1><span className={styles.bluecolor}>SSY</span> Calculator</h1>

          <p className={styles.subheading}>SSY (Sukanya Samriddhi Yojana) is a government-sponsored savings scheme for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits.An SSY calculator is a tool that helps you calculate the maturity amount you can expect to receive at the end of the investment period. It takes into account factors such as the investment amount, interest rate, and the tenure of the investment to estimate the final maturity value.</p>

        </div>

    {/* main calculator and chart */}
    <div className={styles.calculatorContainer}>
        
        {/* React Component to import both chart */}
          <Calculator  />

        {/* sidebar Faqs */}
        <div className={styles.tooltip}>
          
            <h3 className={styles.toolHeadName}>How to use this calculator?</h3>

            <ToolQuestion name={'Sukanya Samriddhi Yojana'} answer={'Sukanya Samriddhi Yojana (SSY) is a government-sponsored savings scheme in India for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits.'} />
            <ToolQuestion name="Historical interest rates" answer={<><table><tr><th>Financial Year</th><th>Interest Rate</th></tr>
            <tr><td>2014-15</td><td>9.1%</td></tr>
            <tr><td>2015-16</td><td>9.2%</td></tr>
            <tr><td>2016-17</td><td>8.6%%</td></tr>
            <tr><td>2016-17</td><td>8.5%</td></tr>
            <tr><td>2017-18</td><td>8.4%</td></tr>
            <tr><td>2017-18</td><td>8.3%</td></tr>
            <tr><td>2017-18</td><td>8.1%</td></tr>
            <tr><td>2018-19</td><td>8.1%</td></tr>

            </table></>} />
            <ToolQuestion name="Maturity value of the investment" answer="The returns depend on the invested amount and current interest rates offered.Use the calculator to get an accurate maturity value." />
            <ToolQuestion name="Maturity year" answer="SSY deposit matures at age 22 of the girl child."  last={true}/>
        </div>
        

    </div>

    {/* main the Faqs  */}
    <div className={styles.faq}>

            <ToolQuestion name={'What is Sukanya Samriddhi Yojana'} answer={<><div>Sukanya Samriddhi Yojana (SSY) is a government-sponsored savings scheme in India for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits. <br/> <br/>Under SSY, parents or guardians can open a savings account in the name of a girl child aged 10 years or below and make regular deposits until the girl reaches the age of 21. The deposit amount is eligible for tax benefits under Section 80C of the Income Tax Act, and the interest earned on the deposit is tax-free. <br/><br/> The main objective of SSY is to encourage parents to save for the future education and marriage expenses of their girl child and provide financial security for her. The scheme is considered to be a safe and secure investment option with a low risk of capital loss. It’s important to note that SSY is only available for Indian citizens and the deposit amount is subject to certain limits and conditions as specified by the government.</div></>} />


            <ToolQuestion name="What is SSY calculator" answer={<>An SSY calculator is a tool that helps you calculate the maturity amount you can expect to receive at the end of the investment period. It takes into account factors such as the investment amount, interest rate, and the tenure of the investment to estimate the final maturity value.</>} />


            <ToolQuestion name="How can you use the SSY calculator" answer={<>This calculator can be used to calculate the returns of your SSY investment. Just input the yearly investment amount, the age of the girl child and the year of start of investment. The calculator will give you the maturity year, total invested amount, total interest earned and total corpus at the time of maturity.</>} />


            <ToolQuestion name="How does the SSY calculator work" answer={<div>The SSY calculator takes 3 inputs namely, Yearly investment, age of the girl child, and the year of investment.<br/> It uses the following logic <br></br> <br /> A = P(1+r/n)^nt <br/> P = Initial Deposit <br/> r = Rate of interest <br/> n = Number of years the interest compounds <br/> t = Number of years <br/> A = Amount at maturity<br/></div>} />

            <ToolQuestion name={"When does my SSY investment mature"} answer={<>The maturity period of the Sukanya Samriddhi Yojana (SSY) savings scheme in India is 21 years from the date of opening the account or until the girl child reaches the age of 21, whichever is earlier. <br/><br/> During this period, parents or guardians can make regular deposits into the account, subject to the prevailing limits and conditions. The deposit amount earns interest at the rate set by the government, which is reviewed and revised periodically. <br/> <br/>Once the maturity period is reached, the account can be closed, and the deposit amount along with the accumulated interest can be withdrawn.</>} />

            <ToolQuestion name={"What are the tax implications of SSY returns"} answer={<><ul><li>Deduction under Section 80C: The deposit made into an SSY account is eligible for a tax deduction under Section 80C of the Income Tax Act, up to a limit of ₹1.5 lakh per financial year.</li> <li>Tax-free interest: The interest earned on the deposit in an SSY account is exempt from tax.</li>  <li>Exemption under Section 10(10D): The maturity amount received on the closure of the SSY account is exempt from tax under Section 10(10D) of the Income Tax Act.</li></ul></>} />

            <ToolQuestion name={"Is withdrawal permitted before maturity"} answer={<>Withdrawals under Sukanya Samriddhi Account, are allowed only after the girl child turns 18 years and can be used for higher education purposes.</>}
            last={true} />

    </div>

    <div className={styles.otherCalculatorContainer}>
      <h3>Related Calculator</h3>
      <div className={styles.otherCalculatorNames}>
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
        <CalculatorName name={"SSY Calculator"} />
      </div>
    </div>
      </main>
    </>
  )
}
