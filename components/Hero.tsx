'use client';

import { ArrowDownRight, FileText, Sparkles, MapPin, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import styles from './Hero.module.css';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#ffffff'],
    });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Status Index & Holarchive Header */}
        <div className={styles.metaRow}>
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>AVAILABLE FOR FULL-STACK & FRONTEND ROLES</span>
          </div>

          <div className={styles.locationBadge}>
            <MapPin size={14} className={styles.locationIcon} />
            <span>DELHI, INDIA</span>
          </div>

          <div className={styles.archiveIndex}>
            <span>[ ARCHIVE ID: PV-2025 ]</span>
          </div>
        </div>

        {/* BBDO Style Oversized Headline */}
        <div className={styles.headlineWrapper}>
          <h1 className={styles.mainTitle}>
            PRIYANSHU <br />
            <span className={styles.gradientText}>VERMA</span>
          </h1>
          <p className={styles.subTitle}>
            Full-Stack & Frontend Creative Developer crafting ultra-responsive web apps, dynamic REST APIs, and immersive digital interfaces.
          </p>
        </div>

        {/* Action Controls */}
        <div className={styles.ctaRow}>
          <a href="#projects" className={styles.primaryCta}>
            <span>EXPLORE WORK</span>
            <ArrowDownRight size={18} />
          </a>

          <button
            onClick={triggerConfetti}
            className={styles.secondaryCta}
            title="Download Resume Highlights"
          >
            <FileText size={18} />
            <span>GET CV HIGHLIGHTS</span>
            <Sparkles size={16} className={styles.sparkleIcon} />
          </button>
        </div>

        {/* Ticker Marquee Bar */}
        <div className={styles.tickerContainer}>
          <div className={styles.tickerTrack}>
            <span>NEXT.JS // VANILLA CSS // THREE.JS // NODE.JS // MONGODB // AMAZON CLONE // KIRTI4ARTS // ASCENTION CORP INTERN // BCA 7.6 GPA // </span>
            <span>NEXT.JS // VANILLA CSS // THREE.JS // NODE.JS // MONGODB // AMAZON CLONE // KIRTI4ARTS // ASCENTION CORP INTERN // BCA 7.6 GPA // </span>
          </div>
        </div>
      </div>
    </section>
  );
}
