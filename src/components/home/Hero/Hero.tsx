import clsx from "clsx";
import styles from "./hero.module.scss";
import getHeroData from "./services";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getProductById } from "../../../services/products";

type CSSVariables = {
  [key: `--${string}`]: string | undefined;
};

type StyleWithVars = React.CSSProperties & CSSVariables;

export default function Hero() {
  const { data } = useQuery({ queryKey: ["heroData"], queryFn: getHeroData });

  const { data: productData } = useQuery({
    queryKey: ["product", data?.productId],
    queryFn: () => getProductById(data?.productId ?? -1),
    enabled: Boolean(data),
  });

  const styleWithVars: StyleWithVars = {
    "--image-mobile": `url(${data?.imgMobile})`,
    "--image-tablet": `url(${data?.imgTablet})`,
    "--image-desktop": `url(${data?.imgDesktop})`,
  };

  return (
    <section className={styles.hero} style={styleWithVars}>
      <div className={clsx(styles.inner, "u-container")}>
        {productData?.isNew && (
          <span className={clsx(styles.newProduct, "overline")}>
            New Product
          </span>
        )}
        <h1 className={clsx(styles.title, "h1")}>{productData?.title || ""}</h1>
        <p className={clsx(styles.desc, "body")}>{data?.desc || ""}</p>
        <Link
          to={`/products/${data?.productId}`}
          className={clsx(styles.button, "button")}
        >
          See Product
        </Link>
      </div>
    </section>
  );
}
