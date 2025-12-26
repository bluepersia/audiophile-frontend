import { useQuery } from "@tanstack/react-query";
import styles from "./product-section-two.module.scss";
import { getProductById } from "../../../services/products";
import clsx from "clsx";
import { Link } from "react-router-dom";
import type { StyleWithVars } from "../../../utils/styleVars";

type Props = {
  imgMobile: string;
  imgTablet: string;
  imgDesktop: string;
  productId: number;
};
export default function ProductSectionTwo({
  productId,
  imgMobile,
  imgTablet,
  imgDesktop,
}: Props) {
  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  const style: StyleWithVars = {
    "--image-mobile": `url(${imgMobile})`,
    "--image-tablet": `url(${imgTablet})`,
    "--image-desktop": `url(${imgDesktop})`,
  };

  return (
    <section className={styles.productSectionTwo} style={style}>
      <h2 className={clsx(styles.title, "h4")}>{data?.title}</h2>
      <Link
        to={`/products/${productId}`}
        className={clsx(styles.button, "button", "button--transparent")}
      >
        See Product
      </Link>
    </section>
  );
}
