"use client";
import Image from "next/image";
import styles from "./Button.module.css";
import { useRouter } from "next/navigation";

const Button = ({ color, content, type, href }) => {
  const router = useRouter();
  let text;
  let backgorund;
  let shadow;
  let icon;

  if (color === "light") {
    text = "var(--dark_gray)";
    backgorund = "var(--light_gray)";
    shadow = "#909090";
    icon = "dark";
  } else {
    text = "var(--light_gray)";
    backgorund = "var(--dark_gray)";
    shadow = "#1B1C1C";
    icon = "light";
  }

  const handleClick = () => {
    href ? router.push(href) : null;
  };

  return (
    <button
      className={styles.button}
      style={{
        borderColor: text,
        color: text,
        backgroundColor: backgorund,
        boxShadow: `5px 10px 0 0 ${shadow}`,
      }}
      type={type ? type : null}
      onClick={handleClick}
    >
      {content}
      {content === "inscreve-te" ? (
        <>
          <span>|</span>
          <Image
            src={`/assets/click_${icon}.png`}
            width={27}
            height={35}
            alt="ícone"
            className={styles.icon}
          />
        </>
      ) : null}
    </button>
  );
};

export default Button;
