import Image from "next/image";
import styles from "./Location.module.css";
import DivisorUp from "./DivisorUp";
import Link from "next/link";

const Location = () => {
  return (
    <section className={styles.container} id="location">
      <DivisorUp />
      <div className={styles.title}>
        <p>onde</p>
        <p>estamos?</p>
      </div>
      <Link
        href={
          "https://www.google.com/maps/place/R.+Augusto+Fraga+1B,+2790-368+Queijas/@38.7196399,-9.2595643"
        }
        target="_blank"
      >
        <Image
          src={"/assets/pin_icon.png"}
          width={124}
          height={184}
          alt="Local"
        />
      </Link>
      <p className={styles.p}>Queijas</p>
      <p className={styles.p}>Oeiras</p>
    </section>
  );
};

export default Location;
