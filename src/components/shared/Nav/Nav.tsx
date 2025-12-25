import { Link } from "react-router-dom";
import styles from "./nav.module.scss";
import clsx from "clsx";

type Props = {
  className?: string;
};
export default function Nav({ className }: Props) {
  return (
    <nav className={clsx(styles.nav, className)}>
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
