import Image from "next/image";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <Image
        src={"/assets/rainbow.png"}
        width={86}
        height={34}
        alt="Símbolo Studio Espectro "
      />
      <p>
        Inscreve-te em nossa
        <br />
        lista de espera e recebe
        <br />
        novidades e<br />
        <span>descontos exclusivos!</span>
      </p>
      <form className={styles.form}>
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
      </form>
    </section>
  );
};

export default Contact;
