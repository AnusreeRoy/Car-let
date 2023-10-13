import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from "@/config/supabaseClient";

const Profile = () => {
  const { query } = useRouter();
  const userId = query.id; // Extract the user ID from the URL
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('signup')
        .select()
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user data:', error.message);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await fetchUserData(userId);
      if (user) {
        setUserData(user);
      }
    };

    fetchData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {userData.email}</p>
      <p>User ID: {userData.id}</p>
      {/* Display other profile information as needed */}
    </div>
  );
};

export default Profile;
