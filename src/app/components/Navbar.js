import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href={"#"}>início</Link>
        <Link href={"#about"}>sobre nós</Link>
        <Link href={"#contact"}>contacto</Link>
        <Link href={"#location"}>localização</Link>
      </div>
    </nav>
  );
};

export default Navbar;
