import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import OverlayRoot from "../OverlayRoot/OverlayRoot";
import UIProvider from "../../../contexts/UIProvider";
import styles from "./layout.module.scss";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <UIProvider>
      <Header />
      <main className={styles.main}>
        <Outlet />
        <OverlayRoot />
      </main>
      <Footer />
    </UIProvider>
  );
}
