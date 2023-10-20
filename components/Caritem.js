import Image from "next/image";
import styles from "../styles/cars.module.css"
const Caritem = ({car}) => {
    return(
<div>
    <div className={styles.box}>
     <div>
     </div>  
    <div className={styles.info}>
    <p>Car Name: {car.carname}</p>
    <p>Car Number: {car.carnumber}</p>
    <p>Rent type: {car.renttype}</p>
    <p>Rent fare: {car.carfare}</p>
    <p>Car Brand: {car.Brand}</p>
    {/* <p>{car.carimg}</p> */}
    <button className={styles.rent}>Rent</button>
    </div> 
    </div>
    
   

</div>
    )
}
export default Caritem