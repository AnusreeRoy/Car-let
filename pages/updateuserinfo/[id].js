import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/userupdate.module.css";
import Link from "next/link";
import Head from "next/head";
import supabase from "@/config/supabaseClient";
function Update() {
  const router = useRouter();
  const { id } = router.query;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !number) {
      setError("Please fill up all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("signup")
      .update({ firstname, lastname, email, number })
      .eq("id", id);

    if (error) {
      console.log(data);
      setError("Please fill up all the fields correctly");
    }

    if (data) {
      console.log(data);
      setError(null);
      console.log("Redirecting to userinfo page with id:", id);
      router.push(`/userinfo/${id}`);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const { data, error } = await supabase
        .from("signup")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching user details:", error);
      }

      if (data) {
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
        setNumber(data.number);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Car-Let: Update User</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Car-Let User uptdate Page" />
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
            <label for="number">Phone number:</label>
            <input
              className={styles.splaceholder}
              type="number"
              placeholder=""
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <div>
              <button
                className={styles.signupbutton}
                type="submit"
                onClick={handleSubmit}
              >
                <Link className={styles.link}
        href="/userinfo/[id]"
        as={`/userinfo/${id}`}> Update
        </Link>
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
