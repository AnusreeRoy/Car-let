import React from 'react'
import { useRouter } from "next/router";
import supabase from "@/config/supabaseClient";
function Caradded() {
    const router = useRouter();
    const {rentorId} = router.query;
    const [user, setUser] = useState(null);
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
        {user?(
            <div>
            <h1> Car Added successfully</h1>
            <p>
              renter:{rentorId}
            </p></div>
    
): (
    <p>Loading user profile...</p>
  )}
    </div>
  )
}

export default Caradded