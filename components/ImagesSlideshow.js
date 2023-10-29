import React from "react";
import styles from "../styles/slide.module.css";

import { useState, useEffect } from "react";

const ImagesSlideshow = () => {
  const images = ["/covcar3.jpg", "/covcar1.jpg", "/covcar2.jpg"]; // Add your image paths here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default ImagesSlideshow;
