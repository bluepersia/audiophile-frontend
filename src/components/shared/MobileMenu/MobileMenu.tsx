import clsx from "clsx";
import styles from "./mobile-menu.module.scss";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useEffect, useRef } from "react";

export default function MobileMenu() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div
      ref={ref}
      className={clsx(styles.wrapper)}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Nav Menu"
      onClick={(e) => e.stopPropagation()}
    >
      <CategoriesList className={styles.mobileMenu} />
    </div>
  );
}
