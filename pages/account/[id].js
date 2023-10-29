import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "@/config/supabaseClient";
import Pro from "@/components/Pro";
const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

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
        <div>
          <Pro />
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
