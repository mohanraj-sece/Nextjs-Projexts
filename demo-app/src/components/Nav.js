import React from 'react';
import Link from 'next/link';
import styles from 'src/styles/Layout.module.css';

function Nav() {
  return (
    <div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav;