import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "@/config/supabaseClient";
import styles from "../../styles/rentoraccount.module.css";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
const Userinfo = () => {
  const router = useRouter();
  const { rentorId } = router.query;
  const [user, setUser] = useState(null);

  const handleDelete = async () => {
    const { data, error } = await supabase
    .from("rentorsignup")
    .delete()
    .eq("rentorId", rentorId);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
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
        <div className={styles.whole}>
          <div className={styles.details}>
            <div className={styles.pro}>
            <BiSolidUser className={styles.icon}/>
            </div>
            <div className={styles.info}>
            <h2>Rentor Profile</h2>
            <p>
              Name: {user.rentorfName} {user.rentorlName}
            </p>
            <p>Email: {user.rentorEmail}</p>
            <p>Number: {user.rentorNumber}</p>
            <div className={styles.butt}>
            <button className={styles.button}>
              <Link
                className={styles.link}
                href="/updaterentor/[rentorId]"
                as={`/updaterentor/${user.rentorId}`}
              > 
                update
             </Link> 
            </button>{" "}
            <button className={styles.button} onClick={handleDelete}>
              Delete
            </button>
            <button className={styles.button}>
            <Link
                className={styles.link}
                href="/addcars/[rentorId]"
                as={`/addcars/${user.rentorId}`}
              > 
              Add Cars
              </Link>
              </button>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Userinfo;
