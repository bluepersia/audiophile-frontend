import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../services/products";
import styles from "./product-section-three.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  productId: number;
  imgMobile: string;
  imgTablet: string;
  imgDesktop: string;
};

export default function ProductSectionThree({
  productId,
  imgMobile,
  imgTablet,
  imgDesktop,
}: Props) {
  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  return (
    <section className={styles.productSectionThree}>
      <picture className={styles.img}>
        <source srcSet={imgDesktop} media="(min-width: 1200px)" />
        <source srcSet={imgTablet} media="(min-width: 768px)" />
        <img src={imgMobile} alt={data?.title} />
      </picture>
      <div className={styles.content}>
        <h2 className={clsx(styles.title, "h4")}>{data?.title}</h2>
        <Link
          to={`/products/${data?.id}`}
          className={clsx(styles.button, "button", "button--transparent")}
        >
          See Product
        </Link>
      </div>
    </section>
  );
}
