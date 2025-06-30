import { Routes, Route, Link, HashRouter } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import DataHubPage from "./pages/datahub/datahub";
import SymposiumPage from "./pages/symposium/symposium";

import styles from "./app.module.css";

const menu_items = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About PriFed" },
  { href: "/datahub", text: "DataHub" },
  { href: "/symposium", text: "Symposium" },
];

const cta_item = {
  href: "https://forms.gle/gpUVx16gSf5jsM5x7",
  text: "Register Now",
};

export default function App() {
  return (
    <HashRouter>
      <Navbar
        menu_items={menu_items}
        cta_item={cta_item}
        pictorial="/pictorial.png"
        wordmark="/logo--white.png"
      />

      <div className={styles["main-wrapper"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/datahub" element={<DataHubPage />} />
          <Route path="/symposium" element={<SymposiumPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
