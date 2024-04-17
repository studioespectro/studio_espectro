import Image from "next/image";
import styles from "./Location.module.css";
import DivisorUp from "./DivisorUp";

const Location = () => {
  return (
    <section className={styles.container} id="location">
      <DivisorUp />
      <div className={styles.title}>
        <p>onde</p>
        <p>estamos?</p>
      </div>
      <Image
        src={"/assets/pin_icon.png"}
        width={124}
        height={184}
        alt="Local"
      />
      <p className={styles.p}>Queijas</p>
      <p className={styles.p}>Oeiras</p>
    </section>
  );
};

export default Location;
