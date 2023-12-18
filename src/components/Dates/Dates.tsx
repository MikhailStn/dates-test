import { Wheel } from "../wheel/Wheel";
import { VerticalContainer } from "../VerticalContainer/VerticalContainer";
import { HorisontalContainer } from "../HorisontalContainer/HorisontalContainer";
import { useState } from "react";
import { dates } from "../../data/data";
import styles from "../wheel/wheel.module.scss";

interface Props {
  intervals: 2 | 3 | 4 | 5 | 6;
}

export const Dates = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [rotateValue, setRotateValue] = useState(0.08);
  const [activeDotClassname, setActiveDotClassname] = useState(`${styles.handleActive}`);
  const [handleClassname, setHandleClassname] = useState(`${styles.handleDot}`);
  const [isBtnDisabled, setBtnDisabled] = useState(false);

  const goPrevSlide = () => {
    setActiveDotClassname(`${styles.handleActive} ${styles.handleHide}`);
    setCurrentSlide(currentSlide == 1 ? props.intervals : currentSlide - 1);
    setRotateValue(rotateValue + 1 / props.intervals);
    if (window.screen.width > 768) {
      setBtnDisabled(true);
    }
    setTimeout(() => {
      setActiveDotClassname(`${styles.handleActive}`);
      setBtnDisabled(false);
    }, 800);
  };

  const goNextSlide = () => {
    setCurrentSlide(currentSlide == props.intervals ? 1 : currentSlide + 1);
    setRotateValue(rotateValue - 1 / props.intervals);
    setActiveDotClassname(`${styles.handleActive} ${styles.handleHide}`);
    if (window.screen.width > 768) {
      setBtnDisabled(true);
    }
    setTimeout(() => {
      setActiveDotClassname(`${styles.handleActive}`);
      setBtnDisabled(false);
    }, 800);
  };

  const goRandomSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    setRotateValue(rotateValue - (1 / props.intervals) * (slideNumber - currentSlide));
    setActiveDotClassname(`${styles.handleActive} ${styles.handleHide}`);
    setHandleClassname(`${styles.handleDot} ${styles.hidden}`);
    setBtnDisabled(true);
    setTimeout(() => {
      setHandleClassname(`${styles.handleDot}`);
    }, 100);
    setTimeout(() => {
      setActiveDotClassname(`${styles.handleActive}`);
      setBtnDisabled(false);
    }, 800);
  };

  return (
    <div className="app-content">
      <Wheel
        rotateValue={rotateValue}
        dots={props.intervals}
        slideNumber={currentSlide}
        currentType={dates[currentSlide - 1][0].type}
        activeDotClassname={activeDotClassname}
        goRandomSlide={goRandomSlide}
        isBtnDisabled={isBtnDisabled}
        handleClassname={handleClassname}
      />
      <HorisontalContainer slideNumber={currentSlide} />
      <VerticalContainer
        goNextSlide={goNextSlide}
        goPrevSlide={goPrevSlide}
        slideNumber={currentSlide}
        dots={props.intervals}
        isBtnDisabled={isBtnDisabled}
      />
    </div>
  );
};
