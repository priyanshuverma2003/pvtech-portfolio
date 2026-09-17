'use client';

import { ShieldCheck, Award, Trophy, BookmarkCheck, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Certifications.module.css';

export default function Certifications() {
  const certs = [
    {
      id: 'CERT-01',
      title: 'Cyber Security Certification',
      issuer: 'Innovative Ideas Infotech & AKTU UP Police',
      icon: ShieldCheck,
      color: 'cyan',
      tag: 'SECURITY & RECON',
      desc: 'Specialized training covering cyber threats, network security protocols, vulnerability analysis, and digital defense mechanisms.',
    },
    {
      id: 'CERT-02',
      title: 'Advance Excel Certification',
      issuer: 'E ICT Academy, IIT Kanpur',
      icon: Award,
      color: 'purple',
      tag: 'DATA ANALYSIS',
      desc: 'Advanced data modeling, macro automation, financial analytics, complex formulas, and data visualization techniques.',
    },
    {
      id: 'CERT-03',
      title: 'Placement Preparation Programme',
      issuer: 'Abhyuday, IIT Bombay',
      icon: BookmarkCheck,
      color: 'cyan',
      tag: 'PROFESSIONAL EXCELLENCE',
      desc: 'Comprehensive training program on data structures, algorithmic problem solving, mock technical interviews, and corporate communication.',
    },
    {
      id: 'HONOR-01',
      title: 'BCA Semester 1 Topper Award',
      issuer: 'Mangalmay Institute (78.33% Score)',
      icon: Trophy,
      color: 'gold',
      tag: 'ACADEMIC HONOR',
      desc: 'Ranked 1st in Semester 1 Examination with an outstanding score of 78.33%, demonstrating academic rigor and computer science fundamentals.',
    },
  ];

  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>[ 04 // HONORS & CREDENTIALS ]</span>
          <h2 className={styles.sectionTitle}>CERTIFICATIONS & AWARDS</h2>
        </div>

        {/* Certifications Grid */}
        <div className={styles.grid}>
          {certs.map((c) => {
            const IconComponent = c.icon;
            return (
              <TiltCard key={c.id} className={styles.certCard}>
                <div className={styles.topRow}>
                  <span className={styles.certId}>[{c.id}]</span>
                  <span className={c.color === 'gold' ? styles.tagGold : styles.tagCyan}>
                    {c.tag}
                  </span>
                </div>

                <div className={styles.titleRow}>
                  <div
                    className={
                      c.color === 'gold'
                        ? styles.iconWrapGold
                        : c.color === 'purple'
                        ? styles.iconWrapPurple
                        : styles.iconWrapCyan
                    }
                  >
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className={styles.certTitle}>{c.title}</h3>
                    <p className={styles.certIssuer}>{c.issuer}</p>
                  </div>
                </div>

                <p className={styles.certDesc}>{c.desc}</p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
