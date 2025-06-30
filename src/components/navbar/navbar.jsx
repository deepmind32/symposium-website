import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";

import styles from "./navbar.module.css";
import Button from "../button/button";
import { useLocation } from "react-router";

// const menuItems = [
//   { href: "/", text: "HOME" },
//   { href: "/about-hainet", text: "ABOUT HAINet" },
//   { href: "/events-activities", text: "EVENTS & ACTIVITIES" },
//   { href: "/haicon", text: "HAICon" },
//   { href: "/publications", text: "PUBLICATIONS" },
// ];

// const cta_item = {
//   href: "/become-a-member",
//   text: "Become a Member",
// }

export default function Navbar({
  menu_items,
  cta_item,
  pictorial,
  wordmark = null,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation().pathname;

  const wordmark_image = wordmark ?? pictorial;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  console.log(menu_items);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link to="/">
        <img
          src={wordmark_image}
          alt="Hainet Logo"
          width={180}
          height={60}
          quality={100}
          className={styles.logo}
          style={{
            objectFit: "contain",
            height: "40px",
            width: "auto",
          }}
        />
        <img
          src={pictorial}
          alt="Symposium Logo"
          width={60}
          height={60}
          quality={100}
          className={styles.mobilelogo}
          style={{
            objectFit: "contain",
            height: "40px",
            width: "auto",
          }}
        />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.links}>
          {menu_items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`${styles.link} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.rightSection}>
        <a href={cta_item.href} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className={styles.primaryButton}>
            {cta_item.text}
          </Button>
        </a>
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
        >
          <ul className={styles.mobileLinks}>
            {menu_items.map((item, index) => (
              <li key={item.href}>
                {index > 0 && <hr className={styles.mobileDivider} />}
                <Link
                  to={item.href}
                  className={`${styles.link} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                  onClick={closeMenu}
                >
                  <div className={styles.mobileLinkContent}>
                    {item.text}
                    <HiArrowRight size={20} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileMenuButton}>
            <a href={cta_item.href} onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">{cta_item.text}</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
