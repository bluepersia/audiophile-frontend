import styles from "./about.module.scss";
import imgMobile from "../../../assets/shared/mobile/image-best-gear.jpg";
import imgTablet from "../../../assets/shared/tablet/image-best-gear.jpg";
import imgDesktop from "../../../assets/shared/desktop/image-best-gear.jpg";
import clsx from "clsx";

export default function About() {
  return (
    <section className={clsx(styles.about, "u-container")}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Bringing you the <span className={styles.highlight}>best</span> audio
          gear
        </h2>
        <p className={clsx(styles.desc, "body")}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className={styles.img}>
        <source srcSet={imgDesktop} media="(min-width: 1200px)" />
        <source srcSet={imgTablet} media="(min-width: 768px)" />
        <img
          src={imgMobile}
          alt="Young man wearing headphones, listening to music"
        />
      </picture>
    </section>
  );
}
