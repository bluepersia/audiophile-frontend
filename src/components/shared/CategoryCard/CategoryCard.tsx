import { Link } from "react-router-dom";
import styles from "./category-card.module.scss";
import arrowImg from "../../../assets/shared/icon-arrow-right.svg";
import clsx from "clsx";

type Props = {
  category: "earphones" | "headphones" | "speakers";
};
export default function CategoryCard({ category }: Props) {
  return (
    <li className={styles.card}>
      <img
        className={styles.img}
        alt=""
        src={`/assets/shared/${category}-category.png`}
      />
      <h3 className={clsx(styles.title, "subtitle")}>{category}</h3>
      <Link
        to={`/category/${category}`}
        className={clsx(styles.shopLink, "subtitle")}
      >
        <span>Shop</span>
        <img src={arrowImg} className={styles.arrowImg} alt="" />
      </Link>
    </li>
  );
}
