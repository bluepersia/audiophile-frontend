import styles from "./header.module.scss";
import mobileMenuBtn from "../../../assets/shared/mobileMenuBtn.png";
import logo from "../../../assets/shared/logo.png";
import Nav from "../Nav/Nav";
export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} aria-label="Toggle mobile menu">
        <img className={styles.menuIcon} alt="" src={mobileMenuBtn} />
      </button>
      <img className={styles.logo} alt="Audiophile" src={logo} />
      <Nav />
    </header>
  );
}
