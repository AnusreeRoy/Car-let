import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "@/config/supabaseClient";
import styles from "../../styles/userdetails.module.css";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
const Userinfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  const handleDelete = async () => {
    const { data, error } = await supabase.from("signup").delete().eq("id", id);

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
        .from("signup")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching car details:", error);
        setUser(null);
      }

      if (data) {
        setUser(data);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  return (
    <div>
      {user ? (
        <div className={styles.whole}>
          <div className={styles.details}>
            <div className={styles.pro}>
            <BiSolidUser className={styles.icon}/>
            </div>
            <div className={styles.info}>
            <h2>User Profile</h2>
            <p>
              Name: {user.firstname} {user.lastname}
            </p>
            <p>Email: {user.email}</p>
            <p>Number: {user.number}</p>
            <div className={styles.butt}>
            <button className={styles.button}>
              <Link
                className={styles.link}
                href="/updateuserinfo/[id]"
                as={`/updateuserinfo/${user.id}`}
              >
                update
              </Link>
            </button>{" "}
            <button className={styles.button} onClick={handleDelete}>
              Delete
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
