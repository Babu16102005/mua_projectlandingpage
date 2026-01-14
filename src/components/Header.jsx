import { useState } from "react"
import styles from "./Header.module.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>Demo</span>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li><a href="#why-us" onClick={closeMenu}>Why us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
            <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        {/* Header Actions (UNCHANGED ICONS) */}
        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search Food..." />
            <button className={styles.searchBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          <button className={`${styles.iconBtn} ${styles.cartBtn}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className={styles.cartBadge}>0</span>
          </button>

          <button className={`${styles.iconBtn} ${styles.loginBtn}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className={styles.loginText}>Login / Sign Up</span>
          </button>
        </div>

        {/* Hamburger (RIGHT SIDE) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
