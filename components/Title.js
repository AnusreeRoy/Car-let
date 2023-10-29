import React from "react";
import styles from "../styles/home.module.css";
import Nav2 from "./Nav2";
function Title() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.h1}>Car-Let</h1>
        <Nav2 />
      </div>
    </div>
  );
}

export default Title;
