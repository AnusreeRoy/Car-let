import React from 'react'
import Head from "next/head";
import Navbar from '@/components/Navbar';
import styles from "../styles/home.module.css"  
import ImageSlideshow from '@/components/ImagesSlideshow';
import Footer from '@/components/Footer';

function index() {
  const images= [
    "/covcar1.jpeg",
    "/covcar2.jpeg",
    "/covcar3.jpeg",
  ];
  return (
    <>
     <Head> 
      <title>Car-Let:Rent Cars as per your need</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description"content="Car-let Home Page"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <div className={styles.header}>
          <h1 className={styles.h1}>Car-Let</h1>    
          <Navbar/>    
          </div>
          <div >
      <ImageSlideshow/>
      
          </div>
          <div className={styles.footer}>
          <h1 className={styles.h1}>Car-Let</h1> 
            <Footer/>
          </div>

    </>
  )
}

export default index