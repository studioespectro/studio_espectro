import Image from "next/image";
import styles from "./ComingSoon.module.css";
import localFont from "next/font/local";

const newOrderFont = localFont({
  src: "../../../public/fonts/New_Order_Light.otf",
});
const filsonProFont = localFont({
  src: "../../../public/fonts/FilsonProThinItalic.otf",
});

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        <div className={styles.logo}>
          <Image
            src={"/assets/espectro_logo.png"}
            fill
            alt="Logo Espectro"
            priority
          />
        </div>
        <h1 style={{ display: "none" }}>Studio Espectro</h1>
        <h2 className={`${newOrderFont.className} ${styles.h2}`}>
          small trainig group
        </h2>
      </div>
      <Image
        src={"/assets/rainbow.png"}
        width={72}
        height={358}
        className={styles.rainbow}
      />
      <div className={styles.slogan_container}>
        <p className={`${styles.slogan} ${filsonProFont.className}`}>
          o teu studio
          <br />
          de treino
        </p>
        <Image
          className={styles.favorite}
          src={"/assets/favorito.png"}
          width={451 / 3.5}
          height={222 / 3.5}
        />
      </div>
      <div className={styles.brevemente}>
        <Image src={"/assets/brevemente2.svg"} fill />
      </div>
      <div className={styles.brevemente2}>
        <Image src={"/assets/brevemente4.svg"} fill />
      </div>
    </div>
  );
};

export default ComingSoon;
