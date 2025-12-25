import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./mobile-menu.module.scss";

export default function MobileMenu() {
  return (
    <ul className={styles.mobileMenu}>
      <CategoryCard category="headphones" />
      <CategoryCard category="speakers" />
      <CategoryCard category="earphones" />
    </ul>
  );
}
