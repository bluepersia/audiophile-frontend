import styles from "./header.module.scss";
import mobileMenuBtn from "../../../assets/shared/mobileMenuBtn.png";
import logo from "../../../assets/shared/logo.png";
import cartIcon from "../../../assets/shared/cartIcon.png";
import Nav from "../Nav/Nav";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UIContext } from "../../../contexts/UIProvider";
export default function Header() {
  const uiContext = useContext(UIContext);

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.inner, "u-container")}>
        <button
          onClick={() => uiContext?.setIsMobileMenuOpen((prev) => !prev)}
          className={styles.menuBtn}
          aria-label="Toggle mobile menu"
          aria-expanded={uiContext?.isMobileMenuOpen}
          aria-haspopup={true}
          aria-controls="mobile-menu"
        >
          <img className={styles.menuIcon} alt="" src={mobileMenuBtn} />
        </button>
        <Link to="/">
          <img className={styles.logo} alt="Audiophile" src={logo} />
        </Link>
        <Nav className={styles.nav} />
        <button className={styles.cartBtn} aria-label="Toggle cart">
          <img className={styles.cartIcon} alt="" src={cartIcon} />
        </button>
      </div>
    </header>
  );
}
