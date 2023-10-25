import React from 'react'
function Cardetail() {
  return (
    <div>
        <Image className={styles.img}
    src={car.carimg}
    width={700}
    height={650}
    objectFit="cover"
    />
          <h2>Car Details</h2>
          <p>Car Name: {car.carname}</p>
          <p>Car Number: {car.carnumber}</p>
          <p>Rent type: {car.renttype}</p>
    <p>Rent fare: {car.carfare}</p>
    <p>Car Brand: {car.Brand}</p>
    <button>Rent</button>
    </div>
  )
}

export default Cardetail