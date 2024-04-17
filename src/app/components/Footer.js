"use client";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date();
  let ano = year.getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src={"/assets/logo_espectro.svg"}
            fill
            alt="Logo Studio Espectro"
            priority={false}
          />
        </div>
        <p>
          <span>copyright © {ano} - studio espectro</span>
          <span>|</span>
          <span className={styles.link}>Termos de Uso</span>
          <span>|</span>{" "}
          <span className={styles.link}>Política de Privacidade </span>
          <span>|</span>
          <span>Web designer: Victor Merseguel</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
