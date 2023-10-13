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
      .from('signup')
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
    }
  };
  return (
    <>
      <Head>
        <title>Car-Let: Signup</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Car-Let Signup Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
            {/* <button className={styles.verify}>Verify</button>
            <br />
            <label for="number">Verification Code:</label>
            <input className={styles.splaceholder}type="number" placeholder="" /> */}
            <div>
              <button className={styles.signupbutton}>Signup</button>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
            </div>
            <div className={styles.loginlink}>
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
    </>
  );
}

export default signup;
