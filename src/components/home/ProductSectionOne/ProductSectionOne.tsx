import { Link } from "react-router-dom";
import styles from "./product-section-one.module.scss";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../services/products";
type Props = {
  imgMobile: string;
  imgTablet: string;
  imgDesktop: string;
  desc: string;
  productId: number;
};
export default function ProductSectionOne({
  imgMobile,
  imgTablet,
  imgDesktop,
  desc,
  productId,
}: Props) {
  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  return (
    <section className={styles.productSectionOne}>
      <picture className={styles.img}>
        <source srcSet={imgDesktop} media="(min-width: 1200px)" />
        <source srcSet={imgTablet} media="(min-width: 768px)" />
        <img src={imgMobile} alt={data?.title} />
      </picture>
      <h2 className={clsx(styles.title, "h1")}>{data?.title}</h2>
      <p className={clsx(styles.desc, "body")}>{desc}</p>
      <Link
        to={`/products/${productId}`}
        className={clsx(styles.button, "button", "button--black")}
      >
        See Product
      </Link>
    </section>
  );
}
