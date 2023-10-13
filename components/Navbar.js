import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/home.module.css";
import Link from "next/link";
import Drop from "./Drop";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className={styles.items}>
          <button className={styles.login}>
            <Link className={styles.log} href="/login" alt="login">
              Login
            </Link>
          </button>
          <button className={styles.login}>
            <Link className={styles.log} href="/signup" alt="signup">
              Signup
            </Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
