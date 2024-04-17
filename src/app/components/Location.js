import Image from "next/image";
import styles from "./Location.module.css";

const Location = () => {
  return (
    <section className={styles.container}>
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
