import React from 'react'
import styles from 'src/styles/Home.module.css';
import Nav from 'src/components/Nav';

function Layout({children}) {
  return (
    <>
    <Nav />
    <div className={styles.container}>
        <main className={styles.main}>
            <h1>Welcome to mohan raj Website</h1>
            {children}
        </main>
        
    </div>
    </> 
  )
}

export default Layout;