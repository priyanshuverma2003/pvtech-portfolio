'use client';

import { Briefcase, GraduationCap, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>[ 01 // CAREER & EDUCATION ]</span>
          <h2 className={styles.sectionTitle}>EXPERIENCE & BACKGROUND</h2>
        </div>

        <div className={styles.grid}>
          {/* Internship Experience Card */}
          <TiltCard className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Briefcase size={22} className={styles.accentIcon} />
              </div>
              <div>
                <span className={styles.roleTag}>INTERNSHIP EXPERIENCE</span>
                <h3 className={styles.cardTitle}>Ascention Corporation</h3>
                <p className={styles.roleTitle}>Web Development Intern</p>
              </div>
              <div className={styles.dateBadge}>
                <Calendar size={14} />
                <span>July 2025 – August 2025</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <ul className={styles.bulletList}>
                <li>
                  <CheckCircle2 size={16} className={styles.bulletIcon} />
                  <span>Built responsive UI components and page layouts using HTML, CSS, and JavaScript; optimized designs for cross-device compatibility.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className={styles.bulletIcon} />
                  <span>Integrated frontend modules with backend REST APIs, handled JSON data, and improved data rendering performance.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className={styles.bulletIcon} />
                  <span>Implemented interactive elements including form validation, dynamic content loading, and reusable components.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className={styles.bulletIcon} />
                  <span>Improved performance by optimizing CSS/JS, compressing assets, and cleaning DOM structures.</span>
                </li>
              </ul>

              <div className={styles.techPills}>
                <span className={styles.pill}>HTML5</span>
                <span className={styles.pill}>CSS3</span>
                <span className={styles.pill}>JavaScript</span>
                <span className={styles.pill}>REST APIs</span>
                <span className={styles.pill}>DOM Optimization</span>
              </div>
            </div>
          </TiltCard>

          {/* Education Card */}
          <TiltCard className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBoxPurple}>
                <GraduationCap size={22} className={styles.purpleIcon} />
              </div>
              <div>
                <span className={styles.roleTagPurple}>DEGREE EDUCATION</span>
                <h3 className={styles.cardTitle}>Mangalmay Institute of Management and Technology</h3>
                <p className={styles.roleTitle}>Bachelor's in Computer Applications (BCA)</p>
              </div>
              <div className={styles.dateBadge}>
                <Calendar size={14} />
                <span>Graduated June 2025</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.gpaHighlight}>
                <span className={styles.gpaLabel}>ACADEMIC PERFORMANCE</span>
                <div className={styles.gpaValue}>
                  <span>7.6</span> <small>/ 10 GPA</small>
                </div>
              </div>

              <p className={styles.eduDesc}>
                Comprehensive academic background covering Data Structures, Web Engineering, Database Management Systems (SQL), Software Architecture, and Full-Stack Application Design.
              </p>

              <div className={styles.techPills}>
                <span className={styles.pillPurple}>Computer Applications</span>
                <span className={styles.pillPurple}>Web Technologies</span>
                <span className={styles.pillPurple}>Database Systems</span>
                <span className={styles.pillPurple}>Software Design</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
