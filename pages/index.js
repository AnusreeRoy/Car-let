import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "../styles/home.module.css";
import ImageSlideshow from "@/components/ImagesSlideshow";
import Footer from "@/components/Footer";

function index() {
  const images = ["/covcar1.jpeg", "/covcar2.jpeg", "/covcar3.jpeg"];
  return (
    <div className={styles.pg}>
      <Head>
        <title>Car-Let:Rent Cars as per your need</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Car-let Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.header}>
        <h1 className={styles.h1}>Car-Let</h1>
        <Navbar />
      </div>
      <div className={styles.pic}>
        <h1>Car Renting Services </h1>
         <h2> Across The Country </h2>
        <li>Fast & Easy Booking</li>
        <li>Best Pricing & Quality Service</li>
        <li>Wide Range of Cars Options</li>
        </div>
        <div className={styles.pt1}>
          <div className={styles.img}><h1>Felixible Options</h1></div>
          <div className={styles.seg}>
            <div><h1>Schedule Booking</h1>
            <p>Book car in advance</p></div>
            <div><h1>Rent Options</h1>
           <p>Rent as per your need; for day, week or month</p></div>
           </div>
        </div>
        <div className={styles.pt2}>
          <div className={styles.seg2}>
              <div><h1>Choose Pickup Place</h1>
            <p>Choose the location of pickup</p></div>
            <div>
            <div><h1>Pick Prefered Car</h1>
            <p>Choose the car of your choice</p></div>
            </div>
            <div>
            <div><h1>Book Schedule</h1>
            <p>Pick car as per your need</p></div>
            </div>
            </div>
            <div className={styles.img2}><h1>Easiest Way to Rent a Car</h1></div>
           </div>
      <div className={styles.footer}>
        <h1 className={styles.h1}>Car-Let</h1>
        <Footer />
      </div>
      </div>
  );
}

export default index;
