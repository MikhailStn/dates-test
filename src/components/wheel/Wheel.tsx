import styles from "./wheel.module.scss";

interface WheelProps {
  dots: number;
  rotateValue: number;
  slideNumber: number;
  currentType: string;
  activeDotClassname: string;
  handleClassname: string;
  goRandomSlide: (slideNumber: number) => void;
  isBtnDisabled: boolean;
}

export const Wheel = (props: WheelProps) => {
  const countDots = (dotsNum: number) => {
    let res = [];
    for (let i = 0; i < dotsNum; i++) {
      res.push({
        id: i + 1,
        angle: (360 / dotsNum) * i + 1,
        x: Math.round(200 + 200 * Math.sin((((360 / dotsNum) * i + 1) * Math.PI) / 180)),
        y: Math.round(200 + 200 * -Math.cos((((360 / dotsNum) * i + 1) * Math.PI) / 180)),
      });
    }
    return res;
  };

  return (
    <div className={styles.wheelWrapper}>
      <div className={props.activeDotClassname}>{props.slideNumber}</div>
      <p className={styles.currentType}>{props.currentType}</p>
      <div className={styles.wheel} style={{ transform: `rotate(${props.rotateValue}turn)` }}>
        {countDots(props.dots).map((el) => (
          <div
            key={el.angle}
            onClick={() => props.goRandomSlide(el.id)}
            className={styles.handle}
            style={{ left: el.x, top: el.y, transform: `rotate(${props.rotateValue * -1}turn)` }}
          >
            <button disabled={props.isBtnDisabled} className={props.handleClassname}>
              {el.id}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.mobileDots}>
        {countDots(props.dots).map((el) => (
          <div
            key={el.id}
            className={props.slideNumber == el.id ? `${styles.mobileDot} ${styles.mobileDotActive}` : styles.mobileDot}
            onClick={() => props.goRandomSlide(el.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};
