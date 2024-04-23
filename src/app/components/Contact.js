"use client";
import Image from "next/image";
import styles from "./Contact.module.css";
import DivisorUp from "./DivisorUp";
import Button from "./Button";
import { useContext, useState } from "react";
import jsonp from "jsonp";
import { Context } from "../hooks/Context";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexName = "";
    const regexPhone = "";

    setErrorMsg(null);

    if (name === "" || email === "" || phone === "") {
      name === "" ? setNameError(true) : setNameError(false);
      email === "" ? setEmailError(true) : setEmailError(false);
      phone === "" ? setPhoneError(true) : setPhoneError(false);
      return;
    } else if (name.replace(" ", "") === "" || !/([a-zA-Z\s]+)/g.test(name)) {
      setNameError(true);
      return;
    } else if (
      email.replace(" ", "") === "" ||
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    ) {
      setNameError(false);
      setEmailError(true);
      return;
    } else if (
      phone.replace(" ", "") === "" ||
      !/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g.test(
        phone
      )
    ) {
      setNameError(false);
      setEmailError(false);
      setPhoneError(true);
      return;
    } else {
      setNameError(false);
      setEmailError(false);
      setPhoneError(false);
    }

    const url =
      "https://gmail.us18.list-manage.com/subscribe/post-json?u=327adead6d1dcca760057e3bf&amp;id=71b9573de3&amp;f_id=00ebc3e0f0";
    jsonp(
      `${url}&EMAIL=${email}&FNAME=${name}&PHONE=${phone}`,
      { param: "c" },
      (_, data) => {
        const { msg, result } = data;
        console.log("msg: ", msg, " | result: ", result);
        console.log(errorMsg);
        (msg.includes("e-mail") || msg.includes("email")) && result === "error"
          ? setEmailError(true)
          : setEmailError(false);
        result === "error"
          ? (setErrorMsg(
              "Algo deu errado :/ Por favor, revisa as informações e tenta novamente."
            ),
            console.log(result === "error"))
          : (setSuccessMsg("Inscrição realizada! :)"),
            setName(""),
            setEmail(""),
            setPhone(""),
            setTimeout(() => {
              setSuccessMsg(null);
            }, 2500));
      }
    );
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
        <span className={styles.input_wrap}>
          <label>
            Nome*
            <input
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
              // required
              placeholder="Teu nome..."
              name="FNAME"
              className={`${nameError ? styles.alertInput : null}`}
            />
          </label>
          <p className={`${nameError ? styles.alert : styles.hide}`}>
            Preenche este campo corretamente.
          </p>
        </span>
        <span className={styles.input_wrap}>
          <label>
            E-mail*
            <input
              type="mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              // required
              placeholder="Teu melhor e-mail..."
              name="EMAIL"
              className={`${emailError ? styles.alertInput : null}`}
            />
          </label>
          <p className={`${emailError ? styles.alert : styles.hide}`}>
            Preenche este campo corretamente.
          </p>
        </span>
        <span className={styles.input_wrap}>
          <label>
            Telefone*
            <input
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              // required
              placeholder="Teu número de telemóvel"
              name="PHONE"
              className={`${phoneError ? styles.alertInput : null}`}
            />
          </label>
          <p className={`${phoneError ? styles.alert : styles.hide}`}>
            Preenche este campo corretamente.
          </p>
        </span>
        <p className={styles.error}>{errorMsg && errorMsg}</p>
        <p className={styles.success}>{successMsg && successMsg}</p>
        <input type="hidden" name="tags" value="1087905" />
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
