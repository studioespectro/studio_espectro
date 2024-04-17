import Image from "next/image";
import styles from "./CTA.module.css";
import Button from "./Button";

const CTA = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/assets/rainbow.png"}
        width={86}
        height={34}
        alt="Símbolo Studio Espectro "
      />
      <div className={styles.content}>
        <div className={styles.slogan}>
          <p className={styles.p1}>O teu</p>
          <p className={styles.p2}>estúdio</p>
          <p className={styles.p2}>de treino.</p>
          <p className={styles.p3}>personalizado</p>
          <p className={styles.p4}>favorito!</p>
        </div>
        <div className={styles.cta}>
          <p className={styles.cta1}>Inscreve-te em</p>
          <p className={styles.cta1}>nossa lista de espera e</p>
          <p className={styles.cta2}>ganha%desconto</p>
          <div className={styles.arrow_wrap}>
            <Image
              src={"/assets/arrow_dark.png"}
              width={73}
              height={145}
              alt="seta"
              className={styles.arrow}
            />
            <div className={styles.arrow_right}>
              <p className={styles.cta3}>Exclusivo!</p>
              <Button color={"light"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
