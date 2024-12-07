"use client";

import React, { useCallback, useEffect, useState } from "react";
import sliderData from "./SliderData";
import styles from "./Slider.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const sliderLength = sliderData.length;

  const intervalTime = 5000;

  const nextSlide = useCallback(() => {
    setCurrSlide(currSlide === sliderLength - 1 ? 0 : currSlide + 1);
  }, [currSlide, sliderLength]);

  const prevSlide = useCallback(() => {
    setCurrSlide(currSlide === 0 ? sliderLength - 1 : currSlide - 1);
  }, [currSlide, sliderLength]);

  useEffect(() => {
    const interval = setInterval(nextSlide, intervalTime);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
      />
      {sliderData.map((slider, index) => {
        const { image, heading } = slider;
        return (
          <div
            key={heading}
            className={`${styles.slide} ${
              index === currSlide && `${styles.current}`
            }`}
          >
            {index === currSlide && <Image src={image} alt={heading} fill />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
