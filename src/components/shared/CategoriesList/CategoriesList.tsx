import clsx from "clsx";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./categories-list.module.scss";

type Props = React.ComponentPropsWithoutRef<"ul"> & {
  className?: string;
};
export default function CategoriesList({ className, ...rest }: Props) {
  return (
    <ul className={clsx(className, styles.categoriesList)} {...rest}>
      <CategoryCard category="headphones" />
      <CategoryCard category="speakers" />
      <CategoryCard category="earphones" />
    </ul>
  );
}
