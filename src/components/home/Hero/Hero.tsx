import clsx from "clsx";
import styles from "./hero.module.scss";
import getHeroData from "./services";
import { useQuery } from "@tanstack/react-query";

type CSSVariables = {
  [key: `--${string}`]: string | undefined;
};

type StyleWithVars = React.CSSProperties & CSSVariables;

export default function Hero() {
  const { data } = useQuery({ queryKey: ["heroData"], queryFn: getHeroData });

  const styleWithVars: StyleWithVars = {
    "--image-mobile": `url(${data?.imgMobile})`,
    "--image-tablet": `url(${data?.imgTablet})`,
    "--image-desktop": `url(${data?.imgDesktop})`,
  };

  return (
    <section className={styles.hero} style={styleWithVars}>
      <span className={clsx(styles.newProduct, "overline")}>New Product</span>
      <h1 className={clsx(styles.title, "h3")}>{data?.title || ""}</h1>
      <p className={clsx(styles.desc, "body")}>{data?.desc || ""}</p>
      <button className={clsx(styles.button, "button")}>See Product</button>
    </section>
  );
}
