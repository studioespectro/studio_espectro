"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../hooks/Context";

const Navbar = () => {
  const { menu, setMenu } = useContext(Context);
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.content}>
          <Link href={"#home"}>início</Link>
          <Link href={"#about"}>sobre nós</Link>
          <Link href={"#contact"}>contacto</Link>
          <Link href={"#location"}>localização</Link>
        </div>
      </nav>
      <div className={styles.menu}>
        <Image
          src={"/assets/menu_light.png"}
          width={23}
          height={34}
          alt="menu"
          onClick={() => setMenu(true)}
        />
      </div>
    </>
  );
};

export default Navbar;
