import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import supabase from '@/config/supabaseClient';

const RentConfirmation = () => {
  const router = useRouter();
  const { rentId } = router.query;
  const [rent, setRent] = useState('')
  
  useEffect(() => {
    const fetchRentDetails = async () => {
      const { data, error } = await supabase
        .from("rentals")
        .select()
        .eq("rentId", rentId)
        .single();

      if (error) {
        console.log(data)
        console.error("Error fetching car details:", error);
        setRent(null);
      }

      if (data) {
        console.log(data)
       setRent(data)
      }
    };

    if (rentId) {
      fetchRentDetails();
    }
  }, [rentId]);

  return (
    <div>
      {rent ? (
        <div>
      <h1>Rental Confirmation</h1>
      <p>Rental ID: {rentId}</p>
      <p>Thank you for renting a car!</p>
      </div>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
};

export default RentConfirmation;
