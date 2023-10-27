import React from 'react'
import styles from "../styles/account.module.css";
import Head from 'next/head';
import Title from '@/components/Title';
import Link from 'next/link';
function Pro() {
  return (
    <>
        <Head> 
      <title>Car-Let: Profile</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description"content="Car-let Profile Page"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <div>
      <Title/>
      </div>
      <div className={styles.format}>
        <div className={styles.day}> 
        <Link className={styles.link} href='/carsday'>
          <h1 className={styles.font}>Rent for a day</h1></Link>
        </div>
        <div className={styles.week}> 
        <Link className={styles.link} href='/'>
        <h1 className={styles.font2}>Rent for a week</h1>
        </Link>
        </div>
        <div className={styles.month}> 
        <Link className={styles.link} href='/'>
        <h1 className={styles.font}>Rent for a month</h1>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Pro