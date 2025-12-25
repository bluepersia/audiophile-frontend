import clsx from "clsx";
import styles from "./hero.module.scss";
import getHeroData from "./services";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={clsx(styles.newProduct, "overline")}>New Product</span>
      <h1 className={styles.title}></h1>
    </section>
  );
}
