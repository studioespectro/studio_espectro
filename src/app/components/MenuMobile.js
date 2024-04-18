"use client";
import Image from "next/image";
import styles from "./MenuMobile.module.css";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../hooks/Context";

const MenuMobile = () => {
  const { menu, setMenu } = useContext(Context);

  const handleClick = () => {
    setMenu(false);
  };

  return (
    <>
      {menu && (
        <nav className={styles.container}>
          <div className={styles.content}>
            <Image
              src="/assets/menu_dark.png"
              width={15}
              height={23}
              alt="menu"
              className={styles.menu}
              onClick={() => setMenu(false)}
            />
            <div className={styles.links}>
              <Link href={"#about"} onClick={handleClick}>
                <div className={styles.line}>
                  <div className={styles.upside}>
                    sobre nós
                    <Image
                      src={"/assets/arrow_menu.png"}
                      width={39}
                      height={39}
                      alt="seta"
                    />
                  </div>
                  <Image
                    src={"/assets/line1.png"}
                    width={316}
                    height={5}
                    alt="linhas"
                    className={styles.underline}
                  />
                </div>
              </Link>
              <Link href={"#contact"} onClick={handleClick}>
                <div className={styles.line}>
                  <div className={styles.upside}>
                    contacto
                    <Image
                      src={"/assets/arrow_menu.png"}
                      width={39}
                      height={39}
                      alt="seta"
                    />
                  </div>
                  <Image
                    src={"/assets/line2.png"}
                    width={316}
                    height={5}
                    alt="linhas"
                    className={styles.underline}
                  />
                </div>
              </Link>
              <Link href={"#location"} onClick={handleClick}>
                <div className={styles.line}>
                  <div className={styles.upside}>
                    localização
                    <Image
                      src={"/assets/arrow_menu.png"}
                      width={39}
                      height={39}
                      alt="seta"
                    />
                  </div>
                  <Image
                    src={"/assets/lines3.png"}
                    width={339}
                    height={36}
                    alt="linhas"
                    className={styles.underline}
                  />
                </div>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
