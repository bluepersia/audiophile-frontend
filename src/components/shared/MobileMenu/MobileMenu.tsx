import clsx from "clsx";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./mobile-menu.module.scss";

export default function MobileMenu() {
  return (
    <div className={clsx(styles.wrapper)}>
      <ul
        className={clsx(styles.mobileMenu, "categories-list")}
        id="mobile-menu"
      >
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </ul>
    </div>
  );
}
