import React from "react";
import styles from "../styles/home.module.css";
import Link from "next/link";

function Logoutbutton() {
  return (
    <div>
      <button className={styles.login}>
        <Link className={styles.log} href="/" alt="">
          Logout
        </Link>
      </button>
    </div>
  );
}

export default Logoutbutton;
