import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/userupdate.module.css";
import Link from "next/link";
import supabase from "@/config/supabaseClient";
function Update() {
  const router = useRouter();
  const { rentorId } = router.query;

  const [rentorfName, setRentorFName] = useState("");
  const [rentorlName, setRentorLName] = useState("");
  const [rentorEmail, setRentorEmail] = useState("");
  const [rentorNumber, setRentorNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rentorfName || !rentorlName || !rentorEmail || !rentorNumber) {
      setError("Please fill up all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("rentorsignup")
      .update({rentorfName, rentorlName, rentorEmail, rentorNumber })
      .eq("rentorId", rentorId);

    if (error) {
      console.log(data);
      setError("Please fill up all the fields correctly");
    }

    if (data) {
      console.log(data);
      setError(null);
      console.log("Redirecting to userinfo page with id:", id);
      router.push(`/rentoraccount/${rentorId}`);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const { data, error } = await supabase
        .from("rentorsignup")
        .select()
        .eq("rentorId", rentorId)
        .single();

      if (error) {
        console.error("Error fetching user details:", error);
      }

      if (data) {
        setRentorFName(data.rentorfName);
        setRentorLName(data.rentorlName);
        setRentorEmail(data.rentorEmail);
        setRentorNumber(data.rentorNumber);
      }
    };

    if (rentorId) {
      fetchUserDetails();
    }
  }, [rentorId]);

  return (
      <div className={styles.signupbox}>
        <div className={styles.signupform}>
          <form onSubmit={handleSubmit}>
            <label for="fname">First name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={rentorfName}
              onChange={(e) => setRentorFName(e.target.value)}
            />
            <br />
            <label for="lname">Last name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={rentorlName}
              onChange={(e) => setRentorLName(e.target.value)}
            />
            <label for="Email">{"Email:"}</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={rentorEmail}
              onChange={(e) => setRentorEmail(e.target.value)}
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
              <button
                className={styles.signupbutton}
                type="submit"
                onClick={handleSubmit}
              >
                <Link className={styles.link}
        href="/rentoraccount/[rentorId]"
        as={`/rentoraccount/${rentorId}`}> Update
        </Link>
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
  );
}

export default Update;
