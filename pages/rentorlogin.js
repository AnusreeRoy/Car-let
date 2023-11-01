import React, { useState } from "react";
import styles from "../styles/rentorlogin.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import supabase from "@/config/supabaseClient";

const rentorlogin = () => {
  const [rentorEmail, setRentorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error, success } = await supabase
        .from("rentorsignup")
        .select()
        .eq("rentorEmail", rentorEmail)
        .single();

      if (error) {
        setError("Error retrieving user:", error);
        return;
      }

      if (!data || data.password !== password) {
        setError("Invalid email or password.");
        return;
      }
      setSuccess("User signed in successfully:", data);
      router.push(`/rentoraccount/${data.rentorId}`);
    } catch (error) {
      setError("Error signing in:", error);
    }
  };

  return (
    <div className={styles.loginpg}>
    <div className={styles.box}>
      <div className={styles.boximg}>
        <h1 className={styles.loginh1}>Car-let</h1>
      </div>
      <div className={styles.input}>
        <form onSubmit={handleLogin}>
          <label for="Email">Email:</label>
          <input
            type="text"
            placeholder=""
            value={rentorEmail}
            onChange={(e) => setRentorEmail(e.target.value)}
          />
          <label for="password">Password:</label>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} type="submit" onClick={handleLogin}>
            Login
          </button>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
        </form>
      </div>
      <div className={styles.signuplink}>
       <div className={styles.logrentor}>Login as Renter
        <Link className={styles.signupl} href="/login">
            Login
          </Link></div> 
        <p>
          {"Don't Have an account yet?"}{" "}
          <Link className={styles.signupl} href="/rentorsignup">
            Signup
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default rentorlogin;
