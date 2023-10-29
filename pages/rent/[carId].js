import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import supabase from '@/config/supabaseClient';
import styles from "../../styles/rentform.module.css"
import Link from 'next/link';
const CarRental = () => {
  const router = useRouter();
  const { carId, id} = router.query;
  const [renterName, setRenterName] = useState('');
  const [renterEmail, setRenterEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupPlace, setPickupPlace] = useState('');
  const [returnPlace, setReturnPlace] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const handleRentalSubmit = async (e) => {
    e.preventDefault(); 

    if (!renterName || !renterEmail || !pickupDate || !returnDate || !pickupPlace ||!returnPlace) {
      setError("Please fill up all the fields correctly");
      return;
    }
      const { data, error } = await supabase
        .from("rentals")
        .insert({ carId, renterName, renterEmail, pickupDate, returnDate, pickupPlace, returnPlace, status});


      if (error) {
        console.log(data)
        setError('Error renting the car')
      }
      if (data) {
        console.log(data);
        setError(null);
        router.push(`/rent_confirmation/${carId}`);
      }

  };
 
  return (
    <div className={styles.page}>
      <div className={styles.form}>
      <h1>Rent a Car</h1>
      <p>Car ID: {carId}</p>
      <p>{id}</p>
    <div className={styles.field}>
      <input
        type="text"
        placeholder="Your Name"
        value={renterName}
        onChange={(e) => setRenterName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={renterEmail}
        onChange={(e) => setRenterEmail(e.target.value)}
      />
      <input
        type="Date"
        placeholder="Pickup Date"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
      />
<input
        type="Date"
        placeholder="Return Date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
 <input
        type="text"
        placeholder="Pickup place"
        value={pickupPlace}
        onChange={(e) => setPickupPlace(e.target.value)}
      />

<input
        type="text"
        placeholder="Return place"
        value={returnPlace}
        onChange={(e) => setReturnPlace(e.target.value)}
      />

<input
        type="text"
        placeholder="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className={styles.button}  type="submit" onClick={handleRentalSubmit}>
        <Link className={styles.link}
        href="/rent_confirmation/[rentId]"
        as={`/rent_confirmation/${carId}`}> Rent
        </Link>
        {/* Rent */}
       </button>
      {error && <p>{error}</p>}
              </div>
              </div>
    </div>
  );
};

export default CarRental;
