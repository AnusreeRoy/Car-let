import Image from "next/image";
import styles from "../styles/cars.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Caritem = ({ car }) => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.img}>
          <Image src={car.carimg} width={300} height={250} />
        </div>
        <div className={styles.info}>
          <p>Car Name: {car.carname}</p>
          <p>Car Number: {car.carnumber}</p>
          <p>Rent type: {car.renttype}</p>
          <p>Rent fare: {car.carfare}</p>
          <p>Car Brand: {car.Brand}</p>
          <button className={styles.rent}>
            <Link
              className={styles.link}
              href="/car/[carId]"
              as={`/car/${car.id}?${id}`}
            >
              Rent
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Caritem;
