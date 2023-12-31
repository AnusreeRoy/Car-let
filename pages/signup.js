import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import Link from "next/link";
import Head from "next/head";
import supabase from "@/config/supabaseClient";
function signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !number) {
      setError("Please fill up all the fields correctly");
      return;
    }

    const { data, error, success } = await supabase
      .from("signup")
      .insert([{ firstname, lastname, email, password, number }]);

    if (error) {
      console.log(data);
      setError("Please fill up all the fields correctly");
    }
    if (success) {
      console.log(data);
      setSuccess("Successful");
      
    }
    if (data) {
      console.log(data);
      setError(null);
      setSuccess("Successful");
      router.push(`/account/${data.id}`);
    }
  };
  return (
      <div className={styles.signupbox}>
        <div className={styles.signupform}>
          <form onSubmit={handleSubmit}>
            <label for="fname">First name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <br />
            <label for="lname">Last name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label for="Email">{"Email:"}</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="password">Password:</label>
            <input
              className={styles.splaceholder}
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="number">Phone number:</label>
            <input
              className={styles.splaceholder}
              type="number"
              placeholder=""
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <div>
              <button className={styles.signupbutton} onClick={handleSubmit}>Signup</button>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
            </div>
            <div className={styles.loginlink}>
              <div className={styles.rentor}>
        <Link className={styles.loginl} href="/rentorsignup">
        Signup as Rentor
          </Link>
              </div>
              <p>
                {"Already Have an account?"}
                <Link className={styles.loginl} href="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
}

export default signup;
