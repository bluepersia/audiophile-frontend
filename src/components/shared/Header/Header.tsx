import styles from "./header.module.scss";
import mobileMenuBtn from "../../../assets/shared/mobileMenuBtn.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} aria-label="Toggle mobile menu">
        <img className={styles.menuIcon} alt="" src={mobileMenuBtn} />
      </button>
    </header>
  );
}
