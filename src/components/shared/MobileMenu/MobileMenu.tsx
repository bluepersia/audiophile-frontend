import clsx from "clsx";
import styles from "./mobile-menu.module.scss";
import CategoriesList from "../CategoriesList/CategoriesList";

export default function MobileMenu() {
  return (
    <div className={clsx(styles.wrapper)}>
      <CategoriesList className={styles.mobileMenu} />
    </div>
  );
}
