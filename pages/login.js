import React from "react";
import Login from "@/components/Login";
import styles from "../styles/login.module.css";
import Head from "next/head";

function login() {
  return (
    <>
      <Head>
        <title>Car-Let: Login</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Car-Let Login Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.loginpg}>
        <Login />
      </div>
    </>
  );
}

export default login;
