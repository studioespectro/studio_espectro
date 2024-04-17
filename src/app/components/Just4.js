import Image from "next/image";
import styles from "./Just4.module.css";
import Button from "./Button";

const Just4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Just4</h2>
          <Image
            src={"/assets/rainbow.png"}
            width={86}
            height={33}
            alt="Simbolo"
          />
        </div>
        <p className={styles.p1}>
          Na ESPECTRO tu treinas com um
          <br />
          acompanhamento profissional, mas principalmente
          <br />
          <span>Humano.</span>
        </p>
        <p className={styles.p2}>
          Em <span>grupos de até 4 pessoas.</span>
        </p>
        <p className={styles.p3}>
          Com um
          <br />
          olhar <span>PERSONALIZADO de verdade!</span>
        </p>
        <div className={styles.arrow}>
          <Button color={"dark"} content={"inscreve-te"} />
          <Image
            src={"/assets/arrow_light.png"}
            width={62}
            height={118}
            alt="seta"
            className={styles.arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Just4;
