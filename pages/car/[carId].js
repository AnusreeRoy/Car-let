import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "@/config/supabaseClient";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/carId.module.css";

const CarDetails = () => {
  const router = useRouter();
  const {carId, id} = router.query;
  const [car, setCar] = useState(null);
  
  useEffect(() => {
    const fetchCarDetails = async () => {
      const { data, error } = await supabase
        .from("cars")
        .select()
        .eq("id", carId)
        .single();

      if (error) {
        console.error("Error fetching car details:", error);
        setCar(null);
      }

      if (data) {
       setCar(data)
      }
    };

    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  return (
    <div>
      {car ? (
        <div className={styles.car}>
          <Image
            className={styles.img}
            src={car.carimg}
            width={905}
            height={775}
            objectFit="cover"
          />
          <div className={styles.details}>
            <h2>Car Details</h2>
            <p>Car Name: {car.carname}</p>
            <p>Car Number: {car.carnumber}</p>
            <p>Rent type: {car.renttype}</p>
            <p>Rent fare: {car.carfare}</p>
            <p>Car Brand: {car.Brand}</p>
            <button className={styles.button}>
              <Link
                className={styles.link}
                href="/rent/[carId]"
                as={`/rent/${car.id}?${id}`}
              >
                Rent
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
};

export default CarDetails;
