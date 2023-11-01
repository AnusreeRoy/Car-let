import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import Link from "next/link";
import Head from "next/head";
import supabase from "@/config/supabaseClient";
function signup() {
  const [rentorfName, setFRentorName] = useState("");
  const [rentorlName, setLRentorName] = useState("");
  const [rentorEmail, setRentorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rentorNumber, setRentorNumber] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rentorfName || !rentorlName || !rentorEmail || !password || !rentorNumber) {
      setError("Please fill up all the fields correctly");
      return;
    }

    const { data, error, success } = await supabase
      .from("rentorsignup")
      .insert([{rentorfName, rentorlName, rentorEmail, password, rentorNumber }]);

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
      router.push(`/rentoraccount/${data.id}`);
    }
  };
  return (
      <div className={styles.signupbox}>
        <div className={styles.signupform}>
          <form onSubmit={handleSubmit}>
            <label for="Name">First Name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={rentorfName}
              onChange={(e) => setFRentorName(e.target.value)}
            /><br/>
            <label for="Name">Last Name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={rentorlName}
              onChange={(e) => setLRentorName(e.target.value)}
            />
            <label for="Email">{"Email:"}</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={rentorEmail}
              onChange={(e) => setRentorEmail(e.target.value)}
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
              value={rentorNumber}
              onChange={(e) => setRentorNumber(e.target.value)}
            />

            <div>
              <button className={styles.signupbutton} onClick={handleSubmit}>Signup</button>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
            </div>
            <div className={styles.loginlink}>
              <div className={styles.rentor}>
        <Link className={styles.loginl} href="/signup">
        Signup as Renter
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
