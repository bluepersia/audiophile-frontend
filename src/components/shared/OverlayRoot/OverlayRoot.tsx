import { useContext } from "react";

import styles from "./overlay-root.module.scss";
import { UIContext } from "../../../contexts/UIProvider";

export default function OverlayRoot() {
  const uiContext = useContext(UIContext);

  return <div className={styles.overlayRoot}></div>;
}
