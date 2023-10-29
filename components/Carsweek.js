import React from "react";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";
import Caritem from "./Caritem";
import styles from "../styles/cars.module.css";

function Carsweek() {
  const [fetchError, setFetchError] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase
      .from("cars")
      .select()
      .eq("renttype","week");
      
      if (error) {
        setFetchError("could not fetch");
        setCars(null);
        console.log(error);
      }

      if (data) {
        setCars(data);
        setFetchError(null);
      }
    };

    fetchCars();
  }, []);
  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {cars && (
        <div className={styles.pg}>
          {cars.map((car) => (
            <Caritem key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carsweek;
