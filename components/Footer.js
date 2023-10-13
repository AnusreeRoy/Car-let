import styles from "../styles/footer.module.css";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <IconContext.Provider
          value={{
            color: "rgb(60, 13, 78)",
            size: "30px",
            className: "global-class-name",
          }}
        >
          <li>
            <Link href="/">
              <FaFacebook />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/">
              <FaTwitter />
            </Link>
          </li>
        </IconContext.Provider>
      </ul>
      <ul className={styles.ul2}>
        <p>Get Help</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Do not sell or share my personal information</p>
      </ul>
      <ul className={styles.ul3}>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <p>© 2023 car-Let Inc.</p>
      </ul>
    </div>
  );
}

export default Footer;
