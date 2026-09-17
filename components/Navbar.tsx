'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <a href="#hero" className={styles.logo}>
          <Terminal size={22} className={styles.logoIcon} />
          <span className={styles.logoText}>
            PV<span className={styles.logoDot}>.TECH</span>
          </span>
          <span className={styles.tagBadge}>PORTFOLIO</span>
        </a>

        {/* Desktop Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link, idx) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              <span className={styles.linkIndex}>0{idx + 1}.</span> {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className={styles.navRight}>
          <a href="#contact" className={styles.ctaButton}>
            <span>LET'S TALK</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
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
