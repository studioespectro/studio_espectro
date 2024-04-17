import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href={"#"}>início</Link>
        <Link href={"#"}>sobre nós</Link>
        <Link href={"#"}>contacto</Link>
        <Link href={"#"}>localização</Link>
      </div>
    </nav>
  );
};

export default Navbar;
