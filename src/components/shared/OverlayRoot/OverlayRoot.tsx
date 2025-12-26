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
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      uiContext?.setIsMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isMobileMenuOpen = uiContext?.isMobileMenuOpen && windowWidth < 1200;
  const isOpen = isMobileMenuOpen;

  return (
    isOpen && (
      <div
        className={styles.overlayRoot}
        onClick={() => uiContext.setIsMobileMenuOpen(false)}
      >
        {isMobileMenuOpen && <MobileMenu />}
      </div>
    )
  );
}
