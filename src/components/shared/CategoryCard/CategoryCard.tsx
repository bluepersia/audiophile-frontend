import { Link } from "react-router-dom";
import styles from "./category-card.module.scss";
import arrowImg from "../../../assets/shared/icon-arrow-right.svg";

type Props = {
  category: "earphones" | "headphones" | "speakers";
};
export default function CategoryCard({ category }: Props) {
  return (
    <li className={styles.card}>
      <img className={styles.img} alt="" src={`${category}-category.png`} />
      <h3 className={styles.title}>{category}</h3>
      <Link to={`/category/${category}`}>
        Shop
        <img src={arrowImg} className={styles.arrowImg} alt="" />
      </Link>
    </li>
  );
}
