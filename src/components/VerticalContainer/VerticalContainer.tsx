import styles from "./vertical.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { dates } from "../../data/data";

import "swiper/scss";
import "swiper/scss/navigation";
import { useState } from "react";

interface Props {
  slideNumber: number;
  dots: number;
  goNextSlide: () => void;
  goPrevSlide: () => void;
  isBtnDisabled: boolean;
}

export const VerticalContainer = (props: Props) => {
  const [slidesPerView, setSlidesPerView] = useState(window.screen.width > 1000 ? 3 : 1.2);

  window.onresize = () => {
    setSlidesPerView(window.screen.width > 1000 ? 3 : 1.2);
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>
          Исторические
          <br />
          даты
        </h1>
        <div className={styles.dates}>
          <div className={styles.firstDate}>{dates[props.slideNumber - 1][0].year}</div>
          <div className={styles.secondDate}>{dates[props.slideNumber - 1][dates[props.slideNumber - 1].length - 1].year}</div>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.wheelNav}>
          <div className={styles.wheelPages}>
            <span>{"0" + `${props.slideNumber}`}</span>
            <span>/</span>
            <span>{"0" + `${props.dots}`}</span>
          </div>
          <div className={styles.wheelControls}>
            <button disabled={props.isBtnDisabled} className={styles.wheelBtn} onClick={props.goPrevSlide}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
              </svg>
            </button>
            <button disabled={props.isBtnDisabled} className={styles.wheelBtn} onClick={props.goNextSlide}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <Swiper modules={[Navigation]} slidesPerView={slidesPerView} navigation>
          {dates[props.slideNumber - 1].map((el) => (
            <SwiperSlide key={el.year}>
              <h2 className={styles.sliderYear}>{el.year}</h2>
              <p className={styles.sliderText}>{el.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
