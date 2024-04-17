import Image from "next/image";
import styles from "./Button.module.css";

const Button = ({ color }) => {
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

  return (
    <button
      className={styles.button}
      style={{
        borderColor: text,
        color: text,
        backgroundColor: backgorund,
        boxShadow: `5px 10px 0 0 ${shadow}`,
      }}
    >
      inscreve-te <span>|</span>
      <Image
        src={`/assets/click_${icon}.png`}
        width={27}
        height={35}
        alt="ícone"
      />
    </button>
  );
};

export default Button;
