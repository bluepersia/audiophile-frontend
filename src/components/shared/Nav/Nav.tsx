import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="." className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="headphones" className={styles.link}>
            Headphones
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="speakers" className={styles.link}>
            Speakers
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="earphones" className={styles.link}>
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
}
