import clsx from "clsx";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./categories-list.module.scss";

type Props = {
  className?: string;
};
export default function CategoriesList({ className }: Props) {
  return (
    <ul className={clsx(className, styles.categoriesList)} id="mobile-menu">
      <CategoryCard category="headphones" />
      <CategoryCard category="speakers" />
      <CategoryCard category="earphones" />
    </ul>
  );
}
