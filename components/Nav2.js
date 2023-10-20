import React, { useEffect, useState,useRef } from 'react'
import Link from 'next/link';
import styles from "../styles/drop.module.css";
import { BiSolidUser, BiToggleLeft } from "react-icons/bi";
import Logoutbutton from './Logoutbutton';

function Nav2() {
  const [open, setOpen]= useState(false);
  let menuRef=useRef();
  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
      
    };
    document.addEventListener("mousedown",handler);
    return()=>{
      document.removeEventListener("mousedown",handler);
    }
  }); 
  return (
    <div className={styles.drop}>
        <div className={styles.dropdown} ref={menuRef}>
            <div className={styles.dropbtn} onClick={(e)=> setOpen(!open)}><BiSolidUser/></div>
                {open && (
                  <ul className={styles.dropcont}>
                <li><Link className={styles.links} href="/">Profile Info</Link></li>
               <li><Link className={styles.links}  href="/">Rent History</Link></li>
                <li><Link className={styles.links}  href="/">Vouchers</Link></li>
                </ul>
                )}
                  
            </div>
           <Logoutbutton/>
   </div>
  )
}

export default Nav2