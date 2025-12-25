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
          <Link to="." className={clsx(styles.link, "subtitle")}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="headphones" className={clsx(styles.link, "subtitle")}>
            Headphones
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="speakers" className={clsx(styles.link, "subtitle")}>
            Speakers
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="earphones" className={clsx(styles.link, "subtitle")}>
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
}
