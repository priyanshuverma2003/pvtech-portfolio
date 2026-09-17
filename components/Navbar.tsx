'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Palette, Moon, Sun, Monitor } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('obsidian');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <a href="#hero" className={styles.logo} data-cursor="PV.TECH">
          <Terminal size={22} className={styles.logoIcon} />
          <span className={styles.logoText}>
            PV<span className={styles.logoDot}>.TECH</span>
          </span>
          <span className={styles.tagBadge}>PORTFOLIO</span>
        </a>

        {/* Desktop Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link, idx) => (
            <a key={link.name} href={link.href} className={styles.navLink} data-cursor={link.name.toUpperCase()}>
              <span className={styles.linkIndex}>0{idx + 1}.</span> {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions & Theme Switcher */}
        <div className={styles.navRight}>
          {/* Theme Selector Toggle */}
          <div className={styles.themeGroup}>
            <button
              onClick={() => changeTheme(currentTheme === 'obsidian' ? 'monochrome' : currentTheme === 'monochrome' ? 'cyber' : 'obsidian')}
              className={styles.themeBtn}
              title={`Current Theme: ${currentTheme.toUpperCase()} (Click to toggle)`}
              data-cursor="THEME"
            >
              <Palette size={16} />
              <span className={styles.themeLabel}>{currentTheme.toUpperCase()}</span>
            </button>
          </div>

          <a href="#contact" className={styles.ctaButton} data-cursor="CONTACT">
            <span>LET'S TALK</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className={styles.linkIndex}>0{idx + 1}.</span> {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT PRIYANSHU <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}
