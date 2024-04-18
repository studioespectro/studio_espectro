import Image from "next/image";
import styles from "./Quotes.module.css";

const Quotes = () => {
  return (
    <div className={styles.container} id="about">
      <Image
        src={"/assets/background_sentence.jpg"}
        fill
        alt="background"
        priority
        style={{ zIndex: "-1" }}
        className={styles.desktop}
        sizes="100vw"
      />
      <Image
        src={"/assets/background_sentence_vert.jpg"}
        fill
        alt="background"
        sizes="100vw"
        priority
        style={{ zIndex: "-1" }}
        className={styles.mobile}
      />
      <div className={styles.content}>
        <p className={styles.p}>
          “Queremos trazer um novo <br />
          conceito de studio onde o <br />
          aluno possa se tornar sua melhor <br />
          versão a cada dia. Um espaço onde <br />
          ele não tenha que ir treinar, mas <br />
          sim, onde ele QUEIRA ir treinar”
        </p>
        <p className={`${styles.p} ${styles.author}`}>
          <strong>Pedro Paladino</strong>, co-criador do studio ESPECTRO
        </p>
      </div>
    </div>
  );
};

export default Quotes;
