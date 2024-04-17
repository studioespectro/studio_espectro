import Image from "next/image";
import styles from "./Header.module.css";
import Quotes from "./Quotes";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <Image
              src={"/assets/logo_espectro.svg"}
              fill
              alt="Logo Studio Espectro"
            />
          </div>
          <h1 style={{ display: "none" }}>Studio Espectro</h1>
          <h2>small training group</h2>
        </div>
        <Image
          src={"/assets/colors.png"}
          width={70}
          height={212}
          alt="Símbolo Studio Espectro"
          className={styles.colors_bar}
        />
      </div>
      <Quotes />
      <Image
        src={"/assets/_brevemente_pb.png"}
        width={1343}
        height={1500}
        alt="brevemente"
        className={styles.brevemente}
      />
    </header>
  );
};

export default Header;
