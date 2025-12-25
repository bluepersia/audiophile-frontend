import { useContext, useEffect, useState } from "react";

import styles from "./overlay-root.module.scss";
import { UIContext } from "../../../contexts/UIProvider";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function OverlayRoot() {
  const uiContext = useContext(UIContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function onWindowResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  const isMobileMenuOpen = uiContext?.isMobileMenuOpen && windowWidth < 1200;
  const isOpen = isMobileMenuOpen;

  return (
    isOpen && (
      <div className={styles.overlayRoot}>
        {isMobileMenuOpen && <MobileMenu />}
      </div>
    )
  );
}
