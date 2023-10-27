import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import supabase from "@/config/supabaseClient"; 
import styles from "../../styles/userdetails.module.css"
const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
        const { data, error } = await supabase
          .from('signup')
          .select()
          .eq("id",id)
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
          <h2>User Profile</h2>
          <p>Name: {user.firstname} {user.lastname}</p>
          <p>Email: {user.email}</p>
          <p>Number: {user.number}</p> 
         <button>update</button>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
