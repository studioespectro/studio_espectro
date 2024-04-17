"use client";
import Image from "next/image";
import styles from "./Contact.module.css";
import DivisorUp from "./DivisorUp";
import Button from "./Button";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.container} id="contact">
      <p>
        Inscreve-te em nossa
        <br />
        lista de espera e recebe
        <br />
        novidades e<br />
        <span>descontos exclusivos!</span>
      </p>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label>
          Nome*
          <input type="text" />
        </label>
        <label>
          E-mail*
          <input type="mail" />
        </label>
        <label>
          Telefone*
          <input type="text" />
        </label>
        <span className={styles.button}>
          <Button color="light" content="Enviar" type="submit" />
        </span>
      </form>
      <div className={styles.social}>
        <div className={styles.whatsapp}>
          <Image
            src="/assets/whatsapp_icon.png"
            width={42}
            height={42}
            alt="whatsapp"
          />
          <p>
            +{"("}351{")"} 924 151 857
          </p>
        </div>
        <div className={styles.instagram}>
          <Image
            src="/assets/instagram_icon.png"
            width={42}
            height={42}
            alt="instagram"
          />
          <p>espectro_pt</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
