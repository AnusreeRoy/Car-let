import React, { useState, useEffect } from "react";
import styles from "../../styles/addcars.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import supabase from "@/config/supabaseClient";
function signup() {
  const [carname, setCarName] = useState("");
  const [renttype, setRentType] = useState("");
  const [carnumber, setCarNumber] = useState("");
  const [carimg, setCarImg] = useState("");
  const [carfare, setCarFare] = useState("");
  const [Brand, setBrand] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();
  const {rentorId} = router.query;
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!carname || !renttype || !carnumber || !carimg || !carfare || !Brand) {
      setError("Please fill up all the fields correctly");
      return;
    }

    const { data, error, success } = await supabase
      .from("cars")
      .upsert([
        {
          carname: carname,
          renttype: renttype,
          carnumber: carnumber,
          carimg: carimg,
          carfare: carfare,
          Brand: Brand,
          rentorId: rentorId,
        }],
        )

    if (error) {
      console.log(data);
      setError("Please fill up all the fields correctly");
    }
    if (data) {
      console.log(data);
      setError(null);
      setSuccess("Successful");
  }
  if(success){
    console.log(data);
    setSuccess("successfully added")
    setError(null);
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
        console.error("Error fetching car details:", error);
        setUser(null);
      }

      if (data) {
        setUser(data);
      }
    };

    if (rentorId) {
      fetchUserDetails();
    }
  }, [rentorId]);

  
  return (
<div>
{user ? (
      <div className={styles.signupbox}>
        <div className={styles.signupform}>
          <form onSubmit={handleSubmit}>
            <label for="carname">Car name:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={carname}
              onChange={(e) => setCarName(e.target.value)}
            />
            <br />
            <label for="renttype">Rent type:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={renttype}
              onChange={(e) => setRentType(e.target.value)}
            /><br />
            <label for="Carnumber">Car Number:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={carnumber}
              onChange={(e) => setCarNumber(e.target.value)}
            />
            <label for="Carimg">Image path: </label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={carimg}
              onChange={(e) => setCarImg(e.target.value)}
            /><br />
            <label for="Car fare">Care Fare:</label>
            <input
              className={styles.splaceholder}
              type="number"
              placeholder=""
              value={carfare}
              onChange={(e) => setCarFare(e.target.value)}
            />
            <label for="Brand">Brand:</label>
            <input
              className={styles.splaceholder}
              type="text"
              placeholder=""
              value={Brand}
              onChange={(e) => setBrand(e.target.value)}
            />

            <div>
              <button className={styles.signupbutton} onClick={handleSubmit}>
              <Link
                className={styles.link}
                href="/caradded/[rentorId]"
                as={`/caradded/${user.rentorId}`}
              >
                ADD
                </Link>
                </button>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
            </div>
          </form>
        </div>
      </div>
      ) : (
        <p>Loading user profile...</p>
      )}
      </div>
  );
}

export default signup;
