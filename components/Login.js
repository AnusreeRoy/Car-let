import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import supabase from "@/config/supabaseClient";
import Profile from "./Profile";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login button clicked!');

    try {
      console.log('Executing Supabase query:', email);
      console.log(supabase);
      const { data, error } = await supabase
        .from('signup')
        .select()
        .eq('email', email)
        .single();

      console.log('Retrieved data:', data);
      console.log('Provided password:', password);

      if (error) {
        console.error('Error retrieving user:', error);
        return;
      }

      if (!data || data.password !== password) {
        console.error('Invalid email or password.');
        return;
      }

      console.log('User signed in successfully:', data);
      router.push({
        pathname: `/profile/${data.id}`,
        query: { user: JSON.stringify(data) }
      });
      
      console.log('Redirecting to profile:', `/profile/${data.id}`);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }
  

  return (
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </form>
      </div>
      <div className={styles.signuplink}>
        <p>
          {"Don't Have an account yet?"}{" "}
          <Link className={styles.signupl} href="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
  }

export default Login;
