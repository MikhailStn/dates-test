import styles from "./horisontal.module.scss";
import { dates } from "../../data/data";

interface Props {
  slideNumber: number;
}

export const HorisontalContainer = (props: Props) => {
  return (
    <div className={styles.block}>
      <div className={styles.firstDate}>{dates[props.slideNumber - 1][0].year}</div>
      <div className={styles.secondDate}>{dates[props.slideNumber - 1][dates[props.slideNumber - 1].length - 1].year}</div>
    </div>
  );
};
