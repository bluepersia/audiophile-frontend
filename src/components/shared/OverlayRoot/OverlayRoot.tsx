import { useContext } from "react";

import styles from "./overlay-root.module.scss";
import { UIContext } from "../../../contexts/UIProvider";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function OverlayRoot() {
  const uiContext = useContext(UIContext);

  const isOpen = uiContext?.isMobileMenuOpen;

  return (
    isOpen && (
      <div className={styles.overlayRoot}>
        {uiContext.isMobileMenuOpen && <MobileMenu />}
      </div>
    )
  );
}
