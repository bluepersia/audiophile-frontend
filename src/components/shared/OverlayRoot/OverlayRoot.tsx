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
  function onBodyClick(e: MouseEvent) {
    const target = e.target;

    if (!(target instanceof Element)) return;

    if (!target.closest("#mobile-menu")) {
      uiContext?.setIsMobileMenuOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    document.body.addEventListener("click", onBodyClick);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.body.removeEventListener("click", onBodyClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
