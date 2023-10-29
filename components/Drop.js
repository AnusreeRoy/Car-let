import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/drop.module.css";

function Drop() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div>
      <nav className={styles.drop}>
        <div className={styles.dropdown} ref={menuRef}>
          <div className={styles.dropbtn} onClick={(e) => setOpen(!open)}>
            Login
          </div>
          {open && (
            <ul className={styles.dropcont}>
              <li>
                <Link className={styles.links} href="/">
                  As a Renter
                </Link>
              </li>
              <li>
                <Link className={styles.links} href="/">
                  As a owner
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>{" "}
    </div>
  );
}

export default Drop;
