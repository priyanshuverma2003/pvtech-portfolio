'use client';

import { ArrowDownRight, FileText, Sparkles, MapPin, Zap, Layers, Award, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import styles from './Hero.module.css';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#ffffff', '#10b981'],
    });
  };

  const stats = [
    { label: 'FEATURED PROJECTS', value: '02', icon: Layers },
    { label: 'INTERNSHIP EXP', value: '01', icon: Terminal },
    { label: 'ACADEMIC GPA', value: '7.6', icon: Zap },
    { label: 'CERTIFICATIONS', value: '04', icon: Award },
  ];

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Editorial Header Status */}
        <div className={styles.metaRow}>
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>AVAILABLE FOR HIRE // FULL STACK & FRONTEND</span>
          </div>

          <div className={styles.locationBadge}>
            <MapPin size={14} className={styles.locationIcon} />
            <span>DELHI, INDIA</span>
          </div>

          <div className={styles.agencyTag}>
            <span>[ DIGITAL PORTFOLIO 2026 ]</span>
          </div>
        </div>

        {/* BBDO Style Giant Kinetic Headline */}
        <div className={styles.headlineWrapper}>
          <div className={styles.eyebrow}>
            <span>CREATIVE DEVELOPER // WEB ARCHITECT</span>
          </div>
          
          <h1 className={styles.mainTitle}>
            PRIYANSHU <br />
            <span className={styles.strokeText}>VERMA</span>
          </h1>

          <p className={styles.subTitle}>
            Engineering next-generation web applications, ultra-responsive UI interfaces, and high-performance full-stack architectures.
          </p>
        </div>

        {/* Action Controls */}
        <div className={styles.ctaRow}>
          <a href="#projects" className={styles.primaryCta} data-cursor="EXPLORE">
            <span>EXPLORE FEATURED WORKS</span>
            <ArrowDownRight size={18} />
          </a>

          <button
            onClick={triggerConfetti}
            className={styles.secondaryCta}
            data-cursor="DOWNLOAD"
            title="Download CV Highlights"
          >
            <FileText size={18} />
            <span>GET CV HIGHLIGHTS</span>
            <Sparkles size={16} className={styles.sparkleIcon} />
          </button>
        </div>

        {/* BBDO Stats Matrix Bar */}
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={styles.statBox}>
                <div className={styles.statHeader}>
                  <Icon size={16} className={styles.statIcon} />
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Running Agency Ticker */}
        <div className={styles.tickerContainer}>
          <div className={styles.tickerTrack}>
            <span>NEXT.JS // THREE.JS 3D // VANILLA CSS // FULL-STACK REACT // ASCENTION CORP INTERN // KIRTI4ARTS // AMAZON CLONE // BCA TOPPER // </span>
            <span>NEXT.JS // THREE.JS 3D // VANILLA CSS // FULL-STACK REACT // ASCENTION CORP INTERN // KIRTI4ARTS // AMAZON CLONE // BCA TOPPER // </span>
          </div>
        </div>
      </div>
    </section>
  );
}
