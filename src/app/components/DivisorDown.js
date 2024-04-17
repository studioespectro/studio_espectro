import Image from "next/image";
import styles from "./DivisorDown.module.css";

const DivisorDown = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/assets/rainbow.png"}
        width={86}
        height={34}
        alt="Símbolo Studio Espectro "
      />
    </div>
  );
};

export default DivisorDown;
